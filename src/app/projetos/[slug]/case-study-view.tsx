"use client"

import Link from "next/link"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getCaseStudy } from "@/lib/i18n/data/case-studies"
import { useLanguage } from "@/lib/i18n/language-provider"

export function CaseStudyView({ slug }: { slug: string }) {
  const { locale, messages: m } = useLanguage()
  const study = getCaseStudy(slug)

  if (!study) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-24 text-center">
        <p className="text-muted-foreground mb-6">Case não encontrado.</p>
        <Button asChild variant="outline" className="rounded-full">
          <Link href="/#projects">{m.caseStudy.back}</Link>
        </Button>
      </div>
    )
  }

  const content = study.content[locale]

  return (
    <article className="mx-auto max-w-4xl px-4 sm:px-6 py-10 sm:py-14">
      <Link
        href="/#projects"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
      >
        <ArrowLeft className="h-4 w-4" />
        {m.caseStudy.back}
      </Link>

      <div className="overflow-hidden rounded-2xl border-2 border-border bg-card/80 mb-8">
        <div className="relative h-48 sm:h-64 md:h-72 bg-muted/20 flex items-center justify-center p-4">
          <img
            src={study.image}
            alt={content.title}
            className="h-full w-full object-contain"
          />
        </div>
      </div>

      <header className="mb-10 space-y-4">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-balance">{content.title}</h1>
        <p className="text-muted-foreground text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl">
          {content.summary}
        </p>
        <div className="flex flex-wrap gap-2 pt-1">
          <Button variant="outline" size="sm" className="border-primary text-primary" asChild>
            <a href={study.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5">
              <Github className="h-3.5 w-3.5" />
              {m.caseStudy.code}
            </a>
          </Button>
          {study.live && (
            <Button
              size="sm"
              className="animate-cta-soft-pulse bg-primary text-primary-foreground shadow-none hover:bg-accent hover:[animation-play-state:paused]"
              asChild
            >
              <a href={study.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5">
                <ExternalLink className="h-3.5 w-3.5" />
                {m.caseStudy.live}
              </a>
            </Button>
          )}
        </div>
      </header>

      <div className="space-y-10">
        <section className="space-y-3">
          <h2 className="text-lg sm:text-xl font-semibold text-primary">{m.caseStudy.challenge}</h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{content.challenge}</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg sm:text-xl font-semibold text-primary">{m.caseStudy.solution}</h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{content.solution}</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg sm:text-xl font-semibold text-primary">{m.caseStudy.results}</h2>
          <ul className="space-y-2.5">
            {content.results.map((result) => (
              <li
                key={result}
                className="flex gap-3 text-sm sm:text-base text-muted-foreground leading-relaxed"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                <span>{result}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg sm:text-xl font-semibold text-primary">{m.caseStudy.stack}</h2>
          <div className="flex flex-wrap gap-2">
            {study.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs sm:text-sm font-mono text-primary"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>
      </div>
    </article>
  )
}
