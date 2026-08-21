Technical Requirements Document (TRD)Project: Personal Portfolio WebsiteOwner: Ram Singh (Full Stack Web Developer, Age 25)Target Platform: Web Browsers (Desktop, Tablet, Mobile)System Architecture OverviewA decoupled, jamstack/SSR architecture optimized for sub-second page loads, SEO indexability, and minimal operational maintenance overhead.+-------------------------------------------------------------------+
|                           Client Browser                          |
|   Next.js (App Router) + React 19 + TypeScript + Tailwind CSS     |
+-------------------------------------------------------------------+
                                  |
                                  | Server Actions / API Routes
                                  v
+-------------------------------------------------------------------+
|                         Edge / Serverless                         |
|                     Vercel Edge Functions                         |
+-------------------------------------------------------------------+
          |                                       |
          v API                                   v API
+-------------------+                   +-------------------+
|    Resend API     |                   |  GitHub REST API  |
| (Transactional)   |                   | (Live Repo Stats) |
+-------------------+                   +-------------------+
Recommended Technology StackLayerSelectionJustificationFrameworkNext.js (App Router)Native SSG/ISR support, optimal SEO, automatic image optimization.LanguageTypeScriptStrong typing for project data models and API request payloads.StylingTailwind CSS + shadcn/uiUtility-first rapid UI development with fully accessible component primitives.AnimationsFramer MotionFluid layout transitions, scroll animations, and interactive hover states.DeploymentVercelSeamless CI/CD integration via GitHub, edge caching, and global CDN delivery.Email ServiceResendSimple API integration for handling contact form submissions without a backend DB.Data Contracts & Schema ModelsFor maximum velocity without backend operational overhead, data models can be driven via typed static files or direct API integrations.1. Project Data Model (/data/projects.ts)TypeScriptexport interface Project {
  id: string;
  title: string;
  slug: string;
  tagline: string;
  description: string;
  category: 'fullstack' | 'frontend' | 'backend' | 'open-source';
  thumbnailUrl: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl: string;
  featured: boolean;
  order: number;
}
2. Contact API Payload (/api/contact/route.ts)TypeScriptexport interface ContactRequestBody {
  name: string;
  email: string;
  subject: string;
  message: string;
  honeypot?: string; // Anti-spam trap
}
Core Technical Workflows1. Contact Form HandlingClient submits contact form using react-hook-form and zod schema validation.Form submits to /api/contact Server Action.API route checks honeypot field (drops request silently if filled by bot).Payload passed to Resend API to forward email directly to ram.singh@domain.com.Server returns standard HTTP status (200 OK or 422 Unprocessable Entity).2. Dynamic GitHub Stats FetchingServer Component fetches starred repos and contribution activity directly from GitHub GraphQL/REST API during build time using revalidate: 3600 (Incremental Static Regeneration every hour).Non-Functional & Performance TargetsLighthouse Benchmarks: Minimum 95+ score across Performance, Accessibility, Best Practices, and SEO.Core Web Vitals:LCP (Largest Contentful Paint): < 1.2sFID / INP (Interaction to Next Paint): < 100msCLS (Cumulative Layout Shift): 0.00Bundle Budget: First Load JS total < 85 KB (gzipped).Security & ComplianceContent Security Policy (CSP): Enforce strict script sources, frame ancestors, and object sources via Next.js response headers.Rate Limiting: Implement IP-based sliding window rate limiting on /api/contact using @upstash/ratelimit or custom headers (max 3 submissions per IP per 10 minutes).Environment Variables: Keep API keys (RESEND_API_KEY, GITHUB_TOKEN) locked in .env.local and Vercel secrets; never expose in NEXT_PUBLIC_ prefixed keys.