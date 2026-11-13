import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import "./globals.css"
import { ScrollProgress } from "./components/scroll-progress"
import { getSiteUrl, siteConfig } from "@/lib/site"

const geistSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const siteUrl = getSiteUrl()

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.name, url: siteUrl }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    alternateLocale: [siteConfig.localeAlternate],
    url: siteUrl,
    siteName: siteConfig.title,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 800,
        height: 800,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: siteConfig.title,
      url: siteUrl,
      description: siteConfig.description,
      inLanguage: ["pt-BR", "en"],
      author: {
        "@type": "Person",
        name: siteConfig.name,
      },
    },
    {
      "@type": "Person",
      name: siteConfig.name,
      url: siteUrl,
      image: `${siteUrl}${siteConfig.ogImage}`,
      email: siteConfig.email,
      jobTitle: "Full Stack Developer",
      sameAs: [siteConfig.github, siteConfig.linkedin],
      knowsAbout: ["React", "Next.js", "TypeScript", "Node.js", "Python", "PostgreSQL"],
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem("theme") || "dark";
                  if (theme === "light") {
                    document.documentElement.classList.add("light");
                  } else {
                    document.documentElement.classList.remove("light");
                  }
                } catch (e) {
                  document.documentElement.classList.remove("light");
                }
              })();
            `,
          }}
        />
        <ScrollProgress />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
