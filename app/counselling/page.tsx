import FaqItem from '@/components/FaqItem';
import { pageMetadata } from '@/lib/metadata';
import Link from 'next/link';
import {
  ArrowIcon,
  BookIcon,
  BulbIcon,
  CheckIcon,
  CompassIcon,
  HeartIcon,
  PhoneIcon,
  ShieldIcon,
  TargetIcon,
  WhatsAppIcon,
} from '@/lib/icons';
import { jsonLd, SITE, breadcrumbLd, telLink, waLink, webPageLd } from '@/lib/site';

const PATH = '/counselling';
const TITLE = 'Student Counselling in Kozhikode';
const DESCRIPTION =
  'Ask Eduplus in Ashokapuram about student counselling for exam stress, confidence and study difficulties, and career guidance after SSLC and Plus Two.';
const WA_MSG = "Hi Eduplus, I'd like to ask about student counselling appointments.";

export const metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  imageTitle: 'Student counselling in Kozhikode',
  imageSubtitle: 'Exam stress · study skills · career guidance',
});

// The six areas from the client's counselling flyer — keep these in sync with it.
const AREAS = [
  {
    icon: ShieldIcon,
    acc: 'acc-red',
    title: 'Academic Stress & Exam Anxiety',
    text: 'Sleepless nights before exams, blanking out in the hall, constant worry about marks — we help students understand the pressure and build calm, practical ways to handle it.',
  },
  {
    icon: TargetIcon,
    acc: 'acc-yellow',
    title: 'Low Confidence & Motivation',
    text: 'When a child starts saying “I can’t”, we work on small wins, realistic goals and self-belief that carries back into the classroom.',
  },
  {
    icon: BookIcon,
    acc: 'acc-blue',
    title: 'Study Difficulties',
    text: 'Trouble focusing, planning or remembering what was studied? We look at how your child learns and build routines and study habits that actually fit them.',
  },
  {
    icon: HeartIcon,
    acc: 'acc-red',
    title: 'Emotional & Behavioural Concerns',
    text: 'Talk through concerns about changes in mood, worry, withdrawal or behaviour and ask which kind of support may be appropriate.',
  },
  {
    icon: CompassIcon,
    acc: 'acc-green',
    title: 'Career Guidance',
    text: 'Which stream after SSLC? Which course after Plus Two? We help students match their interests and strengths to real options before the big decisions.',
  },
  {
    icon: BulbIcon,
    acc: 'acc-yellow',
    title: 'Personal Development',
    text: 'Communication, time management, goal-setting and resilience — the life skills that make a student confident beyond marks.',
  },
];

const SIGNS = [
  'Panics, freezes or falls ill before exams',
  'Marks are dropping despite real effort',
  'Avoids studying or can’t stay focused',
  'Seems withdrawn, irritable or unusually anxious',
  'Has lost interest in school or friends',
  'Is unsure which stream or course to choose',
];

const COUNSEL_FAQ = [
  {
    q: 'What does student counselling at Eduplus help with?',
    a: 'Academic stress and exam anxiety, low confidence and motivation, study difficulties, emotional and behavioural concerns, career guidance, and personal development. The aim is simple: every student should feel heard, understood and supported.',
  },
  {
    q: 'Which students is counselling for?',
    a: 'The service is for students seeking support with school, study habits or career decisions. Contact the centre with the student’s age and class so the team can advise on suitability.',
  },
  {
    q: 'Does my child need to be a tuition student at Eduplus?',
    a: 'If your child does not attend Eduplus tuition, contact the centre to check eligibility before arranging a session.',
  },
  {
    q: 'Is counselling available online?',
    a: `Call or WhatsApp ${SITE.phone} to confirm which session formats and appointment times are currently available.`,
  },
  {
    q: 'Do you offer career guidance after SSLC and Plus Two?',
    a: 'Yes. We help students and parents think through streams after Class 10 (Science, Commerce, Humanities) and courses after Plus Two, based on the student’s interests, strengths and goals rather than pressure or guesswork.',
  },
  {
    q: 'Can parents be involved?',
    a: 'Ask the centre before booking how consent, privacy and parent participation are handled for the student’s age.',
  },
  {
    q: 'Is this a replacement for a doctor or psychiatrist?',
    a: 'Eduplus offers student guidance. A qualified mental-health professional can assess concerns that need clinical care. For immediate danger, call 112. For free mental-health support in India, call Tele-MANAS on 14416.',
  },
];

export default function CounsellingPage() {
  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: COUNSEL_FAQ.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const serviceLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE.url}${PATH}#service`,
    name: 'Student Counselling Services',
    serviceType: 'Student counselling and career guidance',
    description: DESCRIPTION,
    provider: { '@id': `${SITE.url}/#organization` },
    audience: { '@type': 'EducationalAudience', educationalRole: 'student' },
    areaServed: { '@type': 'City', name: 'Kozhikode' },

    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Counselling areas',
      itemListElement: AREAS.map((a) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: a.title, description: a.text },
      })),
    },
    url: `${SITE.url}${PATH}`,
  };

  return (
    <main id="main">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(serviceLd) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(webPageLd(TITLE, PATH, DESCRIPTION)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbLd('Student Counselling', PATH)) }}
      />

      {/* HERO */}
      <section className="page-hero" data-screen-label="Counselling hero">
        <div className="container">
          <div className="crumbs">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span>Student Counselling</span>
          </div>
          <div style={{ maxWidth: '840px' }}>
            <span className="eyebrow" style={{ color: 'var(--red)' }}>
              Student counselling services
            </span>
            <h1 className="display" style={{ margin: '.6rem 0 1rem' }}>
              Student counselling in <span className="underline-accent">Kozhikode</span>
            </h1>
            <p className="lead">
              Eduplus offers student counselling and career guidance in Ashokapuram for concerns
              about school, exams, confidence, study habits and choices after SSLC or Plus Two.
            </p>
          </div>
          <div className="hero-chips" style={{ marginTop: '1.4rem' }}>
            <span className="chip">Exam stress &amp; anxiety</span>
            <span className="chip">Confidence &amp; motivation</span>
            <span className="chip">Career guidance</span>
          </div>
          <div className="hero-cta" style={{ marginTop: '1.6rem' }}>
            <a className="btn btn-red btn-lg" href={telLink}>
              <PhoneIcon /> Call {SITE.phone}
            </a>
            <a
              className="btn btn-green btn-lg"
              href={waLink(WA_MSG)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon /> WhatsApp us
            </a>
          </div>
        </div>
      </section>

      {/* HOW WE HELP — the six areas */}
      <section className="section" data-screen-label="Counselling areas">
        <div className="container">
          <div className="sh center">
            <span className="eyebrow" style={{ color: 'var(--blue)' }}>
              How we can help
            </span>
            <h2>
              Support for the whole <span className="underline-accent">student</span>
            </h2>
            <p className="lead maxw">
              Marks are only part of the story. These are the areas we counsel and guide students
              through.
            </p>
          </div>
          <div className="feat-grid">
            {AREAS.map(({ icon: Icon, acc, title, text }) => (
              <article key={title} className={`card card-hover feat ${acc}`}>
                <span className="f-ico">
                  <Icon />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SIGNS */}
      <section className="section" style={{ background: 'var(--soft)' }} data-screen-label="Signs">
        <div className="container">
          <div className="sh center">
            <span className="eyebrow" style={{ color: 'var(--red)' }}>
              When to reach out
            </span>
            <h2>
              Signs your child could use <span className="underline-accent">support</span>
            </h2>
            <p className="lead maxw">
              You don’t need to wait for a crisis. If any of these sound familiar, a conversation
              can help.
            </p>
          </div>
          <div className="card counsel-signs">
            <ul className="compare-list">
              {SIGNS.map((s) => (
                <li key={s} className="yes">
                  <CheckIcon /> {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section" data-screen-label="How counselling works">
        <div className="container">
          <div className="sh center">
            <span className="eyebrow" style={{ color: 'var(--green-600)' }}>
              How it works
            </span>
            <h2>
              Three simple <span className="underline-accent">steps</span>
            </h2>
          </div>
          <div className="steps">
            <div className="step">
              <span className="n">1</span>
              <h3>Reach out</h3>
              <p>Call or WhatsApp the centre to ask about availability and whether the service fits your child’s needs.</p>
            </div>
            <div className="step">
              <span className="n">2</span>
              <h3>Ask about the session</h3>
              <p>Ask who will see your child, what their qualifications are, how consent and privacy are handled, and whether a parent attends.</p>
            </div>
            <div className="step">
              <span className="n">3</span>
              <h3>Agree the next step</h3>
              <p>Confirm the format, cost and appointment time before booking. You can also ask whether follow-up is available.</p>
            </div>
          </div>
          <p className="counsel-care">
            <strong>A note on care:</strong> our counselling is supportive guidance for students
            and families. A qualified mental-health professional can assess concerns that need clinical care.
            If a child is in immediate danger, call <a href="tel:112">112</a>. For free mental-health support
            in India, call Tele-MANAS on <a href="tel:14416">14416</a>.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ background: 'var(--soft)' }} data-screen-label="Counselling FAQ">
        <div className="container">
          <div className="sh center">
            <span className="eyebrow" style={{ color: 'var(--blue)' }}>
              Questions
            </span>
            <h2>
              Counselling, <span className="underline-accent">answered</span>
            </h2>
          </div>
          <div className="faq">
            {COUNSEL_FAQ.map((f, i) => (
              <FaqItem key={i} q={f.q} a={f.a} />
            ))}
          </div>
          <p className="center" style={{ marginTop: '1.6rem' }}>
            For academic preparation, see our{' '}
            <Link href="/exam-prep" style={{ color: 'var(--blue)', fontWeight: 700 }}>
              exam coaching programs <ArrowIcon style={{ width: 16, height: 16, verticalAlign: '-3px' }} />
            </Link>. For stream choices, read our <Link href="/guides/choose-plus-one-stream-after-sslc">guide to choosing a Plus One stream</Link>.
            For appointments, find our <Link href="/contact">address and opening hours</Link>.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section final" data-screen-label="Final CTA">
        <span className="deco d1" />
        <span className="deco d2" />
        <div className="container">
          <h2>Contact us today for counselling and guidance.</h2>
          <p>A short conversation is often the first step. We’re here to listen.</p>
          <div className="final-cta">
            <a className="btn btn-red btn-lg" href={telLink}>
              Call {SITE.phone}
            </a>
            <a className="btn btn-outline btn-lg" href={waLink(WA_MSG)} target="_blank" rel="noopener noreferrer">
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
