"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useRef, useState } from "react";
import { usePathname } from "next/navigation";

import { gsap, ScrollTrigger } from "@/motion/gsap";
import { useIsomorphicLayoutEffect } from "@/motion/useIsomorphicLayoutEffect";
import { useGsapContext } from "@/motion/useGsapContext";

import styles from "@/components/SiteHeader.module.css";

type NavLink = { href: string; label: string };

/**
 * Mirrors `wearemotto.com`'s site header collapse behavior:
 * - When scrollY > 100: links animate out (yPercent:-100, alpha:0, stagger:-.035),
 *   CTA slides out (xPercent:-100), toggle fades in (autoAlpha:1 at 0.25).
 * - When scrollY <= 100: toggle fades out, CTA slides in, links animate in (expo stagger).
 *
 * Styling stays token-driven; motion values are taken from Motto's shipped code.
 */
export function SiteHeader({
  links,
  cta,
}: {
  links: readonly NavLink[];
  cta?: { href: string; label: string };
}) {
  const { rootRef, contextRef } = useGsapContext<HTMLDivElement>();

  const linksWrapRef = useRef<HTMLDivElement | null>(null);
  const ctaRef = useRef<HTMLAnchorElement | null>(null);
  const toggleRef = useRef<HTMLButtonElement | null>(null);

  const menuOverlayRef = useRef<HTMLDivElement | null>(null);
  const menuBackdropRef = useRef<HTMLDivElement | null>(null);
  const menuPanelRef = useRef<HTMLDivElement | null>(null);
  const menuTlRef = useRef<gsap.core.Timeline | null>(null);

  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const px = "var(--gs-px)";
  const n = useMemo(() => (value: number) => `calc(var(--gs-n-${value}) * ${px})`, [px]);
  const fontSize = useMemo(
    () => (token: string) => `calc(var(--gs-font-size-${token}) * ${px})`,
    [px],
  );

  // Note: we keep these as literal values because they are taken from Motto's code.
  const THRESHOLD_Y = 100;

  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const activeRef = useRef(false);

  useIsomorphicLayoutEffect(() => {
    if (typeof window === "undefined") return;

    const linksWrap = linksWrapRef.current;
    const ctaEl = ctaRef.current;
    const toggleEl = toggleRef.current;
    const overlayEl = menuOverlayRef.current;
    const backdropEl = menuBackdropRef.current;
    const panelEl = menuPanelRef.current;
    if (!linksWrap || !toggleEl || !overlayEl || !backdropEl || !panelEl) return;

    const linkEls = Array.from(linksWrap.querySelectorAll<HTMLElement>("[data-sh-link]"));
    const menuLineEls = Array.from(panelEl.querySelectorAll<HTMLElement>("[data-mm-line]"));
    const menuItemEls = Array.from(panelEl.querySelectorAll<HTMLElement>("[data-mm-item]"));
    const mq = window.matchMedia("(max-width: 991px)");

    // All GSAP instances created in this callback will be reverted by useGsapContext.
    contextRef.current?.add(() => {
      tlRef.current = gsap.timeline({
        paused: true,
        defaults: { duration: 0.75, ease: "snappy" },
      });

      // Initial state matches Motto "in": toggle hidden (desktop), links visible, CTA in place.
      // On mobile we keep the toggle visible and hide the inline links via CSS.
      gsap.set(toggleEl, { autoAlpha: mq.matches ? 1 : 0 });
      if (ctaEl) gsap.set(ctaEl, { xPercent: 0 });
      gsap.set(linkEls, { yPercent: 0, alpha: 1 });

      // Mobile menu overlay initial state (closed).
      gsap.set(overlayEl, { autoAlpha: 0 });
      gsap.set(backdropEl, { opacity: 0 });
      gsap.set(panelEl, { yPercent: -100 });
      gsap.set(menuLineEls, { scaleX: 0 });
      gsap.set(menuItemEls, { yPercent: 100, opacity: 0 });

      menuTlRef.current = gsap
        .timeline({
          paused: true,
          defaults: { ease: "expo" },
          onStart: () => {
            gsap.set(overlayEl, { autoAlpha: 1, pointerEvents: "auto" });
          },
          onReverseComplete: () => {
            gsap.set(overlayEl, { autoAlpha: 0, pointerEvents: "none" });
          },
        })
        .to(backdropEl, { opacity: 1, duration: 0.35, ease: "power2.out" }, 0)
        .to(panelEl, { yPercent: 0, duration: 1.0 }, 0)
        .to(menuLineEls, { scaleX: 1, duration: 1.25, stagger: 0.075 }, 0.15)
        .to(menuItemEls, { yPercent: 0, opacity: 1, duration: 1.25, stagger: 0.075 }, 0.2);
    });

    const runOut = () => {
      document.body.classList.add("is-head-active");
      tlRef.current
        ?.clear()
        .to(linkEls, { yPercent: -100, alpha: 0, stagger: -0.035 }, 0)
        .to(ctaEl ?? {}, { xPercent: -100 }, 0)
        .to(toggleEl, { autoAlpha: 1 }, 0.25)
        .restart();
    };

    const runIn = () => {
      document.body.classList.remove("is-head-active");
      tlRef.current
        ?.clear()
        .to(toggleEl, { autoAlpha: 0, duration: 0.5 })
        .to(ctaEl ?? {}, { xPercent: 0, duration: 1 }, 0)
        .to(linkEls, { yPercent: 0, alpha: 1, duration: 1, stagger: 0.035, ease: "expo" }, 0)
        .restart();
    };

    const onScroll = () => {
      if (mq.matches) return;
      const y = window.scrollY || 0;
      if (y > THRESHOLD_Y && !activeRef.current) {
        activeRef.current = true;
        runOut();
      } else if (y <= THRESHOLD_Y && activeRef.current) {
        activeRef.current = false;
        runIn();
      }
    };

    const syncForViewport = () => {
      // When switching to mobile, keep the toggle visible and reset the "active" body class.
      if (mq.matches) {
        document.body.classList.remove("is-head-active");
        activeRef.current = false;
        tlRef.current?.pause(0);
        gsap.set(toggleEl, { autoAlpha: 1 });
        if (ctaEl) gsap.set(ctaEl, { xPercent: 0 });
        gsap.set(linkEls, { yPercent: 0, alpha: 1 });
      } else {
        // Desktop: force a re-evaluation based on scroll position.
        onScroll();
      }
    };

    // Optional Motto pattern: sections can hide the header via `.js-s-hide-sh`.
    const hideTriggerEl = document.querySelector<HTMLElement>(".js-s-hide-sh");
    const hideSt = hideTriggerEl
      ? ScrollTrigger.create({
          trigger: hideTriggerEl,
          start: "top center",
          onToggle: (self) => {
            const el = rootRef.current;
            if (!el) return;
            if (self.isActive) gsap.to(el, { yPercent: -100, duration: 0.75, ease: "snappy" });
            else gsap.to(el, { yPercent: 0, duration: 0.75, ease: "snappy" });
          },
        })
      : null;

    const onMqChange = () => syncForViewport();
    mq.addEventListener?.("change", onMqChange);

    window.addEventListener("scroll", onScroll, { passive: true });
    syncForViewport();

    return () => {
      window.removeEventListener("scroll", onScroll);
      mq.removeEventListener?.("change", onMqChange);
      hideSt?.kill();
      tlRef.current?.kill();
      tlRef.current = null;
      menuTlRef.current?.kill();
      menuTlRef.current = null;
    };
  }, [THRESHOLD_Y, contextRef, rootRef]);

  useIsomorphicLayoutEffect(() => {
    // Close menu on route change.
    setMenuOpen(false);
  }, [pathname]);

  useIsomorphicLayoutEffect(() => {
    if (typeof window === "undefined") return;
    const tl = menuTlRef.current;
    if (!tl) return;

    if (!menuOpen) {
      document.body.style.overflow = "";
      tl.reverse();
      return;
    }

    document.body.style.overflow = "hidden";
    tl.play(0);
    // Best-effort focus for ESC handling and screen readers.
    menuPanelRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <div ref={rootRef} style={{ position: "sticky", top: 0, zIndex: 50 }}>
      <header
        className="js-sh"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingLeft: n(48),
          paddingRight: n(48),
          background: "var(--gs-background)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: n(8),
            paddingTop: n(16),
            paddingBottom: n(16),
            paddingLeft: n(64),
            paddingRight: n(64),
          }}
        >
          <Image
            src="/images/brand/ghostsignal-logo.svg"
            alt="Ghost Signal"
            width={80}
            height={69}
            priority
          />
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            columnGap: n(24),
          }}
        >
          <nav
            aria-label="Primary"
            ref={linksWrapRef}
            className="js-sh-main-links"
            style={{
              display: "flex",
              alignItems: "center",
              gap: n(64),
            }}
          >
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="js-sh-main-link"
                data-sh-link
                style={{
                  display: "inline-flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: n(8),
                  paddingTop: n(16),
                  paddingBottom: n(16),
                  paddingLeft: n(32),
                  paddingRight: n(32),
                  fontFamily: "var(--font-body)",
                  fontWeight: "var(--gs-font-weight-bold)",
                  fontSize: fontSize("lg"),
                  lineHeight: "1.5555555555555556em",
                  color: "var(--gs-tw-black)",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {cta ? (
            <Link
              ref={ctaRef}
              href={cta.href}
              className="js-sh-cta"
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
                height: n(36),
                paddingTop: n(8),
                paddingBottom: n(8),
                paddingLeft: n(16),
                paddingRight: n(16),
                borderRadius: `calc(var(--gs-radius-lg) * ${px})`,
                border: `calc(var(--gs-border-width) * ${px}) solid var(--gs-border)`,
                background: "var(--gs-background)",
                boxShadow: "0px 1px 2px 0px rgb(0 0 0 / 0.1)",
                color: "var(--gs-foreground)",
                textDecoration: "none",
                fontFamily: "var(--font-body)",
                fontWeight: "var(--gs-font-weight-medium)",
                fontSize: fontSize("sm"),
                lineHeight: "1.4285714285714286em",
                whiteSpace: "nowrap",
              }}
            >
              {cta.label}
            </Link>
          ) : null}

          <button
            ref={toggleRef}
            type="button"
            className="js-sh-toggle"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="gs-site-menu"
            style={{
              display: "inline-flex",
              justifyContent: "center",
              alignItems: "center",
              height: n(36),
              paddingTop: n(8),
              paddingBottom: n(8),
              paddingLeft: n(16),
              paddingRight: n(16),
              borderRadius: `calc(var(--gs-radius-lg) * ${px})`,
              border: `calc(var(--gs-border-width) * ${px}) solid var(--gs-border)`,
              background: "var(--gs-background)",
              boxShadow: "0px 1px 2px 0px rgb(0 0 0 / 0.1)",
              color: "var(--gs-foreground)",
              fontFamily: "var(--font-body)",
              fontWeight: "var(--gs-font-weight-medium)",
              fontSize: fontSize("sm"),
              lineHeight: "1.4285714285714286em",
              cursor: "pointer",
              whiteSpace: "nowrap",
            }}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </header>

      <div
        id="gs-site-menu"
        ref={menuOverlayRef}
        className={styles.menuOverlay}
        aria-hidden={!menuOpen}
      >
        <div
          ref={menuBackdropRef}
          className={styles.menuBackdrop}
          onClick={() => setMenuOpen(false)}
        />

        <div
          ref={menuPanelRef}
          className={styles.menuPanel}
          tabIndex={-1}
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
        >
          <div className={styles.menuInner}>
            <div className={styles.menuTopRow}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: n(8) }}>
                <Image
                  src="/images/brand/ghostsignal-logo.svg"
                  alt="Ghost Signal"
                  width={40}
                  height={35}
                />
                <div
                  style={{
                    fontFamily: "var(--font-body)",
                    fontWeight: "var(--gs-font-weight-bold)",
                    fontSize: fontSize("sm"),
                  }}
                >
                  Ghost Signal
                </div>
              </div>

              <button
                type="button"
                style={{
                  display: "inline-flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: n(36),
                  paddingTop: n(8),
                  paddingBottom: n(8),
                  paddingLeft: n(16),
                  paddingRight: n(16),
                  borderRadius: `calc(var(--gs-radius-lg) * ${px})`,
                  border: `calc(var(--gs-border-width) * ${px}) solid var(--gs-border)`,
                  background: "var(--gs-background)",
                  boxShadow: "0px 1px 2px 0px rgb(0 0 0 / 0.1)",
                  color: "var(--gs-foreground)",
                  fontFamily: "var(--font-body)",
                  fontWeight: "var(--gs-font-weight-medium)",
                  fontSize: fontSize("sm"),
                  lineHeight: "1.4285714285714286em",
                  cursor: "pointer",
                }}
                onClick={() => setMenuOpen(false)}
              >
                Close
              </button>
            </div>

            <div className={styles.menuLines} aria-hidden="true">
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className={styles.menuLine}
                  data-mm-line
                />
              ))}
            </div>

            <nav className={styles.menuNav} aria-label="Menu">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={styles.menuLink}
                  onClick={() => setMenuOpen(false)}
                  data-mm-item
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            {cta ? (
              <div className={styles.menuCtaRow}>
                <Link
                  href={cta.href}
                  style={{
                    display: "inline-flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: n(36),
                    paddingTop: n(8),
                    paddingBottom: n(8),
                    paddingLeft: n(16),
                    paddingRight: n(16),
                    borderRadius: `calc(var(--gs-radius-lg) * ${px})`,
                    border: `calc(var(--gs-border-width) * ${px}) solid var(--gs-border)`,
                    background: "var(--gs-background)",
                    boxShadow: "0px 1px 2px 0px rgb(0 0 0 / 0.1)",
                    color: "var(--gs-foreground)",
                    textDecoration: "none",
                    fontFamily: "var(--font-body)",
                    fontWeight: "var(--gs-font-weight-medium)",
                    fontSize: fontSize("sm"),
                    lineHeight: "1.4285714285714286em",
                    whiteSpace: "nowrap",
                  }}
                  onClick={() => setMenuOpen(false)}
                >
                  {cta.label}
                </Link>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
