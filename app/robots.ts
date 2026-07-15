import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';

const PRIVATE = ['/admin', '/phone-showcase', '/api'];

// AI/answer-engine crawlers, explicitly welcomed so the business can be cited
// in AI Overviews, ChatGPT, Claude, Perplexity, Copilot etc. (AEO).
const AI_BOTS = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-Web',
  'anthropic-ai',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'Applebot',
  'Applebot-Extended',
  'Bingbot',
  'DuckAssistBot',
  'meta-externalagent',
  'Amazonbot',
  'CCBot',
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: PRIVATE },
      ...AI_BOTS.map((bot) => ({ userAgent: bot, allow: '/', disallow: PRIVATE })),
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
