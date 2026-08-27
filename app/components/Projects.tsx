"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { profile, type Project } from "../data/profile";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className={`relative bg-gradient-to-br ${project.color} bg-gray-800/40 border border-gray-700/60 ${project.border} rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 group`}
    >
      {project.featured && (
        <span className="absolute top-4 right-4 text-xs px-2 py-0.5 bg-violet-500/20 text-violet-300 border border-violet-500/30 rounded-full">
          Destacado
        </span>
      )}

      <div className="flex items-start justify-between">
        <div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors text-2xl leading-none">
          {project.icon}
        </div>
      </div>

      <div>
        <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-violet-300 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
      </div>

      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tags.map((t) => (
          <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-gray-400 border border-white/10">
            {t}
          </span>
        ))}
      </div>

      <div className="flex gap-4 pt-2 border-t border-white/5">
        <motion.a
          href={project.github}
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.42-1.305.763-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
          </svg>
          Código
        </motion.a>
        <motion.a
          href={project.live}
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-violet-400 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          Demo en vivo
        </motion.a>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-28 px-4 bg-gray-900/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-violet-400 font-mono text-sm tracking-widest uppercase mb-2">02. Proyectos</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Lo que he construido
            <span className="text-violet-400">.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {profile.projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
