"use client"

import { motion } from "framer-motion"
import { GraduationCap, BookOpen } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-provider"
import type { EducationItem } from "@/lib/i18n/types"

const educationIcons = [BookOpen, BookOpen, GraduationCap]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
}

function EducationCard({ data, icon: Icon }: { data: EducationItem; icon: typeof BookOpen }) {
  return (
    <motion.div variants={itemVariants} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="relative group">
      <div className="absolute -left-[57px] top-6 hidden md:flex items-center justify-center z-20">
        <div className="w-12 h-12 rounded-full bg-card border-2 border-primary/50 flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-110 group-hover:border-primary transition-all duration-300 group-hover:bg-primary/10">
          <Icon className="w-5 h-5 text-primary" />
        </div>
      </div>

      <div className="relative flex flex-col md:flex-row items-start gap-6 p-6 rounded-xl bg-card/80 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 overflow-hidden">
        <div className="flex-shrink-0 md:hidden">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <Icon className="w-6 h-6 text-primary" />
          </div>
        </div>

        <div className="flex-1 min-w-0 relative z-10 w-full">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
            <h3 className="text-xl font-semibold text-foreground">{data.course}</h3>
            <span className="text-sm text-primary font-medium bg-primary/10 px-3 py-1 rounded-full mt-2 sm:mt-0 self-start sm:self-auto">
              {data.period}
            </span>
          </div>
          <p className="text-primary font-medium mb-1">{data.institution}</p>
          <p className="text-xs leading-relaxed sm:text-sm text-muted-foreground mb-3 text-justify sm:text-left">{data.description}</p>
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">{data.type}</span>
            <span className="text-xs text-green-400 bg-green-400/10 px-2 py-1 rounded">{data.status}</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function Education() {
  const { messages: m } = useLanguage()

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            {m.education.title} <span className="text-primary">{m.education.titleHighlight}</span>
          </h2>
          <p className="text-sm leading-relaxed sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            {m.education.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="relative md:border-l-2 md:border-primary/30 md:ml-6 md:pl-8 space-y-8"
          >
            {m.educationItems.map((education, index) => (
              <EducationCard key={index} data={education} icon={educationIcons[index] ?? BookOpen} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
