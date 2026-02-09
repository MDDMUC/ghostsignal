import Image from "next/image";
import Link from "next/link";

import { FadeIn } from "@/components/motion/FadeIn";
import { RainbowBars } from "@/components/brand/RainbowBars";
import { SectionShape } from "@/components/layout/SectionShape";

type Props = {
  variant?: "black" | "white";
  className?: string;
};

export function ChatCta({ variant = "black", className }: Props) {
  const isBlack = variant === "black";

  return (
    <section
      className={[
        "relative overflow-hidden",
        isBlack ? "bg-black text-white" : "bg-white text-black",
        className ?? "",
      ].join(" ")}
    >
      <SectionShape variant={isBlack ? "black" : "white"} className="bg-white" />

      <div className="mx-auto max-w-6xl px-6 pt-24 pb-24">
        <FadeIn>
          <p
            className={[
              "text-xs font-semibold tracking-wide",
              isBlack ? "text-white/70" : "text-black/70",
            ].join(" ")}
          >
            GET IN TOUCH
          </p>
        </FadeIn>
        <FadeIn delay={0.06}>
          <h2
            className={[
              "mt-5 max-w-xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl",
              isBlack ? "text-white" : "text-black",
            ].join(" ")}
          >
            EVERY PARTNERSHIP
            <br />
            STARTS WITH A chat
          </h2>
        </FadeIn>

        <FadeIn delay={0.12}>
          <div className="mt-14 max-w-3xl">
            <RainbowBars className="h-3 w-[320px]" />
            <div
              className={[
                "mt-6 rounded-2xl p-8 sm:p-10",
                isBlack ? "bg-white text-black" : "border border-black/10 bg-white",
              ].join(" ")}
            >
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
  );
}

