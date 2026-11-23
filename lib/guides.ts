type Guide = {
  slug: string;
  title: string;
  description: string;
  sections: { heading: string; paragraphs: string[]; list?: string[] }[];
  sources: { label: string; url: string }[];
  related: { label: string; href: string };
};

export const GUIDES_UPDATED = '2026-11-23';

export const GUIDES: Guide[] = [
  {
    slug: 'kerala-plus-two-say-improvement',
    title: 'Kerala Plus Two SAY & Improvement Guide',
    description: 'Check the Kerala Plus Two SAY and Improvement notification, confirm eligibility with your school and plan revision around your subjects.',
    sections: [
      {
        heading: 'What is the difference between SAY and Improvement?',
        paragraphs: [
          'SAY (Save A Year) is a route for eligible students who need another chance to qualify. Improvement is for eligible students who have already qualified and want to improve a result. The Higher Secondary Wing publishes the rules for each exam cycle.',
          'Check the notice for your year and category before choosing papers. The Kerala portal lists First Year Improvement separately from Second Year SAY and Improvement. Vocational Higher Secondary students should check the VHSE portal.',
        ],
      },
      {
        heading: 'What to confirm with your school',
        paragraphs: ['Bring your result and register number to your school’s exam office. Ask staff to point you to the current notification so you can check what applies to you.'],
        list: [
          'Confirm the correct exam category and which subjects or components you can sit.',
          'Check the application deadline, fee and how the school will confirm your registration.',
          'Check the paper dates, reporting time, exam centre and hall-ticket instructions.',
          'Ask how the new result is recorded, especially if you have an admission deadline.',
        ],
      },
      {
        heading: 'Build a subject-by-subject revision plan',
        paragraphs: [
          'Start with a timed set of questions from one subject. Mark each lost point as a topic gap, a misread question or a timing issue. Use that list to choose your next three study sessions.',
          'Spend the first session on the hardest recurring topic. In the next session, write a fresh set of answers without notes and check each one. Set aside time for a longer timed paper before the exam.',
          'If you have more than one paper, put the dates on the same calendar. Give each subject a regular short session and move longer timed practice around the exam order.',
        ],
      },
    ],
    sources: [
      { label: 'Kerala Higher Secondary Wing examination notices', url: 'https://www.hseportal.kerala.gov.in/hse/public/icp/index/EXAMINATION' },
      { label: 'Kerala Vocational Higher Secondary examination portal', url: 'https://www.vhseportal.kerala.gov.in/public/examinations' },
    ],
    related: { label: 'SAY and Improvement coaching', href: '/programs#say-improvement' },
  },
  {
    slug: 'kerala-sslc-revision-plan',
    title: 'Kerala SSLC Revision Plan',
    description: 'Use a practical four-week revision plan for Kerala SSLC with official SCERT model questions, timed answers and an error log.',
    sections: [
      {
        heading: 'Week 1 · Find the gaps',
        paragraphs: [
          'Collect the current subject lists and model papers in your medium. Solve a short set in each subject with the textbook closed. Write down the questions you skipped, the steps you forgot and the ones you knew but ran out of time for.',
          'Pick two topics to repair first. Choose topics that appear across different question types or make another chapter easier to understand.',
        ],
      },
      {
        heading: 'Weeks 2 and 3 · Practise and check',
        paragraphs: ['Give each study session one task you can finish. For example, explain one Physics principle from memory, solve three Maths questions that use it or draft a timed Social Science answer. Check your work immediately and return to the weakest question the next day.'],
        list: [
          'Maths and Science: show your steps, label diagrams and check units.',
          'Languages: practise a question or writing format under a time limit and reread for missing details.',
          'Social Science: structure longer answers around the question and check names, dates and map labels.',
        ],
      },
      {
        heading: 'Week 4 · Sit a model paper',
        paragraphs: [
          'Use the instructions and timing printed on a model paper. Afterwards, compare your answers with the key, check where you spent too long and make a short list of points to review.',
          'Check the current timetable and hall-ticket instructions with your school. SCERT’s archived papers can help you practise. Use your current syllabus and the latest exam notice to confirm the format.',
        ],
      },
    ],
    sources: [
      { label: 'SCERT Kerala Class X model questions archive', url: 'https://scert.kerala.gov.in/sslc2026modq/' },
      { label: 'Kerala Pareeksha Bhavan', url: 'https://keralapareekshabhavan.in/' },
    ],
    related: { label: 'One-to-one SSLC tuition', href: '/sslc-tuition-kozhikode' },
  },
  {
    slug: 'choose-plus-one-stream-after-sslc',
    title: 'How to Choose a Plus One Stream After SSLC',
    description: 'Compare Science, Commerce and Humanities, check subject combinations and make a Kerala Plus One shortlist based on your interests and goals.',
    sections: [
      {
        heading: 'Compare the actual subjects',
        paragraphs: [
          'Look at the subjects in each available combination before picking a stream. Two schools may offer different combinations within the same stream. Read sample chapters or ask a teacher what the weekly work looks like.',
        ],
        list: [
          'Science: check which combinations include Mathematics, Biology or Computer Science, and how much lab and problem-solving work they involve.',
          'Commerce: check the mix of Accountancy, Business Studies and related subjects, including the options available at each school.',
          'Humanities: look at the subject choices, such as History, Economics or Political Science, and the balance of reading, analysis and writing.',
        ],
      },
      {
        heading: 'Check what future courses require',
        paragraphs: [
          'Write down two or three courses you are considering after Plus Two. Check recent admission notices from the relevant universities or exam authorities for any required subjects, marks or entrance tests.',
          'Keep one option open if your plans change. Discuss the subjects you enjoy and the work you are willing to practise each week. It can help to ask a current Plus One student which parts of the course surprised them.',
        ],
      },
      {
        heading: 'Make a Kerala Plus One shortlist',
        paragraphs: [
          'If you are applying through Kerala’s centralised allotment, use HSCAP to compare school and course options. Record the exact combination, language choices and travel time for each school on your list.',
          'Read the current prospectus before ranking choices or submitting the application. Confirm dates, documents and eligibility with your school, especially if you studied under a different board.',
        ],
      },
    ],
    sources: [{ label: 'Kerala HSCAP prospectus, school list and course list', url: 'https://www.hscap.kerala.gov.in/' }],
    related: { label: 'Student career guidance in Kozhikode', href: '/counselling' },
  },
];
