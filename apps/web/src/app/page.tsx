import Image from "next/image";
import Link from "next/link";

import { SiteHeader } from "@/components/SiteHeader";
import { ScrollFadeUp } from "@/motion/ScrollFadeUp";
import { ScrollGrowDockPin } from "@/motion/ScrollGrowDockPin";
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
          paddingTop: n(112),
          paddingBottom: n(112),
          paddingLeft: n(112),
          paddingRight: n(112),
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch",
          }}
        >
          {/* hero headline (node 3003:2077) */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "stretch",
              rowGap: n(44),
              paddingTop: n(24),
              paddingBottom: n(24),
              color: "var(--gs-tw-gray-950)", // fill #030712 in Figma
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "stretch",
                rowGap: n(24),
              }}
            >
              {/* line1 (node 3006:2096) */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  columnGap: n(44),
                  flexWrap: "wrap",
                }}
              >
                <Image
                  src="/images/home/home-cloud-1.png"
                  alt=""
                  aria-hidden="true"
                  width={183}
                  height={119}
                  priority
                  style={{ width: 183, height: 119, maxWidth: "100%" }}
                />
                <SplitLinesReveal delay={0}>
                  <div
                    style={{
                      fontFamily: "var(--font-body)",
                      fontWeight: "var(--gs-font-weight-extrabold)", // Text-8xl/Extra Bold
                      fontSize: fontSize("8xl"),
                      lineHeight: "1em",
                    }}
                  >
                    GHOSTSignal
                  </div>
                </SplitLinesReveal>
              </div>

              {/* line2 (node 3006:2094) */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  columnGap: n(44),
                  flexWrap: "wrap",
                }}
              >
                <SplitLinesReveal delay={0.1}>
                  <div
                    style={{
                      fontFamily: "var(--font-body)",
                      fontWeight: "var(--gs-font-weight-bold)", // Text-xl/Bold
                      fontSize: fontSize("xl"),
                      lineHeight: "1.4em",
                      whiteSpace: "pre-line",
                    }}
                  >
                    {"Soulful partnerships for podcasters\nand advertisers who care."}
                  </div>
                </SplitLinesReveal>
                <SplitLinesReveal delay={0.1}>
                  <div
                    style={{
                      fontFamily: "var(--font-body)",
                      fontWeight: "var(--gs-font-weight-bold)", // Text-8xl/Bold
                      fontSize: fontSize("8xl"),
                      lineHeight: "1em",
                    }}
                  >
                    is for people
                  </div>
                </SplitLinesReveal>
              </div>

              {/* line3 (node 3006:2095) */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  alignSelf: "stretch",
                  columnGap: n(24),
                  flexWrap: "wrap",
                }}
              >
                <Image
                  src="/images/home/icon-arrow-down.svg"
                  alt=""
                  aria-hidden="true"
                  width={112}
                  height={112}
                  style={{ width: 112, height: 112 }}
                />
                <SplitLinesReveal delay={0.2}>
                  <div
                    style={{
                      fontFamily: "var(--font-body)",
                      fontWeight: "var(--gs-font-weight-bold)", // Text-8xl/Bold
                      fontSize: fontSize("8xl"),
                      lineHeight: "1em",
                    }}
                  >
                    who are making
                  </div>
                </SplitLinesReveal>
                <SplitLinesReveal delay={0.2}>
                  <div
                    style={{
                      fontFamily: "var(--font-body)",
                      fontWeight: "var(--gs-font-weight-bold)", // Text-8xl/Bold
                      fontSize: fontSize("8xl"),
                      lineHeight: "1em",
                    }}
                  >
                    the world.
                  </div>
                </SplitLinesReveal>
              </div>
            </div>
          </div>

          {/* hero nav (node 3006:2084) */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              alignSelf: "stretch",
              columnGap: n(24),
              color: "var(--gs-tw-gray-950)", // fill #030712 in Figma
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: "var(--gs-font-weight-normal)", // Text-xl/Regular
                fontSize: fontSize("xl"),
                lineHeight: "1.4em",
              }}
            >
              Discover our engagements
            </div>
            <div
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: "var(--gs-font-weight-normal)", // Text-xl/Regular
                fontSize: fontSize("xl"),
                lineHeight: "1.4em",
              }}
            >
              (SCROLL)
            </div>
          </div>

          {/* content block (node 3006:2130) */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "stretch",
              rowGap: n(44),
              paddingTop: n(112),
              paddingBottom: n(112),
            }}
          >
            <ScrollGrowDockPin
              dockTargetSelector="[data-gs-home-media-target]"
              pinUntilSelector="[data-gs-home-harmony]"
              start="top center"
              dockAt="top center"
              lockX
            >
              <ScrollFadeUp index={0}>
                <video
                  data-gs-home-media-source
                  src="/images/home/desktopblankcloud2.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls={false}
                  preload="auto"
                  disablePictureInPicture
                  style={{
                    width: 825,
                    height: "auto",
                    maxWidth: "100%",
                    display: "block",
                    objectFit: "cover",
                  }}
                />
              </ScrollFadeUp>
            </ScrollGrowDockPin>

            <div
              style={{
                width: 753,
                fontFamily: "var(--font-body)",
                fontWeight: "var(--gs-font-weight-normal)", // Text-xl/Regular
                fontSize: fontSize("xl"),
                lineHeight: "1.4em",
                color: "var(--gs-tw-black)", // fill #000000 in Figma
                textAlign: "center",
              }}
            >
              Business Strategy • Brand Positioning • Category Definition • Brand Design • Brand
              Transformation
            </div>
          </div>

          {/* harmony section (node 3006:2135) */}
          <div
            data-gs-home-harmony
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignSelf: "stretch",
              rowGap: n(144),
              paddingTop: n(24),
              paddingBottom: n(24),
              color: "var(--gs-tw-gray-950)", // fill #030712 in Figma
            }}
          >
            {/* headline (node 3006:2156) */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                alignSelf: "stretch",
                columnGap: n(44),
                position: "relative",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", rowGap: n(44), flex: "0 0 auto" }}>
                {/* Centered dock target at Harmony headline height (invisible). */}
                <div
                  data-gs-home-media-target
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    marginLeft: "auto",
                    marginRight: "auto",
                    top: 0,
                    width: "66.6666667%",
                    aspectRatio: "16 / 9",
                    pointerEvents: "none",
                  }}
                />

                <div style={{ display: "flex", alignItems: "center", columnGap: n(44), flexWrap: "wrap" }}>
                  <SplitLinesReveal>
                    <div
                      style={{
                        fontFamily: "var(--font-body)",
                        fontWeight: "var(--gs-font-weight-bold)", // Text-9xl/Bold
                        fontSize: fontSize("9xl"),
                        lineHeight: "1em",
                      }}
                    >
                      HARMONY
                    </div>
                  </SplitLinesReveal>
                </div>

                <div style={{ display: "flex", alignItems: "center", columnGap: n(24), flexWrap: "wrap" }}>
                  <SplitLinesReveal>
                    <div
                      style={{
                        fontFamily: "var(--font-body)",
                        fontWeight: "var(--gs-font-weight-bold)", // Text-9xl/Bold
                        fontSize: fontSize("9xl"),
                        lineHeight: "1em",
                      }}
                    >
                      NOT
                    </div>
                  </SplitLinesReveal>
                  <SplitLinesReveal>
                    <div
                      style={{
                        fontFamily: "var(--font-body)",
                        fontWeight: "var(--gs-font-weight-bold)", // Text-9xl/Bold
                        fontSize: fontSize("9xl"),
                        lineHeight: "1em",
                      }}
                    >
                      HYPE
                    </div>
                  </SplitLinesReveal>
                </div>
              </div>
            </div>

            {/* text1 (node 3006:2150) */}
            <div
              style={{
                display: "flex",
                alignItems: "stretch",
                alignSelf: "stretch",
                columnGap: `calc((var(--gs-n-256) + var(--gs-n-128)) * ${px})`,
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: "var(--gs-font-weight-normal)", // Text-xl/Regular
                  fontSize: fontSize("xl"),
                  lineHeight: "1.4em",
                  flex: "0 0 auto",
                }}
              >
                Think big with us.
              </div>

              <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", rowGap: n(44), flex: 1 }}>
                <SplitLinesReveal>
                  <div
                    style={{
                      fontFamily: "var(--font-body)",
                      fontWeight: "var(--gs-font-weight-medium)", // Text-7xl/Medium
                      fontSize: fontSize("7xl"),
                      lineHeight: "1em",
                    }}
                  >
                    Great connections are more than contacts, they’re Ideas aligning in Harmony.
                  </div>
                </SplitLinesReveal>

                <div
                  style={{
                    fontFamily: "var(--font-body)",
                    fontWeight: "var(--gs-font-weight-normal)", // Text-2xl/Regular
                    fontSize: fontSize("2xl"),
                    lineHeight: "1.3333333333333333em",
                  }}
                >
                  We partner with soul-aligned companies to create impactful, future-ready partnerships. We
                  collaborate with visionary teams and design-led companies that require support in company
                  positioning, category definition, and brand expression to unify their team, drive growth,
                  and amplify brand influence in modern culture.
                </div>
              </div>
            </div>

            {/* text2 (node 3006:2157) */}
            <div
              style={{
                display: "flex",
                alignItems: "stretch",
                alignSelf: "stretch",
                columnGap: `calc((var(--gs-n-256) + var(--gs-n-128)) * ${px})`,
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: "var(--gs-font-weight-normal)", // Text-xl/Regular
                  fontSize: fontSize("xl"),
                  lineHeight: "1.4em",
                  flex: "0 0 auto",
                }}
              >
                Explore Us.
              </div>

              <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", rowGap: n(44), flex: 1 }}>
                <SplitLinesReveal>
                  <div
                    style={{
                      fontFamily: "var(--font-body)",
                      fontWeight: "var(--gs-font-weight-normal)", // Text-4xl/Regular
                      fontSize: fontSize("4xl"),
                      lineHeight: "1.1111111111111112em",
                    }}
                  >
                    (CHOOSE YOUR PURPOSE)
                  </div>
                </SplitLinesReveal>

                <div style={{ display: "flex", flexDirection: "column", rowGap: n(24) }}>
                  {[
                    { href: "/for-advertisers", label: "Explore For Brands" },
                    { href: "/for-advertisers", label: "Explore For Advertisers" },
                    { href: "/who-are-we", label: "Who Are We" },
                  ].map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        columnGap: n(24),
                        textDecoration: "none",
                        color: "var(--gs-tw-gray-950)",
                        fontFamily: "var(--font-body)",
                        fontWeight: "var(--gs-font-weight-normal)", // Text-3xl/Regular
                        fontSize: fontSize("3xl"),
                        lineHeight: "1.2em",
                      }}
                    >
                      <span>{item.label}</span>
                      <span style={{ marginLeft: "auto", display: "inline-flex" }} aria-hidden="true">
                        <Image
                          src="/images/home/icon-arrow-right.svg"
                          alt=""
                          width={40}
                          height={40}
                          style={{ width: 40, height: 40 }}
                        />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* trusted (node 3006:2174) */}
            <div
              style={{
                display: "flex",
                alignItems: "stretch",
                alignSelf: "stretch",
                columnGap: `calc((var(--gs-n-256) + var(--gs-n-128)) * ${px})`,
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: "var(--gs-font-weight-normal)", // Text-xl/Regular
                  fontSize: fontSize("xl"),
                  lineHeight: "1.4em",
                }}
              >
                (TRUSTED BY)
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

