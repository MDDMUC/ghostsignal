import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { LottiePlayer } from "@/components/media/LottiePlayer";
import { RainbowBars } from "@/components/brand/RainbowBars";
import { FadeIn } from "@/components/motion/FadeIn";
import { SplitText } from "@/components/motion/SplitText";
import { SectionShape } from "@/components/layout/SectionShape";
import { ChatCta } from "@/components/cta/ChatCta";
import { Parallax } from "@/components/motion/Parallax";
import { MaskReveal } from "@/components/motion/MaskReveal";

export const metadata: Metadata = {
  title: "For creators | Ghost Signal",
};

export default function ForCreatorsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-black text-white">
        <div className="absolute inset-0 opacity-95">
          <LottiePlayer src="/lottie/creators.json" className="h-full w-full" />
        </div>
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-28 sm:pt-28">
          <FadeIn>
            <SplitText
              as="h1"
              className="max-w-2xl text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl"
              delay={0.04}
              stagger={0.03}
            >
              Your podcast is cultural architecture. You are building the future.
            </SplitText>
          </FadeIn>
          <FadeIn delay={0.08}>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/80">
              What if you could monetize your podcast while maintaining your
              voice and values? The traditional ad model forces impossible
              choices: compromise your voice, risk your audience&apos;s trust, or
              drown in administrative tasks.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="relative bg-white text-black">
        <SectionShape variant="white" />
        <div className="mx-auto max-w-6xl px-6 pt-24 pb-24 sm:pt-28">
          <FadeIn>
            <h3 className="max-w-3xl text-2xl font-semibold leading-snug tracking-tight">
              Your voice is not for sale. <br />
              Your audience is not a data point. <br />
              Your work is not merely &quot;content.&quot;
            </h3>
          </FadeIn>
          <FadeIn delay={0.06}>
            <p className="mt-10 max-w-3xl text-lg leading-8 text-black/70">
              We are here to protect your voice, honor your audience, and help
              you find the partners who will make the world alongside you.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="relative bg-white text-black">
        <div className="mx-auto grid max-w-6xl grid-cols-12 gap-10 px-6 pb-28 sm:gap-14">
          <div className="col-span-12 sm:col-span-6">
            <FadeIn>
              <h2 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                GHOSTSignal is <br />
                Advertising-as-Support-System
              </h2>
            </FadeIn>
          </div>

          <div className="col-span-12 sm:col-span-6">
            <div className="grid gap-10">
              <FadeIn delay={0.02}>
                <div>
                  <p className="text-lg font-semibold">
                    Soul-Aligned <br />
                    Partnerships
                  </p>
                  <p className="mt-3 text-sm leading-6 text-black/70">
                    We match you with brands whose products and mission align
                    with your own.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.06}>
                <div>
                  <p className="text-lg font-semibold">
                    Administrative <br />
                    Freedom
                  </p>
                  <p className="mt-3 text-sm leading-6 text-black/70">
                    We handle the paperwork, contracts, reporting, and payment
                    tracking (including transparent revenue splits) so you are
                    freed up to create.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.1}>
                <div>
                  <p className="text-lg font-semibold">RELATIONSHIP</p>
                  <p className="mt-3 text-sm leading-6 text-black/70">
                    We find advertisers who resonate with the world that
                    you&apos;re building. Every partnership is curated to feel
                    natural. To do this, we have a system called the “Resonance
                    Index” that helps us to learn about you and steward your
                    story.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-black text-white">
        <SectionShape variant="black" className="bg-white" />
        <div className="absolute inset-0 opacity-55">
          <MaskReveal className="absolute inset-0" radiusPx={0} delay={0.02}>
            <Parallax className="absolute inset-0" distance={34}>
              <Image
                src="/images/squarespace/creators/ladyshorter.jpg"
                alt=""
                fill
                sizes="100vw"
                className="object-cover"
                priority={false}
              />
            </Parallax>
          </MaskReveal>
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 pt-28 pb-28">
          <FadeIn>
            <h2 className="text-5xl font-semibold leading-tight tracking-tight sm:text-6xl">
              your <br />
              Membership journey
            </h2>
          </FadeIn>

          <FadeIn delay={0.08}>
            <div className="mt-12 max-w-2xl text-sm leading-6 text-white/80">
              <p>
                you don’t need a million downloads to matter. You just need
                conviction and the right partner to amplify your voice.
              </p>
            </div>
          </FadeIn>
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
