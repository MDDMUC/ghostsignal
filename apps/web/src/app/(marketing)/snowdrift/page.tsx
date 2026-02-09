import type { Metadata } from "next";
import Image from "next/image";

import { FadeIn } from "@/components/motion/FadeIn";
import { SectionShape } from "@/components/layout/SectionShape";
import { MaskReveal } from "@/components/motion/MaskReveal";
import { Parallax } from "@/components/motion/Parallax";

export const metadata: Metadata = {
  title: "Snow drift | Ghost Signal",
};

const emailInput =
  "h-10 w-full rounded-md border border-black/15 bg-white px-3 text-xs text-black placeholder:text-black/35 focus:outline-none focus:ring-2 focus:ring-black/15";

const snowDriftLogo = "/images/squarespace/snowdrift/logo.png";
const mockup = "/images/squarespace/snowdrift/mockup.png";

export default function SnowDriftPage({
  searchParams,
}: {
  searchParams?: Record<string, string | string[] | undefined>;
}) {
  const submitted = String(searchParams?.submitted ?? "") === "1";

  return (
    <>
      <section className="relative overflow-hidden bg-white text-black">
        <Parallax distance={18}>
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[720px] w-[720px] -translate-x-1/2 -translate-y-[56%] rounded-full opacity-35 [background-image:radial-gradient(circle,rgba(0,0,0,0.14)_1px,transparent_1px)] [background-size:10px_10px]" />
        </Parallax>

        <div className="mx-auto max-w-6xl px-6 pt-24 pb-28 sm:pt-28">
          <div className="mx-auto max-w-xl text-center">
            <FadeIn>
              <div className="mx-auto flex items-center justify-center">
                <Image
                  src={snowDriftLogo}
                  alt="Snow Drift"
                  width={112}
                  height={24}
                  className="h-6 w-auto opacity-90"
                />
              </div>
            </FadeIn>

            <FadeIn delay={0.06}>
              <h1 className="mt-6 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                VOICES FROM
                <br />
                THE CULTURAL FUTURE
              </h1>
            </FadeIn>

            <FadeIn delay={0.12}>
              <p className="mx-auto mt-6 max-w-md text-xs leading-5 text-black/65">
                A weekly transmission for creators and brands building in the new
                age of multiverse advertising, where meaning matters more than
                reach.
              </p>
            </FadeIn>

            <FadeIn delay={0.18}>
              <form
                className="mx-auto mt-10 grid max-w-md grid-cols-[1fr_auto] gap-3"
                action="/api/snowdrift"
                method="post"
                encType="text/plain"
              >
                <input
                  name="company"
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Email Address"
                  className={emailInput}
                />
                <button
                  type="submit"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-black/60 px-6 text-[11px] font-semibold tracking-wider text-black transition hover:bg-black/5"
                >
                  SIGN UP
                </button>
              </form>
            </FadeIn>

            {submitted ? (
              <FadeIn delay={0.22}>
                <p className="mx-auto mt-5 max-w-md text-xs font-semibold tracking-wide text-black/60">
                  You are signed up.
                </p>
              </FadeIn>
            ) : null}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-black text-white">
        <SectionShape variant="black" className="bg-white" />

        <div className="mx-auto max-w-6xl px-6 pt-20 pb-24 sm:pt-24">
          <div className="mx-auto max-w-2xl text-center">
            <FadeIn>
              <p className="text-xs font-semibold tracking-wide text-white/60">
                Snow Drift
              </p>
            </FadeIn>

            <FadeIn delay={0.06}>
              <MaskReveal className="mx-auto mt-10 max-w-md" delay={0.02} radiusPx={18}>
                <div className="overflow-hidden rounded-2xl bg-white shadow-[0_18px_60px_rgba(0,0,0,0.35)]">
                  <Image
                    src={mockup}
                    alt="Snow Drift newsletter preview"
                    width={900}
                    height={1200}
                    className="h-auto w-full"
                  />
                </div>
              </MaskReveal>
            </FadeIn>

            <FadeIn delay={0.12}>
              <div className="mt-10 space-y-4 text-xs leading-5 text-white/75">
                <p>
                  A twice-monthly transmission for creators and brands building
                  in the new age of multiverse advertising, where meaning matters
                  more than reach.
                </p>
                <p>
                  Subscribe now, and get the signals shaping what comes next.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.18}>
              <form
                className="mx-auto mt-10 grid max-w-md grid-cols-[1fr_auto] gap-3"
                action="/api/snowdrift"
                method="post"
                encType="text/plain"
              >
                <input
                  name="company"
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Email Address"
                  className="h-10 w-full rounded-md border border-white/20 bg-white/5 px-3 text-xs text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
                />
                <button
                  type="submit"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-yellow-300/60 bg-yellow-300/10 px-6 text-[11px] font-semibold tracking-wider text-yellow-100 transition hover:bg-yellow-300/15"
                >
                  SIGN UP NOW
                </button>
              </form>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
