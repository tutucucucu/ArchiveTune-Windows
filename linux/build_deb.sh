#!/usr/bin/env bash
# ============================================================
#  Build ArchiveTune .deb for Ubuntu/Debian (amd64)
#
#  Usage:   bash linux/build_deb.sh [version]
#  Result:  dist/archivetune_<version>_amd64.deb
#
#  Notes:
#  - Run it on the same Ubuntu release you want to target
#    (Python venv is tied to the local python3 minor version).
#  - The app is installed to /opt/archivetune; user data goes to
#    ~/.local/share/ArchiveTune.
# ============================================================
set -euo pipefail
cd "$(dirname "$0")/.."

PKG_NAME="archivetune"
VERSION="${1:-$(git describe --tags --always --dirty 2>/dev/null || echo 1.0.0)}"
VERSION="${VERSION#v}"
ROOT="$(pwd)"
BUILD="$(mktemp -d)"
trap 'rm -rf "$BUILD"' EXIT

echo "==> ArchiveTune .deb builder  (version: $VERSION)"

command -v python3 >/dev/null || { echo "[!] python3 required"; exit 1; }
PYVER="$(python3 -c 'import sys; print(f"{sys.version_info.major}.{sys.version_info.minor}")')"
echo "==> python3.$PYVER"

if [ ! -f /etc/os-release ]; then
  echo "[!] This script expects Ubuntu/Debian (/etc/os-release missing)"; exit 1
fi
. /etc/os-release
echo "==> distro: $PRETTY_NAME"

# --- pick webkit2gtk variant (4.1 on Ubuntu 23.10+ / Debian 13+, else 4.0) ---
case "$ID $VERSION_ID" in
  "ubuntu 23.10"|"ubuntu 24.04"|"ubuntu 24.10"|"ubuntu 25.04"|"ubuntu 25.10"|"ubuntu 26.04"|"debian 13"|"debian 14")
    WEBKIT_DEB="libwebkit2gtk-4.1-0";  WEBKIT_GIR="gir1.2-webkit2-4.1" ;;
  *)
    WEBKIT_DEB="libwebkit2gtk-4.0-37"; WEBKIT_GIR="gir1.2-webkit2-4.0" ;;
esac

# --- install build + runtime deps ---------------------------------
echo "==> installing system dependencies..."
sudo apt-get update -y
sudo apt-get install -y \
  python3 python3-venv python3-gi python3-gi-cairo \
  gir1.2-gtk-3.0 "$WEBKIT_DEB" "$WEBKIT_GIR" \
  libgirepository-1.0-1 dpkg-dev \
  gstreamer1.0-plugins-base gstreamer1.0-plugins-good \
  gstreamer1.0-plugins-bad gstreamer1.0-libav

# --- stage the package tree --------------------------------------
STAGE="$BUILD/stage"
mkdir -p "$STAGE/DEBIAN"
mkdir -p "$STAGE/opt/$PKG_NAME/app"
mkdir -p "$STAGE/usr/share/applications"
mkdir -p "$STAGE/usr/share/icons/hicolor/256x256/apps"
mkdir -p "$STAGE/usr/bin"

echo "==> copying app source..."
cp -r "$ROOT/backend" "$ROOT/frontend" "$STAGE/opt/$PKG_NAME/app/"
find "$STAGE/opt/$PKG_NAME/app" -name __pycache__ -type d -prune -exec rm -rf {} +

echo "==> creating Python venv (system-site-packages for GI)..."
python3 -m venv --system-site-packages "$STAGE/opt/$PKG_NAME/venv"
"$STAGE/opt/$PKG_NAME/venv/bin/pip" install --no-cache-dir -r "$ROOT/backend/requirements.txt"

echo "==> generating icons..."
"$STAGE/opt/$PKG_NAME/venv/bin/python" - "$ROOT/assets/icon.png" "$STAGE/usr/share/icons/hicolor/256x256/apps/$PKG_NAME.png" <<'PY'
import sys
from PIL import Image
im = Image.open(sys.argv[1]).convert("RGBA")
im.thumbnail((256, 256), Image.LANCZOS)
im.save(sys.argv[2])
PY

echo "==> installing desktop entry + launcher..."
sed "s/@PKG_NAME@/$PKG_NAME/g" "$ROOT/linux/ArchiveTune.desktop" \
  > "$STAGE/usr/share/applications/$PKG_NAME.desktop"
cp "$ROOT/linux/archivetune-launcher" "$STAGE/usr/bin/$PKG_NAME"
chmod 755 "$STAGE/usr/bin/$PKG_NAME"

echo "==> writing control file..."
sed -e "s/@VERSION@/$VERSION/" \
    -e "s/@PYVER@/$PYVER/" \
    -e "s/@WEBKIT_DEB@/$WEBKIT_DEB/" \
    -e "s/@WEBKIT_GIR@/$WEBKIT_GIR/" \
    "$ROOT/linux/control" > "$STAGE/DEBIAN/control"

echo "==> building .deb..."
mkdir -p "$ROOT/dist"
DEB="$ROOT/dist/${PKG_NAME}_${VERSION}_amd64.deb"
dpkg-deb --root-owner-group --build "$STAGE" "$DEB"

echo ""
echo "Done! Install it with:"
echo "    sudo apt install ./$DEB"
echo ""
