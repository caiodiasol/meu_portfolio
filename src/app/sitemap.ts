import type { MetadataRoute } from "next"
import { getCaseStudySlugs } from "@/lib/i18n/data/case-studies"
import { getSiteUrl } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl()
  const casePages = getCaseStudySlugs().map((slug) => ({
    url: `${siteUrl}/projetos/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...casePages,
  ]
}
