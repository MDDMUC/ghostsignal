"use client";

import { type ReactNode, useId } from "react";

import SplitType from "split-type";

import { ensureGsapPlugins, gsap } from "@/motion/gsap";
import { useIsomorphicLayoutEffect } from "@/motion/useIsomorphicLayoutEffect";

type Props = {
  children: ReactNode;
  /**
   * Matches Motto:
   * duration: 1.25, stagger: 0.2, ease: "expo"
   */
  duration?: number;
  stagger?: number;
  ease?: string;
};

/**
 * Mirrors Motto's `[data-split]` behavior:
 * - split into lines
 * - set line wrappers overflow hidden
 * - animate inner lines from yPercent 101 → 0 on scroll
 */
export function SplitLinesReveal({
  children,
  duration = 1.25,
  stagger = 0.2,
  ease = "expo",
}: Props) {
  const id = useId();

  useIsomorphicLayoutEffect(() => {
    ensureGsapPlugins();
    const el = document.querySelector<HTMLElement>(`[data-gs-split="${id}"]`);
    if (!el) return;

    const splitOuter = new SplitType(el, { types: "lines" });
    const splitInner = new SplitType(splitOuter.lines ?? [], { types: "lines" });

    if (splitOuter.lines?.length) gsap.set(splitOuter.lines, { overflow: "hidden" });

    const tween = gsap.fromTo(
      splitInner.lines ?? [],
      { yPercent: 101 },
      {
        yPercent: 0,
        duration,
        stagger,
        ease,
        scrollTrigger: { trigger: el },
      },
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
      splitInner.revert();
      splitOuter.revert();
    };
  }, [duration, ease, id, stagger]);

  return <div data-gs-split={id}>{children}</div>;
}

