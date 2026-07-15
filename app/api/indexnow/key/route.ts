// Serves the IndexNow key file. IndexNow validates ownership by fetching this
// URL (we pass it as keyLocation when pinging api.indexnow.org).
export function GET() {
  const key = process.env.INDEXNOW_KEY;
  if (!key) return new Response('IndexNow not configured', { status: 404 });
  return new Response(key, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
