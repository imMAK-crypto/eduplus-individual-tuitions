'use server';

import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { headers } from 'next/headers';
import crypto from 'crypto';
import { z } from 'zod';
import {
  readUsers,
  writeUsers,
  hasAnyUser,
  hashPassword,
  verifyPassword,
  createSession,
  destroySession,
  requireUser,
  newId,
  type AdminUser,
  type Role,
} from '@/lib/auth';
import { writeContent, CONTENT_KEYS, type ContentKey } from '@/lib/content';
import { rateLimit, resetRateLimit } from '@/lib/ratelimit';
import type { FormState } from '@/lib/adminTypes';

const cred = z.object({
  username: z
    .string()
    .trim()
    .min(3, 'Username must be at least 3 characters.')
    .max(20, 'Username must be 20 characters or fewer.')
    .regex(/^[a-zA-Z0-9_]+$/, 'Use letters, numbers and underscore only.'),
  password: z.string().min(8, 'Password must be at least 8 characters.').max(100),
});

/* ----------------------------- setup / auth ----------------------------- */

export async function setupAction(_prev: FormState, fd: FormData): Promise<FormState> {
  if (await hasAnyUser()) return { error: 'Setup is already complete. Please log in.' };
  const parsed = cred.safeParse({ username: fd.get('username'), password: fd.get('password') });
  if (!parsed.success) return { error: parsed.error.issues[0].message };
  if (String(fd.get('confirm') || '') !== parsed.data.password)
    return { error: 'Passwords do not match.' };
  const user: AdminUser = {
    id: newId(),
    username: parsed.data.username.toLowerCase(),
    passwordHash: await hashPassword(parsed.data.password),
    role: 'admin',
    createdAt: new Date().toISOString(),
  };
  await writeUsers([user]);
  await createSession(user);
  redirect('/admin');
}

export async function loginAction(_prev: FormState, fd: FormData): Promise<FormState> {
  const username = String(fd.get('username') || '').trim().toLowerCase();
  const password = String(fd.get('password') || '');
  const ip = (await headers()).get('x-forwarded-for')?.split(',')[0]?.trim() || 'local';
  const rlKey = `login:${ip}:${username}`;
  const rl = rateLimit(rlKey);
  if (!rl.ok)
    return { error: `Too many attempts. Try again in ${Math.ceil(rl.retryMs / 60000)} minutes.` };

  const user = (await readUsers()).find((u) => u.username === username);
  const ok = user ? await verifyPassword(password, user.passwordHash) : false;
  if (!user || !ok) return { error: 'Invalid username or password.' };

  resetRateLimit(rlKey);
  await createSession(user);
  const next = String(fd.get('next') || '');
  redirect(next.startsWith('/admin') ? next : '/admin');
}

export async function logoutAction(): Promise<void> {
  await destroySession();
  redirect('/admin/login');
}

/* ------------------------------- content -------------------------------- */

export async function saveContentAction(_prev: FormState, fd: FormData): Promise<FormState> {
  await requireUser();
  const key = String(fd.get('key') || '') as ContentKey;
  if (!CONTENT_KEYS.includes(key)) return { error: 'Unknown content section.' };
  let data: unknown;
  try {
    data = JSON.parse(String(fd.get('data') || ''));
  } catch {
    return { error: 'Could not read the form data.' };
  }
  const res = await writeContent(key, data);
  revalidatePath('/', 'layout');
  return { ok: true, savedAt: Date.now(), mode: res.mode };
}

/* -------------------------------- users --------------------------------- */

export async function createUserAction(_prev: FormState, fd: FormData): Promise<FormState> {
  const me = await requireUser();
  if (me.role !== 'admin') return { error: 'Only admins can add users.' };
  const parsed = cred.safeParse({ username: fd.get('username'), password: fd.get('password') });
  if (!parsed.success) return { error: parsed.error.issues[0].message };
  const users = await readUsers();
  if (users.some((u) => u.username === parsed.data.username.toLowerCase()))
    return { error: 'That username already exists.' };
  const role: Role = String(fd.get('role')) === 'editor' ? 'editor' : 'admin';
  users.push({
    id: newId(),
    username: parsed.data.username.toLowerCase(),
    passwordHash: await hashPassword(parsed.data.password),
    role,
    createdAt: new Date().toISOString(),
  });
  await writeUsers(users);
  return { ok: true, savedAt: Date.now() };
}

export async function deleteUserAction(_prev: FormState, fd: FormData): Promise<FormState> {
  const me = await requireUser();
  if (me.role !== 'admin') return { error: 'Only admins can remove users.' };
  const id = String(fd.get('id') || '');
  const users = await readUsers();
  const target = users.find((u) => u.id === id);
  if (!target) return { error: 'User not found.' };
  if (target.role === 'admin' && users.filter((u) => u.role === 'admin').length <= 1)
    return { error: 'You cannot remove the last admin.' };
  await writeUsers(users.filter((u) => u.id !== id));
  return { ok: true, savedAt: Date.now() };
}

export async function changePasswordAction(_prev: FormState, fd: FormData): Promise<FormState> {
  const me = await requireUser();
  const pw = String(fd.get('password') || '');
  if (pw.length < 8) return { error: 'Password must be at least 8 characters.' };
  const users = await readUsers();
  const u = users.find((x) => x.id === me.sub);
  if (!u) return { error: 'User not found.' };
  u.passwordHash = await hashPassword(pw);
  await writeUsers(users);
  return { ok: true, savedAt: Date.now() };
}

/* -------------------------------- media --------------------------------- */

export async function uploadImageAction(_prev: FormState, fd: FormData): Promise<FormState> {
  await requireUser();
  const file = fd.get('file') as File | null;
  if (!file || file.size === 0) return { error: 'Choose an image to upload.' };
  const cloud = process.env.CLOUDINARY_CLOUD_NAME;
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;
  if (!cloud || !apiKey || !apiSecret)
    return { error: 'Image upload is not configured (Cloudinary env missing).' };

  const timestamp = Math.floor(Date.now() / 1000);
  const folder = 'eduplus';
  const toSign = `folder=${folder}&timestamp=${timestamp}`;
  const signature = crypto.createHash('sha1').update(toSign + apiSecret).digest('hex');

  const body = new FormData();
  body.append('file', file);
  body.append('api_key', apiKey);
  body.append('timestamp', String(timestamp));
  body.append('folder', folder);
  body.append('signature', signature);

  const res = await fetch(`https://api.cloudinary.com/v1_1/${cloud}/image/upload`, {
    method: 'POST',
    body,
  });
  if (!res.ok) return { error: `Upload failed (${res.status}).` };
  const json = (await res.json()) as { secure_url?: string };
  return { ok: true, url: json.secure_url, savedAt: Date.now() };
}
