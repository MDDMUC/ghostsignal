"use client";

import { useRef } from "react";

import { ensureGsapPlugins, gsap } from "@/motion/gsap";
import { useIsomorphicLayoutEffect } from "@/motion/useIsomorphicLayoutEffect";

/**
 * Creates a GSAP context scoped to the provided root element ref.
 * This matches the typical GSAP pattern used in large sites (like Motto) to
 * ensure animations are reverted on unmount/navigation.
 */
export function useGsapContext<T extends Element>() {
  const rootRef = useRef<T | null>(null);

  type GsapContext = ReturnType<(typeof gsap)["context"]>;
  const contextRef = useRef<GsapContext | null>(null);

  useIsomorphicLayoutEffect(() => {
    ensureGsapPlugins();
    contextRef.current = gsap.context(() => {}, rootRef);
    return () => {
      contextRef.current?.revert();
      contextRef.current = null;
    };
  }, []);

  return { rootRef, contextRef };
}

