"use client"

import { motion, Variants } from "framer-motion"
import { Calendar, MapPin, Briefcase } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-provider"

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
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden lg:block"></div>

            <motion.div
              className="space-y-8 sm:space-y-12"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {m.experienceItems.map((exp, index) => (
                <motion.div key={index} className="group relative" variants={itemVariants} whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                  <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden lg:block group-hover:scale-125 transition-transform"></div>

                  <div className="lg:ml-20">
                    <div className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-4 sm:p-6 lg:p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 overflow-hidden">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4 sm:mb-6">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-xs sm:text-sm text-primary font-mono">
                            <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                            {exp.period}
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

                      <div className="mb-4 sm:mb-6">
                        <h4 className="text-sm font-semibold text-foreground mb-3">{m.experience.achievements}</h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs leading-relaxed sm:text-sm text-muted-foreground text-justify sm:text-left">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 sm:px-3 py-1 sm:py-1.5 bg-primary/10 text-primary text-xs sm:text-sm rounded-full border border-primary/20 hover:bg-primary/20 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
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
