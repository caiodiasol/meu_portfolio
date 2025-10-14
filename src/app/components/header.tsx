"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "./theme-toggle"
import { Download, Menu, X } from "lucide-react"
export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Bloquear scroll quando menu mobile estiver aberto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
    setIsMobileMenuOpen(false)
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
      <nav className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo e tema */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="text-lg sm:text-xl font-bold text-gradient whitespace-nowrap">{"<Dev />"}</div>
            <ThemeToggle />
          </div>

          {/* Navegação Desktop */}
          <div className="hidden lg:flex items-center space-x-6">
            <button onClick={() => scrollToSection("about")} className="link-hover text-muted-foreground hover:cursor-pointer hover:text-primary text-sm">
              Sobre
            </button>
            <button onClick={() => scrollToSection("education")} className="link-hover text-muted-foreground hover:cursor-pointer hover:text-primary text-sm">
              Educação
            </button>
            <button onClick={() => scrollToSection("experience")} className="link-hover text-muted-foreground hover:cursor-pointer hover:text-primary text-sm">
              Experiência
            </button>
            <button onClick={() => scrollToSection("projects")} className="link-hover text-muted-foreground hover:cursor-pointer hover:text-primary text-sm">
              Projetos
            </button>
            <button onClick={() => scrollToSection("skills-section")} className="link-hover text-muted-foreground hover:cursor-pointer hover:text-primary text-sm">
              Competências
            </button>
          </div>

          {/* Ações Desktop */}
          <div className="hidden lg:flex items-center gap-2">
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

          {/* Menu Hambúrguer Mobile */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary cursor-pointer transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Menu Mobile Overlay */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="lg:hidden fixed inset-0 bg-background/80 backdrop-blur-sm z-40 animate-in fade-in duration-200"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Menu Dropdown */}
          <div className="lg:hidden fixed top-[68px] left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border shadow-lg z-50 animate-in slide-in-from-top-4 duration-300 max-h-[calc(100vh-68px)] overflow-y-auto">
            <div className="px-6 py-6 space-y-4 max-w-md mx-auto">
              {/* Botão de Fechar */}
              <div className="flex justify-end">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 hover:bg-primary/10 rounded-lg transition-colors cursor-pointer"
                  aria-label="Fechar menu"
                >
                  <X className="h-5 w-5 text-foreground" />
                </button>
              </div>

              <div className="flex flex-col space-y-3">
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-left text-muted-foreground hover:text-primary transition-colors py-2 cursor-pointer text-base"
                >
                  Sobre
                </button>
                <button
                  onClick={() => scrollToSection("education")}
                  className="text-left text-muted-foreground hover:text-primary transition-colors py-2 cursor-pointer text-base"
                >
                  Educação
                </button>
                <button
                  onClick={() => scrollToSection("experience")}
                  className="text-left text-muted-foreground hover:text-primary transition-colors py-2 cursor-pointer text-base"
                >
                  Experiência
                </button>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="text-left text-muted-foreground hover:text-primary transition-colors py-2 cursor-pointer text-base"
                >
                  Projetos
                </button>
                <button
                  onClick={() => scrollToSection("skills-section")}
                  className="text-left text-muted-foreground hover:text-primary transition-colors py-2 cursor-pointer text-base"
                >
                  Competências
                </button>
              </div>
              
              <div className="flex flex-col space-y-2 pt-4 border-t border-border">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={downloadResume}
                  className="w-full border-primary text-primary hover:cursor-pointer hover:bg-primary hover:text-primary-foreground bg-transparent"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Currículo
                </Button>
                <Button
                  onClick={() => scrollToSection("projects")}
                  variant="outline"
                  size="sm"
                  className="w-full border-primary text-primary hover:bg-primary hover:cursor-pointer hover:text-primary-foreground bg-transparent"
                >
                  Ver Projetos
                </Button>
                <Button
                  onClick={() => scrollToSection("contact")}
                  size="sm"
                  className="w-full bg-primary text-primary-foreground hover:cursor-pointer hover:bg-accent"
                >
                  Entrar em Contato
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  )
}