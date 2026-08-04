@echo off
chcp 65001 >nul
title Donut Music
echo Starting Donut Music (browser mode)...

set "PY="
py -3 -c "import sys" >nul 2>nul && set "PY=py -3"
if not defined PY python -c "import sys" >nul 2>nul && set "PY=python"
if not defined PY python3 -c "import sys" >nul 2>nul && set "PY=python3"
if not defined PY (
  echo [!] Python not found. Install Python 3.10+ from https://www.python.org/downloads/
  echo     and make sure "Add python.exe to PATH" is checked during install.
  echo.
  pause
  exit /b 1
)

%PY% -c "import fastapi, ytmusicapi, yt_dlp, mutagen, uvicorn, webview" 2>nul || (
  echo Installing dependencies...
  %PY% -m pip install -r backend\requirements.txt --disable-pip-version-check -q
)

%PY% backend\main.py --browser
pause
