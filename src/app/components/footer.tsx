"use client"

import { Github, Linkedin, Mail, Phone } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-provider"
import { siteConfig } from "@/lib/site"

export function Footer() {
  const { messages: m } = useLanguage()
  const year = new Date().getFullYear()

  const socialLinks = [
    { href: siteConfig.github, label: m.hero.githubAria, icon: Github, external: true },
    { href: siteConfig.linkedin, label: m.hero.linkedinAria, icon: Linkedin, external: true },
    { href: `mailto:${siteConfig.email}`, label: m.hero.emailAria, icon: Mail, external: false },
    { href: siteConfig.whatsappUrl, label: m.hero.whatsappAria, icon: Phone, external: true },
  ]

  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-10">
        <div className="flex flex-col items-center gap-6 md:grid md:grid-cols-3 md:items-center md:gap-4">
          <div className="flex flex-col items-center md:items-start gap-1.5">
            <div className="flex items-baseline gap-2">
              <span className="text-sm font-semibold text-gradient">{"<Dev />"}</span>
              <span className="text-sm text-foreground/80">{siteConfig.name}</span>
            </div>
            <p className="text-xs text-muted-foreground/80">{m.hero.role}</p>
            <p className="text-[11px] text-muted-foreground/60 font-mono tracking-wide">
              {m.footer.builtWith}
            </p>
          </div>

          <div className="text-center">
            <p className="text-xs text-muted-foreground/70 leading-relaxed">
              © {year} {siteConfig.name}
              <span className="mx-1.5 text-border">·</span>
              {m.footer.rights}
            </p>
            <p className="mt-1.5 text-[11px] text-muted-foreground/50">{m.contact.locationValue}</p>
          </div>

          <div className="flex items-center justify-center md:justify-end gap-1">
            {socialLinks.map(({ href, label, icon: Icon, external }) => (
              <a
                key={label}
                href={href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                aria-label={label}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground/70 hover:text-primary hover:bg-primary/5 transition-colors duration-200"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
