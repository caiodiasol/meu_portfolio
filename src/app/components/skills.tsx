"use client"

import { Globe, Server, Wrench, Users, Award, BookOpen } from "lucide-react"
import { Code, Zap, Database, Smartphone } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Globe className="w-6 h-6" />,
      color: "text-blue-400",
      bgColor: "bg-slate-900 dark:bg-slate-900",
      borderColor: "border-blue-900/30 dark:border-blue-800/20",
      iconBg: "bg-blue-500/20",
      skills: ["React", "Next.js", "TypeScript", "HTML / CSS", "Tailwind CSS", "JavaScript", "Responsividade", "Componentização"],
    },
    {
      title: "Backend",
      icon: <Server className="w-6 h-6" />,
      color: "text-green-400",
      bgColor: "bg-slate-900 dark:bg-slate-900",
      borderColor: "border-green-900/30 dark:border-green-800/20",
      iconBg: "bg-green-500/20",
      skills: ["Node.js", "Python", "Firebase", "Docker", "PostgreSQL", "Django", "API Restful", "Automações"],
    },
    {
      title: "Ferramentas",
      icon: <Wrench className="w-6 h-6" />,
      color: "text-purple-400",
      bgColor: "bg-slate-900 dark:bg-slate-900",
      borderColor: "border-purple-900/30 dark:border-purple-800/20",
      iconBg: "bg-purple-500/20",
      skills: ["Git & Github", "Postman", "Power BI", "VS Code", "Figma", "Notion"],
    },
  ]

  const complementarySkills = [
    {
      title: "Metodologias",
      icon: <Users className="w-5 h-5" />,
      color: "text-orange-400",
      bgColor: "bg-slate-900 dark:bg-slate-900",
      borderColor: "border-orange-900/30 dark:border-orange-800/20",
      iconBg: "bg-orange-500/20",
      skills: ["Scrum", "Kanban", "Versionamento com Git", "Boas Práticas de Clean Code", "Integração Contínua"],
    },
    {
      title: "Certificações",
      icon: <Award className="w-5 h-5" />,
      color: "text-cyan-400",
      bgColor: "bg-slate-900 dark:bg-slate-900",
      borderColor: "border-cyan-900/30 dark:border-cyan-800/20",
      iconBg: "bg-cyan-500/20",
      skills: ["Metaverso", "Banco de Dados", "Ploomes", "Power BI","Virtual Reality"],
    },
    {
      title: "Soft Skills",
      icon: <BookOpen className="w-5 h-5" />,
      color: "text-pink-400",
      bgColor: "bg-slate-900 dark:bg-slate-900",
      borderColor: "border-pink-900/30 dark:border-pink-800/20",
      iconBg: "bg-pink-500/20",
      skills: [
        "Comunicação",
        "Resolução de Problemas",
        "Trabalho em Equipe",
        "Gestão de Tempo",
        "Adaptabilidade",
      ],
    },
  ]

  return (
    <section id="skills-section" className="py-16 sm:py-20 px-4 sm:px-6 bg-background">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">Competências <span className="text-gradient">Técnicas</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base lg:text-lg px-4">
              Tecnologias e ferramentas que utilizo para desenvolver soluções eficientes
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-16">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-xl border ${category.borderColor} ${category.bgColor} p-4 sm:p-6 lg:p-8 hover:shadow-xl transition-all duration-300`}
              >
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 lg:mb-8">
                  <div className={`p-2 sm:p-3 rounded-lg ${category.iconBg} ${category.color}`}>{category.icon}</div>
                  <h3 className={`text-lg sm:text-xl font-semibold ${category.color}`}>{category.title}</h3>
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
              </div>
            ))}
          </div>

          <div className="text-center mb-6 sm:mb-8 lg:mb-12">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Competências 
              <span className="text-gradient"> Complementares</span>
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {complementarySkills.map((category, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-xl border ${category.borderColor} ${category.bgColor} p-4 sm:p-6 hover:shadow-lg transition-all duration-300`}
              >
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <div className={`p-1.5 sm:p-2 rounded-lg ${category.iconBg} ${category.color}`}>{category.icon}</div>
                  <h4 className={`text-base sm:text-lg font-semibold ${category.color}`}>{category.title}</h4>
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
              </div>
            ))}
          </div>
          {/* Estatísticas adicionais */}
          <div className="mt-8 sm:mt-12 lg:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              { label: "Projetos Concluídos", value: "10+", icon: <Code className="w-4 h-4 sm:w-5 sm:h-5" /> },
              { label: "Anos de Experiência", value: "2+", icon: <Zap className="w-4 h-4 sm:w-5 sm:h-5" /> },
              { label: "Tecnologias", value: "10+", icon: <Database className="w-4 h-4 sm:w-5 sm:h-5" /> },
              { label: "Clientes Satisfeitos", value: "2+", icon: <Smartphone className="w-4 h-4 sm:w-5 sm:h-5" /> },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-4 sm:p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors"
              >
                <div className="flex justify-center mb-1 sm:mb-2 text-primary">{stat.icon}</div>
                <div className="text-xl sm:text-2xl font-bold text-foreground mb-0.5 sm:mb-1">{stat.value}</div>
                <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}