"use client";

import { useId, useState } from "react";

import { ensureGsapPlugins, gsap } from "@/motion/gsap";
import { useIsomorphicLayoutEffect } from "@/motion/useIsomorphicLayoutEffect";

type Props = {
  summary: React.ReactNode;
  children: React.ReactNode;
  /**
   * Motto: duration 0.5, ease "expo.inOut"
   */
  duration?: number;
  ease?: string;
  defaultOpen?: boolean;
};

/**
 * Mirrors Motto's dropdown open/close height animation:
 * `timeline({ defaults:{ duration:.5, ease:"expo.inOut" } }).fromTo(content,{height:0},{height:"auto"})`
 */
export function AccordionHeight({
  summary,
  children,
  duration = 0.5,
  ease = "expo.inOut",
  defaultOpen = false,
}: Props) {
  const id = useId();
  const [open, setOpen] = useState(defaultOpen);

  useIsomorphicLayoutEffect(() => {
    ensureGsapPlugins();
    const content = document.querySelector<HTMLElement>(`[data-gs-acc-content="${id}"]`);
    if (!content) return;

    // Ensure starting state matches `open`.
    gsap.set(content, { height: open ? "auto" : 0, overflow: "hidden" });
  }, [id, open]);

  useIsomorphicLayoutEffect(() => {
    ensureGsapPlugins();
    const content = document.querySelector<HTMLElement>(`[data-gs-acc-content="${id}"]`);
    if (!content) return;

    const tl = gsap
      .timeline({ paused: true, defaults: { duration, ease } })
      .fromTo(content, { height: 0 }, { height: "auto" });

    if (open) tl.play(0);
    else tl.reverse(0);

    return () => {
      tl.kill();
    };
  }, [duration, ease, id, open]);

  return (
    <div data-gs-acc={id}>
      <button type="button" onClick={() => setOpen((v) => !v)}>
        {summary}
      </button>
      <div data-gs-acc-content={id}>{children}</div>
    </div>
  );
}

