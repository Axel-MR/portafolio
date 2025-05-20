"use client"

import { useState } from "react"

interface NoiseArrowProps {
  direction?: "up" | "down" | "left" | "right"
  size?: number
  color?: string
  onClick?: () => void
}

export default function NoiseArrow({ direction = "down", size = 60, color = "#ffffff", onClick }: NoiseArrowProps) {
  const [isHovered, setIsHovered] = useState(false)

  // SVG paths para cada dirección
  const getArrowPath = () => {
    switch (direction) {
      case "down":
        return "M12 5v13M5 12l7 7 7-7"
      case "up":
        return "M12 19V6M5 12l7-7 7 7"
      case "left":
        return "M19 12H6M12 5l-7 7 7 7"
      case "right":
        return "M5 12h13M12 5l7 7-7 7"
      default:
        return "M12 5v13M5 12l7 7 7-7"
    }
  }

  // Generar puntos de ruido
  const generateNoiseDots = () => {
    const dots = []
    const numDots = Math.floor(size * 0.8) // Ajusta la densidad del ruido

    for (let i = 0; i < numDots; i++) {
      const x = Math.random() * size
      const y = Math.random() * size
      const radius = Math.random() * 1.2 + 0.3
      const opacity = Math.random() * 0.4 + 0.1

      dots.push(
        <circle key={i} cx={x} cy={y} r={radius} fill={color} opacity={opacity} style={{ mixBlendMode: "screen" }} />,
      )
    }
    return dots
  }

  return (
    <div
      style={{
        width: size,
        height: size,
        position: "relative",
        cursor: "pointer",
        borderRadius: "50%",
        backgroundColor: "rgba(255, 0, 0, 0.1)", // Fondo rojo muy sutil
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "all 0.3s ease",
        transform: isHovered ? "scale(1.1)" : "scale(1)",
      }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <svg
        width={size * 0.7}
        height={size * 0.7}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          filter: isHovered ? "drop-shadow(0 0 3px rgba(255,255,255,0.7))" : "none",
          transition: "filter 0.3s ease",
        }}
      >
        <path d={getArrowPath()} />
      </svg>

      {/* Capa de ruido */}
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          pointerEvents: "none",
          opacity: 0.6,
        }}
      >
        {generateNoiseDots()}
      </svg>
    </div>
  )
}
