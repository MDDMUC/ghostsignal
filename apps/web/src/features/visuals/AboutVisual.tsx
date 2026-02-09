"use client";

import dynamic from "next/dynamic";
import { useMemo } from "react";

import { VisualFallback } from "@/features/visuals/VisualFallback";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

const AboutCanvas = dynamic(
  () => import("@/three/AboutCanvas").then((m) => m.AboutCanvas),
  {
    ssr: false,
    loading: () => (
      <VisualFallback className="h-full w-full bg-[radial-gradient(80%_60%_at_55%_35%,rgba(148,163,184,0.22),transparent_60%),radial-gradient(60%_55%_at_45%_65%,rgba(6,182,212,0.18),transparent_55%)]" />
    ),
  },
);

export function AboutVisual() {
  const reducedMotion = usePrefersReducedMotion();
  const fallback = useMemo(
    () => (
      <VisualFallback className="h-full w-full bg-[radial-gradient(80%_60%_at_55%_35%,rgba(148,163,184,0.22),transparent_60%),radial-gradient(60%_55%_at_45%_65%,rgba(6,182,212,0.18),transparent_55%)]" />
    ),
    [],
  );

  if (reducedMotion) return fallback;
  return <AboutCanvas />;
}

