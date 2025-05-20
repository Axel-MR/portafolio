"use client"

import { Inter } from 'next/font/google'
import "./globals.css"

// Opcional: Puedes usar una fuente personalizada
const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <title>Axel MR - Portfolio</title>
        <meta name="description" content="Portfolio de Axel MR" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      </head>
      <body className={`${inter.className} bg-black text-white m-0 p-0 overflow-hidden`}>
        {children}
      </body>
    </html>
  )
}