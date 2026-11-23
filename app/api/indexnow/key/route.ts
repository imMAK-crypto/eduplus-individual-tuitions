export function GET(req: Request) {
  const key = process.env.INDEXNOW_KEY;
  // Next routes the root verification filename here. Rewrites preserve the requested URL.
  if (!key || new URL(req.url).pathname !== `/${key}.txt`) {
    return new Response('Not found', { status: 404 });
  }
  return new Response(key, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'X-Robots-Tag': 'noindex',
    },
  });
}
