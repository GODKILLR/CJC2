import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, PerspectiveCamera } from "@react-three/drei";
import { useRef, useState } from "react";
import * as THREE from "three";

function ParticleField() {
  const points = useRef<THREE.Points>(null);
  const particleCount = 50;

  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 50;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 50;

    colors[i * 3] = 1;
    colors[i * 3 + 1] = 0.85;
    colors[i * 3 + 2] = 0.5;
  }

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particleCount}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.3}
        vertexColors
        transparent
        opacity={0.4}
        sizeAttenuation={true}
        fog={false}
      />
    </points>
  );
}

function FloatingOrbs() {
  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.3}>
      <mesh position={[5, 0, -10]}>
        <sphereGeometry args={[0.5, 16, 16]} />
        <meshStandardMaterial
          color="#ffd700"
          emissive="#ffd700"
          emissiveIntensity={0.2}
          transparent
          opacity={0.15}
        />
      </mesh>
    </Float>
  );
}

function GroundMist() {
  return (
    <mesh position={[0, -8, -5]} rotation={[Math.PI / 2, 0, 0]}>
      <planeGeometry args={[30, 30]} />
      <meshStandardMaterial
        color="#1a1a2e"
        transparent
        opacity={0.6}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

interface Hero3DBackgroundProps {
  intensity?: number;
}

const Hero3DBackground = ({ intensity = 1 }: Hero3DBackgroundProps) => {
  return (
    <div className="absolute inset-0 h-full w-full">
      <Canvas
        className="h-full w-full"
        gl={{ antialias: false, alpha: true }}
        dpr={[1, 2]}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 15]} fov={50} />
        <color attach="background" args={["#0a0a0f"]} />

        <ambientLight intensity={0.15} />
        <pointLight position={[10, 10, 10]} intensity={0.3} />

        <ParticleField />
        <FloatingOrbs />
      </Canvas>
    </div>
  );
};

export default Hero3DBackground;
