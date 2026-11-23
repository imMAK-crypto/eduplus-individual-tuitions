import Link from 'next/link';
import { GUIDES } from '@/lib/guides';
import { pageMetadata } from '@/lib/metadata';
import { breadcrumbLd, jsonLd } from '@/lib/site';

const TITLE = 'Kerala Exam & Study Guides';
const DESCRIPTION = 'Practical guides for Kerala students and families on SSLC revision, Plus Two SAY and Improvement exams, and choosing a Plus One stream.';

export const metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: '/guides' });

export default function GuidesPage() {
  return (
    <main id="main">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbLd('Guides', '/guides')) }} />
      <section className="page-hero">
        <div className="container">
          <div className="crumbs"><Link href="/">Home</Link><span className="sep">/</span><span>Guides</span></div>
          <h1 className="display">{TITLE}</h1>
          <p className="lead" style={{ marginTop: '1rem' }}>{DESCRIPTION}</p>
        </div>
      </section>
      <section className="section">
        <div className="container stage-grid">
          {GUIDES.map((guide) => (
            <article className="card stage-card" key={guide.slug}>
              <h2><Link href={`/guides/${guide.slug}`}>{guide.title}</Link></h2>
              <p>{guide.description}</p>
              <Link className="enquire" href={`/guides/${guide.slug}`} aria-label={`Read: ${guide.title}`}>Read guide</Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
