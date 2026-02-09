import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { LottiePlayer } from "@/components/media/LottiePlayer";
import { FadeIn } from "@/components/motion/FadeIn";
import { SplitText } from "@/components/motion/SplitText";
import { RainbowBars } from "@/components/brand/RainbowBars";
import { SectionShape } from "@/components/layout/SectionShape";
import { ChatCta } from "@/components/cta/ChatCta";
import { MaskReveal } from "@/components/motion/MaskReveal";
import { Parallax } from "@/components/motion/Parallax";

export const metadata: Metadata = {
  title: "For advertisers | Ghost Signal",
};

export default function ForAdvertisersPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-white text-black">
        <div className="absolute inset-0 opacity-95">
          <LottiePlayer src="/lottie/advertisers.json" className="h-full w-full" />
        </div>
        <div className="absolute inset-0 bg-white/40" />

        <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-28 sm:pt-28">
          <FadeIn>
            <SplitText
              as="h1"
              className="max-w-3xl text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl"
              delay={0.04}
              stagger={0.03}
            >
              The right audience changes everything.
            </SplitText>
          </FadeIn>
          <FadeIn delay={0.08}>
            <p className="mt-8 max-w-3xl text-lg leading-8 text-black/70">
              We help you reach the right audience by pairing your brand with
              creators who share your convictions. When alignment is authentic,
              trust flows naturally — and{" "}
              <strong className="font-semibold text-black">
                trust is the soil where conversion grows.
              </strong>
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="relative bg-white text-black">
        <SectionShape variant="white" />
        <div className="mx-auto grid max-w-6xl grid-cols-12 gap-10 px-6 pt-24 pb-28 sm:gap-14">
          <div className="col-span-12 sm:col-span-6">
            <FadeIn>
              <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                THE BUSINESS CASE
              </h2>
              <div className="mt-8 space-y-6 text-sm leading-6 text-black/70">
                <p>
                  We only match you with creators who make sense for your
                  mission. Every partnership is considered.
                </p>
                <ul className="list-disc space-y-3 pl-5">
                  <li>Values-based pairing</li>
                  <li>Transparent reporting</li>
                  <li>Creative support</li>
                  <li>Long-term relationships</li>
                </ul>
              </div>
            </FadeIn>
          </div>

          <div className="col-span-12 sm:col-span-6">
            <FadeIn delay={0.06}>
              <div className="relative mx-auto aspect-[4/3] w-full max-w-lg overflow-hidden rounded-2xl bg-neutral-100">
                <Image
                  src="/images/squarespace/advertisers/statue.jpg"
                  alt=""
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white text-black">
        <SectionShape variant="white" />
        <div className="mx-auto max-w-6xl px-6 pt-24 pb-28 text-center">
          <FadeIn>
            <h2 className="mx-auto max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
              Most ad buys chase impressions. <br />
              We curate <br />
              conviction.
            </h2>
          </FadeIn>
          <FadeIn delay={0.08}>
            <p className="mx-auto mt-8 max-w-xl text-sm leading-6 text-black/70">
              We only match you with creators who make sense for your mission.
              Every partnership is considered.
            </p>
          </FadeIn>

          <FadeIn delay={0.14}>
            <div className="mt-12 flex justify-center">
              <a
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md border border-black/60 px-8 text-[11px] font-semibold tracking-wider text-black transition hover:bg-black/5"
              >
                OUR CURATION
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="relative overflow-hidden bg-black text-white">
        <SectionShape variant="black" className="bg-white" />

        <div className="absolute inset-0 opacity-40">
          <MaskReveal className="absolute inset-0" radiusPx={0} delay={0.02}>
            <Parallax className="absolute inset-0" distance={34}>
              <Image
                src="/images/squarespace/advertisers/tile2.jpg"
                alt=""
                fill
                sizes="100vw"
                className="object-cover"
              />
            </Parallax>
          </MaskReveal>
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative mx-auto grid max-w-6xl grid-cols-12 gap-10 px-6 pt-28 pb-28 sm:gap-14">
          <div className="col-span-12 sm:col-span-6">
            <FadeIn>
              <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-2xl bg-white/5">
                <Image
                  src="/images/squarespace/advertisers/statue.jpg"
                  alt=""
                  fill
                  sizes="(min-width: 640px) 40vw, 90vw"
                  className="object-cover opacity-90 grayscale"
                />
              </div>
            </FadeIn>
          </div>

          <div className="col-span-12 sm:col-span-6">
            <FadeIn delay={0.06}>
              <p className="text-xs font-semibold tracking-wide text-white/70">
                WHY WE DO IT
              </p>
              <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                GHOSTSignal is about <strong className="font-bold">resonance</strong>.
              </h2>
              <div className="mt-7 space-y-5 text-lg leading-8 text-white/80">
                <p>
                  We connect you with creators whose audiences are ready to
                  embrace your brand. To do this, we have a system called the
                  “Resonance Index” that helps us to learn about you and steward
                  your story.
                </p>
                <p>
                  We handle the contracts, ad creation, and transparent
                  reporting—ensuring the partnership feels natural and delivers
                  a resonant return.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="relative bg-white">
        <SectionShape variant="white" />
        <div className="mx-auto max-w-6xl px-6 pt-24 pb-28">
          <FadeIn>
            <h2 className="text-sm font-semibold tracking-wide text-black/70">
              EVERY PARTNERSHIP STARTS WITH A CHAT
            </h2>
          </FadeIn>

          <FadeIn delay={0.06}>
            <div className="mt-6">
              <RainbowBars className="h-3 w-[320px]" />
              <div className="mt-6 rounded-2xl border border-black/10 bg-white p-8 sm:p-10">
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
                    <div className="mt-6 flex flex-wrap gap-3">
                      <a
                        href="mailto:hello@ghostsignal.cloud"
                        className="inline-flex h-10 items-center justify-center rounded-md border border-black/60 px-8 text-[11px] font-semibold tracking-wider text-black transition hover:bg-black/5"
                      >
                        EMAIL US
                      </a>
                      <Link
                        href="/get-in-touch"
                        className="inline-flex h-10 items-center justify-center rounded-md border border-black/20 px-8 text-[11px] font-semibold tracking-wider text-black/80 transition hover:bg-black/5"
                      >
                        GET IN TOUCH
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <ChatCta variant="white" />
    </>
  );
}
