"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function HashScroll() {
  const pathname = usePathname()

  useEffect(() => {
    if (pathname !== "/") return

    const hash = window.location.hash.replace("#", "")
    if (!hash) return

    const timer = window.setTimeout(() => {
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" })
    }, 80)

    return () => window.clearTimeout(timer)
  }, [pathname])

  return null
}
