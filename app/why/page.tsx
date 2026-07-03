import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowIcon,
  BulbIcon,
  ChartIcon,
  CheckIcon,
  CompassIcon,
  HelpIcon,
  PlusIcon,
  ShieldIcon,
  StarIcon,
  UsersIcon,
  XIcon,
} from '@/lib/icons';
import { SITE, YEARS_ACTIVE, breadcrumbLd, telLink } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Why Eduplus — Individual Attention That Gets Results',
  description:
    'Why families in Ashokapuram, Kozhikode choose Eduplus Individual Tuitions: true one-to-one attention, concept clarity, daily doubt-clearing, regular tests, experienced local teachers and mentorship beyond the classroom. Rated 4.8★ since 2015.',
  alternates: { canonical: '/why' },
  openGraph: {
    title: 'Why Eduplus Individual Tuitions',
    description:
      'True one-to-one attention, concept clarity, doubt-clearing and mentorship — LKG to Plus Two, online & offline, in Ashokapuram, Kozhikode.',
    url: '/why',
    type: 'website',
  },
};

const WHY_FAQ = [
  {
    q: 'What makes Eduplus different from a big tuition centre?',
    a: 'Genuine one-to-one attention. In large batches, quieter students slip through the cracks. We keep it individual or small-batch so every doubt is heard and every child is known by name.',
  },
  {
    q: 'Do you really teach one-to-one?',
    a: 'Yes — true one-to-one and small focused batches, both online and offline, so teaching is paced to your child, not the average of a big room.',
  },
  {
    q: 'How do you keep parents informed?',
    a: 'Regular tests, honest feedback and direct parent updates, so you always know how your child is actually doing — no surprises at exam time.',
  },
  {
    q: 'Are your teachers experienced?',
    a: 'Yes — experienced, local and accountable teachers who know the boards and the community. Rated 4.8★ by parents since 2015.',
  },
];

function Qa({ q, a }: { q: string; a: string }) {
  return (
    <div className="qa">
      <button className="q" aria-expanded="false">
        {q}
        <span className="ic">
          <PlusIcon />
        </span>
      </button>
      <div className="a">
        <p>{a}</p>
      </div>
    </div>
  );
}

export default function WhyPage() {
  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: WHY_FAQ.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <main id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd('Why Eduplus', '/why')) }}
      />

      {/* HERO */}
      <section className="page-hero" data-screen-label="Why hero">
        <div className="container">
          <div className="crumbs reveal">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span>Why Eduplus</span>
          </div>
          <div style={{ maxWidth: '820px' }}>
            <span className="eyebrow reveal" style={{ color: 'var(--red)' }}>
              Why Eduplus
            </span>
            <h1 className="display reveal" style={{ margin: '.6rem 0 1rem' }}>
              Every child <span className="underline-accent">seen</span>, heard and helped.
            </h1>
            <p className="lead reveal">
              We started Eduplus in {SITE.foundedYear} on one belief: every student learns
              differently and deserves to be taught that way. That’s why families across Ashokapuram
              trust us — honest, local, and truly personal.
            </p>
          </div>
          <div className="hero-chips reveal" style={{ marginTop: '1.4rem' }}>
            <span className="chip">★ 4.8 Google rating</span>
            <span className="chip">{YEARS_ACTIVE}+ years · since {SITE.foundedYear}</span>
            <span className="chip">LKG to Plus Two</span>
            <span className="chip">Online &amp; offline</span>
          </div>
        </div>
      </section>

      {/* 6 REASONS */}
      <section className="section" data-screen-label="Reasons">
        <div className="container">
          <div className="sh center reveal">
            <span className="eyebrow" style={{ color: 'var(--blue)' }}>
              Six reasons
            </span>
            <h2>
              Why parents <span className="underline-accent">choose</span> us
            </h2>
            <p className="lead maxw">Honest, local, and personal — here’s what that actually means.</p>
          </div>
          <div className="feat-grid" data-stagger>
            <article className="card card-hover feat acc-blue">
              <span className="f-ico">
                <UsersIcon />
              </span>
              <h3>Individual Attention</h3>
              <p>True one-to-one and small batches — every child is seen, heard and helped.</p>
            </article>
            <article className="card card-hover feat acc-yellow">
              <span className="f-ico">
                <BulbIcon />
              </span>
              <h3>Concept Clarity</h3>
              <p>We teach understanding, not rote. Strong basics make every exam easier.</p>
            </article>
            <article className="card card-hover feat acc-red">
              <span className="f-ico">
                <HelpIcon />
              </span>
              <h3>Doubt Clearing</h3>
              <p>Open doubt sessions any day — no question is too small to ask.</p>
            </article>
            <article className="card card-hover feat acc-green">
              <span className="f-ico">
                <ChartIcon />
              </span>
              <h3>Regular Tests &amp; Feedback</h3>
              <p>We track real progress with regular tests and keep parents updated.</p>
            </article>
            <article className="card card-hover feat acc-blue">
              <span className="f-ico">
                <ShieldIcon />
              </span>
              <h3>Experienced Local Teachers</h3>
              <p>Trusted, nearby and accountable — teachers who know our community.</p>
            </article>
            <article className="card card-hover feat acc-yellow">
              <span className="f-ico">
                <CompassIcon />
              </span>
              <h3>Beyond Classroom</h3>
              <p>Study skills, confidence and mentorship — we shape habits, not just marks.</p>
            </article>
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="section" style={{ background: 'var(--soft)' }} data-screen-label="Comparison">
        <div className="container">
          <div className="sh center reveal">
            <span className="eyebrow" style={{ color: 'var(--red)' }}>
              The difference
            </span>
            <h2>
              One-to-one vs a <span className="underline-accent">crowded</span> batch
            </h2>
          </div>
          <div className="compare-grid" data-stagger>
            <article className="card compare typical">
              <h3>Typical big tuition</h3>
              <ul className="compare-list">
                <li className="no">
                  <XIcon /> 20–40 students per class
                </li>
                <li className="no">
                  <XIcon /> Quiet doubts go unasked
                </li>
                <li className="no">
                  <XIcon /> One pace fits everyone
                </li>
                <li className="no">
                  <XIcon /> Parents hear little until results
                </li>
              </ul>
            </article>
            <article className="card compare eduplus">
              <h3>Eduplus one-to-one</h3>
              <ul className="compare-list">
                <li className="yes">
                  <CheckIcon /> One-to-one &amp; small batches
                </li>
                <li className="yes">
                  <CheckIcon /> Daily doubt-clearing, any day
                </li>
                <li className="yes">
                  <CheckIcon /> Taught to your child’s pace
                </li>
                <li className="yes">
                  <CheckIcon /> Regular tests &amp; parent updates
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="section" data-screen-label="Approach">
        <div className="container">
          <div className="sh center reveal">
            <span className="eyebrow" style={{ color: 'var(--green-600)' }}>
              How we teach
            </span>
            <h2>
              A simple, repeatable <span className="underline-accent">rhythm</span>
            </h2>
          </div>
          <div className="steps" data-stagger>
            <div className="step">
              <span className="n">1</span>
              <h3>Understand</h3>
              <p>We assess where each student is — strengths, gaps and learning style.</p>
            </div>
            <div className="step">
              <span className="n">2</span>
              <h3>Teach &amp; clear doubts</h3>
              <p>Concept-first teaching with open doubt sessions until it truly clicks.</p>
            </div>
            <div className="step">
              <span className="n">3</span>
              <h3>Test &amp; improve</h3>
              <p>Regular tests, honest feedback and parent updates to keep momentum.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="section results" data-screen-label="Trust">
        <div className="container">
          <div className="stat-band">
            <div className="stat reveal">
              <div className="num" data-count={YEARS_ACTIVE} data-suffix="+">
                0
              </div>
              <div className="lbl">Years since {SITE.foundedYear}</div>
            </div>
            <div className="stat reveal">
              <div className="num">
                4.8<span className="suf">★</span>
              </div>
              <div className="lbl">Google rating</div>
            </div>
            <div className="stat reveal">
              <div className="num" data-count="3">
                0
              </div>
              <div className="lbl">Boards · State, CBSE, ICSE</div>
            </div>
            <div className="stat reveal">
              <div className="num">LKG–12</div>
              <div className="lbl">Classes covered</div>
            </div>
          </div>
          <div className="grev card reveal">
            <div className="grev-logo">
              <span className="g-b">G</span>
              <span className="g-r">o</span>
              <span className="g-y">o</span>
              <span className="g-b">g</span>
              <span className="g-g">l</span>
              <span className="g-r">e</span> Reviews
            </div>
            <div className="grev-score">4.8</div>
            <div className="stars grev-stars" role="img" aria-label="Rated 4.8 out of 5">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} aria-hidden="true" />
              ))}
            </div>
            <div className="grev-sub">
              Based on <strong>{SITE.ratingCount} verified reviews</strong> from parents in
              Ashokapuram, Kozhikode
            </div>
            <a className="btn btn-blue" href={SITE.mapsLink} target="_blank" rel="noopener noreferrer">
              Read our Google reviews <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ background: 'var(--soft)' }} data-screen-label="Why FAQ">
        <div className="container">
          <div className="sh center reveal">
            <span className="eyebrow" style={{ color: 'var(--blue)' }}>
              Questions
            </span>
            <h2>
              Good <span className="underline-accent">questions</span>
            </h2>
          </div>
          <div className="faq">
            {WHY_FAQ.map((f, i) => (
              <Qa key={i} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section final" data-screen-label="Final CTA">
        <span className="deco d1" />
        <span className="deco d2" />
        <div className="container reveal">
          <h2>See the difference in one free class.</h2>
          <p>Book a free demo and watch your child actually enjoy learning.</p>
          <div className="final-cta">
            <button className="btn btn-red btn-lg" data-open-modal>
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
