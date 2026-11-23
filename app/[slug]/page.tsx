import FaqItem from '@/components/FaqItem';
import type { Metadata } from 'next';
import { ONLINE_TUITION_LANGUAGE_URLS, pageMetadata } from '@/lib/metadata';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  BulbIcon,
  ChartIcon,
  CheckIcon,
  ClockIcon,
  CompassIcon,
  PinIcon,
  ShieldIcon,
  TargetIcon,
  UsersIcon,
} from '@/lib/icons';
import { jsonLd, SITE, breadcrumbLd, telLink, waLink, webPageLd } from '@/lib/site';
import { SEO_PAGES, getSeoPage } from '@/lib/seoPages';

// Local-SEO landing pages (localities + search intents). Only slugs listed in
// lib/seoPages.ts render — anything else 404s.
export const dynamicParams = false;

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return SEO_PAGES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getSeoPage(slug);
  if (!page) return {};
  return pageMetadata({
    title: page.title,
    description: page.description,
    path: `/${page.slug}`,
    imageTitle: page.ogTitle,
    imageSubtitle: page.ogSub,
    ...(slug === 'online-tuition-kerala' && { translations: ONLINE_TUITION_LANGUAGE_URLS }),
  });
}

// Six card icons cycled across the "why" points, matching the home page vibe.
const POINT_ICONS = [UsersIcon, BulbIcon, TargetIcon, ChartIcon, ShieldIcon, CompassIcon];
const POINT_ACCENTS = ['acc-blue', 'acc-yellow', 'acc-red', 'acc-green', 'acc-blue', 'acc-yellow'];

function AccentTitle({ text, accent }: { text: string; accent?: string }) {
  if (!accent || !text.includes(accent)) return <>{text}</>;
  const i = text.indexOf(accent);
  return (
    <>
      {text.slice(0, i)}
      <span className="underline-accent">{accent}</span>
      {text.slice(i + accent.length)}
    </>
  );
}

export default async function SeoLandingPage({ params }: Props) {
  const { slug } = await params;
  const page = getSeoPage(slug);
  if (!page) notFound();

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: page.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const serviceLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE.url}/${page.slug}#service`,
    name: page.serviceName,
    serviceType: 'Private academic tuition',
    description: page.description,
    provider: { '@id': `${SITE.url}/#organization` },
    areaServed: page.area
      ? { '@type': 'Place', name: `${page.area}, Kozhikode, Kerala` }
      : { '@type': 'State', name: 'Kerala, India' },
    availableLanguage: ['en', 'ml', 'hi'],
    url: `${SITE.url}/${page.slug}`,
  };

  // Cross-link siblings of the same kind (silo linking) — max 4.
  const siblings = SEO_PAGES.filter((p) => p.slug !== page.slug && p.kind === page.kind).slice(0, 4);

  return (
    <main id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(faqLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(serviceLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbLd(page.name, `/${page.slug}`)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(webPageLd(page.title, `/${page.slug}`, page.description)) }}
      />

      {/* PAGE HERO */}
      <section className="page-hero" data-screen-label={`${page.name} hero`}>
        <div className="container">
          <div className="crumbs">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span>{page.name}</span>
          </div>
          <div style={{ maxWidth: '820px' }}>
            <span className="eyebrow" style={{ color: 'var(--red)' }}>
              {page.eyebrow}
            </span>
            <h1 className="display" style={{ margin: '.6rem 0 1rem' }}>
              <AccentTitle text={page.h1} accent={page.accent} />
            </h1>
            <p className="lead">{page.lead}</p>
          </div>
          <div className="hero-chips" style={{ marginTop: '1.4rem' }}>
            {page.chips.map((c) => (
              <span key={c} className="chip">
                {c}
              </span>
            ))}
          </div>
          <div className="hero-cta" style={{ marginTop: '1.6rem' }}>
            <button className="btn btn-red btn-lg" data-open-modal data-subjects={page.name}>
              Book a Free Demo Class
            </button>
            <a className="btn btn-outline btn-lg" href={telLink}>
              Call {SITE.phone}
            </a>
            {slug === 'online-tuition-kerala' && (
              <Link href="/ml/online-tuition-kerala" className="btn btn-outline" lang="ml-IN" hrefLang="ml-IN">
                മലയാളത്തിൽ വായിക്കുക
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="section" data-screen-label={`${page.name} intro`}>
        <div className="container">
          <div className="prose" style={{ maxWidth: '820px' }}>
            {page.intro.map((p, i) => (
              <p key={i} style={{ marginBottom: '1.1rem' }}>
                {p}
              </p>
            ))}
            <div style={{ display: 'flex', gap: '.7rem', flexWrap: 'wrap', marginTop: '1.4rem' }}>
              <Link className="btn btn-blue" href="/programs">
                See all programs
              </Link>
              <Link className="btn btn-outline" href="/fees">
                Fee structure
              </Link>
              <a className="btn btn-green" href={waLink(`Hi Eduplus, I'm looking for ${page.name.toLowerCase()}.`)} target="_blank" rel="noopener noreferrer">
                WhatsApp us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WHY POINTS */}
      <section className="section" style={{ background: 'var(--soft)' }} data-screen-label={`${page.name} highlights`}>
        <div className="container">
          <div className="sh center">
            <span className="eyebrow" style={{ color: 'var(--blue)' }}>
              Why families pick Eduplus
            </span>
            <h2>
              What you <span className="underline-accent">get</span> here
            </h2>
          </div>
          <div className="feat-grid">
            {page.points.map((pt, i) => {
              const Icon = POINT_ICONS[i % POINT_ICONS.length];
              return (
                <article key={pt.title} className={`card card-hover feat ${POINT_ACCENTS[i % POINT_ACCENTS.length]}`}>
                  <span className="f-ico">
                    <Icon />
                  </span>
                  <h3>{pt.title}</h3>
                  <p>{pt.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* LOCATION / HOURS STRIP */}
      <section className="section" data-screen-label={`${page.name} visit`}>
        <div className="container">
          <div className="grev card">
            <h3 style={{ fontSize: 'clamp(1.3rem,2.6vw,1.7rem)' }}>
              {page.kind === 'locality'
                ? `Easy to reach — and easy to try`
                : `One centre, every way to learn`}
            </h3>
            <div className="grev-sub" style={{ display: 'flex', gap: '1.2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '.4rem' }}>
                <PinIcon /> {SITE.addressFull}
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '.4rem' }}>
                <ClockIcon /> {SITE.hours}
              </span>
            </div>
            <div style={{ display: 'flex', gap: '.7rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <a className="btn btn-blue" href={SITE.mapsLink} target="_blank" rel="noopener noreferrer">
                Get directions
              </a>
              <Link className="btn btn-outline" href="/contact">
                Contact & admissions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ background: 'var(--soft)' }} data-screen-label={`${page.name} FAQ`}>
        <div className="container">
          <div className="sh center">
            <span className="eyebrow" style={{ color: 'var(--blue)' }}>
              Questions
            </span>
            <h2>
              {page.name}, <span className="underline-accent">answered</span>
            </h2>
          </div>
          <div className="faq">
            {page.faqs.map((f, i) => (
              <FaqItem key={i} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
      </section>

      {/* RELATED PAGES */}
      {siblings.length > 0 && (
        <section className="section" data-screen-label="Related pages">
          <div className="container">
            <div className="sh center">
              <span className="eyebrow" style={{ color: 'var(--green-600)' }}>
                {page.kind === 'locality' ? 'Nearby areas' : 'More courses'}
              </span>
              <h2>
                Also <span className="underline-accent">explore</span>
              </h2>
            </div>
            <div className="area-chips">
              {siblings.map((s) => (
                <Link key={s.slug} href={`/${s.slug}`} className="area-chip">
                  <CheckIcon /> {s.name}
                </Link>
              ))}
              <Link href="/exam-prep" className="area-chip">
                <TargetIcon /> Exam-target batches
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* FINAL CTA */}
      <section className="section final" data-screen-label="Final CTA">
        <span className="deco d1" />
        <span className="deco d2" />
        <div className="container">
          <h2>Start with a free demo class.</h2>
          <p>Tell us the class and board — we&apos;ll set up a no-obligation demo, online or at the centre.</p>
          <div className="final-cta">
            <button className="btn btn-red btn-lg" data-open-modal data-subjects={page.name}>
              Book a Free Demo
            </button>
            <a className="btn btn-outline btn-lg" href={telLink}>
              Call {SITE.phone}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
