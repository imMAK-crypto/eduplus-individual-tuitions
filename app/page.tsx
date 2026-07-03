import Link from 'next/link';
import {
  ArrowIcon,
  AtomIcon,
  BookIcon,
  BrandIllustration,
  BulbIcon,
  ChartIcon,
  CheckIcon,
  ClockIcon,
  CompassIcon,
  GlobeIcon,
  HelpIcon,
  LangIcon,
  NotebookIcon,
  PhoneIcon,
  PinIcon,
  PlusIcon,
  RupeeIcon,
  ShieldIcon,
  StarIcon,
  TargetIcon,
  UsersIcon,
} from '@/lib/icons';
import { SITE, YEARS_ACTIVE, telLink, waLink } from '@/lib/site';
import home from '@/content/home.json';

// Renders a heading, underlining the accent phrase if present (editable in admin).
function AccentTitle({ text, accent }: { text: string; accent?: string }) {
  if (!accent || !text.includes(accent)) return <>{text}</>;
  const i = text.indexOf(accent);
  return (
    <>
      {text.slice(0, i)}
      <span className="underline-accent">{accent}</span>
      {text.slice(i + accent.length)}
    </>
  );
}

function Stars({ label = 'Rated 5 out of 5' }: { label?: string }) {
  return (
    <div className="stars" role="img" aria-label={label}>
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon key={i} aria-hidden="true" />
      ))}
    </div>
  );
}

export default function HomePage() {
  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        // strip markup + any [placeholder] notes so rich results stay clean
        text: f.a.replace(/<[^>]+>/g, '').replace(/\[[^\]]*\]/g, '').replace(/\s+/g, ' ').trim(),
      },
    })),
  };

  return (
    <main id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      {/* (1) HERO */}
      <section className="hero" data-screen-label="Hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow reveal" style={{ color: 'var(--blue)' }}>
              {home.hero.eyebrow}
            </span>
            <h1 className="display reveal" style={{ marginTop: '.6rem' }}>
              <AccentTitle text={home.hero.title} accent={home.hero.accent} />
            </h1>
            <p className="lead reveal">{home.hero.lead}</p>
            <div className="hero-cta reveal">
              <button className="btn btn-red btn-lg" data-open-modal>
                {home.hero.ctaPrimary}
              </button>
              <a className="btn btn-outline btn-lg" href={telLink}>
                {home.hero.ctaSecondary}
              </a>
            </div>
            <a className="hero-exam-link reveal" href="#exam-prep">
              {home.hero.examLink} <ArrowIcon width={16} height={16} />
            </a>
            <div className="hero-chips" data-stagger>
              {home.hero.chips.map((c) => (
                <span key={c} className="chip">
                  {c}
                </span>
              ))}
            </div>
          </div>
          <div className="hero-visual reveal">
            <span className="blob b1 sq" />
            <span className="blob b2" />
            <span className="blob b3" />
            <span className="blob b4 sq" />
            <div className="hero-photo">
              <BrandIllustration className="hero-illus" />
              <span className="illus-note">Photos coming soon</span>
            </div>
          </div>
        </div>
      </section>

      {/* (2) TRUST STRIP */}
      <section className="trust">
        <div className="container">
          <div className="trust-grid" data-stagger>
            <a
              className="trust-item"
              href="https://www.google.com/maps/search/?api=1&query=Eduplus+Ashokapuram+Kozhikode"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="ti-ico" style={{ color: 'var(--yellow)' }}>
                <PinIcon />
              </span>
              <span>
                <span className="t1">Ashokapuram</span>
                <span className="t2">behind Rajendra Hospital</span>
              </span>
            </a>
            <a
              className="trust-item"
              href={SITE.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="ti-ico" style={{ color: 'var(--yellow)' }}>
                <StarIcon />
              </span>
              <span>
                <span className="t1">4.8★ Google rating</span>
                <span className="t2">{SITE.ratingCount} reviews · since {SITE.foundedYear}</span>
              </span>
            </a>
            <div className="trust-item">
              <span className="ti-ico" style={{ color: 'var(--red)' }}>
                <CheckIcon />
              </span>
              <span>
                <span className="t1">Free demo class</span>
                <span className="t2">no obligation</span>
              </span>
            </div>
            <div className="trust-item">
              <span className="ti-ico" style={{ color: 'var(--blue)' }}>
                <BookIcon />
              </span>
              <span>
                <span className="t1">Kerala State · CBSE · ICSE</span>
                <span className="t2">all major boards</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* (2.5) LEARNING MODES + STAGES — one-to-one, online/offline, every stage */}
      <section className="section modes" id="learning" data-screen-label="How we teach">
        <div className="container">
          <div className="sh center reveal">
            <span className="eyebrow" style={{ color: 'var(--red)' }}>
              Individual · one-to-one
            </span>
            <h2>
              One-to-one coaching, <span className="underline-accent">online or offline</span>
            </h2>
            <p className="lead maxw">
              Real individual attention for every class from <strong>LKG to Plus Two</strong> — learn
              at our Ashokapuram centre or live online, whichever suits your family. Rated{' '}
              <strong>4.8★ by parents</strong> since 2015.
            </p>
          </div>

          {/* interactive mode switch (reuses the tabs engine) */}
          <div className="mode-switch" data-tabs>
            <div className="tabs seg" role="tablist" aria-label="Choose learning mode">
              <button className="tab active" role="tab" aria-selected="true" data-tab="mode-offline">
                <PinIcon /> At the centre
              </button>
              <button className="tab" role="tab" aria-selected="false" data-tab="mode-online">
                <GlobeIcon /> Live online
              </button>
            </div>

            <div className="tab-panel show" id="mode-offline" role="tabpanel">
              <div className="mode-card">
                <div className="mc-ico blue">
                  <PinIcon />
                </div>
                <div className="mc-body">
                  <h3>Face-to-face at our centre</h3>
                  <p>
                    One-to-one and small-batch tuition at our Ashokapuram centre, right behind
                    Rajendra Hospital — a calm, focused place to learn.
                  </p>
                  <ul className="mc-list">
                    <li>
                      <CheckIcon /> Fixed teacher &amp; personal attention
                    </li>
                    <li>
                      <CheckIcon /> Printed notes, worksheets &amp; papers
                    </li>
                    <li>
                      <CheckIcon /> Daily in-person doubt-clearing
                    </li>
                    <li>
                      <CheckIcon /> Motivating peer study group
                    </li>
                  </ul>
                  <button className="btn btn-blue" data-open-modal data-subjects="Offline tuition">
                    Book a centre demo
                  </button>
                </div>
              </div>
            </div>

            <div className="tab-panel" id="mode-online" role="tabpanel">
              <div className="mode-card">
                <div className="mc-ico green">
                  <GlobeIcon />
                </div>
                <div className="mc-body">
                  <h3>Live online, from home</h3>
                  <p>
                    The same teacher and the same true one-to-one focus — over live video, from
                    anywhere in Kozhikode or beyond.
                  </p>
                  <ul className="mc-list">
                    <li>
                      <CheckIcon /> Live, interactive one-to-one classes
                    </li>
                    <li>
                      <CheckIcon /> Recordings to revise anytime
                    </li>
                    <li>
                      <CheckIcon /> Flexible morning &amp; evening slots
                    </li>
                    <li>
                      <CheckIcon /> Perfect for exam-season crunch
                    </li>
                  </ul>
                  <button className="btn btn-green" data-open-modal data-subjects="Online tuition">
                    Book an online demo
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* stage bands: LKG–7 · 8–10 · 11 & 12 */}
          <div className="stage-grid" data-stagger>
            <article className="card card-hover stage-card blue">
              <div className="sc-top">
                <span className="sc-range">LKG–7</span>
                <span className="sc-ico">
                  <NotebookIcon />
                </span>
              </div>
              <h3>Strong foundations, built early</h3>
              <p>
                Reading, writing, Maths &amp; concept basics — patient one-to-one teaching that makes
                school feel easy.
              </p>
              <ul className="sc-list">
                <li>
                  <CheckIcon /> All subjects · all boards
                </li>
                <li>
                  <CheckIcon /> Reading, writing &amp; handwriting
                </li>
                <li>
                  <CheckIcon /> Homework &amp; doubt support
                </li>
              </ul>
              <div className="sc-foot">
                <span className="badge badge-blue">1-to-1</span>
                <span className="badge badge-green">Online &amp; offline</span>
              </div>
              <button
                className="enquire"
                data-open-modal
                data-class="Class 5"
                data-subjects="All subjects (foundation)"
              >
                Enquire about this <ArrowIcon />
              </button>
            </article>

            <article className="card card-hover stage-card red">
              <div className="sc-top">
                <span className="sc-range">Class 8–10</span>
                <span className="sc-ico">
                  <TargetIcon />
                </span>
              </div>
              <h3>SSLC &amp; high school, mastered</h3>
              <p>
                Every subject with exam technique, revision &amp; model papers — focused coaching to
                lift your board score.
              </p>
              <ul className="sc-list">
                <li>
                  <CheckIcon /> Physics, Chemistry, Biology &amp; Maths
                </li>
                <li>
                  <CheckIcon /> Answer-writing &amp; time management
                </li>
                <li>
                  <CheckIcon /> Regular tests &amp; feedback
                </li>
              </ul>
              <div className="sc-foot">
                <span className="badge badge-red">Board focus</span>
                <span className="badge badge-green">Online &amp; offline</span>
              </div>
              <button
                className="enquire"
                data-open-modal
                data-class="Class 10"
                data-subjects="All subjects (SSLC)"
              >
                Enquire about this <ArrowIcon />
              </button>
            </article>

            <article className="card card-hover stage-card green">
              <div className="sc-top">
                <span className="sc-range">Class 11 &amp; 12</span>
                <span className="sc-ico">
                  <AtomIcon />
                </span>
              </div>
              <h3>Plus One &amp; Plus Two, targeted</h3>
              <p>
                Science, Commerce &amp; Humanities subject coaching aimed straight at the +1 / +2
                board exam.
              </p>
              <ul className="sc-list">
                <li>
                  <CheckIcon /> Science · Commerce · Humanities
                </li>
                <li>
                  <CheckIcon /> Subject-wise expert teachers
                </li>
                <li>
                  <CheckIcon /> Board &amp; entrance-aligned
                </li>
              </ul>
              <div className="sc-foot">
                <span className="badge badge-green">+1 / +2</span>
                <span className="badge badge-blue">Online &amp; offline</span>
              </div>
              <button
                className="enquire"
                data-open-modal
                data-class="Class 12"
                data-subjects="Plus Two subjects"
              >
                Enquire about this <ArrowIcon />
              </button>
            </article>
          </div>
        </div>
      </section>

      {/* (2.6) EXAM-TARGET TUITION — intensive batches timed to the exam */}
      <section className="section exam-spot" id="exam-prep" data-screen-label="Exam-target coaching">
        <span className="deco d1" />
        <span className="deco d2" />
        <div className="container">
          <div className="sh center reveal">
            <span className="pulse-tag">
              <span className="dot" /> {home.exam.tag}
            </span>
            <h2>
              <AccentTitle text={home.exam.title} accent={home.exam.accent} />
            </h2>
            <p className="lead maxw">{home.exam.lead}</p>
          </div>

          <div className="exam-grid" data-stagger>
            <article className="exam-card">
              <span className="ec-ico">
                <TargetIcon />
              </span>
              <h3>Board exam intensive</h3>
              <p>
                SSLC, Plus One &amp; Plus Two — full revision, previous-year papers, answer-writing
                and marking-scheme practice.
              </p>
              <span className="ec-tag">SSLC · +1 · +2</span>
            </article>
            <article className="exam-card">
              <span className="ec-ico">
                <ChartIcon />
              </span>
              <h3>Half-yearly &amp; term exams</h3>
              <p>
                Quick, focused syllabus revision plus timed practice tests for any class from 10th
                onwards during exam months.
              </p>
              <span className="ec-tag">Class 10+ · term exams</span>
            </article>
            <article className="exam-card">
              <span className="ec-ico">
                <HelpIcon />
              </span>
              <h3>Crash &amp; doubt sessions</h3>
              <p>
                Daily doubt-clearing and rapid concept fixes in the final run-up — online or at the
                centre, whenever you need it.
              </p>
              <span className="ec-tag">Daily · online &amp; offline</span>
            </article>
          </div>

          <div className="exam-tags" data-stagger>
            <span className="etag">SSLC board</span>
            <span className="etag">Plus One</span>
            <span className="etag">Plus Two</span>
            <span className="etag">Half-yearly</span>
            <span className="etag">Model exams</span>
            <span className="etag">Revision papers</span>
          </div>

          <div className="center" style={{ marginTop: '2.4rem' }}>
            <button className="btn btn-red btn-lg" data-open-modal data-subjects="Exam-target batch">
              Reserve an exam-target seat
            </button>
          </div>
        </div>
      </section>

      {/* (3) PROGRAMS */}
      <section className="section" id="programs" data-screen-label="Programs">
        <div className="container">
          <div className="sh center reveal">
            <span className="eyebrow" style={{ color: 'var(--blue)' }}>
              What we teach
            </span>
            <h2>
              Programs for every <span className="underline-accent">stage</span>
            </h2>
            <p className="lead maxw">
              From early foundations to board exams — pick a stage to see how we tailor tuition to
              your child.
            </p>
          </div>

          <div data-tabs>
            <div className="tabs" role="tablist" aria-label="Program stages">
              <button className="tab active" role="tab" aria-selected="true" data-tab="p-primary">
                Foundation (LKG–4)
              </button>
              <button className="tab" role="tab" aria-selected="false" data-tab="p-middle">
                Middle (5–7)
              </button>
              <button className="tab" role="tab" aria-selected="false" data-tab="p-high">
                High School (8–10)
              </button>
              <button className="tab" role="tab" aria-selected="false" data-tab="p-hs">
                Plus One / Plus Two
              </button>
              <button className="tab" role="tab" aria-selected="false" data-tab="p-entrance">
                Entrance Foundation
              </button>
            </div>

            <div className="tab-panel show" id="p-primary" role="tabpanel">
              <div className="prog-grid" data-stagger>
                <article className="card card-hover prog-card blue">
                  <span className="pc-ico">
                    <NotebookIcon />
                  </span>
                  <h3>Foundation Building</h3>
                  <p>
                    Maths, English, EVS &amp; reading confidence — playful, patient teaching that
                    builds strong basics.
                  </p>
                  <div className="pc-chips">
                    <span className="badge badge-blue">LKG–4</span>
                    <span className="badge badge-green">All boards</span>
                  </div>
                  <button
                    className="enquire"
                    data-open-modal
                    data-class="Class 1"
                    data-subjects="Maths, English, EVS"
                  >
                    Enquire about this <ArrowIcon />
                  </button>
                </article>
                <article className="card card-hover prog-card green">
                  <span className="pc-ico">
                    <BookIcon />
                  </span>
                  <h3>Reading &amp; Handwriting</h3>
                  <p>
                    Phonics, comprehension and neat handwriting routines that set young learners up
                    for life.
                  </p>
                  <div className="pc-chips">
                    <span className="badge badge-green">Class 1–4</span>
                  </div>
                  <button
                    className="enquire"
                    data-open-modal
                    data-class="Class 2"
                    data-subjects="Reading, Handwriting"
                  >
                    Enquire about this <ArrowIcon />
                  </button>
                </article>
                <article className="card card-hover prog-card yellow">
                  <span className="pc-ico">
                    <BulbIcon />
                  </span>
                  <h3>Homework Support</h3>
                  <p>
                    After-school help so homework gets done well — and parents get their evenings
                    back.
                  </p>
                  <div className="pc-chips">
                    <span className="badge badge-yellow">Class 1–4</span>
                  </div>
                  <button className="enquire" data-open-modal data-class="Class 3">
                    Enquire about this <ArrowIcon />
                  </button>
                </article>
              </div>
            </div>

            <div className="tab-panel" id="p-middle" role="tabpanel">
              <div className="prog-grid" data-stagger>
                <article className="card card-hover prog-card blue">
                  <span className="pc-ico">
                    <GlobeIcon />
                  </span>
                  <h3>Maths &amp; Science Core</h3>
                  <p>
                    Concept-first teaching in Maths and Science so the jump to high school feels
                    easy.
                  </p>
                  <div className="pc-chips">
                    <span className="badge badge-blue">Class 5–7</span>
                    <span className="badge badge-green">State · CBSE · ICSE</span>
                  </div>
                  <button
                    className="enquire"
                    data-open-modal
                    data-class="Class 6"
                    data-subjects="Maths, Science"
                  >
                    Enquire about this <ArrowIcon />
                  </button>
                </article>
                <article className="card card-hover prog-card red">
                  <span className="pc-ico">
                    <NotebookIcon />
                  </span>
                  <h3>English &amp; Social</h3>
                  <p>Grammar, writing and Social Science taught for understanding — not memorising.</p>
                  <div className="pc-chips">
                    <span className="badge badge-red">Class 5–7</span>
                  </div>
                  <button
                    className="enquire"
                    data-open-modal
                    data-class="Class 7"
                    data-subjects="English, Social"
                  >
                    Enquire about this <ArrowIcon />
                  </button>
                </article>
                <article className="card card-hover prog-card yellow">
                  <span className="pc-ico">
                    <LangIcon />
                  </span>
                  <h3>Language Support</h3>
                  <p>Malayalam &amp; Hindi support tailored to your child's board and pace.</p>
                  <div className="pc-chips">
                    <span className="badge badge-yellow">Class 5–7</span>
                  </div>
                  <button
                    className="enquire"
                    data-open-modal
                    data-class="Class 5"
                    data-subjects="Languages"
                  >
                    Enquire about this <ArrowIcon />
                  </button>
                </article>
              </div>
            </div>

            <div className="tab-panel" id="p-high" role="tabpanel">
              <div className="prog-grid" data-stagger>
                <article className="card card-hover prog-card red">
                  <span className="pc-ico">
                    <TargetIcon />
                  </span>
                  <h3>SSLC Board Tuition</h3>
                  <p>
                    Full coverage of all Class 10 subjects with exam techniques, revision &amp; model
                    papers.
                  </p>
                  <div className="pc-chips">
                    <span className="badge badge-red">Class 10 · SSLC</span>
                    <span className="badge badge-blue">All subjects</span>
                  </div>
                  <button
                    className="enquire"
                    data-open-modal
                    data-class="Class 10"
                    data-subjects="All subjects (SSLC)"
                  >
                    Enquire about this <ArrowIcon />
                  </button>
                </article>
                <article className="card card-hover prog-card blue">
                  <span className="pc-ico">
                    <ChartIcon />
                  </span>
                  <h3>Maths &amp; Science (8–10)</h3>
                  <p>
                    Deep concept clarity in Physics, Chemistry, Biology &amp; Maths — with regular
                    tests.
                  </p>
                  <div className="pc-chips">
                    <span className="badge badge-blue">Class 8–10</span>
                  </div>
                  <button
                    className="enquire"
                    data-open-modal
                    data-class="Class 9"
                    data-subjects="Maths, Science"
                  >
                    Enquire about this <ArrowIcon />
                  </button>
                </article>
                <article className="card card-hover prog-card green">
                  <span className="pc-ico">
                    <ShieldIcon />
                  </span>
                  <h3>Exam Technique &amp; Revision</h3>
                  <p>Answer-writing, time management and focused revision to lift board scores.</p>
                  <div className="pc-chips">
                    <span className="badge badge-green">Class 8–10</span>
                  </div>
                  <button
                    className="enquire"
                    data-open-modal
                    data-class="Class 10"
                    data-subjects="Revision"
                  >
                    Enquire about this <ArrowIcon />
                  </button>
                </article>
              </div>
            </div>

            <div className="tab-panel" id="p-hs" role="tabpanel">
              <div className="prog-grid" data-stagger>
                <article className="card card-hover prog-card blue">
                  <span className="pc-ico">
                    <AtomIcon />
                  </span>
                  <h3>Science Stream (+1 / +2)</h3>
                  <p>Physics, Chemistry, Maths &amp; Biology subject tuition for Plus One &amp; Plus Two.</p>
                  <div className="pc-chips">
                    <span className="badge badge-blue">+1 / +2</span>
                    <span className="badge badge-red">Science</span>
                  </div>
                  <button
                    className="enquire"
                    data-open-modal
                    data-class="Class 11"
                    data-subjects="Physics, Chemistry, Maths"
                  >
                    Enquire about this <ArrowIcon />
                  </button>
                </article>
                <article className="card card-hover prog-card green">
                  <span className="pc-ico">
                    <RupeeIcon />
                  </span>
                  <h3>Commerce Stream</h3>
                  <p>Accountancy, Business Studies &amp; Economics taught with real clarity.</p>
                  <div className="pc-chips">
                    <span className="badge badge-green">+1 / +2</span>
                    <span className="badge badge-blue">Commerce</span>
                  </div>
                  <button
                    className="enquire"
                    data-open-modal
                    data-class="Class 12"
                    data-subjects="Accountancy, Economics"
                  >
                    Enquire about this <ArrowIcon />
                  </button>
                </article>
                <article className="card card-hover prog-card yellow">
                  <span className="pc-ico">
                    <BookIcon />
                  </span>
                  <h3>Humanities Stream</h3>
                  <p>History, Economics, Political Science &amp; languages — board-focused support.</p>
                  <div className="pc-chips">
                    <span className="badge badge-yellow">+1 / +2</span>
                    <span className="badge badge-blue">Humanities</span>
                  </div>
                  <button
                    className="enquire"
                    data-open-modal
                    data-class="Class 11"
                    data-subjects="Humanities"
                  >
                    Enquire about this <ArrowIcon />
                  </button>
                </article>
              </div>
            </div>

            <div className="tab-panel" id="p-entrance" role="tabpanel">
              <div className="prog-grid" data-stagger>
                <article className="card card-hover prog-card red">
                  <span className="pc-ico">
                    <AtomIcon />
                  </span>
                  <h3>NEET / JEE Foundation</h3>
                  <p>
                    Early foundation &amp; aptitude building for competitive exams, alongside school.
                  </p>
                  <div className="pc-chips">
                    <span className="badge badge-red">Class 9–12</span>
                    <span className="badge badge-blue">Foundation</span>
                  </div>
                  <button
                    className="enquire"
                    data-open-modal
                    data-class="Class 11"
                    data-subjects="NEET/JEE Foundation"
                  >
                    Enquire about this <ArrowIcon />
                  </button>
                </article>
                <article className="card card-hover prog-card blue">
                  <span className="pc-ico">
                    <TargetIcon />
                  </span>
                  <h3>Aptitude &amp; Reasoning</h3>
                  <p>Logical reasoning and problem-solving skills that help in any entrance test.</p>
                  <div className="pc-chips">
                    <span className="badge badge-blue">Class 8–12</span>
                  </div>
                  <button
                    className="enquire"
                    data-open-modal
                    data-class="Class 9"
                    data-subjects="Aptitude"
                  >
                    Enquire about this <ArrowIcon />
                  </button>
                </article>
              </div>
            </div>
          </div>

          <div className="center" style={{ marginTop: '2.4rem' }}>
            <Link className="btn btn-ghost" href="/programs">
              View all programs <ArrowIcon width={18} height={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* (4) WHY EDUPLUS */}
      <section
        className="section"
        id="why"
        style={{ background: 'var(--soft)' }}
        data-screen-label="Why Eduplus"
      >
        <div className="container">
          <div className="sh center reveal">
            <span className="eyebrow" style={{ color: 'var(--red)' }}>
              Why Eduplus
            </span>
            <h2>
              Why parents <span className="underline-accent">choose</span> us
            </h2>
            <p className="lead maxw">
              Six reasons families in Ashokapuram trust us with their children — honest, local, and
              personal.
            </p>
          </div>
          <div className="feat-grid" data-stagger>
            <article className="card card-hover feat acc-blue">
              <span className="f-ico">
                <UsersIcon />
              </span>
              <h3>Individual Attention</h3>
              <p>Small batches and genuine one-to-one focus — every child is seen, heard and helped.</p>
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

      {/* (5) RESULTS */}
      <section className="section results" id="results" data-screen-label="Results">
        <div className="container">
          <div className="sh center reveal">
            <span className="eyebrow" style={{ color: 'var(--green-600)' }}>
              Results
            </span>
            <h2>
              Trusted by <span className="underline-accent">Ashokapuram</span> families
            </h2>
            <p className="lead maxw">
              Honest, local proof — a rating earned one student at a time since {SITE.foundedYear}.
            </p>
          </div>
          <div className="stat-band">
            <div className="stat reveal">
              <div className="num">
                4.8<span className="suf">★</span>
              </div>
              <div className="lbl">Google rating</div>
            </div>
            <div className="stat reveal">
              <div className="num" data-count={SITE.ratingCount} data-suffix="+">
                0
              </div>
              <div className="lbl">Parent reviews</div>
            </div>
            <div className="stat reveal">
              <div className="num" data-count={YEARS_ACTIVE} data-suffix="+">
                0
              </div>
              <div className="lbl">Years since {SITE.foundedYear}</div>
            </div>
            <div className="stat reveal">
              <div className="num" data-count="3">
                0
              </div>
              <div className="lbl">Boards · State, CBSE, ICSE</div>
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
            <Stars label="Rated 4.8 out of 5" />
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

      {/* (6) HOW TO JOIN */}
      <section className="section" data-screen-label="How to join">
        <div className="container">
          <div className="sh center reveal">
            <span className="eyebrow" style={{ color: 'var(--blue)' }}>
              How to join
            </span>
            <h2>
              Start in three <span className="underline-accent">simple</span> steps
            </h2>
          </div>
          <div className="steps" data-stagger>
            <div className="step">
              <span className="n">1</span>
              <h3>Reach out</h3>
              <p>
                Request a callback or message us on WhatsApp. Tell us your child's class and board.
              </p>
            </div>
            <div className="step">
              <span className="n">2</span>
              <h3>Free demo class</h3>
              <p>Meet the teacher, see how we work, and get a quick needs assessment — no obligation.</p>
            </div>
            <div className="step">
              <span className="n">3</span>
              <h3>Choose &amp; start</h3>
              <p>Pick a schedule that suits you and begin. We keep you updated every step.</p>
            </div>
          </div>
          <div className="center" style={{ marginTop: '2.6rem' }}>
            <button className="btn btn-red btn-lg" data-open-modal>
              Book your free demo
            </button>
          </div>
        </div>
      </section>

      {/* (7) LOCATION */}
      <section className="section" style={{ background: 'var(--soft)' }} data-screen-label="Location">
        <div className="container">
          <div className="sh reveal">
            <span className="eyebrow" style={{ color: 'var(--red)' }}>
              Visit us
            </span>
            <h2>
              Right here in <span className="underline-accent">Ashokapuram</span>
            </h2>
            <p className="lead">Behind Rajendra Hospital — easy to reach, easy to trust.</p>
          </div>
          <div className="loc-grid">
            <div className="loc-info reveal">
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
                  <ClockIcon />
                </span>
                <span>
                  <span className="t1">Hours</span>
                  <span className="t2">
                    {SITE.hours} · {SITE.hoursNote}
                  </span>
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
                <a
                  className="btn btn-blue"
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE.plusCode)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Directions
                </a>
                <a className="btn btn-green" href={waLink()} target="_blank" rel="noopener noreferrer">
                  WhatsApp us
                </a>
              </div>
            </div>
            <div className="map-wrap reveal">
              <iframe
                title="Map to Eduplus Individual Tuitions, Ashokapuram, Kozhikode"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={SITE.mapsEmbed}
              />
            </div>
          </div>
        </div>
      </section>

      {/* (7.5) AREAS WE SERVE */}
      <section className="section areas-strip" data-screen-label="Areas we serve">
        <div className="container">
          <div className="sh center reveal">
            <span className="eyebrow" style={{ color: 'var(--green-600)' }}>
              Areas we serve
            </span>
            <h2>
              One-to-one tuition across <span className="underline-accent">Kozhikode</span>
            </h2>
            <p className="lead maxw">
              Based in Ashokapuram, behind Rajendra Hospital — and teaching students live online
              across Kerala.
            </p>
          </div>
          <div className="area-chips" data-stagger>
            {SITE.areas.map((a) => (
              <span key={a} className="area-chip">
                <PinIcon /> {a}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* (8) FAQ */}
      <section className="section" data-screen-label="FAQ">
        <div className="container">
          <div className="sh center reveal">
            <span className="eyebrow" style={{ color: 'var(--blue)' }}>
              Questions
            </span>
            <h2>
              Frequently asked <span className="underline-accent">questions</span>
            </h2>
          </div>
          <div className="faq" id="faq">
            {FAQS.map((f, i) => (
              <Qa key={i} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
      </section>

      {/* (9) FINAL CTA */}
      <section className="section final" data-screen-label="Final CTA">
        <span className="deco d1" />
        <span className="deco d2" />
        <div className="container reveal">
          <h2>Give your child the attention they deserve.</h2>
          <p>Book a free demo class today — or just call and talk to us.</p>
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
        <p dangerouslySetInnerHTML={{ __html: a }} />
      </div>
    </div>
  );
}

const FAQS: { q: string; a: string }[] = home.faqs;
