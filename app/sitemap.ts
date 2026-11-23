import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';
import { SEO_PAGES } from '@/lib/seoPages';
import { GUIDES, GUIDES_UPDATED } from '@/lib/guides';
import { ONLINE_TUITION_LANGUAGE_URLS } from '@/lib/metadata';

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    '/', '/programs', '/exam-prep', '/counselling', '/fees', '/why', '/about', '/contact',
    '/privacy', '/guides', '/ml/online-tuition-kerala',
    ...SEO_PAGES.map(({ slug }) => `/${slug}`),
  ];

  return [
    ...paths.map((path) => {
      const url = `${SITE.url}${path}`;
      return {
        url,
        ...(Object.values(ONLINE_TUITION_LANGUAGE_URLS).includes(url) && {
          alternates: { languages: ONLINE_TUITION_LANGUAGE_URLS },
        }),
      };
    }),
    ...GUIDES.map(({ slug }) => ({
      url: `${SITE.url}/guides/${slug}`,
      lastModified: GUIDES_UPDATED,
    })),
  ];
}
