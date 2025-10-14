"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "./theme-toggle"
import { Download } from "lucide-react"
export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  const downloadResume = () => {
    const link = document.createElement("a")
    link.href = "/CaioDias.pdf"
    link.download = "CaioDias.pdf"
    link.click()
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo e tema */}
          <div className="flex items-center gap-3 ">
            <div className="text-xl font-bold text-gradient">{"<Dev />"}</div>
            <ThemeToggle />
          </div>

          {/* Navegação */}
          <div className="hidden md:flex items-center space-x-6">
            <button onClick={() => scrollToSection("about")} className="link-hover text-muted-foreground hover:cursor-pointer hover:text-primary text-sm">
              Sobre
            </button>
            <button onClick={() => scrollToSection("education")} className="link-hover text-muted-foreground hover:cursor-pointer hover:text-primary text-sm">
              Educação
            </button>
            <button onClick={() => scrollToSection("experience")} className="link-hover text-muted-foreground hover:cursor-pointer hover:text-primary text-sm">
              Experiência
            </button>
            <button onClick={() => scrollToSection("skills-section")} className="link-hover text-muted-foreground hover:cursor-pointer hover:text-primary text-sm">
              Competências
            </button>
            <button onClick={() => scrollToSection("projects")} className="link-hover text-muted-foreground hover:cursor-pointer hover:text-primary text-sm">
              Projetos
            </button>
          </div>

          {/* Ações */}
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={downloadResume}
              className="border-primary text-primary hover:cursor-pointer hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              <Download className="mr-2 h-4 w-4" />
              Currículo
            </Button>
            <Button
              onClick={() => scrollToSection("projects")}
              variant="outline"
              size="sm"
              className="border-primary text-primary hover:bg-primary hover:cursor-pointer hover:text-primary-foreground bg-transparent"
            >
              Ver Projetos
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              size="sm"
              className="bg-primary text-primary-foreground hover:cursor-pointer hover:bg-accent"
            >
              Entrar em Contato
            </Button>
          </div>
        </div>
      </nav>
    </header>
  )
}