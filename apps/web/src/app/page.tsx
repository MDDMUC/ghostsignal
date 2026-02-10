import Link from "next/link";

import { SiteHeader } from "@/components/SiteHeader";
import { ScrollFadeUp } from "@/motion/ScrollFadeUp";
import { SplitLinesReveal } from "@/motion/SplitLinesReveal";

const navLinks = [
  { href: "/what-is-this", label: "What is this" },
  { href: "/for-creators", label: "For Creators" },
  { href: "/for-advertisers", label: "For Advertisers" },
  { href: "/who-are-we", label: "Who Are We" },
  { href: "/get-in-touch", label: "Get In Touch" },
  { href: "/snowdrift", label: "SNOWDRIFT" },
] as const;

export default function HomePage() {
  const px = "var(--gs-px)";
  const n = (value: number) => `calc(var(--gs-n-${value}) * ${px})`;
  const fontSize = (token: string) => `calc(var(--gs-font-size-${token}) * ${px})`;

  return (
    <main className="min-h-dvh bg-background">
      {/* B1: Home frame (node 3002:370) */}
      <SiteHeader links={navLinks} />

      <section
        style={{
          height: n(900),
          paddingTop: n(112),
          paddingBottom: n(112),
          paddingLeft: n(256),
          paddingRight: n(256),
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            paddingTop: n(24),
            paddingBottom: n(24),
            rowGap: n(44),
            color: "var(--gs-tw-gray-950)",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", rowGap: n(24) }}>
            <SplitLinesReveal>
              <div
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: "var(--gs-font-weight-extrabold)",
                  fontSize: fontSize("8xl"),
                  lineHeight: "1em",
                }}
              >
                GHOSTSignal
              </div>
            </SplitLinesReveal>
            <SplitLinesReveal>
              <div
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: "var(--gs-font-weight-bold)",
                  fontSize: fontSize("8xl"),
                  lineHeight: "1em",
                }}
              >
                is for people who are making the world.
              </div>
            </SplitLinesReveal>
            <div
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: "var(--gs-font-weight-bold)",
                fontSize: fontSize("xl"),
                lineHeight: "1.4em",
              }}
            >
              <SplitLinesReveal>
                <div>Soulful partnerships for podcasters and advertisers who care.</div>
              </SplitLinesReveal>
            </div>
          </div>

          {/* Buttons component instance: Type=outline, State=default */}
          <ScrollFadeUp index={0}>
            <Link
              href="/what-is-this"
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
                height: n(36),
                paddingTop: n(8),
                paddingBottom: n(8),
                paddingLeft: n(16),
                paddingRight: n(16),
                borderRadius: `calc(var(--gs-radius-lg) * ${px})`, // 10px
                border: `calc(var(--gs-border-width) * ${px}) solid var(--gs-border)`,
                background: "var(--gs-background)",
                boxShadow: "0px 1px 2px 0px rgb(0 0 0 / 0.1)", // Box Shadow/shadow-xs
                color: "var(--gs-foreground)",
                textDecoration: "none",
                fontFamily: "var(--font-body)",
                fontWeight: "var(--gs-font-weight-medium)",
                fontSize: fontSize("sm"),
                lineHeight: "1.4285714285714286em",
              }}
            >
              Learn More
            </Link>
          </ScrollFadeUp>
        </div>
      </section>
    </main>
  );
}

