"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ThemeToggle } from "./theme-toggle"
import { LanguageToggle } from "./language-toggle"
import { Download, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/lib/i18n/language-provider"

const CV_FILES = {
  pt: { href: "/Caio_CV_PT.pdf", filename: "Caio_CV_PT.pdf" },
  en: { href: "/Caio_CV_EN.pdf", filename: "Caio_CV_EN.pdf" },
} as const

function downloadCv(href: string, filename: string) {
  const link = document.createElement("a")
  link.href = href
  link.download = filename
  link.click()
}

function ResumeDownloadButton({
  className,
  fullWidth = false,
  onAfterSelect,
}: {
  className?: string
  fullWidth?: boolean
  onAfterSelect?: () => void
}) {
  const { messages: m } = useLanguage()

  const handleDownload = (href: string, filename: string) => {
    downloadCv(href, filename)
    onAfterSelect?.()
  }

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button
          type="button"
          variant="outline"
          size="sm"
          aria-haspopup="menu"
          className={cn(
            "border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent",
            fullWidth && "w-full",
            className,
          )}
        >
          <Download className="h-4 w-4 shrink-0" />
          {m.header.resume}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        sideOffset={6}
        className="z-[70] min-w-0 w-[var(--radix-dropdown-menu-trigger-width)] border-primary/30 bg-popover p-1"
      >
        <DropdownMenuItem
          className="cursor-pointer justify-center"
          onClick={() => handleDownload(CV_FILES.pt.href, CV_FILES.pt.filename)}
        >
          {m.header.resumePt}
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer justify-center"
          onClick={() => handleDownload(CV_FILES.en.href, CV_FILES.en.filename)}
        >
          {m.header.resumeEn}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export function Header() {
  const { messages: m } = useLanguage()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
    setIsMobileMenuOpen(false)
  }

  const navItems = [
    { id: "about", label: m.header.nav.about },
    { id: "education", label: m.header.nav.education },
    { id: "experience", label: m.header.nav.experience },
    { id: "projects", label: m.header.nav.projects },
    { id: "skills-section", label: m.header.nav.skills },
  ]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="text-lg sm:text-xl font-bold text-gradient whitespace-nowrap">{"<Dev />"}</div>
            <LanguageToggle />
            <ThemeToggle />
          </div>

          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="link-hover text-muted-foreground hover:text-primary text-base"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-2">
            <ResumeDownloadButton />
            <Button
              onClick={() => scrollToSection("projects")}
              variant="outline"
              size="sm"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              {m.header.viewProjects}
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              size="sm"
              className="bg-primary text-primary-foreground hover:bg-accent"
            >
              {m.header.contact}
            </Button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary"
            aria-label={isMobileMenuOpen ? m.header.closeMenu : m.header.openMenu}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <>
          <div
            className="lg:hidden fixed inset-0 bg-background/80 backdrop-blur-sm z-40 animate-in fade-in duration-200"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="lg:hidden fixed top-[68px] left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border shadow-lg z-50 animate-in slide-in-from-top-4 duration-300 max-h-[calc(100vh-68px)] overflow-y-auto">
            <div className="px-6 py-6 space-y-4 max-w-md mx-auto">
              <div className="flex justify-end">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 hover:bg-primary/10 rounded-lg"
                  aria-label={m.header.closeMenu}
                >
                  <X className="h-5 w-5 text-foreground" />
                </button>
              </div>

              <div className="flex flex-col space-y-3">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left text-muted-foreground hover:text-primary py-2 text-base"
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              <div className="flex flex-col space-y-2 pt-4 border-t border-border">
                <ResumeDownloadButton fullWidth onAfterSelect={() => setIsMobileMenuOpen(false)} />
                <Button
                  onClick={() => scrollToSection("projects")}
                  variant="outline"
                  size="sm"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                >
                  {m.header.viewProjects}
                </Button>
                <Button
                  onClick={() => scrollToSection("contact")}
                  size="sm"
                  className="w-full bg-primary text-primary-foreground hover:bg-accent"
                >
                  {m.header.contact}
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  )
}
