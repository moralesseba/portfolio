"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Inicio", href: "#hero" },
  { label: "Sobre mí", href: "#about" },
  { label: "Proyectos", href: "#projects" },
  { label: "Contacto", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = ["hero", "about", "projects", "contact"];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-950/90 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.a
          href="#hero"
          className="font-bold text-xl font-mono flex items-center gap-0.5 select-none"
          whileHover="hover"
          initial="rest"
          animate="rest"
        >
          <motion.span
            variants={{ rest: { color: "#a78bfa" }, hover: { color: "#ffffff" } }}
            transition={{ duration: 0.2 }}
          >
            {"<"}
          </motion.span>
          {"SM".split("").map((char, i) => (
            <motion.span
              key={i}
              variants={{
                rest: { y: 0, color: "#e2e8f0" },
                hover: { y: -3, color: "#a78bfa" },
              }}
              transition={{ duration: 0.2, delay: i * 0.05 }}
            >
              {char}
            </motion.span>
          ))}
          <motion.span
            variants={{ rest: { color: "#a78bfa", opacity: 1 }, hover: { color: "#818cf8", opacity: 1 } }}
            transition={{ duration: 0.2 }}
            className="mx-1"
          >
            /
          </motion.span>
          <motion.span
            variants={{ rest: { color: "#a78bfa" }, hover: { color: "#ffffff" } }}
            transition={{ duration: 0.2 }}
          >
            {">"}
          </motion.span>
          {/* glow dot */}
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="ml-1 w-1.5 h-1.5 rounded-full bg-violet-400 inline-block"
          />
        </motion.a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => {
            const isActive = active === l.href.replace("#", "");
            return (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`relative px-4 py-2 text-sm rounded-lg transition-colors ${
                    isActive ? "text-white" : "text-gray-400 hover:text-gray-200"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-white/10 rounded-lg"
                    />
                  )}
                  <span className="relative">{l.label}</span>
                </a>
              </li>
            );
          })}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-gray-300 hover:text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          <motion.svg
            animate={{ rotate: open ? 90 : 0 }}
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </motion.svg>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden px-6 pb-4 flex flex-col gap-1 bg-gray-950/95 backdrop-blur-md"
          >
            {links.map((l, i) => (
              <motion.li
                key={l.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 px-3 text-gray-300 hover:text-violet-400 hover:bg-white/5 rounded-lg transition-all"
                >
                  {l.label}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
