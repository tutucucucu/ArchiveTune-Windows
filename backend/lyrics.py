import requests

LRCLIB_API = "https://lrclib.net/api"

PROVIDER_NAMES = ["ytmusic", "lrclib", "musixmatch", "genius"]


def search_lyrics(title, artist, duration=None, video_id=None, provider="auto"):
    """Fetch lyrics. provider can be a specific name or 'auto' to try all."""
    artist = artist or "Unknown Artist"
    if not provider or provider == "auto":
        order = PROVIDER_NAMES[:]
        if not video_id:
            order.remove("ytmusic")
    else:
        order = [provider]
    for p in order:
        data = None
        try:
            if p == "lrclib":
                data = _from_lrclib(title, artist, duration)
            elif p == "ytmusic" and video_id:
                data = _from_ytmusic(video_id, title, artist)
            elif p in ("musixmatch", "genius"):
                data = _from_syncedlyrics(title, artist, p)
        except Exception:
            data = None
        if data:
            data["provider"] = p
            return data
    return {"error": "No lyrics found", "provider": provider if provider and provider != "auto" else "auto"}


def get_by_id(lrclib_id):
    try:
        r = requests.get(f"{LRCLIB_API}/get/{lrclib_id}", timeout=12)
        r.raise_for_status()
        return format_lyrics(r.json())
    except Exception:
        return {"error": "Could not fetch lyrics"}


def _from_lrclib(title, artist, duration):
    candidates = [
        {"track_name": title, "artist_name": artist, "duration": duration},
        {"track_name": title, "artist_name": artist},
    ]
    data = None
    for params in candidates:
        params = {k: v for k, v in params.items() if v}
        try:
            r = requests.get(LRCLIB_API + "/search", params=params, timeout=12)
            r.raise_for_status()
            data = r.json()
        except Exception:
            continue
        if data:
            break
    if not data:
        try:
            r = requests.get(
                LRCLIB_API + "/get",
                params={"track_name": title, "artist_name": artist},
                timeout=12,
            )
            r.raise_for_status()
            found = r.json()
            if found.get("trackName"):
                return format_lyrics(found)
        except Exception:
            pass
        return None
    best = None
    for d in data:
        if d.get("syncedLyrics"):
            best = d
            break
    for d in data:
        if d.get("syncedLyrics") and (d.get("romanizedSyncedLyrics") or d.get("romanizedLyrics")):
            best = d
            break
    if best is None:
        best = data[0]
    return format_lyrics(best)


def _from_ytmusic(video_id, title, artist):
    from ytm import get_client

    try:
        client = get_client()
        watch = client.get_watch_playlist(video_id, limit=1)
        browse_id = watch.get("lyrics") if isinstance(watch, dict) else None
        if not browse_id:
            return None
        L = client.get_lyrics(browse_id, timestamps=True)
    except Exception:
        return None
    if not L:
        return None
    if L.get("hasTimestamps"):
        lines = []
        for line in L.get("lyrics", []):
            if line.text is None:
                continue
            lines.append({"t": int(getattr(line, "start_time", 0) or 0), "text": line.text})
        plain = "\n".join(l["text"] for l in lines)
        return {
            "id": None,
            "trackName": title,
            "artistName": artist,
            "albumName": None,
            "duration": None,
            "synced": True,
            "lines": lines,
            "plain": plain,
            "has_romanized": False,
            "romanized_lines": [],
            "romanized_plain": "",
            "source": L.get("source"),
        }
    plain = L.get("lyrics") or ""
    lines = _parse_synced(plain)
    return {
        "id": None,
        "trackName": title,
        "artistName": artist,
        "albumName": None,
        "duration": None,
        "synced": bool(lines),
        "lines": lines,
        "plain": plain,
        "has_romanized": False,
        "romanized_lines": [],
        "romanized_plain": "",
        "source": L.get("source"),
    }


def _from_syncedlyrics(title, artist, provider):
    try:
        import syncedlyrics
    except ImportError:
        return None
    term = f"{title} {artist}".strip()
    try:
        lrc = syncedlyrics.search(term, providers=[provider])
    except Exception:
        return None
    if not lrc:
        return None
    lines = _parse_synced(lrc)
    plain = lrc if not lines else "\n".join(l["text"] for l in lines)
    return {
        "id": None,
        "trackName": title,
        "artistName": artist,
        "albumName": None,
        "duration": None,
        "synced": bool(lines),
        "lines": lines,
        "plain": plain,
        "has_romanized": False,
        "romanized_lines": [],
        "romanized_plain": "",
    }


def _parse_synced(text):
    import re

    lines = []
    for line in (text or "").splitlines():
        line = line.strip()
        if not line:
            continue
        m = re.match(r"^\[(\d+):(\d+)(?:[.:](\d+))?\](.*)$", line)
        if not m:
            continue
        minutes, secs, frac, text = m.groups()
        ms = int(minutes) * 60000 + int(secs) * 1000
        if frac:
            ms += int(float("0." + frac) * 1000)
        lines.append({"t": ms, "text": text.strip()})
    return lines


def format_lyrics(d):
    synced = d.get("syncedLyrics")
    plain = d.get("plainLyrics")
    rom_synced = d.get("romanizedSyncedLyrics")
    rom_plain = d.get("romanizedLyrics")
    lines = _parse_synced(synced)
    rom_lines = _parse_synced(rom_synced)
    return {
        "id": d.get("id"),
        "trackName": d.get("trackName"),
        "artistName": d.get("artistName"),
        "albumName": d.get("albumName"),
        "duration": d.get("duration"),
        "synced": bool(synced),
        "lines": lines,
        "plain": plain or ("\n".join(l["text"] for l in lines) if lines else ""),
        "has_romanized": bool(rom_synced or rom_plain),
        "romanized_lines": rom_lines,
        "romanized_plain": rom_plain or ("\n".join(l["text"] for l in rom_lines) if rom_lines else ""),
        "source": d.get("source"),
    }
