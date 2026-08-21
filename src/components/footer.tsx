import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-950/50" role="contentinfo">
      <div className="section-container py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex flex-col md:flex-row md:items-center gap-6 text-sm text-zinc-500 dark:text-zinc-400">
            <p>&copy; {year} {site.name}. All rights reserved.</p>
            <p>Built with Next.js & Tailwind CSS</p>
          </div>

          <nav className="flex items-center gap-6" aria-label="Social links">
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 dark:text-zinc-400 hover:text-accent dark:hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 dark:text-zinc-400 hover:text-accent dark:hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href={site.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 dark:text-zinc-400 hover:text-accent dark:hover:text-accent transition-colors"
              aria-label="X (Twitter)"
            >
              <Twitter className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href={`mailto:${site.email}`}
              className="text-zinc-500 dark:text-zinc-400 hover:text-accent dark:hover:text-accent transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" aria-hidden="true" />
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}