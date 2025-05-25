"use client"

import type { HTMLAttributes } from "react"
import { cn } from "../../lib/utils"

interface ContactButtonProps extends HTMLAttributes<HTMLAnchorElement> {
  href: string
  label: string
  variant?: "email" | "cv"
}

export function ContactButton({
  href,
  label,
  variant = "email",
  className,
  ...props
}: ContactButtonProps) {
  const isEmail = variant === "email"

  const buttonClasses = cn(
    "block w-full text-center py-3 px-4 text-white transition-colors",
    isEmail
      ? "bg-[#4A4A4A] hover:bg-[#5A5A5A]"
      : "bg-[#5D5D5D] hover:bg-[#6D6D6D]",
    className
  )

  return (
    <a
      href={href}
      className={buttonClasses}
      target={!isEmail ? "_blank" : undefined}
      rel={!isEmail ? "noopener noreferrer" : undefined}
      {...props}
    >
      {label}
    </a>
  )
}
