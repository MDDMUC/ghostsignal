"use client";

import { type ReactNode, useId } from "react";

import { ensureGsapPlugins, gsap, ScrollTrigger } from "@/motion/gsap";
import { useIsomorphicLayoutEffect } from "@/motion/useIsomorphicLayoutEffect";

type Props = {
  children: ReactNode;

  /**
   * Selector for the dock target element (in the Harmony section).
   * This element defines the final size/position of the pinned media.
   */
  dockTargetSelector: string;

  /**
   * Selector for the section we should keep the media pinned through.
   * Usually the Harmony section wrapper.
   */
  pinUntilSelector: string;

  /**
   * Initial scale for the media when entering the scroll range.
   * Unitless motion value.
   */
  startScale?: number;

  /**
   * When the media should begin pinning/animating.
   */
  start?: string;

  /**
   * When the dock should be reached (used to compute the docking scroll position).
   */
  dockAt?: string;

  /**
   * If true, the media will remain horizontally centered throughout (no x translation).
   */
  lockX?: boolean;
};

/**
 * One-element Motto-like choreography:
 * - Pin the media as you scroll into it
 * - Grow towards the container width
 * - Then shrink + move into a dock target (e.g. right-side whitespace by Harmony)
 * - Stay pinned there while the user scrolls through the section
 *
 * All geometry is computed from DOM measurements at refresh time (no hard-coded pixels).
 */
export function ScrollGrowDockPin({
  children,
  dockTargetSelector,
  pinUntilSelector,
  startScale = 0.45,
  start = "top center",
  dockAt = "top center",
  lockX = false,
}: Props) {
  const id = useId();

  useIsomorphicLayoutEffect(() => {
    ensureGsapPlugins();

    const wrap = document.querySelector<HTMLElement>(`[data-gs-sgdp="${id}"]`);
    const media = wrap?.querySelector<HTMLElement>("[data-gs-sgdp-media]");
    const dockTarget = document.querySelector<HTMLElement>(dockTargetSelector);
    const pinUntil = document.querySelector<HTMLElement>(pinUntilSelector);
    if (!wrap || !media || !dockTarget || !pinUntil) return;

    let dockPosTrigger: ScrollTrigger | null = null;

    const compute = (pinTrigger: ScrollTrigger) => {
      const scrollY = window.scrollY || 0;
      const scrollX = window.scrollX || 0;

      // Measure "natural" media rect at scale 1 with no translation.
      const prevScale = gsap.getProperty(media, "scale") as number;
      const prevX = gsap.getProperty(media, "x") as number;
      const prevY = gsap.getProperty(media, "y") as number;
      gsap.set(media, { scale: 1, x: 0, y: 0 });

      const mediaRect = media.getBoundingClientRect();
      const containerRect = (wrap.parentElement ?? wrap).getBoundingClientRect();
      const dockRect = dockTarget.getBoundingClientRect();

      gsap.set(media, { scale: prevScale, x: prevX, y: prevY });

      const mediaDocLeft = mediaRect.left + scrollX;
      const mediaDocTop = mediaRect.top + scrollY;
      const dockDocLeft = dockRect.left + scrollX;
      const dockDocTop = dockRect.top + scrollY;

      // Scroll position when the dock target hits `dockAt`.
      if (!dockPosTrigger) {
        dockPosTrigger = ScrollTrigger.create({
          trigger: dockTarget,
          start: dockAt,
        });
      }
      const dockScrollY = dockPosTrigger.start;

      // Source viewport position at pin start and dock viewport position at dock scroll.
      const sourceViewportLeftAtStart = mediaDocLeft - pinTrigger.start;
      const sourceViewportTopAtStart = mediaDocTop - pinTrigger.start;

      const dockViewportLeftAtDock = dockDocLeft - dockScrollY;
      const dockViewportTopAtDock = dockDocTop - dockScrollY;

      const dx = lockX ? 0 : dockViewportLeftAtDock - sourceViewportLeftAtStart;
      const dy = dockViewportTopAtDock - sourceViewportTopAtStart;

      // Scale targets.
      const w = mediaRect.width || 1;
      const containerScale = Math.max(1, Math.min(containerRect.width / w, 3));
      const dockScale = Math.max(0.25, Math.min(dockRect.width / w, 3));

      return { dx, dy, containerScale, dockScale };
    };

    const apply = (pinSt: ScrollTrigger) => {
      const { dx, dy, containerScale, dockScale } = compute(pinSt);

      tl.clear()
        .fromTo(
          media,
          { x: 0, y: 0, scale: startScale, transformOrigin: "center center", willChange: "transform" },
          { x: 0, y: 0, scale: containerScale, duration: 0.55 },
          0,
        )
        .to(media, { x: dx, y: dy, scale: dockScale, duration: 0.2 }, 0.55)
        // Hold the final docked position while the pinned section continues.
        .to(media, { opacity: 1, duration: 0.25 }, 0.75);
    };

    const tl = gsap.timeline({
      defaults: { ease: "none" },
      scrollTrigger: {
        trigger: wrap,
        start,
        endTrigger: pinUntil,
        end: "bottom bottom",
        scrub: true,
        pin: wrap,
        invalidateOnRefresh: true,
        onRefreshInit: () => {
          // Reset to a known baseline for measurement.
          gsap.set(media, { x: 0, y: 0, scale: startScale, transformOrigin: "center center" });
        },
        onRefresh: (self) => apply(self),
      },
    });

    const pinSt = tl.scrollTrigger!;
    apply(pinSt);

    return () => {
      dockPosTrigger?.kill();
      dockPosTrigger = null;
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, [dockAt, dockTargetSelector, id, lockX, pinUntilSelector, start, startScale]);

  return (
    <div data-gs-sgdp={id} style={{ display: "flex", justifyContent: "center" }}>
      <div data-gs-sgdp-media style={{ display: "inline-block" }}>
        {children}
      </div>
    </div>
  );
}

