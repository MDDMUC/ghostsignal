"use client";

import dynamic from "next/dynamic";
import { useMemo } from "react";

import { VisualFallback } from "@/features/visuals/VisualFallback";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

const CreatorsCanvas = dynamic(
  () => import("@/three/CreatorsCanvas").then((m) => m.CreatorsCanvas),
  {
    ssr: false,
    loading: () => (
      <VisualFallback className="h-full w-full bg-[radial-gradient(80%_60%_at_55%_35%,rgba(6,182,212,0.35),transparent_60%),radial-gradient(60%_55%_at_45%_65%,rgba(124,58,237,0.22),transparent_55%)]" />
    ),
  },
);

export function CreatorsVisual() {
  const reducedMotion = usePrefersReducedMotion();
  const fallback = useMemo(
    () => (
      <VisualFallback className="h-full w-full bg-[radial-gradient(80%_60%_at_55%_35%,rgba(6,182,212,0.35),transparent_60%),radial-gradient(60%_55%_at_45%_65%,rgba(124,58,237,0.22),transparent_55%)]" />
    ),
    [],
  );

  if (reducedMotion) return fallback;
  return <CreatorsCanvas />;
}

