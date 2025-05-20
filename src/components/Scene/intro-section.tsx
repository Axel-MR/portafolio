"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { AnimatedArrow } from "./animated-arrow"
import { ProfilePhoto } from "./profile-photo"
import { ContactButton } from "./contact-button"

export function IntroSection() {
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    // Mostrar el contenido después de que la flecha termine su animación
    const timer = setTimeout(() => {
      setShowContent(true)
    }, 1000) // 1 segundo, igual que la duración de la animación de la flecha

    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="min-h-screen bg-[#231433] py-8 px-4 md:px-8 lg:px-16">
      <AnimatedArrow />

      {showContent && (
        <motion.div
          className="grid md:grid-cols-2 gap-8 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-[#5D3A7E] p-8 clip-path-polygon">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 bg-gradient-to-r from-blue-300 to-white bg-clip-text text-transparent">
              AXEL DANIEL MARTÍNEZ RODRÍGUEZ
            </h1>
            <p className="text-white text-base md:text-lg">
              ¡Hola¡ Soy estudiante del Tecnológico de Morelia. Realmente me apasiona la programación, el diseño, el
              dibujo y asumir retos participando o creando proyectos. Se me da bien trabajar por mi cuenta y en equipo,
              soy capaz de ser un buen líder que promueve la organización y el respeto. Me gusta estar en constante
              aprendizaje y desafío, actualmente me gustaría mejorar mis habilidades para el diseño, especialmente el
              UX/UI, gestión de proyectos y como siempre conocer y aplicar más sobre programación y dibujo digital.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-4">
            <ProfilePhoto src="/profile-photo.jpg" alt="Axel Daniel Martínez Rodríguez" />

            <div className="w-full max-w-md space-y-2 mt-4">
              <ContactButton
                href="mailto:martinez.r.axel.daniel@gmail.com"
                label="martinez.r.axel.daniel@gmail.com"
                variant="email"
              />

              <ContactButton href="/cv-axel-martinez.pdf" label="Currículum CV" variant="cv" />
            </div>
          </div>
        </motion.div>
      )}
    </section>
  )
}
