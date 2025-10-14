"use client"

import { motion } from "framer-motion"
import { GraduationCap, BookOpen, Award } from "lucide-react"

const educationData = [
  {
    type: "Curso Técnico Profissionalizante",
    institution: "EBAC - Escola Britânica de Artes Criativas e Tecnologia",
    course: "Desenvolvedor FullStack Python",
    period: "2024 - Atualmente",
    status: "Cursando",
    icon: BookOpen,
    description: "Formação profissional para atuar no desenvolvimento de software do front-end ao back-end, abordando fundamentos da programação e lógica computacional até o uso de frameworks modernos como Django e React, além de banco de dados e APIs, testes e boas práticas de engenharia de software.",
  },
   {
     type: "Curso Técnico",
     institution: "Infinity School",
     course: "Programação e Metaverso",
     period: "2022 - 2023",
     status: "Concluído",
     icon: BookOpen,
     description: "Fundamentos de programação, C# aplicado ao Unity, Realidade Virtual, Banco de Dados para Servidores e Criação de Cenários 3D.",
   },
  {
    type: "Ensino Superior",
    institution: "Unijorge - Universidade Jorge Amado",
    course: "Administração de Empresas",
    period: "2014 - 2019",
    status: "Concluído",
    icon: GraduationCap,
    description: "Foco em liderança, gestão, empreendedorismo e marketing.",
  },
]

export function Education() {
  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Formação <span className="text-primary">Acadêmica</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Minha jornada educacional e os conhecimentos adquiridos ao longo dos anos
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {educationData.map((education, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative mb-8 last:mb-0"
            >
              {/* Timeline line */}
              {index < educationData.length - 1 && (
                <div className="absolute left-6 top-16 w-0.5 h-24 bg-primary/30 hidden md:block" />
              )}

              <div className="flex flex-col md:flex-row items-start gap-6 p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <education.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-xl font-semibold text-foreground">{education.course}</h3>
                    <span className="text-sm text-primary font-medium bg-primary/10 px-3 py-1 rounded-full mt-2 sm:mt-0 self-start">
                      {education.period}
                    </span>
                  </div>

                  <p className="text-primary font-medium mb-1">{education.institution}</p>

                  <p className="text-muted-foreground text-sm mb-3">{education.description}</p>

                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">{education.type}</span>
                    <span className="text-xs text-green-400 bg-green-400/10 px-2 py-1 rounded">{education.status}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}