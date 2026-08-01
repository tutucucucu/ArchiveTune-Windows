import requests

LRCLIB_API = "https://lrclib.net/api"


def search_lyrics(title, artist, duration=None):
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
        return {"error": "No lyrics found"}
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


def get_by_id(lrclib_id):
    try:
        r = requests.get(f"{LRCLIB_API}/get/{lrclib_id}", timeout=12)
        r.raise_for_status()
        return format_lyrics(r.json())
    except Exception:
        return {"error": "Could not fetch lyrics"}


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
    }
