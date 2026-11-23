// Local-SEO landing pages: one entry per locality / search-intent page,
// rendered by app/[slug]/page.tsx. Every page gets unique copy + FAQs —
// never template-swap the text, thin duplicate pages get ignored by Google.

export type SeoPage = {
  slug: string;
  kind: 'locality' | 'intent';
  /** Locality name for Service.areaServed (locality pages only) */
  area?: string;
  /** Short label for breadcrumbs / footer links */
  name: string;
  title: string;
  description: string;
  ogTitle: string;
  ogSub: string;
  eyebrow: string;
  h1: string;
  accent?: string;
  lead: string;
  chips: string[];
  intro: string[];
  points: { title: string; text: string }[];
  faqs: { q: string; a: string }[];
  serviceName: string;
};

export const SEO_PAGES: SeoPage[] = [
  // ─────────────────────────────── LOCALITY PAGES ───────────────────────────────
  {
    slug: 'tuition-in-nadakkavu',
    kind: 'locality',
    area: 'Nadakkavu',
    name: 'Tuition in Nadakkavu',
    title: 'One-to-One Tuition near Nadakkavu',
    description:
      'Find one-to-one tuition near Nadakkavu at our Ashokapuram centre or online. LKG to Class 12, Kerala State, CBSE and ICSE. Book a free demo class.',
    ogTitle: 'Tuition near Nadakkavu, Kozhikode',
    ogSub: 'One-to-one · LKG to Plus Two · online & offline',
    eyebrow: 'Serving Nadakkavu families',
    h1: 'Tuition near Nadakkavu — minutes from your doorstep.',
    accent: 'minutes',
    lead: 'Our Ashokapuram centre sits just off Balan K. Nair Road, an easy ride from Nadakkavu — true one-to-one tuition for LKG to Plus Two, at the centre or live online, across Kerala State, CBSE and ICSE.',
    chips: [
      'Minutes from Nadakkavu',
      'LKG to Plus Two',
      'Kerala State · CBSE · ICSE',
      'Online & offline',
    ],
    intro: [
      'Plenty of Nadakkavu families already study with us — school gets over, and students reach our centre behind Rajendra Hospital in a short auto or bike ride down Balan K. Nair Road. Afternoon and evening slots (Mon–Fri 2 PM – 7 PM) are timed exactly for after-school tuition, and weekend batches run from 7 AM.',
      'Prefer to skip the trip on rainy days? Every programme also runs live online with the same teacher and the same one-to-one attention — so a student in Nadakkavu can mix centre classes and online classes in the same week.',
    ],
    points: [
      { title: 'Genuinely close by', text: 'Ashokapuram centre, behind Rajendra Hospital — a short ride from Nadakkavu, no long commute after school.' },
      { title: 'True one-to-one', text: 'A fixed teacher who knows your child — not a crowded batch where doubts go unasked.' },
      { title: 'All three boards', text: 'Kerala State, CBSE and ICSE — matched to your school’s textbook and exam pattern.' },
      { title: 'After-school timings', text: 'Weekdays 2 PM – 7 PM and weekend batches from 7 AM — built around school hours.' },
      { title: 'Exam-target batches', text: 'SSLC, Plus One & Plus Two intensives, plus SAY & Improvement classes when it matters most.' },
      { title: 'Free demo first', text: 'Meet the teacher, see the method, then decide — the first class costs nothing.' },
    ],
    faqs: [
      {
        q: 'How far is Eduplus from Nadakkavu?',
        a: 'Our centre is in Ashokapuram, behind Rajendra Hospital and just off Balan K. Nair Road — a short auto or two-wheeler ride from Nadakkavu. Many of our students come from the Nadakkavu side after school for the 2 PM – 7 PM weekday slots.',
      },
      {
        q: 'Do you offer online tuition for students in Nadakkavu?',
        a: 'Yes. Every programme runs live online with the same teacher and the same one-to-one format, so Nadakkavu students can attend from home whenever travelling is inconvenient — or mix online and centre classes in the same week.',
      },
      {
        q: 'Which classes and boards do you cover for Nadakkavu students?',
        a: 'Everything from LKG to Class 12 (Plus Two) across Kerala State, CBSE and ICSE — foundation subjects, high-school and SSLC coaching, and stream-wise Plus One / Plus Two tuition in Science, Commerce and Humanities.',
      },
      {
        q: 'How do I start?',
        a: 'Call or WhatsApp us with your child’s class and board, and we’ll arrange a free demo class — at the Ashokapuram centre or online. There’s no obligation to continue after the demo.',
      },
    ],
    serviceName: 'One-to-one tuition for students in Nadakkavu, Kozhikode',
  },
  {
    slug: 'tuition-in-eranhipalam',
    kind: 'locality',
    area: 'Eranhipalam',
    name: 'Tuition in Eranhipalam',
    title: 'One-to-One Tuition near Eranhipalam',
    description:
      'Looking for tuition near Eranhipalam? Book a free one-to-one demo at our Ashokapuram centre or live online, from LKG to Plus Two. See hours and fees.',
    ogTitle: 'Tuition near Eranhipalam, Kozhikode',
    ogSub: 'Individual coaching · LKG–12 · all boards',
    eyebrow: 'Serving Eranhipalam families',
    h1: 'One-to-one tuition, an easy ride from Eranhipalam.',
    accent: 'easy ride',
    lead: 'From Eranhipalam junction, our Ashokapuram centre is a quick trip — and the teaching is worth it: individual attention for LKG to Plus Two, online or in person, across all three boards.',
    chips: [
      'Easy ride from Eranhipalam',
      'Individual attention',
      'SSLC · +1 · +2 focus',
      'Online & offline',
    ],
    intro: [
      'Eranhipalam students juggle busy school schedules — so our weekday 2 PM – 7 PM slots and early weekend batches (from 7 AM) are designed to fit around them, not the other way round. The centre is in Ashokapuram, behind Rajendra Hospital, a straightforward ride from the Eranhipalam side of town.',
      'For board years — Class 10, Plus One and Plus Two — we add exam-target batches with model papers, answer-writing practice and daily doubt-clearing. And when travel is a hassle, the same teacher takes the class live online.',
    ],
    points: [
      { title: 'Convenient from Eranhipalam', text: 'A quick trip to Ashokapuram — or zero trip at all with live online classes.' },
      { title: 'A teacher who knows your child', text: 'Fixed teacher, one-to-one pace, weekly parent updates — nothing anonymous.' },
      { title: 'Board-exam serious', text: 'SSLC, Plus One and Plus Two coaching with real exam technique, not just syllabus coverage.' },
      { title: 'SAY & Improvement rescue', text: 'Dedicated batches for +1 / +2 SAY and Improvement exams, with exam assistance.' },
      { title: 'Weekend morning batches', text: 'Sat & Sun from 7 AM — full study mornings before the week starts.' },
      { title: 'Simple per-hour fees', text: 'Clear hourly rates by class and a one-time admission fee — see the fee page.' },
    ],
    faqs: [
      {
        q: 'Where exactly is the centre, coming from Eranhipalam?',
        a: 'We’re at Pootholi Building, behind Rajendra Hospital, Ashokapuram — a short ride from Eranhipalam junction towards the Balan K. Nair Road area. Message us on WhatsApp and we’ll share the exact map pin.',
      },
      {
        q: 'My child is in Class 10 — is it too late to join mid-year?',
        a: 'No. Alongside regular tuition we run short exam-target batches that start closer to the exam — focused revision, previous-year papers and answer-writing. We assess where your child stands and build the plan backwards from the exam date.',
      },
      {
        q: 'Can Eranhipalam students take classes fully online?',
        a: 'Yes — the full programme works online, live and one-to-one, with recordings to revise later. Many families mix modes: online on busy days, at the centre on weekends.',
      },
      {
        q: 'What does tuition cost?',
        a: 'Fees are simple per-hour rates that rise with the class level, from ₹150/hour for Class I–IV up to ₹350/hour for Plus One / Plus Two, plus a one-time ₹500 admission fee. The full table is on our fees page.',
      },
    ],
    serviceName: 'One-to-one tuition for students in Eranhipalam, Kozhikode',
  },
  {
    slug: 'tuition-in-mankavu',
    kind: 'locality',
    area: 'Mankavu',
    name: 'Tuition in Mankavu',
    title: 'One-to-One Tuition near Mankavu',
    description:
      'Families in Mankavu can join Eduplus at our Ashokapuram centre or live online. One-to-one tuition from LKG to Plus Two, with weekend classes.',
    ogTitle: 'Tuition near Mankavu, Kozhikode',
    ogSub: 'One-to-one · foundation to Plus Two',
    eyebrow: 'Serving Mankavu families',
    h1: 'Individual tuition for Mankavu families.',
    accent: 'Mankavu',
    lead: 'A short drive from Mankavu — or live online at home — Eduplus gives every student a fixed teacher and true one-to-one attention, from LKG foundations to the Plus Two board exam.',
    chips: [
      'Short drive from Mankavu',
      'LKG foundations to +2',
      'Fixed teacher · 1-to-1',
      'Online & offline',
    ],
    intro: [
      'For younger children in Mankavu — LKG to Class 7 — we build the basics patiently: reading, writing, Maths and concept clarity, one-to-one with a teacher who adjusts to the child’s pace. Parents get direct updates, not report-card surprises.',
      'For the board years, Mankavu students join our SSLC and Plus One / Plus Two coaching — at the Ashokapuram centre a short drive away, or fully online. Exam season brings focused batches: revision, model papers, timed mocks and daily doubt-clearing.',
    ],
    points: [
      { title: 'Foundation done right', text: 'LKG–7 basics taught patiently, one-to-one — school starts feeling easy.' },
      { title: 'Board-year firepower', text: 'SSLC and +1 / +2 coaching with model papers, mocks and marking-scheme practice.' },
      { title: 'Online when it suits', text: 'Live one-to-one classes at home in Mankavu — same teacher, zero commute.' },
      { title: 'Open all 7 days', text: 'Weekdays 2 PM – 7 PM, weekends 7 AM – 6:30 PM — tuition fits your family’s week.' },
      { title: 'Three boards covered', text: 'Kerala State, CBSE and ICSE — matched to your school’s pattern.' },
      { title: 'Honest, local, personal', text: 'Teaching in Kozhikode since 2015 — trusted by families, one student at a time.' },
    ],
    faqs: [
      {
        q: 'Is the centre far from Mankavu?',
        a: 'It’s a short drive — we’re in Ashokapuram, behind Rajendra Hospital. Weekend batches are popular with Mankavu families, and on weekdays many students simply take the same class live online from home.',
      },
      {
        q: 'Do you take very young children?',
        a: 'Yes — we start from LKG. Early classes focus on reading, writing, phonics and number basics, taught gently and one-to-one. A free demo class lets you and your child see the fit before committing.',
      },
      {
        q: 'Which subjects do you cover for high-school students from Mankavu?',
        a: 'All of them — Maths, Physics, Chemistry, Biology, English, Social Science and languages for Class 8–10, and stream-wise subjects (Science, Commerce, Humanities) for Plus One and Plus Two.',
      },
      {
        q: 'How are parents kept in the loop?',
        a: 'Regular tests, direct WhatsApp updates and honest feedback from the teacher — you’ll always know what’s improving and what we’re working on next.',
      },
    ],
    serviceName: 'One-to-one tuition for students in Mankavu, Kozhikode',
  },
  {
    slug: 'tuition-in-chevayur',
    kind: 'locality',
    area: 'Chevayur',
    name: 'Tuition in Chevayur',
    title: 'One-to-One Tuition near Chevayur',
    description:
      'Join live one-to-one classes from Chevayur or visit our Ashokapuram centre. Tuition for LKG to Class 12 across Kerala State, CBSE and ICSE. Enquire now.',
    ogTitle: 'Tuition for Chevayur students',
    ogSub: 'Live online 1-to-1 · or at our Ashokapuram centre',
    eyebrow: 'Serving Chevayur & Medical College area',
    h1: 'Tuition for Chevayur students — online first, centre when you want.',
    accent: 'online first',
    lead: 'Chevayur and the Medical College side are a longer ride from Ashokapuram — which is exactly why our live online one-to-one classes are the favourite here: same fixed teacher, full attention, no commute. The centre is always there for weekends.',
    chips: [
      'Live online 1-to-1',
      'Weekend centre batches',
      'LKG to Plus Two',
      'All three boards',
    ],
    intro: [
      'For families around Chevayur, daily travel across town after school is a real cost. So most of our Chevayur students study live online — true one-to-one video classes with a fixed teacher, recordings to revise from, and doubt-clearing on any day. Progress tests and parent updates work exactly as they do at the centre.',
      'Students who want in-person contact join the weekend batches (7 AM – 6:30 PM) at Ashokapuram — many do a hybrid week: online on school days, at the centre on Saturday or Sunday. Board-year students get the full exam-target treatment either way.',
    ],
    points: [
      { title: 'No cross-town commute', text: 'Live online one-to-one classes at home in Chevayur — attention without the travel.' },
      { title: 'Hybrid weekends', text: 'Optional Saturday / Sunday sessions at the Ashokapuram centre, 7 AM – 6:30 PM.' },
      { title: 'Recordings included', text: 'Every online class can be revised again before tests — nothing is lost.' },
      { title: 'Fixed teacher, real bond', text: 'The same teacher every class, who knows exactly where your child stands.' },
      { title: 'Exam-target batches', text: 'SSLC, +1, +2, SAY & Improvement intensives — online or offline.' },
      { title: 'Malayalam · English · Hindi', text: 'Teachers comfortable in all three — explanations that actually land.' },
    ],
    faqs: [
      {
        q: 'Do Chevayur students have to come to Ashokapuram?',
        a: 'No — every programme runs fully online, live and one-to-one. Chevayur families usually pick online for weekdays and, if they want, the weekend batches at our Ashokapuram centre. Both modes have the same teacher and the same syllabus plan.',
      },
      {
        q: 'Is online tuition as effective as sitting in the centre?',
        a: 'For one-to-one classes, yes — the teacher sees the student’s work live, corrects it on the spot and sets the pace exactly as in person. Plus you get recordings to revise from, which centre classes don’t leave behind.',
      },
      {
        q: 'What equipment does my child need for online classes?',
        a: 'A phone, tablet or laptop with a stable internet connection is enough. We keep the setup simple — join link, notebook, and the teacher handles the rest.',
      },
      {
        q: 'Can my child switch between online and centre classes?',
        a: 'Yes, anytime — the plan, teacher and progress tracking stay the same. Many Chevayur students go hybrid during exam season for extra in-person practice.',
      },
    ],
    serviceName: 'One-to-one tuition for students in Chevayur, Kozhikode',
  },
  {
    slug: 'home-tuition-calicut',
    kind: 'locality',
    area: 'Kozhikode (Calicut)',
    name: 'Home Tuition in Calicut',
    title: 'Online Tuition at Home in Calicut',
    description:
      'Study from home in Calicut with live one-to-one online tuition for LKG to Class 12. See how classes work, compare fees and book a free demo.',
    ogTitle: 'Home tuition in Calicut, done better',
    ogSub: 'One-to-one at home (live online) or at our centre',
    eyebrow: 'The home-tuition alternative',
    h1: 'Home tuition in Calicut — the attention you want, minus the risks.',
    accent: 'attention you want',
    lead: 'Parents search for home tuition because they want one thing: a teacher fully focused on their child. Eduplus delivers exactly that — live one-to-one classes at your home over video, or at our Ashokapuram centre — with the structure a lone home tutor can’t offer.',
    chips: [
      'True 1-to-1 attention',
      'At home via live online',
      'Tests & parent updates',
      '₹150–₹350 per hour',
    ],
    intro: [
      'A single home tutor can be great — until classes get cancelled, progress goes unmeasured, and nobody is accountable. Eduplus keeps everything parents love about home tuition (one child, one teacher, home comfort, flexible timing) and adds what’s usually missing: a real syllabus plan, regular tests, parent updates, and a centre standing behind the teacher.',
      'Classes happen live at your home over video — your child studies from their own desk anywhere in Calicut, from Beach Road to Malaparamba — or in person at our centre in Ashokapuram, behind Rajendra Hospital. Same fixed teacher, same one-to-one format either way.',
    ],
    points: [
      { title: 'One child, one teacher', text: 'The core promise of home tuition, kept properly — full attention, fixed teacher.' },
      { title: 'Accountable, not ad-hoc', text: 'Planned syllabus coverage, regular tests and honest parent updates every step.' },
      { title: 'At home, without strangers', text: 'Live online classes mean full home comfort with complete transparency — parents can watch any class.' },
      { title: 'Never lose a class', text: 'Teacher unavailable? We arrange cover. A lone tutor’s cancellation is simply a lost week.' },
      { title: 'All classes, all boards', text: 'LKG to Plus Two — Kerala State, CBSE and ICSE, every subject.' },
      { title: 'Transparent hourly fees', text: '₹150–₹350 per hour by class, one-time ₹500 admission — no packages, no surprises.' },
    ],
    faqs: [
      {
        q: 'Do you send tutors to homes in Calicut?',
        a: 'Our teachers teach at your home live over video — true one-to-one, with the parent free to sit in — or in person at our Ashokapuram centre. We don’t send tutors into homes; the live online format gives the same at-home convenience with better structure, transparency and safety.',
      },
      {
        q: 'How is this better than hiring a private home tutor?',
        a: 'You keep the one-to-one attention but gain a planned syllabus, regular tests, parent reports, backup when a teacher is unavailable, and a centre that’s answerable for results — things an individual tutor arrangement rarely provides.',
      },
      {
        q: 'What does it cost compared to home tuition?',
        a: 'Usually less. Our rates are simple per-hour fees by class — ₹150/hour for Class I–IV rising to ₹350/hour for Plus One / Plus Two, with a one-time ₹500 admission fee. Home tutors in Calicut often charge more with no tests or reporting.',
      },
      {
        q: 'Which areas of Calicut do you cover?',
        a: 'All of them — because classes are live online, a student anywhere in Kozhikode district (or anywhere in Kerala) gets the same teacher and programme. In-person classes run at our Ashokapuram centre, behind Rajendra Hospital.',
      },
    ],
    serviceName: 'Home-style one-to-one tuition across Calicut (live online & centre)',
  },

  // ─────────────────────────────── INTENT PAGES ───────────────────────────────
  {
    slug: 'sslc-tuition-kozhikode',
    kind: 'intent',
    name: 'SSLC Tuition',
    title: 'SSLC Tuition in Kozhikode',
    description:
      'Prepare for Kerala SSLC with one-to-one Class 10 tuition, timed practice and help with difficult chapters. Join in Kozhikode or live online.',
    ogTitle: 'SSLC tuition in Kozhikode',
    ogSub: 'All subjects · model papers · exam technique',
    eyebrow: 'Class 10 · SSLC',
    h1: 'SSLC tuition built for the board exam, not just the syllabus.',
    accent: 'board exam',
    lead: 'Class 10 is the first exam that follows a student around. Our SSLC coaching covers every subject one-to-one — then goes further: previous-year papers, answer-writing, marking-scheme practice and timed mocks until exam day feels familiar.',
    chips: [
      'All Class 10 subjects',
      'Kerala State · CBSE · ICSE',
      'Model papers & mocks',
      'One-to-one · online & offline',
    ],
    intro: [
      'SSLC marks are decided by technique as much as knowledge: which questions to attempt first, how the marking scheme rewards steps, how to finish the paper on time. From day one we teach concepts for understanding — and from mid-year we layer in exam craft with previous-year papers and timed practice.',
      'Students join in two ways: regular year-long tuition (all subjects or the ones that hurt), or the shorter exam-target batches that start closer to the boards — intensive revision, daily doubt-clearing and exam assistance right up to the hall. Both run one-to-one, at our Ashokapuram centre or live online anywhere in Kozhikode.',
    ],
    points: [
      { title: 'Every subject covered', text: 'Maths, Physics, Chemistry, Biology, English, Social Science and languages — full SSLC coverage.' },
      { title: 'Marking-scheme smart', text: 'Answers written the way examiners award marks — steps, keywords, presentation.' },
      { title: 'Previous-year papers', text: 'Solved and practised under time pressure, so the real paper holds no surprises.' },
      { title: 'Weak-spot targeting', text: 'One-to-one format means we drill exactly the chapters that lose your child marks.' },
      { title: 'Timed mock exams', text: 'Regular full-length mocks with honest feedback and a fix-it plan after each.' },
      { title: 'Exam-season batches', text: 'Short intensive batches before the boards — plus half-yearly and term-exam support.' },
    ],
    faqs: [
      {
        q: 'When should a Class 10 student join SSLC tuition?',
        a: 'Ideally at the start of the academic year, so concepts and exam craft build together. But students join mid-year too — we assess the gaps and prioritise high-weight chapters. Closer to the exam, the exam-target batch handles revision, papers and mocks.',
      },
      {
        q: 'Do you cover CBSE and ICSE Class 10, or only Kerala State SSLC?',
        a: 'All three. Teaching follows your school’s board — Kerala State SSLC, CBSE or ICSE — with that board’s textbooks, question patterns and marking schemes.',
      },
      {
        q: 'Is SSLC tuition one-to-one or in a batch?',
        a: 'One-to-one is our default, with small batches available. Exam-season intensives stay small on purpose, so every student’s weak areas actually get addressed.',
      },
      {
        q: 'Can SSLC coaching be taken fully online?',
        a: 'Yes — live one-to-one online classes with recordings for revision work anywhere in Kozhikode or across Kerala. Mocks and papers are handled online too, with the same timing discipline.',
      },
    ],
    serviceName: 'SSLC / Class 10 board exam tuition',
  },
  {
    slug: 'plus-two-tuition-kozhikode',
    kind: 'intent',
    name: 'Plus One & Plus Two Tuition',
    title: 'Plus Two Tuition in Kozhikode',
    description:
      'Get Plus One and Plus Two tuition for Science, Commerce or Humanities. Book a demo for individual lessons or ask about SAY and Improvement batches.',
    ogTitle: 'Plus One & Plus Two tuition, Kozhikode',
    ogSub: 'Science · Commerce · Humanities · SAY & Improvement',
    eyebrow: 'Plus One & Plus Two',
    h1: 'Plus One & Plus Two tuition, stream by stream.',
    accent: 'stream by stream',
    lead: 'Higher secondary is where marks start deciding futures — and where big-batch coaching quietly fails quiet students. We teach +1 and +2 subjects one-to-one, stream-wise: Science, Commerce and Humanities, aimed straight at the board exam.',
    chips: [
      'Science · Commerce · Humanities',
      'Subject-wise expert teachers',
      'SAY & Improvement batches',
      '₹350/hour · free demo',
    ],
    intro: [
      'Pick the subjects that need firepower — Physics, Chemistry, Maths, Biology on the Science side; Accountancy, Business Studies, Economics for Commerce; History, Political Science, Economics and languages for Humanities. Each runs one-to-one with a teacher who works that subject’s board pattern: previous-year papers, answer frameworks, marking-scheme practice.',
      'And if a result goes wrong, we’re the centre Kozhikode students come to for the rescue rounds: dedicated SAY (Save A Year) and Improvement exam batches for both Plus One and Plus Two, with exam assistance right up to the hall — weekdays 2 PM – 7 PM, weekends 7 AM – 6:30 PM.',
    ],
    points: [
      { title: 'Stream-wise depth', text: 'Science, Commerce and Humanities taught by subject — not one teacher stretching across all.' },
      { title: 'Board-exam aim', text: 'Every chapter tied back to how the +1 / +2 board papers actually ask it.' },
      { title: 'SAY & Improvement', text: 'Dedicated second-chance batches — rewrite the result without losing the year.' },
      { title: 'One-to-one pace', text: 'Struggling chapter? We slow down. Strong chapter? We bank it and move on.' },
      { title: 'Online across Kerala', text: 'Live one-to-one classes with recordings — join from anywhere, not just Kozhikode.' },
      { title: 'Honest ₹350/hour', text: 'Plus Two’s rate is a flat per-hour fee with a one-time ₹500 admission — nothing hidden.' },
    ],
    faqs: [
      {
        q: 'Which Plus One and Plus Two subjects do you teach?',
        a: 'Science: Physics, Chemistry, Maths and Biology. Commerce: Accountancy, Business Studies and Economics. Humanities: History, Economics, Political Science and languages. Take one subject or several — each is taught one-to-one by a subject-focused teacher.',
      },
      {
        q: 'Do you run SAY and Improvement exam batches?',
        a: 'Yes — dedicated SAY (Save A Year) and Improvement batches for Plus One and Plus Two, with focused revision, previous-year papers, answer-writing and exam assistance through the exam window. Timings: Mon–Fri 2 PM – 7 PM, Sat & Sun 7 AM – 6:30 PM.',
      },
      {
        q: 'What are the fees for Plus Two tuition?',
        a: 'A simple ₹350 per hour for Plus One / Plus Two, plus a one-time ₹500 admission fee. Rates may vary slightly for ICSE / IGCSE syllabi — the full structure is on our fees page.',
      },
      {
        q: 'Kerala State, CBSE or ICSE — which +2 boards do you handle?',
        a: 'All three. The teacher follows your board’s textbook, question pattern and marking scheme, whether it’s Kerala Higher Secondary (DHSE), CBSE Class 11–12 or ISC.',
      },
    ],
    serviceName: 'Plus One & Plus Two stream-wise tuition',
  },
  {
    slug: 'cbse-tuition-kozhikode',
    kind: 'intent',
    name: 'CBSE Tuition',
    title: 'CBSE Tuition in Kozhikode',
    description:
      'Get one-to-one CBSE tuition from LKG to Class 12 in Kozhikode or online. Practise NCERT topics, work through doubts and prepare for board exams.',
    ogTitle: 'CBSE tuition in Kozhikode',
    ogSub: 'NCERT-aligned · LKG to Class 12 · 1-to-1',
    eyebrow: 'CBSE · ICSE · IGCSE',
    h1: 'CBSE tuition that speaks fluent NCERT.',
    accent: 'NCERT',
    lead: 'CBSE students in Kozhikode sit in classrooms tuned to the State syllabus — and feel it. Our CBSE tuition follows NCERT chapter by chapter, one-to-one, from LKG right up to the Class 12 boards. ICSE and IGCSE students get the same board-matched care.',
    chips: [
      'NCERT chapter-by-chapter',
      'LKG to Class 12',
      'ICSE & IGCSE too',
      'One-to-one · online & offline',
    ],
    intro: [
      'CBSE’s pattern rewards different things than the Kerala State boards — competency-based questions, case studies, internal assessments that count. Our teachers coach the CBSE way: NCERT as the spine, exemplar problems for depth, sample papers in the CBSE format, and answer-writing that matches CBSE marking.',
      'Younger CBSE students (LKG–7) get foundation-building across subjects; Classes 8–10 get board-serious coaching into the Class 10 exam; and +1 / +2 students get stream-wise subject tuition for the Class 12 boards. ICSE and IGCSE families: the same one-to-one model applies, with fees adjusted for the syllabus.',
    ],
    points: [
      { title: 'NCERT as the spine', text: 'Chapter-order teaching from the NCERT texts CBSE actually examines.' },
      { title: 'CBSE exam format', text: 'Sample papers, case-study questions and CBSE marking-scheme practice.' },
      { title: 'LKG to Class 12', text: 'Foundation to boards under one roof — no re-searching for tuition every stage.' },
      { title: 'ICSE & IGCSE handled', text: 'Board-specific teaching for ICSE / IGCSE students too, with adjusted fees.' },
      { title: 'One-to-one always', text: 'A fixed teacher who knows the child — online, at the centre, or both.' },
      { title: 'Kozhikode local', text: 'Ashokapuram centre behind Rajendra Hospital — and live online across the city.' },
    ],
    faqs: [
      {
        q: 'Do your teachers actually follow the CBSE / NCERT syllabus?',
        a: 'Yes — CBSE students are taught from NCERT textbooks in chapter order, with NCERT exemplar problems and CBSE-format sample papers. We don’t re-use State-syllabus notes on CBSE students; the boards reward different things.',
      },
      {
        q: 'Which classes do you take for CBSE?',
        a: 'LKG through Class 12 — foundation subjects for the early years, all subjects for Classes 8–10, and stream-wise subject tuition (Science / Commerce / Humanities) for Classes 11 and 12.',
      },
      {
        q: 'Do you also handle ICSE or IGCSE students in Kozhikode?',
        a: 'Yes. ICSE and IGCSE students get the same one-to-one, board-matched teaching. Fees may vary slightly for these syllabi — ask us or check the fees page.',
      },
      {
        q: 'Is CBSE tuition available online?',
        a: 'Fully — live one-to-one classes with recordings, which suits CBSE families anywhere in Kozhikode or beyond. Centre classes run at Ashokapuram on the same programme.',
      },
    ],
    serviceName: 'CBSE / ICSE / IGCSE board-aligned tuition',
  },
  {
    slug: 'online-tuition-kerala',
    kind: 'intent',
    name: 'Online Tuition Kerala',
    title: 'Live One-to-One Online Tuition in Kerala',
    description:
      'Book a free demo for live one-to-one online tuition anywhere in Kerala. LKG to Plus Two for Kerala State, CBSE and ICSE. See subjects and fees.',
    ogTitle: 'Online tuition across Kerala',
    ogSub: 'Live 1-to-1 video classes · recordings included',
    eyebrow: 'Live online · statewide',
    h1: 'Live online tuition across Kerala — truly one-to-one.',
    accent: 'truly one-to-one',
    lead: 'Not a recorded video course, not a 200-student webinar — a real teacher, live, teaching one student: yours. From Kasaragod to Thiruvananthapuram, Eduplus brings Kozhikode’s one-to-one tuition to any home in Kerala.',
    chips: [
      'Live · never pre-recorded',
      'Anywhere in Kerala',
      'Recordings to revise',
      'Malayalam · English · Hindi',
    ],
    intro: [
      'Online tuition earns its bad name from passive video courses and overcrowded webinar batches. Ours is the opposite: a live video class where the teacher watches your child solve, corrects mistakes as they happen, and adjusts pace on the spot. Every class is recorded, so revision before a test is one tap away.',
      'The programme is identical to our Kozhikode centre’s: LKG to Plus Two, Kerala State, CBSE and ICSE, exam-target batches, SAY & Improvement coaching, regular tests and parent updates. Teachers switch comfortably between Malayalam, English and Hindi, so explanations land in the language your child thinks in.',
    ],
    points: [
      { title: 'Live and interactive', text: 'The teacher sees your child’s work in real time — this is a class, not a video.' },
      { title: 'One student per class', text: 'True 1-to-1: full attention, no hiding in the crowd, no unasked doubts.' },
      { title: 'Every class recorded', text: 'Recordings stay available for revision before tests and exams.' },
      { title: 'All Kerala, all boards', text: 'Kerala State (SCERT), CBSE and ICSE — any district, any school pattern.' },
      { title: 'Flexible slots', text: 'Morning and evening slots seven days a week — built around school hours.' },
      { title: 'Simple setup', text: 'Phone, tablet or laptop with internet — we handle the rest, starting with a free demo.' },
    ],
    faqs: [
      {
        q: 'How does a live online one-to-one class actually work?',
        a: 'Teacher and student join a live video call at a fixed slot. The teacher teaches, watches the student work, corrects in real time and sets targets for the next class. It’s a real classroom of two — plus a recording you keep for revision.',
      },
      {
        q: 'Can students outside Kozhikode join?',
        a: 'Yes — online students join from across Kerala, and the programme works anywhere with a stable internet connection. Timings are agreed around your school schedule, with morning and evening slots all seven days.',
      },
      {
        q: 'What medium of instruction do online classes use?',
        a: 'Whichever helps your child — our teachers move naturally between Malayalam, English and Hindi. English-medium and Malayalam-medium students are both at home here.',
      },
      {
        q: 'Are online fees different from centre fees?',
        a: 'No — the same simple per-hour rates apply: ₹150/hour for Class I–IV up to ₹350/hour for Plus One / Plus Two, with a one-time ₹500 admission fee. The first demo class is free either way.',
      },
    ],
    serviceName: 'Live online one-to-one tuition across Kerala',
  },
];

export function getSeoPage(slug: string): SeoPage | undefined {
  return SEO_PAGES.find((p) => p.slug === slug);
}
