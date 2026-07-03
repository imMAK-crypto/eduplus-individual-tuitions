import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowIcon,
  AtomIcon,
  BookIcon,
  BulbIcon,
  ChartIcon,
  GlobeIcon,
  LangIcon,
  HelpIcon,
  NotebookIcon,
  RupeeIcon,
  ShieldIcon,
  TargetIcon,
} from '@/lib/icons';
import { SITE, breadcrumbLd, waLink } from '@/lib/site';

const COURSES: { name: string; desc: string }[] = [
  {
    name: 'Foundation tuition (LKG – Class 4)',
    desc: 'One-to-one and small-batch tuition in all subjects for LKG to Class 4 — Kerala State, CBSE and ICSE, online and offline.',
  },
  {
    name: 'Middle school tuition (Class 5 – 7)',
    desc: 'Concept-first Maths, Science, English, Social and languages for Class 5 to 7 — online and offline.',
  },
  {
    name: 'High school & SSLC tuition (Class 8 – 10)',
    desc: 'Board-focused coaching for Class 8 to 10 with exam technique, revision and model papers.',
  },
  {
    name: 'Plus One & Plus Two tuition (Class 11 & 12)',
    desc: 'Science, Commerce and Humanities subject coaching for Plus One and Plus Two, aligned to the board exam.',
  },
  {
    name: 'Exam-target batches (Class 10 onwards)',
    desc: 'Short, intensive batches timed to board (SSLC, +1, +2), half-yearly and term exams — revision, previous-year papers and daily doubt-clearing.',
  },
];

const courseLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: COURSES.map((c, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'Course',
      name: c.name,
      description: c.desc,
      provider: {
        '@type': 'EducationalOrganization',
        name: SITE.name,
        sameAs: SITE.url,
      },
    },
  })),
};

export const metadata: Metadata = {
  title: 'Programs & Courses — LKG to Plus Two',
  description:
    'Tuition programs for LKG–Class 12 — Foundation, High School (SSLC), Plus One / Plus Two (Science, Commerce, Humanities) & exam-target batches. One-to-one, online & offline. Kerala State, CBSE & ICSE in Ashokapuram, Kozhikode.',
  alternates: { canonical: '/programs' },
  openGraph: {
    title: 'Programs for LKG to Plus Two | Eduplus Individual Tuitions',
    description:
      'One-to-one tuition programs for LKG–12 in Ashokapuram, Kozhikode — online & offline. SSLC, Plus One, Plus Two & exam-target batches.',
    url: '/programs',
    type: 'website',
  },
};

export default function ProgramsPage() {
  return (
    <main id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd('Programs', '/programs')) }}
      />
      {/* PAGE HERO */}
      <section className="page-hero" data-screen-label="Programs hero">
        <div className="container">
          <div className="crumbs reveal">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span>Programs</span>
          </div>
          <div style={{ maxWidth: '760px' }}>
            <span className="eyebrow reveal" style={{ color: 'var(--blue)' }}>
              What we teach
            </span>
            <h1 className="display reveal" style={{ margin: '.6rem 0 1rem' }}>
              Programs for LKG to Plus Two, <span className="underline-accent">every</span> board.
            </h1>
            <p className="lead reveal">
              Kerala State, CBSE &amp; ICSE — from early foundations to board exams and stream
              subjects, one-to-one and online or offline. Tap any program to enquire and we'll
              arrange a free demo.
            </p>
          </div>
          <div className="hero-chips reveal" style={{ marginTop: '1.4rem' }}>
            <span className="chip">Kerala State</span>
            <span className="chip">CBSE</span>
            <span className="chip">ICSE</span>
            <span className="chip">One-to-one &amp; small batches</span>
          </div>
        </div>
      </section>

      <div className="container">
        {/* PRIMARY */}
        <section className="stage" data-screen-label="Primary">
          <div className="stage-head">
            <span className="sn" style={{ background: 'var(--blue)' }}>
              <NotebookIcon />
            </span>
            <div>
              <h2>Foundation — LKG to Class 4</h2>
              <div className="meta">Pre-primary · reading · homework support</div>
            </div>
          </div>
          <div className="subj-strip">
            <span className="badge badge-yellow">LKG / UKG</span>
            <span className="badge badge-blue">Maths</span>
            <span className="badge badge-green">English</span>
            <span className="badge badge-yellow">EVS</span>
            <span className="badge badge-red">Reading</span>
            <span className="badge badge-blue">Handwriting</span>
          </div>
          <div className="prog-grid" data-stagger>
            <article className="card card-hover prog-card blue">
              <span className="pc-ico">
                <NotebookIcon />
              </span>
              <h3>Foundation Building</h3>
              <p>Strong basics in Maths, English &amp; EVS — patient, playful teaching.</p>
              <button className="enquire" data-open-modal data-class="Class 1" data-subjects="Foundation">
                Enquire <ArrowIcon />
              </button>
            </article>
            <article className="card card-hover prog-card green">
              <span className="pc-ico">
                <BookIcon />
              </span>
              <h3>Reading &amp; Handwriting</h3>
              <p>Phonics, comprehension and neat handwriting routines.</p>
              <button
                className="enquire"
                data-open-modal
                data-class="Class 2"
                data-subjects="Reading, Handwriting"
              >
                Enquire <ArrowIcon />
              </button>
            </article>
            <article className="card card-hover prog-card yellow">
              <span className="pc-ico">
                <BulbIcon />
              </span>
              <h3>Homework Support</h3>
              <p>After-school help so homework gets done well.</p>
              <button
                className="enquire"
                data-open-modal
                data-class="Class 3"
                data-subjects="Homework support"
              >
                Enquire <ArrowIcon />
              </button>
            </article>
          </div>
        </section>

        {/* MIDDLE */}
        <section className="stage" data-screen-label="Middle">
          <div className="stage-head">
            <span className="sn" style={{ background: 'var(--green)' }}>
              <GlobeIcon />
            </span>
            <div>
              <h2>Middle — Class 5 to 7</h2>
              <div className="meta">Concept core · languages · social</div>
            </div>
          </div>
          <div className="subj-strip">
            <span className="badge badge-blue">Maths</span>
            <span className="badge badge-green">Science</span>
            <span className="badge badge-red">English</span>
            <span className="badge badge-yellow">Social</span>
            <span className="badge badge-blue">Malayalam / Hindi</span>
          </div>
          <div className="prog-grid" data-stagger>
            <article className="card card-hover prog-card blue">
              <span className="pc-ico">
                <GlobeIcon />
              </span>
              <h3>Maths &amp; Science Core</h3>
              <p>Concept-first so the jump to high school feels easy.</p>
              <button
                className="enquire"
                data-open-modal
                data-class="Class 6"
                data-subjects="Maths, Science"
              >
                Enquire <ArrowIcon />
              </button>
            </article>
            <article className="card card-hover prog-card red">
              <span className="pc-ico">
                <NotebookIcon />
              </span>
              <h3>English &amp; Social</h3>
              <p>Grammar, writing and Social Science for understanding.</p>
              <button
                className="enquire"
                data-open-modal
                data-class="Class 7"
                data-subjects="English, Social"
              >
                Enquire <ArrowIcon />
              </button>
            </article>
            <article className="card card-hover prog-card yellow">
              <span className="pc-ico">
                <LangIcon />
              </span>
              <h3>Language Support</h3>
              <p>Malayalam &amp; Hindi tailored to your board and pace.</p>
              <button
                className="enquire"
                data-open-modal
                data-class="Class 5"
                data-subjects="Languages"
              >
                Enquire <ArrowIcon />
              </button>
            </article>
          </div>
        </section>

        {/* HIGH SCHOOL */}
        <section className="stage" data-screen-label="High school">
          <div className="stage-head">
            <span className="sn" style={{ background: 'var(--red)' }}>
              <TargetIcon />
            </span>
            <div>
              <h2>High School — Class 8 to 10</h2>
              <div className="meta">SSLC board focus · all subjects · exam technique</div>
            </div>
          </div>
          <div className="subj-strip">
            <span className="badge badge-blue">Physics</span>
            <span className="badge badge-green">Chemistry</span>
            <span className="badge badge-red">Biology</span>
            <span className="badge badge-yellow">Maths</span>
            <span className="badge badge-blue">English</span>
            <span className="badge badge-green">Social</span>
          </div>
          <div className="prog-grid" data-stagger>
            <article className="card card-hover prog-card red">
              <span className="pc-ico">
                <TargetIcon />
              </span>
              <h3>SSLC Board Tuition</h3>
              <p>Full Class 10 coverage with revision &amp; model papers.</p>
              <button
                className="enquire"
                data-open-modal
                data-class="Class 10"
                data-subjects="All subjects (SSLC)"
              >
                Enquire <ArrowIcon />
              </button>
            </article>
            <article className="card card-hover prog-card blue">
              <span className="pc-ico">
                <ChartIcon />
              </span>
              <h3>Maths &amp; Science (8–10)</h3>
              <p>Deep clarity in Physics, Chemistry, Biology &amp; Maths.</p>
              <button
                className="enquire"
                data-open-modal
                data-class="Class 9"
                data-subjects="Maths, Science"
              >
                Enquire <ArrowIcon />
              </button>
            </article>
            <article className="card card-hover prog-card green">
              <span className="pc-ico">
                <ShieldIcon />
              </span>
              <h3>Exam Technique</h3>
              <p>Answer-writing, time management &amp; focused revision.</p>
              <button
                className="enquire"
                data-open-modal
                data-class="Class 10"
                data-subjects="Exam technique"
              >
                Enquire <ArrowIcon />
              </button>
            </article>
          </div>
        </section>

        {/* PLUS ONE / TWO */}
        <section className="stage" data-screen-label="Plus One Two">
          <div className="stage-head">
            <span className="sn" style={{ background: 'var(--yellow)', color: 'var(--ink)' }}>
              <AtomIcon />
            </span>
            <div>
              <h2>Plus One &amp; Plus Two — Class 11 &amp; 12</h2>
              <div className="meta">Science · Commerce · Humanities — subject tuition</div>
            </div>
          </div>
          <div className="prog-grid" data-stagger>
            <article className="card card-hover prog-card blue">
              <span className="pc-ico">
                <AtomIcon />
              </span>
              <h3>Science Stream</h3>
              <p>Physics, Chemistry, Maths &amp; Biology subject tuition.</p>
              <div className="pc-chips">
                <span className="badge badge-red">PCM / PCB</span>
              </div>
              <button
                className="enquire"
                data-open-modal
                data-class="Class 11"
                data-subjects="Science (PCM/PCB)"
              >
                Enquire <ArrowIcon />
              </button>
            </article>
            <article className="card card-hover prog-card green">
              <span className="pc-ico">
                <RupeeIcon />
              </span>
              <h3>Commerce Stream</h3>
              <p>Accountancy, Business Studies &amp; Economics with real clarity.</p>
              <div className="pc-chips">
                <span className="badge badge-green">Commerce</span>
              </div>
              <button
                className="enquire"
                data-open-modal
                data-class="Class 12"
                data-subjects="Commerce"
              >
                Enquire <ArrowIcon />
              </button>
            </article>
            <article className="card card-hover prog-card yellow">
              <span className="pc-ico">
                <BookIcon />
              </span>
              <h3>Humanities Stream</h3>
              <p>History, Economics, Political Science &amp; languages.</p>
              <div className="pc-chips">
                <span className="badge badge-yellow">Humanities</span>
              </div>
              <button
                className="enquire"
                data-open-modal
                data-class="Class 11"
                data-subjects="Humanities"
              >
                Enquire <ArrowIcon />
              </button>
            </article>
          </div>
        </section>

        {/* ENTRANCE */}
        <section className="stage" data-screen-label="Entrance">
          <div className="stage-head">
            <span className="sn" style={{ background: 'var(--ink)' }}>
              <TargetIcon />
            </span>
            <div>
              <h2>Entrance Foundation</h2>
              <div className="meta">NEET / JEE foundation · aptitude &amp; reasoning</div>
            </div>
          </div>
          <div className="prog-grid" data-stagger>
            <article className="card card-hover prog-card red">
              <span className="pc-ico">
                <AtomIcon />
              </span>
              <h3>NEET / JEE Foundation</h3>
              <p>Early foundation &amp; aptitude building alongside school.</p>
              <button
                className="enquire"
                data-open-modal
                data-class="Class 11"
                data-subjects="NEET/JEE Foundation"
              >
                Enquire <ArrowIcon />
              </button>
            </article>
            <article className="card card-hover prog-card blue">
              <span className="pc-ico">
                <TargetIcon />
              </span>
              <h3>Aptitude &amp; Reasoning</h3>
              <p>Logical reasoning &amp; problem-solving for any entrance test.</p>
              <button
                className="enquire"
                data-open-modal
                data-class="Class 9"
                data-subjects="Aptitude"
              >
                Enquire <ArrowIcon />
              </button>
            </article>
          </div>
          <p className="price-note">
            Fees vary by class, board and batch type — one-to-one, small batch, online or offline.
            Enquire for current fees and a free demo.
          </p>
        </section>
      </div>

      {/* EXAM-TARGET */}
      <section className="section exam-spot" id="exam-prep" data-screen-label="Exam-target coaching">
        <span className="deco d1" />
        <span className="deco d2" />
        <div className="container">
          <div className="sh center reveal">
            <span className="pulse-tag">
              <span className="dot" /> Exam season · enrolling now
            </span>
            <h2>
              Exam-target batches, <span className="underline-accent">timed to your exam</span>
            </h2>
            <p className="lead maxw">
              From <strong>Class 10 onwards</strong> we open short, high-intensity batches during
              exam season — board (SSLC, +1, +2), half-yearly or term exams, built around your exam
              date.
            </p>
          </div>
          <div className="exam-grid" data-stagger>
            <article className="exam-card">
              <span className="ec-ico">
                <TargetIcon />
              </span>
              <h3>Board exam intensive</h3>
              <p>SSLC, Plus One &amp; Plus Two — revision, previous-year papers &amp; answer-writing.</p>
              <span className="ec-tag">SSLC · +1 · +2</span>
            </article>
            <article className="exam-card">
              <span className="ec-ico">
                <ChartIcon />
              </span>
              <h3>Half-yearly &amp; term exams</h3>
              <p>Focused syllabus revision + timed practice tests for any class from 10th onwards.</p>
              <span className="ec-tag">Class 10+ · term exams</span>
            </article>
            <article className="exam-card">
              <span className="ec-ico">
                <HelpIcon />
              </span>
              <h3>Crash &amp; doubt sessions</h3>
              <p>Daily doubt-clearing and rapid concept fixes in the final run-up — online or offline.</p>
              <span className="ec-tag">Daily · online &amp; offline</span>
            </article>
          </div>
          <div className="center" style={{ marginTop: '2.2rem' }}>
            <button className="btn btn-red btn-lg" data-open-modal data-subjects="Exam-target batch">
              Reserve an exam-target seat
            </button>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section final" data-screen-label="Final CTA">
        <span className="deco d1" />
        <span className="deco d2" />
        <div className="container reveal">
          <h2>Not sure which program fits?</h2>
          <p>Tell us your child's class and board — we'll guide you and set up a free demo.</p>
          <div className="final-cta">
            <button className="btn btn-red btn-lg" data-open-modal>
              Book a Free Demo
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
