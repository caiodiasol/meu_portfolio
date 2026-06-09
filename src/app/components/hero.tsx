"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-provider"

export function Hero() {
  const { messages: m } = useLanguage()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 xl:px-12 pt-24 sm:pt-20">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-center">
          <div className={`space-y-6 sm:space-y-8 lg:pr-8 xl:pr-12 ${mounted ? "animate-fade-in-up" : "opacity-0"}`}>
            <div className="flex flex-col sm:flex-row items-center sm:items-center gap-4 sm:gap-6 mb-6 sm:mb-8 text-center sm:text-left">
              <button
                type="button"
                onClick={() => scrollToSection("about")}
                aria-label={m.hero.goToAbout}
                className="profile-avatar-btn size-24 sm:size-28 lg:size-32 shrink-0 overflow-hidden rounded-full border-2 border-primary bg-card p-0 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary"
              >
                <Image
                  src="/perfil.jpg"
                  alt={m.hero.profileAlt}
                  width={128}
                  height={128}
                  priority
                  className="size-full object-cover object-center"
                />
              </button>
              <div>
                <button
                  type="button"
                  onClick={() => scrollToSection("about")}
                  aria-label={m.hero.goToAbout}
                  className="block mx-auto sm:mx-0 text-center sm:text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
                >
                  <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-balance">Caio Dias</h1>
                </button>
                <h2 className="text-lg sm:text-xl lg:text-2xl text-primary font-medium">{m.hero.role}</h2>
              </div>
            </div>

            <p className="text-sm leading-relaxed sm:text-base lg:text-lg xl:text-xl text-muted-foreground max-w-2xl w-full text-center sm:text-left text-pretty mx-auto sm:mx-0">
              {m.hero.bio}
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <Button
                onClick={() => scrollToSection("projects")}
                className="w-full sm:w-auto justify-center bg-primary text-primary-foreground hover:bg-accent"
              >
                {m.hero.viewProjects}
                <ExternalLink className="h-4 w-4 shrink-0" />
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                {m.hero.contact}
              </Button>
            </div>

            <div className="flex gap-6 pt-4 justify-center sm:justify-start">
              <a
                href="https://github.com/caiodiasol"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={m.hero.githubAria}
                className="inline-flex text-muted-foreground hover:text-primary"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/caiodiasol/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={m.hero.linkedinAria}
                className="inline-flex text-muted-foreground hover:text-primary"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:caiodiasol@proton.me"
                aria-label={m.hero.emailAria}
                className="inline-flex text-muted-foreground hover:text-primary"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div className={`${mounted ? "animate-fade-in-up" : "opacity-0"} lg:delay-200 mt-8 lg:mt-0 w-full`}>
            <motion.div
              className="bg-card/80 backdrop-blur-sm border-2 border-border rounded-xl p-3 sm:p-6 font-mono text-[10px] sm:text-xs md:text-sm overflow-x-auto hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-primary"></div>
                <span className="ml-2 sm:ml-4 text-muted-foreground text-xs sm:text-sm">portfolio.tsx</span>
              </div>
              <div className="space-y-2 w-full overflow-hidden">
                <div>
                  <span className="text-blue-400">const</span> <span className="text-yellow-400">developer</span> ={" "}
                  {`{`}
                </div>
                <div className="ml-4">
                  <span className="text-green-400">name</span>: <span className="text-orange-400">&apos;Caio Dias&apos;</span>,
                </div>
                <div className="ml-4">
                  <span className="text-green-400">role</span>:{" "}
                  <span className="text-orange-400">&apos;Full Stack Developer&apos;</span>,
                </div>
                <div className="ml-4">
                  <span className="text-green-400">skills</span>: [
                </div>
                <div className="ml-8">
                  <span className="text-orange-400">&apos;React&apos;</span>, <span className="text-orange-400">&apos;Next.js&apos;</span>,{" "}
                  <span className="text-orange-400">&apos;TypeScript&apos;</span>,
                </div>
                <div className="ml-8">
                  <span className="text-orange-400">&apos;Docker&apos;</span>, <span className="text-orange-400">&apos;Python&apos;</span>,{" "}
                  <span className="text-orange-400">&apos;JavaScript&apos;</span>,{" "}
                </div>
                <div className="ml-8">
                  <span className="text-orange-400">&apos;Node.js&apos;</span>, <span className="text-orange-400">&apos;PostgreSQL&apos;</span>,{" "}
                  <span className="text-orange-400">&apos;Git&apos;</span>{" "}
                </div>
                <div className="ml-4">],</div>
                <div className="ml-4 flex flex-col xl:flex-row xl:items-start gap-1 xl:gap-2">
                  <div className="shrink-0">
                    <span className="text-green-400">passion</span>:
                  </div>
                  <span className="text-orange-400 break-words whitespace-pre-wrap">
                    &apos;{m.hero.codePassion}&apos;
                  </span>
                </div>
                <div>{`}`}</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
