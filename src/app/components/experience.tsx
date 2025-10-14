import { Calendar, MapPin, Briefcase } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      period: "2025 Julho – 2025 Agosto",
      role: "Desenvolvedor de Software",
      company: "QuadCode",
      location: "Belo Horizonte, MG",
      description:
      "Atuei no desenvolvimento de uma aplicação web voltada ao gerenciamento de participantes em lives e à geração de rankings em tempo real. O projeto teve como foco otimizar o engajamento e a confiabilidade dos participantes durante as transmissões, garantindo interatividade fluida e atualização instantânea das informações. Implementei formulários dinâmicos e validação de dados no front-end, além de integrar o sistema ao Firebase Realtime Database para sincronização contínua entre usuários e servidor.",
      technologies: ["HTML", "CSS", "JavaScript", "Firebase"],
      achievements: [
      "Redução de 42% na taxa de inadimplência dos participantes, por meio da validação automática de inscrições e confirmação em tempo real.",
      "Aumento de 67% na presença efetiva nas lives, com controle ativo de acessos e gamificação por rankings dinâmicos.",
      "Sincronização instantânea dos dados de participação e desempenho, eliminando atrasos e inconsistências durante as transmissões.",
      "Melhoria perceptível da experiência do usuário, refletida em maior engajamento e feedbacks positivos nas sessões interativas.",
],

    },
    {
      period: "2025 Fevereiro — 2025 Junho",
      role: "Desenvolvedor Júnior",
      company: "Filterfeed",
      location: "Vitória da Conquista, BA",
      description:
        "Atuei na otimização e automação de processos internos no CRM Ploomes, com foco em garantir estabilidade técnica, eficiência operacional e qualidade dos dados comerciais. Desenvolvi e implementei soluções em Python e scripts de correção que impactaram diretamente a produtividade do time, o desempenho das integrações e a confiabilidade das informações estratégicas. Além da atuação técnica, participei semanalmente de alinhamentos com stakeholders para compreender necessidades do negócio e traduzir essas demandas em soluções robustas e sob medida.",
      technologies: ["Python", "Postman", "API Rest", "Ploomes"],
      achievements: [
        "Redução de 80% nos erros de integração, com scripts de correção automatizados e validações aprimoradas.",
        "Criação de mais de 15 automações em Python, diminuindo em 70% o tempo de entrega de relatórios e análises estratégicas.",
        "Aumento de 30% na atualização de dados do funil de vendas, com automação no monitoramento e encerramento de oportunidades paradas.",
        "100% de estabilidade técnica nas entregas após testes funcionais e exploratórios em múltiplas APIs integradas.",
        "Maior produtividade e fluidez operacional, com reestruturação dos fluxos automatizados no CRM.",
        "Fortalecimento da comunicação entre áreas técnicas e comerciais, resultando em entregas mais alinhadas às metas de negócio."
      ],
    },
  ]

  return (
    <section id="experience" className="py-16 sm:py-20 px-4 sm:px-6 bg-card/30">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12 text-center">
            <span className="text-gradient">Experiência</span>
          </h2>

          <div className="relative">
            {/* Linha vertical */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden lg:block"></div>

            <div className="space-y-8 sm:space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="group relative">
                  {/* Ponto na linha do tempo */}
                  <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden lg:block group-hover:scale-125 transition-transform"></div>

                  <div className="lg:ml-20">
                    <div className="bg-card border border-border rounded-xl p-4 sm:p-6 lg:p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                      {/* Header da experiência */}
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

                      {/* Conquistas */}
                      <div className="mb-4 sm:mb-6">
                        <h4 className="text-sm font-semibold text-foreground mb-3">Principais Conquistas:</h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs leading-relaxed sm:text-sm text-muted-foreground text-justify sm:text-left">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tecnologias */}
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}