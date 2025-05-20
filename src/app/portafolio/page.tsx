"use client"

import { useState } from "react"
import TexturedSection from "../../components/ui/TexturedSection"

export default function PortfolioPage() {
  const [section, setSection] = useState<string>("intro")

  const title = "AXEL DANIEL MARTÍNEZ RODRÍGUEZ"
  const text =
    "¡Hola; Soy estudiante del Tecnológico de Morelia. Realmente me apasiona la programación, el diseño, el dibujo y asumir retos participando o creando proyectos. Se me da bien trabajar por mi cuenta y en equipo, soy capaz de ser un buen líder que promueve la organización y el respeto. Me gusta estar en constante aprendizaje y desafío, actualmente me gustaría mejorar mis habilidades para el diseño, especialmente el UX/UI, gestión de proyectos y como siempre conocer y aplicar más sobre programación y dibujo digital."

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "black",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "2rem 1rem",
      }}
    >
      {/* Sección con textura y forma de flecha */}
      <TexturedSection 
        title={title} 
        text={text} 
        arrowWidth={15} 
      />
    </div>
  )
}