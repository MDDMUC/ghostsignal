"use client";

import { Environment, Float } from "@react-three/drei";

import { LiquidPlane } from "@/three/objects/LiquidPlane";
import { Particles } from "@/three/objects/Particles";

export function AboutScene() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[6, 6, 4]} intensity={1.1} />

      <Float speed={1.0} floatIntensity={0.55} rotationIntensity={0.25}>
        <group>
          <mesh position={[-1.4, 0.2, 0]}>
            <icosahedronGeometry args={[0.9, 1]} />
            <meshStandardMaterial
              color="#94a3b8"
              metalness={0.35}
              roughness={0.35}
            />
          </mesh>
          <mesh position={[1.2, -0.15, 0.2]}>
            <sphereGeometry args={[0.75, 32, 32]} />
            <meshStandardMaterial
              color="#06b6d4"
              metalness={0.4}
              roughness={0.3}
            />
          </mesh>
        </group>
      </Float>

      <Particles />
      <LiquidPlane colorA="#06b6d4" colorB="#94a3b8" />

      <Environment preset="studio" />
    </>
  );
}

