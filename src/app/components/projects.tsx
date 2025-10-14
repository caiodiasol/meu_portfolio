"use client"

import { useState } from "react"
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Projects() {
  const projects = [
    {
      title: "Gerador de Dietas OpenAI",
      description:
        "Projeto de um Gerador de Dietas Inteligente, com backend com Node.js integrado ao frontend com Next.js. Utiliza um agente da OpenAI, com base de conhecimento estruturada dentro do prompt, para gerar planos alimentares personalizados e conectar-se a uma API para entrega dinâmica dos resultados.",
      image: "/dietaopenai.png",
      technologies: ["Next.js", "Node.js", "React", "OpenAI", "API Rest"],
      github: "https://github.com/caiodiasol/gerador_dieta_openai_frontend",
      live: "https://dietaai-rho.vercel.app/",
    },
    {
      title: "Efood",
      description:
        "Este é o meu projeto final do módulo de Front-End no curso de Desenvolvedor Full-Stack Python da EBAC. A aplicação simula uma plataforma de pedidos online, com funcionalidades completas como listagem de restaurantes, páginas individuais, carrinho de compras e fluxo de finalização com simulação de pagamento, tudo conectado a um backend via API.",
      image: "/efood_print.png",
      technologies: ["React", "TypeScript", "Redux Toolkit", "API Rest"],
      github: "https://github.com/caiodiasol/efood",
      live: "https://efood-jet-omega.vercel.app/",
    },
    {
      title: "Eplay - Loja de Games",
      image: "/eplay.jpg",
      description:
        "Este projeto consiste no desenvolvimento de um e-commerce de jogos digitais, utilizando a biblioteca React e tecnologias complementares como Styled Components e React Router DOM. A aplicação foi planejada com foco em modularidade, escalabilidade e usabilidade, proporcionando uma navegação fluida e uma interface moderna para o usuário final.",
      technologies: ["React", "TypeScript", "CSS-in-JS", "React Router DOM"],
      github: "https://github.com/caiodiasol/eplay",
      live: "https://eplay-woad.vercel.app/",
    },
    {
      title: "Agenda de Contatos com Cypress",
      description:
        "Este projeto consiste na introdução e aplicação prática do Cypress, uma ferramenta voltada para testes automatizados de ponta a ponta (E2E) em aplicações web. O objetivo é consolidar os conceitos fundamentais de testes automatizados, explorando boas práticas, organização e estruturação de testes eficazes para garantir a qualidade do software.",
      image: "/agenda_contatos.jpg",
      technologies: ["Cypress", "CSS", "JavaScript"],
      github: "https://github.com/caiodiasol/cypress_teste_agenda_ebac",
      live: "https://agenda-contatos-react.vercel.app/",
    },
    {
      title: "Festival com Contagem Regressiva",
      description:
        "Este repositório é um projeto de uma landpage desenvolvida para aprimorar habilidades em front-end, utilizando HTML, CSS, JavaScript e Parcel. O objetivo é configurar um ambiente de desenvolvimento eficiente, importar recursos necessários e criar uma página responsiva que funcione perfeitamente em tablets e smartphones. Além disso, a aplicação inclui uma funcionalidade de contagem regressiva, implementada com JavaScript utilizando o método getTime.",
      image: "/festival.jpg",
      technologies: ["Html", "CSS", "JavaScript", "Parcel"],
      github: "https://github.com/caiodiasol/caio_festival",
      live: "https://caio-festival.vercel.app/",
    },
    {
      title: "Landpage com Contagem Regressiva",
      image: "/ebac_tech.jpg",
      description:
        "Este repositório é um projeto de uma landpage desenvolvida para aprimorar habilidades em front-end, utilizando HTML, CSS, JavaScript e Parcel. O objetivo é configurar um ambiente de desenvolvimento eficiente, importar recursos necessários e criar uma página responsiva que funcione perfeitamente em tablets e smartphones. Além disso, a aplicação inclui uma funcionalidade de contagem regressiva, implementada com JavaScript utilizando o método getTime.",
      technologies: ["Html", "CSS", "JavaScript", "Parcel"],
      github: "https://github.com/caiodiasol/ebac_tech_talks",
      live: "https://ebac-tech-talks-mauve-eight.vercel.app/",
    },
    {
      title: "Réplica Disney+",
      description:
        "Este projeto consiste na criação de uma réplica fiel da interface do Disney Plus, desenvolvida com o objetivo de aprimorar habilidades em front-end, utilizando HTML, CSS, Sass, Gulp e JavaScript. A aplicação apresenta uma página inicial funcional, com detalhes sobre planos de assinatura, além de seções dedicadas a filmes e séries.",
      image: "/disney.jpg",
      technologies: ["Html", "CSS", "SASS", "Gulp", "JavaScript"],
      github: "https://github.com/caiodiasol/clone_disneyplus",
      live: "https://clone-disneyplus-caios-projects-e7ca8e91.vercel.app/",
    },
    {
      title: "Visualização Dinâmica do GitHub",
      description:
        "Este projeto consiste no desenvolvimento de uma aplicação interativa para visualização dinâmica de perfis do GitHub, utilizando AJAX e a Fetch API. A aplicação é projetada para aprimorar habilidades em front-end e manipulação de APIs, proporcionando uma interface simples e intuitiva que exibe dados detalhados de perfis do GitHub de maneira dinâmica.",
      image: "/git_dinamico.jpg",
      technologies: ["Html", "CSS", "JavaScript", "AJAX", "Fetch API"],
      github: "https://github.com/caiodiasol/ajax_github_profile",
      live: "https://ajax-github-profile-five.vercel.app/",
    },
    {
      title: "Jogo da Velha (Tic Tac Toe)",
      image: "/tic_tac_toe.png",
      description:
        "Este repositório disponibiliza uma implementação do jogo da velha (Tic-Tac-Toe) desenvolvida com React e Vite, com o objetivo de demonstrar conceitos fundamentais de componentização, gerenciamento de estado e boas práticas de organização em aplicações front-end modernas.",
      technologies: ["React", "Vite"],
      github: "https://github.com/caiodiasol/tic_tac_toe",
      live: "https://tic-tac-toe-kappa-neon.vercel.app/",
    },
    {
      title: "Landpage Vitorina Brasil",
      description:
        "Esse projeto consiste no desenvolvimento de uma landpage para uma loja de confecção de roupas em Salvador-Bahia, utilizando Bootstrap 5 para criar um layout responsivo e estilizado, com um menu de navegação acessível e visualmente atraente. O design é adaptado para diferentes tamanhos de tela e atende às necessidades específicas solicitadas pelo cliente.",
      image: "/vb_land.png",
      technologies: ["Html", "Bootstrap"],
      github: "https://github.com/caiodiasol/projeto_vitorina_bootstrap",
      live: "https://projeto-vitorina-bootstrap.vercel.app/",
    },
    {
      title: "Sorteador Numérico",
      description:
        "Esse projeto consiste no desenvolvimento de um sorteador de números, onde o usuário pode digitar um número máximo e o sistema gera números aleatórios dentro desse intervalo. Utilizando Grunt para automação de tarefas e LESS para estilização.",
      image: "/sorteador.jpg",
      technologies: ["Html", "LESS", "JavaScript", "Grunt" ],
      github: "https://github.com/caiodiasol/grunt_sorteador",
      live: "https://gruntsorteadorcaio.vercel.app/"
    },
    {
      title: "Projeto Lista de Tarefas Diárias",
      description:
        "Esse projeto consiste no desenvolvimento de uma aplicação simples de lista de tarefas utilizando jQuery. A aplicação permite que os usuários adicionem tarefas a uma lista e marquem tarefas como concluídas com um efeito de linha cruzada, proporcionando uma experiência de usuário intuitiva e eficiente.",
      image: "/lista_tarefa_jquery.jpg",
      technologies: ["Html", "CSS", "jQuery"],
      github: "https://github.com/caiodiasol/jQuery_lista_atividades",
      live: "https://caio-j-query-lista-atividades.vercel.app/"
    },
    {
      title: "Projeto Apresentação",
      description:
        "Este é um projeto de apresentação desenvolvido com Next.js e hospedado na Vercel, com o objetivo de apresentar minhas habilidades, projetos e trajetória profissional, proporcionando uma visão clara e moderna do meu perfil técnico.",
      image: "/apresentacao.jpg",
      technologies: ["React", "Next.js"],
      github: "https://github.com/caiodiasol/Portfolio_Caio_05-25",
      live: "https://portfoliocaio-sigma.vercel.app/"
    },
  ]

  const [currentProjectIndex, setCurrentProjectIndex] = useState(0)

  const nextProject = () => {
    setCurrentProjectIndex((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentProjectIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <section id="projects" className="py-16 px-8">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center">
            Projetos em <span className="text-gradient">Destaque</span>
          </h2>

          <div className="relative">
            <div className="overflow-hidden rounded-lg">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentProjectIndex * 100}%)` }}
              >
                {projects.map((project, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 mx-2">
                      <div className="h-64 lg:h-80 bg-muted/20 flex items-center justify-center p-4">
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
                        />
                      </div>

                      <div className="p-4 space-y-3">
                        <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>

                        <p className="text-muted-foreground text-pretty text-sm min-h-[4.5rem]">{project.description}</p>

                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="flex gap-3 pt-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent text-xs"
                            asChild
                          >
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github className="mr-1 h-3 w-3" />
                              Código
                            </a>
                          </Button>
                          {project.live && (
                          <Button
                            size="sm"
                            className="bg-primary text-primary-foreground hover:bg-accent text-xs"
                            asChild
                          >
                            <a href={project.live} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="mr-1 h-3 w-3" />
                              Ver Projeto
                            </a>
                          </Button>
                        )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={prevProject}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background border border-border text-foreground p-2 rounded-full transition-all hover:border-primary/50 hover:shadow-lg"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextProject}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background border border-border text-foreground p-2 rounded-full transition-all hover:border-primary/50 hover:shadow-lg"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            <div className="flex justify-center gap-2 mt-4">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProjectIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentProjectIndex === index
                      ? "bg-primary scale-110"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}