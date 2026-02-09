"use client";

import { SnowDriftScene } from "@/three/scenes/SnowDriftScene";
import { SceneCanvas } from "@/three/SceneCanvas";

export function SnowDriftCanvas() {
  return (
    <SceneCanvas camera={{ position: [0, 0.2, 7.5], fov: 40 }} dprInitial={1.25}>
      <SnowDriftScene />
    </SceneCanvas>
  );
}

