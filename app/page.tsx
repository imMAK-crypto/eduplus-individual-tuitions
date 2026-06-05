import {
  ArrowIcon,
  AtomIcon,
  BookIcon,
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
import { SITE, telLink, waLink } from '@/lib/site';

function Stars() {
  return (
    <div className="stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon key={i} />
      ))}
    </div>
  );
}

export default function HomePage() {
  return (
    <main id="main">
      {/* (1) HERO */}
      <section className="hero" data-screen-label="Hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow reveal" style={{ color: 'var(--blue)' }}>
              Beyond Classroom · Ashokapuram, Kozhikode
            </span>
            <h1 className="display reveal" style={{ marginTop: '.6rem' }}>
              Learning that goes <span className="underline-accent">beyond</span> the classroom.
            </h1>
            <p className="lead reveal">
              Personalised, individual tuition for Class 1–12 in Ashokapuram, Kozhikode — Kerala
              State, CBSE &amp; ICSE. Real attention, real results.
            </p>
            <div className="hero-cta reveal">
              <button className="btn btn-red btn-lg" data-open-modal>
                Book a Free Demo Class
              </button>
              <a className="btn btn-outline btn-lg" href={telLink}>
                Call Now
              </a>
            </div>
            <div className="hero-chips" data-stagger>
              <span className="chip">✔ One-to-one &amp; small batches</span>
              <span className="chip">✔ Experienced local teachers</span>
              <span className="chip">✔ Doubt-clearing &amp; mentorship</span>
              <span className="chip">✔ Board-exam focused</span>
            </div>
          </div>
          <div className="hero-visual reveal">
            <span className="blob b1 sq" />
            <span className="blob b2" />
            <span className="blob b3" />
            <span className="blob b4 sq" />
            <div className="hero-photo">
              <span className="slot-label">
                [ photo slot ]
                <br />
                students studying together
                <br />
                warm, real, local · 1:1 ratio
              </span>
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
            <div className="trust-item">
              <span className="ti-ico" style={{ color: 'var(--green)' }}>
                <ClockIcon />
              </span>
              <span>
                <span className="t1">Opens 10:00 AM</span>
                <span className="t2">daily · flexible batches</span>
              </span>
            </div>
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
                Primary (1–4)
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
                    <span className="badge badge-blue">Class 1–4</span>
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
                    Early foundation &amp; aptitude building for competitive exams, alongside school.{' '}
                    <em>[PLACEHOLDER — confirm if offered]</em>
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
            <a className="btn btn-ghost" href="/programs">
              View all programs <ArrowIcon width={18} height={18} />
            </a>
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
              Results that make parents <span className="underline-accent">smile</span>
            </h2>
            <p className="lead maxw">
              Honest, local proof — not vanity metrics.{' '}
              <em>(All figures below are placeholders for the client to confirm.)</em>
            </p>
          </div>
          <div className="stat-band">
            <div className="stat reveal">
              <div className="num" data-count="250" data-suffix="+">
                0
              </div>
              <div className="lbl">
                Students mentored <em>[PLACEHOLDER]</em>
              </div>
            </div>
            <div className="stat reveal">
              <div className="num" data-count="8" data-suffix="+">
                0
              </div>
              <div className="lbl">
                Years in Ashokapuram <em>[PLACEHOLDER]</em>
              </div>
            </div>
            <div className="stat reveal">
              <div className="num" data-count="15" data-suffix="">
                0
              </div>
              <div className="lbl">
                Subjects covered <em>[PLACEHOLDER]</em>
              </div>
            </div>
            <div className="stat reveal">
              <div className="num" data-count="30" data-suffix="%">
                0
              </div>
              <div className="lbl">
                Avg. score improvement <em>[PLACEHOLDER]</em>
              </div>
            </div>
          </div>
          <div className="tst-grid" data-stagger>
            <article className="card tst">
              <Stars />
              <p className="quote">
                &ldquo;My daughter went from dreading Maths to topping her class test. The personal
                attention made all the difference.&rdquo; <em>[PLACEHOLDER testimonial]</em>
              </p>
              <div className="who">
                <span className="av">A</span>
                <span>
                  <span className="nm">Parent of Class 9 student</span>
                  <span className="cl">SSLC · Ashokapuram</span>
                </span>
              </div>
            </article>
            <article className="card tst">
              <Stars />
              <p className="quote">
                &ldquo;They explain until you actually understand. Doubt sessions any day really
                helped before my boards.&rdquo; <em>[PLACEHOLDER testimonial]</em>
              </p>
              <div className="who">
                <span className="av">S</span>
                <span>
                  <span className="nm">Class 10 student</span>
                  <span className="cl">Kerala State</span>
                </span>
              </div>
            </article>
            <article className="card tst">
              <Stars />
              <p className="quote">
                &ldquo;Close to home, caring teachers, and they keep us updated. Exactly what we
                wanted.&rdquo; <em>[PLACEHOLDER testimonial]</em>
              </p>
              <div className="who">
                <span className="av">R</span>
                <span>
                  <span className="nm">Parent of Class 6 student</span>
                  <span className="cl">CBSE</span>
                </span>
              </div>
            </article>
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
                    {SITE.hours} <em>[confirm full weekly hours]</em>
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

const FAQS: { q: string; a: string }[] = [
  {
    q: 'What classes and boards do you teach?',
    a: 'We tutor Class 1–12 across Kerala State, CBSE and ICSE boards — from foundation subjects to full board-exam preparation. <em>[Confirm exact coverage with client.]</em>',
  },
  {
    q: 'Do you offer one-to-one tuition?',
    a: 'Yes. We offer both one-to-one tuition and small batches so every student gets real personal attention.',
  },
  {
    q: 'Where exactly are you located?',
    a: 'Pootholi Building, behind Rajendra Hospital, Ashokapuram, Kozhikode 673001. Plus code 7Q8J+F3.',
  },
  {
    q: 'What are your timings?',
    a: 'We open at 10:00 AM daily, with flexible morning and evening batches. <em>[Confirm full weekly hours with client.]</em>',
  },
  {
    q: 'Is there a free demo class?',
    a: "Yes — your first demo class is free and there's no obligation to continue. It's the best way to see if we're the right fit.",
  },
  {
    q: 'How are batches sized?',
    a: 'We deliberately keep batches small so teachers can give individual attention. <em>[Confirm typical batch size with client.]</em>',
  },
  {
    q: 'How do you track progress?',
    a: 'Through regular tests, doubt sessions and direct parent updates, so you always know how your child is doing.',
  },
];
