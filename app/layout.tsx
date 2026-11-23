import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans, Inter, Baloo_2 } from 'next/font/google';
import './globals.css';
import SiteChrome from '@/components/SiteChrome';
import Interactions from '@/components/Interactions';
import SiteAnalytics from '@/components/SiteAnalytics';
import { GA_ID } from '@/lib/analytics';
import { jsonLd, SITE, realSocials } from '@/lib/site';
import { pageMetadata } from '@/lib/metadata';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: 'variable',
  display: 'swap',
  variable: '--font-jakarta',
});

const inter = Inter({
  subsets: ['latin'],
  weight: 'variable',
  display: 'swap',
  variable: '--font-inter',
});

const baloo = Baloo_2({
  subsets: ['latin'],
  weight: 'variable',
  preload: false,
  display: 'swap',
  variable: '--font-baloo',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  ...pageMetadata({
    title: 'One-to-One Tuition in Kozhikode',
    description: 'Book a free demo for one-to-one tuition in Ashokapuram, Kozhikode. LKG to Class 12, Kerala State, CBSE and ICSE, at the centre or live online.',
    path: '/',
  }),
  title: {
    default: 'One-to-One Tuition in Kozhikode | Eduplus',
    template: '%s | Eduplus',
  },
  applicationName: SITE.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  verification: {
    ...(process.env.NEXT_PUBLIC_GSC_VERIFICATION && { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION }),
    ...(process.env.NEXT_PUBLIC_BING_VERIFICATION && {
      other: { 'msvalidate.01': process.env.NEXT_PUBLIC_BING_VERIFICATION },
    }),
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
      lang="en-IN"
      className={`${jakarta.variable} ${inter.variable} ${baloo.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: jsonLd({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': ['EducationalOrganization', 'LocalBusiness'],
                  '@id': `${SITE.url}/#organization`,
                  name: SITE.name,
                  alternateName: 'Eduplus — Beyond Classroom',
                  url: SITE.url,
                  description:
                    'Individual, one-to-one tuition for LKG to Class 12 (Plus Two) in Ashokapuram, Kozhikode — online and offline. Kerala State, CBSE and ICSE, with board, SAY and Improvement exam coaching plus exam assistance.',
                  slogan: SITE.tagline,
                  telephone: SITE.phoneRaw,
                  ...(SITE.email ? { email: SITE.email } : {}),
                  foundingDate: SITE.foundedYear,
                  image: `${SITE.url}/opengraph-image`,
                  logo: {
                    '@type': 'ImageObject',
                    url: `${SITE.url}/logo`,
                    width: 256,
                    height: 256,
                  },
                  contactPoint: {
                    '@type': 'ContactPoint',
                    telephone: SITE.phoneRaw,
                    contactType: 'admissions',
                    areaServed: 'IN',
                    availableLanguage: ['en', 'ml', 'hi'],
                  },
                  address: {
                    '@type': 'PostalAddress',
                    streetAddress: 'Pootholi Building, behind Rajendra Hospital, Ashokapuram',
                    addressLocality: 'Kozhikode',
                    addressRegion: 'Kerala',
                    postalCode: '673001',
                    addressCountry: 'IN',
                  },
                  hasMap: SITE.mapsLink,
                  areaServed: [
                    { '@type': 'City', name: 'Kozhikode' },
                    { '@type': 'City', name: 'Calicut' },
                    ...SITE.areas.map((a) => ({ '@type': 'Place', name: a })),
                  ],
                  openingHoursSpecification: [
                    {
                      '@type': 'OpeningHoursSpecification',
                      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                      opens: '14:00',
                      closes: '19:00',
                    },
                    {
                      '@type': 'OpeningHoursSpecification',
                      dayOfWeek: ['Saturday', 'Sunday'],
                      opens: '07:00',
                      closes: '18:30',
                    },
                  ],
                  knowsAbout: [
                    'One-to-one tuition',
                    'Online tuition',
                    'CBSE',
                    'ICSE',
                    'Kerala State syllabus',
                    'SSLC board exam',
                    'Plus One',
                    'Plus Two',
                    'Board exam preparation',
                    'SAY exam coaching',
                    'Improvement exam coaching',
                    'Half-yearly exam coaching',
                    'Student counselling',
                    'Exam stress and anxiety support',
                    'Career guidance after SSLC and Plus Two',
                  ],
                  availableLanguage: ['en', 'ml', 'hi'],
                  sameAs: [...SITE.listings, ...realSocials()],
                  hasOfferCatalog: {
                    '@type': 'OfferCatalog',
                    name: 'Tuition programs',
                    itemListElement: [
                      {
                        '@type': 'Offer',
                        itemOffered: {
                          '@type': 'Service',
                          name: 'Foundation tuition (LKG – Class 7)',
                          description:
                            'One-to-one and small-batch tuition in all subjects for LKG to Class 7 — online and offline.',
                        },
                      },
                      {
                        '@type': 'Offer',
                        itemOffered: {
                          '@type': 'Service',
                          name: 'High school & SSLC tuition (Class 8 – 10)',
                          description:
                            'Board-focused coaching for Class 8 to 10 with exam technique, revision and model papers — online and offline.',
                        },
                      },
                      {
                        '@type': 'Offer',
                        itemOffered: {
                          '@type': 'Service',
                          name: 'Plus One & Plus Two tuition (Class 11 & 12)',
                          description:
                            'Science, Commerce and Humanities subject coaching for Plus One and Plus Two — online and offline.',
                        },
                      },
                      {
                        '@type': 'Offer',
                        itemOffered: {
                          '@type': 'Service',
                          name: 'Exam-target batches (Class 10 onwards)',
                          description:
                            'Short, intensive batches timed to board (SSLC, +1, +2), half-yearly and term exams — revision, previous-year papers and daily doubt-clearing.',
                        },
                      },
                      {
                        '@type': 'Offer',
                        itemOffered: {
                          '@type': 'Service',
                          name: 'SAY & Improvement exam classes (Plus One & Plus Two)',
                          description:
                            'Dedicated SAY (Save A Year) and Improvement exam coaching for Plus One and Plus Two, with exam assistance — Mon–Fri 2 PM–7 PM, Sat & Sun 7 AM–6:30 PM.',
                        },
                      },
                      {
                        '@type': 'Offer',
                        itemOffered: {
                          '@type': 'Service',
                          '@id': `${SITE.url}/counselling#service`,
                          name: 'Student counselling & career guidance',
                          description:
                            'Counselling and guidance for students facing academic stress, exam anxiety, low confidence or motivation, study difficulties, emotional or behavioural concerns, plus career guidance and personal development.',
                          url: `${SITE.url}/counselling`,
                        },
                      },
                    ],
                  },
                },
                {
                  '@type': 'WebSite',
                  '@id': `${SITE.url}/#website`,
                  url: SITE.url,
                  name: SITE.name,
                  inLanguage: 'en-IN',
                  publisher: { '@id': `${SITE.url}/#organization` },
                },
              ],
            }),
          }}
        />
      </head>
      <body>
        <SiteChrome>{children}</SiteChrome>
        <Interactions />
        {GA_ID && <SiteAnalytics />}
      </body>
    </html>
  );
}
