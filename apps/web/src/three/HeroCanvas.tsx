"use client";

import { HeroScene } from "@/three/scenes/HeroScene";
import { SceneCanvas } from "@/three/SceneCanvas";

export function HeroCanvas() {
  return (
    <SceneCanvas>
      <HeroScene />
    </SceneCanvas>
  );
}

