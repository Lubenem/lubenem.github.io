# Portfolio multi-site preview

This repo now lets you preview every niche demo site from one place. Each site is built with a path prefix (e.g. `/barber`, `/dentist`) so they can be hosted side‑by‑side on one static host or via the local Express server.

## Prerequisites
- Node 18+ and npm

## Quick start (local)
1) Install root deps (needed for the Express server):
```bash
npm install
```
2) Build everything with path prefixes (installs per‑site deps on first run and outputs to `sites/<site>/dist/public`):
```bash
./scripts/build-all.sh
```
3) Serve all demos on one port:
```bash
npm run serve
```
Then open `http://localhost:4173` for the site list, or jump straight to `http://localhost:4173/barber`, `.../dentist`, etc. Stop the server anytime with `Ctrl+C` or `pkill -f serve.mjs`.

### Local preview with GitHub Pages paths
If you want local URLs to match how they’ll be hosted on Pages (e.g., `https://<user>.github.io/portfolio/<slug>/`):
```bash
BASE_PREFIX=/portfolio ./scripts/build-all.sh
BASE_PREFIX=/portfolio npm run serve
# open http://localhost:4173/portfolio/<slug>/
```

## Develop a single site
```bash
cd sites/<site>
npm install        # first time only
npm run dev        # runs at http://localhost:5000 by default
```
If you want to preview a site under its path prefix during dev, run:
```bash
BASE_PATH=/barber VITE_BASE_PATH=/barber npm run dev
```

## Deploying
Each built site lives in `sites/<site>/dist/public` and already expects to be served from `/<site>/`. Upload those folders to GitHub Pages (or any static host) under matching paths and everything will resolve correctly.

### GitHub Pages hints
- Project repo (`https://<user>.github.io/<repo>/...`) needs base prefix `/<repo>`.
- User/org repo named `<user>.github.io` is served from root `/` (no prefix).
- One-shot export (recommended):
  ```bash
  ./scripts/export-gh-pages.sh
  ```
  The script auto-detects repo type and picks `BASE_PREFIX` automatically:
  - `<user>.github.io` repo -> `/`
  - any other repo -> `/<repo-name>/`
  It rebuilds and stages files into `docs/`, with `portfolio` as the default root app and niche demos under `/<slug>/`.
  Enable GitHub Pages with the **/docs** folder as the source, then commit/push.
- Custom domain export:
  ```bash
  CUSTOM_DOMAIN=liutech.org ./scripts/export-gh-pages.sh
  ```
  This also writes `docs/CNAME`, which GitHub Pages uses for domain mapping.
- Local preview with the same prefix:
  ```bash
  npm run serve
  # open http://localhost:4173/ (portfolio app)
  # demos: http://localhost:4173/<slug>/
  ```
