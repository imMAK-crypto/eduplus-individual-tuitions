// Edge-safe session token helpers (jose only — no Node APIs), so both the
// middleware (edge) and server actions (node) can share them.
import { SignJWT, jwtVerify } from 'jose';

export const SESSION_COOKIE = 'eduplus_admin';

export type Role = 'admin' | 'editor';
export type SessionPayload = { sub: string; username: string; role: Role };

function secret() {
  return new TextEncoder().encode(
    process.env.AUTH_SECRET || 'dev-insecure-secret-please-set-AUTH_SECRET'
  );
}

export async function signSession(payload: SessionPayload): Promise<string> {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(secret());
}

export async function verifySession(token: string): Promise<SessionPayload | null> {
  try {
    const { payload } = await jwtVerify(token, secret());
    return { sub: String(payload.sub), username: String(payload.username), role: payload.role as Role };
  } catch {
    return null;
  }
}
