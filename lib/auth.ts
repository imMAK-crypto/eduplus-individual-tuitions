import 'server-only';
import bcrypt from 'bcryptjs';
import { cookies } from 'next/headers';
import { promises as fs } from 'fs';
import path from 'path';
import { persist } from './content';
import { signSession, verifySession, SESSION_COOKIE, type Role, type SessionPayload } from './session';

export type { Role, SessionPayload };
export type AdminUser = {
  id: string;
  username: string;
  passwordHash: string;
  role: Role;
  createdAt: string;
};

const USERS_PATH = path.join(process.cwd(), 'content', 'users.json');

// An admin seeded via environment variables (ADMIN_USERNAME + ADMIN_PASSWORD_HASH).
// Lets a public-repo / read-only-filesystem deploy have a working login without
// ever committing a password hash to the repository.
function envSeedUser(): AdminUser | null {
  const username = process.env.ADMIN_USERNAME;
  const passwordHash = process.env.ADMIN_PASSWORD_HASH;
  if (!username || !passwordHash) return null;
  return {
    id: 'env-seed',
    username: username.toLowerCase(),
    passwordHash,
    role: 'admin',
    createdAt: '2026-01-01T00:00:00.000Z',
  };
}

export async function readUsers(): Promise<AdminUser[]> {
  let fileUsers: AdminUser[] = [];
  try {
    const raw = await fs.readFile(USERS_PATH, 'utf8');
    fileUsers = (JSON.parse(raw) as { users?: AdminUser[] }).users ?? [];
  } catch {
    fileUsers = [];
  }
  const seed = envSeedUser();
  if (seed && !fileUsers.some((u) => u.username === seed.username)) {
    return [seed, ...fileUsers];
  }
  return fileUsers;
}

export async function writeUsers(users: AdminUser[]) {
  return persist('content/users.json', JSON.stringify({ users }, null, 2) + '\n', 'admin: update users');
}

export async function hasAnyUser(): Promise<boolean> {
  return (await readUsers()).length > 0;
}

export function hashPassword(pw: string): Promise<string> {
  return bcrypt.hash(pw, 12);
}

export function verifyPassword(pw: string, hash: string): Promise<boolean> {
  return bcrypt.compare(pw, hash);
}

export function newId(): string {
  return Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
}

export async function createSession(user: AdminUser) {
  const token = await signSession({ sub: user.id, username: user.username, role: user.role });
  const store = await cookies();
  store.set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 7,
  });
}

export async function destroySession() {
  (await cookies()).delete(SESSION_COOKIE);
}

export async function getSessionUser(): Promise<SessionPayload | null> {
  const token = (await cookies()).get(SESSION_COOKIE)?.value;
  if (!token) return null;
  return verifySession(token);
}

export async function requireUser(): Promise<SessionPayload> {
  const u = await getSessionUser();
  if (!u) throw new Error('Unauthorized');
  return u;
}
