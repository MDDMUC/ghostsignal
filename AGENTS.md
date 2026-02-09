# Agent Instructions (ghostsignal)

This repo has two kinds of assets:

1. **Raw/source assets (local-only vault)**: `assets/`
2. **Shipped website assets (tracked)**: `apps/web/public/`

## Asset Policy (Keep Git Lean)

- Treat `assets/` as a **scratch / vault directory** for exports, inspiration, PSDs, big dumps.
- **Do not commit** raw/source assets from `assets/`.
- Any file that the website code references (for example `"/images/..."`, `"/lottie/..."`) must exist in `apps/web/public/` and should be committed.
- If an asset is needed for the site, copy it from `assets/` into `apps/web/public/...` using clean names and stable paths.

Notes:
- `.gitignore` ignores `assets/` to prevent accidental commits, but it does not remove files already tracked in git.
- If the repo still tracks `assets/*`, untrack them once with:
  - `git rm -r --cached assets`
  - re-add `assets/README.md` (kept as documentation)

## Canonical Locations

- Raw vault (ignored): `assets/`
- Website public root (tracked): `apps/web/public/`
- Website images (tracked): `apps/web/public/images/`

Recommended structure under `apps/web/public/images/`:
- `brand/` (logos, morse strips, brand textures)
- `squarespace/` (page-specific assets grouped by route)

## Validation (Automation)

From `apps/web`:
- `npm run assets:audit` checks that every referenced `public/` asset exists.
- `npm run assets:manifest` regenerates `public/assets.manifest.json` (list of referenced public assets).

Rules for agents:
- Before shipping a page change, run:
  - `npm run assets:audit`
  - `npm run typecheck`
  - `npm run lint`

If `assets:audit` reports missing files:
- Look for the file in the raw vault `assets/` and copy it into `apps/web/public/...`.
- Update the code to reference only `public/` paths (no hotlinking unless explicitly requested).

