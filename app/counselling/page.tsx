import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowIcon,
  BookIcon,
  BulbIcon,
  CheckIcon,
  CompassIcon,
  HeartIcon,
  PhoneIcon,
  PlusIcon,
  ShieldIcon,
  TargetIcon,
  WhatsAppIcon,
} from '@/lib/icons';
import { SITE, breadcrumbLd, ogImage, telLink, waLink, webPageLd } from '@/lib/site';

const PATH = '/counselling';
const TITLE = 'Student Counselling & Career Guidance in Kozhikode';
const DESCRIPTION =
  'Student counselling in Ashokapuram, Kozhikode for exam stress, anxiety, low confidence, study difficulties, emotional & behavioural concerns, and career guidance after SSLC & Plus Two. In person or online.';
const WA_MSG = "Hi Eduplus, I'd like to know about student counselling for my child.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'student counselling Kozhikode',
    'student counselling Calicut',
    'counselling for students Kozhikode',
    'exam stress counselling Kerala',
    'exam anxiety help for students',
    'career guidance Kozhikode',
    'career guidance after Plus Two',
    'career guidance after SSLC',
    'child counselling Kozhikode',
    'study skills coaching Kozhikode',
    'വിദ്യാർത്ഥി കൗൺസിലിംഗ് കോഴിക്കോട്',
    'കരിയർ ഗൈഡൻസ് കോഴിക്കോട്',
  ],
  alternates: { canonical: PATH },
  openGraph: {
    title: `Student Counselling Services | ${SITE.name}`,
    description:
      'Every student deserves to be heard, understood and supported. Counselling for exam stress, confidence, study difficulties, emotions, behaviour and career choices — Kozhikode & online.',
    url: PATH,
    type: 'website',
    images: ogImage('Student counselling services', 'Stress · confidence · emotions · career guidance'),
  },
};

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
    text: 'Mood changes, anger, withdrawal or worry — a safe, non-judgemental space for students to talk, with guidance for parents on how to help at home.',
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
    a: 'School students from primary classes up to Plus Two (Class 12), across Kerala State, CBSE and ICSE. It is especially helpful around board-exam years — SSLC, Plus One and Plus Two — and at decision points like choosing a stream or a course.',
  },
  {
    q: 'Does my child need to be a tuition student at Eduplus?',
    a: 'No. Counselling and guidance are open to any student. If your child also takes tuition with us, the study side of the plan can be reflected in their classes too.',
  },
  {
    q: 'Is counselling available online?',
    a: `Yes. Sessions can happen in person at our Ashokapuram centre in Kozhikode or online, whichever your child is more comfortable with. Call or WhatsApp ${SITE.phone} to arrange a time.`,
  },
  {
    q: 'Do you offer career guidance after SSLC and Plus Two?',
    a: 'Yes. We help students and parents think through streams after Class 10 (Science, Commerce, Humanities) and courses after Plus Two, based on the student’s interests, strengths and goals rather than pressure or guesswork.',
  },
  {
    q: 'Can parents be involved?',
    a: 'Yes. Parents usually start the conversation, and we share guidance on how to support the child at home. Students also get space to talk on their own, so they can open up honestly.',
  },
  {
    q: 'Is this a replacement for a doctor or psychiatrist?',
    a: 'No. Our counselling is supportive guidance for everyday student challenges. If a concern needs clinical care, we will tell you honestly and encourage you to see a qualified mental-health professional. In an emergency, call 112, or the free national Tele-MANAS helpline on 14416.',
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
    areaServed: [
      { '@type': 'City', name: 'Kozhikode' },
      { '@type': 'State', name: 'Kerala, India' },
    ],
    availableChannel: [
      {
        '@type': 'ServiceChannel',
        name: 'In person at the Ashokapuram centre',
        servicePhone: { '@type': 'ContactPoint', telephone: SITE.phoneRaw },
        serviceLocation: { '@id': `${SITE.url}/#organization` },
      },
      { '@type': 'ServiceChannel', name: 'Online sessions', serviceUrl: `${SITE.url}${PATH}` },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Counselling areas',
      itemListElement: AREAS.map((a) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: a.title, description: a.text },
      })),
    },
    availableLanguage: ['en', 'ml', 'hi'],
    url: `${SITE.url}${PATH}`,
  };

  return (
    <main id="main">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageLd(TITLE, PATH, DESCRIPTION)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd('Student Counselling', PATH)) }}
      />

      {/* HERO */}
      <section className="page-hero" data-screen-label="Counselling hero">
        <div className="container">
          <div className="crumbs reveal">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span>Student Counselling</span>
          </div>
          <div style={{ maxWidth: '840px' }}>
            <span className="eyebrow reveal" style={{ color: 'var(--red)' }}>
              Student counselling services
            </span>
            <h1 className="display reveal" style={{ margin: '.6rem 0 1rem' }}>
              Every student deserves to be <span className="underline-accent">heard</span>,
              understood and supported.
            </h1>
            <p className="lead reveal">
              Is your child facing difficulties with <strong>studies, stress, confidence, emotions
              or behaviour</strong>? We support students through professional guidance and
              counselling — at our Ashokapuram centre in Kozhikode or online.
            </p>
          </div>
          <div className="hero-chips reveal" style={{ marginTop: '1.4rem' }}>
            <span className="chip">Exam stress &amp; anxiety</span>
            <span className="chip">Confidence &amp; motivation</span>
            <span className="chip">Career guidance</span>
            <span className="chip">In person &amp; online</span>
          </div>
          <div className="hero-cta reveal" style={{ marginTop: '1.6rem' }}>
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
          <div className="sh center reveal">
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
          <div className="feat-grid" data-stagger>
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
          <div className="sh center reveal">
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
          <div className="card counsel-signs reveal">
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
          <div className="sh center reveal">
            <span className="eyebrow" style={{ color: 'var(--green-600)' }}>
              How it works
            </span>
            <h2>
              Three simple <span className="underline-accent">steps</span>
            </h2>
          </div>
          <div className="steps" data-stagger>
            <div className="step">
              <span className="n">1</span>
              <h3>Reach out</h3>
              <p>Call or WhatsApp us and tell us briefly what your child is going through.</p>
            </div>
            <div className="step">
              <span className="n">2</span>
              <h3>Talk it through</h3>
              <p>A first session to listen to the student and parent and understand the concern.</p>
            </div>
            <div className="step">
              <span className="n">3</span>
              <h3>Guidance &amp; follow-up</h3>
              <p>Practical strategies, a plan for home and study, and follow-up sessions as needed.</p>
            </div>
          </div>
          <p className="counsel-care reveal">
            <strong>A note on care:</strong> our counselling is supportive guidance for students
            and families, not a substitute for medical treatment. If a child is in danger or crisis,
            call <a href="tel:112">112</a> or the free national Tele-MANAS mental-health helpline on{' '}
            <a href="tel:14416">14416</a> right away.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ background: 'var(--soft)' }} data-screen-label="Counselling FAQ">
        <div className="container">
          <div className="sh center reveal">
            <span className="eyebrow" style={{ color: 'var(--blue)' }}>
              Questions
            </span>
            <h2>
              Counselling, <span className="underline-accent">answered</span>
            </h2>
          </div>
          <div className="faq">
            {COUNSEL_FAQ.map((f, i) => (
              <Qa key={i} q={f.q} a={f.a} />
            ))}
          </div>
          <p className="center" style={{ marginTop: '1.6rem' }}>
            Preparing for a board, SAY or Improvement exam too?{' '}
            <Link href="/exam-prep" style={{ color: 'var(--blue)', fontWeight: 700 }}>
              See our exam-target batches <ArrowIcon style={{ width: 16, height: 16, verticalAlign: '-3px' }} />
            </Link>
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section final" data-screen-label="Final CTA">
        <span className="deco d1" />
        <span className="deco d2" />
        <div className="container reveal">
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
