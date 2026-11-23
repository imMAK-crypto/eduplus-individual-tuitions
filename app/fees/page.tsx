import { pageMetadata } from '@/lib/metadata';
import type { CSSProperties } from 'react';
import Link from 'next/link';
import { ArrowIcon, CheckIcon, ClockIcon, RupeeIcon, TargetIcon } from '@/lib/icons';
import { jsonLd, SITE, breadcrumbLd, telLink, waLink } from '@/lib/site';
import FeeEstimator from '@/components/FeeEstimator';
import { hourlyTuitionOffer } from '@/lib/tuitionPricing';
import fees from '@/content/fees.json';

export const metadata = pageMetadata({
  title: 'Tuition Fees in Kozhikode',
  description: 'See hourly tuition fees by class at Eduplus, from ₹150 to ₹350, plus ₹500 one-time admission. Estimate your monthly cost and book a free demo.',
  path: '/fees',
  imageTitle: 'Simple per-hour fees',
  imageSubtitle: '₹150–₹350 per hour · ₹500 one-time admission',
});

const MAX_FEE = Math.max(...fees.tiers.map((t) => t.feePerHour));

const feeLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Eduplus tuition fee structure',
  itemListElement: fees.tiers.map((t, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: hourlyTuitionOffer(t),
  })),
};

export default function FeesPage() {
  return (
    <main id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(feeLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbLd('Fees', '/fees')) }}
      />

      {/* PAGE HERO */}
      <section className="page-hero" data-screen-label="Fees hero">
        <div className="container">
          <div className="crumbs">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span>Fees</span>
          </div>
          <div style={{ maxWidth: '780px' }}>
            <span className="eyebrow" style={{ color: 'var(--green-600)' }}>
              Fee structure
            </span>
            <h1 className="display" style={{ margin: '.6rem 0 1rem' }}>
              Clear fees. <span className="underline-accent">No surprises.</span>
            </h1>
            <p className="lead">
              One simple per-hour rate for every class — the same whether you learn at our
              Ashokapuram centre or live online. Pay for the hours you take, plus a one-time ₹
              {fees.admissionFee} admission. That&apos;s the whole story.
            </p>
          </div>
          <div className="hero-chips" style={{ marginTop: '1.4rem' }}>
            <span className="chip">
              <RupeeIcon /> Per-hour pricing
            </span>
            <span className="chip">
              <CheckIcon /> ₹{fees.admissionFee} one-time admission
            </span>
            <span className="chip">
              <TargetIcon /> First demo class free
            </span>
            <span className="chip">
              <ClockIcon /> Mon–Fri 2–7 PM · Sat–Sun 7 AM–6:30 PM
            </span>
          </div>
        </div>
      </section>

      {/* FEE LADDER */}
      <section className="section fee-ladder-sec" data-screen-label="Fee ladder">
        <div className="container">
          <div className="sh center">
            <span className="eyebrow" style={{ color: 'var(--blue)' }}>
              The fee ladder
            </span>
            <h2>
              Fees that grow <span className="underline-accent">with the class</span> — nothing else
            </h2>
            <p className="lead maxw">
              Higher classes need deeper subject expertise, so the hourly rate steps up with the
              class. Every step includes the same one-to-one attention.
            </p>
          </div>

          <div className="fee-ladder">
            {fees.tiers.map((t, i) => (
              <article
                key={t.id}
                className={`rung ${t.accent} ${t.id === 't6' ? 'top' : ''}`}
                style={{ '--pn': Math.round((t.feePerHour / MAX_FEE) * 100) } as CSSProperties}
              >
                <div className="rung-card">
                  {t.id === 't6' && <span className="rung-flag">SAY &amp; Improvement batches</span>}
                  <span className="r-step">Step {i + 1}</span>
                  <h3 className="r-cls">{t.range}</h3>
                  <div className="r-amt">
                    ₹{t.feePerHour}
                    <span className="r-per">/hour</span>
                  </div>
                  <p className="r-note">{t.note}</p>
                  <span className="r-adm">+ ₹{fees.admissionFee} one-time admission</span>
                  <button className="enquire" data-open-modal data-class={t.classes[0]}>
                    Book a free demo <ArrowIcon />
                  </button>
                </div>
                <span className="rung-bar" aria-hidden="true" />
              </article>
            ))}
          </div>

          <p className="fee-vary">
            <strong>*</strong> Fee may vary for <strong>ICSE / IGCSE</strong> syllabus — message us
            and we&apos;ll confirm your exact rate.
          </p>
        </div>
      </section>

      {/* ESTIMATOR */}
      <section
        className="section fee-est-sec"
        id="estimate"
        style={{ background: 'var(--soft)' }}
        data-screen-label="Fee estimator"
      >
        <div className="container">
          <div className="sh center">
            <span className="eyebrow" style={{ color: 'var(--red)' }}>
              Try it yourself
            </span>
            <h2>
              Estimate your <span className="underline-accent">monthly fee</span> in seconds
            </h2>
            <p className="lead maxw">
              Pick the class and roughly how many hours a week you&apos;d like — we&apos;ll itemise
              it like a bill, before you ever pay one.
            </p>
          </div>
          <div>
            <FeeEstimator />
          </div>
        </div>
      </section>

      {/* REFERENCE TABLE + NOTES */}
      <section className="section" data-screen-label="Fee table">
        <div className="container">
          <div className="fee-ref">
            <div className="fee-table-card">
              <h3>At a glance</h3>
              <div className="fee-table-wrap">
                <table className="fee-table">
                  <caption className="sr-only">
                    Eduplus tuition fees per hour and admission fee by class
                  </caption>
                  <thead>
                    <tr>
                      <th scope="col">Class</th>
                      <th scope="col">Fee per hour</th>
                      <th scope="col">Admission (one-time)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {fees.tiers.map((t) => (
                      <tr key={t.id} id={t.id}>
                        <th scope="row">{t.range}</th>
                        <td>₹{t.feePerHour}</td>
                        <td>₹{fees.admissionFee}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="fee-table-foot">* Fee may vary for ICSE / IGCSE syllabus.</p>
            </div>
            <div className="fee-notes">
              <h3>Good to know</h3>
              <ul>
                {fees.notes.map((n) => (
                  <li key={n}>
                    <CheckIcon /> {n}
                  </li>
                ))}
              </ul>
              <div style={{ display: 'flex', gap: '.7rem', flexWrap: 'wrap', marginTop: '1.2rem' }}>
                <a
                  className="btn btn-green"
                  href={waLink('Hi Eduplus! Could you confirm the exact fee for my child?')}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ask about fees on WhatsApp
                </a>
                <a className="btn btn-outline" href={telLink}>
                  Call {SITE.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section final" data-screen-label="Final CTA">
        <span className="deco d1" />
        <span className="deco d2" />
        <div className="container">
          <h2>Try a class before you pay for one.</h2>
          <p>Your first demo class is completely free — see the teaching, then decide.</p>
          <div className="final-cta">
            <button className="btn btn-red btn-lg" data-open-modal>
              Book a Free Demo
            </button>
            <Link className="btn btn-outline btn-lg" href="/programs">
              Explore programs
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
