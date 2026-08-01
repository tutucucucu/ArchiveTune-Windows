# ArchiveTune for Windows

🌸 The cutest music player — **ported to Windows** with a **Python (FastAPI) backend** and an **HTML/CSS/JS frontend**, packaged as a single `.exe`.

This is an unofficial Windows port of the [ArchiveTune](https://github.com/rukamori/ArchiveTune) Android app. It keeps the original app icon and packs the core ArchiveTune features into a desktop web app.

---

## ✨ Features

- **YouTube Music** — search songs / albums / artists / playlists, browse charts & genres, stream ad-free audio (via `ytmusicapi` + `yt-dlp`)
- **Local Files** — scan any folder on your PC and play your own collection (mp3, flac, wav, ogg, m4a, aac, wma, opus, aiff…)
- **Lyrics** — live synced lyrics via LRCLib (with click-to-seek), blurred-inactive-line styling, romanized (ROM) toggle, and "· · ·" placeholders for instrumental gaps
- **Playlists** — create, rename, delete and fill your own playlists (stored locally)
- **Liked Songs** — one-tap heart, saved locally
- **Queue, shuffle & repeat** — full playback control, plus a "Next up" panel with auto-recommendations when your queue is empty
- **Share links** — one tap copies a song's YouTube Music link to the clipboard
- **Equalizer** — 10-band EQ + live visualizer (Web Audio API)
- **Playback speed**, volume, seek, keyboard shortcuts
- **Listening Statistics** — total plays, top songs, top artists, plays per day
- **Listening Calendar** — GitHub-style year heatmap + month grid, tap any day to replay what you listened to
- **HD artwork** — low-res thumbnails are auto-upgraded to full quality
- **Theming** — dark/light mode, custom accent colors, dynamic color from album art
- **YouTube Music account** — paste your browser cookie to unlock your account, playlists & liked songs
- **Last.fm scrobbling** — now-playing + scrobble
- **Media Session integration** — OS media keys work (next/prev/play/pause)

---

## 🚀 Run it

### Option A — the compiled app (easiest)

1. Grab `dist\ArchiveTune.exe` from the build, or build it yourself (below).
2. Double-click it. Your browser opens automatically at `http://127.0.0.1:8397`.
3. App data (settings, playlists, stats) is saved to a `data` folder next to the exe.

### Option B — from source

```
pip install -r backend\requirements.txt
python backend\main.py          # opens browser automatically
# or:
python backend\main.py --no-browser --port 9000
```

### Option C — one-click build

Run `build.bat` — it installs dependencies and produces `dist\ArchiveTune.exe`.

---

## 🛠️ Build the .exe manually

```
pip install -r backend\requirements.txt pyinstaller
pyinstaller ArchiveTune.spec --noconfirm
```

Output: `dist\ArchiveTune.exe` (single file, ~23 MB, no ffmpeg needed).

> Note: some antivirus tools may flag PyInstaller one-file apps. This is a false positive caused by the packaging, not the app.

---

## 🌍 Geographic availability

Like the original ArchiveTune, YouTube Music data requires access to a supported region. If YouTube Music is unavailable in your region, use a VPN set to a supported region (e.g. US, ID, JP) for initial data fetching. Local files always work.

---

## ⚙️ First-time setup (optional)

1. **Local files**: Library → Local Files → Choose folder.
2. **YouTube Music sign-in**: Settings → YouTube Music → paste a cookie from a logged-in browser (e.g. copy the `Cookie` header value from `music.youtube.com` in DevTools) → Save cookie. Leave empty for guest mode.
3. **Last.fm**: Settings → Last.fm → enter API key / secret / username / password (from last.fm/api/account) → Connect.
4. **Charts country**: Settings → Appearance → Charts country.

---

## 🔒 Privacy

- All data (playlists, likes, stats, settings) is stored **locally** in the `data` folder.
- YouTube Music is used anonymously by default (guest mode).
- No telemetry, no ads.

---

## 📁 Project structure

```
backend/
  main.py       FastAPI server + all API routes + streaming proxy
  ytm.py        YouTube Music search / browse / stream (yt-dlp)
  local.py      local file scanning, metadata & art (mutagen)
  library.py    playlists, liked songs, settings, stats (JSON storage)
  lyrics.py     LRCLib synced lyrics
  scrobble.py   Last.fm scrobbling
  requirements.txt
frontend/
  index.html    app shell
  css/style.css Material-3 "cute" theme (dark/light + dynamic accent)
  js/app.js     player, search, library, lyrics, EQ, stats
ArchiveTune.spec  PyInstaller build config
build.bat         one-click build script
assets/           original ArchiveTune icon (png + ico)
```

---

## ⚖️ License & disclaimer

- Ported from [ArchiveTune](https://github.com/rukamori/ArchiveTune) (GPL-3.0) by Rukamori. The original app icon is used as-is.
- **ArchiveTune™** name, logo and branding belong to their respective owners; this unofficial port is not an official ArchiveTune release.
- Not affiliated with Google LLC or YouTube. Users are encouraged to support artists by purchasing music via official channels.
