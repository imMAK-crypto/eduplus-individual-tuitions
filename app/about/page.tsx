import type { Metadata } from 'next';
import Link from 'next/link';
import {
  BrandIllustration,
  BulbIcon,
  CompassIcon,
  HeartIcon,
  PhoneIcon,
  PinIcon,
  SendIcon,
  ShieldIcon,
  TargetIcon,
  UsersIcon,
} from '@/lib/icons';
import { SITE, YEARS_ACTIVE, breadcrumbLd, telLink } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About Eduplus',
  description:
    'Eduplus Individual Tuitions is a neighbourhood tuition centre in Ashokapuram, Kozhikode, teaching LKG–Class 12 one-to-one, online & offline since 2015. Personal attention, concept clarity and mentorship — beyond the classroom.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Eduplus Individual Tuitions — Ashokapuram, Kozhikode',
    description:
      'A neighbourhood tuition centre teaching LKG–12 one-to-one, online & offline since 2015. Personal attention, concept clarity and mentorship.',
    url: '/about',
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <main id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd('About', '/about')) }}
      />
      {/* PAGE HERO */}
      <section className="page-hero" data-screen-label="About hero">
        <div className="container">
          <div className="crumbs reveal">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span>About</span>
          </div>
          <div style={{ maxWidth: '760px' }}>
            <span className="eyebrow reveal" style={{ color: 'var(--blue)' }}>
              Who we are
            </span>
            <h1 className="display reveal" style={{ margin: '.6rem 0 1rem' }}>
              A neighbourhood tuition centre that actually{' '}
              <span className="underline-accent">knows</span> your child.
            </h1>
            <p className="lead reveal">
              Eduplus Individual Tuitions began with a simple belief: every student learns
              differently, and deserves to be taught that way. We're right here in Ashokapuram —
              local, personal, and accountable.
            </p>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="section" data-screen-label="Our story">
        <div className="container">
          <div className="loc-grid">
            <div className="reveal prose">
              <span className="eyebrow" style={{ color: 'var(--red)' }}>
                Our story
              </span>
              <h2 style={{ margin: '.6rem 0 1.2rem' }}>
                Built around the student, not the syllabus.
              </h2>
              <p>
                In large classrooms, quieter students slip through the cracks and doubts pile up
                unspoken. We started Eduplus in {SITE.foundedYear} to fix exactly that — with small
                batches, genuine one-to-one attention, and teachers who stay until a concept truly
                clicks.
              </p>
              <p>
                Today we support students from LKG to Class 12 in Kerala State, CBSE and ICSE
                boards — one-to-one, online and offline. But what hasn't changed is our promise: to
                look after each child as if they were our own.
              </p>
              <div style={{ display: 'flex', gap: '.7rem', flexWrap: 'wrap', marginTop: '1.4rem' }}>
                <button className="btn btn-red" data-open-modal>
                  Book a Free Demo
                </button>
                <Link className="btn btn-outline" href="/programs">
                  See our programs
                </Link>
              </div>
            </div>
            <div className="hero-visual reveal" style={{ maxWidth: '460px' }}>
              <span className="blob b1 sq" />
              <span className="blob b3" />
              <span className="blob b4" />
              <div className="hero-photo">
                <BrandIllustration className="hero-illus" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION / VISION / VALUES */}
      <section
        className="section"
        style={{ background: 'var(--soft)' }}
        data-screen-label="Mission and values"
      >
        <div className="container">
          <div className="sh center reveal">
            <span className="eyebrow" style={{ color: 'var(--blue)' }}>
              What drives us
            </span>
            <h2>
              Mission, vision &amp; <span className="underline-accent">values</span>
            </h2>
          </div>
          <div className="feat-grid" data-stagger style={{ marginBottom: '2.4rem' }}>
            <article className="card card-hover feat acc-blue">
              <span className="f-ico">
                <TargetIcon />
              </span>
              <h3>Our Mission</h3>
              <p>
                To give every student personal attention and concept clarity so they learn with
                confidence — not fear.
              </p>
            </article>
            <article className="card card-hover feat acc-green">
              <span className="f-ico">
                <CompassIcon />
              </span>
              <h3>Our Vision</h3>
              <p>
                To be Ashokapuram's most trusted learning home — where families know their child is
                genuinely cared for.
              </p>
            </article>
            <article className="card card-hover feat acc-yellow">
              <span className="f-ico">
                <HeartIcon />
              </span>
              <h3>Our Values</h3>
              <p>Patience, honesty and respect — for every student, every parent, every question.</p>
            </article>
          </div>

          <div className="feat-grid" data-stagger>
            <article className="card feat acc-blue">
              <span className="f-ico">
                <UsersIcon />
              </span>
              <h3>Personal attention</h3>
              <p>Small batches so no one is left behind.</p>
            </article>
            <article className="card feat acc-red">
              <span className="f-ico">
                <BulbIcon />
              </span>
              <h3>Concept clarity</h3>
              <p>Understanding first, marks follow.</p>
            </article>
            <article className="card feat acc-green">
              <span className="f-ico">
                <ShieldIcon />
              </span>
              <h3>Honest guidance</h3>
              <p>Real feedback, never false promises.</p>
            </article>
            <article className="card feat acc-yellow">
              <span className="f-ico">
                <SendIcon />
              </span>
              <h3>Beyond classroom</h3>
              <p>Study skills &amp; confidence for life.</p>
            </article>
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="section" data-screen-label="Our approach">
        <div className="container">
          <div className="sh center reveal">
            <span className="eyebrow" style={{ color: 'var(--green-600)' }}>
              How we teach
            </span>
            <h2>
              The Eduplus <span className="underline-accent">approach</span>
            </h2>
            <p className="lead maxw">A simple, repeatable rhythm that turns weak spots into strengths.</p>
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
              <p>Concept-first teaching with open doubt sessions until it clicks.</p>
            </div>
            <div className="step">
              <span className="n">3</span>
              <h3>Test &amp; improve</h3>
              <p>Regular tests, honest feedback and parent updates to keep momentum.</p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAND */}
      <section className="section results" data-screen-label="By the numbers">
        <div className="container">
          <div className="stat-band" style={{ marginBottom: 0 }}>
            <div className="stat reveal">
              <div className="num" data-count={YEARS_ACTIVE} data-suffix="+">
                0
              </div>
              <div className="lbl">Years teaching · since {SITE.foundedYear}</div>
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
              <div className="lbl">Boards covered</div>
            </div>
            <div className="stat reveal">
              <div className="num">LKG–12</div>
              <div className="lbl">Classes covered</div>
            </div>
          </div>
        </div>
      </section>

      {/* LOCATION QUICK */}
      <section
        className="section"
        style={{ background: 'var(--soft)' }}
        data-screen-label="Find us"
      >
        <div className="container">
          <div className="loc-grid">
            <div className="loc-info reveal">
              <span className="eyebrow" style={{ color: 'var(--red)' }}>
                Find us
              </span>
              <h2 style={{ margin: '.5rem 0 .6rem' }}>Come say hello in Ashokapuram</h2>
              <div className="loc-row">
                <span className="lr-ico">
                  <PinIcon />
                </span>
                <span>
                  <span className="t1">Address</span>
                  <span className="t2">{SITE.addressFull}</span>
                </span>
              </div>
              <div className="loc-row">
                <span className="lr-ico">
                  <PhoneIcon />
                </span>
                <span>
                  <span className="t1">Phone</span>
                  <a className="t2" href={telLink}>
                    {SITE.phone}
                  </a>
                </span>
              </div>
              <div style={{ display: 'flex', gap: '.7rem', flexWrap: 'wrap', marginTop: '.4rem' }}>
                <Link className="btn btn-blue" href="/contact">
                  Contact &amp; directions
                </Link>
              </div>
            </div>
            <div className="map-wrap reveal">
              <iframe
                title="Map to Eduplus, Ashokapuram, Kozhikode"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={SITE.mapsEmbed}
              />
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section final" data-screen-label="Final CTA">
        <span className="deco d1" />
        <span className="deco d2" />
        <div className="container reveal">
          <h2>Let's help your child love learning.</h2>
          <p>Book a free demo class and meet us in person.</p>
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
