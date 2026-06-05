import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans, Inter, Baloo_2 } from 'next/font/google';
import './globals.css';
import SiteChrome from '@/components/SiteChrome';
import Interactions from '@/components/Interactions';
import IntroSplash from '@/components/IntroSplash';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-jakarta',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
  variable: '--font-inter',
});

const baloo = Baloo_2({
  subsets: ['latin'],
  weight: ['700', '800'],
  display: 'swap',
  variable: '--font-baloo',
});

export const metadata: Metadata = {
  title: {
    default: 'Eduplus Individual Tuitions | Personal Tuition in Ashokapuram, Kozhikode',
    template: '%s | Eduplus Individual Tuitions',
  },
  description:
    'Personalised, individual & small-group tuition for Class 1–12 in Ashokapuram, Kozhikode. Kerala State, CBSE & ICSE. One-to-one attention, doubt-clearing, board-exam focus. Book a free demo.',
  openGraph: {
    title: 'Eduplus Individual Tuitions — Beyond Classroom',
    description: 'Personalised tuition for Class 1–12 in Kozhikode. Book a free demo class.',
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: '#0563CE',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${inter.variable} ${baloo.variable}`}
    >
      <head>
        {/* Hide intro splash pre-hydration if already shown this session */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(sessionStorage.getItem('eduplus-intro-shown'))document.documentElement.classList.add('no-intro')}catch(e){}`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'EducationalOrganization',
              name: 'Eduplus Individual Tuitions',
              alternateName: 'Eduplus — Beyond Classroom',
              telephone: '+91-70123-70310',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Pootholi Building, behind Rajendra Hospital, Ashokapuram',
                addressLocality: 'Kozhikode',
                addressRegion: 'Kerala',
                postalCode: '673001',
                addressCountry: 'IN',
              },
              openingHours: 'Mo-Su 10:00-20:00',
              areaServed: 'Kozhikode',
            }),
          }}
        />
      </head>
      <body>
        <IntroSplash />
        <SiteChrome>{children}</SiteChrome>
        <Interactions />
      </body>
    </html>
  );
}
