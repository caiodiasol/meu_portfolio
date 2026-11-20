"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { cn } from "@/lib/utils"

type ThemeOption = "dark" | "light"

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const [theme, setTheme] = useState<ThemeOption>("dark")

  useEffect(() => {
    const stored = (localStorage.getItem("theme") as ThemeOption | null) || "dark"
    const next = stored === "light" ? "light" : "dark"
    setTheme(next)
    applyTheme(next)
    setMounted(true)
  }, [])

  const applyTheme = (next: ThemeOption) => {
    if (next === "dark") {
      document.documentElement.classList.remove("light")
    } else {
      document.documentElement.classList.add("light")
    }
  }

  const selectTheme = (next: ThemeOption) => {
    setTheme(next)
    localStorage.setItem("theme", next)
    applyTheme(next)
  }

  const activeTheme = mounted ? theme : "dark"

  const options: { value: ThemeOption; label: string; icon: typeof Moon }[] = [
    { value: "dark", label: "Escuro", icon: Moon },
    { value: "light", label: "Claro", icon: Sun },
  ]

  return (
    <div
      className="inline-flex items-center rounded-full border border-primary/30 bg-transparent p-0.5 text-xs font-medium"
      role="group"
      aria-label="Tema do site"
    >
      {options.map((option) => {
        const Icon = option.icon
        const isActive = activeTheme === option.value
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => selectTheme(option.value)}
            aria-pressed={isActive}
            aria-label={option.label}
            title={option.label}
            className={cn(
              "inline-flex items-center justify-center rounded-full px-2.5 py-1 transition-colors",
              isActive
                ? "bg-primary text-primary-foreground shadow-sm shadow-primary/30"
                : "text-muted-foreground hover:text-primary",
            )}
          >
            <Icon className="h-3.5 w-3.5 shrink-0" />
          </button>
        )
      })}
    </div>
  )
}
