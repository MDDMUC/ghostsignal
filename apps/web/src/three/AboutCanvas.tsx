"use client";

import { AboutScene } from "@/three/scenes/AboutScene";
import { SceneCanvas } from "@/three/SceneCanvas";

export function AboutCanvas() {
  return (
    <SceneCanvas camera={{ position: [0, 0, 7], fov: 42 }}>
      <AboutScene />
    </SceneCanvas>
  );
}

