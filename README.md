<div align="center">

# 🌸 ArchiveTune

**The cutest music player — now on your desktop.**

Unofficial port of [ArchiveTune](https://github.com/rukamori/ArchiveTune) with a Python (FastAPI) backend and an HTML/CSS/JS frontend. Ships as a Windows `.exe` **and** a Linux `.deb` for Ubuntu.

![python](https://img.shields.io/badge/python-3.10+-blue) ![platform](https://img.shields.io/badge/platform-Windows_·_Linux-blue) ![license](https://img.shields.io/badge/license-GPL--3.0-brightgreen) ![framework](https://img.shields.io/badge/backend-FastAPI-009688)

</div>

---

## ✨ Features

### 🎵 Playback
- **YouTube Music** — search songs / albums / artists / playlists, browse charts & genres, stream ad-free audio (via `ytmusicapi` + `yt-dlp`)
- **Local Files** — scan any folder and play your own collection
  - Supported formats: `mp3`, `flac`, `wav`, `ogg`, `oga`, `m4a`, `aac`, `wma`, `opus`, `aiff`, `alac`, `mp4`, `webm`
- **Crossfade (ala Apple Music)** 🆕 — the next song fades in *before* the current one ends. Fully optional: toggle on/off in Settings, pick a duration (2s / 4s / 6s / 8s). The **UI crossfades too** — title, artist and thumbnail fade out and the new ones fade in, perfectly in sync with the audio
- **Queue, shuffle & repeat** — full playback control plus a "Next up" panel that auto-appends recommendations when the queue runs empty
- **Playback speed** — 0.25× – 2×, persists per session
- **Seek, volume & mute** — with smooth seek bars

### 🎤 Lyrics
- **4 providers** with automatic fallback: **YT Music · LRCLib · MusixMatch · Genius**
- **Synced (timed) lyrics** — click any line to seek to that moment
- **Romanized (ROM) toggle** — for songs with Japanese/Korean titles & lyrics
- Blurred inactive lines + a **"· · ·" placeholder** for instrumental gaps

### 📚 Library
- **Playlists** — create, rename, delete and fill your own (stored locally)
- **Liked Songs** — one-tap heart, saved locally
- **Listening Statistics** — total plays, top songs, top artists, plays per day
- **Listening Calendar** — GitHub-style year heatmap + month grid; tap any day to replay what you listened to
- **HD artwork** — low-res thumbnails auto-upgraded to full quality

### 🎨 Looks & Sound
- **10-band Equalizer** + live **visualizer** (Web Audio API)
- **Theming** — dark / light mode, custom accent color, **dynamic color** sampled from the album art
- **Multi-language UI** — 🇮🇩 Indonesia · 🇬🇧 English · 🇯🇵 日本語
- **Media Session** — OS media keys (play / pause / next / prev) and system now-playing metadata

### 🔗 Integration
- **YouTube Music account** — paste a browser cookie to unlock your playlists & liked songs (guest mode otherwise)
- **Last.fm scrobbling** — now-playing + scrobble at half the track
- **Share links** — one tap copies a song's YT Music link to the clipboard

---

## ⌨️ Keyboard shortcuts

| Key | Action |
|---|---|
| `Space` | Play / Pause |
| `→` | Seek forward 5s |
| `←` | Seek backward 5s |
| `↑` | Volume up (5%) |
| `↓` | Volume down (5%) |
| `N` | Next track |
| `P` | Previous track |
| `Esc` | Close Now Playing / dialogs |

*(Media keys also work through Media Session integration.)*

---

## 🚀 Quick start

### Option A — compiled app (easiest)
1. Grab `dist\ArchiveTune.exe` from the build, or build it yourself (below).
2. Double-click it — a desktop window opens (or your browser at `http://127.0.0.1:8397`).
3. App data (settings, playlists, likes, stats) lives in a `data` folder **next to the exe**.

### Option B — from source
```bat
pip install -r backend\requirements.txt
python backend\main.py                REM opens browser automatically
python backend\main.py --no-browser --port 9000
```

### Option C — one-click build
Run `build.bat` — it installs dependencies and produces `dist\ArchiveTune.exe`.

---

## 🛠️ Build the .exe manually

```bat
pip install -r backend\requirements.txt pyinstaller
pyinstaller ArchiveTune.spec --noconfirm
```

Output: `dist\ArchiveTune.exe` — a single file (~30 MB), **no ffmpeg or extra runtime needed**.

> ⚠️ Some antivirus tools may flag PyInstaller one-file apps. This is a known false positive caused by the packaging, not the app.

---

## 🐧 Ubuntu / Debian (.deb)

Build a `.deb` on any Ubuntu machine (tested on 24.04):

```bash
bash linux/build_deb.sh
```

Output: `dist/archivetune_<version>_amd64.deb`. Install it:

```bash
sudo apt install ./dist/archivetune_<version>_amd64.deb
```

- Launches from the app menu as **ArchiveTune** (or run `archivetune` in a terminal).
- Installed to `/opt/archivetune`; user data goes to `~/.local/share/ArchiveTune`.
- The script auto-installs system deps (Python venv, `python3-gi`, `gir1.2-webkit2-4.1`/`4.0`, GStreamer codecs). Build the deb on the **same Ubuntu release** the target machine uses — the venv is tied to the local Python version.
- Prefer to build yourself, or push a `v*` tag → GitHub Actions builds and uploads the `.deb` automatically (`workflow_dispatch` works too).
- Run from source instead: `pip install -r backend/requirements.txt && python3 backend/main.py`.

---

## ⚙️ First-time setup (optional)

1. **Local files** — Library → Local Files → choose a folder.
2. **YouTube Music sign-in** — Settings → YouTube Music → paste the `Cookie` header value from a logged-in `music.youtube.com` tab (DevTools) → Save. Leave empty for guest mode.
3. **Last.fm** — Settings → Last.fm → enter API key / secret / username (from [last.fm/api/account](https://www.last.fm/api/account/)) → Connect.
4. **Charts country** — Settings → Appearance → Charts country.
5. **Crossfade** — Settings → Playback → toggle *Crossfade* and pick a duration.

---

## 🔒 Privacy

- Everything (settings, playlists, likes, statistics) is stored **locally** — in the `data` folder (Windows) or `~/.local/share/ArchiveTune` (Linux).
- YouTube Music is used **anonymously** by default (guest mode).
- **No telemetry, no ads, no accounts required.**

---

## 📁 Project structure

```
backend/
  main.py         FastAPI server, all API routes + streaming proxy
  ytm.py          YouTube Music search / browse / stream (yt-dlp)
  local.py        local file scanning, metadata & cover art (mutagen)
  library.py      playlists, liked songs, settings, stats (JSON storage)
  lyrics.py       synced lyrics — YT Music / LRCLib / MusixMatch / Genius
  scrobble.py     Last.fm scrobbling
  requirements.txt
frontend/
  index.html      app shell (player, now-playing, settings UI)
  css/style.css   Material-3 "cute" theme (dark/light + dynamic accent)
  js/app.js       player, crossfade, search, library, lyrics, EQ, stats
ArchiveTune.spec  PyInstaller build config (Windows)
build.bat         one-click Windows build script
linux/            .deb packaging: build_deb.sh, control, .desktop, launcher
.github/workflows/build-deb.yml  CI that builds the .deb on push of a v* tag
assets/           original ArchiveTune icon (png + ico)
data/             user data (auto-created at runtime)
```

---

## 💻 Tech stack

| Layer | Tech |
|---|---|
| Backend | Python · FastAPI · Uvicorn |
| Music sources | `ytmusicapi` · `yt-dlp` · `mutagen` |
| Frontend | Vanilla HTML/CSS/JS · Web Audio API |
| Packaging | PyInstaller (Windows `.exe`) · dpkg/deb (Linux `.deb`) |
| Desktop window | `pywebview` (falls back to browser) |

---

## 🌍 Geographic availability

Like the original ArchiveTune, YouTube Music data requires a **supported region**. If YT Music is unavailable in your region, use a VPN set to a supported region (e.g. US, ID, JP) for initial data fetching. **Local files always work.**

---

## ❓ Troubleshooting

| Problem | Fix |
|---|---|
| EXE flagged by antivirus | False positive — add an exclusion, or run from source instead |
| Build fails ("file in use") | Close ArchiveTune.exe / any open terminal that ran it, then retry |
| Charts / search empty | YouTube Music unavailable in your region — use a VPN (US, ID, JP…) |
| YT Music account not loading | Re-paste a fresh cookie (cookies expire) |
| Crossfade not audible | Make sure it's toggled **on** in Settings → Playback, and restart playback |

---

## ⚖️ License & disclaimer

- Ported from [ArchiveTune](https://github.com/rukamori/ArchiveTune) (GPL-3.0) by Rukamori. The original app icon is used as-is.
- **ArchiveTune™** name, logo and branding belong to their respective owners; this unofficial port is not an official ArchiveTune release.
- Not affiliated with Google LLC or YouTube. Please support the artists you love by purchasing music through official channels.
