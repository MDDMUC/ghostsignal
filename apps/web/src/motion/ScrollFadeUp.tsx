"use client";

import { type ReactNode, useId } from "react";

import { ensureGsapPlugins, gsap } from "@/motion/gsap";
import { useIsomorphicLayoutEffect } from "@/motion/useIsomorphicLayoutEffect";

type Props = {
  children: ReactNode;
  /**
   * Mirrors Motto's list reveal: y=60, opacity=0 → y=0, opacity=1.
   * If you need consistent staggering, pass a stable index.
   */
  index?: number;
  /**
   * Motto uses `start: "top bottom"` for many reveals.
   */
  start?: string;
};

/**
 * Mirrors Motto's common scroll entrance animation:
 * `fromTo(el, { y:60, opacity:0 }, { y:0, opacity:1, duration:1, ease:"power2.out", delay: 0.1*index, scrollTrigger:{trigger: el, start:"top bottom"} })`
 */
export function ScrollFadeUp({ children, index = 0, start = "top bottom" }: Props) {
  const id = useId();

  useIsomorphicLayoutEffect(() => {
    ensureGsapPlugins();
    const el = document.querySelector<HTMLElement>(`[data-gs-sfu="${id}"]`);
    if (!el) return;

    const tween = gsap.fromTo(
      el,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        delay: 0.1 * index,
        scrollTrigger: { trigger: el, start },
      },
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [id, index, start]);

  return <div data-gs-sfu={id}>{children}</div>;
}

