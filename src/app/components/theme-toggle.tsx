"use client"

import { useState, useEffect } from "react"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  // Estado inicial baseado no que está no DOM (já inicializado pelo script inline)
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      const hasLightClass = document.documentElement.classList.contains("light")
      return !hasLightClass
    }
    return true // Default para dark
  })

  useEffect(() => {
    // Sincroniza com localStorage e DOM
    const theme = localStorage.getItem("theme") || "dark"
    const shouldBeDark = theme === "dark"
    
    setIsDark(shouldBeDark)
    
    // Garante que o DOM está sincronizado
    if (shouldBeDark) {
      document.documentElement.classList.remove("light")
    } else {
      document.documentElement.classList.add("light")
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark"
    setIsDark(newTheme === "dark")
    localStorage.setItem("theme", newTheme)
    
    // Atualiza o DOM imediatamente
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
      className="border-primary/20 hover:bg-primary/10 bg-transparent"
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </Button>
  )
}