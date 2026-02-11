"use client";

import { type ReactNode, useId, useRef } from "react";

import { ensureGsapPlugins, gsap } from "@/motion/gsap";
import { useIsomorphicLayoutEffect } from "@/motion/useIsomorphicLayoutEffect";

type Props = {
  children: ReactNode;
  /**
   * Initial scale for the media when entering the scroll range.
   * This is a unitless motion value (not a design dimension).
   */
  startScale?: number;
  /**
   * ScrollTrigger start/end expressions (Motto-style strings).
   */
  start?: string;
  end?: string;
  /**
   * Whether to pin the wrapper while scaling (Motto often pins hero media).
   */
  pin?: boolean;
};

/**
 * Scroll-driven media scale that grows to (approximately) the container width.
 *
 * This is intended for Motto-like "screen grows as you scroll" behavior.
 * It measures the container and media at refresh-time and computes a target
 * scale so we don't hard-code pixel widths.
 */
export function ScrollGrowToContainer({
  children,
  startScale = 0.45,
  start = "top bottom",
  end = "bottom top",
  pin = false,
}: Props) {
  const id = useId();
  const targetScaleRef = useRef(1);

  useIsomorphicLayoutEffect(() => {
    ensureGsapPlugins();

    const wrap = document.querySelector<HTMLElement>(`[data-gs-sgtc="${id}"]`);
    const media = wrap?.querySelector<HTMLElement>("[data-gs-sgtc-media]");
    if (!wrap || !media) return;

    const container = wrap.parentElement ?? wrap;

    const computeTargetScale = () => {
      // Measure the "natural" media size at scale 1.
      const prev = gsap.getProperty(media, "scale") as number;
      gsap.set(media, { scale: 1 });
      const mediaRect = media.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      gsap.set(media, { scale: prev });

      const w = mediaRect.width || 1;
      const target = containerRect.width / w;

      // Clamp to avoid extreme jumps (unitless motion limits).
      targetScaleRef.current = Math.max(1, Math.min(target, 3));
    };

    computeTargetScale();

    const tween = gsap.fromTo(
      media,
      { scale: startScale, transformOrigin: "center center", willChange: "transform" },
      {
        scale: () => targetScaleRef.current,
        ease: "none",
        scrollTrigger: {
          trigger: wrap,
          start,
          end,
          scrub: true,
          pin: pin ? wrap : false,
          invalidateOnRefresh: true,
          onRefreshInit: computeTargetScale,
          onRefresh: computeTargetScale,
        },
      },
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [end, id, pin, start, startScale]);

  return (
    <div data-gs-sgtc={id} style={{ display: "flex", justifyContent: "center" }}>
      <div data-gs-sgtc-media style={{ display: "inline-block" }}>
        {children}
      </div>
    </div>
  );
}

