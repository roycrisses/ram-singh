import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
}

export function SectionHeading({ eyebrow, title, description, children, className }: SectionHeadingProps) {
  return (
    <header className={`${className} mb-12 md:mb-16`}>
      {eyebrow && (
        <p className="mb-3 text-sm font-medium text-accent uppercase tracking-wider">
          {eyebrow}
        </p>
      )}
      <h2 className="mb-4 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">{description}</p>
      )}
      {children}
    </header>
  );
}