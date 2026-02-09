import type { Metadata } from "next";
import Image from "next/image";

import { FadeIn } from "@/components/motion/FadeIn";
import { RainbowBars } from "@/components/brand/RainbowBars";
import { SectionShape } from "@/components/layout/SectionShape";
import { MaskReveal } from "@/components/motion/MaskReveal";

export const metadata: Metadata = {
  title: "Get in touch | Ghost Signal",
};

const inputClass =
  "h-9 w-full rounded-md bg-neutral-100 px-3 text-xs text-black placeholder:text-black/40 focus:outline-none focus:ring-2 focus:ring-black/20";

export default function GetInTouchPage({
  searchParams,
}: {
  searchParams?: Record<string, string | string[] | undefined>;
}) {
  const submitted = String(searchParams?.submitted ?? "") === "1";

  return (
    <>
      <section className="relative bg-white text-black">
        <div className="mx-auto max-w-6xl px-6 pt-16 pb-20 sm:pt-20">
          <div className="pointer-events-none absolute right-0 top-20 hidden w-[420px] sm:block">
            <RainbowBars className="h-3 w-full opacity-90" />
          </div>

          <div className="mx-auto max-w-xl">
            <FadeIn>
              <h1 className="text-center text-2xl font-semibold tracking-tight">
                ARE WE RIGHT FOR EACH OTHER?
              </h1>
            </FadeIn>

            <FadeIn delay={0.06}>
              {submitted ? (
                <div className="mb-8 rounded-2xl border border-black/10 bg-white px-5 py-4 text-xs text-black/70">
                  Submitted. We will get back to you soon.
                </div>
              ) : null}

              <form
                className="mt-10 grid gap-4"
                action="/api/get-in-touch"
                method="post"
                encType="text/plain"
              >
                <input
                  name="company"
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="grid gap-2 text-[11px] font-semibold tracking-wide text-black/70">
                    First Name
                    <input name="first_name" className={inputClass} />
                  </label>
                  <label className="grid gap-2 text-[11px] font-semibold tracking-wide text-black/70">
                    Last Name
                    <input name="last_name" className={inputClass} />
                  </label>
                </div>

                <label className="grid gap-2 text-[11px] font-semibold tracking-wide text-black/70">
                  Your Email (required)
                  <input
                    name="email"
                    type="email"
                    required
                    className={inputClass}
                  />
                </label>

                <label className="flex items-center gap-2 text-[11px] font-semibold tracking-wide text-black/70">
                  <input
                    name="newsletter"
                    type="checkbox"
                    className="h-4 w-4 rounded border-black/20"
                  />
                  SIGN UP FOR NEWS AND UPDATES
                </label>

                <fieldset className="mt-2 grid gap-2">
                  <legend className="text-[11px] font-semibold tracking-wide text-black/70">
                    Podcast or Advertiser?
                  </legend>
                  <div className="flex flex-wrap gap-5">
                    <label className="flex items-center gap-2 text-[11px] font-semibold tracking-wide text-black/70">
                      <input
                        name="type"
                        type="radio"
                        value="podcast"
                        defaultChecked
                        className="h-4 w-4"
                      />
                      PODCAST
                    </label>
                    <label className="flex items-center gap-2 text-[11px] font-semibold tracking-wide text-black/70">
                      <input
                        name="type"
                        type="radio"
                        value="advertiser"
                        className="h-4 w-4"
                      />
                      ADVERTISER
                    </label>
                  </div>
                </fieldset>

                <label className="grid gap-2 text-[11px] font-semibold tracking-wide text-black/70">
                  Your Website
                  <input name="website" placeholder="https://" className={inputClass} />
                </label>

                <label className="grid gap-2 text-[11px] font-semibold tracking-wide text-black/70">
                  What is your podcast or product?
                  <input name="podcast_or_product" className={inputClass} />
                </label>

                <label className="grid gap-2 text-[11px] font-semibold tracking-wide text-black/70">
                  What has you interested in GHOSTSignal?
                  <input name="message" className={inputClass} />
                </label>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-black/60 px-8 text-[11px] font-semibold tracking-wider text-black transition hover:bg-black/5"
                  >
                    SUBMIT
                  </button>
                </div>
              </form>
            </FadeIn>

            <FadeIn delay={0.14}>
              <div className="mt-16 grid items-center gap-8 sm:mt-20 sm:grid-cols-[260px_1fr]">
                <MaskReveal className="relative" delay={0.02} radiusPx={24}>
                  <div className="relative overflow-hidden rounded-2xl bg-neutral-200">
                    <div className="absolute left-0 top-0 h-full w-10 opacity-90">
                      <RainbowBars orientation="vertical" className="h-full w-full" />
                    </div>
                    <Image
                      src="/images/squarespace/jeremy.jpg"
                      alt=""
                      width={520}
                      height={680}
                      className="h-auto w-full object-cover grayscale"
                    />
                  </div>
                </MaskReveal>

                <div>
                  <p className="text-xs font-semibold tracking-wide text-black/70">
                    Ready to find your frequency?
                    <br />
                    Schedule a call.
                  </p>
                  <div className="mt-5">
                    <a
                      href="mailto:hello@ghostsignal.cloud"
                      className="inline-flex h-10 items-center justify-center rounded-md border border-black/60 px-8 text-[11px] font-semibold tracking-wider text-black transition hover:bg-black/5"
                    >
                      EMAIL US
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="relative bg-black text-white">
        <SectionShape variant="black" className="bg-white" />
        <div className="mx-auto max-w-6xl px-6 py-14">
          <p className="text-xs font-semibold tracking-wide text-white/60">
            If you do not have a default mail client configured, the form submit
            will not send. We can wire this to a real endpoint next.
          </p>
        </div>
      </section>
    </>
  );
}
