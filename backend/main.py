import os
import sys
import threading
import time
from typing import Optional

import requests
from fastapi import FastAPI, Request
from fastapi.responses import FileResponse, JSONResponse, Response, StreamingResponse
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel

import library
import local
import lyrics
import scrobble
import ytm


def frontend_dir():
    if getattr(sys, "frozen", False):
        return os.path.join(getattr(sys, "_MEIPASS", os.path.dirname(os.path.abspath(sys.executable))), "frontend")
    return os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "frontend")


app = FastAPI(title="ArchiveTune")


@app.middleware("http")
async def no_store_cache(request, call_next):
    response = await call_next(request)
    response.headers["Cache-Control"] = "no-store"
    return response


# ---------------- models ----------------


class SongPayload(BaseModel):
    id: str = ""
    videoId: str = ""
    title: str = ""
    artist: str = ""
    album: str = ""
    duration: int = 0
    art: Optional[str] = None
    source: str = ""
    filepath: Optional[str] = None
    browseId: Optional[str] = None
    artists: Optional[list] = None


class CookiePayload(BaseModel):
    cookie: str = ""


class LastfmLoginPayload(BaseModel):
    api_key: str
    api_secret: str
    username: str
    password: str


class SettingsPatch(BaseModel):
    key: str
    value: object = None


# ---------------- youtube music ----------------


@app.get("/api/ytm/search")
def ytm_search(q: str, type: str = "songs", limit: int = 25):
    return ytm.search(q, type, limit)


@app.get("/api/ytm/song/{video_id}")
def ytm_song(video_id: str):
    return ytm.get_song(video_id)


@app.get("/api/ytm/album/{browse_id}")
def ytm_album(browse_id: str):
    return ytm.get_album(browse_id)


@app.get("/api/ytm/artist/{browse_id}")
def ytm_artist(browse_id: str):
    return ytm.get_artist(browse_id)


@app.get("/api/ytm/artist/{browse_id}/songs")
def ytm_artist_songs(browse_id: str):
    return ytm.get_artist_songs(browse_id)


@app.get("/api/ytm/playlist/{browse_id}")
def ytm_playlist(browse_id: str):
    return ytm.get_playlist(browse_id)


@app.get("/api/ytm/liked")
def ytm_liked():
    return ytm.get_liked()


@app.get("/api/ytm/nextup/{video_id}")
def ytm_nextup(video_id: str, limit: int = 20):
    return ytm.next_up(video_id, limit)


@app.get("/api/ytm/charts")
def ytm_charts(country: str = "US"):
    return ytm.get_charts(country)


@app.get("/api/ytm/home")
def ytm_home():
    return ytm.get_home()


@app.get("/api/ytm/status")
def ytm_status():
    return ytm.auth_status()


@app.post("/api/ytm/cookie")
def ytm_cookie(payload: CookiePayload):
    ytm.save_cookie(payload.cookie)
    return {"ok": True}


# ---------------- streaming ----------------


def _stream(video_id: str, request: Request):
    try:
        url, headers = ytm.get_stream(video_id)
    except Exception as e:
        return JSONResponse({"error": str(e)}, 502)
    range_header = request.headers.get("Range")
    req_headers = dict(headers)
    if range_header:
        req_headers["Range"] = range_header
    try:
        r = requests.get(url, headers=req_headers, stream=True, timeout=90)
    except Exception as e:
        return JSONResponse({"error": f"Stream connect failed: {e}"}, 502)
    if r.status_code >= 400:
        return JSONResponse({"error": f"Upstream error {r.status_code}"}, 502)
    ctype = r.headers.get("Content-Type", "audio/mpeg")
    resp = StreamingResponse(r.iter_content(1 << 16), status_code=r.status_code, media_type=ctype)
    for h in ("Content-Range", "Accept-Ranges", "Content-Length", "Content-Disposition"):
        if h in r.headers:
            resp.headers[h] = r.headers[h]
    return resp


app.get("/api/stream/{video_id}")(_stream)


# ---------------- local files ----------------


@app.post("/api/local/scan")
def local_scan(payload: dict):
    root = payload.get("root", "")
    if not root:
        return JSONResponse({"error": "No folder given"}, 400)
    try:
        return local.scan(root)
    except Exception as e:
        return JSONResponse({"error": str(e)}, 400)


@app.get("/api/local/library")
def local_library(force: bool = False):
    return local.scan_if_needed(force)


@app.get("/api/local/dir")
def local_dir(path: str = "", nested: bool = False):
    items = []
    if not path:
        import string

        for d in string.ascii_uppercase:
            root = d + ":\\"
            if os.path.exists(root):
                items.append({"name": root, "path": root, "isDir": True})
        return {"path": "", "items": items}
    path = os.path.abspath(path)
    try:
        names = sorted(os.listdir(path))
    except Exception:
        return {"path": path, "items": items, "error": "Cannot open"}
    for n in names:
        if n.startswith("$") or n.startswith("."):
            continue
        p = os.path.join(path, n)
        is_dir = os.path.isdir(p)
        if nested and not is_dir:
            continue
        items.append({"name": n, "path": p, "isDir": is_dir})
    return {"path": path, "items": items}


@app.get("/api/local/file/{file_id}")
def local_file(file_id: str):
    song = local.get_song_by_file_id(file_id)
    if not song or not os.path.isfile(song.get("filepath", "")):
        return JSONResponse({"error": "File not found"}, 404)
    return FileResponse(song["filepath"])


@app.get("/api/local/art")
def local_art(file: str):
    data, mime = local.get_art(file)
    if not data:
        return JSONResponse({"error": "no art"}, 404)
    return Response(data, media_type=mime or "image/jpeg")


# ---------------- library (playlists / liked / stats) ----------------


@app.get("/api/library/playlists")
def lib_playlists():
    return {"playlists": library.get_playlists()}


@app.post("/api/library/playlists")
def lib_create(payload: dict):
    return library.create_playlist(payload.get("name", "New Playlist"), payload.get("description", ""))


@app.put("/api/library/playlists/{pid}")
def lib_update(pid: str, payload: dict):
    p = library.update_playlist(pid, payload.get("name"), payload.get("description"))
    return p or JSONResponse({"error": "not found"}, 404)


@app.delete("/api/library/playlists/{pid}")
def lib_delete(pid: str):
    library.delete_playlist(pid)
    return {"ok": True}


@app.post("/api/library/playlists/{pid}/songs")
def lib_add_song(pid: str, song: SongPayload):
    p = library.add_song_to_playlist(pid, song.model_dump())
    return p or JSONResponse({"error": "not found"}, 404)


@app.delete("/api/library/playlists/{pid}/songs/{song_id}")
def lib_remove_song(pid: str, song_id: str):
    p = library.remove_song_from_playlist(pid, song_id)
    return p or JSONResponse({"error": "not found"}, 404)


@app.get("/api/library/liked")
def lib_liked():
    return {"songs": library.get_liked()}


@app.post("/api/library/liked")
def lib_toggle_liked(song: SongPayload):
    liked = library.toggle_liked(song.model_dump())
    return {"liked": liked, "count": len(library.get_liked())}


@app.get("/api/library/liked/{song_id}")
def lib_is_liked(song_id: str):
    return {"liked": library.is_liked(song_id)}


@app.get("/api/library/stats")
def lib_stats():
    return library.aggregated_stats()


@app.get("/api/library/calendar")
def lib_calendar():
    return library.calendar_data()


@app.get("/api/library/recent")
def lib_recent(limit: int = 12):
    return {"plays": library.recent_plays(max(1, min(limit, 50)))}


@app.post("/api/library/play")
def lib_play(song: SongPayload):
    library.add_play(song.model_dump())
    return {"ok": True}


# ---------------- lyrics ----------------


@app.get("/api/lyrics")
def get_lyrics(title: str = "", artist: str = "", duration: int = 0):
    if not title:
        return {"error": "no title"}
    return lyrics.search_lyrics(title, artist or "Unknown Artist", duration or None)


# ---------------- last.fm scrobbling ----------------


@app.post("/api/scrobble/nowplaying")
def scrobble_nowplaying(song: SongPayload):
    return scrobble.now_playing(library.get_settings(), song.model_dump())


@app.post("/api/scrobble/scrobble")
def scrobble_track(song: SongPayload):
    return scrobble.scrobble(library.get_settings(), song.model_dump())


@app.post("/api/lastfm/login")
def lastfm_login(payload: LastfmLoginPayload):
    res = scrobble.login(payload.api_key, payload.api_secret, payload.username, payload.password)
    if res.get("ok"):
        library.save_settings(
            {
                "lastfm_api_key": payload.api_key,
                "lastfm_api_secret": payload.api_secret,
                "lastfm_username": payload.username,
                "lastfm_session": res["session"],
            }
        )
    return res


@app.get("/api/lastfm/status")
def lastfm_status():
    return scrobble._status(library.get_settings())


# ---------------- settings ----------------


@app.get("/api/settings")
def get_settings():
    return library.get_settings()


@app.post("/api/settings")
def update_settings(payload: SettingsPatch):
    return library.save_settings({payload.key: payload.value})


@app.get("/api/health")
def health():
    return {"ok": True, "name": "ArchiveTune", "time": time.time()}


# ---------------- frontend ----------------


@app.get("/")
def index():
    return FileResponse(os.path.join(frontend_dir(), "index.html"))


app.mount("/static", StaticFiles(directory=frontend_dir()), name="static")


def _open_browser(host, port):
    import webbrowser

    time.sleep(1.2)
    try:
        webbrowser.open(f"http://{host}:{port}/")
    except Exception:
        pass


def _open_desktop(host, port):
    import webview

    webview.create_window(
        "ArchiveTune",
        f"http://{host}:{port}/",
        width=1280,
        height=820,
        min_size=(960, 620),
        background_color="#0f0f13",
    )
    webview.start()


def _wait_health(host, port, timeout=10):
    import urllib.request

    end = time.time() + timeout
    while time.time() < end:
        try:
            with urllib.request.urlopen(f"http://{host}:{port}/api/health", timeout=1):
                return True
        except Exception:
            time.sleep(0.2)
    return False


def _start_server(host, port):
    import uvicorn

    config = uvicorn.Config(app, host=host, port=port, log_level="warning", log_config=None)
    server = uvicorn.Server(config)
    thread = threading.Thread(target=server.run, daemon=True)
    thread.start()
    return server, thread


def _log_error(text):
    try:
        log = os.path.join(library.DATA_DIR, "error.log")
        with open(log, "w", encoding="utf-8") as f:
            f.write(text)
    except Exception:
        pass


def main():
    if sys.stdout is None:
        sys.stdout = open(os.devnull, "w")
    if sys.stderr is None:
        sys.stderr = open(os.devnull, "w")

    host = "127.0.0.1"
    port = 8397
    mode = "desktop"
    args = sys.argv[1:]
    for i, a in enumerate(args):
        if a == "--host" and i + 1 < len(args):
            host = args[i + 1]
        elif a == "--port" and i + 1 < len(args):
            port = int(args[i + 1])
        elif a == "--browser":
            mode = "browser"
        elif a == "--no-browser":
            mode = "headless"
    try:
        if mode == "headless":
            import uvicorn

            uvicorn.run(app, host=host, port=port, log_level="warning", log_config=None)
            return
        server, thread = _start_server(host, port)
        if not _wait_health(host, port):
            _log_error(f"Server did not start on {host}:{port}\n")
        if mode == "desktop":
            try:
                _open_desktop(host, port)
            except Exception:
                import traceback

                _log_error("Desktop window failed, falling back to browser:\n" + traceback.format_exc())
                _open_browser(host, port)
        else:
            _open_browser(host, port)
        server.should_exit = True
        thread.join(timeout=3)
    except Exception:
        import traceback

        _log_error(traceback.format_exc())
        raise


if __name__ == "__main__":
    main()
