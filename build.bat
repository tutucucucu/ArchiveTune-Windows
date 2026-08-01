@echo off
chcp 65001 >nul
title Building ArchiveTune for Windows
echo ==========================================
echo   Building ArchiveTune.exe  (onefile)
echo ==========================================
echo.

where pyinstaller >nul 2>nul
if errorlevel 1 (
  echo [!] pyinstaller not found - installing...
  pip install pyinstaller --disable-pip-version-check
)

echo [1/2] Installing dependencies...
pip install -r backend\requirements.txt --disable-pip-version-check -q

echo [2/2] Running PyInstaller...
pyinstaller ArchiveTune.spec --noconfirm

echo.
echo Done! Your app is at:  dist\ArchiveTune.exe
pause
