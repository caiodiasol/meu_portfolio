import { mergeProjects } from "../merge-projects"
import type { Messages } from "../types"

const projectContent = [
  {
    title: "Tarot and Energy Therapies",
    description:
      "Professional website showcasing Tarot reading services, session information, a product shop, and a contact form. Built with a focus on mobile performance and optimized loading.",
  },
  {
    title: "Technical Challenge – GDASH | Weather Monitoring System",
    description:
      "Full stack system developed as a technical challenge for GDASH, focused on collecting, processing, and visualizing weather data in near real time. The solution implements a distributed pipeline with messaging, multiple services, AI-generated insights, and an interactive dashboard, prioritizing resilience, scalability, and solid architecture practices.",
  },
  {
    title: "Technical Challenge – NewSun Energy",
    description:
      "Full stack application developed as a technical challenge for NewSun Energy Group, simulating a real energy compensation workflow. The project covers everything from lead submission with utility bill uploads to listing and detailed simulation views, with a strong focus on Clean Architecture, robust validation, and user experience.",
  },
  {
    title: "OpenAI Diet Generator",
    description:
      "Intelligent diet generator project with a Node.js backend integrated with a Next.js frontend. Uses an OpenAI agent with structured knowledge in the prompt to generate personalized meal plans and connect to an API for dynamic delivery of results.",
  },
  {
    title: "Twitter Clone",
    description:
      "Final project for EBAC's Python Full Stack Developer course: a social network with JWT authentication, profiles, tweets, followers, and a personalized feed. Backend with Django REST Framework, PostgreSQL, and Docker; frontend with React, TypeScript, and Tailwind CSS, deployed on Render and Vercel, with media on Cloudinary and CI/CD via GitHub Actions.",
  },
  {
    title: "Efood",
    description:
      "Final project for the Front-End module in EBAC's Python Full Stack Developer course. The app simulates an online ordering platform with full features including restaurant listings, individual pages, a shopping cart, and checkout flow with payment simulation, all connected to a backend via API.",
  },
  {
    title: "Eplay – Digital Game Store",
    description:
      "E-commerce for digital games built with React and complementary technologies such as Styled Components and React Router DOM. The application was designed for modularity, scalability, and usability, providing smooth navigation and a modern interface for end users.",
  },
  {
    title: "Contact Agenda with Cypress",
    description:
      "Practical introduction to Cypress, a tool for automated end-to-end (E2E) testing in web applications. The goal is to consolidate fundamentals of automated testing, exploring best practices, organization, and structuring effective tests to ensure software quality.",
  },
  {
    title: "Festival with Countdown",
    description:
      "Landing page built to sharpen front-end skills using HTML, CSS, JavaScript, and Parcel. The goal is to set up an efficient development environment, import required assets, and create a responsive page that works well on tablets and smartphones, including a countdown feature implemented with JavaScript and getTime.",
  },
  {
    title: "EBAC Tech Talks Landing Page",
    description:
      "Landing page built to sharpen front-end skills using HTML, CSS, JavaScript, and Parcel. The goal is to set up an efficient development environment, import required assets, and create a responsive page that works well on tablets and smartphones, including a countdown feature implemented with JavaScript and getTime.",
  },
  {
    title: "Disney+ Clone",
    description:
      "Faithful replica of the Disney Plus interface, built to improve front-end skills using HTML, CSS, Sass, Gulp, and JavaScript. The app features a functional home page with subscription plan details plus dedicated sections for movies and series.",
  },
  {
    title: "Dynamic GitHub Profile Viewer",
    description:
      "Interactive application for dynamic GitHub profile visualization using AJAX and the Fetch API. Designed to strengthen front-end and API skills, it provides a simple, intuitive interface that displays detailed GitHub profile data dynamically.",
  },
  {
    title: "Tic Tac Toe Game",
    description:
      "Tic-Tac-Toe implementation built with React and Vite to demonstrate core concepts of componentization, state management, and organization best practices in modern front-end applications.",
  },
  {
    title: "Vitorina Brasil Landing Page",
    description:
      "Landing page for a clothing store in Salvador, Bahia, using Bootstrap 5 for a responsive, styled layout with an accessible, visually appealing navigation menu. The design adapts to different screen sizes and meets client-specific requirements.",
  },
  {
    title: "Random Number Picker",
    description:
      "Number picker where users enter a maximum value and the system generates random numbers within that range. Uses Grunt for task automation and LESS for styling.",
  },
  {
    title: "Daily Todo List",
    description:
      "Simple todo list application built with jQuery. Users can add tasks to a list and mark them complete with a strikethrough effect, providing an intuitive, efficient user experience.",
  },
  {
    title: "Portfolio Presentation",
    description:
      "Presentation project built with Next.js and hosted on Vercel to showcase my skills, projects, and professional journey, offering a clear, modern view of my technical profile.",
  },
]

export const messagesEn: Messages = {
  meta: {
    title: "Caio Dias - Full Stack Developer",
    description:
      "Portfolio of Caio Dias - Full Stack Developer specializing in React, Next.js, Python, and Django. I build scalable digital solutions centered on user experience.",
  },
  header: {
    nav: {
      about: "About",
      education: "Education",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
    },
    resume: "Resume",
    resumePt: "Portuguese",
    resumeEn: "English",
    viewProjects: "View Projects",
    contact: "Get in Touch",
    closeMenu: "Close menu",
    openMenu: "Open menu",
  },
  hero: {
    role: "Full Stack Developer",
    bio: "I believe technology only matters when it solves real problems. Looking for smarter ways to optimize processes and simplify challenges led me to software development as a way to turn ideas into concrete solutions. Today I build systems, automations, and platforms that combine technology, business, and user experience—with a focus on useful, intuitive products built to evolve. What motivates me most is creating real impact and making life easier for people on the other side of the screen.",
    viewProjects: "View Projects",
    contact: "Get in Touch",
    whatsapp: "WhatsApp",
    availability: "Open to opportunities",
    goToAbout: "Go to About section",
    profileAlt: "Caio Dias - Profile Photo",
    githubAria: "My GitHub profile",
    linkedinAria: "My LinkedIn profile",
    emailAria: "Send me an email",
    whatsappAria: "Chat on WhatsApp",
    codePassion: "Building user-centered solutions",
  },
  about: {
    title: "About",
    titleHighlight: "Me",
    p1: "My professional journey began in Business Administration, where I earned my degree and gained valuable experience in business management and entrepreneurship. During that time, I developed a close understanding of how companies operate, the importance of process organization, and the strategic vision needed to run projects efficiently. Those experiences shaped my analytical mindset, problem-solving skills, and critical eye for improvement opportunities.",
    p2: "That curiosity to investigate and better understand business and innovation led me to explore a new field: technology. The turning point came in 2021, when I sought to understand how Bitcoin, blockchain, and smart contracts work. That path sparked my interest in programming and opened the door to a career transition that formally began in 2022.",
    p3: "Since completing the Python Full Stack Developer program in late 2025, I have been deepening my full stack development skills, combining my analytical background and business perspective with building efficient, scalable technology solutions. Along the way, I have grown in languages and frameworks such as Python, JavaScript, React, Next.js, TypeScript, Django, and Docker, always focusing on software engineering best practices and solid front-end and back-end integration. I aim to work on projects that value technical quality, collaboration, and real impact through technology.",
  },
  education: {
    title: "Academic",
    titleHighlight: "Background",
    subtitle: "My educational journey and the knowledge I have gained over the years",
    viewCertificate: "View diploma",
  },
  educationItems: [
    {
      type: "Professional Technical Course",
      institution: "EBAC - British School of Creative Arts and Technology",
      course: "Python Full Stack Developer",
      period: "2024 - 2025",
      status: "Completed",
      description:
        "Professional training for end-to-end software development, from programming fundamentals and computational logic to modern frameworks such as Django and React, plus databases, APIs, testing, and software engineering best practices.",
      certificate: "/certificates/ebac-fullstack-python.pdf",
    },
    {
      type: "Technical Course",
      institution: "Infinity School",
      course: "Programming and Metaverse",
      period: "2022 - 2023",
      status: "Completed",
      description:
        "Programming fundamentals, C# applied to Unity, Virtual Reality, server databases, and 3D environment creation.",
      certificate: "/certificates/infinity-programacao-metaverso.pdf",
    },
    {
      type: "Higher Education",
      institution: "Unijorge - Jorge Amado University",
      course: "Business Administration",
      period: "2014 - 2019",
      status: "Completed",
      description: "Focus on leadership, management, entrepreneurship, and marketing.",
      certificate: "/certificates/unijorge-administracao.pdf",
    },
  ],
  experience: {
    title: "Experience",
    achievements: "Key Achievements:",
    stack: "Stack",
  },
  experienceItems: [
    {
      period: "January 2026 – Present",
      role: "Full Stack Developer",
      company: "NewSun Energy Group",
      location: "Remote",
      description:
        "At NewSun Energy Group, I work full stack on the development and evolution of products for the renewable energy sector. That includes the corporate ERP, websites, and environments such as Energy Club, which support operations, customer relationships, and commercial flows. On the frontend, I improve React interfaces and API integration, using React Query for dynamic data. On the backend, I build and evolve REST APIs with Node.js, Fastify, and TypeScript, covering business rules, PostgreSQL persistence, and end-to-end delivery quality.",
      technologies: ["TypeScript", "React", "React Query", "Node.js", "Fastify", "Zod", "Prisma", "PostgreSQL", "Redis", "Docker", "PNPM"],
      achievements: [
        "On the frontend, API integration, UX/UI adjustments, dynamic data with React and React Query, and end-to-end flow checks together with the backend.",
        "On the backend, REST APIs with Node.js, Fastify, and TypeScript, including business rules, paginated endpoints, transactional actions, audit logs, and actionable notifications.",
        "Data modeling and migrations in PostgreSQL with Prisma, validation with Zod, and Redis for caching and performance.",
        "PNPM monorepo, with Docker and Docker Compose to standardize the development environment, plus Git, pull requests, code review, and CI/CD.",
        "Work tracked in Jira, including sprint planning, daily meetings, and technical refinements, along with debugging, integrations, and support for other developers on the team.",
      ],
    },
    {
      period: "July 2025 – December 2025",
      role: "Software Developer",
      company: "QuadCode",
      location: "Belo Horizonte, MG",
      description:
        "I developed a web application for managing live stream participants and generating real-time rankings. The project focused on improving engagement and participant reliability during broadcasts, ensuring smooth interactivity and instant data updates. I implemented dynamic forms and front-end validation, and integrated the system with Firebase Realtime Database for continuous synchronization between users and the server.",
      technologies: ["HTML", "CSS", "JavaScript", "Firebase"],
      achievements: [
        "Reduced participant default rate by 42% through automated registration validation and real-time confirmation.",
        "Increased effective live attendance by 67% with active access control and gamification via dynamic rankings.",
        "Instant synchronization of participation and performance data, eliminating delays and inconsistencies during streams.",
        "Noticeable improvement in user experience, reflected in higher engagement and positive feedback in interactive sessions.",
      ],
    },
    {
      period: "February 2025 – June 2025",
      role: "Junior Developer",
      company: "Filterfeed",
      location: "Vitória da Conquista, BA",
      description:
        "I optimized and automated internal processes in the Ploomes CRM, focusing on technical stability, operational efficiency, and commercial data quality. I developed and implemented Python solutions and correction scripts that directly impacted team productivity, integration performance, and reliability of strategic information. Beyond technical work, I joined weekly alignment sessions with stakeholders to understand business needs and translate them into robust, tailored solutions.",
      technologies: ["Python", "Postman", "API Rest", "Ploomes"],
      achievements: [
        "Reduced integration errors by 80% with automated correction scripts and improved validations.",
        "Created more than 15 Python automations, cutting report and strategic analysis delivery time by 70%.",
        "Increased sales funnel data updates by 30% through automation for monitoring and closing stalled opportunities.",
        "100% technical stability on deliveries after functional and exploratory testing across multiple integrated APIs.",
        "Higher productivity and operational flow through restructuring of automated CRM workflows.",
        "Stronger communication between technical and commercial teams, resulting in deliveries better aligned with business goals.",
      ],
    },
  ],
  projects: {
    title: "Featured",
    titleHighlight: "Projects",
    code: "Code",
    viewProject: "View Project",
    featuredLabel: "Featured",
    moreProjects: "More projects",
    codeOnly: "Code only",
    filters: {
      featured: "Featured",
      fullstack: "Full Stack",
      frontend: "Frontend",
      backend: "Backend",
    },
    empty: "No projects in this category.",
    viewCase: "View case",
    pagination: {
      prev: "Previous page",
      next: "Next page",
      page: "Page",
    },
  },
  caseStudy: {
    back: "Back to projects",
    challenge: "Challenge",
    solution: "Solution",
    results: "Results",
    stack: "Stack",
    code: "Code",
    live: "View project",
  },
  projectItems: mergeProjects(projectContent),
  skills: {
    title: "Technical",
    titleHighlight: "Skills",
    subtitle: "Technologies and tools I use to build efficient solutions",
    complementaryTitle: "Complementary",
    complementaryHighlight: "Skills",
    stats: {
      projects: "Completed Projects",
      experience: "Years of Experience",
      technologies: "Technologies",
      clients: "Satisfied Clients",
    },
  },
  skillCategories: [
    {
      title: "Frontend",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "HTML / CSS",
        "Tailwind CSS",
        "JavaScript",
        "Responsive Design",
        "Component Architecture",
      ],
    },
    {
      title: "Backend",
      skills: [
        "Node.js",
        "Python",
        "Firebase",
        "Docker",
        "PostgreSQL",
        "Django",
        "RESTful API",
        "Automation",
      ],
    },
    {
      title: "Tools",
      skills: ["Git & Github", "Postman", "Power BI", "VS Code", "Figma", "Notion", "Jira", "DBeaver"],
    },
  ],
  complementarySkills: [
    {
      title: "Methodologies",
      skills: ["Scrum", "Kanban", "Git Version Control", "Clean Code Best Practices", "Continuous Integration"],
    },
    {
      title: "Certifications",
      skills: ["Full Stack Dev.", "Metaverse", "Databases", "Ploomes", "Virtual Reality"],
    },
    {
      title: "Soft Skills",
      skills: [
        "Communication",
        "Problem Solving",
        "Teamwork",
        "Time Management",
        "Adaptability",
      ],
    },
  ],
  contact: {
    title: "Let's",
    titleHighlight: "Talk",
    subtitle: "If you would like to discuss a project or just say hi, I am always happy to chat.",
    infoTitle: "Contact Information",
    email: "Email",
    whatsapp: "WhatsApp",
    location: "Location",
    locationValue: "Salvador - BA",
    formSubject: "New message from the portfolio!",
    namePlaceholder: "Your name",
    emailPlaceholder: "Your email",
    phonePlaceholder: "Your phone (optional)",
    messagePlaceholder: "Your message",
    submit: "Send Message",
    sending: "Sending...",
    successTitle: "Message sent successfully!",
    successMessage: "Thank you for reaching out! I will get back to you soon.",
    errorTitle: "Could not send the message",
    errorMessage: "Please try again in a moment or reach me on WhatsApp.",
    emailTitle: "Send email",
    whatsappTitle: "Send WhatsApp message",
  },
  footer: {
    rights: "All rights reserved.",
    builtWith: "Built with Next.js and TypeScript",
    contact: "Contact",
  },
}
