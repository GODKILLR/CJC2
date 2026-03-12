import { Canvas } from "@react-three/fiber";
import { Float, PerspectiveCamera } from "@react-three/drei";

function FloatingNFTCard({ position, color }: { position: [number, number, number]; color: string }) {
  return (
    <Float speed={1} rotationIntensity={0.1} floatIntensity={0.2}>
      <mesh position={position}>
        <boxGeometry args={[1.5, 2, 0.05]} />
        <meshStandardMaterial color={color} metalness={0.5} roughness={0.5} />
      </mesh>
    </Float>
  );
}

function NFTShowcaseScene() {
  const cards = [
    { position: [-3, 0, -5] as [number, number, number], color: "#ffd700" },
    { position: [0, 0, -6] as [number, number, number], color: "#c0c0c0" },
    { position: [3, 0, -5] as [number, number, number], color: "#cd7f32" },
  ];

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={50} />
      <color attach="background" args={["#0a0a0f"]} />

      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={0.3} />

      {cards.map((card, i) => (
        <FloatingNFTCard key={i} position={card.position} color={card.color} />
      ))}
    </>
  );
}

interface NFTShowcase3DProps {
  className?: string;
}

const NFTShowcase3D = ({ className }: NFTShowcase3DProps) => {
  return (
    <div className={className}>
      <Canvas className="h-full w-full" gl={{ alpha: true }}>
        <NFTShowcaseScene />
      </Canvas>
    </div>
  );
};

export default NFTShowcase3D;
