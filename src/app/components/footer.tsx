"use client"

import { Github, Linkedin, Mail, Phone } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-provider"
import { siteConfig } from "@/lib/site"

export function Footer() {
  const { messages: m } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-card/30">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left space-y-1">
            <p className="text-sm font-semibold text-foreground">{siteConfig.name}</p>
            <p className="text-xs text-muted-foreground">
              © {year} {siteConfig.name}. {m.footer.rights}
            </p>
            <p className="text-xs text-muted-foreground font-mono">{m.footer.builtWith}</p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={m.hero.githubAria}
              className="inline-flex text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={m.hero.linkedinAria}
              className="inline-flex text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              aria-label={m.hero.emailAria}
              className="inline-flex text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={m.hero.whatsappAria}
              className="inline-flex text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
