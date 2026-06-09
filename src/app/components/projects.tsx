"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/i18n/language-provider"

export function Projects() {
  const { messages: m, locale } = useLanguage()
  const projects = m.projectItems
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0)

  useEffect(() => {
    setCurrentProjectIndex(0)
  }, [locale])

  const nextProject = () => {
    setCurrentProjectIndex((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentProjectIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-center">
            {m.projects.title} <span className="text-gradient">{m.projects.titleHighlight}</span>
          </h2>

          <div className="relative">
            <div className="overflow-hidden rounded-xl">
              <div
                className="flex transition-transform duration-500 ease-in-out py-4 overflow-visible"
                style={{ transform: `translateX(-${currentProjectIndex * 100}%)` }}
              >
                {projects.map((project, index) => (
                  <div key={index} className="w-full flex-shrink-0">
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
                              <span>{m.projects.code}</span>
                            </a>
                          </Button>
                          {project.live && (
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
                                <span>{m.projects.viewProject}</span>
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={prevProject}
              className="absolute left-2 sm:left-4 top-[210px] sm:top-[40%] -translate-y-1/2 bg-primary/20 backdrop-blur-md hover:bg-primary/40 border-2 border-primary/50 hover:border-primary text-primary p-1 sm:p-1.5 rounded-full z-30 transition-all duration-300"
            >
              <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>
            <button
              onClick={nextProject}
              className="absolute right-2 sm:right-4 top-[210px] sm:top-[40%] -translate-y-1/2 bg-primary/20 backdrop-blur-md hover:bg-primary/40 border-2 border-primary/50 hover:border-primary text-primary p-1 sm:p-1.5 rounded-full z-30 transition-all duration-300"
            >
              <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>

            <div className="flex justify-center gap-1.5 sm:gap-2 mt-4">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProjectIndex(index)}
                  className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full ${currentProjectIndex === index
                    ? "bg-primary scale-125 hover:scale-[1.31]"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
                    }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
