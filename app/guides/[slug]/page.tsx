import Link from 'next/link';
import { notFound } from 'next/navigation';
import { GUIDES, GUIDES_UPDATED } from '@/lib/guides';
import { pageMetadata } from '@/lib/metadata';
import { SITE, breadcrumbLd, jsonLd } from '@/lib/site';

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return GUIDES.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const guide = GUIDES.find((entry) => entry.slug === slug);
  if (!guide) notFound();
  return pageMetadata({ title: guide.title, description: guide.description, path: `/guides/${slug}` });
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = GUIDES.find((entry) => entry.slug === slug);
  if (!guide) notFound();
  const path = `/guides/${slug}`;
  const article = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: guide.title,
    description: guide.description,
    mainEntityOfPage: `${SITE.url}${path}`,
    inLanguage: 'en-IN',
    author: { '@type': 'Organization', '@id': `${SITE.url}/#organization`, name: SITE.name },
    publisher: { '@id': `${SITE.url}/#organization` },
    datePublished: GUIDES_UPDATED,
    citation: guide.sources.map(({ url }) => url),
  };

  return (
    <main id="main">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbLd(guide.title, path, { name: 'Guides', path: '/guides' })) }} />
      <article>
        <header className="page-hero">
          <div className="container">
            <div className="crumbs">
              <Link href="/">Home</Link><span className="sep">/</span><Link href="/guides">Guides</Link>
              <span className="sep">/</span><span>{guide.title}</span>
            </div>
            <h1 className="display">{guide.title}</h1>
            <p className="lead" style={{ marginTop: '1rem' }}>{guide.description}</p>
            <p>By Eduplus Individual Tuitions · <time dateTime={GUIDES_UPDATED}>23 November 2026</time></p>
          </div>
        </header>
        <div className="section container">
          <div className="legal prose">
            {guide.sections.map(({ heading, paragraphs, list }) => (
              <section key={heading}>
                <h2>{heading}</h2>
                {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {list && <ul className="bullets">{list.map((item) => <li key={item}>{item}</li>)}</ul>}
              </section>
            ))}
            <h2>Official sources</h2>
            <ul className="bullets">
              {guide.sources.map(({ label, url }) => <li key={url}><a href={url}>{label}</a></li>)}
            </ul>
            <h2>Related resources</h2>
            <ul className="bullets">
              <li><Link href={guide.related.href}>{guide.related.label}</Link></li>
              {GUIDES.filter((entry) => entry.slug !== slug).map((entry) => (
                <li key={entry.slug}><Link href={`/guides/${entry.slug}`}>{entry.title}</Link></li>
              ))}
            </ul>
          </div>
        </div>
      </article>
    </main>
  );
}
