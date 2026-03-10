#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
SOURCE_DIR="$ROOT_DIR/assets/logos"
OUTPUT_DIR="$ROOT_DIR/dist"
OUTPUT_FILE="$OUTPUT_DIR/logo-assets-binaries.zip"

if [[ ! -d "$SOURCE_DIR" ]]; then
  echo "Logo assets not found. Fetching them first..."
  "$ROOT_DIR/scripts/fetch-logo-assets.sh"
fi

mkdir -p "$OUTPUT_DIR"
rm -f "$OUTPUT_FILE"

(
  cd "$ROOT_DIR"
  zip -r "$OUTPUT_FILE" assets/logos >/dev/null
)

echo "Created: $OUTPUT_FILE"
