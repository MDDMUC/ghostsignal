import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { RainbowBars } from "@/components/brand/RainbowBars";
import { FadeIn } from "@/components/motion/FadeIn";

export const metadata: Metadata = {
  title: "What is this | Ghost Signal",
};

export default function WhatIsThisPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-12 gap-0 px-6 pt-10 pb-14 sm:pt-14">
          <div className="col-span-12 pr-0 sm:col-span-5 sm:pr-10">
            <FadeIn>
              <h1 className="text-3xl font-semibold leading-tight tracking-tight text-black">
                GHOSTSignal is a values-based podcast advertising network
              </h1>
            </FadeIn>
            <FadeIn delay={0.06}>
              <p className="mt-6 max-w-sm text-xs leading-5 text-black/70">
                We are a new kind of membership organization for creators and
                brands building in the new age of multiverse advertising—where
                meaning matters more than reach.
              </p>
            </FadeIn>
          </div>

          <div className="relative col-span-12 mt-10 hidden items-stretch sm:col-span-1 sm:mt-0 sm:flex sm:justify-center">
            <RainbowBars orientation="vertical" className="my-2" />
          </div>

          <div className="relative col-span-12 mt-10 sm:col-span-6 sm:mt-0">
            <div className="relative h-[360px] overflow-hidden rounded-sm sm:h-[420px]">
              <Image
                src="/images/squarespace/what-hero.jpg"
                alt=""
                fill
                priority
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/5" />

              <div className="absolute left-12 top-12 h-28 w-28 rounded-full bg-white/70 blur-2xl" />
              <div className="absolute right-16 top-16 h-40 w-40 rounded-full bg-white/60 blur-3xl" />
              <div className="absolute right-24 bottom-12 h-24 w-24 rounded-full bg-white/65 blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-28 text-center sm:py-36">
          <FadeIn>
            <h3 className="mx-auto max-w-md text-xs font-semibold tracking-wide text-black">
              Access our whitepaper and read about how GhostSignal can help you
              make the world
            </h3>
          </FadeIn>
          <FadeIn delay={0.08}>
            <div className="mt-8 flex justify-center">
              <a
                href="https://ghostsignal.cloud/s/GS-whitepaper-v4.pdf"
                className="inline-flex h-10 items-center justify-center rounded-md border border-black/60 px-8 text-[11px] font-semibold tracking-wider text-black transition hover:bg-black/5"
              >
                Our Whitepaper
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.14}>
            <div className="mt-20 grid grid-cols-2 justify-center gap-8 sm:mt-24 sm:gap-10">
              <Link href="/for-creators" className="group">
                <div className="relative mx-auto aspect-square w-full max-w-[220px] overflow-hidden rounded-2xl">
                  <Image
                    src="/images/squarespace/what-card-creators.jpg"
                    alt=""
                    fill
                    sizes="220px"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-black/10" />
                  <div className="absolute left-4 top-4 text-xs font-semibold tracking-wide text-black">
                    FOR
                    <br />
                    CREATORS
                  </div>
                </div>
              </Link>

              <Link href="/for-advertisers" className="group">
                <div className="relative mx-auto aspect-square w-full max-w-[220px] overflow-hidden rounded-2xl">
                  <Image
                    src="/images/squarespace/what-card-advertisers.jpg"
                    alt=""
                    fill
                    sizes="220px"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-black/10" />
                  <div className="absolute left-4 top-4 text-xs font-semibold tracking-wide text-black">
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

      <section className="relative bg-black">
        <div className="pointer-events-none absolute left-0 top-0 h-16 w-full bg-white [clip-path:polygon(0_0,100%_0,100%_70%,50%_100%,0_70%)]" />

        <div className="mx-auto max-w-6xl px-6 pt-28 pb-24">
          <FadeIn>
            <p className="text-xs font-semibold tracking-wide text-white/70">
              GET IN TOUCH
            </p>
          </FadeIn>
          <FadeIn delay={0.06}>
            <h2 className="mt-5 max-w-xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
              EVERY PARTNERSHIP
              <br />
              STARTS WITH A chat
            </h2>
          </FadeIn>

          <FadeIn delay={0.12}>
            <div className="mt-14 max-w-3xl">
              <RainbowBars className="h-3 w-[320px]" />
              <div className="mt-6 rounded-2xl bg-white p-8 sm:p-10">
                <div className="grid gap-8 sm:grid-cols-[240px_1fr] sm:items-center">
                  <div className="relative overflow-hidden rounded-xl bg-neutral-200">
                    <Image
                      src="/images/squarespace/jeremy.jpg"
                      alt=""
                      width={480}
                      height={640}
                      className="h-auto w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-xs font-semibold tracking-wide text-black/70">
                      HOW TO REACH US
                    </p>
                    <p className="mt-3 max-w-sm text-xs leading-5 text-black/70">
                      Ready to find your frequency? Schedule a call.
                    </p>
                    <div className="mt-6">
                      <a
                        href="mailto:hello@ghostsignal.cloud"
                        className="inline-flex h-10 items-center justify-center rounded-md border border-black/60 px-8 text-[11px] font-semibold tracking-wider text-black transition hover:bg-black/5"
                      >
                        EMAIL US
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
