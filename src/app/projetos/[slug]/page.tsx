import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Header } from "@/app/components/header"
import { Footer } from "@/app/components/footer"
import { SiteBackground } from "@/app/components/site-background"
import { getCaseStudy, getCaseStudySlugs } from "@/lib/i18n/data/case-studies"
import { getSiteUrl } from "@/lib/site"
import { CaseStudyView } from "./case-study-view"

type PageProps = {
  params: { slug: string }
}

export function generateStaticParams() {
  return getCaseStudySlugs().map((slug) => ({ slug }))
}

export function generateMetadata({ params }: PageProps): Metadata {
  const study = getCaseStudy(params.slug)
  if (!study) {
    return { title: "Case" }
  }

  const content = study.content.pt
  const siteUrl = getSiteUrl()

  return {
    title: content.title,
    description: content.summary,
    openGraph: {
      title: content.title,
      description: content.summary,
      url: `${siteUrl}/projetos/${study.slug}`,
      images: [{ url: study.image }],
    },
    alternates: {
      canonical: `${siteUrl}/projetos/${study.slug}`,
    },
  }
}

export default function CaseStudyPage({ params }: PageProps) {
  const study = getCaseStudy(params.slug)
  if (!study) notFound()

  return (
    <div className="relative min-h-screen bg-transparent">
      <SiteBackground />
      <div className="relative z-10">
        <Header />
        <main className="pt-20 sm:pt-24">
          <CaseStudyView slug={params.slug} />
        </main>
        <Footer />
      </div>
    </div>
  )
}
