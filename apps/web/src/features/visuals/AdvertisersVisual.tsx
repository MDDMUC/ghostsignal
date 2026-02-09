"use client";

import dynamic from "next/dynamic";
import { useMemo } from "react";

import { VisualFallback } from "@/features/visuals/VisualFallback";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

const AdvertisersCanvas = dynamic(
  () => import("@/three/AdvertisersCanvas").then((m) => m.AdvertisersCanvas),
  {
    ssr: false,
    loading: () => (
      <VisualFallback className="h-full w-full bg-[radial-gradient(80%_60%_at_55%_35%,rgba(124,58,237,0.32),transparent_60%),radial-gradient(60%_55%_at_45%_65%,rgba(250,204,21,0.18),transparent_55%)]" />
    ),
  },
);

export function AdvertisersVisual() {
  const reducedMotion = usePrefersReducedMotion();
  const fallback = useMemo(
    () => (
      <VisualFallback className="h-full w-full bg-[radial-gradient(80%_60%_at_55%_35%,rgba(124,58,237,0.32),transparent_60%),radial-gradient(60%_55%_at_45%_65%,rgba(250,204,21,0.18),transparent_55%)]" />
    ),
    [],
  );

  if (reducedMotion) return fallback;
  return <AdvertisersCanvas />;
}

