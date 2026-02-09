import Link from "next/link";
import Image from "next/image";

import { FadeIn } from "@/components/motion/FadeIn";
import { SplitText } from "@/components/motion/SplitText";
import { Parallax } from "@/components/motion/Parallax";
import { MaskReveal } from "@/components/motion/MaskReveal";
import { Magnetic } from "@/components/motion/Magnetic";

export function HomeHero() {
  return (
    <section className="relative h-[calc(100vh-4rem)] min-h-[640px] overflow-hidden bg-neutral-200">
      <div className="absolute inset-0">
        <MaskReveal className="absolute inset-0" radiusPx={0}>
          <Parallax className="absolute inset-0" distance={36}>
            <Image
              src="/images/cloudgirlstrip.png"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-85"
            />
          </Parallax>
        </MaskReveal>
        <div className="absolute inset-0 bg-[radial-gradient(70%_55%_at_35%_35%,rgba(255,255,255,0.28),transparent_60%)]" />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      <div className="relative mx-auto flex h-full max-w-6xl items-center px-6">
        <div className="max-w-2xl text-white">
          <FadeIn>
            <SplitText
              as="h1"
              className="font-[var(--font-display)] text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl"
              delay={0.04}
              stagger={0.03}
            >
              GHOSTSIGNAL IS FOR PEOPLE WHO ARE MAKING THE WORLD.
            </SplitText>
          </FadeIn>

          <FadeIn delay={0.08}>
            <p className="mt-7 max-w-xl text-sm font-semibold tracking-wide text-white/90">
              SOULFUL PARTNERSHIPS FOR PODCASTERS AND ADVERTISERS WHO CARE.
            </p>
          </FadeIn>

          <FadeIn delay={0.14}>
            <div className="mt-10">
              <Magnetic strength={18}>
                <Link
                  href="/what-is-this"
                  className="inline-flex h-11 items-center justify-center rounded-full border border-white/70 px-10 text-xs font-semibold tracking-[0.25em] text-white transition hover:border-white hover:bg-white/10"
                  data-cursor="link"
                >
                  LEARN MORE
                </Link>
              </Magnetic>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
