import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { FadeIn } from "@/components/motion/FadeIn";
import { RainbowBars } from "@/components/brand/RainbowBars";
import { SectionShape } from "@/components/layout/SectionShape";
import { ChatCta } from "@/components/cta/ChatCta";
import { MaskReveal } from "@/components/motion/MaskReveal";
import { Parallax } from "@/components/motion/Parallax";

export const metadata: Metadata = {
  title: "Who are we | Ghost Signal",
};

const team = [
  {
    name: "Mike Belsito",
    role: "Founder",
    bio: "Mike is a podcaster and business leader obsessed with building a better advertising model.",
    href: "https://www.linkedin.com/in/mikebelsito/",
    image: "/images/squarespace/jeremy.jpg",
  },
  {
    name: "Jack Hough",
    role: "Chief Operating Officer",
    bio: "Jack builds systems that let creators stay in their craft while partnerships scale with integrity.",
    href: "https://www.linkedin.com/in/jackhough/",
    image: "/images/squarespace/creators/face3.jpg",
  },
  {
    name: "Jeremy Enns",
    role: "Founding Advisor",
    bio: "Jeremy helps shape our positioning and partnerships, keeping the work grounded in audience trust.",
    href: "https://www.linkedin.com/in/jeremyenns/",
    image: "/images/squarespace/jeremy.jpg",
  },
  {
    name: "Martin Roth",
    role: "Founding Advisor",
    bio: "Martin brings operator-level experience and sharp instincts for values-aligned growth.",
    href: "https://www.linkedin.com/in/martinroth/",
    image: "/images/squarespace/advertisers/statue.jpg",
  },
] as const;

export default function WhoAreWePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-white text-black">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#bff4ff_0%,#f7bfd8_46%,#ffffff_100%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-25 [background-image:radial-gradient(circle,rgba(0,0,0,0.14)_1px,transparent_1px)] [background-size:14px_14px]" />

        <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-20 sm:pt-24">
          <div className="mx-auto max-w-3xl text-center">
            <FadeIn>
              <p className="text-xs font-semibold tracking-wide text-black/60">
                WE ARE A TEAM COMMITTED
                <br />
                TO THE WORLD WE
                <br />
                ARE MAKING.
              </p>
            </FadeIn>
            <FadeIn delay={0.06}>
              <h1 className="mt-8 text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                We believe the future of
                <br />
                advertising is soulful.
              </h1>
            </FadeIn>
          </div>

          <FadeIn delay={0.12}>
            <div className="mx-auto mt-14 max-w-5xl overflow-hidden rounded-[28px] border border-black/10 bg-white/65 shadow-[0_30px_90px_rgba(0,0,0,0.10)]">
              <div className="relative h-[300px] sm:h-[420px]">
                <MaskReveal className="absolute inset-0" radiusPx={28} delay={0.02}>
                  <Parallax className="absolute inset-0" distance={32}>
                    <Image
                      src="/images/squarespace/who-are-we/bg.png"
                      alt=""
                      fill
                      priority={false}
                      sizes="(min-width: 640px) 1000px, 100vw"
                      className="object-cover"
                    />
                  </Parallax>
                </MaskReveal>
                <div className="absolute inset-0 bg-white/35" />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="relative bg-white text-black">
        <SectionShape variant="white" />
        <div className="mx-auto grid max-w-6xl grid-cols-12 gap-10 px-6 pt-24 pb-24 sm:gap-14">
          <div className="col-span-12 sm:col-span-5">
            <FadeIn>
              <p className="text-xs font-semibold tracking-wide text-black/60">
                GHOSTSIGNAL IS A
              </p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                PARTNER-MAKING
                <br />
                FORCE.
              </h2>
            </FadeIn>
          </div>

          <div className="col-span-12 sm:col-span-7">
            <FadeIn delay={0.06}>
              <div className="space-y-5 text-sm leading-7 text-black/70">
                <p>
                  GhostSignal connects advertisers with independent podcast creators
                  so that meaningful products can reach the people who need them.
                </p>
                <p>
                  We are a network powered by relationships, not algorithms.
                  We take time to understand your story and pair you with partners
                  who share your convictions.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="relative bg-white text-black">
        <SectionShape variant="white" />
        <div className="mx-auto max-w-6xl px-6 pt-20 pb-28">
          <FadeIn>
            <div className="text-center">
              <RainbowBars className="mx-auto h-2 w-[380px] max-w-full" />
              <h2 className="mt-6 text-2xl font-semibold tracking-tight">
                THE TEAM
              </h2>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <div className="mx-auto mt-14 grid max-w-5xl gap-6 sm:grid-cols-2">
              {team.map((person) => (
                <div
                  key={person.name}
                  className="rounded-2xl border border-black/10 bg-white p-7"
                >
                  <div className="flex items-start gap-4">
                    <div className="relative h-14 w-14 overflow-hidden rounded-2xl bg-neutral-100">
                      <Image
                        src={person.image}
                        alt=""
                        fill
                        sizes="56px"
                        className="object-cover grayscale"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="text-base font-semibold tracking-tight">
                        {person.name}
                      </p>
                      <p className="mt-1 text-xs font-semibold tracking-wide text-black/60">
                        {person.role}
                      </p>
                    </div>
                    <a
                      href={person.href}
                      target="_blank"
                      rel="noreferrer"
                      className="ml-auto text-xs font-semibold text-black/50 transition hover:text-black"
                    >
                      LinkedIn
                    </a>
                  </div>
                  <p className="mt-5 text-sm leading-7 text-black/70">
                    {person.bio}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="relative bg-white text-black">
        <SectionShape variant="white" />
        <div className="mx-auto max-w-6xl px-6 pt-20 pb-24">
          <FadeIn>
            <div className="text-center">
              <RainbowBars className="mx-auto h-2 w-[380px] max-w-full" />
              <h2 className="mt-6 text-2xl font-semibold tracking-tight">
                WE PROMISE
              </h2>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <div className="mt-12 grid gap-10 sm:grid-cols-3">
              <div>
                <p className="text-xs font-semibold tracking-wide text-black/60">
                  FOR PODCASTERS
                </p>
                <p className="mt-4 text-sm font-semibold tracking-tight">
                  Your voice is not for sale.
                </p>
                <p className="mt-3 text-sm leading-7 text-black/70">
                  We protect your relationship with your audience and build
                  partnerships that feel natural.
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold tracking-wide text-black/60">
                  FOR ADVERTISERS
                </p>
                <p className="mt-4 text-sm font-semibold tracking-tight">
                  Trust beats targeting.
                </p>
                <p className="mt-3 text-sm leading-7 text-black/70">
                  We connect you with creators whose audiences already share
                  your values and intent.
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold tracking-wide text-black/60">
                  FOR BOTH
                </p>
                <p className="mt-4 text-sm font-semibold tracking-tight">
                  Relationship is the medium.
                </p>
                <p className="mt-3 text-sm leading-7 text-black/70">
                  Transparent terms, human communication, and long-term
                  stewardship.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.14}>
            <div className="mt-16 flex justify-center">
              <Link
                href="/get-in-touch"
                className="inline-flex h-10 items-center justify-center rounded-md border border-black/60 px-8 text-[11px] font-semibold tracking-wider text-black transition hover:bg-black/5"
              >
                GET IN TOUCH
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="relative bg-black text-white">
        <ChatCta />
      </section>
    </>
  );
}
