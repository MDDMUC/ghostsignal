"use client";

import { useReducedMotion } from "motion/react";

type Props = {
  className?: string;
  opacity?: number;
};

export function GrainOverlay({ className, opacity = 0.14 }: Props) {
  const reducedMotion = useReducedMotion();
  if (reducedMotion) return null;

  // SVG turbulence noise is tiny, requires no image files, and feels like Motto's subtle grain.
  return (
    <svg
      className={[
        "pointer-events-none fixed inset-0 z-[20] h-full w-full mix-blend-overlay",
        className ?? "",
      ].join(" ")}
      style={{ opacity }}
      aria-hidden
    >
      <filter id="gs-noise">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.9"
          numOctaves="4"
          stitchTiles="stitch"
        />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#gs-noise)" />
    </svg>
  );
}

