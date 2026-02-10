"use client";

import { type ReactNode, useId } from "react";

import { ensureGsapPlugins, gsap } from "@/motion/gsap";
import { useIsomorphicLayoutEffect } from "@/motion/useIsomorphicLayoutEffect";

type Props = {
  children: ReactNode;
  /**
   * Mirrors Motto: rotation 0 → -270, scrub: true.
   */
  rotationTo?: number;
};

export function RotateOnScroll({ children, rotationTo = -270 }: Props) {
  const id = useId();

  useIsomorphicLayoutEffect(() => {
    ensureGsapPlugins();
    const el = document.querySelector<HTMLElement>(`[data-gs-rotate="${id}"]`);
    if (!el) return;

    const tween = gsap.fromTo(
      el,
      { rotation: 0 },
      { rotation: rotationTo, ease: "none", scrollTrigger: { trigger: el, scrub: true } },
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [id, rotationTo]);

  return <div data-gs-rotate={id}>{children}</div>;
}

