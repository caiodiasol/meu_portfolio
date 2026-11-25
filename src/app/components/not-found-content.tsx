"use client"

import Link from "next/link"
import { ArrowLeft, FolderKanban } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/i18n/language-provider"

export function NotFoundContent() {
  const { messages: m } = useLanguage()

  return (
    <div className="mx-auto flex min-h-[70vh] max-w-2xl flex-col items-center justify-center px-4 py-24 text-center">
      <p className="mb-3 font-mono text-sm font-semibold tracking-[0.2em] text-primary">{m.notFound.code}</p>
      <h1 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">{m.notFound.title}</h1>
      <p className="mb-8 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
        {m.notFound.description}
      </p>
      <div className="flex flex-col gap-3 sm:flex-row">
        <Button asChild className="bg-primary text-primary-foreground hover:bg-accent">
          <Link href="/" className="inline-flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            {m.notFound.home}
          </Link>
        </Button>
        <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent">
          <Link href="/#projects" className="inline-flex items-center gap-2">
            <FolderKanban className="h-4 w-4" />
            {m.notFound.projects}
          </Link>
        </Button>
      </div>
    </div>
  )
}
