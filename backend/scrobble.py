import hashlib
import time

import requests

API = "https://ws.audioscrobbler.com/2.0/"


def _session(settings):
    key = settings.get("lastfm_api_key", "")
    secret = settings.get("lastfm_api_secret", "")
    session = settings.get("lastfm_session", "")
    username = settings.get("lastfm_username", "")
    if not (key and secret and session):
        return None
    return key, secret, session, username


def _call(params):
    r = requests.post(API, data=params, timeout=15)
    try:
        return r.json()
    except Exception:
        return {"error": r.text[:200]}


def _signed(params, secret):
    params = dict(params)
    sig = "".join(f"{k}{params[k]}" for k in sorted(params))
    params["api_sig"] = hashlib.md5((sig + secret).encode("utf-8")).hexdigest()
    return params


def login(api_key, api_secret, username, password):
    params = {
        "method": "auth.getMobileSession",
        "api_key": api_key,
        "username": username,
        "password": password,
        "format": "json",
    }
    params = _signed(params, api_secret)
    data = _call(params)
    try:
        session_key = data["session"]["key"]
        return {"ok": True, "session": session_key}
    except Exception:
        return {"ok": False, "error": data.get("message") or data.get("error") or "Login failed"}


def _status(settings):
    s = _session(settings)
    if not s:
        return {"enabled": False}
    return {"enabled": True, "username": s[3]}


def _send(settings, song, method):
    s = _session(settings)
    if not s:
        return None
    api_key, api_secret, session, username = s
    params = {
        "method": method,
        "api_key": api_key,
        "artist": song.get("artist", ""),
        "track": song.get("title", ""),
        "album": song.get("album", "") if song.get("album") else "",
        "api_key": api_key,
        "sk": session,
        "format": "json",
    }
    if method == "track.updateNowPlaying":
        params["duration"] = int(song.get("duration") or 0)
    if method == "track.scrobble":
        params["timestamp"] = int(time.time())
    params.pop("api_key", None)
    params["api_key"] = api_key
    params = _signed(params, api_secret)
    data = _call(params)
    if data.get("error"):
        return {"ok": False, "error": data.get("message")}
    return {"ok": True}


def now_playing(settings, song):
    return _send(settings, song, "track.updateNowPlaying")


def scrobble(settings, song):
    return _send(settings, song, "track.scrobble")
