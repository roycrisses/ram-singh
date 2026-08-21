"use client";

import { useState } from "react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

const navLinks = [
  { href: "#stack", label: "Stack" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 backdrop-blur-md bg-white/80 dark:bg-zinc-950/80 border-b border-zinc-200/70 dark:border-zinc-800/70">
      <nav className="mx-auto max-w-5xl px-6 sm:px-8 lg:px-12 h-full flex items-center justify-between" aria-label="Main navigation">
        <Link href="/" className="font-semibold text-lg text-zinc-900 dark:text-white" aria-label="Ram Singh - Home">
          RS
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-accent dark:hover:text-accent transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
          <a
            href="/resume.pdf"
            download
            className="hidden sm:inline-flex h-10 px-4 items-center justify-center gap-2 rounded-md bg-zinc-900 text-white text-sm font-medium hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200 transition-colors"
          >
            Resume
          </a>
        </div>

        <button
          type="button"
          className="md:hidden p-2 rounded-md text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          )}
        </button>
      </nav>

      {mobileOpen && (
        <div id="mobile-menu" className="md:hidden border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 py-4 px-6">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-medium text-zinc-700 dark:text-zinc-300 hover:text-accent dark:hover:text-accent"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-4 pt-4 border-t border-zinc-200 dark:border-zinc-800">
              <ThemeToggle />
              <a
                href="/resume.pdf"
                download
                className="flex h-10 px-4 items-center justify-center gap-2 rounded-md bg-zinc-900 text-white text-sm font-medium hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}