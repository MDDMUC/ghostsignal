"use client";

import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function createSeededRandom(seed: number) {
  let value = seed | 0;
  return () => {
    value ^= value << 13;
    value ^= value >> 17;
    value ^= value << 5;
    return ((value >>> 0) % 1_000_000) / 1_000_000;
  };
}

const SNOW_COUNT = 3000;
const rng = createSeededRandom(1337);
const SNOW_POSITIONS = (() => {
  const arr = new Float32Array(SNOW_COUNT * 3);
  for (let i = 0; i < SNOW_COUNT; i++) {
    const i3 = i * 3;
    arr[i3] = (rng() - 0.5) * 14;
    arr[i3 + 1] = rng() * 8;
    arr[i3 + 2] = (rng() - 0.5) * 10;
  }
  return arr;
})();

const SNOW_SPEED = (() => {
  const arr = new Float32Array(SNOW_COUNT);
  for (let i = 0; i < SNOW_COUNT; i++) {
    arr[i] = 0.35 + rng() * 0.9;
  }
  return arr;
})();

export function SnowDriftScene() {
  const positions = useMemo(() => SNOW_POSITIONS.slice(), []);
  const positionsRef = useRef<Float32Array>(positions);
  const positionAttrRef = useRef<THREE.BufferAttribute | null>(null);

  useFrame((state, delta) => {
    const arr = positionsRef.current;
    const t = state.clock.elapsedTime;

    for (let i = 0; i < SNOW_COUNT; i++) {
      const i3 = i * 3;
      arr[i3 + 1] -= SNOW_SPEED[i] * delta;
      arr[i3] += Math.sin(t * 0.35 + i * 0.01) * 0.002;

      if (arr[i3 + 1] < -2.5) {
        arr[i3 + 1] = 5.5;
      }
    }

    if (positionAttrRef.current) positionAttrRef.current.needsUpdate = true;
  });

  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[4, 6, 4]} intensity={1.0} />

      <points frustumCulled={false}>
        <bufferGeometry>
          <bufferAttribute
            ref={positionAttrRef}
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.03}
          transparent
          opacity={0.75}
          depthWrite={false}
          color="#ffffff"
          sizeAttenuation
        />
      </points>
    </>
  );
}
