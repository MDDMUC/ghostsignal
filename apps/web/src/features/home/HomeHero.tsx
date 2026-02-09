import Link from "next/link";
import Image from "next/image";

import { FadeIn } from "@/components/motion/FadeIn";

export function HomeHero() {
  return (
    <section className="relative h-[calc(100vh-4rem)] min-h-[640px] overflow-hidden bg-neutral-200">
      <div className="absolute inset-0">
        <Image
          src="/images/cloudgirlstrip.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      <div className="relative mx-auto flex h-full max-w-6xl items-center px-6">
        <div className="max-w-2xl text-white">
          <FadeIn>
            <h1 className="font-[var(--font-display)] text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
              GHOSTSIGNAL IS FOR
              <br />
              PEOPLE WHO ARE
              <br />
              MAKING THE WORLD.
            </h1>
          </FadeIn>

          <FadeIn delay={0.08}>
            <p className="mt-7 max-w-xl text-sm font-semibold tracking-wide text-white/90">
              SOULFUL PARTNERSHIPS FOR PODCASTERS AND ADVERTISERS WHO CARE.
            </p>
          </FadeIn>

          <FadeIn delay={0.14}>
            <div className="mt-10">
              <Link
                href="/what-is-this"
                className="inline-flex h-11 items-center justify-center rounded-md border border-white/70 px-10 text-xs font-semibold tracking-wider text-white transition hover:border-white hover:bg-white/10"
              >
                LEARN MORE
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
