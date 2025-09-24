// src/components/ParticleBackground.tsx
"use client";

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three'; // Importamos THREE para usar seus tipos

const Particles = () => {
  // 1. Corrigimos a tipagem do useRef
  const ref = useRef<THREE.Points>(null);

  // 2. Geramos as posições das partículas manualmente com useMemo
  const particlePositions = useMemo(() => {
    const count = 5000;
    const positions = new Float32Array(count * 3); // Cada partícula tem 3 coordenadas (x, y, z)
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      // Usamos coordenadas esféricas para uma distribuição mais uniforme dentro da esfera
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = Math.random() * 2 * Math.PI;
      const radius = Math.cbrt(Math.random()) * 1.5;

      positions[i3 + 0] = radius * Math.sin(phi) * Math.cos(theta); // x
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta); // y
      positions[i3 + 2] = radius * Math.cos(phi); // z
    }
    
    return positions;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
      
      // Movimento sutil em direção ao mouse
      ref.current.rotation.y += state.mouse.x * 0.01;
      ref.current.rotation.x += state.mouse.y * 0.01;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      {/* 3. Usamos as posições que criamos */}
      <Points ref={ref} positions={particlePositions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#4299e1"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const ParticleBackground = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Particles />
      </Canvas>
    </div>
  );
};

export default ParticleBackground;