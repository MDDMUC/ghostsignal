import { HeroVisual } from "@/features/hero/HeroVisual";
import { FadeIn } from "@/components/motion/FadeIn";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <HeroVisual />
      </div>

      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <FadeIn>
          <p className="text-sm font-medium tracking-wider text-muted">
            Ghost Signal
          </p>
        </FadeIn>
        <FadeIn delay={0.05}>
          <h1 className="mt-4 max-w-2xl text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            A new website, built for speed and cinematic visuals.
          </h1>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-8 text-muted">
            This scaffold is ready for Figma-driven design tokens, a reusable UI
            system, and isolated WebGL scenes (particles, liquid shaders, and 3D
            elements) that load client-side only.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
