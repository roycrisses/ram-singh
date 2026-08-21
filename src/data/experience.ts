export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  summary?: string;
  points: string[];
}

export const experience: ExperienceItem[] = [
  {
    role: "Senior Full Stack Developer",
    company: "TechNova",
    period: "2023 — Present",
    summary: "Leading frontend architecture for B2B SaaS platform serving 50k+ users.",
    points: [
      "Migrated legacy codebase to Next.js 15 App Router, reducing bundle size by 35%",
      "Designed and implemented real-time collaboration features using WebSockets and CRDTs",
      "Mentored 4 engineers, established code review standards and testing practices",
      "Improved Core Web Vitals: LCP from 2.8s to 1.1s, INP from 320ms to 85ms",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "PixelForge Studio",
    period: "2021 — 2023",
    summary: "Delivered 15+ client projects across e-commerce, SaaS, and developer tools.",
    points: [
      "Built headless CMS solutions with Next.js and Strapi for enterprise clients",
      "Implemented CI/CD pipelines reducing deployment time from 45min to 3min",
      "Optimized database queries cutting API p95 latency by 60%",
      "Contributed to internal design system adopted across 8 projects",
    ],
  },
  {
    role: "Freelance Web Developer",
    company: "Independent",
    period: "2019 — 2021",
    summary: "End-to-end delivery of custom web applications for startups and SMBs.",
    points: [
      "Developed 10+ production applications from concept to deployment",
      "Specialized in React/Node.js stack with PostgreSQL and AWS",
      "Maintained 100% client retention rate through transparent communication",
      "Open-sourced 3 reusable packages with combined 500+ weekly downloads",
    ],
  },
];