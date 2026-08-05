# -*- mode: python ; coding: utf-8 -*-
# PyInstaller spec for Donut Music for Windows
from PyInstaller.utils.hooks import collect_data_files

datas = [("frontend", "frontend"), ("assets/icon.png", "assets")]
datas += collect_data_files("ytmusicapi")
datas += collect_data_files("yt_dlp")

hiddenimports = [
    "uvicorn.logging",
    "uvicorn.loops.auto",
    "uvicorn.loops.asyncio",
    "uvicorn.protocols.auto",
    "uvicorn.protocols.http.auto",
    "uvicorn.protocols.http.h11_impl",
    "uvicorn.protocols.websockets.auto",
    "uvicorn.protocols.websockets.websockets_impl",
    "uvicorn.lifespan.auto",
    "uvicorn.lifespan.on",
    "mutagen.aiff",
    "mutagen.asf",
    "mutagen.flac",
    "mutagen.mp3",
    "mutagen.mp4",
    "mutagen.oggopus",
    "mutagen.oggvorbis",
    "mutagen.wave",
    "requests.adapters",
    "webview",
    "webview.platforms.winforms",
    "clr",
    "pythonnet",
]

a = Analysis(
    ["backend/main.py"],
    pathex=["backend"],
    binaries=[],
    datas=datas,
    hiddenimports=hiddenimports,
    hookspath=[],
    runtime_hooks=[],
    excludes=["tkinter", "matplotlib", "numpy", "scipy", "PyQt5", "PySide2"],
    noarchive=False,
)

pyz = PYZ(a.pure)

exe = EXE(
    pyz,
    a.scripts,
    a.binaries,
    a.datas,
    [],
    name="Donut Music",
    debug=False,
    bootloader_ignore_signals=False,
    strip=False,
    upx=False,
    console=False,
    disable_windowed_traceback=False,
    icon="assets/icon.ico",
)