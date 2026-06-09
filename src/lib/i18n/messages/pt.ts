import { mergeProjects } from "../merge-projects"
import type { Messages } from "../types"

const projectContent = [
  {
    title: "Tarot e Terapias Energéticas",
    description:
      "Site profissional apresentando serviços de leitura de Tarot, informações sobre atendimentos, loja de produtos e formulário de contato. Desenvolvido com foco em performance mobile e carregamento otimizado.",
  },
  {
    title: "Desafio Técnico – GDASH | Sistema de Monitoramento Climático",
    description:
      "Sistema full stack desenvolvido como desafio técnico para a GDASH, focado na coleta, processamento e visualização de dados climáticos em tempo quase real. A solução implementa um pipeline distribuído com mensageria, múltiplos serviços, geração de insights com IA e um dashboard interativo, priorizando resiliência, escalabilidade e boas práticas de arquitetura.",
  },
  {
    title: "Desafio Técnico – NewSun Energy",
    description:
      "Aplicação full stack desenvolvida como desafio técnico para a NewSun Energy Group, simulando um fluxo real de compensação energética. O projeto contempla desde a submissão de leads com upload de contas de energia até a listagem e visualização detalhada das simulações, com forte foco em Clean Architecture, validações robustas e experiência do usuário.",
  },
  {
    title: "Gerador de Dietas OpenAI",
    description:
      "Projeto de um Gerador de Dietas Inteligente, com backend com Node.js integrado ao frontend com Next.js. Utiliza um agente da OpenAI, com base de conhecimento estruturada dentro do prompt, para gerar planos alimentares personalizados e conectar-se a uma API para entrega dinâmica dos resultados.",
  },
  {
    title: "Efood",
    description:
      "Este é o meu projeto final do módulo de Front-End no curso de Desenvolvedor Full-Stack Python da EBAC. A aplicação simula uma plataforma de pedidos online, com funcionalidades completas como listagem de restaurantes, páginas individuais, carrinho de compras e fluxo de finalização com simulação de pagamento, tudo conectado a um backend via API.",
  },
  {
    title: "Eplay - Loja de Games",
    description:
      "Este projeto consiste no desenvolvimento de um e-commerce de jogos digitais, utilizando a biblioteca React e tecnologias complementares como Styled Components e React Router DOM. A aplicação foi planejada com foco em modularidade, escalabilidade e usabilidade, proporcionando uma navegação fluida e uma interface moderna para o usuário final.",
  },
  {
    title: "Agenda de Contatos com Cypress",
    description:
      "Este projeto consiste na introdução e aplicação prática do Cypress, uma ferramenta voltada para testes automatizados de ponta a ponta (E2E) em aplicações web. O objetivo é consolidar os conceitos fundamentais de testes automatizados, explorando boas práticas, organização e estruturação de testes eficazes para garantir a qualidade do software.",
  },
  {
    title: "Festival com Contagem Regressiva",
    description:
      "Este repositório é um projeto de uma landpage desenvolvida para aprimorar habilidades em front-end, utilizando HTML, CSS, JavaScript e Parcel. O objetivo é configurar um ambiente de desenvolvimento eficiente, importar recursos necessários e criar uma página responsiva que funcione perfeitamente em tablets e smartphones. Além disso, a aplicação inclui uma funcionalidade de contagem regressiva, implementada com JavaScript utilizando o método getTime.",
  },
  {
    title: "Landpage com Contagem Regressiva",
    description:
      "Este repositório é um projeto de uma landpage desenvolvida para aprimorar habilidades em front-end, utilizando HTML, CSS, JavaScript e Parcel. O objetivo é configurar um ambiente de desenvolvimento eficiente, importar recursos necessários e criar uma página responsiva que funcione perfeitamente em tablets e smartphones. Além disso, a aplicação inclui uma funcionalidade de contagem regressiva, implementada com JavaScript utilizando o método getTime.",
  },
  {
    title: "Réplica Disney+",
    description:
      "Este projeto consiste na criação de uma réplica fiel da interface do Disney Plus, desenvolvida com o objetivo de aprimorar habilidades em front-end, utilizando HTML, CSS, Sass, Gulp e JavaScript. A aplicação apresenta uma página inicial funcional, com detalhes sobre planos de assinatura, além de seções dedicadas a filmes e séries.",
  },
  {
    title: "Visualização Dinâmica do GitHub",
    description:
      "Este projeto consiste no desenvolvimento de uma aplicação interativa para visualização dinâmica de perfis do GitHub, utilizando AJAX e a Fetch API. A aplicação é projetada para aprimorar habilidades em front-end e manipulação de APIs, proporcionando uma interface simples e intuitiva que exibe dados detalhados de perfis do GitHub de maneira dinâmica.",
  },
  {
    title: "Jogo da Velha (Tic Tac Toe)",
    description:
      "Este repositório disponibiliza uma implementação do jogo da velha (Tic-Tac-Toe) desenvolvida com React e Vite, com o objetivo de demonstrar conceitos fundamentais de componentização, gerenciamento de estado e boas práticas de organização em aplicações front-end modernas.",
  },
  {
    title: "Landpage Vitorina Brasil",
    description:
      "Esse projeto consiste no desenvolvimento de uma landpage para uma loja de confecção de roupas em Salvador-Bahia, utilizando Bootstrap 5 para criar um layout responsivo e estilizado, com um menu de navegação acessível e visualmente atraente. O design é adaptado para diferentes tamanhos de tela e atende às necessidades específicas solicitadas pelo cliente.",
  },
  {
    title: "Sorteador Numérico",
    description:
      "Esse projeto consiste no desenvolvimento de um sorteador de números, onde o usuário pode digitar um número máximo e o sistema gera números aleatórios dentro desse intervalo. Utilizando Grunt para automação de tarefas e LESS para estilização.",
  },
  {
    title: "Projeto Lista de Tarefas Diárias",
    description:
      "Esse projeto consiste no desenvolvimento de uma aplicação simples de lista de tarefas utilizando jQuery. A aplicação permite que os usuários adicionem tarefas a uma lista e marquem tarefas como concluídas com um efeito de linha cruzada, proporcionando uma experiência de usuário intuitiva e eficiente.",
  },
  {
    title: "Projeto Apresentação",
    description:
      "Este é um projeto de apresentação desenvolvido com Next.js e hospedado na Vercel, com o objetivo de apresentar minhas habilidades, projetos e trajetória profissional, proporcionando uma visão clara e moderna do meu perfil técnico.",
  },
]

export const messagesPt: Messages = {
  meta: {
    title: "Caio Dias - Desenvolvedor Full Stack",
    description:
      "Portfólio de Caio Dias - Desenvolvedor Full Stack especializado em React, Next.js, Python e Django. Crio soluções digitais escaláveis e centradas na experiência do usuário.",
  },
  header: {
    nav: {
      about: "Sobre",
      education: "Educação",
      experience: "Experiência",
      projects: "Projetos",
      skills: "Competências",
    },
    resume: "Currículo",
    resumePt: "Português",
    resumeEn: "English",
    viewProjects: "Ver Projetos",
    contact: "Entrar em Contato",
    closeMenu: "Fechar menu",
    openMenu: "Abrir menu",
  },
  hero: {
    role: "Desenvolvedor Full Stack",
    bio: "Acredito que tecnologia só faz sentido quando resolve problemas reais. Foi buscando formas mais inteligentes de otimizar processos e simplificar desafios que encontrei no desenvolvimento de software uma ferramenta para transformar ideias em soluções concretas. Hoje, desenvolvo sistemas, automações e plataformas que unem tecnologia, negócios e experiência do usuário, sempre com foco em criar produtos úteis, intuitivos e preparados para evoluir. No fim das contas, o que mais me motiva é gerar impacto real e facilitar a vida de quem está do outro lado da tela.",
    viewProjects: "Ver Projetos",
    contact: "Entrar em Contato",
    goToAbout: "Ir para a seção Sobre",
    profileAlt: "Caio Dias - Foto de Perfil",
    githubAria: "Meu Perfil no Github",
    linkedinAria: "Meu Perfil no LinkedIn",
    emailAria: "Enviar um e-mail para mim",
    codePassion: "Implementar soluções centradas na experiência do usuário",
  },
  about: {
    title: "Sobre",
    titleHighlight: "Mim",
    p1: "Minha trajetória profissional começou na Administração, área em que me graduei e que me proporcionou experiências valiosas na gestão de negócios e no empreendedorismo. Durante esse período, tive a oportunidade de compreender de perto a dinâmica empresarial, a importância da organização de processos e a visão estratégica necessária para conduzir projetos de forma eficiente. Essas vivências foram fundamentais para moldar minha mentalidade analítica, minha capacidade de resolução de problemas e meu olhar crítico sobre oportunidades de melhoria.",
    p2: "Foi justamente essa curiosidade em investigar e compreender melhor o mundo dos negócios e da inovação que me levou a explorar um novo universo: a tecnologia. O ponto de virada veio em 2021, quando busquei entender mais a fundo como funcionavam o Bitcoin, a blockchain e os smart contracts. Essa busca despertou meu interesse pela programação e abriu caminho para uma transição de carreira, iniciada formalmente em 2022.",
    p3: "Desde a conclusão do curso de Desenvolvedor Full Stack Python no final de 2025, venho me aprofundando no desenvolvimento full stack, unindo minha base analítica e visão de negócios à criação de soluções tecnológicas eficientes e escaláveis. Ao longo desse período, evoluí em linguagens e frameworks como Python, JavaScript, React, Next.js, TypeScript, Django e Docker, sempre com foco em boas práticas de engenharia de software e na integração sólida entre front-end e back-end. Busco atuar em projetos que valorizem qualidade técnica, colaboração e impacto real por meio da tecnologia.",
    techTitle: "Tecnologias que utilizo:",
  },
  education: {
    title: "Formação",
    titleHighlight: "Acadêmica",
    subtitle: "Minha jornada educacional e os conhecimentos adquiridos ao longo dos anos",
  },
  educationItems: [
    {
      type: "Curso Técnico Profissionalizante",
      institution: "EBAC - Escola Britânica de Artes Criativas e Tecnologia",
      course: "Desenvolvedor FullStack Python",
      period: "2024 - 2025",
      status: "Concluído",
      description:
        "Formação profissional para atuar no desenvolvimento de software do front-end ao back-end, abordando fundamentos da programação e lógica computacional até o uso de frameworks modernos como Django e React, além de banco de dados e APIs, testes e boas práticas de engenharia de software.",
    },
    {
      type: "Curso Técnico",
      institution: "Infinity School",
      course: "Programação e Metaverso",
      period: "2022 - 2023",
      status: "Concluído",
      description:
        "Fundamentos de programação, C# aplicado ao Unity, Realidade Virtual, Banco de Dados para Servidores e Criação de Cenários 3D.",
    },
    {
      type: "Ensino Superior",
      institution: "Unijorge - Universidade Jorge Amado",
      course: "Administração de Empresas",
      period: "2014 - 2019",
      status: "Concluído",
      description: "Foco em liderança, gestão, empreendedorismo e marketing.",
    },
  ],
  experience: {
    title: "Experiência",
    achievements: "Principais Conquistas:",
    stack: "Stack",
  },
  experienceItems: [
    {
      period: "2026 Janeiro – O Momento",
      role: "Desenvolvedor Full Stack",
      company: "NewSun Energy Group",
      location: "Remoto",
      description:
        "Atuo como Desenvolvedor Full Stack na NewSun Energy Group, focando no desenvolvimento de soluções internas para sistemas corporativos. Minha atuação abrange desde a concepção de APIs REST escaláveis no backend até a integração fluida com o frontend, priorizando sempre a organização de código, performance e a entrega de valor ao negócio.",
      technologies: ["Node.js", "TypeScript", "Fastify", "Prisma", "PostgreSQL", "Redis", "Docker", "PNPM"],
      achievements: [
        "Desenvolvimento de APIs REST escaláveis utilizando Node.js, Fastify e TypeScript, com implementação de regras de negócio complexas e endpoints paginados.",
        "Modelagem de dados e gerenciamento de migrations em PostgreSQL utilizando Prisma ORM, garantindo integridade e performance.",
        "Integração do Redis para cache e otimização de performance em sistemas corporativos de alta demanda.",
        "Padronização de ambientes de desenvolvimento através do uso de Docker e Docker Compose em infraestrutura monorepo com PNPM.",
        "Implementação de sistemas auxiliares críticos, como logs de auditoria e notificações acionáveis.",
        "Colaboração ativa em refinamentos técnicos, debugging e suporte ao time, além de revisões de código e práticas de integração contínua.",
      ],
    },
    {
      period: "2025 Julho – 2025 Dezembro",
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
        "Fortalecimento da comunicação entre áreas técnicas e comerciais, resultando em entregas mais alinhadas às metas de negócio.",
      ],
    },
  ],
  projects: {
    title: "Projetos em",
    titleHighlight: "Destaque",
    code: "Código",
    viewProject: "Ver Projeto",
  },
  projectItems: mergeProjects(projectContent),
  skills: {
    title: "Competências",
    titleHighlight: "Técnicas",
    subtitle: "Tecnologias e ferramentas que utilizo para desenvolver soluções eficientes",
    complementaryTitle: "Competências",
    complementaryHighlight: "Complementares",
    stats: {
      projects: "Projetos Concluídos",
      experience: "Anos de Experiência",
      technologies: "Tecnologias",
      clients: "Clientes Satisfeitos",
    },
  },
  skillCategories: [
    {
      title: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "HTML / CSS", "Tailwind CSS", "JavaScript", "Responsividade", "Componentização"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Python", "Firebase", "Docker", "PostgreSQL", "Django", "API Restful", "Automações"],
    },
    {
      title: "Ferramentas",
      skills: ["Git & Github", "Postman", "Power BI", "VS Code", "Figma", "Notion", "Jira", "DBeaver"],
    },
  ],
  complementarySkills: [
    {
      title: "Metodologias",
      skills: ["Scrum", "Kanban", "Versionamento com Git", "Boas Práticas de Clean Code", "Integração Contínua"],
    },
    {
      title: "Certificações",
      skills: ["Dev. Full Stack", "Metaverso", "Banco de Dados", "Ploomes", "Virtual Reality"],
    },
    {
      title: "Soft Skills",
      skills: ["Comunicação", "Resolução de Problemas", "Trabalho em Equipe", "Gestão de Tempo", "Adaptabilidade"],
    },
  ],
  contact: {
    title: "Vamos",
    titleHighlight: "Conversar",
    subtitle: "Se você gostaria de discutir um projeto ou apenas dizer oi, estou sempre disposto a conversar.",
    infoTitle: "Informações de Contato",
    email: "Email",
    whatsapp: "Whatsapp",
    location: "Localização",
    locationValue: "Florianópolis - SC",
    formSubject: "Nova mensagem do portfólio!",
    namePlaceholder: "Seu nome",
    emailPlaceholder: "Seu email",
    phonePlaceholder: "Seu telefone (opcional)",
    messagePlaceholder: "Sua mensagem",
    submit: "Enviar Mensagem",
    sending: "Enviando...",
    successTitle: "Mensagem enviada com sucesso! ✨",
    successMessage: "Obrigado pelo contato! Responderei em breve.",
    emailTitle: "Enviar email",
    whatsappTitle: "Enviar WhatsApp",
  },
}
