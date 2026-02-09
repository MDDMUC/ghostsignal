# Session Log: 2026-02-09

Scope: continue the Ghost Signal site rebuild (Next.js app in `apps/web`) after a terminated session, match the Squarespace site more closely, make the repo lean with an asset-vault workflow, and add a Motto-inspired motion system.

## Repo / Project Layout

- Website lives at `apps/web` (Next.js app router).
- Marketing routes under `apps/web/src/app/(marketing)/`.
- Shared UI under `apps/web/src/components/`.
- Page features under `apps/web/src/features/`.
- WebGL scenes under `apps/web/src/three/` (client-only dynamic import, reduced-motion fallback).

## Pages

Marketing routes now exist and are non-placeholder:

- `/` home hero (`apps/web/src/features/home/HomeHero.tsx`)
- `/what-is-this` redesigned with editorial layout + motion (`apps/web/src/app/(marketing)/what-is-this/page.tsx`)
- `/for-creators` rebuilt (Squarespace-matching sections) (`apps/web/src/app/(marketing)/for-creators/page.tsx`)
- `/for-advertisers` rebuilt (Squarespace-matching sections) (`apps/web/src/app/(marketing)/for-advertisers/page.tsx`)
- `/who-are-we` rebuilt, including local background asset (`apps/web/src/app/(marketing)/who-are-we/page.tsx`)
- `/get-in-touch` rebuilt, includes real form submission (`apps/web/src/app/(marketing)/get-in-touch/page.tsx`)
- `/snowdrift` rebuilt, local logo + mockup, includes real signup submission (`apps/web/src/app/(marketing)/snowdrift/page.tsx`)

## Forms (No More `mailto:`)

Added server-side form handlers:

- `apps/web/src/app/api/get-in-touch/route.ts`
- `apps/web/src/app/api/snowdrift/route.ts`

Behavior:

- Honeypot field `company` to filter bots.
- Logs submissions server-side.
- Optional delivery:
  - Webhook: `CONTACT_WEBHOOK_URL`, `SNOWDRIFT_WEBHOOK_URL`
  - Resend email (HTTP API): `RESEND_API_KEY`, `RESEND_FROM`, `CONTACT_TO`, `SNOWDRIFT_TO`
- Redirects to `?submitted=1` for success states.

Documented env vars in `apps/web/.env.example`.

## Shared CTA Refactor

Deduplicated the repeated "Every partnership starts with a chat" block into:

- `apps/web/src/components/cta/ChatCta.tsx`

## Motto-Inspired Motion Layer

Implemented a cohesive motion system inspired by `wearemotto.com` (not a copy of their code):

- Intro preloader (once per session): `apps/web/src/components/motion/IntroLoader.tsx`
- Route curtain wipe on navigation: `apps/web/src/components/motion/RouteWipe.tsx`
- Editorial stagger text reveal: `apps/web/src/components/motion/SplitText.tsx`
- Smooth inertial scrolling (Lenis): `apps/web/src/components/motion/SmoothScroll.tsx`
- Custom cursor (dot + ring): `apps/web/src/components/motion/CustomCursor.tsx`
- Magnetic hover wrapper: `apps/web/src/components/motion/Magnetic.tsx`
- Mask-based reveal: `apps/web/src/components/motion/MaskReveal.tsx`
- Scroll-linked parallax: `apps/web/src/components/motion/Parallax.tsx`
- Subtle grain overlay: `apps/web/src/components/motion/GrainOverlay.tsx`

Wired globally for marketing pages in:

- `apps/web/src/app/(marketing)/layout.tsx`
- `apps/web/src/app/globals.css` (cursor hiding when enabled)

## Asset Workflow (Keep Git Lean)

Split assets into:

- Local vault (ignored): `assets/` (raw exports, inspiration, working files)
- Shipped assets (tracked): `apps/web/public/` (only what code references)

Actions taken:

- Updated root `.gitignore` to ignore `assets/**` but allow `assets/README.md`.
- Added `assets/README.md` describing policy.
- Untracked previously committed `assets/*` so repo history stays lean.

## Public Asset Auditing

Added an automated audit + manifest generator:

- Script: `apps/web/scripts/audit-public-assets.mjs`
- Commands:
  - `npm run assets:audit`
  - `npm run assets:manifest`
- Output: `apps/web/public/assets.manifest.json` (tracks referenced `public/` assets)

## Next 16 Typegen Stability

Added a small helper to prevent occasional missing `.next/types/cache-life.d.ts` errors during `tsc --noEmit`:

- `apps/web/scripts/ensure-next-types.mjs`
- Wired into `apps/web/package.json` `typecheck` script.

## Localized Images

Moved select assets from the raw vault into shipped paths under `apps/web/public/`:

- Who Are We background: `apps/web/public/images/squarespace/who-are-we/bg.png`
- SnowDrift logo + mockup: `apps/web/public/images/squarespace/snowdrift/logo.png`, `mockup.png`
- Morse strips + brand bits: `apps/web/public/images/brand/*`

## Build Verification

Verified locally:

- `npm run typecheck`
- `npm run lint`
- `npm run assets:audit`
- `npm run build`

