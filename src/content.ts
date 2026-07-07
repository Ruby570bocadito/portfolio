// All portfolio content lives here. Bilingual ES/EN.
// Edit this file to update copy, projects, certs, etc.

export type Lang = "es" | "en";

export type Project = {
  name: string;
  stack: string;
  category: "c2" | "ai" | "tooling";
  url: string;
  star?: boolean;
  desc: { es: string; en: string };
};

export const social = {
  email: "rafagasi09@gmail.com",
  phone: "+34 622 27 40 70",
  github: "https://github.com/Ruby570bocadito",
  // TODO: reemplaza por tu slug real de LinkedIn (sin tildes)
  linkedin: "https://www.linkedin.com/in/rafael-galvez",
  // Sube tu CV a /public/cv.pdf (o cambia la ruta)
  cv: "./cv.pdf",
};

export const projects: Project[] = [
  {
    name: "X404X",
    stack: "Go · Vue 3 · Ollama",
    category: "c2",
    url: "https://github.com/Ruby570bocadito/X404X",
    star: true,
    desc: {
      es: "Plataforma de Red Team autónoma que cubre la cyber kill chain completa: 11 herramientas integradas, decisión asistida por IA (Ollama), persistencia a nivel de kernel e implants nativos de navegador (PhantomWeb), con dashboard en Vue 3.",
      en: "Autonomous red team platform covering the full cyber kill chain: 11 integrated tools, AI-powered decision making (Ollama), kernel-level persistence, browser-native implants (PhantomWeb), and a Vue 3 dashboard.",
    },
  },
  {
    name: "Pulse-C2",
    stack: "Go · Vue 3",
    category: "c2",
    url: "https://github.com/Ruby570bocadito/Pulse-C2",
    desc: {
      es: "Plataforma de Comando y Control multi-agente con comunicación cifrada, evasión de AV, túnel proxy SOCKS5 y telemetría en tiempo real.",
      en: "Multi-agent Command & Control platform with encrypted communication, AV evasion, SOCKS5 proxy tunneling, and real-time telemetry.",
    },
  },
  {
    name: "Vault-Kernel",
    stack: "C · Linux LKM",
    category: "c2",
    url: "https://github.com/Ruby570bocadito/Vault-Kernel",
    desc: {
      es: "Motor de rootkit a nivel de kernel: hooking de syscalls, ocultación de procesos/ficheros/puertos, keylogger de kernel y auto-ocultación del módulo. Investigación educativa sobre persistencia.",
      en: "Kernel-level rootkit engine: syscall hooking, process/file/port hiding, kernel keylogger, and self-concealment. Educational research on persistence.",
    },
  },
  {
    name: "HiveMind",
    stack: "Rust",
    category: "c2",
    url: "https://github.com/Ruby570bocadito/HiveMind",
    desc: {
      es: "Framework de post-explotación en Rust: implants ligeros con beaconing cifrado, entrega modular de payloads y persistencia multiplataforma.",
      en: "Rust post-exploitation framework: lightweight implants with encrypted beaconing, modular payload delivery, and cross-platform persistence.",
    },
  },
  {
    name: "T-100AI",
    stack: "Python · Local LLM",
    category: "ai",
    url: "https://github.com/Ruby570bocadito/T-100AI",
    desc: {
      es: "Terminal ofensiva con IA: LLM local + ejecución en sandbox + skills de pentesting. 100% air-gapped, sin depender de la nube.",
      en: "AI-powered offensive terminal: local LLM + sandboxed execution + pentesting skills. 100% air-gapped, no cloud dependency.",
    },
  },
  {
    name: "AIHACK",
    stack: "Python · Ollama · LM Studio",
    category: "ai",
    url: "https://github.com/Ruby570bocadito/AIHACK",
    desc: {
      es: "Suite de pentesting autónoma por CLI con LLMs locales: 17 modos de operación, base de datos de CVEs, APIs OSINT y auditorías de compliance.",
      en: "Autonomous pentesting CLI suite with local LLMs: 17 operation modes, CVE database, OSINT APIs, and compliance audits.",
    },
  },
  {
    name: "Wormy-ML",
    stack: "Python · Machine Learning",
    category: "ai",
    url: "https://github.com/Ruby570bocadito/Wormy-ML-Network-Worm",
    star: true,
    desc: {
      es: "Gusano de red polimórfico impulsado por ML: payload auto-replicante con cifrado dinámico, propagación multi-vector y evasión adversarial. Proyecto de investigación educativa.",
      en: "ML-powered polymorphic network worm: self-replicating payload with dynamic encryption, multi-vector propagation, and adversarial evasion. Educational research project.",
    },
  },
  {
    name: "Apex-Automation",
    stack: "Python · ML",
    category: "ai",
    url: "https://github.com/Ruby570bocadito/Apex-Automation",
    desc: {
      es: "Automatización de pentesting asistida por IA: descubrimiento y explotación de vulnerabilidades dirigido por ML con toma de decisiones inteligente.",
      en: "AI-assisted penetration testing automation: ML-driven vulnerability discovery and exploitation with intelligent decision making.",
    },
  },
  {
    name: "Rise-Privilege",
    stack: "Go",
    category: "tooling",
    url: "https://github.com/Ruby570bocadito/Rise-Privilege",
    desc: {
      es: "Suite de escalada de privilegios en Linux: 10+ scanners, base de datos offline de 60+ técnicas GTFOBins, auto-root vía SUID/sudo/cron/Docker. Cero dependencias.",
      en: "Automated Linux privilege escalation suite: 10+ scanners, offline database of 60+ GTFOBins techniques, auto-root via SUID/sudo/cron/Docker. Zero dependencies.",
    },
  },
  {
    name: "Titan-Operations",
    stack: "Python · Go · NetworkX",
    category: "tooling",
    url: "https://github.com/Ruby570bocadito/Titan-Operations",
    desc: {
      es: "ARGOS v2.0 — Plataforma de operaciones ofensivas semi-autónoma: emulación de APT, motor de decisión híbrido (A* + CBR + reglas), Human-in-the-Loop, agentes en Go e integración con Metasploit.",
      en: "ARGOS v2.0 — Semi-autonomous offensive operations platform: APT emulation, hybrid decision engine (A* + CBR + rules), human-in-the-loop, Go agents, and Metasploit integration.",
    },
  },
  {
    name: "Horizon-Intel",
    stack: "Python · OSINT",
    category: "tooling",
    url: "https://github.com/Ruby570bocadito/Horizon-Intel",
    desc: {
      es: "Plataforma OSINT empresarial: recolección automatizada desde fuentes públicas con visualización avanzada, correlación y generación de informes.",
      en: "Enterprise OSINT platform: automated collection from public sources with advanced visualization, correlation, and reporting.",
    },
  },
  {
    name: "BlueForge-Suite",
    stack: "Python",
    category: "tooling",
    url: "https://github.com/Ruby570bocadito/BlueForge-Suite",
    desc: {
      es: "Framework de auditoría de seguridad Bluetooth estilo Metasploit: 15+ módulos de ataque, 3 scanners, 3 exploits, 13+ checks de vulnerabilidades, consola REPL y dashboard web.",
      en: "Metasploit-style Bluetooth security auditing framework: 15+ attack modules, 3 scanners, 3 exploits, 13+ vuln checks, REPL console, and web dashboard.",
    },
  },
];

export const certs = [
  { name: "eJPTv2", org: "INE Security", featured: true },
  { name: "Ethical Hacker", org: "Cisco NetAcad" },
  { name: "Python Essentials 1", org: "Cisco NetAcad" },
  { name: "Networking Basics", org: "Cisco NetAcad" },
  { name: "Intro to Cybersecurity", org: "Cisco NetAcad" },
  { name: "Linux Unhatched", org: "Cisco NetAcad" },
  { name: "Introducción al Hacking", org: "Hack4u · S4vitar" },
  { name: "Arch Linux desde Cero", org: "Hack4u · S4vitar" },
  { name: "ILT-CoC Training", org: "Palo Alto Networks" },
  { name: "Desarrollo con IA 0→Producción", org: "Brais Moure" },
  { name: "Ciberseguridad y Hacking Ético", org: "Mario & BIG School" },
  { name: "17+ cursos técnicos", org: "Udemy" },
];

// i18n strings for the static UI
export const t: Record<Lang, Record<string, string>> = {
  es: {
    "nav.about": "sobre-mí",
    "nav.projects": "proyectos",
    "nav.certs": "certificaciones",
    "nav.contact": "contacto",
    "hero.role": "Junior Red Team Engineer & Offensive Security Tool Developer",
    "hero.tagline": "Transformo lógica de programación en herramientas ofensivas y soluciones de ciberseguridad.",
    "hero.cta.projects": "ver proyectos",
    "hero.cta.cv": "descargar CV",
    "hero.scroll": "scroll",
    "about.title": "// sobre mí",
    "about.body":
      "Mi camino en la tecnología empezó programando físicas y lógica compleja para videojuegos con C# y Unity en EVAD. Esa obsesión por entender cómo funcionan las cosas por debajo me llevó a la ciberseguridad ofensiva. Hoy curso SMR, estoy certificado como eJPTv2 y he publicado más de 17 herramientas propias: frameworks C2, rootkits de kernel e integraciones de IA. Creo que el mejor operador de Red Team es el que entiende el código a nivel profundo — por eso construyo las mías.",
    "about.location": "Málaga, España",
    "stats.tools": "herramientas open source",
    "stats.cert": "certificación pro",
    "stats.langs": "lenguajes de desarrollo",
    "stats.years": "años programando",
    "skills.title": "// arsenal técnico",
    "projects.title": "// proyectos destacados",
    "projects.cat.c2": "Infraestructura C2 & Evasión",
    "projects.cat.ai": "IA aplicada a Ciberseguridad",
    "projects.cat.tooling": "Tooling Ofensivo Automatizado",
    "projects.view": "ver en GitHub",
    "projects.all": "ver todos los repos",
    "certs.title": "// certificaciones & logros",
    "awards.title": "premios & reconocimientos",
    "award.1": "Finalista Nacional — ASTI Robotics Challenge 2026",
    "award.2": "Participante Destacado (Fase 2) — Desafío Hilda Ericsson · Cátedra Lamarr (UMA & Ericsson, 2024)",
    "edu.title": "formación",
    "edu.1.title": "Grado Medio en Sistemas Microinformáticos y Redes (SMR)",
    "edu.1.org": "DIGITECH FP · Málaga",
    "edu.1.date": "oct. 2025 – Actualidad",
    "edu.2.title": "Programa Avanzado de Desarrollo de Videojuegos (C# & Unity)",
    "edu.2.org": "EVAD · Málaga",
    "edu.2.date": "2020 – 2024",
    "contact.title": "// contacto",
    "contact.body": "¿Buscas un junior de Red Team con herramientas propias? Hablemos.",
    "contact.email": "enviar email",
    "footer.built": "Diseñado y construido por Rafael Gálvez",
  },
  en: {
    "nav.about": "about",
    "nav.projects": "projects",
    "nav.certs": "certifications",
    "nav.contact": "contact",
    "hero.role": "Junior Red Team Engineer & Offensive Security Tool Developer",
    "hero.tagline": "I turn programming logic into offensive tools and cybersecurity solutions.",
    "hero.cta.projects": "view projects",
    "hero.cta.cv": "download CV",
    "hero.scroll": "scroll",
    "about.title": "// about me",
    "about.body":
      "My journey in tech began by coding physics and complex logic for video games with C# and Unity at EVAD. That obsession with understanding how things work under the hood led me into offensive security. Today I'm studying IT Systems (SMR), I'm eJPTv2 certified, and I've shipped 17+ of my own tools: C2 frameworks, kernel rootkits, and AI integrations. I believe the best red teamer is the one who understands code at a deep level — so I build my own.",
    "about.location": "Málaga, Spain",
    "stats.tools": "open source tools",
    "stats.cert": "pro certification",
    "stats.langs": "development languages",
    "stats.years": "years coding",
    "skills.title": "// technical arsenal",
    "projects.title": "// featured projects",
    "projects.cat.c2": "C2 Infrastructure & Evasion",
    "projects.cat.ai": "AI Applied to Cybersecurity",
    "projects.cat.tooling": "Automated Offensive Tooling",
    "projects.view": "view on GitHub",
    "projects.all": "view all repos",
    "certs.title": "// certifications & achievements",
    "awards.title": "awards & recognition",
    "award.1": "National Finalist — ASTI Robotics Challenge 2026",
    "award.2": "Outstanding Participant (Phase 2) — Hilda Ericsson Challenge · Lamarr Chair (UMA & Ericsson, 2024)",
    "edu.title": "education",
    "edu.1.title": "Vocational Training in Microcomputer Systems and Networks (SMR)",
    "edu.1.org": "DIGITECH FP · Málaga",
    "edu.1.date": "Oct 2025 – Present",
    "edu.2.title": "Advanced Video Game Development Program (C# & Unity)",
    "edu.2.org": "EVAD · Málaga",
    "edu.2.date": "2020 – 2024",
    "contact.title": "// contact",
    "contact.body": "Looking for a junior red teamer who builds his own tools? Let's talk.",
    "contact.email": "send email",
    "footer.built": "Designed and built by Rafael Gálvez",
  },
};

export const skills: { group: { es: string; en: string }; items: string[] }[] = [
  {
    group: { es: "Seguridad Ofensiva", en: "Offensive Security" },
    items: ["Pentesting (eJPTv2)", "PrivEsc Linux/Windows", "AV/EDR Evasion", "Post-Exploitation", "Web Hacking", "WiFi/Bluetooth", "OSINT"],
  },
  {
    group: { es: "Desarrollo", en: "Development" },
    items: ["Go", "Python", "C", "C#", "Rust", "Bash"],
  },
  {
    group: { es: "Herramientas", en: "Tools" },
    items: ["Metasploit", "Nmap", "Burp Suite", "Wireshark", "Hydra", "Hashcat", "Aircrack-ng", "BloodHound", "Impacket", "CrackMapExec"],
  },
  {
    group: { es: "Sistemas & Redes", en: "Systems & Networks" },
    items: ["Linux Kernel (LKM)", "Syscall Hooking", "Hardening", "Docker", "VMware", "Git"],
  },
  {
    group: { es: "IA aplicada", en: "Applied AI" },
    items: ["Ollama / LLMs locales", "LM Studio", "ML adversarial", "Agentes autónomos", "Automatización"],
  },
];
