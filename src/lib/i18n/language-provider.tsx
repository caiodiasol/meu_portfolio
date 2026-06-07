"use client"

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react"
import { messagesEn } from "./messages/en"
import { messagesPt } from "./messages/pt"
import type { Locale, Messages } from "./types"

const STORAGE_KEY = "portfolio-locale"

type LanguageContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  messages: Messages
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

const messagesMap: Record<Locale, Messages> = {
  pt: messagesPt,
  en: messagesEn,
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("pt")

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Locale | null
    if (stored === "en") {
      setLocaleState("en")
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = locale === "pt" ? "pt-BR" : "en"
  }, [locale])

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    localStorage.setItem(STORAGE_KEY, next)
  }, [])

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      messages: messagesMap[locale],
    }),
    [locale, setLocale],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider")
  }
  return context
}
