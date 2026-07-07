import "./style.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { initScene } from "./scene";
import { t, projects, certs, skills, social, type Lang, type Project } from "./content";

gsap.registerPlugin(ScrollTrigger);

let lang: Lang = (localStorage.getItem("lang") as Lang) || "es";
const app = document.getElementById("app") as HTMLDivElement;

/* ---------------- PRELOADER (minimal, elegant) ---------------- */
function preloader(): Promise<void> {
  return new Promise((resolve) => {
    const count = document.getElementById("preCount")!;
    const fill = document.getElementById("preFill")!;
    const state = { p: 0 };
    gsap.to(state, {
      p: 100,
      duration: 1.8,
      ease: "power2.inOut",
      onUpdate: () => {
        count.textContent = String(Math.round(state.p)).padStart(2, "0");
        fill.style.transform = `scaleX(${state.p / 100})`;
      },
      onComplete: () => {
        const tl = gsap.timeline({ onComplete: resolve });
        tl.to("#preloader .pre-brand, #preloader .pre-line", { opacity: 0, y: -20, duration: 0.5, ease: "power2.in" });
        tl.to("#preloader", { yPercent: -100, duration: 0.7, ease: "power4.inOut" }, "-=0.1");
        tl.set("#preloader", { display: "none" });
      },
    });
  });
}

/* ---------------- MARKUP ---------------- */
function projectCard(p: Project, i: number): string {
  return `
    <a class="card magnetic" data-cursor href="${p.url}" target="_blank" rel="noopener">
      <div class="card-top">
        <span class="card-num">${String(i + 1).padStart(2, "0")}</span>
        <span class="card-arrow">↗</span>
      </div>
      <h4 class="card-name">${p.name}${p.star ? ' <i class="dot"></i>' : ""}</h4>
      <span class="card-stack">${p.stack}</span>
      <p class="card-desc">${p.desc[lang]}</p>
    </a>`;
}
function projGroup(cat: Project["category"]): string {
  const list = projects.filter((p) => p.category === cat);
  return `
    <div class="proj-block">
      <h3 class="proj-cat reveal">${t[lang][`projects.cat.${cat}`]}</h3>
      <div class="cards">${list.map((p, i) => projectCard(p, i)).join("")}</div>
    </div>`;
}

function render() {
  const tr = t[lang];
  document.documentElement.lang = lang;
  const clean = (s: string) => s.replace("// ", "");

  app.innerHTML = `
  <header class="nav">
    <a href="#top" class="brand magnetic" data-cursor><span class="mark">RG</span> Rafael Gálvez</a>
    <nav class="nav-links">
      <a href="#about" data-cursor>${tr["nav.about"]}</a>
      <a href="#projects" data-cursor>${tr["nav.projects"]}</a>
      <a href="#certs" data-cursor>${tr["nav.certs"]}</a>
      <a href="#contact" data-cursor>${tr["nav.contact"]}</a>
      <button id="lang" class="lang-toggle" data-cursor>${lang === "es" ? "EN" : "ES"}</button>
    </nav>
  </header>

  <section class="hero" id="top">
    <div class="hero-inner">
      <p class="kicker mask"><span>${lang === "es" ? "Ingeniería de Seguridad Ofensiva" : "Offensive Security Engineering"}</span></p>
      <h1 class="hero-name">
        <span class="mask"><span>Rafael</span></span>
        <span class="mask"><span class="accent">Gálvez</span></span>
      </h1>
      <p class="hero-role mask"><span>${tr["hero.role"]}</span></p>
      <p class="hero-tag reveal">${tr["hero.tagline"]}</p>
      <div class="hero-meta reveal">
        <span class="chip"><i class="live"></i> ${lang === "es" ? "Disponible — prácticas y empleo" : "Available — internships & roles"}</span>
        <span class="chip chip-accent">eJPTv2</span>
        <span class="chip">${tr["about.location"]}</span>
      </div>
      <div class="hero-cta reveal">
        <a href="#projects" class="btn btn-primary magnetic" data-cursor>${tr["hero.cta.projects"]}</a>
        <a href="${social.cv}" class="btn magnetic" data-cursor download>${tr["hero.cta.cv"]}</a>
      </div>
    </div>
    <div class="scroll-hint reveal"><span class="scroll-line"></span>${tr["hero.scroll"]}</div>
  </section>

  <section class="section" id="about">
    <div class="sec-head"><span class="sec-idx">01</span><h2 class="mask"><span>${clean(tr["about.title"])}</span></h2></div>
    <div class="about-grid">
      <p class="about-body reveal">${tr["about.body"]}</p>
      <div class="stats">
        <div class="stat reveal"><b data-count="17">0</b><span>${tr["stats.tools"]}+</span></div>
        <div class="stat reveal"><b data-count="1">0</b><span>${tr["stats.cert"]}</span></div>
        <div class="stat reveal"><b data-count="6">0</b><span>${tr["stats.langs"]}</span></div>
        <div class="stat reveal"><b data-count="5">0</b><span>${tr["stats.years"]}+</span></div>
      </div>
    </div>
    <h3 class="sub-title reveal">${clean(tr["skills.title"])}</h3>
    <div class="skills">
      ${skills.map((s) => `<div class="skill-col reveal"><h4>${s.group[lang]}</h4><ul>${s.items.map((i) => `<li>${i}</li>`).join("")}</ul></div>`).join("")}
    </div>
  </section>

  <section class="section" id="projects">
    <div class="sec-head"><span class="sec-idx">02</span><h2 class="mask"><span>${clean(tr["projects.title"])}</span></h2></div>
    ${projGroup("c2")}
    ${projGroup("ai")}
    ${projGroup("tooling")}
    <a class="btn btn-line magnetic reveal" data-cursor href="${social.github}" target="_blank" rel="noopener">${tr["projects.all"]} →</a>
  </section>

  <section class="section" id="certs">
    <div class="sec-head"><span class="sec-idx">03</span><h2 class="mask"><span>${clean(tr["certs.title"])}</span></h2></div>
    <div class="cert-grid">
      ${certs.map((c) => `<div class="cert ${c.featured ? "cert-featured" : ""} reveal" data-cursor><b>${c.name}</b><span>${c.org}</span></div>`).join("")}
    </div>
    <h3 class="sub-title reveal">${tr["awards.title"]}</h3>
    <div class="awards">
      <div class="award reveal"><span class="award-yr">2026</span><p>${tr["award.1"]}</p></div>
      <div class="award reveal"><span class="award-yr">2024</span><p>${tr["award.2"]}</p></div>
    </div>
    <h3 class="sub-title reveal">${tr["edu.title"]}</h3>
    <div class="edu">
      <div class="edu-item reveal"><span class="edu-date">${tr["edu.1.date"]}</span><div><b>${tr["edu.1.title"]}</b><span>${tr["edu.1.org"]}</span></div></div>
      <div class="edu-item reveal"><span class="edu-date">${tr["edu.2.date"]}</span><div><b>${tr["edu.2.title"]}</b><span>${tr["edu.2.org"]}</span></div></div>
    </div>
  </section>

  <section class="section contact" id="contact">
    <div class="sec-head center"><span class="sec-idx">04</span><h2 class="mask"><span>${clean(tr["contact.title"])}</span></h2></div>
    <p class="contact-lead reveal">${tr["contact.body"]}</p>
    <a class="mail-link magnetic reveal" data-cursor href="mailto:${social.email}">${social.email}</a>
    <div class="socials reveal">
      <a href="${social.github}" target="_blank" rel="noopener" data-cursor>GitHub</a>
      <a href="${social.linkedin}" target="_blank" rel="noopener" data-cursor>LinkedIn</a>
      <a href="tel:${social.phone.replace(/\s/g, "")}" data-cursor>${social.phone}</a>
    </div>
  </section>

  <footer class="footer"><span>${tr["footer.built"]}</span><span>© ${new Date().getFullYear()}</span></footer>`;

  bindLang();
  initMagnetic();
  runAnimations();
}

/* ---------------- ANIMATIONS ---------------- */
function runAnimations() {
  // Masked line reveals (headings, hero)
  gsap.utils.toArray<HTMLElement>(".mask > span").forEach((inner) => {
    gsap.fromTo(
      inner,
      { yPercent: 115 },
      { yPercent: 0, duration: 1.05, ease: "power4.out", scrollTrigger: { trigger: inner.closest(".mask") as HTMLElement, start: "top 92%" } }
    );
  });
  // Soft fade/slide reveals
  gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {
    gsap.fromTo(el, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 92%" } });
  });
  // Card stagger
  gsap.utils.toArray<HTMLElement>(".proj-block").forEach((block) => {
    gsap.fromTo(block.querySelectorAll(".card"), { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", stagger: 0.08, scrollTrigger: { trigger: block, start: "top 84%" } });
  });
  // Count-ups
  gsap.utils.toArray<HTMLElement>(".stat b").forEach((el) => {
    gsap.to(el, { textContent: Number(el.dataset.count || "0"), duration: 1.6, ease: "power1.out", snap: { textContent: 1 }, scrollTrigger: { trigger: el, start: "top 92%" } });
  });
  ScrollTrigger.refresh();
}

function bindLang() {
  document.getElementById("lang")?.addEventListener("click", () => {
    lang = lang === "es" ? "en" : "es";
    localStorage.setItem("lang", lang);
    ScrollTrigger.getAll().forEach((s) => s.kill());
    render();
  });
}

/* ---------------- REFINED CURSOR ---------------- */
function initCursor() {
  const c = document.getElementById("cursor")!;
  if (window.matchMedia("(pointer: coarse)").matches) {
    c.style.display = "none";
    return;
  }
  const p = { x: innerWidth / 2, y: innerHeight / 2 };
  const cur = { x: p.x, y: p.y };
  window.addEventListener("pointermove", (e) => {
    p.x = e.clientX;
    p.y = e.clientY;
  });
  const loop = () => {
    cur.x += (p.x - cur.x) * 0.2;
    cur.y += (p.y - cur.y) * 0.2;
    c.style.transform = `translate(${cur.x}px, ${cur.y}px)`;
    requestAnimationFrame(loop);
  };
  loop();
  document.addEventListener("pointerover", (e) => {
    if ((e.target as HTMLElement).closest("[data-cursor]")) c.classList.add("hover");
  });
  document.addEventListener("pointerout", (e) => {
    if ((e.target as HTMLElement).closest("[data-cursor]")) c.classList.remove("hover");
  });
}

/* ---------------- MAGNETIC ---------------- */
function initMagnetic() {
  document.querySelectorAll<HTMLElement>(".magnetic").forEach((el) => {
    el.addEventListener("pointermove", (e) => {
      const r = el.getBoundingClientRect();
      gsap.to(el, { x: (e.clientX - r.left - r.width / 2) * 0.22, y: (e.clientY - r.top - r.height / 2) * 0.3, duration: 0.5, ease: "power2.out" });
    });
    el.addEventListener("pointerleave", () => gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.5)" }));
  });
}

/* ---------------- BOOT ---------------- */
initScene(document.getElementById("webgl") as HTMLCanvasElement);
initCursor();
preloader().then(render);
