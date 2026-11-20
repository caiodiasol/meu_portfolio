import type { Locale } from "../types"

export type CaseStudyContent = {
  title: string
  summary: string
  challenge: string
  solution: string
  results: string[]
}

export type CaseStudy = {
  slug: string
  image: string
  github: string
  live: string | null
  technologies: string[]
  content: Record<Locale, CaseStudyContent>
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "tarot",
    image: "/tarot.png",
    github: "https://github.com/caiodiasol/tarot_landpage",
    live: "https://www.tarotraissa.com.br/",
    technologies: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind 4",
      "Framer Motion",
      "Three.js",
      "shadcn/ui",
      "Zod",
      "React Hook Form",
    ],
    content: {
      pt: {
        title: "Tarot e Terapias Energéticas",
        summary:
          "Site profissional para apresentar serviços de Tarot e terapias, com presença digital moderna, foco mobile e conversão para contato.",
        challenge:
          "A cliente precisava de uma vitrine digital que transmitisse confiança e acolhimento, sem parecer genérica. O site tinha que carregar bem no celular, organizar serviços e produtos e facilitar o contato — tudo com visual cuidado e animações leves.",
        solution:
          "Construí a landing em Next.js e TypeScript com tipografia e motion pensados para a marca. Incluí seções de serviços, informações de atendimento, loja e formulário validado, além de recursos visuais com Framer Motion e Three.js para reforçar a identidade sem sacrificar performance.",
        results: [
          "Site em produção em tarotraissa.com.br, com navegação clara e CTAs de contato.",
          "Experiência mobile-first com carregamento otimizado e animações controladas.",
          "Stack moderna (Next.js 16, React 19, Tailwind 4) pronta para evolução de conteúdo.",
        ],
      },
      en: {
        title: "Tarot and Energy Therapies",
        summary:
          "Professional website for Tarot and therapy services, with a modern digital presence, mobile-first UX, and clear paths to contact.",
        challenge:
          "The client needed a digital storefront that felt trustworthy and welcoming—not generic. It had to perform well on mobile, organize services and products, and make contact easy, with polished visuals and restrained motion.",
        solution:
          "I built the landing page with Next.js and TypeScript, aligning typography and motion to the brand. The site covers services, session info, a shop area, and a validated contact form, with Framer Motion and Three.js accents that reinforce identity without hurting performance.",
        results: [
          "Live production site at tarotraissa.com.br with clear navigation and contact CTAs.",
          "Mobile-first experience with optimized loading and controlled animations.",
          "Modern stack (Next.js 16, React 19, Tailwind 4) ready for content growth.",
        ],
      },
    },
  },
  {
    slug: "gdash",
    image: "/dashboard_gdash.png",
    github: "https://github.com/caiodiasol/desafio-gdash-2025-02/tree/caio-dias-oliveira",
    live: null,
    technologies: [
      "TypeScript",
      "React",
      "Vite",
      "NestJS",
      "MongoDB",
      "Go",
      "Python",
      "RabbitMQ",
      "Docker",
      "JWT",
      "OpenAI",
      "Google Gemini",
    ],
    content: {
      pt: {
        title: "GDASH — Monitoramento Climático",
        summary:
          "Desafio técnico full stack para coleta, processamento e visualização de dados climáticos em tempo quase real, com pipeline distribuído e insights de IA.",
        challenge:
          "O desafio pedia um sistema resiliente capaz de ingerir dados climáticos, processá-los de forma assíncrona e expor um dashboard útil — com múltiplos serviços, mensageria e geração de insights, sem perder clareza de arquitetura.",
        solution:
          "Modelei um pipeline distribuído com RabbitMQ, serviços em NestJS, Go e Python, persistência em MongoDB e um frontend React com visualizações. A autenticação usa JWT; insights são gerados com OpenAI e Google Gemini. Tudo orquestrado com Docker Compose para subir o ambiente de ponta a ponta.",
        results: [
          "Arquitetura multi-serviço pronta para demonstrar resiliência e escalabilidade.",
          "Dashboard interativo para acompanhar métricas e insights climáticos.",
          "Integração de IA aplicada a dados do domínio, além do CRUD tradicional.",
        ],
      },
      en: {
        title: "GDASH — Weather Monitoring",
        summary:
          "Full stack technical challenge for near real-time weather data collection, processing, and visualization, with a distributed pipeline and AI insights.",
        challenge:
          "The brief called for a resilient system that could ingest weather data, process it asynchronously, and surface a useful dashboard—across multiple services, messaging, and insight generation—without losing architectural clarity.",
        solution:
          "I designed a distributed pipeline with RabbitMQ, NestJS/Go/Python services, MongoDB persistence, and a React dashboard with charts. Auth uses JWT; insights come from OpenAI and Google Gemini. Docker Compose wires the full stack for end-to-end demos.",
        results: [
          "Multi-service architecture that showcases resilience and scalability.",
          "Interactive dashboard for weather metrics and AI-assisted insights.",
          "Domain-focused AI integration beyond a plain CRUD exercise.",
        ],
      },
    },
  },
  {
    slug: "newsun",
    image: "/newsun_energy.png",
    github: "https://github.com/caiodiasol/desafio-dev-fullstack",
    live: null,
    technologies: [
      "TypeScript",
      "Next.js",
      "React",
      "NestJS",
      "Prisma ORM",
      "MySQL",
      "TailwindCSS",
      "Zod",
      "Docker",
      "API Rest",
    ],
    content: {
      pt: {
        title: "NewSun Energy — Compensação Energética",
        summary:
          "Desafio técnico full stack que simula o fluxo de compensação energética: lead, upload de conta, listagem e detalhe da simulação.",
        challenge:
          "Era preciso espelhar um fluxo real de negócio — do lead com conta de energia até a simulação — com validações sólidas, API bem estruturada e UX clara, aplicando Clean Architecture sem overengineering.",
        solution:
          "Separei backend NestJS (Prisma + MySQL) e frontend Next.js com formulários validados via Zod. O fluxo cobre submissão de leads, upload de documentos, listagem paginada e tela de detalhe da simulação, com Docker para ambiente reproduzível.",
        results: [
          "Fluxo ponta a ponta alinhado ao domínio de compensação energética.",
          "Validações e tipagem consistentes entre API e interface.",
          "Base de Clean Architecture adequada a evolução do produto.",
        ],
      },
      en: {
        title: "NewSun Energy — Energy Compensation",
        summary:
          "Full stack technical challenge simulating an energy compensation workflow: lead capture, bill upload, listing, and simulation detail.",
        challenge:
          "The goal was to mirror a real business flow—from a lead with a utility bill through to a simulation—with solid validation, a well-structured API, and clear UX, applying Clean Architecture without overengineering.",
        solution:
          "I split a NestJS backend (Prisma + MySQL) from a Next.js frontend with Zod-validated forms. The flow covers lead submission, document upload, paginated listing, and a simulation detail view, with Docker for a reproducible environment.",
        results: [
          "End-to-end flow aligned with the energy compensation domain.",
          "Consistent validation and typing across API and UI.",
          "Clean Architecture foundation ready for product evolution.",
        ],
      },
    },
  },
]

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug)
}

export function getCaseStudySlugs(): string[] {
  return caseStudies.map((study) => study.slug)
}
