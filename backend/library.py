import json
import os
import sys
import threading
import time
import uuid
from copy import deepcopy


def base_dir():
    if getattr(sys, "frozen", False):
        return os.path.dirname(os.path.abspath(sys.executable))
    return os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def data_dir():
    if os.name == "posix":
        base = os.environ.get("XDG_DATA_HOME") or os.path.expanduser("~/.local/share")
        return os.path.join(base, "Donut Music")
    return os.path.join(base_dir(), "data")


DATA_DIR = data_dir()
os.makedirs(DATA_DIR, exist_ok=True)

_lock = threading.Lock()


def _path(name):
    return os.path.join(DATA_DIR, name)


def _load(name, default):
    try:
        with open(_path(name), "r", encoding="utf-8") as f:
            return json.load(f)
    except Exception:
        return deepcopy(default)


def _save(name, data):
    with _lock:
        tmp = _path(name) + ".tmp"
        with open(tmp, "w", encoding="utf-8") as f:
            json.dump(data, f, ensure_ascii=False, indent=1)
        os.replace(tmp, _path(name))


DEFAULT_SETTINGS = {
    "volume": 1.0,
    "theme": "dark",
    "accent": "#ff4f8b",
    "dynamic_color": True,
    "shuffle": False,
    "repeat": "off",
    "ytm_cookie": "",
    "lang": "id",
    "local_root": "",
    "lastfm_api_key": "",
    "lastfm_api_secret": "",
    "lastfm_session": "",
    "lastfm_username": "",
    "eq_enabled": False,
    "eq_bands": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    "speed": 1.0,
}


def get_settings():
    return _load("settings.json", DEFAULT_SETTINGS)


def save_settings(patch):
    s = get_settings()
    s.update(patch)
    _save("settings.json", s)
    return s


def get_playlists():
    return _load("playlists.json", {"playlists": []})["playlists"]


def save_playlists(playlists):
    _save("playlists.json", {"playlists": playlists})


def create_playlist(name, description=""):
    p = {
        "id": uuid.uuid4().hex[:12],
        "name": name,
        "description": description,
        "songs": [],
        "created": time.time(),
    }
    pls = get_playlists()
    pls.append(p)
    save_playlists(pls)
    return p


def get_playlist(pid):
    for p in get_playlists():
        if p["id"] == pid:
            return p
    return None


def update_playlist(pid, name=None, description=None):
    pls = get_playlists()
    for p in pls:
        if p["id"] == pid:
            if name is not None:
                p["name"] = name
            if description is not None:
                p["description"] = description
            save_playlists(pls)
            return p
    return None


def delete_playlist(pid):
    pls = [p for p in get_playlists() if p["id"] != pid]
    save_playlists(pls)


def add_song_to_playlist(pid, song):
    pls = get_playlists()
    for p in pls:
        if p["id"] == pid:
            if not any(s.get("id") == song.get("id") for s in p["songs"]):
                p["songs"].append(song)
            save_playlists(pls)
            return p
    return None


def remove_song_from_playlist(pid, song_id):
    pls = get_playlists()
    for p in pls:
        if p["id"] == pid:
            p["songs"] = [s for s in p["songs"] if s.get("id") != song_id]
            save_playlists(pls)
            return p
    return None


def get_liked():
    return _load("liked.json", {"songs": []})["songs"]


def save_liked(songs):
    _save("liked.json", {"songs": songs})


def is_liked(song_id):
    return any(s.get("id") == song_id for s in get_liked())


def toggle_liked(song):
    songs = get_liked()
    if any(s.get("id") == song["id"] for s in songs):
        songs = [s for s in songs if s.get("id") != song["id"]]
        save_liked(songs)
        return False
    songs.insert(0, song)
    save_liked(songs)
    return True


def get_stats():
    return _load("stats.json", {"plays": []})


def add_play(song):
    st = get_stats()
    entry = dict(song)
    entry["ts"] = time.time()
    st["plays"].append(entry)
    st["plays"] = st["plays"][-20000:]
    _save("stats.json", st)


def recent_plays(limit=12):
    st = get_stats()
    seen = set()
    out = []
    for p in reversed(st.get("plays", [])):
        key = p.get("id") or (p.get("title", "") + p.get("artist", ""))
        if key in seen:
            continue
        seen.add(key)
        out.append(p)
        if len(out) >= limit:
            break
    return out


def calendar_data():
    st = get_stats()
    plays = st["plays"]
    days = {}
    detail = {}
    for p in plays:
        day = time.strftime("%Y-%m-%d", time.localtime(p["ts"]))
        days[day] = days.get(day, 0) + 1
        if len(detail.get(day, [])) < 20:
            detail.setdefault(day, []).append(
                {
                    "id": p.get("id", ""),
                    "title": p.get("title", ""),
                    "artist": p.get("artist", ""),
                    "art": p.get("art"),
                    "source": p.get("source", ""),
                    "ts": p.get("ts"),
                }
            )
    return {"days": days, "detail": detail, "total_plays": len(plays)}


def aggregated_stats():
    st = get_stats()
    plays = st["plays"]
    total = len(plays)
    songs = {}
    artists = {}
    days = {}
    for p in plays:
        key = p["id"] or (p["title"] + p["artist"])
        songs[key] = songs.get(key, 0) + 1
        artists[p["artist"] or "Unknown"] = artists.get(p["artist"] or "Unknown", 0) + 1
        day = time.strftime("%Y-%m-%d", time.localtime(p["ts"]))
        days[day] = days.get(day, 0) + 1
    song_info = {}
    for p in plays:
        song_info.setdefault(p["id"] or (p["title"] + p["artist"]), p)
    top_songs = [
        {**song_info[k], "plays": c, "plays_key": k}
        for k, c in sorted(songs.items(), key=lambda x: x[1], reverse=True)[:50]
    ]
    return {
        "total_plays": total,
        "top_songs": top_songs,
        "top_artists": sorted(artists.items(), key=lambda x: x[1], reverse=True)[:25],
        "plays_per_day": days,
    }


def library_summary():
    liked = get_liked()
    pls = get_playlists()
    agg = aggregated_stats()
    cache = get_scan_cache()
    return {
        "liked_count": len(liked),
        "playlists_count": len(pls),
        "playlist_songs": sum(len(p.get("songs", [])) for p in pls),
        "local_songs": len(cache.get("songs", [])),
        "total_plays": agg["total_plays"],
        "top_song": agg["top_songs"][0] if agg["top_songs"] else None,
        "top_songs": agg["top_songs"],
        "top_artists": agg["top_artists"],
    }


def get_scan_cache():
    return _load("scan_cache.json", {"root": "", "songs": []})


def save_scan_cache(root, songs):
    _save("scan_cache.json", {"root": root, "songs": songs, "scanned_at": time.time()})


# ---------------- downloads / offline ----------------


def downloads_dir():
    d = os.path.join(DATA_DIR, "downloads")
    os.makedirs(d, exist_ok=True)
    return d


def get_downloads():
    return _load("downloads.json", {"downloads": []})["downloads"]


def save_downloads(dls):
    _save("downloads.json", {"downloads": dls})


def add_download(song, filepath):
    dls = get_downloads()
    for d in dls:
        if d.get("id") and song.get("id") and d["id"] == song["id"]:
            return {"download": d, "exists": True}
    entry = dict(song)
    entry["filepath"] = filepath
    entry["added"] = time.time()
    dls.insert(0, entry)
    save_downloads(dls)
    return {"download": entry, "exists": False}


def remove_download(dl_id):
    dls = get_downloads()
    removed = None
    out = []
    for d in dls:
        if d.get("id") == dl_id:
            removed = d
        else:
            out.append(d)
    if removed:
        save_downloads(out)
        try:
            if removed.get("filepath") and os.path.isfile(removed["filepath"]):
                os.remove(removed["filepath"])
        except Exception:
            pass
    return removed


def clear_downloads():
    dls = get_downloads()
    for d in dls:
        try:
            if d.get("filepath") and os.path.isfile(d["filepath"]):
                os.remove(d["filepath"])
        except Exception:
            pass
    save_downloads([])


# ---------------- finished (played to the end) ----------------


def get_finished():
    return _load("finished.json", {"finished": []})["finished"]


def mark_finished(song):
    fin = get_finished()
    key = song.get("id") or (song.get("title", "") + song.get("artist", ""))
    for f in fin:
        if (f.get("id") or (f.get("title", "") + f.get("artist", ""))) == key:
            return False
    entry = dict(song)
    entry["finished_at"] = time.time()
    fin.insert(0, entry)
    _save("finished.json", {"finished": fin[:500]})
    return True
