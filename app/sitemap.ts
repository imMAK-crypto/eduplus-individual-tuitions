import type { MetadataRoute } from 'next';
import { SITE, CONTENT_UPDATED } from '@/lib/site';
import { SEO_PAGES } from '@/lib/seoPages';

export default function sitemap(): MetadataRoute.Sitemap {
  // Bump CONTENT_UPDATED (lib/site.ts) when page copy meaningfully changes —
  // a stable date is a truthful freshness signal, unlike new Date() per build.
  const lastModified = new Date(CONTENT_UPDATED);

  const routes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] }[] = [
    { path: '/', priority: 1.0, changeFrequency: 'weekly' },
    { path: '/programs', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/exam-prep', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/fees', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/why', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/about', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/contact', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/privacy', priority: 0.3, changeFrequency: 'yearly' },
    // Local-SEO landing pages (localities + search intents)
    ...SEO_PAGES.map((p) => ({
      path: `/${p.slug}`,
      priority: p.kind === 'intent' ? 0.8 : 0.7,
      changeFrequency: 'monthly' as const,
    })),
  ];

  return routes.map((r) => ({
    url: `${SITE.url}${r.path}`,
    lastModified,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
