"use client";

import { CreatorsScene } from "@/three/scenes/CreatorsScene";
import { SceneCanvas } from "@/three/SceneCanvas";

export function CreatorsCanvas() {
  return (
    <SceneCanvas camera={{ position: [0, 0, 7], fov: 44 }}>
      <CreatorsScene />
    </SceneCanvas>
  );
}

