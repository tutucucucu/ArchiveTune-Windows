@echo off
chcp 65001 >nul
title Building Donut Music
echo ==========================================
echo   Building Donut Music.exe  (onefile)
echo ==========================================
echo.

set "PY="
py -3 -c "import sys" >nul 2>nul && set "PY=py -3"
if not defined PY python -c "import sys" >nul 2>nul && set "PY=python"
if not defined PY python3 -c "import sys" >nul 2>nul && set "PY=python3"
if not defined PY (
  echo [!] Python not found.
  echo     Install Python 3.10+ from https://www.python.org/downloads/
  echo     and make sure "Add python.exe to PATH" is checked during install.
  echo.
  pause
  exit /b 1
)
echo Using: %PY%
echo.

echo [1/2] Installing dependencies...
%PY% -m pip install -r backend\requirements.txt --disable-pip-version-check -q
%PY% -m pip install pyinstaller --disable-pip-version-check -q

echo [2/2] Running PyInstaller...
%PY% -m PyInstaller ArchiveTune.spec --noconfirm
if errorlevel 1 (
  echo.
  echo [!] Build failed - close ArchiveTune.exe first, then try again.
  pause
  exit /b 1
)

echo.
echo Done! Your app is at:  dist\ArchiveTune.exe
pause
