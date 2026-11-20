"use client"

import { useEffect, useMemo, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/i18n/language-provider"
import type { ProjectFilter, ProjectItem } from "@/lib/i18n/types"

const FILTERS: ProjectFilter[] = ["featured", "fullstack", "frontend", "backend"]
const PAGE_SIZE = 6

function filterProjects(projects: ProjectItem[], filter: ProjectFilter) {
  if (filter === "featured") return projects.filter((project) => project.featured)

  const filtered = projects.filter((project) => project.categories.includes(filter))
  if (filter === "fullstack" || filter === "backend") {
    return [...filtered].sort((a, b) => b.complexity - a.complexity)
  }
  return filtered
}

function ProjectCard({
  project,
  labels,
}: {
  project: ProjectItem
  labels: { code: string; viewProject: string; codeOnly: string; featuredLabel: string }
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.25 }}
      className="group flex h-full flex-col overflow-hidden rounded-xl border-2 border-border bg-card/80 backdrop-blur-sm hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
      whileHover={{ y: -2 }}
    >
      <div className="relative h-40 sm:h-44 bg-muted/20 flex items-center justify-center p-3">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
        />
        {project.featured && (
          <span className="absolute top-3 left-3 z-10 rounded-md border border-primary/80 bg-primary px-2.5 py-1 text-[10px] font-semibold font-mono uppercase tracking-wider text-primary-foreground shadow-md shadow-black/40">
            {labels.featuredLabel}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4 sm:p-5">
        <div className="space-y-1.5">
          <h3 className="text-base sm:text-lg font-semibold text-foreground leading-snug">{project.title}</h3>
          <p className="text-xs sm:text-sm text-muted-foreground line-clamp-3 leading-relaxed">{project.description}</p>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] sm:text-xs font-mono rounded-md border border-primary/20"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="px-2 py-0.5 text-[10px] sm:text-xs text-muted-foreground">
              +{project.technologies.length - 5}
            </span>
          )}
        </div>

        <div className="mt-auto flex flex-wrap gap-2 pt-1">
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
            <Button size="sm" className="h-8 text-[10px] sm:text-xs bg-primary text-primary-foreground hover:bg-accent" asChild>
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
      </div>
    </motion.div>
  )
}

export function Projects() {
  const { messages: m, locale } = useLanguage()
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("featured")
  const [currentPage, setCurrentPage] = useState(1)

  const filteredProjects = useMemo(
    () => filterProjects(m.projectItems, activeFilter),
    [m.projectItems, activeFilter],
  )

  const totalPages = Math.max(1, Math.ceil(filteredProjects.length / PAGE_SIZE))

  useEffect(() => {
    setCurrentPage(1)
  }, [activeFilter, locale])

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages)
    }
  }, [currentPage, totalPages])

  const paginatedProjects = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE
    return filteredProjects.slice(start, start + PAGE_SIZE)
  }, [filteredProjects, currentPage])

  const labels = {
    code: m.projects.code,
    viewProject: m.projects.viewProject,
    codeOnly: m.projects.codeOnly,
    featuredLabel: m.projects.featuredLabel,
  }

  const handleFilterChange = (filter: ProjectFilter) => {
    setActiveFilter(filter)
    setCurrentPage(1)
  }

  return (
    <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <motion.div
          className="max-w-6xl mx-auto"
          key={locale}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-center">
            {m.projects.title} <span className="text-gradient">{m.projects.titleHighlight}</span>
          </h2>

          <div className="mb-8 sm:mb-10 flex flex-wrap items-center justify-center gap-2">
            {FILTERS.map((filter) => {
              const isActive = activeFilter === filter
              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => handleFilterChange(filter)}
                  className={`rounded-md border-2 px-3 py-1.5 text-xs sm:text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "border-primary bg-primary/15 text-primary"
                      : "border-border bg-card/50 text-muted-foreground hover:border-primary/50 hover:text-primary"
                  }`}
                >
                  {m.projects.filters[filter]}
                </button>
              )
            })}
          </div>

          <AnimatePresence mode="popLayout">
            {paginatedProjects.length > 0 ? (
              <motion.div layout className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {paginatedProjects.map((project) => (
                  <ProjectCard
                    key={`${locale}-${activeFilter}-${currentPage}-${project.title}`}
                    project={project}
                    labels={labels}
                  />
                ))}
              </motion.div>
            ) : (
              <motion.p
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center text-sm text-muted-foreground py-12"
              >
                {m.projects.empty}
              </motion.p>
            )}
          </AnimatePresence>

          {filteredProjects.length > PAGE_SIZE && (
            <div className="mt-8 sm:mt-10 flex items-center justify-center gap-2">
              <button
                type="button"
                onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
                disabled={currentPage === 1}
                aria-label={m.projects.pagination.prev}
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border-2 border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary disabled:pointer-events-none disabled:opacity-40"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>

              {Array.from({ length: totalPages }, (_, index) => {
                const page = index + 1
                const isActive = currentPage === page
                return (
                  <button
                    key={page}
                    type="button"
                    onClick={() => setCurrentPage(page)}
                    aria-label={`${m.projects.pagination.page} ${page}`}
                    aria-current={isActive ? "page" : undefined}
                    className={`inline-flex h-9 min-w-9 items-center justify-center rounded-md border-2 px-2.5 text-xs sm:text-sm font-medium transition-colors ${
                      isActive
                        ? "border-primary bg-primary/15 text-primary"
                        : "border-border text-muted-foreground hover:border-primary/50 hover:text-primary"
                    }`}
                  >
                    {page}
                  </button>
                )
              })}

              <button
                type="button"
                onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))}
                disabled={currentPage === totalPages}
                aria-label={m.projects.pagination.next}
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border-2 border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary disabled:pointer-events-none disabled:opacity-40"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
