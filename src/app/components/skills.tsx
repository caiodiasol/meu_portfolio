"use client"

import { motion, Variants } from "framer-motion"
import { Globe, Server, Wrench, Users, Award, BookOpen } from "lucide-react"
import { Code, Zap, Database, Smartphone } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-provider"

const categoryStyles = [
  { icon: <Globe className="w-6 h-6" />, color: "text-blue-400", bgColor: "bg-card/80 dark:bg-card/80", borderColor: "border-blue-500/30 dark:border-blue-400/20", iconBg: "bg-blue-500/20" },
  { icon: <Server className="w-6 h-6" />, color: "text-green-400", bgColor: "bg-card/80 dark:bg-card/80", borderColor: "border-green-500/30 dark:border-green-400/20", iconBg: "bg-green-500/20" },
  { icon: <Wrench className="w-6 h-6" />, color: "text-purple-400", bgColor: "bg-card/80 dark:bg-card/80", borderColor: "border-purple-500/30 dark:border-purple-400/20", iconBg: "bg-purple-500/20" },
]

const complementaryStyles = [
  { icon: <Users className="w-5 h-5" />, color: "text-orange-400", bgColor: "bg-card/80 dark:bg-card/80", borderColor: "border-orange-500/30 dark:border-orange-400/20", iconBg: "bg-orange-500/20" },
  { icon: <Award className="w-5 h-5" />, color: "text-cyan-400", bgColor: "bg-card/80 dark:bg-card/80", borderColor: "border-cyan-500/30 dark:border-cyan-400/20", iconBg: "bg-cyan-500/20" },
  { icon: <BookOpen className="w-5 h-5" />, color: "text-pink-400", bgColor: "bg-card/80 dark:bg-card/80", borderColor: "border-pink-500/30 dark:border-pink-400/20", iconBg: "bg-pink-500/20" },
]

const statIcons = [
  <Code className="w-4 h-4 sm:w-5 sm:h-5" key="code" />,
  <Zap className="w-4 h-4 sm:w-5 sm:h-5" key="zap" />,
  <Database className="w-4 h-4 sm:w-5 sm:h-5" key="db" />,
  <Smartphone className="w-4 h-4 sm:w-5 sm:h-5" key="phone" />,
]

export function Skills() {
  const { messages: m } = useLanguage()

  const stats = [
    { label: m.skills.stats.projects, value: "10+", icon: statIcons[0] },
    { label: m.skills.stats.experience, value: "4+", icon: statIcons[1] },
    { label: m.skills.stats.technologies, value: "10+", icon: statIcons[2] },
    { label: m.skills.stats.clients, value: "10+", icon: statIcons[3] },
  ]

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] } },
  }

  return (
    <section id="skills-section" className="py-16 sm:py-20 px-4 sm:px-6 bg-background">
      <div className="container mx-auto">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] }}
        >
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
              {m.skills.title} <span className="text-gradient">{m.skills.titleHighlight}</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base lg:text-lg px-4">{m.skills.subtitle}</p>
          </div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {m.skillCategories.map((category, index) => {
              const style = categoryStyles[index]
              return (
                <motion.div
                  key={index}
                  className={`group relative overflow-hidden rounded-xl border-2 backdrop-blur-sm ${style.borderColor} ${style.bgColor} p-4 sm:p-6 lg:p-8 hover:shadow-xl transition-all duration-300 hover:border-opacity-100`}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 lg:mb-8">
                    <div className={`p-2 sm:p-3 rounded-lg ${style.iconBg} ${style.color}`}>{style.icon}</div>
                    <h3 className={`text-lg sm:text-xl font-semibold ${style.color}`}>{category.title}</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-2 sm:gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="bg-slate-800/50 dark:bg-slate-800/30 rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm text-gray-300 hover:bg-slate-700/50 dark:hover:bg-slate-700/30 transition-colors duration-200"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          <div className="text-center mb-6 sm:mb-8 lg:mb-12">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
              {m.skills.complementaryTitle}
              <span className="text-gradient"> {m.skills.complementaryHighlight}</span>
            </h3>
          </div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {m.complementarySkills.map((category, index) => {
              const style = complementaryStyles[index]
              return (
                <motion.div
                  key={index}
                  className={`group relative overflow-hidden rounded-xl border-2 backdrop-blur-sm ${style.borderColor} ${style.bgColor} p-4 sm:p-6 hover:shadow-lg transition-all duration-300`}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                    <div className={`p-1.5 sm:p-2 rounded-lg ${style.iconBg} ${style.color}`}>{style.icon}</div>
                    <h4 className={`text-base sm:text-lg font-semibold ${style.color}`}>{category.title}</h4>
                  </div>
                  <div className="space-y-1.5 sm:space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="bg-slate-800/50 dark:bg-slate-800/30 rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm text-gray-300 hover:bg-slate-700/50 dark:hover:bg-slate-700/30 transition-colors duration-200"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          <motion.div
            className="mt-8 sm:mt-12 lg:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-4 sm:p-6 bg-card/80 backdrop-blur-sm border border-border rounded-xl hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex justify-center mb-1 sm:mb-2 text-primary">{stat.icon}</div>
                <div className="text-xl sm:text-2xl font-bold text-foreground mb-0.5 sm:mb-1">{stat.value}</div>
                <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
