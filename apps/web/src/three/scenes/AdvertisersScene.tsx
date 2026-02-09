"use client";

import { Environment, Float } from "@react-three/drei";

import { LiquidPlane } from "@/three/objects/LiquidPlane";
import { Particles } from "@/three/objects/Particles";

export function AdvertisersScene() {
  return (
    <>
      <ambientLight intensity={0.55} />
      <directionalLight position={[6, 6, 4]} intensity={1.25} />

      <Float speed={1.1} floatIntensity={0.6} rotationIntensity={0.45}>
        <mesh>
          <torusKnotGeometry args={[1.1, 0.35, 180, 16]} />
          <meshStandardMaterial color="#7c3aed" metalness={0.55} roughness={0.22} />
        </mesh>
      </Float>

      <Particles />
      <LiquidPlane colorA="#7c3aed" colorB="#facc15" />

      <Environment preset="studio" />
    </>
  );
}

