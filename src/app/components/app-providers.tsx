"use client"

import type { ReactNode } from "react"
import { MotionConfig } from "framer-motion"
import { LanguageProvider } from "@/lib/i18n/language-provider"

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LanguageProvider>
  )
}
