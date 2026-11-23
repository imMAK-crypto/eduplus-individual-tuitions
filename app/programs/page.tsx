import { pageMetadata } from '@/lib/metadata';
import Link from 'next/link';
import {
  ArrowIcon,
  AtomIcon,
  BookIcon,
  BulbIcon,
  ChartIcon,
  CheckIcon,
  GlobeIcon,
  LangIcon,
  HelpIcon,
  NotebookIcon,
  RupeeIcon,
  ShieldIcon,
  TargetIcon,
} from '@/lib/icons';
import { jsonLd, SITE, breadcrumbLd, waLink } from '@/lib/site';
import { hourlyTuitionOffer } from '@/lib/tuitionPricing';
import fees from '@/content/fees.json';

const COURSES = [
  { id: 'foundation', tiers: ['t1'], name: 'Foundation tuition (LKG to Class 4)', description: 'Reading, numeracy and homework support.' },
  { id: 'middle-school', tiers: ['t2'], name: 'Middle school tuition (Classes 5–7)', description: 'Maths, Science, English and languages.' },
  { id: 'high-school', tiers: ['t3', 't4', 't5'], name: 'High school and SSLC tuition', description: 'Class 8 to 10 lessons, revision and exam practice.' },
  { id: 'plus-one-two', tiers: ['t6'], name: 'Plus One and Plus Two tuition', description: 'Science, Commerce and Humanities subjects.' },
  { id: 'exam-prep', tiers: [], name: 'Exam-target coaching', description: 'Board, half-yearly and term exam preparation.' },
  { id: 'say-improvement', tiers: [], name: 'SAY and Improvement coaching', description: 'Subject revision and past-paper practice.' },
];

const courseLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: COURSES.map(({ id, tiers, name, description }, index) => {
    const url = `${SITE.url}/programs#${id}`;
    const offers = fees.tiers.filter((tier) => tiers.includes(tier.id)).map(hourlyTuitionOffer);
    return {
      '@type': 'ListItem',
      position: index + 1,
      url,
      item: {
        '@type': 'Course',
        name,
        description,
        url,
        provider: { '@type': 'EducationalOrganization', '@id': `${SITE.url}/#organization`, name: SITE.name },
        ...(offers.length > 0 && { offers }),
      },
    };
  }),
};

export const metadata = pageMetadata({
  title: 'Tuition Programs for LKG to Class 12',
  description: 'Explore one-to-one tuition from LKG to Plus Two for Kerala State, CBSE and ICSE. Compare foundation, high school and exam programs in Kozhikode.',
  path: '/programs',
  imageTitle: 'Programs LKG to Plus Two',
  imageSubtitle: 'Foundation · SSLC · +1/+2 · exam-target batches',
});

export default function ProgramsPage() {
  return (
    <main id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(courseLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbLd('Programs', '/programs')) }}
      />
      {/* PAGE HERO */}
      <section className="page-hero" data-screen-label="Programs hero">
        <div className="container">
          <div className="crumbs">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span>Programs</span>
          </div>
          <div style={{ maxWidth: '760px' }}>
            <span className="eyebrow" style={{ color: 'var(--blue)' }}>
              What we teach
            </span>
            <h1 className="display" style={{ margin: '.6rem 0 1rem' }}>
              Programs for LKG to Plus Two, <span className="underline-accent">every</span> board.
            </h1>
            <p className="lead">
              Kerala State, CBSE &amp; ICSE — from early foundations to board exams and stream
              subjects, one-to-one and online or offline. Tap any program to enquire and we'll
              arrange a free demo.
            </p>
          </div>
          <div className="hero-chips" style={{ marginTop: '1.4rem' }}>
            <span className="chip">Kerala State</span>
            <span className="chip">CBSE</span>
            <span className="chip">ICSE</span>
            <span className="chip">One-to-one &amp; small batches</span>
          </div>
        </div>
      </section>

      <div className="container">
        {/* PRIMARY */}
        <section className="stage" id="foundation" data-screen-label="Primary">
          <div className="stage-head">
            <span className="sn" style={{ background: 'var(--blue)' }}>
              <NotebookIcon />
            </span>
            <div>
              <h2>Foundation — LKG to Class 4</h2>
              <div className="meta">Pre-primary · reading · homework support</div>
            </div>
          </div>
          <div className="board-line">
            Boards:
            <span className="badge badge-blue">Kerala State</span>
            <span className="badge badge-green">CBSE</span>
            <span className="badge badge-red">ICSE</span>
          </div>
          <div className="subj-strip">
            <span className="badge badge-yellow">LKG / UKG</span>
            <span className="badge badge-blue">Maths</span>
            <span className="badge badge-green">English</span>
            <span className="badge badge-yellow">EVS</span>
            <span className="badge badge-red">Reading</span>
            <span className="badge badge-blue">Phonics</span>
          </div>
          <div className="prog-grid">
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
              <h3>Reading &amp; Phonics</h3>
              <p>Phonics, comprehension and confident reading habits.</p>
              <button
                className="enquire"
                data-open-modal
                data-class="Class 2"
                data-subjects="Reading, Phonics"
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
        <section className="stage" id="middle-school" data-screen-label="Middle">
          <div className="stage-head">
            <span className="sn" style={{ background: 'var(--green)' }}>
              <GlobeIcon />
            </span>
            <div>
              <h2>Middle — Class 5 to 7</h2>
              <div className="meta">Concept core · languages · social</div>
            </div>
          </div>
          <div className="board-line">
            Boards:
            <span className="badge badge-blue">Kerala State</span>
            <span className="badge badge-green">CBSE</span>
            <span className="badge badge-red">ICSE</span>
          </div>
          <div className="subj-strip">
            <span className="badge badge-blue">Maths</span>
            <span className="badge badge-green">Science</span>
            <span className="badge badge-red">English</span>
            <span className="badge badge-yellow">Social</span>
            <span className="badge badge-blue">Malayalam / Hindi</span>
          </div>
          <div className="prog-grid">
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
        <section className="stage" id="high-school" data-screen-label="High school">
          <div className="stage-head">
            <span className="sn" style={{ background: 'var(--red)' }}>
              <TargetIcon />
            </span>
            <div>
              <h2>High School — Class 8 to 10</h2>
              <div className="meta">SSLC board focus · all subjects · exam technique</div>
            </div>
          </div>
          <div className="board-line">
            Boards:
            <span className="badge badge-blue">Kerala State</span>
            <span className="badge badge-green">CBSE</span>
            <span className="badge badge-red">ICSE</span>
          </div>
          <div className="subj-strip">
            <span className="badge badge-blue">Physics</span>
            <span className="badge badge-green">Chemistry</span>
            <span className="badge badge-red">Biology</span>
            <span className="badge badge-yellow">Maths</span>
            <span className="badge badge-blue">English</span>
            <span className="badge badge-green">Social</span>
          </div>
          <div className="prog-grid">
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
        <section className="stage" id="plus-one-two" data-screen-label="Plus One Two">
          <div className="stage-head">
            <span className="sn" style={{ background: 'var(--yellow)', color: 'var(--ink)' }}>
              <AtomIcon />
            </span>
            <div>
              <h2>Plus One &amp; Plus Two — Class 11 &amp; 12</h2>
              <div className="meta">Science · Commerce · Humanities — subject tuition</div>
            </div>
          </div>
          <div className="board-line">
            Boards:
            <span className="badge badge-blue">Kerala State</span>
            <span className="badge badge-green">CBSE</span>
            <span className="badge badge-red">ICSE</span>
          </div>
          <div className="prog-grid">
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

        <p className="price-note">
          Simple per-hour fees — ₹150/hr (Class I–IV) up to ₹350/hr (Plus One / Plus Two), one-time
          ₹500 admission. <Link href="/fees">See the full fee structure →</Link>
        </p>
      </div>

      {/* EXAM-TARGET */}
      <section className="section exam-spot" id="exam-prep" data-screen-label="Exam-target coaching">
        <span className="deco d1" />
        <span className="deco d2" />
        <div className="container">
          <div className="sh center">
            <span className="pulse-tag">
              <span className="dot" /> Exam season · enrolling now
            </span>
            <h2>
              Exam-target batches, <span className="underline-accent">timed to your exam</span>
            </h2>
            <p className="lead maxw">
              From <strong>Class 10 onwards</strong> we open short, high-intensity batches during
              exam season — board (SSLC, +1, +2), half-yearly or term exams, plus{' '}
              <strong>SAY &amp; Improvement classes</strong> for Plus One and Plus Two, built around
              your exam date.
            </p>
          </div>
          <div className="exam-grid">
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
            <article className="exam-card" id="say-improvement">
              <span className="ec-ico">
                <HelpIcon />
              </span>
              <h3>SAY, Improvement &amp; exam assistance</h3>
              <p>Dedicated SAY &amp; Improvement batches for +1 / +2, with daily doubt-clearing and exam-day support.</p>
              <span className="ec-tag">+1 / +2 · SAY &amp; Improvement</span>
            </article>
          </div>
          <div className="center" style={{ marginTop: '2.2rem' }}>
            <button className="btn btn-red btn-lg" data-open-modal data-subjects="Exam-target batch">
              Reserve an exam-target seat
            </button>
            <Link className="btn btn-outline btn-lg" href="/exam-prep">Compare exam preparation options</Link>
          </div>
        </div>
      </section>

      {/* STUDENT COUNSELLING — new service, full page at /counselling */}
      <section className="section" data-screen-label="Counselling">
        <div className="container">
          <div className="fee-tease-card counsel-tease">
            <div className="ft-copy">
              <span className="pulse-tag">
                <span className="dot" /> Student counselling services
              </span>
              <h2>
                Support beyond <span className="underline-accent">marks</span>
              </h2>
              <p className="lead">
                Guidance and counselling for students facing difficulties with studies,
                stress, confidence, emotions or behaviour, plus career guidance after SSLC and Plus
                Two. Contact our Ashokapuram centre for appointment details.
              </p>
              <Link className="btn btn-red" href="/counselling">
                Explore student counselling <ArrowIcon />
              </Link>
            </div>
            <ul className="compare-list" aria-label="Counselling areas">
              <li className="yes"><CheckIcon /> Academic stress &amp; exam anxiety</li>
              <li className="yes"><CheckIcon /> Low confidence &amp; motivation</li>
              <li className="yes"><CheckIcon /> Study difficulties</li>
              <li className="yes"><CheckIcon /> Emotional &amp; behavioural concerns</li>
              <li className="yes"><CheckIcon /> Career guidance</li>
              <li className="yes"><CheckIcon /> Personal development</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section final" data-screen-label="Final CTA">
        <span className="deco d1" />
        <span className="deco d2" />
        <div className="container">
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
