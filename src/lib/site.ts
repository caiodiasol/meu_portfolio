export const siteConfig = {
  name: "Caio Dias",
  title: "Caio Dias - Desenvolvedor Full Stack",
  titleEn: "Caio Dias - Full Stack Developer",
  description:
    "Portfólio de Caio Dias - Desenvolvedor Full Stack especializado em React, Next.js, TypeScript, Node.js e Python. Crio soluções digitais escaláveis e centradas na experiência do usuário.",
  descriptionEn:
    "Portfolio of Caio Dias - Full Stack Developer specializing in React, Next.js, TypeScript, Node.js, and Python. I build scalable digital solutions centered on user experience.",
  keywords: [
    "Caio Dias",
    "Desenvolvedor Full Stack",
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Fastify",
    "Python",
    "Portfólio",
  ],
  ogImage: "/perfil.jpg",
  email: "caiodiasol@proton.me",
  phoneDisplay: "+55 (71) 99727-5016",
  whatsappUrl: "https://wa.me/5571997275016",
  github: "https://github.com/caiodiasol",
  linkedin: "https://www.linkedin.com/in/caiodiasol/",
  locale: "pt_BR",
  localeAlternate: "en_US",
} as const

export function getSiteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "")
  }

  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL.replace(/\/$/, "")}`
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL.replace(/\/$/, "")}`
  }

  return "http://localhost:3000"
}
