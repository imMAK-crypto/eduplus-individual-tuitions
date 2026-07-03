// Global site configuration — now sourced from content/site.json so it is
// fully editable from the admin panel. Derived helpers stay in code.
import siteJson from '@/content/site.json';

export const SITE = {
  ...siteJson,
  // env override lets prod point at the real domain without editing content
  url: process.env.NEXT_PUBLIC_SITE_URL || siteJson.url,
};

export const waLink = (msg?: string) =>
  `https://wa.me/${SITE.whatsappRaw}?text=${encodeURIComponent(msg || SITE.waMsg)}`;

export const telLink = `tel:${SITE.phoneRaw}`;

// Years active, computed from the founding year so copy never goes stale.
export const YEARS_ACTIVE = new Date().getFullYear() - Number(SITE.foundedYear);

// BreadcrumbList JSON-LD for an interior page (Home › <name>).
export function breadcrumbLd(name: string, path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
      { '@type': 'ListItem', position: 2, name, item: `${SITE.url}${path}` },
    ],
  };
}

// Strict Indian mobile validation: exactly 10 digits starting 6–9,
// tolerating a leading 0 or +91 country code. Rejects 11+ digit junk.
export function validIndianPhone(raw: string): boolean {
  const digits = (raw || '').replace(/\D/g, '').replace(/^0+/, '');
  const local = digits.length === 12 && digits.startsWith('91') ? digits.slice(2) : digits;
  return /^[6-9]\d{9}$/.test(local);
}

export type NavKey = 'home' | 'about' | 'programs' | 'exam' | 'why' | 'results' | 'contact';

export const NAV: { label: string; href: string; key: NavKey }[] = [
  { label: 'Home', href: '/', key: 'home' },
  { label: 'About', href: '/about', key: 'about' },
  { label: 'Programs', href: '/programs', key: 'programs' },
  { label: 'Exam Prep', href: '/exam-prep', key: 'exam' },
  { label: 'Why Eduplus', href: '/why', key: 'why' },
  { label: 'Contact', href: '/contact', key: 'contact' },
];
