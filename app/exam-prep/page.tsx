import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowIcon,
  BulbIcon,
  ChartIcon,
  CheckIcon,
  ClockIcon,
  CompassIcon,
  HelpIcon,
  NotebookIcon,
  PlusIcon,
  ShieldIcon,
  TargetIcon,
} from '@/lib/icons';
import { SITE, breadcrumbLd, telLink, waLink } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Exam-Target Coaching — SSLC, Plus One, Plus Two & Half-Yearly',
  description:
    'Exam-focused tuition batches in Ashokapuram, Kozhikode for Class 10 onwards — SSLC, Plus One, Plus Two board exams plus half-yearly & term exams. Revision, previous-year papers, answer-writing and daily doubt-clearing. Kerala State, CBSE & ICSE, online & offline.',
  alternates: { canonical: '/exam-prep' },
  openGraph: {
    title: 'Exam-Target Coaching | Eduplus Individual Tuitions',
    description:
      'Intensive, time-boxed batches for board, half-yearly & term exams — Class 10 onwards, Kerala State/CBSE/ICSE, online & offline.',
    url: '/exam-prep',
    type: 'website',
  },
};

const EXAM_FAQ = [
  {
    q: 'Which exams do you prepare students for?',
    a: 'Board exams — SSLC (Class 10), Plus One and Plus Two — plus half-yearly and term exams for any class from 10th onwards. Kerala State, CBSE and ICSE.',
  },
  {
    q: 'When do exam-target batches start?',
    a: 'They run in focused blocks timed to your exam season, so you join a few weeks to a few months before the exam. Message us with your exam date and we build the plan around it.',
  },
  {
    q: 'Are the batches online or offline?',
    a: 'Both — attend at our Ashokapuram centre or live online, whichever fits your schedule during the crunch. The coaching and doubt-clearing are the same either way.',
  },
  {
    q: 'What does an exam batch include?',
    a: 'Focused syllabus revision, previous-year and model papers, answer-writing and marking-scheme practice, timed mock tests, and daily doubt-clearing right up to the exam.',
  },
  {
    q: 'Is it one-to-one or a group?',
    a: 'We keep exam batches small and can also run pure one-to-one, so every student gets real attention on their weak areas.',
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

export default function ExamPrepPage() {
  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: EXAM_FAQ.map((f) => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd('Exam Prep', '/exam-prep')) }}
      />

      {/* HERO */}
      <section className="page-hero" data-screen-label="Exam prep hero">
        <div className="container">
          <div className="crumbs reveal">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span>Exam Prep</span>
          </div>
          <div style={{ maxWidth: '820px' }}>
            <span className="eyebrow reveal" style={{ color: 'var(--red)' }}>
              Exam-target tuition
            </span>
            <h1 className="display reveal" style={{ margin: '.6rem 0 1rem' }}>
              Walk into your exam <span className="underline-accent">prepared</span>, not panicked.
            </h1>
            <p className="lead reveal">
              From <strong>Class 10 onwards</strong>, we run short, high-intensity batches timed to
              your exam — SSLC, Plus One, Plus Two, half-yearly and term exams. Focused revision,
              real papers, and daily doubt-clearing until you’re exam-ready.
            </p>
          </div>
          <div className="hero-chips reveal" style={{ marginTop: '1.4rem' }}>
            <span className="chip">Class 10 onwards</span>
            <span className="chip">Kerala State · CBSE · ICSE</span>
            <span className="chip">Online &amp; offline</span>
            <span className="chip">One-to-one &amp; small batch</span>
          </div>
          <div className="hero-cta reveal" style={{ marginTop: '1.6rem' }}>
            <button className="btn btn-red btn-lg" data-open-modal data-subjects="Exam-target batch">
              Reserve an exam-target seat
            </button>
            <a className="btn btn-outline btn-lg" href={telLink}>
              Call {SITE.phone}
            </a>
          </div>
        </div>
      </section>

      {/* WHY EXAM COACHING */}
      <section className="section" data-screen-label="Why exam coaching">
        <div className="container">
          <div className="sh center reveal">
            <span className="eyebrow" style={{ color: 'var(--blue)' }}>
              Why it works
            </span>
            <h2>
              Built for the <span className="underline-accent">exam</span>, not just the syllabus
            </h2>
            <p className="lead maxw">
              Regular tuition covers the year. Exam-target batches do something different — they get
              you scoring.
            </p>
          </div>
          <div className="feat-grid" data-stagger>
            <article className="card card-hover feat acc-red">
              <span className="f-ico">
                <TargetIcon />
              </span>
              <h3>Timed to your exam</h3>
              <p>Plans are built backwards from your exam date, so every session earns its place.</p>
            </article>
            <article className="card card-hover feat acc-blue">
              <span className="f-ico">
                <NotebookIcon />
              </span>
              <h3>Real papers</h3>
              <p>Previous-year and model papers, solved and practised under exam conditions.</p>
            </article>
            <article className="card card-hover feat acc-green">
              <span className="f-ico">
                <ShieldIcon />
              </span>
              <h3>Answer-writing</h3>
              <p>Marking-scheme-smart answers — how to actually earn every mark on paper.</p>
            </article>
            <article className="card card-hover feat acc-yellow">
              <span className="f-ico">
                <ChartIcon />
              </span>
              <h3>Mock tests</h3>
              <p>Regular timed mocks with feedback, so exam day feels familiar, not frightening.</p>
            </article>
            <article className="card card-hover feat acc-blue">
              <span className="f-ico">
                <HelpIcon />
              </span>
              <h3>Daily doubt-clearing</h3>
              <p>No doubt left unspoken in the final run-up — ask anything, any day.</p>
            </article>
            <article className="card card-hover feat acc-red">
              <span className="f-ico">
                <CompassIcon />
              </span>
              <h3>Focus on weak spots</h3>
              <p>Small batches mean we target exactly the topics that lose you marks.</p>
            </article>
          </div>
        </div>
      </section>

      {/* BY EXAM (interactive tabs) */}
      <section className="section" style={{ background: 'var(--soft)' }} data-screen-label="By exam">
        <div className="container">
          <div className="sh center reveal">
            <span className="eyebrow" style={{ color: 'var(--red)' }}>
              Choose your exam
            </span>
            <h2>
              A plan for <span className="underline-accent">every</span> exam
            </h2>
          </div>
          <div data-tabs>
            <div className="tabs" role="tablist" aria-label="Exam type">
              <button className="tab active" role="tab" aria-selected="true" data-tab="e-sslc">
                SSLC (Class 10)
              </button>
              <button className="tab" role="tab" aria-selected="false" data-tab="e-plus1">
                Plus One
              </button>
              <button className="tab" role="tab" aria-selected="false" data-tab="e-plus2">
                Plus Two
              </button>
              <button className="tab" role="tab" aria-selected="false" data-tab="e-half">
                Half-yearly &amp; term
              </button>
            </div>

            <div className="tab-panel show" id="e-sslc" role="tabpanel">
              <div className="prog-grid" data-stagger>
                <article className="card prog-card red">
                  <span className="pc-ico">
                    <TargetIcon />
                  </span>
                  <h3>SSLC board intensive</h3>
                  <p>Full Class 10 revision across all subjects with model papers and marking focus.</p>
                  <div className="pc-chips">
                    <span className="badge badge-blue">Kerala State</span>
                    <span className="badge badge-green">CBSE</span>
                    <span className="badge badge-red">ICSE</span>
                  </div>
                  <button className="enquire" data-open-modal data-class="Class 10" data-subjects="SSLC exam batch">
                    Enquire <ArrowIcon />
                  </button>
                </article>
                <article className="card prog-card blue">
                  <span className="pc-ico">
                    <ChartIcon />
                  </span>
                  <h3>Maths &amp; Science focus</h3>
                  <p>Extra drilling on the highest-weight, trickiest chapters that decide the grade.</p>
                  <button className="enquire" data-open-modal data-class="Class 10" data-subjects="SSLC Maths & Science">
                    Enquire <ArrowIcon />
                  </button>
                </article>
              </div>
            </div>

            <div className="tab-panel" id="e-plus1" role="tabpanel">
              <div className="prog-grid" data-stagger>
                <article className="card prog-card blue">
                  <span className="pc-ico">
                    <NotebookIcon />
                  </span>
                  <h3>Plus One board prep</h3>
                  <p>Science, Commerce &amp; Humanities — subject-wise revision and paper practice.</p>
                  <div className="pc-chips">
                    <span className="badge badge-blue">Kerala State</span>
                    <span className="badge badge-green">CBSE</span>
                    <span className="badge badge-red">ICSE</span>
                  </div>
                  <button className="enquire" data-open-modal data-class="Class 11" data-subjects="Plus One exam batch">
                    Enquire <ArrowIcon />
                  </button>
                </article>
              </div>
            </div>

            <div className="tab-panel" id="e-plus2" role="tabpanel">
              <div className="prog-grid" data-stagger>
                <article className="card prog-card green">
                  <span className="pc-ico">
                    <TargetIcon />
                  </span>
                  <h3>Plus Two board intensive</h3>
                  <p>The exam that shapes your future — targeted revision, mocks and answer-writing.</p>
                  <div className="pc-chips">
                    <span className="badge badge-blue">Kerala State</span>
                    <span className="badge badge-green">CBSE</span>
                    <span className="badge badge-red">ICSE</span>
                  </div>
                  <button className="enquire" data-open-modal data-class="Class 12" data-subjects="Plus Two exam batch">
                    Enquire <ArrowIcon />
                  </button>
                </article>
              </div>
            </div>

            <div className="tab-panel" id="e-half" role="tabpanel">
              <div className="prog-grid" data-stagger>
                <article className="card prog-card yellow">
                  <span className="pc-ico">
                    <ClockIcon />
                  </span>
                  <h3>Half-yearly &amp; term exams</h3>
                  <p>Quick, focused revision and practice tests for any class from 10th onwards.</p>
                  <button className="enquire" data-open-modal data-subjects="Half-yearly exam batch">
                    Enquire <ArrowIcon />
                  </button>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section" data-screen-label="How exam batches work">
        <div className="container">
          <div className="sh center reveal">
            <span className="eyebrow" style={{ color: 'var(--green-600)' }}>
              How it works
            </span>
            <h2>
              From enquiry to <span className="underline-accent">exam-ready</span>
            </h2>
          </div>
          <div className="steps" data-stagger>
            <div className="step">
              <span className="n">1</span>
              <h3>Tell us your exam</h3>
              <p>Share the class, board and exam date — we assess strengths and gaps.</p>
            </div>
            <div className="step">
              <span className="n">2</span>
              <h3>Get a focused plan</h3>
              <p>A time-boxed schedule built backwards from your exam, targeting weak areas first.</p>
            </div>
            <div className="step">
              <span className="n">3</span>
              <h3>Practise &amp; peak</h3>
              <p>Revision, papers, mocks and daily doubt-clearing until you walk in confident.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ background: 'var(--soft)' }} data-screen-label="Exam FAQ">
        <div className="container">
          <div className="sh center reveal">
            <span className="eyebrow" style={{ color: 'var(--blue)' }}>
              Questions
            </span>
            <h2>
              Exam prep, <span className="underline-accent">answered</span>
            </h2>
          </div>
          <div className="faq">
            {EXAM_FAQ.map((f, i) => (
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
          <h2>Your exam has a date. Let’s build the plan.</h2>
          <p>Tell us the class, board and exam — we’ll set up a free demo and a focused batch.</p>
          <div className="final-cta">
            <button className="btn btn-red btn-lg" data-open-modal data-subjects="Exam-target batch">
              Reserve a seat
            </button>
            <a className="btn btn-outline btn-lg" href={waLink()} target="_blank" rel="noopener noreferrer">
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
