# Ram Singh — Portfolio

Personal portfolio website for Ram Singh, Full Stack Web Developer.

## Tech Stack

- **Framework**: Next.js 16 (App Router) + React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod
- **Email**: Resend API
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 20+
- npm/pnpm/yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
npm run build
```

### Lint

```bash
npx eslint .
```

## Environment Variables

Copy `.env.example` to `.env.local` and fill in:

```bash
RESEND_API_KEY=your_resend_api_key
CONTACT_FROM="Portfolio <onboarding@resend.dev>"
CONTACT_TO=your_email@domain.com
```

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── api/contact/        # Contact form API route
│   ├── globals.css         # Global styles + Tailwind
│   ├── layout.tsx          # Root layout + SEO metadata
│   ├── page.tsx            # Home page (server component)
│   ├── sitemap.ts          # Dynamic sitemap
│   └── robots.ts           # Robots.txt
├── components/             # React components
│   ├── navbar.tsx          # Navigation + mobile menu
│   ├── theme-toggle.tsx    # Dark/light mode toggle
│   ├── hero.tsx            # Hero section
│   ├── tech-stack.tsx      # Skills showcase
│   ├── projects.tsx        # Featured projects
│   ├── experience.tsx      # Professional timeline
│   ├── contact.tsx         # Contact form + info
│   ├── footer.tsx          # Site footer
│   ├── reveal.tsx          # Scroll animation wrapper
│   └── section-heading.tsx # Reusable section header
├── data/                   # Static data
│   ├── projects.ts         # Project portfolio data
│   └── experience.ts       # Work experience data
└── lib/                    # Utilities
    ├── site.ts             # Site configuration
    ├── github.ts           # GitHub API integration
    └── rate-limit.ts       # In-memory rate limiter
```

## Features

- ✅ Server-side rendered for optimal SEO
- ✅ Dark/light mode with localStorage persistence
- ✅ Responsive mobile-first design
- ✅ Accessible (WCAG AA compliant)
- ✅ Contact form with honeypot + rate limiting
- ✅ GitHub stats via ISR (revalidated hourly)
- ✅ JSON-LD structured data (Person schema)
- ✅ Open Graph + Twitter Card tags
- ✅ Security headers (CSP-ready)
- ✅ Sub-85KB first-load JS target

## Deployment

Deploy to Vercel:

1. Push to GitHub
2. Import repository in Vercel
3. Add environment variables
4. Deploy

## License

MIT