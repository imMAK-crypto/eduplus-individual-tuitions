import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.name,
    short_name: 'Eduplus',
    description:
      'One-to-one tuition for LKG–Class 12 in Ashokapuram, Kozhikode — online & offline, board & exam-target coaching.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0563CE',
    lang: 'en-IN',
    categories: ['education'],
    icons: [
      { src: '/icon', sizes: '64x64', type: 'image/png', purpose: 'any' },
    ],
  };
}
