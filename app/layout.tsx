import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans, Inter, Baloo_2 } from 'next/font/google';
import './globals.css';
import SiteChrome from '@/components/SiteChrome';
import Interactions from '@/components/Interactions';
import IntroSplash from '@/components/IntroSplash';
import { SITE } from '@/lib/site';

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
  metadataBase: new URL(SITE.url),
  title: {
    default: 'Individual Tuition LKG–12, Ashokapuram Kozhikode | Eduplus',
    template: '%s | Eduplus Individual Tuitions',
  },
  description:
    'One-to-one & individual tuition for LKG–Class 12 in Ashokapuram, Kozhikode — online & offline. Kerala State, CBSE & ICSE. Board & exam-target batches (SSLC, +1, +2, half-yearly). Since 2015. Book a free demo class.',
  applicationName: SITE.name,
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  publisher: SITE.name,
  category: 'education',
  keywords: [
    'individual tuition Ashokapuram',
    'one to one tuition Kozhikode',
    'online tuition Kozhikode',
    'home tuition Calicut',
    'SSLC tuition Kozhikode',
    'Plus One Plus Two tuition Kozhikode',
    'CBSE tuition Ashokapuram',
    'ICSE tuition Kozhikode',
    'Kerala State syllabus tuition',
    'board exam coaching Kozhikode',
    'LKG to 12 tuition Kozhikode',
    'Eduplus Individual Tuitions',
  ],
  alternates: { canonical: '/' },
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
  openGraph: {
    type: 'website',
    url: SITE.url,
    siteName: SITE.name,
    title: 'Eduplus — One-to-One Tuition LKG to Plus Two, Kozhikode',
    description:
      'Personalised 1-to-1 tuition for LKG–12 in Ashokapuram, Kozhikode. Online & offline. Board & exam-target batches. Rated 4.8★. Book a free demo class.',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eduplus Individual Tuitions — Beyond Classroom',
    description:
      'One-to-one tuition LKG–12 in Kozhikode. Online & offline. Board & exam-focused batches. Book a free demo.',
  },
  formatDetection: { telephone: true, address: true, email: true },
  verification: process.env.NEXT_PUBLIC_GSC_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION }
    : undefined,
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
              '@graph': [
                {
                  '@type': ['EducationalOrganization', 'LocalBusiness'],
                  '@id': `${SITE.url}/#organization`,
                  name: SITE.name,
                  alternateName: 'Eduplus — Beyond Classroom',
                  url: SITE.url,
                  description:
                    'Individual, one-to-one tuition for LKG to Class 12 (Plus Two) in Ashokapuram, Kozhikode — online and offline. Kerala State, CBSE and ICSE, with board and exam-target coaching.',
                  slogan: SITE.tagline,
                  telephone: SITE.phoneRaw,
                  ...(SITE.email ? { email: SITE.email } : {}),
                  foundingDate: SITE.foundedYear,
                  priceRange: '₹₹',
                  image: `${SITE.url}/opengraph-image`,
                  logo: `${SITE.url}/logo`,
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
                  geo: {
                    '@type': 'GeoCoordinates',
                    latitude: SITE.geo.lat,
                    longitude: SITE.geo.lng,
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
                      dayOfWeek: [
                        'Monday',
                        'Tuesday',
                        'Wednesday',
                        'Thursday',
                        'Friday',
                        'Saturday',
                      ],
                      opens: '10:00',
                      closes: '20:00',
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
                    'Half-yearly exam coaching',
                  ],
                  availableLanguage: ['en', 'ml', 'hi'],
                  sameAs: SITE.listings,
                  aggregateRating: {
                    '@type': 'AggregateRating',
                    ratingValue: SITE.ratingValue,
                    reviewCount: SITE.ratingCount,
                    bestRating: '5',
                    worstRating: '1',
                  },
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
        <IntroSplash />
        <SiteChrome>{children}</SiteChrome>
        <Interactions />
      </body>
    </html>
  );
}
