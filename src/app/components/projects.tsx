"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/i18n/language-provider"
import type { ProjectItem } from "@/lib/i18n/types"

function FeaturedCarousel({
  projects,
  labels,
}: {
  projects: ProjectItem[]
  labels: { code: string; viewProject: string; codeOnly: string }
}) {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0)

  useEffect(() => {
    setCurrentProjectIndex(0)
  }, [projects])

  if (projects.length === 0) return null

  const nextProject = () => {
    setCurrentProjectIndex((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentProjectIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-xl">
        <div
          className="flex transition-transform duration-500 ease-in-out py-4 overflow-visible"
          style={{ transform: `translateX(-${currentProjectIndex * 100}%)` }}
        >
          {projects.map((project, index) => (
            <div key={`${project.title}-${index}`} className="w-full flex-shrink-0">
              <motion.div
                className="group relative bg-card/80 backdrop-blur-sm border-2 border-border rounded-xl overflow-hidden hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 mx-1 sm:mx-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="h-48 sm:h-64 lg:h-80 bg-muted/20 flex items-center justify-center p-2 sm:p-4 relative z-10">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-contain transition-transform duration-500 hover:scale-[1.03]"
                  />
                </div>

                <div className="p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6 relative z-10">
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground">{project.title}</h3>
                  <p className="text-xs leading-relaxed sm:text-sm lg:text-base text-muted-foreground text-justify sm:text-left min-h-[3.5rem] sm:min-h-[4.5rem]">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 sm:px-3 py-1 sm:py-1.5 bg-primary/10 text-primary text-xs sm:text-sm rounded-full border border-primary/20 hover:bg-primary/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full sm:w-auto justify-center border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent text-[10px] sm:text-xs"
                      asChild
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5"
                      >
                        <Github className="h-3 w-3 shrink-0" />
                        <span>{labels.code}</span>
                      </a>
                    </Button>
                    {project.live ? (
                      <Button
                        size="sm"
                        className="w-full sm:w-auto justify-center bg-primary text-primary-foreground hover:bg-accent text-[10px] sm:text-xs"
                        asChild
                      >
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-1.5"
                        >
                          <ExternalLink className="h-3 w-3 shrink-0" />
                          <span>{labels.viewProject}</span>
                        </a>
                      </Button>
                    ) : (
                      <span className="inline-flex items-center justify-center px-3 py-1.5 text-[10px] sm:text-xs font-mono text-muted-foreground border border-border rounded-md">
                        {labels.codeOnly}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={prevProject}
        aria-label="Previous project"
        className="absolute left-2 sm:left-4 top-[210px] sm:top-[40%] -translate-y-1/2 bg-primary/20 backdrop-blur-md hover:bg-primary/40 border-2 border-primary/50 hover:border-primary text-primary p-1 sm:p-1.5 rounded-full z-30 transition-all duration-300"
      >
        <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
      </button>
      <button
        type="button"
        onClick={nextProject}
        aria-label="Next project"
        className="absolute right-2 sm:right-4 top-[210px] sm:top-[40%] -translate-y-1/2 bg-primary/20 backdrop-blur-md hover:bg-primary/40 border-2 border-primary/50 hover:border-primary text-primary p-1 sm:p-1.5 rounded-full z-30 transition-all duration-300"
      >
        <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
      </button>

      <div className="flex justify-center gap-1.5 sm:gap-2 mt-4">
        {projects.map((_, index) => (
          <button
            type="button"
            key={index}
            aria-label={`Go to project ${index + 1}`}
            onClick={() => setCurrentProjectIndex(index)}
            className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full ${
              currentProjectIndex === index
                ? "bg-primary scale-125 hover:scale-[1.31]"
                : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
            }`}
          />
        ))}
      </div>
    </div>
  )
}

function MoreProjectsList({
  projects,
  labels,
}: {
  projects: ProjectItem[]
  labels: { code: string; viewProject: string; moreProjects: string; codeOnly: string }
}) {
  if (projects.length === 0) return null

  return (
    <div className="mt-12 sm:mt-16">
      <h3 className="text-lg sm:text-xl font-semibold text-center mb-6 sm:mb-8">
        <span className="text-gradient">{labels.moreProjects}</span>
      </h3>

      <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
        {projects.map((project) => (
          <motion.div
            key={project.title}
            className="flex flex-col gap-3 rounded-xl border-2 border-border bg-card/80 backdrop-blur-sm p-4 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            <div className="flex items-start gap-3">
              <div className="w-16 h-12 sm:w-20 sm:h-14 rounded-md overflow-hidden bg-muted/30 flex-shrink-0 border border-border">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="text-sm sm:text-base font-semibold text-foreground truncate">{project.title}</h4>
                <p className="text-xs text-muted-foreground line-clamp-2 mt-0.5">{project.description}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {project.technologies.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] sm:text-xs font-mono rounded-md border border-primary/20"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 4 && (
                <span className="px-2 py-0.5 text-[10px] sm:text-xs text-muted-foreground">
                  +{project.technologies.length - 4}
                </span>
              )}
            </div>

            <div className="flex flex-wrap gap-2 mt-auto">
              <Button
                variant="outline"
                size="sm"
                className="h-8 text-[10px] sm:text-xs border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                asChild
              >
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5">
                  <Github className="h-3 w-3 shrink-0" />
                  {labels.code}
                </a>
              </Button>
              {project.live ? (
                <Button
                  size="sm"
                  className="h-8 text-[10px] sm:text-xs bg-primary text-primary-foreground hover:bg-accent"
                  asChild
                >
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5">
                    <ExternalLink className="h-3 w-3 shrink-0" />
                    {labels.viewProject}
                  </a>
                </Button>
              ) : (
                <span className="inline-flex items-center h-8 px-2 text-[10px] sm:text-xs font-mono text-muted-foreground border border-border rounded-md">
                  {labels.codeOnly}
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export function Projects() {
  const { messages: m, locale } = useLanguage()
  const featuredProjects = m.projectItems.filter((project) => project.featured)
  const moreProjects = m.projectItems.filter((project) => !project.featured)

  const labels = {
    code: m.projects.code,
    viewProject: m.projects.viewProject,
    moreProjects: m.projects.moreProjects,
    codeOnly: m.projects.codeOnly,
  }

  return (
    <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <motion.div
          className="max-w-3xl mx-auto"
          key={locale}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 text-center">
            {m.projects.title} <span className="text-gradient">{m.projects.titleHighlight}</span>
          </h2>
          <p className="text-center text-xs sm:text-sm text-muted-foreground mb-6 sm:mb-8 font-mono uppercase tracking-wider">
            {m.projects.featuredLabel}
          </p>

          <FeaturedCarousel projects={featuredProjects} labels={labels} />
          <MoreProjectsList projects={moreProjects} labels={labels} />
        </motion.div>
      </div>
    </section>
  )
}
