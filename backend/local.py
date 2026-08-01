import hashlib
import os
import threading

import mutagen
import mutagen.aiff
import mutagen.asf
import mutagen.flac
import mutagen.mp3
import mutagen.mp4
import mutagen.oggopus
import mutagen.oggvorbis
import mutagen.wave

from library import get_scan_cache, save_scan_cache

AUDIO_EXTS = {
    ".mp3", ".flac", ".wav", ".ogg", ".oga", ".m4a", ".aac",
    ".wma", ".opus", ".aiff", ".alac", ".mp4", ".webm",
}

_art_cache = {}
_art_lock = threading.Lock()


def _file_id(path):
    return "local:" + hashlib.sha1(os.path.abspath(path).encode("utf-8")).hexdigest()[:16]


def _clean(name):
    return name.strip() if name and name.strip() else None


def read_metadata(path):
    try:
        f = mutagen.File(path, easy=False)
    except Exception:
        f = None
    title = artist = album = None
    art = None
    duration = 0
    mime = None
    if f is not None:
        try:
            duration = int(f.info.length or 0)
        except Exception:
            duration = 0
        tags = getattr(f, "tags", None)
        if tags is not None:
            def g(*keys):
                for k in keys:
                    v = tags.get(k)
                    if v:
                        if isinstance(v, list):
                            v = v[0]
                        if isinstance(v, bytes):
                            try:
                                v = v.decode("utf-8", "ignore")
                            except Exception:
                                continue
                        return str(v).strip() or None
                return None

            title = g("title", "TIT2", "\xa9nam", "Title")
            artist = g("artist", "TPE1", "\xa9ART", "Author", "Artist")
            album = g("album", "TALB", "\xa9alb", "Album")
            art = _extract_art(f, tags)
            mime = art[0] if art else None
    base = os.path.splitext(os.path.basename(path))[0]
    title = title or base
    artist = artist or "Unknown Artist"
    album = album or "Unknown Album"
    return title, artist, album, duration, mime


def _extract_art(f, tags):
    try:
        if isinstance(f, mutagen.flac.FLAC):
            pics = f.pictures
            if pics:
                p = pics[0]
                return p.data, (p.mime or "image/jpeg")
        if isinstance(f, mutagen.mp3.MP3):
            for k, v in tags.items():
                if k.startswith("APIC"):
                    return v.data, (v.mime or "image/jpeg")
        if isinstance(f, mutagen.mp4.MP4):
            covr = tags.get("covr")
            if covr:
                d = covr[0]
                if isinstance(d, bytes):
                    return d, "image/jpeg"
                return bytes(d), "image/jpeg"
        if isinstance(f, mutagen.oggvorbis.OggVorbis) or isinstance(f, mutagen.oggopus.OggOpus):
            for k, v in tags.items():
                if k.lower() in ("coverart", "metadata_block_picture"):
                    return v, "image/jpeg"
        if isinstance(f, mutagen.asf.ASF):
            for k, v in tags.items():
                if k.lower() == "wm/picture":
                    return v.value.picture.data, "image/jpeg"
    except Exception:
        pass
    return None, None


def song_from_path(path):
    title, artist, album, duration, mime = read_metadata(path)
    return {
        "id": _file_id(path),
        "title": title,
        "artist": artist,
        "album": album,
        "duration": duration,
        "art": f"/api/local/art?file={_file_id(path)}&t=1" if mime else None,
        "source": "local",
        "filepath": os.path.abspath(path),
    }


def scan(root):
    root = os.path.abspath(root)
    if not os.path.isdir(root):
        raise FileNotFoundError(f"Folder not found: {root}")
    songs = []
    visited = set()
    for dirpath, dirnames, filenames in os.walk(root):
        dirnames[:] = [d for d in dirnames if d not in (".git", "node_modules")][:200]
        for fn in filenames:
            ext = os.path.splitext(fn)[1].lower()
            if ext in AUDIO_EXTS:
                p = os.path.join(dirpath, fn)
                real = os.path.abspath(p)
                if real in visited:
                    continue
                visited.add(real)
                try:
                    songs.append(song_from_path(p))
                except Exception:
                    continue
    songs.sort(key=lambda s: s["title"].lower())
    save_scan_cache(root, songs)
    return {"root": root, "count": len(songs), "songs": songs}


def scan_if_needed(force=False):
    cache = get_scan_cache()
    if force or not cache.get("songs"):
        root = cache.get("root") or ""
        if root and os.path.isdir(root):
            return scan(root)
    return cache


def get_song_by_file_id(file_id):
    cache = get_scan_cache()
    if ":" in file_id:
        file_id = file_id.split(":", 1)[1]
    full = "local:" + file_id
    for s in cache.get("songs", []):
        if s["id"] == file_id or s["id"] == full:
            return s
    return None


def get_art(file_id):
    with _art_lock:
        if file_id in _art_cache:
            return _art_cache[file_id]
    cache = get_scan_cache()
    for s in cache.get("songs", []):
        if s["id"] == file_id:
            path = s.get("filepath")
            if path and os.path.isfile(path):
                try:
                    f = mutagen.File(path, easy=False)
                    if f is not None:
                        data, mime = _extract_art(f, getattr(f, "tags", None))
                        if mime and data:
                            result = (data, mime)
                            with _art_lock:
                                _art_cache[file_id] = result
                            return result
                except Exception:
                    pass
            break
    return None, None
