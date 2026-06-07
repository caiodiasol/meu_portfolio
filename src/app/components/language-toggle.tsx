"use client"

import { useLanguage } from "@/lib/i18n/language-provider"
import { cn } from "@/lib/utils"
import type { Locale } from "@/lib/i18n/types"

export function LanguageToggle() {
  const { locale, setLocale } = useLanguage()

  const options: { value: Locale; label: string }[] = [
    { value: "pt", label: "PT" },
    { value: "en", label: "EN" },
  ]

  return (
    <div
      className="inline-flex items-center rounded-md border border-primary/30 bg-transparent p-0.5 text-xs font-medium"
      role="group"
      aria-label="Idioma do site"
    >
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          onClick={() => setLocale(option.value)}
          aria-pressed={locale === option.value}
          className={cn(
            "rounded px-2 py-1 transition-colors",
            locale === option.value
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-primary",
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}
