"use client";

import { PerformanceMonitor } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import type { ReactNode } from "react";
import { Suspense, useState } from "react";

type Props = {
  className?: string;
  children: ReactNode;
  camera?: { position: [number, number, number]; fov: number };
  dprMin?: number;
  dprMax?: number;
  dprInitial?: number;
};

export function SceneCanvas({
  className,
  children,
  camera = { position: [0, 0, 7], fov: 42 },
  dprMin = 1,
  dprMax = 2,
  dprInitial = 1.5,
}: Props) {
  const [dpr, setDpr] = useState<number>(dprInitial);

  return (
    <Canvas
      className={className ?? "h-full w-full"}
      dpr={dpr}
      camera={camera}
      gl={{
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      }}
    >
      <PerformanceMonitor
        onDecline={() => setDpr(dprMin)}
        onIncline={() => setDpr(dprMax)}
      />
      <Suspense fallback={null}>{children}</Suspense>
    </Canvas>
  );
}

