"use client";

import { AdvertisersScene } from "@/three/scenes/AdvertisersScene";
import { SceneCanvas } from "@/three/SceneCanvas";

export function AdvertisersCanvas() {
  return (
    <SceneCanvas camera={{ position: [0, 0, 7], fov: 44 }}>
      <AdvertisersScene />
    </SceneCanvas>
  );
}

