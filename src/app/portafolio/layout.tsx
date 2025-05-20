"use client"

import type { ReactNode } from "react"

interface PortfolioLayoutProps {
  children: ReactNode
}

export default function PortfolioLayout({ children }: PortfolioLayoutProps) {
  return <div className="min-h-screen bg-[#231433]">{children}</div>
}
