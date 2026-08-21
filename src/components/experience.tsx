"use client";

import { Reveal } from "@/components/reveal";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 scroll-mt-16" aria-labelledby="experience-heading">
      <div className="section-container">
        <header className="mb-16 text-center">
          <p className="mb-3 text-sm font-medium text-accent uppercase tracking-wider">Experience</p>
          <h2 id="experience-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Professional Journey
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-zinc-600 dark:text-zinc-400">
            Building products and leading teams across startups and enterprises.
          </p>
        </header>

        <ol className="relative max-w-3xl mx-auto">
          <li className="absolute left-8 top-0 bottom-0 w-0.5 bg-zinc-200 dark:bg-zinc-800" aria-hidden="true" />
          {experience.map((item, idx) => (
            <Reveal key={item.role} delay={idx * 0.1} className="relative">
              <li className="relative pl-16 pb-16 last:pb-0">
                <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-accent border-4 border-white dark:border-zinc-950 z-10" aria-hidden="true" />
                <article className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
                  <div className="mb-3 flex flex-wrap items-center gap-3">
                    <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">{item.role}</h3>
                    <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-accent/10 text-accent">{item.company}</span>
                    <time className="text-sm text-zinc-500 dark:text-zinc-400">{item.period}</time>
                  </div>

                  {item.summary && (
                    <p className="mb-4 text-zinc-600 dark:text-zinc-400">{item.summary}</p>
                  )}

                  <ul className="space-y-2" role="list">
                    {item.points.map((point, pi) => (
                      <li key={pi} className="flex items-start gap-3 text-zinc-600 dark:text-zinc-400">
                        <span className="mt-1.5 flex h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}