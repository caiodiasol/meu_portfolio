export type Locale = "pt" | "en"

export type ProjectItem = {
  title: string
  description: string
  image: string
  technologies: string[]
  github: string
  live: string | null
}

export type EducationItem = {
  type: string
  institution: string
  course: string
  period: string
  status: string
  description: string
}

export type ExperienceItem = {
  period: string
  role: string
  company: string
  location: string
  description: string
  technologies: string[]
  achievements: string[]
}

export type SkillCategory = {
  title: string
  skills: string[]
}

export type Messages = {
  meta: {
    title: string
    description: string
  }
  header: {
    nav: {
      about: string
      education: string
      experience: string
      projects: string
      skills: string
    }
    resume: string
    resumePt: string
    resumeEn: string
    viewProjects: string
    contact: string
    closeMenu: string
    openMenu: string
  }
  hero: {
    role: string
    bio: string
    viewProjects: string
    contact: string
    goToAbout: string
    profileAlt: string
    githubAria: string
    linkedinAria: string
    emailAria: string
    codePassion: string
  }
  about: {
    title: string
    titleHighlight: string
    p1: string
    p2: string
    p3: string
    techTitle: string
  }
  education: {
    title: string
    titleHighlight: string
    subtitle: string
  }
  educationItems: EducationItem[]
  experience: {
    title: string
    achievements: string
    stack: string
  }
  experienceItems: ExperienceItem[]
  projects: {
    title: string
    titleHighlight: string
    code: string
    viewProject: string
  }
  projectItems: ProjectItem[]
  skills: {
    title: string
    titleHighlight: string
    subtitle: string
    complementaryTitle: string
    complementaryHighlight: string
    stats: {
      projects: string
      experience: string
      technologies: string
      clients: string
    }
  }
  skillCategories: SkillCategory[]
  complementarySkills: SkillCategory[]
  contact: {
    title: string
    titleHighlight: string
    subtitle: string
    infoTitle: string
    email: string
    whatsapp: string
    location: string
    locationValue: string
    formSubject: string
    namePlaceholder: string
    emailPlaceholder: string
    phonePlaceholder: string
    messagePlaceholder: string
    submit: string
    sending: string
    successTitle: string
    successMessage: string
    emailTitle: string
    whatsappTitle: string
  }
}
