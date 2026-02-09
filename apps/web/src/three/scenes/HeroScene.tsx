"use client";

import { Environment, Float } from "@react-three/drei";

import { LiquidPlane } from "@/three/objects/LiquidPlane";
import { Particles } from "@/three/objects/Particles";

export function HeroScene() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[6, 6, 4]} intensity={1.2} />

      <Float speed={1.2} floatIntensity={0.7} rotationIntensity={0.35}>
        <mesh>
          <icosahedronGeometry args={[1.4, 2]} />
          <meshStandardMaterial color="#7c3aed" metalness={0.5} roughness={0.25} />
        </mesh>
      </Float>

      <Particles />
      <LiquidPlane />

      <Environment preset="studio" />
    </>
  );
}

