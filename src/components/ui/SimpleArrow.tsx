"use client"

import { useState } from "react"

interface SimpleArrowProps {
  direction?: "up" | "down" | "left" | "right"
  size?: number
  color?: string
  onClick?: () => void
}

export default function SimpleArrow({ direction = "down", size = 60, color = "#ffffff", onClick }: SimpleArrowProps) {
  const [isHovered, setIsHovered] = useState(false)

  // Determinar la rotación basada en la dirección
  const getRotation = () => {
    switch (direction) {
      case "down":
        return "rotate(180deg)"
      case "left":
        return "rotate(-90deg)"
      case "right":
        return "rotate(90deg)"
      default:
        return "rotate(0deg)"
    }
  }

  return (
    <div
      style={{
        width: size,
        height: size,
        transform: getRotation(),
        cursor: "pointer",
        backgroundColor: "red", // Color de fondo rojo para depuración
        padding: "10px",
        borderRadius: "8px",
      }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <svg
        width={size - 20}
        height={size - 20}
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          transform: isHovered ? "scale(1.1)" : "scale(1)",
          transition: "transform 0.3s ease",
        }}
      >
        <path d="M12 5l-8 8 8 8" />
        <path d="M5 13h14" />
      </svg>
    </div>
  )
}
