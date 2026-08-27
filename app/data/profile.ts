export interface Skill {
  name: string;
  level: number;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
  live: string;
  featured: boolean;
  color: string;
  border: string;
  icon: string;
}

export const profile = {
  name: "Sebastián Morales",
  email: "moralessebastyan@gmail.com",
  githubUrl: "https://github.com/moralesseba",
  linkedinUrl: "https://www.linkedin.com/in/sebastian-ignacio-morales-calderon-435846341/",

  meta: {
    title: "Sebastián Morales — Full Stack Developer",
    description:
      "Desarrollador Full Stack chileno especializado en React, Python, Django e inteligencia artificial.",
  },

  hero: {
    badge: "Disponible para proyectos",
    roles: ["Full Stack Developer", "Creador de Sistemas", "Python & AI Builder", "Problem Solver"],
    bio: "Desarrollador Full Stack chileno. He construido sistemas de gestión inteligentes, plataformas de préstamos y asistentes IA con React, Python y LLMs.",
  },

  about: {
    paragraphs: [
      "Soy Sebastián Morales, desarrollador Full Stack chileno especializado en crear sistemas reales y funcionales. Trabajo con React, Python y bases de datos relacionales, con foco en arquitectura limpia y experiencia de usuario.",
      "He diseñado y desarrollado NEXO, un sistema de gestión integral para comercio minorista con control de inventario, ventas y análisis en tiempo real. También creé NOTE, una plataforma de gestión de préstamos completamente funcional, y dos asistentes con IA — uno 100% offline con Ollama y otro en la nube con Groq.",
      "Me especializo en traducir requisitos complejos en código limpio, escalable y mantenible. Estoy en tercer año de Ingeniería en Sistemas en INACAP.",
    ],
    badges: ["JWT", "REST APIs", "SQLite", "Git", "Selenium", "Spotipy", "Web Speech API", "Mercado Pago"],
    skills: [
      { name: "Python / Django", level: 88 },
      { name: "React / Vite", level: 85 },
      { name: "Node.js / Express", level: 82 },
      { name: "PostgreSQL / Supabase", level: 80 },
      { name: "IA / LLMs (Groq, Ollama)", level: 78 },
      { name: "Tailwind CSS", level: 90 },
    ] as Skill[],
  },

  projects: [
    {
      title: "NEXO — Sistema de Gestión",
      description:
        "Sistema de gestión integral para comercio minorista. Incluye control de inventario, registro de ventas y compras, gestión de proveedores, dashboard analítico y reportes automatizados. Diseñado y desarrollado desde cero.",
      tags: ["React 19", "Vite", "Express 5", "PostgreSQL", "Supabase", "JWT", "Tailwind CSS"],
      github: "https://github.com/moralesseba",
      live: "#",
      featured: true,
      color: "from-violet-500/10 to-indigo-500/5",
      border: "hover:border-violet-500/50",
      icon: "🛍️",
    },
    {
      title: "NOTE — Plataforma de Préstamos",
      description:
        "Aplicación web completa para gestión de préstamos. Dashboard intuitivo con cálculo automático de intereses, cronogramas de vencimiento, recordatorios visuales y gestión de estados. Completamente funcional y desplegada.",
      tags: ["React 18", "Vite", "Firebase", "Firestore", "Tailwind CSS", "Google Auth"],
      github: "https://github.com/moralesseba",
      live: "#",
      featured: true,
      color: "from-blue-500/10 to-cyan-500/5",
      border: "hover:border-blue-500/50",
      icon: "💰",
    },
    {
      title: "Amber — Asistente IA Local",
      description:
        "Asistente personal 100% offline con IA local (Ollama + Llama 3.2), memoria episódica y semántica por usuario, voz real TTS/STT, multiusuario con roles y seguridad de nivel empresarial.",
      tags: ["Python", "Django", "Ollama", "Llama 3.2", "pyttsx3", "SQLite"],
      github: "https://github.com/moralesseba",
      live: "#",
      featured: false,
      color: "from-amber-500/10 to-orange-500/5",
      border: "hover:border-amber-500/50",
      icon: "🧠",
    },
    {
      title: "Amy v4.0 — Asistente Personal",
      description:
        "Asistente inteligente con IA conversacional (Groq/Llama 3.3 70B), memoria a largo plazo, control de Spotify, envío de correos, búsqueda en Wikipedia, comandos de sistema y voz bidireccional.",
      tags: ["Python", "Django", "Groq API", "Spotipy", "Selenium", "SQLite", "Web Speech API"],
      github: "https://github.com/moralesseba",
      live: "#",
      featured: false,
      color: "from-pink-500/10 to-rose-500/5",
      border: "hover:border-pink-500/50",
      icon: "✨",
    },
  ] as Project[],

  contact: {
    intro:
      "¿Tienes un proyecto en mente, una oportunidad laboral o simplemente quieres charlar sobre tecnología? Escríbeme y te respondo lo antes posible.",
  },
};
