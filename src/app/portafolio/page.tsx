"use client";

import { useState } from "react";
import TexturedSection from "../../components/ui/TexturedSection";
import "./PortafolioPage.css"; 
import { ContactButton } from "../../components/Scene/contact-button";
import TestButton from "../../components/TestButton";



export default function PortfolioPage() {
  const [section, setSection] = useState<string>("intro");

  const title = "AXEL DANIEL MARTÍNEZ RODRÍGUEZ";
  const text =
    "¡Hola; Soy estudiante del Tecnológico de Morelia. Realmente me apasiona la programación, el diseño, el dibujo y asumir retos participando o creando proyectos. Se me da bien trabajar por mi cuenta y en equipo, soy capaz de ser un buen líder que promueve la organización y el respeto. Me gusta estar en constante aprendizaje y desafío, actualmente me gustaría mejorar mis habilidades para el diseño, especialmente el UX/UI, gestión de proyectos y como siempre conocer y aplicar más sobre programación y dibujo digital.";

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "black",
        color: "white",
        padding: "2rem 1rem",
      }}
    >
      <div className="portfolio-columns">
        {/* Columna izquierda */}
        <div className="column">
          <TexturedSection title={title} text={text} arrowWidth={15} />
        </div>

        {/* Columna derecha */}
        <div className="column">
          <p>Otra columna de contenido</p>
          <ContactButton
            href="mailto:axel@example.com"
            label="Contáctame por correo"
          />
          <TestButton></TestButton>
        </div>
      </div>
    </div>
  );
}
