import type { Metadata, Viewport } from 'next';
import './globals.css';
import SiteChrome from '@/components/SiteChrome';
import Interactions from '@/components/Interactions';

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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Inter:wght@400;500;600&family=Baloo+2:wght@700;800&display=swap"
          rel="stylesheet"
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
        <SiteChrome>{children}</SiteChrome>
        <Interactions />
      </body>
    </html>
  );
}
