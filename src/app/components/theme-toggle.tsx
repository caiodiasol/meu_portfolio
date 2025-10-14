"use client"

import { useState, useEffect } from "react"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const theme = localStorage.getItem("theme") || "dark"
    setIsDark(theme === "dark")
    document.documentElement.classList.toggle("light", theme === "light")
  }, [])

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark"
    setIsDark(!isDark)
    localStorage.setItem("theme", newTheme)
    document.documentElement.classList.toggle("light", newTheme === "light")
  }

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleTheme}
      className="border-primary/20 hover:bg-primary/10 hover:cursor-pointer bg-transparent"
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </Button>
  )
}