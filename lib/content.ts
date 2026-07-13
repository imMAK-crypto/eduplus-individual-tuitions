import 'server-only';
import { promises as fs } from 'fs';
import path from 'path';

export type ContentKey = 'site' | 'home' | 'about' | 'programs' | 'contact' | 'fees';
export const CONTENT_KEYS: ContentKey[] = ['site', 'home', 'about', 'programs', 'contact', 'fees'];

const CONTENT_DIR = path.join(process.cwd(), 'content');
const filePath = (key: ContentKey) => path.join(CONTENT_DIR, `${key}.json`);

// Read a content file fresh from disk (used by the admin + preview routes so
// edits show immediately without a rebuild). Public pages import the JSON
// directly so they stay statically generated.
export async function readContent<T = Record<string, unknown>>(key: ContentKey): Promise<T> {
  const raw = await fs.readFile(filePath(key), 'utf8');
  return JSON.parse(raw) as T;
}

// On Vercel the filesystem is read-only, so publishing commits the file to the
// Git repo via the GitHub Contents API (which triggers an auto-redeploy).
// In local dev we just write the file directly for an instant update.
const isServerless = !!process.env.VERCEL;

export async function writeContent(key: ContentKey, data: unknown): Promise<{ mode: string }> {
  return persist(`content/${key}.json`, JSON.stringify(data, null, 2) + '\n', `admin: update ${key} content`);
}

// Generic persist: instant fs write in dev, GitHub commit (auto-redeploy) in prod.
export async function persist(
  relPath: string,
  json: string,
  message = `admin: update ${relPath}`
): Promise<{ mode: string }> {
  if (isServerless) {
    await commitToGitHub(relPath, json, message);
    return { mode: 'git' };
  }
  await fs.writeFile(path.join(process.cwd(), relPath), json, 'utf8');
  return { mode: 'fs' };
}

async function commitToGitHub(repoPath: string, content: string, message: string) {
  const token = process.env.GITHUB_TOKEN;
  const repo = process.env.GITHUB_REPO; // "owner/name"
  const branch = process.env.GITHUB_BRANCH || 'main';
  if (!token || !repo) {
    throw new Error('Publishing not configured: set GITHUB_TOKEN and GITHUB_REPO.');
  }
  const api = `https://api.github.com/repos/${repo}/contents/${repoPath}`;
  const headers = {
    Authorization: `Bearer ${token}`,
    Accept: 'application/vnd.github+json',
    'Content-Type': 'application/json',
  };
  // fetch current file sha (required to update an existing file)
  let sha: string | undefined;
  const getRes = await fetch(`${api}?ref=${branch}`, { headers, cache: 'no-store' });
  if (getRes.ok) {
    const cur = (await getRes.json()) as { sha?: string };
    sha = cur.sha;
  }
  const putRes = await fetch(api, {
    method: 'PUT',
    headers,
    body: JSON.stringify({
      message,
      content: Buffer.from(content, 'utf8').toString('base64'),
      branch,
      ...(sha ? { sha } : {}),
    }),
  });
  if (!putRes.ok) {
    throw new Error(`GitHub publish failed (${putRes.status}): ${await putRes.text()}`);
  }
}
