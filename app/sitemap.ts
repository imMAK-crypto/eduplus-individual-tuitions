import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';
import { SEO_PAGES } from '@/lib/seoPages';
import { GUIDES, GUIDES_UPDATED } from '@/lib/guides';
import { LOCALIZED_PATHS, languageUrls } from '@/lib/metadata';

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    '/', '/programs', '/exam-prep', '/counselling', '/fees', '/why', '/about', '/contact',
    '/privacy', '/guides',
    ...SEO_PAGES.map(({ slug }) => `/${slug}`),
  ];

  return [
    ...paths.flatMap((path) => {
      if (!LOCALIZED_PATHS.includes(path)) return [{ url: `${SITE.url}${path}` }];
      const languages = languageUrls(path);
      return [languages['en-IN'], languages['ml-IN']].map((url) => ({
        url,
        alternates: { languages },
      }));
    }),
    ...GUIDES.map(({ slug }) => ({
      url: `${SITE.url}/guides/${slug}`,
      lastModified: GUIDES_UPDATED,
    })),
  ];
}
