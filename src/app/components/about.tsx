"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/lib/i18n/language-provider"

const TECH_LIST = [
  "HTML",
  "CSS",
  "JavaScript",
  "Bootstrap",
  "Git",
  "Node.js",
  "Vue.js",
  "React",
  "Next.js",
  "TypeScript",
  "PostgreSQL",
  "Python",
  "Django",
  "Postman",
  "Docker",
]

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

          <div className="grid gap-8 sm:gap-12 items-center">
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

            <motion.div
              className="bg-card/80 backdrop-blur-sm border-2 border-border rounded-xl p-4 sm:p-6 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <h3 className="text-lg sm:text-xl text-center font-semibold mb-4 text-primary">{m.about.techTitle}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {TECH_LIST.map((tech, index) => (
                  <div key={`${tech}-${index}`} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">{tech}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
