"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react"

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-24 sm:pt-20">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Conteúdo principal */}
          <div className={`space-y-6 sm:space-y-8 ${mounted ? "animate-fade-in-up" : "opacity-0"}`}>
            <div className="flex flex-col sm:flex-row items-center sm:items-center gap-4 sm:gap-6 mb-6 sm:mb-8 text-center sm:text-left">
              <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden border-4 border-primary/20 bg-card flex items-center justify-center flex-shrink-0">
                <img src="/perfil.jpg" alt="foto perfil" className="w-full h-full object-cover object-center" />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-balance">Caio Dias</h1>
                <h2 className="text-lg sm:text-xl lg:text-2xl text-primary font-medium">Desenvolvedor Full Stack</h2>
              </div>
            </div>

            <p className="text-sm leading-relaxed sm:text-base lg:text-lg text-muted-foreground max-w-lg text-justify sm:text-left">
              Crio soluções digitais que unem estratégia, tecnologia e experiência do usuário. Do planejamento à implementação, busco compreender o problema com profundidade para desenvolver sistemas consistentes, escaláveis e alinhados aos objetivos do negócio. Cada projeto é uma oportunidade de traduzir lógica em clareza, transformar dados em decisões e criar experiências fluidas que refletem cuidado em cada detalhe — do backend à interface. Meu foco está em construir produtos que gerem impacto real, combinando precisão técnica, visão analítica e uma engenharia orientada à qualidade e evolução contínua.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <Button
                onClick={() => scrollToSection("projects")}
                className="w-full sm:w-auto bg-primary text-primary-foreground hover:cursor-pointer hover:bg-accent"
              >
                Ver Projetos
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="w-full sm:w-auto border-primary text-primary hover:bg-primary hover:cursor-pointer hover:text-primary-foreground"
              >
                Entrar em Contato
              </Button>
            </div>

            {/* Links sociais */}
            <div className="flex gap-6 pt-4 justify-center sm:justify-start">
              <a
                href="https://github.com/caiodiasol"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/caiodiasol/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="mailto:caiodiasol@proton.me" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Área visual/código */}
          <div className={`${mounted ? "animate-fade-in-up" : "opacity-0"} lg:delay-200 hidden lg:block`}>
            <div className="bg-card border border-border rounded-lg p-4 sm:p-6 font-mono text-xs sm:text-sm">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-primary"></div>
                <span className="ml-2 sm:ml-4 text-muted-foreground text-xs sm:text-sm">portfolio.tsx</span>
              </div>
              <div className="space-y-2 min-w-max">
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
                  <span className="text-orange-400">&apos;Django&apos;</span>, <span className="text-orange-400">&apos;Python&apos;</span>,{" "}
                  <span className="text-orange-400">&apos;JavaScript&apos;</span>,{" "}
                </div>
                <div className="ml-8">
                  <span className="text-orange-400">&apos;Node.js&apos;</span>, <span className="text-orange-400">&apos;PostgreSQL&apos;</span>,{" "}
                  <span className="text-orange-400">&apos;Git&apos;</span>{" "}
                </div>
                <div className="ml-4">],</div>
                <div className="ml-4">
                  <span className="text-green-400">passion</span>:{" "}
                  <span className="text-orange-400">&apos;Implementar soluções centradas na experiência do usuário&apos;</span>
                </div>
                <div>{`}`}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}