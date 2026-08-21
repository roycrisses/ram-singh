"use client";

import { Code2, Server, Database, Layers } from "lucide-react";
import { Reveal } from "@/components/reveal";

const categories = [
  {
    id: "frontend",
    title: "Frontend",
    icon: Code2,
    description: "Modern, performant user interfaces",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5/CSS3", "Framer Motion"],
  },
  {
    id: "backend",
    title: "Backend",
    icon: Server,
    description: "Scalable APIs and server architecture",
    skills: ["Node.js", "Express", "Python/Django", "RESTful APIs", "GraphQL", "WebSockets"],
  },
  {
    id: "data-devops",
    title: "Data & DevOps",
    icon: Database,
    description: "Reliable data layers and deployment pipelines",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Docker", "AWS", "Vercel CI/CD"],
  },
];

export function TechStack() {
  return (
    <section id="stack" className="py-20 md:py-28 scroll-mt-16" aria-labelledby="stack-heading">
      <div className="section-container">
        <header className="mb-16 text-center">
          <p className="mb-3 text-sm font-medium text-accent uppercase tracking-wider">Technology Stack</p>
          <h2 id="stack-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Tools & Technologies
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-zinc-600 dark:text-zinc-400">
            A curated set of tools I use to build fast, maintainable, and scalable web applications.
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <Reveal key={cat.id} delay={idx * 0.1} className="group">
              <article className="relative p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 hover:border-accent/50 dark:hover:border-accent/50 transition-colors h-full">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent dark:bg-accent/20 group-hover:bg-accent/20 dark:group-hover:bg-accent/30 transition-colors">
                  <cat.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-zinc-900 dark:text-white">{cat.title}</h3>
                <p className="mb-6 text-zinc-600 dark:text-zinc-400">{cat.description}</p>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}