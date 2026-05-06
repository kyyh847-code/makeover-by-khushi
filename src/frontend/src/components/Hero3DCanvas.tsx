import {
  Float,
  MeshDistortMaterial,
  Octahedron,
  Sphere,
  Torus,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type * as THREE from "three";

function GlowingSphere({
  position,
  color,
  scale,
  speed,
}: {
  position: [number, number, number];
  color: string;
  scale: number;
  speed: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = clock.getElapsedTime() * speed * 0.3;
      meshRef.current.rotation.y = clock.getElapsedTime() * speed * 0.5;
    }
  });
  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={1.2}>
      <Sphere
        ref={meshRef}
        args={[1, 32, 32]}
        position={position}
        scale={scale}
      >
        <MeshDistortMaterial
          color={color}
          distort={0.3}
          speed={2}
          transparent
          opacity={0.7}
          roughness={0.1}
          metalness={0.6}
        />
      </Sphere>
    </Float>
  );
}

function GlowingRing({
  position,
  color,
  scale,
  speed,
}: {
  position: [number, number, number];
  color: string;
  scale: number;
  speed: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = clock.getElapsedTime() * speed * 0.4;
      meshRef.current.rotation.y = clock.getElapsedTime() * speed * 0.2;
      meshRef.current.rotation.z = clock.getElapsedTime() * speed * 0.15;
    }
  });
  return (
    <Float speed={speed * 0.8} rotationIntensity={1} floatIntensity={0.8}>
      <Torus
        ref={meshRef}
        args={[1, 0.2, 16, 64]}
        position={position}
        scale={scale}
      >
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.6}
          roughness={0.2}
          metalness={0.8}
        />
      </Torus>
    </Float>
  );
}

function GlowingDiamond({
  position,
  color,
  scale,
  speed,
}: {
  position: [number, number, number];
  color: string;
  scale: number;
  speed: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = clock.getElapsedTime() * speed * 0.6;
      meshRef.current.rotation.x = clock.getElapsedTime() * speed * 0.3;
    }
  });
  return (
    <Float speed={speed * 1.2} rotationIntensity={0.8} floatIntensity={1.5}>
      <Octahedron ref={meshRef} args={[1]} position={position} scale={scale}>
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.75}
          roughness={0.05}
          metalness={0.9}
        />
      </Octahedron>
    </Float>
  );
}

function SmallParticle({
  position,
  color,
}: { position: [number, number, number]; color: string }) {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.position.y =
        position[1] +
        Math.sin(clock.getElapsedTime() * 0.8 + position[0]) * 0.4;
      meshRef.current.rotation.z = clock.getElapsedTime() * 0.5;
    }
  });
  return (
    <Sphere ref={meshRef} args={[0.08, 8, 8]} position={position}>
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.8}
        transparent
        opacity={0.9}
      />
    </Sphere>
  );
}

const particles: Array<{ position: [number, number, number]; color: string }> =
  [
    { position: [-3, 1, -2], color: "#C9A96E" },
    { position: [2, -1, -1], color: "#E8B4A0" },
    { position: [3, 2, -3], color: "#D4A0B0" },
    { position: [-2, -2, -2], color: "#C9A96E" },
    { position: [0, 3, -4], color: "#E8B4A0" },
    { position: [4, -1, -2], color: "#D4A0B0" },
    { position: [-4, 0, -3], color: "#C9A96E" },
    { position: [1, -3, -1], color: "#E8B4A0" },
    { position: [-1, 2, -5], color: "#C9A96E" },
    { position: [3, 1, -5], color: "#D4A0B0" },
    { position: [-3, -1, -4], color: "#E8B4A0" },
    { position: [2, 3, -6], color: "#C9A96E" },
  ];

export default function Hero3DCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 60 }}
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        zIndex: 1,
      }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.6} color="#FDF0E0" />
      <pointLight position={[10, 10, 10]} intensity={1.2} color="#C9A96E" />
      <pointLight position={[-10, -5, 5]} intensity={0.8} color="#E8B4A0" />
      <pointLight position={[0, 5, -5]} intensity={0.6} color="#D4A0B0" />
      <GlowingSphere
        position={[-4, 1.5, -2]}
        color="#C9A96E"
        scale={0.6}
        speed={0.5}
      />
      <GlowingSphere
        position={[4, -1, -3]}
        color="#E8B4A0"
        scale={0.45}
        speed={0.7}
      />
      <GlowingSphere
        position={[-2, -2, -4]}
        color="#D4A0B0"
        scale={0.3}
        speed={1.0}
      />
      <GlowingRing
        position={[3, 2, -4]}
        color="#C9A96E"
        scale={0.7}
        speed={0.4}
      />
      <GlowingRing
        position={[-3.5, -1.5, -3]}
        color="#E8B4A0"
        scale={0.5}
        speed={0.6}
      />
      <GlowingRing
        position={[0, 3, -5]}
        color="#D4A0B0"
        scale={0.4}
        speed={0.8}
      />
      <GlowingDiamond
        position={[2, 1, -2]}
        color="#C9A96E"
        scale={0.35}
        speed={0.6}
      />
      <GlowingDiamond
        position={[-3, 2, -3]}
        color="#E8B4A0"
        scale={0.25}
        speed={0.9}
      />
      <GlowingDiamond
        position={[1, -2, -4]}
        color="#D4A0B0"
        scale={0.45}
        speed={0.5}
      />
      <GlowingDiamond
        position={[-1, -3, -5]}
        color="#C9A96E"
        scale={0.2}
        speed={1.2}
      />
      {particles.map((p) => (
        <SmallParticle
          key={`${p.position[0]}-${p.position[1]}-${p.position[2]}`}
          position={p.position}
          color={p.color}
        />
      ))}
    </Canvas>
  );
}
