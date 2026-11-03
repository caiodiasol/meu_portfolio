"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/lib/i18n/language-provider"

export function About() {
  const { messages: m } = useLanguage()

  return (
    <section id="about" className="py-16 sm:py-20 px-6 sm:px-6">
      <div className="container mx-auto">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-center">
            {m.about.title} <span className="text-gradient">{m.about.titleHighlight}</span>
          </h2>

          <div className="space-y-5 sm:space-y-6">
            <p className="text-sm leading-relaxed sm:text-base lg:text-lg text-muted-foreground text-justify sm:text-left">
              {m.about.p1}
            </p>
            <p className="text-sm leading-relaxed sm:text-base lg:text-lg text-muted-foreground text-justify sm:text-left">
              {m.about.p2}
            </p>
            <p className="text-sm leading-relaxed sm:text-base lg:text-lg text-muted-foreground text-justify sm:text-left">
              {m.about.p3}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
