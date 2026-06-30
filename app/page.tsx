import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <footer className="text-center text-gray-700 text-xs py-8 border-t border-gray-800/60">
        <span className="font-mono">© 2026</span> — Diseñado y construido con Next.js & Tailwind CSS
      </footer>
    </main>
  );
}
