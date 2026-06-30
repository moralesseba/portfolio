# 🚀 Portafolio — Sebastián Morales

Portafolio personal desarrollado con **Next.js 16**, **Tailwind CSS** y **Framer Motion**. Diseño oscuro moderno con animaciones fluidas, secciones interactivas y datos reales.

---

## ✨ Características

- **Hero animado** con efecto de typing rotativo entre roles
- **Navbar inteligente** con pill indicator que sigue la sección activa al hacer scroll
- **Logo `<SM />` animado** con letras que reaccionan al hover y punto pulsante
- **Barras de habilidades** que se animan al entrar en el viewport
- **Cards de proyectos** con hover lift y gradientes únicos por proyecto
- **Formulario de contacto** con estados de foco animados y confirmación de envío
- **Animaciones de entrada** en todas las secciones al hacer scroll (Framer Motion)
- **Diseño 100% responsivo** para mobile, tablet y desktop

---

## 🛠️ Tecnologías

| Categoría | Tecnología |
|-----------|------------|
| Framework | Next.js 16 (App Router) |
| Estilos | Tailwind CSS v4 |
| Animaciones | Framer Motion |
| Lenguaje | TypeScript |
| Font | Geist (Google Fonts) |
| Deploy | Vercel *(próximamente)* |

---

## 📁 Estructura del proyecto

```
portfolio/
├── app/
│   ├── components/
│   │   ├── Navbar.tsx      # Navegación fija con pill indicator animado
│   │   ├── Hero.tsx        # Sección principal con typing effect
│   │   ├── About.tsx       # Sobre mí con barras de habilidades
│   │   ├── Projects.tsx    # Grid de proyectos con cards interactivas
│   │   └── Contact.tsx     # Formulario de contacto con links sociales
│   ├── globals.css         # Estilos globales
│   ├── layout.tsx          # Layout principal con metadata
│   └── page.tsx            # Página principal
├── public/                 # Archivos estáticos
├── .gitignore
├── package.json
└── tsconfig.json
```

---

## 🚀 Instalación y uso

### Prerrequisitos

- Node.js >= 18
- npm >= 9

### Pasos

```bash
# 1. Clonar el repositorio
git clone https://github.com/moralesseba/portfolio.git
cd portfolio

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Scripts disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build de producción
npm run start    # Servidor de producción
npm run lint     # Linter
```

---

## 📌 Secciones

### 🏠 Hero
Presentación con nombre, título animado (efecto typing), badge de disponibilidad y botones de acción. Fondo con orbes animados y grid pattern sutil.

### 👤 Sobre mí
Descripción personal, barras de progreso animadas por tecnología y badges de herramientas adicionales.

### 💼 Proyectos

| Proyecto | Descripción |
|----------|-------------|
| **PymePro FullStack** | Plataforma de e-commerce para PYMEs chilenas con React, Express y Supabase |
| **Amber** | Asistente IA personal 100% offline con Ollama, memoria persistente y voz real |
| **Amy v4.0** | Asistente personal con Groq API, control de Spotify, correo y comandos del sistema |

### 📬 Contacto
Formulario de contacto con validación, links a GitHub, LinkedIn y email.

---

## 🔗 Links

- **GitHub:** [github.com/moralesseba](https://github.com/moralesseba)
- **LinkedIn:** [linkedin.com/in/sebastian-ignacio-morales-calderon-435846341](https://www.linkedin.com/in/sebastian-ignacio-morales-calderon-435846341/)
- **Email:** moralessebastyan@gmail.com

---

## 📄 Licencia

MIT © 2026 — Sebastián Morales
