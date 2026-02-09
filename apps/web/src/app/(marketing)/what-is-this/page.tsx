import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { RainbowBars } from "@/components/brand/RainbowBars";
import { ChatCta } from "@/components/cta/ChatCta";
import { FadeIn } from "@/components/motion/FadeIn";
import { SplitText } from "@/components/motion/SplitText";
import { SectionShape } from "@/components/layout/SectionShape";
import { Magnetic } from "@/components/motion/Magnetic";

export const metadata: Metadata = {
  title: "What is this | Ghost Signal",
};

export default function WhatIsThisPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#fbfbfb] text-black">
        <div className="pointer-events-none absolute inset-0 opacity-[0.14] [background-image:radial-gradient(circle,rgba(0,0,0,0.22)_1px,transparent_1px)] [background-size:14px_14px]" />
        <div className="pointer-events-none absolute left-6 top-10 text-xs font-semibold tracking-[0.35em] text-black/50">
          Δ
        </div>
        <div className="pointer-events-none absolute right-6 top-10 text-xs font-semibold tracking-[0.35em] text-black/50">
          #
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-12 gap-10 px-6 pt-14 pb-16 sm:pt-20 sm:pb-20">
          <div className="col-span-12 sm:col-span-6">
            <FadeIn>
              <p className="text-[11px] font-semibold tracking-[0.35em] text-black/60">
                WHAT IS THIS
              </p>
            </FadeIn>

            <div className="mt-6">
              <SplitText
                as="h1"
                className="text-balance text-4xl font-semibold leading-[0.98] tracking-tight sm:text-6xl"
              >
                GHOSTSignal is a values-based podcast advertising network.
              </SplitText>
            </div>

            <FadeIn delay={0.08}>
              <p className="mt-7 max-w-lg text-sm leading-7 text-black/70">
                We are building a new kind of membership organization for
                creators and brands. In the age of multiverse advertising,
                meaning matters more than reach.
              </p>
            </FadeIn>

            <FadeIn delay={0.14}>
              <div className="mt-10 flex flex-wrap gap-3">
                <Magnetic strength={16}>
                  <a
                    href="https://ghostsignal.cloud/s/GS-whitepaper-v4.pdf"
                    className="inline-flex h-11 items-center justify-center rounded-full border border-black/70 px-7 text-[11px] font-semibold tracking-[0.25em] text-black transition hover:bg-black hover:text-white"
                    data-cursor="link"
                  >
                    OUR WHITEPAPER
                  </a>
                </Magnetic>
                <Magnetic strength={16}>
                  <Link
                    href="/get-in-touch"
                    className="inline-flex h-11 items-center justify-center rounded-full border border-black/15 bg-white px-7 text-[11px] font-semibold tracking-[0.25em] text-black/80 transition hover:border-black/30"
                    data-cursor="link"
                  >
                    GET IN TOUCH
                  </Link>
                </Magnetic>
              </div>
            </FadeIn>
          </div>

          <div className="col-span-12 sm:col-span-6">
            <FadeIn delay={0.06}>
              <div className="relative overflow-hidden rounded-[28px] border border-black/10 bg-white shadow-[0_30px_90px_rgba(0,0,0,0.08)]">
                <div className="relative h-[360px] sm:h-[440px]">
                  <Image
                    src="/images/squarespace/what-hero.jpg"
                    alt=""
                    fill
                    priority
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/10" />
                </div>
                <div className="px-7 py-6">
                  <p className="text-[11px] font-semibold tracking-[0.35em] text-black/55">
                    A SIGNAL YOU CAN TRUST
                  </p>
                  <p className="mt-3 text-sm leading-7 text-black/70">
                    We curate partnerships that feel natural. We protect creator
                    voice. We optimize for resonance.
                  </p>
                  <div className="mt-6">
                    <RainbowBars className="h-[10px] w-[340px] max-w-full opacity-90" />
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="relative bg-white text-black">
        <SectionShape variant="white" />
        <div className="mx-auto max-w-6xl px-6 pt-20 pb-20 text-center sm:pt-28 sm:pb-28">
          <div className="mx-auto max-w-3xl">
            <SplitText
              as="h2"
              className="text-balance text-4xl font-semibold leading-[0.98] tracking-tight sm:text-5xl"
              delay={0.05}
            >
              Access our whitepaper.
              Read how GhostSignal can help you make the world.
            </SplitText>
          </div>

          <FadeIn delay={0.12}>
            <div className="mt-10 flex justify-center">
              <a
                href="https://ghostsignal.cloud/s/GS-whitepaper-v4.pdf"
                className="inline-flex h-11 items-center justify-center rounded-full border border-black/70 px-9 text-[11px] font-semibold tracking-[0.25em] text-black transition hover:bg-black hover:text-white"
              >
                DOWNLOAD
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.18}>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-2 gap-8 sm:mt-20 sm:gap-10">
              <Link href="/for-creators" className="group">
                <div className="relative mx-auto aspect-square w-full overflow-hidden rounded-3xl border border-black/10 bg-neutral-100">
                  <Image
                    src="/images/squarespace/what-card-creators.jpg"
                    alt=""
                    fill
                    sizes="(min-width: 640px) 280px, 45vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-black/10" />
                  <div className="absolute left-5 top-5 text-[11px] font-semibold tracking-[0.35em] text-black">
                    FOR
                    <br />
                    CREATORS
                  </div>
                </div>
              </Link>

              <Link href="/for-advertisers" className="group">
                <div className="relative mx-auto aspect-square w-full overflow-hidden rounded-3xl border border-black/10 bg-neutral-100">
                  <Image
                    src="/images/squarespace/what-card-advertisers.jpg"
                    alt=""
                    fill
                    sizes="(min-width: 640px) 280px, 45vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-black/10" />
                  <div className="absolute left-5 top-5 text-[11px] font-semibold tracking-[0.35em] text-black">
                    FOR
                    <br />
                    ADVERTISERS
                  </div>
                </div>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <ChatCta />
    </>
  );
}
