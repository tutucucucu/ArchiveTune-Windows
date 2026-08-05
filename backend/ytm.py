import os
import re
import threading
import time

import yt_dlp
from ytmusicapi import YTMusic
from ytmusicapi.helpers import nav
from ytmusicapi.mixins.charts import SECTION_LIST, SINGLE_COLUMN_TAB

from library import get_settings, save_settings

_client = None
_client_lock = threading.Lock()

STREAM_CACHE = {}
STREAM_TTL = 5 * 3600


def get_client():
    global _client
    with _client_lock:
        settings = get_settings()
        cookie = (settings.get("ytm_cookie") or "").strip()
        if _client is None:
            if cookie:
                try:
                    _client = YTMusic("oauth.json" if False else None)
                except Exception:
                    _client = None
            try:
                _client = YTMusic() if not cookie else YTMusic(auth=cookie)
            except Exception:
                _client = YTMusic()
        return _client


def reset_client():
    global _client
    _client = None


def _thumb(thumbs):
    if not thumbs:
        return None
    t = thumbs[-1]
    return _hd(t.get("url"))


def _hd(url):
    """Upgrade thumbnail URLs to the highest available resolution."""
    if not url:
        return url
    for low, high in (("hqdefault", "maxresdefault"), ("mqdefault", "maxresdefault"), ("sddefault", "maxresdefault")):
        if low in url:
            return url.replace(low, high)
    m = re.search(r"=w\d+(?:-h\d+)?(?:-[a-z0-9]+)*$", url)
    if m:
        return url[: m.start()] + "=w544-h544-l90-rj"
    m = re.search(r"=s\d+(?:-c)?$", url)
    if m:
        return url[: m.start()] + "=w544-h544-l90-rj"
    return url


def _artist_name(artists):
    if not artists:
        return "Unknown Artist"
    return ", ".join(a.get("name", "") for a in artists if a.get("name"))


def _parse_dur(value):
    if not value:
        return 0
    if isinstance(value, int):
        return value
    parts = [int(p) for p in str(value).split(":") if p]
    if not parts:
        return 0
    sec = 0
    for p in parts:
        sec = sec * 60 + p
    return sec


def _artists_list(artists):
    if not artists:
        return []
    return [{"name": a.get("name", ""), "browseId": a.get("id")} for a in artists if a.get("name")]


def _song_from_ytm(y):
    video_id = y.get("videoId") or y.get("videoId")
    if not video_id:
        return None
    return {
        "id": "ytm:" + video_id,
        "videoId": video_id,
        "title": y.get("title") or y.get("name") or "Unknown",
        "artist": _artist_name(y.get("artists")),
        "artists": _artists_list(y.get("artists")),
        "album": (y.get("album") or {}).get("name") if isinstance(y.get("album"), dict) else (y.get("album") or "Unknown"),
        "duration": y.get("duration_seconds") or _parse_dur(y.get("length")) or 0,
        "art": _thumb(y.get("thumbnails") or y.get("thumbnail")),
        "browseId": (y.get("album") or {}).get("id") if isinstance(y.get("album"), dict) else None,
        "source": "ytm",
        "explicit": y.get("explicit") or False,
    }


def search(query, filter_type="songs", limit=25):
    try:
        res = get_client().search(query, filter=filter_type, limit=limit)
    except Exception:
        return {"items": [], "error": "YouTube Music search failed. If you are in a region without YouTube Music, use a VPN."}
    items = []
    for item in res:
        if filter_type == "songs":
            s = _song_from_ytm(item)
            if s:
                items.append(s)
        elif filter_type == "albums":
            items.append(
                {
                    "type": "album",
                    "browseId": item.get("browseId"),
                    "title": item.get("title"),
                    "artist": _artist_name(item.get("artists")),
                    "year": item.get("year"),
                    "art": _thumb(item.get("thumbnails")),
                }
            )
        elif filter_type == "artists":
            items.append(
                {
                    "type": "artist",
                    "browseId": item.get("browseId"),
                    "name": item.get("artist"),
                    "subscribers": item.get("subscribers"),
                    "art": _thumb(item.get("thumbnails")),
                }
            )
        elif filter_type == "videos":
            s = _song_from_ytm(item)
            if s:
                if not s.get("duration"):
                    s["duration"] = _parse_dur(item.get("duration"))
                s["album"] = "Video"
                items.append(s)
        elif filter_type == "playlists":
            items.append(
                {
                    "type": "playlist",
                    "browseId": item.get("browseId"),
                    "title": item.get("title"),
                    "artist": _artist_name(item.get("artists")),
                    "art": _thumb(item.get("thumbnails")),
                    "trackCount": item.get("trackCount") or item.get("resultType"),
                }
            )
    return {"items": items}


def get_song(video_id):
    try:
        info = get_client().get_song(video_id)
    except Exception as e:
        return {"error": str(e)}
    vd = info.get("videoDetails") or {}
    if not vd.get("videoId"):
        return {"error": "Song not found"}
    return {
        "id": "ytm:" + vd.get("videoId"),
        "videoId": vd.get("videoId"),
        "title": vd.get("title", "Unknown"),
        "artist": vd.get("author", "Unknown Artist"),
        "album": (info.get("microformat") or {}).get("musicSquareThumbnailRenderer") or "Unknown",
        "duration": int(vd.get("lengthSeconds") or 0),
        "art": (vd.get("thumbnail") or {}).get("thumbnails")[-1].get("url") if vd.get("thumbnail") else None,
        "source": "ytm",
        "playability": (info.get("playabilityStatus") or {}).get("status"),
    }


def get_album(browse_id):
    try:
        a = get_client().get_album(browse_id)
    except Exception as e:
        return {"error": str(e)}
    tracks = [t for t in (_song_from_ytm(t) for t in a.get("tracks", [])) if t]
    for t in tracks:
        t["album"] = a.get("title", "Unknown")
        t["browseId"] = browse_id
    return {
        "title": a.get("title"),
        "artist": _artist_name(a.get("artists")),
        "year": a.get("year"),
        "art": _thumb(a.get("thumbnails")),
        "description": a.get("description"),
        "trackCount": len(tracks),
        "tracks": tracks,
    }


def get_artist(browse_id):
    try:
        a = get_client().get_artist(browse_id)
    except Exception as e:
        return {"error": str(e)}
    albums = []
    for al in a.get("albums", {}).get("results", []):
        albums.append(
            {
                "browseId": al.get("browseId"),
                "title": al.get("title"),
                "year": al.get("year"),
                "art": _thumb(al.get("thumbnails")),
            }
        )
    return {
        "name": a.get("name"),
        "art": _thumb(a.get("thumbnails")),
        "subscribers": a.get("subscribers"),
        "description": a.get("description"),
        "monthlyListeners": a.get("monthlyListeners"),
        "views": a.get("views"),
        "radioId": a.get("radioId"),
        "shuffleId": a.get("shuffleId"),
        "albums": albums,
        "songs_browse_id": (a.get("songs") or {}).get("browseId"),
    }


def get_artist_songs(browse_id):
    """Top songs for an artist. ytmusicapi 1.12 removed get_artist_songs, so we
    resolve the artist's 'Top songs' playlist browse id and fetch it instead."""
    try:
        artist = get_client().get_artist(browse_id)
        songs_browse_id = (artist.get("songs") or {}).get("browseId")
        if not songs_browse_id:
            return {"error": "No top songs available for this artist"}
        p = get_client().get_playlist(songs_browse_id, limit=200)
    except Exception as e:
        return {"error": str(e)}
    songs = []
    for t in p.get("tracks", []):
        s = _song_from_ytm(t)
        if s:
            songs.append(s)
    return {"tracks": songs}


def get_playlist(browse_id):
    try:
        p = get_client().get_playlist(browse_id, limit=500)
    except Exception as e:
        return {"error": str(e)}
    tracks = [t for t in (_song_from_ytm(t) for t in p.get("tracks", [])) if t]
    return {
        "title": p.get("title"),
        "description": p.get("description"),
        "art": _thumb(p.get("thumbnails")),
        "trackCount": p.get("trackCount", len(tracks)),
        "tracks": tracks,
    }


def get_liked():
    try:
        c = get_client()
        if not c.is_authenticated():
            return {"error": "Not signed in to YouTube Music"}
        tracks = c.get_liked_songs(limit=500).get("tracks", [])
    except Exception as e:
        return {"error": str(e)}
    songs = [s for s in (_song_from_ytm(t) for t in tracks) if s]
    return {"tracks": songs}


def next_up(video_id, limit=20):
    """Real 'up next' radio recommendations from YouTube's autoplay algorithm."""
    try:
        res = get_client().get_watch_playlist(video_id, limit=limit + 1)
    except Exception as e:
        return {"items": [], "error": str(e)}
    tracks = []
    seen = set()
    for t in res.get("tracks", []):
        vid = t.get("videoId")
        if not vid or vid == video_id or vid in seen:
            continue
        s = _song_from_ytm(t)
        if s:
            seen.add(vid)
            tracks.append(s)
        if len(tracks) >= limit:
            break
    return {"items": tracks}


def playlist_recommendations(playlist_id, limit=9):
    """Spotify-style: recommend songs to add to a playlist, seeded from its first tracks."""
    try:
        pl = get_client().get_playlist(playlist_id, limit=5)
    except Exception as e:
        return {"error": str(e), "items": []}
    tracks = pl.get("tracks") or []
    have = {t.get("videoId") for t in tracks if t.get("videoId")}
    seeds = [t for t in tracks if t.get("videoId")][:3]
    out = []
    seen = set()
    for seed in seeds:
        if len(out) >= limit:
            break
        try:
            for s in next_up(seed["videoId"], 12).get("items", []):
                vid = s.get("videoId")
                if vid and vid not in have and vid not in seen:
                    seen.add(vid)
                    out.append(s)
                if len(out) >= limit:
                    break
        except Exception:
            continue
    return {"items": out[:limit], "seeds": len(seeds), "have": len(have)}


def get_charts(country="US"):
    try:
        data = get_client().get_charts(country=country)
    except Exception as e:
        try:
            data = _get_charts_fallback(country)
        except Exception as e2:
            return {"error": f"{e}; fallback: {e2}"}
    result = {"videos": [], "artists": [], "genres": []}
    for t in data.get("videos", []):
        result["videos"].append(
            {
                "type": "chart",
                "browseId": t.get("playlistId") or t.get("browseId"),
                "title": t.get("title"),
                "art": _thumb(t.get("thumbnails")),
            }
        )
    for a in data.get("artists", [])[:20]:
        result["artists"].append(
            {
                "type": "artist",
                "browseId": a.get("browseId"),
                "name": a.get("title"),
                "subscribers": a.get("subscribers"),
                "art": _thumb(a.get("thumbnails")),
            }
        )
    for g in data.get("genres", [])[:12]:
        result["genres"].append(
            {
                "type": "chart",
                "browseId": g.get("playlistId") or g.get("browseId"),
                "title": g.get("title"),
                "art": _thumb(g.get("thumbnails")),
            }
        )
    return result


def _text_of(node):
    """Extract plain text from a title/subtitle node (runs or simpleText)."""
    if isinstance(node, str):
        return node
    if isinstance(node, dict):
        if "runs" in node:
            return "".join(r.get("text", "") for r in node["runs"])
        if "simpleText" in node:
            return node["simpleText"]
        for k in ("title", "text"):
            if k in node:
                return _text_of(node[k])
    return ""


def _thumb_urls(node):
    urls = []
    try:
        for t in node.get("thumbnailRenderer", {}).get("musicThumbnailRenderer", {}).get(
            "thumbnail", {}
        ).get("thumbnails", []) or node.get("thumbnail", {}).get("musicThumbnailRenderer", {}).get(
            "thumbnail", {}
        ).get("thumbnails", []) or node.get("thumbnail", {}).get("thumbnails", []):
            u = t.get("url")
            if u:
                urls.append(u)
    except Exception:
        pass
    if not urls:
        try:
            for t in node.get("thumbnail", {}).get("image", {}).get("sources", []):
                u = t.get("url")
                if u:
                    urls.append(u)
        except Exception:
            pass
    return urls


def _mrlir_text(node, col=0):
    """Extract text from a musicResponsiveListItem flex column."""
    try:
        cols = node.get("flexColumns", [])
        if col >= len(cols):
            return ""
        col_node = (
            cols[col]
            .get("musicResponsiveListItemFlexColumnRenderer", {})
            .get("text", {})
        )
        return _text_of(col_node)
    except Exception:
        return ""


def _chart_item(norm, bucket):
    """Normalize one chart item into {'title', 'browseId', 'subtitle', 'thumbnails'}.
    Thumbnails is a list of dicts ({url, width, height}) to match the shape the
    upstream ytmusicapi parsers produce, so the shared formatting code keeps working."""
    browse_id = norm.get("browseId", "")
    title = _text_of(norm.get("title"))
    if not title:
        try:
            title = _text_of(norm["musicTwoRowItemRenderer"]["title"])
        except Exception:
            pass
    if not browse_id:
        # newer elementRenderer items put the target under onTap.innertubeCommand
        try:
            browse_id = (
                norm.get("onTap", {})
                .get("innertubeCommand", {})
                .get("browseEndpoint", {})
                .get("browseId", "")
            )
        except Exception:
            pass
    if not browse_id:
        # old renderers keep the browse endpoint deeper in the item
        try:
            it = (
                norm.get("musicTwoRowItemRenderer")
                or norm.get("musicResponsiveListItemRenderer")
                or norm
            )
            browse_id = (
                it.get("navigationEndpoint", {})
                .get("browseEndpoint", {})
                .get("browseId", "")
            )
        except Exception:
            pass
    if not browse_id:
        try:
            overlay = (
                norm.get("musicTwoRowItemRenderer", {})
                .get("overlay", {})
                .get("musicItemThumbnailOverlayRenderer", {})
                .get("content", {})
            )
            for key in ("musicPlayButtonRenderer", "musicThumbnailOverlayRenderer"):
                if key in overlay:
                    browse_id = (
                        overlay.get(key, {})
                        .get("playNavigationEndpoint", {})
                        .get("browseEndpoint", {})
                        .get("browseId", "")
                    )
                    break
        except Exception:
            pass
    subtitle = _text_of(norm.get("subtitle"))
    if not subtitle:
        try:
            subtitle = _text_of(
                norm.get("musicResponsiveListItemRenderer", {}).get("subtitle")
            )
        except Exception:
            pass
    if not subtitle:
        try:
            subtitle = _text_of(
                norm.get("musicTwoRowItemRenderer", {}).get("subtitle", {})
                .get("content", {})
            )
        except Exception:
            pass
    mrlir = norm.get("musicResponsiveListItemRenderer")
    if mrlir:
        title = _mrlir_text(mrlir, 0) or title
        if not subtitle:
            subtitle = _mrlir_text(mrlir, 1)
    thumbs = _thumb_urls(norm)
    if not thumbs:
        raw = norm.get("musicTwoRowItemRenderer") or norm.get(
            "musicResponsiveListItemRenderer"
        )
        if raw and raw is not norm:
            thumbs = _thumb_urls(raw)
    out = {
        "title": title,
        "browseId": browse_id,
        "subtitle": subtitle,
        "thumbnails": [{"url": u} for u in thumbs],
    }
    # old renderer wrappers already extracted above; fall back to raw node
    if not out["title"] and not out["browseId"]:
        return None
    bucket.append(out)
    return out


def _chart_section_items(section):
    """Extract a list of chart items from one section (old or new YouTube format)."""
    items = []
    car = section.get("musicCarouselShelfRenderer")
    if car:
        for c in car.get("contents", []):
            if not isinstance(c, dict):
                continue
            _chart_item(c, items)
        return items
    iss = section.get("itemSectionRenderer")
    if iss:
        for c in iss.get("contents", []):
            er = (c or {}).get("elementRenderer")
            if not er:
                continue
            try:
                model = er["newElement"]["type"]["componentType"]["templateConfig"][
                    "model"
                ]
            except Exception:
                continue
            grid = model.get("musicGridItemCarouselModel") or {}
            for it in grid.get("shelf", {}).get("items", []):
                if not isinstance(it, dict):
                    continue
                _chart_item(it, items)
        return items
    return None


def _get_charts_fallback(country="US"):
    """Robust chart parser that understands both the classic musicCarouselShelfRenderer
    layout and the newer elementRenderer/musicGridItemCarouselModel layout."""
    client = get_client()
    body = {"browseId": "FEmusic_charts"}
    if country:
        body["formData"] = {"selectedValues": [country]}
    resp = client._send_request("browse", body)
    results = nav(resp, SINGLE_COLUMN_TAB + SECTION_LIST)
    playlist_buckets = []
    artist_items = []
    for sec in results[1:]:
        if not isinstance(sec, dict):
            continue
        items = _chart_section_items(sec)
        if not items:
            continue
        pls = [it for it in items if it["browseId"].startswith("VL")]
        arts = [it for it in items if it["browseId"].startswith("UC")]
        for it in arts:
            it["subscribers"] = it.get("subtitle") or ""
        artist_items.extend(arts)
        if pls:
            playlist_buckets.append(pls)
    charts = {"videos": [], "artists": [], "genres": []}
    if playlist_buckets:
        charts["videos"] = playlist_buckets[0]
        rest = playlist_buckets[1:]
        if country == "US" and rest:
            charts["genres"] = rest[0]
            for extra in rest[1:]:
                charts["videos"].extend(extra)
        else:
            for extra in rest:
                charts["videos"].extend(extra)
    charts["artists"] = artist_items[:20]
    return charts


def get_mood_categories():
    try:
        cats = get_client().get_mood_categories()
    except Exception as e:
        return {"error": str(e)}
    return {"items": [{"browseId": c.get("browseId"), "name": c.get("title"), "art": _thumb(c.get("thumbnails"))} for c in cats]}


def get_home():
    try:
        c = get_client()
        try:
            c._check_auth()
        except Exception:
            return {"error": "Not signed in"}
        home = c.get_home(limit=12)
    except Exception as e:
        return {"error": str(e)}
    sections = []
    for section in home:
        title = section.get("title")
        items = []
        for item in section.get("contents", []):
            if item.get("title") is None:
                continue
            it = {
                "browseId": item.get("browseId"),
                "title": item.get("title"),
                "subtitle": item.get("subtitle"),
                "art": _thumb(item.get("thumbnails")),
            }
            if item.get("playlistId"):
                it["playlistId"] = item["playlistId"]
            if item.get("videoId"):
                it["videoId"] = item["videoId"]
            items.append(it)
        if items:
            sections.append({"title": title, "items": items})
    return {"sections": sections}


def _pick_stream(info):
    formats = info.get("formats") or []
    best = None
    for f in formats:
        acodec = f.get("acodec")
        vcodec = f.get("vcodec")
        if not acodec or acodec == "none":
            continue
        if vcodec not in (None, "none"):
            continue
        if not f.get("url"):
            continue
        score = 0
        abr = f.get("abr") or 0
        score = abr
        if f.get("ext") == "m4a":
            score += 1000000
        elif f.get("ext") == "webm":
            score += 500000
        if best is None or score > best[0]:
            best = (score, f)
    if best:
        return best[1]
    if info.get("url"):
        return info
    return None


def get_stream(video_id):
    now = time.time()
    cached = STREAM_CACHE.get(video_id)
    if cached and cached["expires"] > now:
        return cached["url"], cached["headers"]
    opts = {
        "format": "bestaudio/best",
        "quiet": True,
        "no_warnings": True,
        "noplaylist": True,
        "skip_download": True,
        "socket_timeout": 30,
        "nocheckcertificate": True,
    }
    try:
        with yt_dlp.YoutubeDL(opts) as ydl:
            info = ydl.extract_info("https://www.youtube.com/watch?v=" + video_id, download=False)
    except Exception as e:
        raise RuntimeError(f"Stream extraction failed: {e}")
    fmt = _pick_stream(info)
    if not fmt:
        raise RuntimeError("No playable stream found")
    url = fmt.get("url")
    headers = fmt.get("http_headers") or {}
    headers.setdefault("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/126 Safari/537.36")
    STREAM_CACHE[video_id] = {"url": url, "headers": headers, "expires": now + STREAM_TTL}
    return url, headers


def download_song(video_id, out_dir):
    safe = re.sub(r"[^A-Za-z0-9_-]", "", video_id) or "song"
    opts = {
        "format": "bestaudio/best",
        "outtmpl": os.path.join(out_dir, safe + ".%(ext)s"),
        "quiet": True,
        "no_warnings": True,
        "noplaylist": True,
        "socket_timeout": 60,
        "nocheckcertificate": True,
    }
    with yt_dlp.YoutubeDL(opts) as ydl:
        info = ydl.extract_info("https://www.youtube.com/watch?v=" + video_id, download=True)
        path = ydl.prepare_filename(info)
    if not os.path.isfile(path):
        raise RuntimeError("Download finished but file missing")
    return path


def auth_status():
    try:
        c = get_client()
        return {"authenticated": bool(c.is_authenticated()), "account": None}
    except Exception:
        return {"authenticated": False, "account": None}


def save_cookie(cookie):
    save_settings({"ytm_cookie": cookie})


def get_new_releases():
    """Parse the FEmusic_new_releases browse page (New releases shelf)."""
    import json as _json

    try:
        raw = get_client()._send_request("browse", {"browseId": "FEmusic_new_releases"})
    except Exception as e:
        return {"error": str(e)}
    items = []

    def collect(node):
        if isinstance(node, dict):
            m = node.get("musicTwoRowItemRenderer")
            if m is not None:
                try:
                    title = _text_of(m.get("title"))
                    nav = (m.get("navigationEndpoint") or {}).get("browseEndpoint") or {}
                    bid = nav.get("browseId") or ""
                    if not title or not bid.startswith("MPREb"):
                        return
                    sub = _text_of(m.get("subtitle"))
                    parts = [p.strip() for p in sub.split("\u2022")] if sub else []
                    rtype = parts[0] if parts else "Album"
                    artists = " \u2022 ".join(parts[1:]) if len(parts) > 1 else ""
                    explicit = False
                    try:
                        explicit = "MUSIC_EXPLICIT_BADGE" in _json.dumps(m.get("badges") or {})
                    except Exception:
                        pass
                    th = _thumb_urls(m)
                    items.append(
                        {
                            "browseId": bid,
                            "title": title,
                            "type": rtype,
                            "artists": artists,
                            "art": _hd(th[-1]) if th else None,
                            "explicit": explicit,
                        }
                    )
                except Exception:
                    pass
                return
            for v in node.values():
                collect(v)
        elif isinstance(node, list):
            for v in node:
                collect(v)

    collect(raw)
    return {"items": items}
    reset_client()
