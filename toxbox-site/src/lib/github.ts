// GitHub API からリリース情報を取得するユーティリティ

export interface GitHubRelease {
  tag_name: string;
  name: string;
  body: string;
  published_at: string;
  html_url: string;
  prerelease: boolean;
  draft: boolean;
}

const GITHUB_OWNER = "kai-hiroaki";
const GITHUB_REPO = "TOXBOX";

export async function fetchGitHubReleases(): Promise<GitHubRelease[]> {
  const url = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/releases`;
  const token = import.meta.env.GITHUB_TOKEN;

  try {
    const headers: Record<string, string> = {
      Accept: "application/vnd.github.v3+json",
      "User-Agent": "TOXBOX-Web",
    };

    // プライベートリポジトリの場合はトークンが必要
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    const response = await fetch(url, { headers });

    if (!response.ok) {
      console.error(`GitHub API error: ${response.status} ${response.statusText}`);
      return [];
    }

    const releases: GitHubRelease[] = await response.json();
    // ドラフトを除外し、公開日順でソート
    return releases
      .filter((release) => !release.draft)
      .sort(
        (a, b) =>
          new Date(b.published_at).getTime() - new Date(a.published_at).getTime()
      );
  } catch (error) {
    console.error("Failed to fetch GitHub releases:", error);
    return [];
  }
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
