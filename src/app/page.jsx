"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import Image from "next/image"
import Scene from "../components/Scene/Scene" // Asegúrate de que la ruta sea correcta

export default function Home() {
  const router = useRouter()
  const [isHovered, setIsHovered] = useState(false)

  return (
    <main className="w-full h-screen overflow-hidden p-0 m-0 bg-black relative">
      <Scene />

      {/* Imagen de flecha en la parte inferior central */}
      <div
        style={{
          position: "fixed",
          left: "50%",
          bottom: "60px",
          transform: "translateX(-50%)",
          zIndex: 9999,
          animation: "bounce-slow 3s infinite ease-in-out",
        }}
      >
        <Image
          src="/images/up_arrow.png"
          alt="Flecha hacia arriba"
          width={60}
          height={60}
          onClick={() => router.push("/portafolio")}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="cursor-pointer"
          style={{
            transition: "all 0.3s ease",
            transform: `scale(${isHovered ? 1.1 : 1})`,
            filter: isHovered ? "brightness(1.5)" : "brightness(1)",
          }}
        />
      </div>

      <style jsx global>{`
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateX(-50%) translateY(0);
          }
          50% {
            transform: translateX(-50%) translateY(-8px);
          }
        }
      `}</style>
    </main>
  )
}