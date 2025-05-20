"use client"

import { useEffect, useRef } from "react"

interface TexturedSectionProps {
  title: string
  text: string
  backgroundColor?: string
  textColor?: string
  arrowWidth?: number // Ancho de la flecha en porcentaje
}

export default function TexturedSection({
  title,
  text,
  backgroundColor = "#4a2d5e", // Color morado oscuro
  textColor = "#ffffff",
  arrowWidth = 20, // Porcentaje del ancho total que ocupará la flecha
}: TexturedSectionProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Generar la textura de ruido
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Ajustar el tamaño del canvas al tamaño del contenedor
    const resizeCanvas = () => {
      const container = canvas.parentElement
      if (container) {
        canvas.width = container.offsetWidth
        canvas.height = container.offsetHeight

        // Dibujar el fondo
        ctx.fillStyle = backgroundColor
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        // Añadir ruido
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
        const data = imageData.data

        for (let i = 0; i < data.length; i += 4) {
          // Añadir variación aleatoria para crear textura
          const noise = Math.random() * 0.1 - 0.05 // Valor entre -0.05 y 0.05

          data[i] = Math.max(0, Math.min(255, data[i] + data[i] * noise)) // R
          data[i + 1] = Math.max(0, Math.min(255, data[i + 1] + data[i + 1] * noise)) // G
          data[i + 2] = Math.max(0, Math.min(255, data[i + 2] + data[i + 2] * noise)) // B
        }

        ctx.putImageData(imageData, 0, 0)
      }
    }

    // Inicializar el canvas
    resizeCanvas()

    // Ajustar el tamaño cuando cambie el tamaño de la ventana
    window.addEventListener("resize", resizeCanvas)
    return () => window.removeEventListener("resize", resizeCanvas)
  }, [backgroundColor])

  // Crear el polígono para la forma de flecha
  // Definimos los puntos para crear la forma exacta de flecha
  const clipPath = `polygon(
    0% 0%,                  /* Punto superior izquierdo */
    calc(100% - ${arrowWidth}%) 0%,     /* Punto superior derecho menos el ancho de la flecha */
    100% 50%,               /* Punta de la flecha (centro derecho) */
    calc(100% - ${arrowWidth}%) 100%,   /* Punto inferior derecho menos el ancho de la flecha */
    0% 100%                 /* Punto inferior izquierdo */
  )`

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto",
        overflow: "hidden",
      }}
    >
      {/* Contenedor con forma de flecha */}
      <div
        style={{
          position: "relative",
          width: "100%",
          padding: "40px",
          clipPath: clipPath,
          color: textColor,
          zIndex: 1,
        }}
      >
        {/* Canvas para la textura de ruido */}
        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
          }}
        />

        {/* Contenido */}
        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            marginBottom: "1.5rem",
            letterSpacing: "0.05em",
            textTransform: "uppercase",
          }}
        >
          {title}
        </h1>
        <p
          style={{
            fontSize: "1.1rem",
            lineHeight: "1.6",
            maxWidth: "90%",
          }}
        >
          {text}
        </p>
      </div>
    </div>
  )
}