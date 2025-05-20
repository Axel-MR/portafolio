// components/Scene/index.jsx
"use client"
import { Canvas } from "@react-three/fiber"
import ModelContent from "./ModelContent"
import { Environment } from "@react-three/drei"

export default function Scene() {
  return (
    <div className="w-full h-screen bg-black">
      <Canvas className="w-full h-full" style={{ background: "#000000" }} camera={{ position: [0, 0, 5], fov: 75 }}>
        <ModelContent />
        <directionalLight intensity={2} position={[0, 2, 3]} />
        <Environment preset="city" />
      </Canvas>
    </div>
  )
}