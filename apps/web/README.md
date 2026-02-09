This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Ghost Signal Website

Project scaffold for the new Ghost Signal marketing site.

### Local dev

- `npm run dev` (from `apps/web`)
- Open `http://localhost:3000`

### Structure (high level)

- `src/app/(marketing)/` routes for the marketing site
- `src/content/` content/data (we’ll fill this in step-by-step)
- `src/components/` reusable UI + layout pieces
- `src/features/` page sections (Hero, etc.)
- `src/three/` isolated WebGL scenes, shaders, and effects
- `public/models/` + `public/textures/` 3D assets

### Visual/perf conventions

- Heavy visuals are client-only via `next/dynamic` (`ssr: false`)
- `prefers-reduced-motion` disables WebGL and shows a static fallback
- `PerformanceMonitor` auto-reduces DPR on slower GPUs

### UI + motion stack (current direction)

- Styling: Tailwind CSS (tokens in `src/styles/tokens.css`)
- UI components: shadcn/ui-style component primitives (Radix-based) as we add them
- Motion: Motion for React (`motion` package) for fades/slide-ins and page polish
- Advanced motion (optional): GSAP for bespoke timeline/scroll choreography

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
