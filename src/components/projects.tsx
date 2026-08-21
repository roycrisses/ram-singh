"use client";

import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { projects } from "@/data/projects";

interface ProjectCardProps {
  project: (typeof projects)[0];
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const initials = project.title
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  return (
    <Reveal delay={index * 0.1} className="group">
      <article className="relative group h-full overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-blue-500/10 to-violet-500/10">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl font-bold text-blue-500/20 dark:text-blue-500/30">{initials}</span>
          </div>
        </div>

        <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
          <div className="mb-3 flex items-center justify-between">
            <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 capitalize">
              {project.category}
            </span>
          </div>

          <h3 className="mb-2 text-xl font-bold text-zinc-900 dark:text-white group-hover:text-accent transition-colors">
            {project.title}
          </h3>

          <p className="mb-4 flex-1 text-zinc-600 dark:text-zinc-400 line-clamp-2">{project.tagline}</p>

          <div className="mb-4 flex flex-wrap gap-2">
            {project.techStack.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-0.5 text-xs font-medium rounded bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4 pt-4 border-t border-zinc-200 dark:border-zinc-800">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-hover transition-colors"
                aria-label={`View live demo of ${project.title}`}
              >
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
                Live Demo
              </a>
            )}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-accent transition-colors"
              aria-label={`View source code of ${project.title}`}
            >
              <Github className="h-4 w-4" aria-hidden="true" />
              Source
            </a>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export function Projects() {
  const featuredProjects = projects.filter((p) => p.featured).sort((a, b) => a.order - b.order);

  return (
    <section id="work" className="py-20 md:py-28 scroll-mt-16" aria-labelledby="work-heading">
      <div className="section-container">
        <header className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <p className="mb-3 text-sm font-medium text-accent uppercase tracking-wider">Selected Work</p>
            <h2 id="work-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white">
              Featured Projects
            </h2>
          </div>
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-hover transition-colors"
          >
            View all on GitHub
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        </header>

        <div className="grid md:grid-cols-2 gap-6">
          {featuredProjects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}