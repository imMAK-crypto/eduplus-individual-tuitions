// Centralized site configuration. All placeholders the client must confirm
// live here — change in one place and it propagates everywhere.

export const SITE = {
  name: 'Eduplus Individual Tuitions',
  tagline: 'Beyond Classroom',
  phone: '+91 70123 70310',
  phoneRaw: '+917012370310',
  whatsappRaw: '917012370310',
  email: 'hello@eduplus.example',
  addressShort: 'Ashokapuram, Kozhikode',
  addressFull:
    'Pootholi Building, behind Rajendra Hospital, Ashokapuram, Kozhikode, Kerala 673001',
  plusCode: '7Q8J+F3 Kozhikode',
  mapsLink:
    'https://www.google.com/maps/search/?api=1&query=Eduplus+Individual+Tuitions+Ashokapuram+Kozhikode',
  mapsEmbed: 'https://www.google.com/maps?q=Ashokapuram+Kozhikode+Kerala&output=embed',
  hours: 'Opens 10:00 AM daily',
  waMsg: "Hi Eduplus, I'd like to know about your tuition programs.",
  social: {
    instagram: '#',
    facebook: '#',
    youtube: '#',
  },
} as const;

export const waLink = (msg?: string) =>
  `https://wa.me/${SITE.whatsappRaw}?text=${encodeURIComponent(msg || SITE.waMsg)}`;

export const telLink = `tel:${SITE.phoneRaw}`;

export type NavKey = 'home' | 'about' | 'programs' | 'why' | 'results' | 'contact';

export const NAV: { label: string; href: string; key: NavKey }[] = [
  { label: 'Home', href: '/', key: 'home' },
  { label: 'About', href: '/about', key: 'about' },
  { label: 'Programs', href: '/programs', key: 'programs' },
  { label: 'Why Eduplus', href: '/#why', key: 'why' },
  { label: 'Results', href: '/#results', key: 'results' },
  { label: 'Contact', href: '/contact', key: 'contact' },
];
