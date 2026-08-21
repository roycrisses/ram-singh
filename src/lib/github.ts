import { site } from "@/lib/site";

export interface GithubStats {
  repos: number;
  followers: number;
}

export async function getGithubStats(): Promise<GithubStats | null> {
  const username = site.githubUsername;
  if (!username) return null;

  try {
    const res = await fetch(`https://api.github.com/users/${encodeURIComponent(username)}`, {
      headers: { Accept: "application/vnd.github+json" },
      next: { revalidate: 3600 },
    });

    if (!res.ok) return null;

    const data = (await res.json()) as { public_repos?: number; followers?: number };
    if (typeof data.public_repos !== "number" || typeof data.followers !== "number") return null;

    return { repos: data.public_repos, followers: data.followers };
  } catch {
    return null;
  }
}