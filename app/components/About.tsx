"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const skills = [
  { name: "Python / Django", level: 88 },
  { name: "React / Vite", level: 85 },
  { name: "Node.js / Express", level: 82 },
  { name: "PostgreSQL / Supabase", level: 80 },
  { name: "IA / LLMs (Groq, Ollama)", level: 78 },
  { name: "Tailwind CSS", level: 90 },
];

const badges = ["JWT", "REST APIs", "SQLite", "Git", "Selenium", "Spotipy", "Web Speech API", "Mercado Pago"];

function SkillBar({ name, level, index }: { name: string; level: number; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex justify-between text-sm">
        <span className="text-gray-300">{name}</span>
        <span className="text-violet-400 font-mono">{level}%</span>
      </div>
      <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-violet-600 to-indigo-500 rounded-full"
        />
      </div>
    </div>
  );
}

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-28 px-4">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="text-violet-400 font-mono text-sm tracking-widest uppercase mb-2">01. Sobre mí</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            Quién soy
            <span className="text-violet-400">.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4 text-gray-400 leading-relaxed"
          >
            <p>
              Soy Sebastián Morales, desarrollador Full Stack chileno con foco en
              construir productos reales. Trabajo con React y Python en el día a
              día, y me apasiona la intersección entre el desarrollo web y la
              inteligencia artificial.
            </p>
            <p>
              He desarrollado una plataforma de e-commerce completa para PYMEs
              chilenas con integración a Mercado Pago, y dos asistentes
              personales con IA — uno 100% offline con Ollama y otro conectado
              a Groq con control de Spotify, correo y comandos del sistema.
            </p>
            <p>
              Me gusta resolver problemas concretos con código limpio y
              escalable. Siempre aprendiendo, siempre construyendo.
            </p>

            <div className="flex flex-wrap gap-2 pt-4">
              {badges.map((b) => (
                <motion.span
                  key={b}
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(139,92,246,0.2)" }}
                  className="px-3 py-1 text-xs bg-gray-800/80 text-gray-300 border border-gray-700 rounded-full cursor-default transition-colors"
                >
                  {b}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Skill bars */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5"
          >
            <h3 className="text-white font-semibold mb-6">Nivel de habilidades</h3>
            {skills.map((s, i) => (
              <SkillBar key={s.name} name={s.name} level={s.level} index={i} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
