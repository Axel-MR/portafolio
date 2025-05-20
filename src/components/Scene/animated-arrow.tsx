"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export function AnimatedArrow() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Ajustar el tamaño del canvas al tamaño del contenedor
    const resizeCanvas = () => {
      const container = canvas.parentElement
      if (container) {
        canvas.width = container.clientWidth
        canvas.height = 80 // Altura fija para la flecha
      }
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Dibujar la flecha granulada
    const drawArrow = () => {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Color morado para la flecha
      ctx.fillStyle = "#5D3A7E"

      // Dibujar el cuerpo de la flecha con efecto granulado
      const arrowLength = canvas.width - 40
      const arrowHeight = 30
      const startX = 20
      const startY = canvas.height / 2 - arrowHeight / 2

      // Dibujar partículas para efecto granulado
      for (let x = startX; x < startX + arrowLength; x += 2) {
        for (let y = startY; y < startY + arrowHeight; y += 2) {
          // Efecto granulado: algunas partículas no se dibujan
          if (Math.random() > 0.2) {
            const size = Math.random() * 2 + 1
            ctx.fillRect(x, y, size, size)
          }
        }
      }

      // Dibujar la punta de la flecha
      ctx.beginPath()
      ctx.moveTo(startX + arrowLength, startY - 15)
      ctx.lineTo(startX + arrowLength + 20, startY + arrowHeight / 2)
      ctx.lineTo(startX + arrowLength, startY + arrowHeight + 15)
      ctx.closePath()
      ctx.fill()
    }

    drawArrow()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <motion.div
      className="w-full h-20 my-4"
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: "100%", opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <canvas ref={canvasRef} className="w-full h-full"></canvas>
    </motion.div>
  )
}
