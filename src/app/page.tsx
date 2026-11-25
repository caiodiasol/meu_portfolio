import { Header } from "./components/header"
import { Hero } from "./components/hero"
import { About } from "./components/about"
import { Education } from "./components/education"
import { Experience } from "./components/experience"
import { Projects } from "./components/projects"
import { Skills } from "./components/skills"
import { Contact } from "./components/contact"
import { Footer } from "./components/footer"
import { SiteBackground } from "./components/site-background"

export default function Home() {
  return (
    <div className="relative min-h-screen bg-transparent">
      <SiteBackground />
      <div className="relative z-10">
        <Header />
        <main id="main">
          <Hero />
          <About />
          <Education />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}