// Centralized site configuration. All placeholders the client must confirm
// live here — change in one place and it propagates everywhere.

export const SITE = {
  name: 'Eduplus Individual Tuitions',
  tagline: 'Beyond Classroom',
  // PLACEHOLDER: replace with the real production domain (drives canonical/OG/sitemap).
  // Set NEXT_PUBLIC_SITE_URL in the environment to override without editing code.
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.eduplusashokapuram.com',
  phone: '+91 70123 70310',
  phoneRaw: '+917012370310',
  whatsappRaw: '917012370310',
  // PLACEHOLDER: add the real business email before launch (leave '' to hide it everywhere).
  email: '',
  addressShort: 'Ashokapuram, Kozhikode',
  addressFull:
    'Pootholi Building, behind Rajendra Hospital, Ashokapuram, Kozhikode, Kerala 673001',
  plusCode: '7Q8J+F3 Kozhikode',
  // Approximate — confirm exact pin from the Google Business Profile before launch.
  geo: { lat: 11.2481, lng: 75.7947 },
  mapsLink:
    'https://www.google.com/maps/search/?api=1&query=Eduplus+Individual+Tuitions+Ashokapuram+Kozhikode',
  mapsEmbed: 'https://www.google.com/maps?q=Ashokapuram+Kozhikode+Kerala&output=embed',
  // Single source of truth for hours — keep contact page + JSON-LD in sync with this.
  hours: 'Mon–Sat, 10 AM – 8 PM',
  hoursNote: 'Sunday by appointment',
  // Nearby Kozhikode localities we serve (local SEO). Confirm/extend with client.
  areas: ['Ashokapuram', 'Nadakkavu', 'Eranhipalam', 'Mankavu', 'Chevayur', 'Kozhikode city'],
  // From live Google/Justdial/Quickerala listings — CONFIRM before relying on them.
  foundedYear: '2015',
  ratingValue: '4.8',
  ratingCount: '26',
  waMsg: "Hi Eduplus, I'd like to know about your tuition programs.",
  social: {
    instagram: '#',
    facebook: '#',
    youtube: '#',
  },
  // Real third-party listings — used as sameAs for entity/SEO.
  listings: [
    'https://www.justdial.com/Kozhikode/Eduplus-Tuitions-Behind-Rajendra-Nursing-Home-Balan-K-Nair-Road-Kozhikode-HO/0495PX495-X495-211116145336-D9C3_BZDET',
    'https://www.quickerala.com/calicut/ashokapuram/eduplus/291423',
  ],
} as const;

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
  { label: 'Exam Prep', href: '/programs#exam-prep', key: 'exam' },
  { label: 'Why Eduplus', href: '/#why', key: 'why' },
  { label: 'Contact', href: '/contact', key: 'contact' },
];
