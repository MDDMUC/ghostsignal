"use client";

import { Environment, Float } from "@react-three/drei";

import { LiquidPlane } from "@/three/objects/LiquidPlane";
import { Particles } from "@/three/objects/Particles";

export function CreatorsScene() {
  return (
    <>
      <ambientLight intensity={0.55} />
      <directionalLight position={[6, 6, 4]} intensity={1.2} />

      <Float speed={1.4} floatIntensity={0.75} rotationIntensity={0.4}>
        <mesh>
          <dodecahedronGeometry args={[1.5, 0]} />
          <meshStandardMaterial color="#06b6d4" metalness={0.5} roughness={0.25} />
        </mesh>
      </Float>

      <Particles />
      <LiquidPlane colorA="#06b6d4" colorB="#7c3aed" />

      <Environment preset="studio" />
    </>
  );
}

