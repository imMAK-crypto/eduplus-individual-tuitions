import type { Metadata } from 'next';
import { SITE, ogImage } from '@/lib/site';

export const ONLINE_TUITION_LANGUAGE_URLS = {
  'en-IN': `${SITE.url}/online-tuition-kerala`,
  'ml-IN': `${SITE.url}/ml/online-tuition-kerala`,
  'x-default': `${SITE.url}/online-tuition-kerala`,
};

type PageMetadata = {
  title: string;
  description: string;
  path: string;
  imageTitle?: string;
  imageSubtitle?: string;
  language?: 'en-IN' | 'ml-IN';
  translations?: Record<string, string>;
};

export function pageMetadata({
  title, description, path, imageTitle, imageSubtitle, language = 'en-IN', translations,
}: PageMetadata): Metadata {
  const socialTitle = `${title} | Eduplus`;
  const images = imageTitle ? ogImage(imageTitle, imageSubtitle) : [{
    url: '/opengraph-image',
    width: 1200,
    height: 630,
    alt: SITE.name,
  }];

  return {
    title,
    description,
    alternates: { canonical: `${SITE.url}${path}`, languages: translations },
    openGraph: {
      type: 'website',
      title: socialTitle,
      description,
      url: `${SITE.url}${path}`,
      siteName: SITE.name,
      locale: language.replace('-', '_'),
      images,
    },
    twitter: { card: 'summary_large_image', title: socialTitle, description, images },
  };
}
