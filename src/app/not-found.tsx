import type { Metadata } from "next"
import { Header } from "./components/header"
import { Footer } from "./components/footer"
import { SiteBackground } from "./components/site-background"
import { NotFoundContent } from "./components/not-found-content"

export const metadata: Metadata = {
  title: "Página não encontrada",
  robots: {
    index: false,
    follow: false,
  },
}

export default function NotFound() {
  return (
    <div className="relative min-h-screen bg-transparent">
      <SiteBackground />
      <div className="relative z-10">
        <Header />
        <main id="main" className="pt-20 sm:pt-24">
          <NotFoundContent />
        </main>
        <Footer />
      </div>
    </div>
  )
}
