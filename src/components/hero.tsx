"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { site } from "@/lib/site";

interface HeroProps {
  stats?: { repos: number; followers: number } | null;
}

export function Hero({ stats }: HeroProps) {
  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden" aria-labelledby="hero-heading">
      <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-40 left-1/4 w-96 h-96 rounded-full bg-blue-400/20 blur-3xl dark:bg-blue-400/10" />
        <div className="absolute -bottom-40 right-1/4 w-96 h-96 rounded-full bg-violet-400/20 blur-3xl dark:bg-violet-400/10" />
        <div
          className="absolute inset-0 [background-image:radial-gradient(circle_at_1px_1px,rgb(0_0_0/0.06)_1px,transparent_0)] [background-size:24px_24px]"
          style={{
            maskImage: "radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)",
          }}
        />
      </div>

      <div className="section-container relative z-10 py-20 md:py-32">
        <Reveal delay={0.1}>
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
            <span className="relative flex h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" aria-hidden="true" />
            Available for freelance & full-time roles
          </span>
        </Reveal>

        <Reveal delay={0.2} className="mt-6">
          <h1 id="hero-heading" className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Ram Singh
            <br />
            <span className="relative bg-gradient-to-r from-accent to-violet-600 bg-clip-text text-transparent">
              Full Stack Web Developer
            </span>
          </h1>
        </Reveal>

        <Reveal delay={0.3} className="mt-6 max-w-2xl">
          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Building scalable, high-impact web applications from database to UI.
            Specialized in React, Next.js, Node.js, and PostgreSQL.
          </p>
        </Reveal>

        <Reveal delay={0.4} className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#work"
            className="group inline-flex h-12 px-6 items-center justify-center gap-2 rounded-md bg-zinc-900 text-white text-sm font-medium transition-colors hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
            aria-label="View my work"
          >
            View Work
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </a>
          <a
            href="/resume.pdf"
            download
            className="inline-flex h-12 px-6 items-center justify-center gap-2 rounded-md border border-zinc-300 bg-transparent text-zinc-700 text-sm font-medium transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
            aria-label="Download resume"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            Download Resume
          </a>
        </Reveal>

        <Reveal delay={0.5} className="mt-16 flex flex-wrap items-center gap-8 text-sm text-zinc-500 dark:text-zinc-500">
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4" aria-hidden="true" />
            <a href={`mailto:${site.email}`} className="hover:text-accent transition-colors">{site.email}</a>
          </div>
          <div className="flex items-center gap-2">
            <Github className="h-4 w-4" aria-hidden="true" />
            <a href={site.github} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">GitHub</a>
          </div>
          <div className="flex items-center gap-2">
            <Linkedin className="h-4 w-4" aria-hidden="true" />
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">LinkedIn</a>
          </div>
          <div className="flex items-center gap-2">
            <Twitter className="h-4 w-4" aria-hidden="true" />
            <a href={site.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">X</a>
          </div>
        </Reveal>

        {(stats || false) && (
          <Reveal delay={0.6} className="mt-16 grid grid-cols-3 gap-8 text-center">
            <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800">
              <p className="text-3xl font-bold text-zinc-900 dark:text-white">{stats.repos}+</p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">GitHub Repos</p>
            </div>
            <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800">
              <p className="text-3xl font-bold text-zinc-900 dark:text-white">{stats.followers}+</p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">Followers</p>
            </div>
            <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800">
              <p className="text-3xl font-bold text-zinc-900 dark:text-white">15+</p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">Projects Built</p>
            </div>
          </Reveal>
        )}
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
        aria-hidden="true"
      >
        <svg className="h-6 w-6 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
      </motion.div>
    </section>
  );
}