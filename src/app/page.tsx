import { getGithubStats } from "@/lib/github";
import { Hero } from "@/components/hero";
import { TechStack } from "@/components/tech-stack";
import { Projects } from "@/components/projects";
import { Experience } from "@/components/experience";
import { Contact } from "@/components/contact";
import { site } from "@/lib/site";

export const metadata = {
  title: "Portfolio",
  description: site.description,
  openGraph: {
    title: `${site.name} | Full Stack Web Developer`,
    description: site.description,
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Full Stack Web Developer`,
    description: site.description,
    images: ["/og.png"],
  },
};

export default async function Home() {
  const stats = await getGithubStats();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.role,
    url: site.url,
    email: site.email,
    sameAs: [site.github, site.linkedin, site.twitter],
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "GraphQL",
      "Docker",
      "AWS",
      "Web Development",
      "Full Stack Development",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Freelance / Open to opportunities",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Hero stats={stats} />
      <TechStack />
      <Projects />
      <Experience />
      <Contact />
    </>
  );
}