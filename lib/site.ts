// Global site configuration — now sourced from content/site.json so it is
// fully editable from the admin panel. Derived helpers stay in code.
import siteJson from '@/content/site.json';

export const SITE = siteJson;

export const waLink = (msg?: string) =>
  `https://wa.me/${SITE.whatsappRaw}?text=${encodeURIComponent(msg || SITE.waMsg)}`;

export const telLink = `tel:${SITE.phoneRaw}`;

// Years active, computed from the founding year so copy never goes stale.
export const YEARS_ACTIVE = new Date().getFullYear() - Number(SITE.foundedYear);

export const CONTENT_UPDATED = '2026-11-23';

export function webPageLd(name: string, path: string, description: string, language = 'en-IN') {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${SITE.url}${path}#webpage`,
    url: `${SITE.url}${path}`,
    name,
    description,
    inLanguage: language,
    isPartOf: { '@id': `${SITE.url}/#website` },
    about: { '@id': `${SITE.url}/#organization` },
  };
}

// Per-page OG image via the /og route (title + optional subline).
export function ogImage(title: string, sub?: string) {
  const q = new URLSearchParams({ title, ...(sub ? { sub } : {}) });
  return [{ url: `/og?${q.toString()}`, width: 1200, height: 630, alt: title }];
}

// Social profiles that are actually filled in (admin may leave '#' placeholders).
export function realSocials(): string[] {
  return Object.values(SITE.social).filter(isProfileUrl);
}

export function isProfileUrl(value: string): boolean {
  try {
    const url = new URL(value);
    return url.protocol === 'https:' && !url.username && !url.password;
  } catch {
    return false;
  }
}

export function jsonLd(value: object): string {
  return JSON.stringify(value).replace(/</g, '\\u003c');
}

// BreadcrumbList JSON-LD for an interior page (Home › <name>).
export function breadcrumbLd(name: string, path: string, parent?: { name: string; path: string }) {
  const entries = [{ name: 'Home', path: '/' }, ...(parent ? [parent] : []), { name, path }];
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: entries.map((entry, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: entry.name,
      item: `${SITE.url}${entry.path}`,
    })),
  };
}

// Strict Indian mobile validation: exactly 10 digits starting 6–9,
// tolerating a leading 0 or +91 country code. Rejects 11+ digit junk.
export function validIndianPhone(raw: string): boolean {
  const digits = (raw || '').replace(/\D/g, '').replace(/^0+/, '');
  const local = digits.length === 12 && digits.startsWith('91') ? digits.slice(2) : digits;
  return /^[6-9]\d{9}$/.test(local);
}

export type NavKey =
  | 'home'
  | 'about'
  | 'programs'
  | 'exam'
  | 'counselling'
  | 'fees'
  | 'why'
  | 'results'
  | 'contact';

export const NAV: { label: string; href: string; key: NavKey }[] = [
  { label: 'Home', href: '/', key: 'home' },
  { label: 'About', href: '/about', key: 'about' },
  { label: 'Programs', href: '/programs', key: 'programs' },
  { label: 'Exam Prep', href: '/exam-prep', key: 'exam' },
  { label: 'Counselling', href: '/counselling', key: 'counselling' },
  { label: 'Fees', href: '/fees', key: 'fees' },
  { label: 'Why Eduplus', href: '/why', key: 'why' },
  { label: 'Contact', href: '/contact', key: 'contact' },
];
