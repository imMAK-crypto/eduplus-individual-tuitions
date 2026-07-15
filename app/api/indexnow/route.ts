import { SITE } from '@/lib/site';
import { SEO_PAGES } from '@/lib/seoPages';

// Pings IndexNow (Bing, and via it Copilot/ChatGPT search indexing) with every
// public URL. Run after each deploy / content change:
//   curl -X POST https://eduplustuitions.in/api/indexnow -H "x-indexnow-secret: $INDEXNOW_KEY"
export async function POST(req: Request) {
  const key = process.env.INDEXNOW_KEY;
  if (!key) {
    return Response.json({ error: 'INDEXNOW_KEY not configured' }, { status: 503 });
  }
  if (req.headers.get('x-indexnow-secret') !== key) {
    return Response.json({ error: 'unauthorized' }, { status: 401 });
  }

  const staticPaths = ['/', '/programs', '/exam-prep', '/fees', '/why', '/about', '/contact', '/privacy'];
  const urlList = [...staticPaths, ...SEO_PAGES.map((p) => `/${p.slug}`)].map(
    (p) => `${SITE.url}${p === '/' ? '' : p}`
  );

  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      host: new URL(SITE.url).host,
      key,
      keyLocation: `${SITE.url}/api/indexnow/key`,
      urlList,
    }),
  });

  return Response.json({ submitted: urlList.length, indexnowStatus: res.status });
}
