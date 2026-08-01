@echo off
chcp 65001 >nul
title ArchiveTune for Windows
echo Starting ArchiveTune...
where python >nul 2>nul || (echo Python not found in PATH. Install Python 3.11+ and try again. & pause & exit /b 1)
python -c "import fastapi, ytmusicapi, yt_dlp, mutagen, uvicorn" 2>nul || (
  echo Installing dependencies...
  pip install -r backend\requirements.txt --disable-pip-version-check -q
)
python backend\main.py
