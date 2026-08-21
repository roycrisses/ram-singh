export interface Project {
  id: string;
  title: string;
  slug: string;
  tagline: string;
  description: string;
  category: "fullstack" | "frontend" | "backend" | "open-source";
  thumbnailUrl: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl: string;
  featured: boolean;
  order: number;
}

export const projects: Project[] = [
  {
    id: "devcollab",
    title: "DevCollab",
    slug: "devcollab",
    tagline: "Real-time collaborative development platform",
    description: "Full-stack platform enabling real-time code collaboration with live cursors, shared terminals, and integrated debugging. Built with WebSockets for sub-100ms latency.",
    category: "fullstack",
    thumbnailUrl: "/projects/devcollab.svg",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "WebSockets", "Redis"],
    liveUrl: "https://devcollab.vercel.app",
    githubUrl: "https://github.com/ramsingh/devcollab",
    featured: true,
    order: 1,
  },
  {
    id: "shopstream",
    title: "ShopStream",
    slug: "shopstream",
    tagline: "E-commerce analytics dashboard",
    description: "Analytics platform for Shopify merchants with real-time sales tracking, cohort analysis, and automated reporting. Handles 10k+ events/second via event-driven architecture.",
    category: "fullstack",
    thumbnailUrl: "/projects/shopstream.svg",
    techStack: ["React", "Node.js", "ClickHouse", "Kafka", "Tailwind CSS", "Docker"],
    liveUrl: "https://shopstream.vercel.app",
    githubUrl: "https://github.com/ramsingh/shopstream",
    featured: true,
    order: 2,
  },
  {
    id: "taskflow-api",
    title: "TaskFlow API",
    slug: "taskflow-api",
    tagline: "GraphQL task management backend",
    description: "Production-ready GraphQL API with authentication, real-time subscriptions, and fine-grained permissions. Includes comprehensive test suite and CI/CD pipeline.",
    category: "backend",
    thumbnailUrl: "/projects/taskflow.svg",
    techStack: ["Node.js", "Apollo Server", "PostgreSQL", "Prisma", "GraphQL", "Jest"],
    liveUrl: undefined,
    githubUrl: "https://github.com/ramsingh/taskflow-api",
    featured: true,
    order: 3,
  },
  {
    id: "motion-ui-kit",
    title: "MotionUI Kit",
    slug: "motion-ui-kit",
    tagline: "Open-source animation component library",
    description: "Lightweight, accessible animation primitives for React. Features spring physics, scroll-triggered animations, and zero-dependency core. 2k+ GitHub stars.",
    category: "open-source",
    thumbnailUrl: "/projects/motionui.svg",
    techStack: ["React", "TypeScript", "Framer Motion", "CSS Variables", "Vite"],
    liveUrl: "https://motionui.dev",
    githubUrl: "https://github.com/ramsingh/motion-ui-kit",
    featured: true,
    order: 4,
  },
];