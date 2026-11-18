import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mykyta Pishko — Frontend Developer (React, Angular, TypeScript)" },
      { name: "description", content: "Kharkiv-based Frontend Developer with 8 years building fintech dashboards and complex web apps. Open to remote." },
      { property: "og:title", content: "Mykyta Pishko — Frontend Developer" },
      { property: "og:description", content: "8 years of React, Angular, TypeScript and RxJS. CV, experience and GitHub projects." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

const skills = {
  Languages: ["JavaScript", "TypeScript", "HTML5", "CSS3", "Sass/SCSS", "Less", "JSP"],
  Frameworks: ["React", "Next.js", "Redux", "Angular 2+", "Angular Material", "RxJS"],
  "UI & Layout": ["Responsive", "Adaptive", "Flexbox", "Bootstrap", "Foundation", "Cross-browser"],
  "Real-time": ["WebSockets", "REST API"],
  Testing: ["Unit Testing", "Jest"],
  Tools: ["Git", "GitHub", "GitLab", "Azure DevOps", "Webpack", "Gulp"],
  IDEs: ["WebStorm", "IntelliJ IDEA", "Visual Studio", "Cursor"],
  AI: ["GitHub Copilot", "Claude Code", "Gemini"],
};

const jobs = [
  {
    role: "Frontend Developer", company: "Trinetix", period: "Jan 2022 — Jun 2026",
    points: [
      "Designed and built complex front-end components and interactive prototypes with React, TypeScript and RxJS.",
      "Worked with UX/UI designers and back-end engineers to integrate APIs and ensure reliable data flow.",
      "Ran code reviews to keep the codebase clean and maintainable, and mentored teammates.",
      "Wrote unit tests with Jest and fixed complex bugs while optimizing existing features.",
      "Delivered in Azure DevOps and GitLab CI/CD environments with Angular Material and React.",
    ],
  },
  {
    role: "Frontend Developer · Fintech", company: "CS", period: "Oct 2017 — Dec 2021",
    points: [
      "Built features for a complex financial product with high reliability and compliance requirements.",
      "Implemented real-time updates and interactive financial dashboards with WebSockets.",
      "Built prototypes and contributed to system design and back-end integration.",
    ],
  },
];

const projects = [
  { name: "aerolt.github.io", desc: "About particulate monitoring — an informational site on air quality.", lang: "JavaScript", url: "https://github.com/nikitapishko/aerolt.github.io" },
  { name: "wwt-frontend-filter", desc: "Hotel search filter interface.", lang: "TypeScript", url: "https://github.com/nikitapishko/wwt-frontend-filter.github.io" },
  { name: "Learn-Next.js", desc: "My first project built with Next.js.", lang: "Next.js", url: "https://github.com/nikitapishko/Learn-Next.js" },
];

const contacts = [
  { label: "Email", value: "nikitapishko@gmail.com", href: "mailto:nikitapishko@gmail.com" },
  { label: "Phone", value: "+380 93 046 0939", href: "tel:+380930460939" },
  { label: "Telegram", value: "@ML_YL", href: "https://t.me/ML_YL" },
  { label: "LinkedIn", value: "mykyta-pishko", href: "https://linkedin.com/in/mykyta-pishko-341761113" },
  { label: "GitHub", value: "nikitapishko", href: "https://github.com/nikitapishko" },
];

function Section({ id, n, title, children }: { id: string; n: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-16 border-t border-border py-14 sm:py-20">
      <div className="mb-8 flex items-baseline gap-3 sm:mb-10 sm:gap-4">
        <span className="font-mono text-sm text-primary">{n}</span>
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function Index() {
  return (
    <div className="relative min-h-screen">
      <div className="grid-bg pointer-events-none absolute inset-x-0 top-0 h-[600px]" />
      <header className="sticky top-0 z-20 border-b border-border/60 bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-4 font-mono text-sm sm:px-6">
        <span className="shrink-0 text-primary">~/mykyta</span>
        <nav className="-mr-2 flex min-w-0 gap-4 overflow-x-auto pr-2 text-xs text-muted-foreground sm:gap-6 sm:text-sm">
          {["about", "experience", "skills", "projects", "contact"].map((s) => (
            <a key={s} href={`#${s}`} className="shrink-0 py-1 transition-colors hover:text-primary">{s}</a>
          ))}
        </nav>
        </div>
      </header>

      <main className="relative mx-auto max-w-5xl px-5 sm:px-6">
        <section className="py-16 sm:py-24 md:py-32">
          <p className="mb-6 font-mono text-xs text-primary sm:text-sm">● Available · Kharkiv, Ukraine · Open to remote</p>
          <h1 className="text-5xl font-bold leading-[0.95] tracking-tighter sm:text-7xl md:text-8xl">
            Mykyta<br />Pishko<span className="text-primary">.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground sm:mt-8 sm:text-xl md:text-2xl">
            Frontend Developer crafting <span className="text-foreground">React</span>, <span className="text-foreground">Angular</span> and <span className="text-foreground">TypeScript</span> interfaces for fintech and complex web products.
          </p>
          <div className="mt-8 grid gap-3 font-mono text-sm sm:mt-10 sm:flex sm:flex-wrap sm:gap-4">
            <a href="mailto:nikitapishko@gmail.com" className="rounded-md bg-primary px-6 py-3 text-center font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5">Get in touch →</a>
            <a href="/downloads/Mykyta_Pishko_Frontend_Developer.pdf" download="Mykyta_Pishko_Frontend_Developer.pdf" className="rounded-md border border-border px-6 py-3 text-center transition-colors hover:border-primary hover:text-primary">Download CV (PDF) ↓</a>
            <a href="https://github.com/nikitapishko" target="_blank" rel="noreferrer" className="rounded-md border border-border px-6 py-3 text-center transition-colors hover:border-primary hover:text-primary">GitHub</a>
          </div>
          <dl className="mt-14 grid grid-cols-3 gap-4 border-t border-border pt-8 sm:mt-20 sm:gap-6">
            {[["8", "years experience"], ["5", "years Angular"], ["4", "years React"]].map(([v, l]) => (
              <div key={l}><dt className="text-3xl font-bold text-primary sm:text-4xl md:text-5xl">{v}+</dt><dd className="mt-1 font-mono text-xs text-muted-foreground">{l}</dd></div>
            ))}
          </dl>
        </section>

        <Section id="about" n="01" title="About">
          <p className="max-w-3xl text-base leading-relaxed sm:text-lg text-muted-foreground">
            Frontend Developer with 8 years of commercial experience building complex web applications with JavaScript, TypeScript, React and Angular. Experienced in fintech dashboards, real-time data over WebSockets, RxJS-based state management, unit testing with Jest and code reviews. Outside work I volunteer with the family centre <span className="text-foreground">"YouToo"</span>, supporting children and organizing events since 2016.
          </p>
        </Section>

        <Section id="experience" n="02" title="Experience">
          <div className="space-y-10 sm:space-y-12">
            {jobs.map((j) => (
              <div key={j.company} className="grid gap-2 sm:gap-4 md:grid-cols-[180px_1fr]">
                <p className="font-mono text-sm text-muted-foreground">{j.period}</p>
                <div>
                  <h3 className="text-xl font-bold sm:text-2xl">{j.role} <span className="text-primary">@ {j.company}</span></h3>
                  <ul className="mt-4 space-y-2 text-muted-foreground">
                    {j.points.map((p) => <li key={p} className="flex gap-3"><span className="shrink-0 text-primary">▹</span>{p}</li>)}
                  </ul>
                </div>
              </div>
            ))}
            <div className="grid gap-2 sm:gap-4 md:grid-cols-[180px_1fr]">
              <p className="font-mono text-sm text-muted-foreground">Feb — Mar 2017</p>
              <h3 className="text-xl font-bold">JavaScript course <span className="text-primary">@ Source IT</span></h3>
            </div>
          </div>
        </Section>

        <Section id="skills" n="03" title="Skills">
          <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2">
            {Object.entries(skills).map(([k, v]) => (
              <div key={k} className="bg-background p-5 sm:p-6">
                <p className="mb-3 font-mono text-xs uppercase tracking-widest text-primary">{k}</p>
                <div className="flex flex-wrap gap-2">
                  {v.map((s) => <span key={s} className="rounded border border-border bg-secondary px-2.5 py-1 text-sm">{s}</span>)}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 font-mono text-sm text-muted-foreground">Languages: Ukrainian (native) · English (intermediate)</p>
        </Section>

        <Section id="projects" n="04" title="GitHub projects">
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {projects.map((p) => (
              <a key={p.name} href={p.url} target="_blank" rel="noreferrer" className="group flex flex-col rounded-lg border border-border bg-card p-5 transition-all sm:p-6 hover:-translate-y-1 hover:border-primary">
                <span className="font-mono text-xs text-primary">{p.lang}</span>
                <h3 className="mt-3 break-words text-xl font-bold group-hover:text-primary">{p.name}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.desc}</p>
                <span className="mt-6 font-mono text-xs text-muted-foreground">view repo ↗</span>
              </a>
            ))}
          </div>
        </Section>

        <Section id="contact" n="05" title="Let's work together">
          <div className="divide-y divide-border border-y border-border">
            <a href="/downloads/Mykyta_Pishko_Frontend_Developer.pdf" download="Mykyta_Pishko_Frontend_Developer.pdf" className="grid grid-cols-[minmax(0,auto)_minmax(0,1fr)] items-center gap-4 py-4 transition-colors sm:py-5 hover:text-primary">
              <span className="shrink-0 font-mono text-xs text-muted-foreground sm:text-sm">Resume</span>
              <span className="min-w-0 truncate text-right text-base sm:text-lg md:text-2xl">Download CV (PDF) ↓</span>
            </a>
            {contacts.map((c) => (
              <a key={c.label} href={c.href} target="_blank" rel="noreferrer" className="grid grid-cols-[minmax(0,auto)_minmax(0,1fr)] items-center gap-4 py-4 transition-colors sm:py-5 hover:text-primary">
                <span className="shrink-0 font-mono text-xs text-muted-foreground sm:text-sm">{c.label}</span>
                <span className="min-w-0 truncate text-right text-base sm:text-lg md:text-2xl">{c.value} ↗</span>
              </a>
            ))}
          </div>
        </Section>
      </main>
      <footer className="py-10 text-center font-mono text-xs text-muted-foreground">© 2026 Mykyta Pishko</footer>
    </div>
  );
}
