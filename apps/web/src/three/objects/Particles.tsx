"use client";

import { Points, PointMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function createParticlePositions(count: number) {
  const arr = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const i3 = i * 3;
    arr[i3] = (Math.random() - 0.5) * 14;
    arr[i3 + 1] = (Math.random() - 0.5) * 8;
    arr[i3 + 2] = (Math.random() - 0.5) * 10;
  }
  return arr;
}

const PARTICLE_POSITIONS = createParticlePositions(2000);

export function Particles() {
  const pointsRef = useRef<THREE.Points | null>(null);

  const positions = useMemo(() => PARTICLE_POSITIONS, []);

  useFrame((_, delta) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y += delta * 0.03;
  });

  return (
    <Points
      ref={pointsRef}
      positions={positions}
      stride={3}
      frustumCulled={false}
    >
      <PointMaterial
        transparent
        depthWrite={false}
        size={0.02}
        sizeAttenuation
        color="#ffffff"
        opacity={0.7}
      />
    </Points>
  );
}
