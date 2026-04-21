#!/usr/bin/env bash
set -euo pipefail

# Build all sites for GitHub Pages and stage static files into ./docs.
# Usage: ./scripts/export-gh-pages.sh
# Optional override: BASE_PREFIX=/custom-path ./scripts/export-gh-pages.sh

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
DOCS_DIR="$ROOT_DIR/docs"
SITES=(portfolio barber car-repair dentist gym hvac plumber roofing spa tattoo veterinary)
ORIGIN_URL="$(git -C "$ROOT_DIR" config --get remote.origin.url || true)"
if [[ -n "$ORIGIN_URL" ]]; then
  REPO_NAME="${ORIGIN_URL##*/}"
  REPO_NAME="${REPO_NAME%.git}"
else
  REPO_NAME="$(basename "$ROOT_DIR")"
fi
CUSTOM_DOMAIN="${CUSTOM_DOMAIN:-}"

BASE_PREFIX="${BASE_PREFIX:-}"
if [[ -z "$BASE_PREFIX" ]]; then
  # Custom domains and user/org pages repo are hosted at root (/).
  # Project pages repo is hosted under /<repo-name>/.
  if [[ -n "$CUSTOM_DOMAIN" || "$REPO_NAME" == *.github.io ]]; then
    BASE_PREFIX="/"
  else
    BASE_PREFIX="/$REPO_NAME"
  fi
fi
if [[ "$BASE_PREFIX" != "/" ]]; then
  BASE_PREFIX="${BASE_PREFIX%/}"
  BASE_PREFIX="${BASE_PREFIX#/}"
  BASE_PREFIX="/$BASE_PREFIX"
fi

echo "Building with BASE_PREFIX=$BASE_PREFIX" 1>&2
BASE_PREFIX="$BASE_PREFIX" "$ROOT_DIR/scripts/build-all.sh"

echo "Clearing $DOCS_DIR" 1>&2
rm -rf "$DOCS_DIR"
mkdir -p "$DOCS_DIR"

echo "Copying portfolio build to docs/ root" 1>&2
portfolio_src="$ROOT_DIR/sites/portfolio/dist/public"
if [[ ! -d "$portfolio_src" ]]; then
  echo "portfolio build missing at $portfolio_src" 1>&2
  exit 1
fi
cp -a "$portfolio_src"/. "$DOCS_DIR"/

echo "Copying niche site builds into docs/<slug>/" 1>&2
for site in "${SITES[@]}"; do
  if [[ "$site" == "portfolio" ]]; then
    continue
  fi
  src="$ROOT_DIR/sites/$site/dist/public"
  dest="$DOCS_DIR/$site"
  if [[ ! -d "$src" ]]; then
    echo "   skipping $site (missing build at $src)" 1>&2
    continue
  fi
  mkdir -p "$dest"
  cp -a "$src"/. "$dest"/
  echo "   copied $site -> docs/$site" 1>&2
done

if [[ -n "$CUSTOM_DOMAIN" ]]; then
  echo "Writing docs/CNAME for $CUSTOM_DOMAIN" 1>&2
  printf "%s\n" "$CUSTOM_DOMAIN" > "$DOCS_DIR/CNAME"
fi

echo "Export ready in $DOCS_DIR. Push this (or gh-pages) to GitHub Pages." 1>&2
