"use client"

import { useEffect, useState } from "react"
import dynamic from "next/dynamic"

const ColorBends = dynamic(() => import("@/components/color-bends/ColorBends"), {
  ssr: false,
})

const BRAND_COLORS = ["#7c3aed", "#a78bfa", "#6366f1"]

export function SiteBackground() {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)")
    const sync = () => setEnabled(!media.matches)
    sync()
    media.addEventListener("change", sync)
    return () => media.removeEventListener("change", sync)
  }, [])

  if (!enabled) return null

  return (
    <div className="site-background-layer pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      <ColorBends
        className="h-full w-full"
        colors={BRAND_COLORS}
        rotation={90}
        speed={0.18}
        scale={1.1}
        frequency={1}
        warpStrength={1}
        mouseInfluence={0.7}
        noise={0.12}
        parallax={0.4}
        iterations={1}
        intensity={1.2}
        bandWidth={6}
        transparent
        autoRotate={0.05}
      />
    </div>
  )
}
