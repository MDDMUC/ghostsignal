"use client";

import dynamic from "next/dynamic";
import { useMemo } from "react";

import { VisualFallback } from "@/features/visuals/VisualFallback";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

const HeroCanvas = dynamic(
  () => import("@/three/HeroCanvas").then((m) => m.HeroCanvas),
  {
    ssr: false,
    loading: () => <VisualFallback />,
  },
);

export function HeroVisual() {
  const reducedMotion = usePrefersReducedMotion();

  const fallback = useMemo(
    () => <VisualFallback />,
    [],
  );

  if (reducedMotion) return fallback;
  return <HeroCanvas />;
}

