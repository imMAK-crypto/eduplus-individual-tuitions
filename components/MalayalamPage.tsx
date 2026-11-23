import type { ReactNode } from 'react';
import Link from 'next/link';
import { languageUrls, pageMetadata } from '@/lib/metadata';
import { breadcrumbLd, jsonLd, webPageLd } from '@/lib/site';

type LocalizedPage = { title: string; description: string; englishPath: string };

export function malayalamMetadata({ title, description, englishPath }: LocalizedPage) {
  return pageMetadata({
    title,
    description,
    path: localizedPath(englishPath),
    language: 'ml-IN',
    translations: languageUrls(englishPath),
  });
}

function localizedPath(englishPath: string) {
  return englishPath === '/' ? '/ml' : `/ml${englishPath}`;
}

export default function MalayalamPage({
  title, description, englishPath, actions, children,
}: LocalizedPage & { actions?: ReactNode; children: ReactNode }) {
  const path = localizedPath(englishPath);
  return (
    <main id="main" lang="ml-IN">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(webPageLd(title, path, description, 'ml-IN')) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbLd(title, path)) }} />
      <section className="page-hero">
        <div className="container">
          {englishPath !== '/' && <div className="crumbs"><Link href="/ml">ഹോം</Link></div>}
          <div style={{ maxWidth: '840px' }}>
            <h1 className="display">{title}</h1>
            <p className="lead" style={{ marginTop: '1rem' }}>{description}</p>
            <div className="hero-cta" style={{ marginTop: '1.6rem' }}>
              {actions}
              <Link href={englishPath} className="btn btn-outline" lang="en-IN" hrefLang="en-IN">Read in English</Link>
            </div>
          </div>
        </div>
      </section>
      <div className="section container">
        <div className="legal prose">{children}</div>
      </div>
    </main>
  );
}
