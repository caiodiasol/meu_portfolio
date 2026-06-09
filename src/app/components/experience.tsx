"use client"

import { motion, Variants } from "framer-motion"
import {
  Calendar,
  MapPin,
  Briefcase,
  Terminal,
  Layers,
  Code2,
  Database,
  Zap,
  GitBranch,
  Shield,
  Users,
  Cpu,
  type LucideIcon,
} from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-provider"

const achievementIcons: LucideIcon[] = [Code2, Database, Zap, GitBranch, Shield, Users, Cpu]

export function Experience() {
  const { messages: m } = useLanguage()

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  return (
    <section id="experience" className="py-16 sm:py-20 px-4 sm:px-6 bg-card/30">
      <div className="container mx-auto">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12 text-center">
            <span className="text-gradient">{m.experience.title}</span>
          </h2>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px hidden lg:block bg-gradient-to-b from-primary/40 via-primary/20 to-transparent" />

            <motion.div
              className="space-y-8 sm:space-y-12"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {m.experienceItems.map((exp, index) => (
                <motion.div key={index} className="group relative" variants={itemVariants} whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                  <div className="absolute left-3 top-6 hidden lg:block z-20 cursor-pointer">
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-14 w-3 bg-card pointer-events-none" aria-hidden="true" />
                    <div className="relative w-10 h-10 rounded-lg bg-card border-2 border-primary/50 flex items-center justify-center shadow-lg shadow-primary/20 ring-[3px] ring-card group-hover:scale-110 group-hover:border-primary group-hover:shadow-primary/30 transition-all duration-300">
                      <Code2 className="w-4 h-4 text-primary" />
                    </div>
                  </div>

                  <div className="lg:ml-20">
                    <div className="bg-card/80 backdrop-blur-sm border-2 border-border rounded-xl p-4 sm:p-6 lg:p-8 group-hover:border-primary hover:border-primary transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/20 hover:shadow-lg hover:shadow-primary/20 overflow-hidden">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4 sm:mb-6">
                        <div className="space-y-2">
                          <div className="flex items-center gap-3">
                            <div className="lg:hidden w-9 h-9 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                              <Code2 className="w-4 h-4 text-primary" />
                            </div>
                            <div className="flex items-center gap-2 text-xs sm:text-sm text-primary font-mono">
                              <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                              {exp.period}
                            </div>
                          </div>
                          <h3 className="text-xl sm:text-2xl font-bold text-foreground">{exp.role}</h3>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Briefcase className="w-3 h-3 sm:w-4 sm:h-4" />
                              <span className="font-medium text-primary">{exp.company}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <p className="text-xs leading-relaxed sm:text-sm lg:text-base text-muted-foreground text-justify sm:text-left mb-4 sm:mb-6">{exp.description}</p>

                      <div className="mb-4 sm:mb-6 rounded-lg border border-border/60 bg-background/40 overflow-hidden">
                        <div className="flex items-center gap-2 px-3 sm:px-4 py-2.5 border-b border-border/60 bg-muted/30">
                          <div className="flex gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                            <span className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                          </div>
                          <div className="flex items-center gap-1.5 ml-2">
                            <Terminal className="w-3.5 h-3.5 text-primary" />
                            <h4 className="text-xs sm:text-sm font-mono font-semibold text-foreground">
                              {m.experience.achievements}
                            </h4>
                          </div>
                        </div>

                        <ul className="grid sm:grid-cols-2 gap-2 p-3 sm:p-4">
                          {exp.achievements.map((achievement, i) => {
                            const Icon = achievementIcons[i % achievementIcons.length]
                            return (
                              <li
                                key={i}
                                className="group/item flex items-start gap-2.5 rounded-md border border-transparent bg-muted/20 px-2.5 py-2.5 hover:border-primary/20 hover:bg-primary/5 transition-all duration-200"
                              >
                                <div className="flex-shrink-0 flex items-center gap-1.5 mt-0.5">
                                  <span className="font-mono text-[10px] text-primary/60 tabular-nums">
                                    {String(i + 1).padStart(2, "0")}
                                  </span>
                                  <div className="w-6 h-6 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center group-hover/item:border-primary/40 group-hover/item:bg-primary/15 transition-colors">
                                    <Icon className="w-3 h-3 text-primary" />
                                  </div>
                                </div>
                                <span className="text-xs leading-relaxed sm:text-sm text-muted-foreground text-justify sm:text-left">
                                  {achievement}
                                </span>
                              </li>
                            )
                          })}
                        </ul>
                      </div>

                      <div>
                        <div className="flex items-center gap-1.5 mb-2.5">
                          <Layers className="w-3.5 h-3.5 text-primary" />
                          <span className="text-xs font-mono font-medium text-muted-foreground uppercase tracking-wider">
                            {m.experience.stack}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 sm:px-3 py-1 sm:py-1.5 bg-primary/10 text-primary text-xs sm:text-sm font-mono rounded-md border border-primary/20 hover:bg-primary/20 hover:border-primary/40 transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
