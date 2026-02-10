"use client";

import { type ReactNode, useEffect } from "react";

import Lenis from "lenis";

/**
 * Mirrors Motto's use of Lenis for smooth scrolling.
 *
 * This component intentionally does not invent fancy configuration. It uses
 * Lenis defaults unless you provide overrides.
 */
export function SmoothScrollLenis({
  children,
  root = document.documentElement,
}: {
  children: ReactNode;
  root?: HTMLElement;
}) {
  useEffect(() => {
    const lenis = new Lenis({
      // Keep conservative defaults. Motto logs "lenis top" and uses Lenis broadly.
      // If we need exact Motto options (lerp/duration/easing), we’ll extract them
      // from their code path and mirror.
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, [root]);

  return <>{children}</>;
}

