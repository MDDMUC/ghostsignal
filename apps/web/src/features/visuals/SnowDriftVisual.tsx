"use client";

import dynamic from "next/dynamic";
import { useMemo } from "react";

import { VisualFallback } from "@/features/visuals/VisualFallback";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

const SnowDriftCanvas = dynamic(
  () => import("@/three/SnowDriftCanvas").then((m) => m.SnowDriftCanvas),
  {
    ssr: false,
    loading: () => (
      <VisualFallback className="h-full w-full bg-[radial-gradient(80%_70%_at_60%_30%,rgba(191,219,254,0.22),transparent_60%),radial-gradient(60%_55%_at_40%_70%,rgba(59,130,246,0.16),transparent_55%)]" />
    ),
  },
);

export function SnowDriftVisual() {
  const reducedMotion = usePrefersReducedMotion();
  const fallback = useMemo(
    () => (
      <VisualFallback className="h-full w-full bg-[radial-gradient(80%_70%_at_60%_30%,rgba(191,219,254,0.22),transparent_60%),radial-gradient(60%_55%_at_40%_70%,rgba(59,130,246,0.16),transparent_55%)]" />
    ),
    [],
  );

  if (reducedMotion) return fallback;
  return <SnowDriftCanvas />;
}

