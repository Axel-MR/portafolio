"use client"

import { useRef } from "react"
import { MeshTransmissionMaterial, useGLTF, Text } from "@react-three/drei"
import { useFrame } from "@react-three/fiber" // Añadido el import de useFrame
import { useRouter } from "next/navigation"
import * as THREE from "three"

// Este componente SÍ usa hooks de R3F y DEBE usarse dentro de un Canvas
export default function ModelContent() {
  const { nodes } = useGLTF("/medias/torrus.glb")
  const torus = useRef(null)
  const router = useRouter()
  
  // Usamos un valor fijo para el escalado
  const scaleFactor = 4 // Ajusta este valor según necesites

  // Animación del torus
  useFrame((state) => {
    if (torus.current) {
      torus.current.rotation.x += 0.02
    }
  })

  // Propiedades del material original
  const materialProps = {
    thickness: 0.2,
    roughness: 0,
    transmission: 1,
    ior: 1.2,
    chromaticAberration: 0.02,
    backside: true,
  }

  // Función para navegar a la página de portafolio
  const handlePortfolioClick = () => {
    router.push("/portafolio")
  }

  return (
    <group scale={scaleFactor}>
      {/* Texto principal */}
      <Text
        font={"/fonts/PPNeueMontreal-Bold.otf"}
        position={[0, 0, -1]}
        fontSize={0.5}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        Axel MR
      </Text>

      {/* Torus */}
      <mesh ref={torus} {...nodes.Torus002}>
        <MeshTransmissionMaterial {...materialProps} />
      </mesh>
    </group>
  )
}