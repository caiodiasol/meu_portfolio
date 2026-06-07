"use client"

import { useState, useEffect } from "react"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const theme = localStorage.getItem("theme") || "dark"
    const shouldBeDark = theme === "dark"
    setIsDark(shouldBeDark)

    if (shouldBeDark) {
      document.documentElement.classList.remove("light")
    } else {
      document.documentElement.classList.add("light")
    }

    setMounted(true)
  }, [])

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark"
    setIsDark(newTheme === "dark")
    localStorage.setItem("theme", newTheme)

    if (newTheme === "dark") {
      document.documentElement.classList.remove("light")
    } else {
      document.documentElement.classList.add("light")
    }
  }

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleTheme}
      aria-label={isDark ? "Ativar tema claro" : "Ativar tema escuro"}
      className="border-primary/20 hover:bg-primary/10 bg-transparent"
    >
      {/* Ícone fixo no SSR/hidratação; atualiza após mount para evitar mismatch de <path> no SVG */}
      {mounted ? (
        isDark ? <Sun className="h-4 w-4 shrink-0" /> : <Moon className="h-4 w-4 shrink-0" />
      ) : (
        <Sun className="h-4 w-4 shrink-0" />
      )}
    </Button>
  )
}
