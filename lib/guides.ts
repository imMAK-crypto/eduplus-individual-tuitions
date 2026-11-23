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
  {
    slug: 'kerala-plus-one-improvement',
    title: 'Kerala Plus One Improvement Exam Guide',
    description: 'Find the Kerala First Year Higher Secondary Improvement notice, check what your school needs and make a study plan for the papers you will sit.',
    sections: [
      {
        heading: 'Find the First Year notification',
        paragraphs: [
          'On the Kerala Higher Secondary Wing website, look for the First Year Higher Secondary Improvement or supplementary examination notice for your cycle. Read the heading and date before following application instructions. The Second Year SAY and Improvement notices apply to a different exam.',
          'Use the notice to check which subjects you can take, how registration works and whether any practical or other assessment component applies to your case. Ask the school exam office to confirm your application and hall-ticket process.',
        ],
      },
      {
        heading: 'Revise while keeping up with Plus Two',
        paragraphs: [
          'Put your current homework and the First Year papers on one calendar. Set aside a few shorter First Year sessions across the week so your current course still gets regular attention.',
          'Ask your subject teacher which First Year topics support the work you are doing now. If your algebra or accounting basics also appear in current lessons, revising them first may help with both sets of work.',
        ],
      },
      {
        heading: 'Choose one measurable task each session',
        paragraphs: ['Use your result and a set of practice questions to identify recurring mistakes. Redo a few questions without notes and check your method. Save a longer practice paper for a weekend slot, when you have time to correct it afterwards.'],
      },
    ],
    sources: [{ label: 'First Year examination notices from the Kerala Higher Secondary Wing', url: 'https://www.hseportal.kerala.gov.in/hse/public/icp/index/EXAMINATION' }],
    related: { label: 'Eduplus exam coaching', href: '/exam-prep' },
  },
  {
    slug: 'kerala-sslc-timetable-hall-ticket',
    title: 'Kerala SSLC Timetable & Hall Ticket Checklist',
    description: 'Find the current Kerala SSLC timetable through Pareeksha Bhavan, confirm your hall ticket with your school and make a subject-by-subject exam calendar.',
    sections: [
      {
        heading: 'Check the current timetable',
        paragraphs: [
          'Start at Kerala Pareeksha Bhavan and follow its SSLC link. Check the year and publication date on the timetable and look for a revised notice before saving or printing it. Your school can confirm which subjects and language papers apply to you.',
          'Write each paper as a separate calendar entry. Include its subject name, date, start time, exam centre and reporting instructions. Keep the original timetable so you can check your notes.',
        ],
      },
      {
        heading: 'Read your hall ticket as soon as you get it',
        paragraphs: ['Ask the school when and how it will issue the hall ticket. When you receive it, check the name, register number, subjects and centre against the school’s records. Report discrepancies promptly to the school exam office.'],
        list: [
          'Check the route to the exam centre before the first paper.',
          'Ask your school which supplies and documents to bring.',
          'Keep the hall ticket in the same folder with your timetable.',
        ],
      },
      {
        heading: 'Work backwards from the first paper',
        paragraphs: ['Schedule the last timed practice early enough to correct it before the exam. Use shorter sessions between papers for active recall and the mistakes you have already identified. Check for timetable or centre updates through your school.'],
      },
    ],
    sources: [{ label: 'Kerala Pareeksha Bhavan SSLC notices', url: 'https://keralapareekshabhavan.in/' }],
    related: { label: 'Four-week Kerala SSLC revision plan', href: '/guides/kerala-sslc-revision-plan' },
  },
  {
    slug: 'courses-after-plus-two-kerala',
    title: 'How to Shortlist Courses After Plus Two',
    description: 'Compare degree, professional and diploma routes after Plus Two in Kerala. Build a shortlist from course content, eligibility, costs and deadlines.',
    sections: [
      {
        heading: 'Start with subjects and work you enjoy',
        paragraphs: [
          'List tasks you would be happy to do regularly, such as writing, working with numbers, laboratory work or building things. Read the first-year syllabus and assessment format for each course on your list.',
          'Compare the work required across the whole programme. A subject you enjoyed at school can be taught quite differently at degree level. Ask a student or a department adviser about the assignments, practical sessions and internships.',
        ],
      },
      {
        heading: 'Find the admission route for each course',
        paragraphs: [
          'Use the current university or college admission notice for general degree programmes. For professional programmes in Kerala, check the Commissioner for Entrance Examinations prospectus where applicable, then look up the specific course requirements. Entrance tests and qualifying subjects can differ within the same admission process.',
          'Where a course leads to a regulated profession, check recognition or accreditation with the relevant authority and confirm that the programme appears in the official admission materials.',
        ],
      },
      {
        heading: 'Compare three realistic choices',
        paragraphs: ['For each choice, record the admission route, required subjects, estimated total cost and the application deadline. Include travel or accommodation costs, and ask when you will need to make a payment to keep a seat. Maintain a second realistic option while waiting for results or allotment.'],
      },
    ],
    sources: [{ label: 'Commissioner for Entrance Examinations, Kerala', url: 'https://www.cee.kerala.gov.in/' }],
    related: { label: 'Student career guidance', href: '/counselling' },
  },
  {
    slug: 'cbse-class-10-sample-papers',
    title: 'How to Use CBSE Class 10 Sample Papers',
    description: 'Find official CBSE Class 10 sample papers and marking schemes for 2026–27. Use them to practise timed answers and fix recurring mistakes.',
    sections: [
      {
        heading: 'Choose the correct paper',
        paragraphs: [
          'Open the CBSE Academics sample paper page for the academic session you are preparing for. Pick the correct subject and version. The Class 10 listing includes separate Mathematics Basic and Mathematics Standard papers, and separate options for some languages.',
          'Download the sample paper and the matching marking scheme. If you are unsure which one applies to you, check the subject name or code with your teacher.',
        ],
      },
      {
        heading: 'Practise one part at a time',
        paragraphs: [
          'For your first practice, choose one section and give yourself a specific time. Mark a question if you need to return to it. Use the remaining time to check calculations, units, question numbers and whether each answer addresses what was asked.',
          'Compare the work you wrote with the marking scheme. Make a note of any step, explanation or example you missed. Rework a different question that requires the same skill.',
        ],
      },
      {
        heading: 'Try a full practice paper',
        paragraphs: ['Once you have corrected recurring mistakes, sit a full paper using the printed timing and instructions. When you finish, name one topic to revise and one exam habit to practise, such as leaving time to review multi-step problems.'],
      },
    ],
    sources: [{ label: 'CBSE Class X sample question papers and marking schemes, 2026–27', url: 'https://cbseacademic.nic.in/sqp_classx_2026-27.html' }],
    related: { label: 'CBSE tuition in Kozhikode and online', href: '/cbse-tuition-kozhikode' },
  },
  {
    slug: 'cbse-class-12-sample-papers',
    title: 'How to Use CBSE Class 12 Sample Papers',
    description: 'Use the official 2026–27 CBSE Class 12 sample papers and marking schemes to plan subject revision and improve how you write longer answers.',
    sections: [
      {
        heading: 'Build a paper list for your subjects',
        paragraphs: [
          'CBSE Academic lists a separate sample paper and marking scheme for each Class 12 subject. Match the name used by your school, especially when the board offers different versions of a language or related subjects such as Economics and Business Studies.',
          'Keep the corresponding marking scheme beside each sample paper after you attempt it. Confirm school instructions separately for practical or project components where they apply.',
        ],
      },
      {
        heading: 'Compare how marks are earned in each subject',
        paragraphs: ['A Science derivation, an Accountancy calculation and a Humanities explanation call for different kinds of evidence. Look at the board’s marking scheme to see how the task is broken into steps or points. Check what you actually wrote before reading the sample answer.'],
        list: [
          'For numerical problems, check whether you showed the method as well as the result.',
          'For case questions, identify the detail in the prompt that supports your conclusion.',
          'For extended answers, check that you addressed each part and used relevant examples.',
        ],
      },
      {
        heading: 'Rotate timed papers across the week',
        paragraphs: ['Alternate between subjects and keep a short error log for each. Redo a few missed problems before moving to a new paper. Leave enough time to discuss unclear marking decisions with your teacher.'],
      },
    ],
    sources: [{ label: 'CBSE Class XII sample question papers and marking schemes, 2026–27', url: 'https://cbseacademic.nic.in/SQP_CLASSXII_2026-27.html' }],
    related: { label: 'Plus One and Plus Two subject tuition', href: '/plus-two-tuition-kozhikode' },
  },
  {
    slug: 'hscap-plus-one-application-checklist',
    title: 'Kerala HSCAP Plus One Application Checklist',
    description: 'Prepare for Kerala Plus One allotment by checking the HSCAP prospectus, school codes, subject combinations and application details before submitting.',
    sections: [
      {
        heading: 'Read the current HSCAP prospectus',
        paragraphs: [
          'Use the prospectus and announcements for the year you intend to apply. Check which admission route applies to you, when applications open and close, and how to make corrections if needed.',
          'Make your own checklist of the details and documents listed for your situation. Check that the name and other details you enter agree with your school records. Ask your school about requirements you cannot confirm.',
        ],
      },
      {
        heading: 'Review your options before submitting',
        paragraphs: [
          'The HSCAP public school and course lists help you cross-check each option. Write down the school name, course combination, any language choice and the commute you would have. Check the official instructions on ordering your preferences.',
          'Save the application reference and keep a copy of what you submitted. Review the candidate instructions and official notices for corrections and allotment updates.',
        ],
      },
      {
        heading: 'Prepare for allotment day',
        paragraphs: ['Put the important dates and actions on a calendar. Find out what you must do to accept or report for an allotted place, and verify the timing directly in the portal. Keep a copy of the applicable instructions with your documents.'],
      },
    ],
    sources: [{ label: 'Kerala Higher Secondary Centralised Allotment Process', url: 'https://www.hscap.kerala.gov.in/' }],
    related: { label: 'Compare Plus One streams before applying', href: '/guides/choose-plus-one-stream-after-sslc' },
  },
  {
    slug: 'parents-support-during-exams',
    title: 'How Parents Can Support Students During Exams',
    description: 'Help your child plan manageable revision sessions, ask for support and get ready for exam day without adding unnecessary pressure at home.',
    sections: [
      {
        heading: 'Ask what is making the week difficult',
        paragraphs: [
          'Choose a calm time and ask which part of exam preparation feels hardest. It could be a confusing chapter, crowded evenings or uncertainty about how to start. Agree on one change that would make the next session easier.',
          'Offer practical help: find the timetable, clear a space for studying, or set aside a quieter hour. Ask what kind of check-in your child would find helpful before setting a routine.',
        ],
      },
      {
        heading: 'Make the plan small enough to use',
        paragraphs: ['Put the next few papers on a family calendar. Help your child decide what to study first, when to take a break and when to stop for the evening. Leave room for meals, sleep and time away from schoolwork.'],
        list: [
          'Try one clear task, such as correcting three mistakes from a model paper.',
          'Recognise the work your child completed and ask what they learned from it.',
          'Agree on when to contact a teacher for help with a recurring topic.',
        ],
      },
      {
        heading: 'Know when to ask for more support',
        paragraphs: ['If worries persist or are regularly interfering with sleep, school attendance or daily life, talk with your child and ask their school or a qualified healthcare professional about further support. For an upcoming paper, your child’s teacher can help narrow the revision priorities.'],
      },
    ],
    sources: [{ label: 'Ministry of Education student and family support resources', url: 'https://ntf.education.gov.in/student-support-resources/' }],
    related: { label: 'Student counselling at Eduplus', href: '/counselling' },
  },
  {
    slug: 'compare-hourly-tuition-fees',
    title: 'How to Compare Hourly Tuition Fees',
    description: 'Estimate tutoring costs from the hourly rate, planned lessons and any admission charge. Compare like-for-like quotes before booking tuition.',
    sections: [
      {
        heading: 'Calculate the cost for the time you will use',
        paragraphs: [
          'Ask for the rate for the exact class, board and subject combination. Multiply the hourly rate by the number of hours you plan to attend that month. Add any one-time admission charge to the first month’s estimate.',
          'For example, an hourly rate of ₹250 and eight planned hours gives ₹2,000 for the lessons. A ₹500 one-time charge would bring the first month to ₹2,500. Use the actual number of lessons in the calendar when you confirm a quote.',
        ],
      },
      {
        heading: 'Ask what the quoted amount covers',
        paragraphs: ['Write down whether tuition is individual or in a small batch and how long a lesson lasts. Check whether practice papers, tests and doubt-clearing are included. If you switch between the centre and live online lessons, ask whether the rate or schedule changes.'],
      },
      {
        heading: 'Compare the first month and a typical month',
        paragraphs: ['Write the two totals separately so a one-time charge is clear. Ask how missed lessons, public holidays and exam-season changes are handled. Use a demo class to see whether the teaching arrangement offers the time and feedback your child needs.'],
      },
    ],
    sources: [],
    related: { label: 'Eduplus hourly rates and fee estimator', href: '/fees' },
  },
  {
    slug: 'online-tuition-demo-checklist',
    title: 'Online Tuition Demo Class Checklist',
    description: 'Prepare for a live online tuition demo, test the setup and check how the teacher explains, reviews work and gives feedback before you enrol.',
    sections: [
      {
        heading: 'Bring one topic your child wants help with',
        paragraphs: ['Share the class, board and subject in advance. Set aside one recent exercise or question your child is comfortable discussing. It gives the tutor something concrete to work through and makes the demo easier to evaluate.'],
      },
      {
        heading: 'Check the setup before joining',
        paragraphs: [
          'Charge the device, test the microphone and check that your child can see the screen and hear the teacher. Keep the textbook, paper and pen nearby. Ask how your child can share handwritten work or rejoin if the internet drops.',
          'Check who will have access to any shared work or session recordings. Ask whether recording is optional and how classroom materials will be shared.',
        ],
      },
      {
        heading: 'Use the demo to make a decision',
        paragraphs: ['After the session, ask your child to explain what clicked and where they still have a question. Ask the tutor which topics they would cover first, how they will check progress and when you will receive feedback. Confirm the rate, timetable and lesson length before committing.'],
      },
    ],
    sources: [],
    related: { label: 'Live one-to-one online tuition in Kerala', href: '/online-tuition-kerala' },
  },
];
