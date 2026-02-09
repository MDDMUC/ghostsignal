"use client";

import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

import { liquidFragmentShader, liquidVertexShader } from "@/three/shaders/liquid";

type Props = {
  colorA?: string;
  colorB?: string;
};

export function LiquidPlane({ colorA = "#7c3aed", colorB = "#06b6d4" }: Props) {
  const materialRef = useRef<THREE.ShaderMaterial | null>(null);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uColorA: { value: new THREE.Color(colorA) },
      uColorB: { value: new THREE.Color(colorB) },
    }),
    [colorA, colorB],
  );

  useFrame((_, delta) => {
    if (!materialRef.current) return;
    materialRef.current.uniforms.uTime.value += delta;
  });

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.9, 0]}>
      <planeGeometry args={[16, 16, 256, 256]} />
      <shaderMaterial
        ref={materialRef}
        transparent
        depthWrite={false}
        vertexShader={liquidVertexShader}
        fragmentShader={liquidFragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
}
