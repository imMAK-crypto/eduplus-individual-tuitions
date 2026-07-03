// Tiny in-memory rate limiter (per server instance). Good enough to blunt
// brute-force login attempts on a small single-tenant admin.
const hits = new Map<string, { count: number; ts: number }>();

export function rateLimit(key: string, max = 5, windowMs = 15 * 60 * 1000) {
  const now = Date.now();
  const e = hits.get(key);
  if (!e || now - e.ts > windowMs) {
    hits.set(key, { count: 1, ts: now });
    return { ok: true, remaining: max - 1, retryMs: 0 };
  }
  e.count++;
  if (e.count > max) return { ok: false, remaining: 0, retryMs: windowMs - (now - e.ts) };
  return { ok: true, remaining: max - e.count, retryMs: 0 };
}

export function resetRateLimit(key: string) {
  hits.delete(key);
}
