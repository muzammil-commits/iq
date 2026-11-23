export interface TrainingModule {
  name: string;
  duration: string;
  format: string;
  questionTypes: string[];
  keyStrategies: string[];
  scoringCriteria: string;
}

export interface TrainingProgramDetail {
  id: string;
  slug: string;
  title: string;
  shortName: string;
  tagline: string;
  badge: string;
  scoreTarget: string;
  officialScale: string;
  testDuration: string;
  testMode: string;
  globalAcceptance: string;
  introduction: string;
  whyImportant: string[];
  modules: TrainingModule[];
  examPattern: {
    section: string;
    items: string;
    timeLimit: string;
    scoreWeight: string;
  }[];
  prepTips: {
    title: string;
    tip: string;
  }[];
  trainingBenefits: {
    title: string;
    description: string;
  }[];
  faqs: {
    q: string;
    a: string;
  }[];
}

export const TRAINING_PROGRAMS_DATA: Record<string, TrainingProgramDetail> = {
  // A. IELTS Training
  ielts: {
    id: 'ielts',
    slug: 'ielts',
    title: 'IELTS Preparation Masterclass',
    shortName: 'IELTS Academic & General',
    tagline: 'Achieve Band 7.5+ with Cambridge Certified Master Trainers in Guntur',
    badge: 'Gold Standard English Test',
    scoreTarget: 'Band 7.5+ / 9.0',
    officialScale: 'Band Scale: 0 to 9.0 (Half & Whole Bands)',
    testDuration: '2 Hours 45 Minutes',
    testMode: 'Computer-delivered & Paper-based Available',
    globalAcceptance: '11,500+ Institutions across UK, Australia, Canada, USA, Ireland & New Zealand',
    introduction: 'The International English Language Testing System (IELTS) is the world’s most recognized English proficiency test for international education and global immigration. Administered jointly by the British Council and IDP, IELTS rigorously evaluates your real-world communication competence across four core language skills: Listening, Reading, Writing, and Speaking.',
    whyImportant: [
      'Mandatory requirement for university admission and unconditional offer letters in the UK, Australia, Canada, USA, and Ireland.',
      'Higher band scores (7.0+) qualify students for tuition fee scholarships and graduate teaching/research assistantships.',
      'Essential benchmark for student visa approvals and future points-based permanent residency (PR) applications in Australia, Canada, and the UK.',
      'Accurately prepares you to understand academic lectures, write research essays, and converse fluently on international campuses.'
    ],
    modules: [
      {
        name: 'Listening Module',
        duration: '30 Minutes (+ 10 mins transfer for paper-based)',
        format: '4 Recorded Sections with 40 Total Questions (Played ONCE only)',
        questionTypes: [
          'Form, Note, Table & Flow-chart completion',
          'Multiple Choice Questions (single and multiple answer)',
          'Map, Plan & Diagram labelling',
          'Sentence completion & Short answer questions'
        ],
        keyStrategies: [
          'Pre-reading questions during the 30-second silent intervals to predict word types (noun, date, number).',
          'Tuning ears to varied British, Australian, American, and Canadian accents using authentic BBC/ABC audio tracks.',
          'Focusing on spelling accuracy and numerical notation (hyphens, plural endings, capital letters).'
        ],
        scoringCriteria: 'Raw score out of 40 converted to 9-band scale (30/40 = Band 7.0, 35/40 = Band 8.0).'
      },
      {
        name: 'Reading Module',
        duration: '60 Minutes',
        format: '3 Authentic Academic Passages with 40 Total Questions (No extra transfer time)',
        questionTypes: [
          'True / False / Not Given & Yes / No / Not Given',
          'Matching Headings to Paragraphs',
          'Summary, Note, Table & Flow-chart completion',
          'Matching Information & Sentence Endings'
        ],
        keyStrategies: [
          'Mastering Skimming (reading for general gist) and Scanning (locating specific keywords, years, names).',
          'Distinguishing between "False" (directly contradicted) and "Not Given" (no info in text).',
          'Strict 20-minute discipline per passage to complete all 40 questions without running out of time.'
        ],
        scoringCriteria: 'Raw score out of 40 converted to 9-band scale (30/40 = Band 7.0 in Academic).'
      },
      {
        name: 'Writing Module',
        duration: '60 Minutes',
        format: '2 Compulsory Written Tasks (Academic & General Training)',
        questionTypes: [
          'Task 1 (Academic): Describe visual data (Bar chart, Line graph, Pie chart, Table, Map, Process) in 150+ words (20 mins).',
          'Task 2: Discursive academic essay (Agree/Disagree, Discuss both views, Advantages/Disadvantages, Problem-Solution) in 250+ words (40 mins).'
        ],
        keyStrategies: [
          'Mastering 4-paragraph essay frameworks with clear topic sentences and relevant supporting evidence.',
          'Using cohesive devices naturally without over-complication; avoiding generic memorized templates.',
          'Leaving 3–5 minutes at the end of each task for rigorous proofreading of subject-verb agreement and punctuation.'
        ],
        scoringCriteria: 'Assessed on 4 equal rubrics: Task Achievement (25%), Coherence & Cohesion (25%), Lexical Resource (25%), Grammatical Range & Accuracy (25%).'
      },
      {
        name: 'Speaking Module',
        duration: '11 to 14 Minutes',
        format: 'One-on-One Live Interactive Interview with a Certified Examiner',
        questionTypes: [
          'Part 1: Introduction & familiar topics like hometown, studies, hobbies (4–5 minutes).',
          'Part 2: Individual Long Turn (Cue Card) – 1 minute preparation, 2 minutes continuous speech.',
          'Part 3: In-depth two-way abstract discussion linked to Part 2 theme (4–5 minutes).'
        ],
        keyStrategies: [
          'Speaking continuously without excessive pauses, hesitations, or filler words (um, uh, like).',
          'Expanding answers using the "PREP" formula: Point, Reason, Example, Point rephrased.',
          'Using a natural range of idiomatic vocabulary and mixed complex-compound sentence structures.'
        ],
        scoringCriteria: 'Evaluated across 4 equal pillars: Fluency & Coherence, Lexical Resource, Grammatical Range & Accuracy, Pronunciation.'
      }
    ],
    examPattern: [
      { section: 'Listening', items: '40 Questions (4 Recordings)', timeLimit: '30 mins (+ 10 mins)', scoreWeight: 'Band 0 - 9.0' },
      { section: 'Reading', items: '40 Questions (3 Passages)', timeLimit: '60 mins', scoreWeight: 'Band 0 - 9.0' },
      { section: 'Writing', items: '2 Tasks (150 & 250 words)', timeLimit: '60 mins', scoreWeight: 'Band 0 - 9.0' },
      { section: 'Speaking', items: '3-Part 1-on-1 Interview', timeLimit: '11 - 14 mins', scoreWeight: 'Band 0 - 9.0' }
    ],
    prepTips: [
      { title: 'Read Academic Journals Daily', tip: 'Read Economist, National Geographic, and BBC articles for 30 minutes daily to expand lexical variety and reading speed.' },
      { title: 'Practice Timed Full-Length Mocks', tip: 'Take at least 8 to 10 full-length timed tests under strict examination conditions to build test stamina.' },
      { title: 'Record and Review Speaking Rounds', tip: 'Record your cue card speeches on your phone to identify repetitive words, grammar slips, and pacing issues.' },
      { title: 'Master Task 2 Essay Structures', tip: 'Understand the distinct requirements of "Agree/Disagree" vs "Discuss Both Views" to ensure maximum Task Response marks.' }
    ],
    trainingBenefits: [
      { title: 'Cambridge Official Courseware', description: 'Access authentic past test volumes and verified audio tracks curated by Cambridge certified trainers.' },
      { title: 'Daily 1-on-1 Speaking Drills', description: 'Individual cue card simulations and cross-questioning sessions replicating official test center environments.' },
      { title: 'Computer-Delivered Lab in Guntur', description: 'Practice on dedicated computer terminals matching the exact IDP/British Council user interface.' },
      { title: 'Detailed Writing Evaluations', description: 'Line-by-line feedback with rubric scores on every essay to quickly eliminate grammatical and lexical errors.' }
    ],
    faqs: [
      { q: 'What is the minimum IELTS band score required for top universities?', a: 'Most reputable international universities require an overall band score of 6.5 with no band less than 6.0 for Master’s programs. Highly competitive programs (like Healthcare, Law, and Oxford/Cambridge) typically require 7.0 or 7.5.' },
      { q: 'What is the difference between IELTS Academic and General Training?', a: 'IELTS Academic is strictly for students applying for undergraduate or postgraduate university admissions abroad. IELTS General Training is primarily for immigration (PR) and secondary education or vocational training.' },
      { q: 'How long is the IELTS score valid?', a: 'IELTS test scores are officially valid for 2 years from the date of your examination.' },
      { q: 'Can I retake only one section if I score low in a specific module?', a: 'Yes! IELTS now offers "One Skill Retake" (OSR) in computer-delivered formats, allowing you to retake either Listening, Reading, Writing, or Speaking without having to repeat all four sections.' }
    ]
  },

  // B. PTE Training
  pte: {
    id: 'pte',
    slug: 'pte',
    title: 'PTE Academic Masterclass',
    shortName: 'PTE Academic',
    tagline: 'Score 79+ (Band 8 Equivalent) with AI Automated Scoring Simulators',
    badge: '100% Computer-Scored Test',
    scoreTarget: 'Score 79+ / 90',
    officialScale: 'Score Scale: 10 to 90 Points',
    testDuration: '2 Hours (Single Sitting)',
    testMode: '100% Computer-Delivered with AI Assessment',
    globalAcceptance: 'Universities in Australia, UK, Canada, New Zealand & 1,000+ US programs',
    introduction: 'The Pearson Test of English (PTE Academic) is an advanced, fully computer-based English language test trusted by thousands of global universities and recognized for all Australian and New Zealand visa applications, as well as the Canadian SDS stream and the UK Home Office. Scoring is powered by sophisticated AI algorithms, ensuring impartial, consistent, and fast results (usually within 48 hours).',
    whyImportant: [
      '100% objective automated AI scoring with zero human examiner bias.',
      'Super-fast results delivery (frequently delivered within 24 to 48 hours of test completion).',
      'Accepted for all Australian, UK, and New Zealand student visas, as well as Canada’s SDS study permit pathway.',
      'Integrated scoring architecture where performance in one module contributes points to another (e.g. Repeat Sentence boosts both Speaking & Listening).'
    ],
    modules: [
      {
        name: 'Part 1: Speaking & Writing',
        duration: '54 to 67 Minutes',
        format: 'Integrated Computer-Assessed Oral and Composition Tasks',
        questionTypes: [
          'Read Aloud (6-7 items)',
          'Repeat Sentence (10-12 items)',
          'Describe Image (3-4 items)',
          'Re-tell Lecture (1-2 items)',
          'Answer Short Question (5-6 items)',
          'Summarize Written Text (1-2 items - 1 sentence of 5-75 words in 10 mins)',
          'Write Essay (1-2 items - 200 to 300 words in 20 mins)'
        ],
        keyStrategies: [
          'Maintaining uniform oral fluency and natural rhythm without pausing longer than 3 seconds (which stops recording).',
          'Using IQ Overseas proven structural templates for Describe Image and Re-tell Lecture to maximize fluency and pronunciation scores.',
          'Writing grammatically flawless complex sentences with zero spelling errors for Summarize Written Text.'
        ],
        scoringCriteria: 'Automated evaluation measuring Content, Oral Fluency, Pronunciation, Grammar, Spelling, and Vocabulary.'
      },
      {
        name: 'Part 2: Reading',
        duration: '29 to 30 Minutes',
        format: 'Integrated Comprehension, Grammar & Vocabulary Tasks',
        questionTypes: [
          'Reading & Writing: Fill in the Blanks (5-6 items - drop-down selection)',
          'Multiple Choice, Multiple Answers (1-2 items)',
          'Re-order Paragraphs (2-3 items - drag and drop cohesive logic)',
          'Reading: Fill in the Blanks (4-5 items - drag words into gaps)',
          'Multiple Choice, Single Answer (1-2 items)'
        ],
        keyStrategies: [
          'Mastering academic collocations and preposition combinations for high blanks accuracy.',
          'Using grammar clues (part of speech: noun, verb, adjective) to eliminate incorrect blank choices.',
          'Limiting Re-order Paragraphs to 90 seconds maximum per question to prevent running out of time.'
        ],
        scoringCriteria: 'Assesses reading comprehension, vocabulary breadth, and textual cohesion with negative marking on multiple-choice items.'
      },
      {
        name: 'Part 3: Listening',
        duration: '30 to 43 Minutes',
        format: 'Audio/Video Prompt Comprehension and Transcription',
        questionTypes: [
          'Summarize Spoken Text (1-2 items - 50-70 words in 10 mins)',
          'Multiple Choice, Multiple Answers (1-2 items)',
          'Fill in the Blanks (2-3 items - type missing words while listening)',
          'Highlight Correct Summary (1-2 items)',
          'Multiple Choice, Single Answer (1-2 items)',
          'Select Missing Word (1-2 items)',
          'Highlight Incorrect Words (2-3 items - click discrepancies in real time)',
          'Write From Dictation (3-4 items - THE MOST IMPORTANT PTE TASK)'
        ],
        keyStrategies: [
          'Write From Dictation contributes massive points to both Listening and Writing: master initial-letter note-taking.',
          'Never guess on Highlight Incorrect Words because incorrect clicks trigger negative marking.',
          'Keeping summaries strictly within the 50 to 70-word bracket for Summarize Spoken Text.'
        ],
        scoringCriteria: 'Measures listening comprehension, phonetic recognition, spelling fidelity, and auditory memory.'
      }
    ],
    examPattern: [
      { section: 'Speaking & Writing', items: '7 Integrated Task Types', timeLimit: '54 - 67 mins', scoreWeight: 'Score 10 - 90' },
      { section: 'Reading', items: '5 Comprehension Tasks', timeLimit: '29 - 30 mins', scoreWeight: 'Score 10 - 90' },
      { section: 'Listening', items: '8 Audio Transcription Tasks', timeLimit: '30 - 43 mins', scoreWeight: 'Score 10 - 90' }
    ],
    prepTips: [
      { title: 'Practice "Write From Dictation" Daily', tip: 'Transcribe 30 to 50 sentences every day to build auditory memory and flawless spelling.' },
      { title: 'Speak with Consistent Volume & Pace', tip: 'The AI microphone rewards steady volume and cadence. Avoid sudden whispers, shouting, or artificial robotic accents.' },
      { title: 'Learn 500+ Academic Collocations', tip: 'Study official Pearson academic collocations to guess Reading Fill in the Blanks with 95%+ accuracy.' },
      { title: 'Use High-Quality Headsets', tip: 'Train using noise-canceling headsets that replicate Pearson test center equipment in Guntur.' }
    ],
    trainingBenefits: [
      { title: 'AI Scoring Portal Access', description: 'Practice on real-time AI scoring software that predicts your scores for Oral Fluency, Pronunciation, and Content.' },
      { title: 'Master Template Bank', description: 'Tested and proven essay and describe-image structures tailored for 79+ score targets.' },
      { title: 'Daily Dedicated Headphone Lab', description: 'Simulate the real test room atmosphere with multiple students speaking concurrently.' },
      { title: 'Weekly Sectional Diagnostic Tests', description: 'Identify weak task types (e.g. Re-order paragraphs or Summarize Spoken Text) and fix them quickly.' }
    ],
    faqs: [
      { q: 'Is PTE accepted for Canada Student Visa (SDS)?', a: 'Yes! Immigration, Refugees and Citizenship Canada (IRCC) officially accepts PTE Academic for the Student Direct Stream (SDS) study permit applications.' },
      { q: 'What is a good PTE score for Master’s degrees?', a: 'A score of 58 to 64 is equivalent to IELTS 6.5. A score of 79+ is equivalent to IELTS Band 8.0, making you eligible for virtually every world-ranked university and maximizing Australia PR points.' },
      { q: 'How quickly are PTE Academic results released?', a: 'PTE results are typically available online within 24 to 48 hours, making it the fastest option when university application deadlines are approaching.' }
    ]
  },

  // C. GRE Preparation
  gre: {
    id: 'gre',
    slug: 'gre',
    title: 'GRE General Test Preparation',
    shortName: 'GRE General',
    tagline: 'Target 320+ (Quant 165+ / Verbal 155+) with Shorter GRE Pattern Strategies',
    badge: 'Premier Graduate Admissions Test',
    scoreTarget: 'Score 320+ / 340',
    officialScale: 'Score Scale: 260 to 340 (Quant: 130-170, Verbal: 130-170, AWA: 0-6)',
    testDuration: '1 Hour 58 Minutes (Shorter GRE Format)',
    testMode: 'Computer-Delivered via ETS Test Centers or At-Home',
    globalAcceptance: 'Graduate Schools (MS/PhD/MBA) in USA, Canada, Germany, Singapore & Europe',
    introduction: 'The Graduate Record Examination (GRE General Test) is the benchmark assessment created by ETS for admission into top-tier Master’s, Doctoral (Ph.D.), and MBA programs globally. The redesigned "Shorter GRE" format takes under 2 hours and features section-level adaptivity, evaluating Verbal Reasoning, Quantitative Reasoning, and Analytical Writing.',
    whyImportant: [
      'Crucial differentiator for admission into Top-50 US engineering, computer science, and data analytics faculties.',
      'High Quant scores (165+) unlock departmental fellowships, research assistantships (RA), and teaching assistantships (TA).',
      'Accepted by top global business schools (including Harvard, Stanford, INSEAD) as an alternative to the GMAT.',
      'Demonstrates quantitative rigor for candidates applying from varied undergraduate engineering backgrounds.'
    ],
    modules: [
      {
        name: 'Analytical Writing (AWA)',
        duration: '30 Minutes',
        format: '1 "Analyze an Issue" Essay Task',
        questionTypes: [
          'Construct a compelling argument with reasons and examples on a complex issue topic.',
          'Address alternative perspectives and counter-arguments logically.'
        ],
        keyStrategies: [
          'Pre-planning your 5-paragraph outline (thesis, 2 supporting points, 1 counterpoint & rebuttal, conclusion) in the first 4 minutes.',
          'Using sophisticated transition words and varied sentence structures without artificial verbosity.',
          'Leaving 3 minutes to proofread spelling, capitalization, and comma splices.'
        ],
        scoringCriteria: 'Scored on a scale of 0.0 to 6.0 in half-point increments by an expert human reader and e-rater software.'
      },
      {
        name: 'Verbal Reasoning',
        duration: '41 Minutes (Across 2 Sections)',
        format: '27 Total Questions (Section 1: 12 Qs in 18 mins; Section 2: 15 Qs in 23 mins)',
        questionTypes: [
          'Text Completion (1-blank, 2-blank, 3-blank sentences)',
          'Sentence Equivalence (select TWO words that produce equivalent meaning)',
          'Reading Comprehension (short & long passages, critical reasoning arguments)'
        ],
        keyStrategies: [
          'Mastering mnemonic root words, prefixes, suffixes, and contextual clues rather than rote rote memorization.',
          'Using the "Math Strategy" for Text Completion: identifying pivot words (although, however, moreover) to determine sign changes.',
          'Active reading of RC passages: summarizing the author’s primary purpose, tone, and logical transitions.'
        ],
        scoringCriteria: 'Scored on a 130 to 170 scale with section-level adaptivity based on Section 1 accuracy.'
      },
      {
        name: 'Quantitative Reasoning',
        duration: '47 Minutes (Across 2 Sections)',
        format: '27 Total Questions (Section 1: 12 Qs in 21 mins; Section 2: 15 Qs in 26 mins)',
        questionTypes: [
          'Quantitative Comparison (Column A vs Column B vs Equal vs Indeterminable)',
          'Multiple Choice Questions (single answer & multiple answers)',
          'Numeric Entry (type the exact calculated fraction or decimal)',
          'Data Interpretation (multi-graph & table analysis sets)'
        ],
        keyStrategies: [
          'Mastering mental arithmetic and shortcut formulas to minimize reliance on the slow on-screen calculator.',
          'Plugging in numbers (e.g. 0, 1, -1, fractions) strategically for Quantitative Comparison questions.',
          'Avoiding common trap answers (units conversion, negative roots, integer constraints).'
        ],
        scoringCriteria: 'Scored on a 130 to 170 scale (Target: 165+ for STEM & Computer Science).'
      }
    ],
    examPattern: [
      { section: 'Analytical Writing (AWA)', items: '1 Issue Essay', timeLimit: '30 mins', scoreWeight: '0.0 - 6.0 Score' },
      { section: 'Verbal Reasoning (Sec 1)', items: '12 Questions', timeLimit: '18 mins', scoreWeight: 'Section Adaptive' },
      { section: 'Quantitative Reasoning (Sec 1)', items: '12 Questions', timeLimit: '21 mins', scoreWeight: 'Section Adaptive' },
      { section: 'Verbal Reasoning (Sec 2)', items: '15 Questions', timeLimit: '23 mins', scoreWeight: 'Total 130 - 170' },
      { section: 'Quantitative Reasoning (Sec 2)', items: '15 Questions', timeLimit: '26 mins', scoreWeight: 'Total 130 - 170' }
    ],
    prepTips: [
      { title: 'Master 1,000 High-Frequency Words', tip: 'Focus on contextual usage and synonyms rather than isolated definitions.' },
      { title: 'Eliminate Math Traps Systematically', tip: 'Pay careful attention to constraints like "x is an integer" or "x > 0" in Quantitative Comparison.' },
      { title: 'Understand Section-Level Adaptivity', tip: 'Maximize your score on Section 1 of both Quant and Verbal to unlock the higher-difficulty (higher-scoring) Section 2.' },
      { title: 'Take Official ETS POWERPREP Mocks', tip: 'Rely on official ETS software for true predictive score calibration.' }
    ],
    trainingBenefits: [
      { title: 'Expert Math Faculty for B.Tech & Non-Engineers', description: 'Zero-base arithmetic and geometry conceptual masterclasses to guarantee 165+ in Quant.' },
      { title: 'Mnemonic Vocab Workshop', description: 'Retain difficult GRE words effortlessly using visual associations, roots, and daily flashcards.' },
      { title: 'Official ETS Question Bank Drills', description: 'Over 2,500+ verified test questions organized topic-wise and difficulty-wise.' },
      { title: '1-on-1 AWA Essay Critique', description: 'Personalized scoring and line-by-line feedback on your issue essays from senior verbal mentors.' }
    ],
    faqs: [
      { q: 'What is a good GRE score for US universities?', a: 'A total score of 315–320+ (with Quant 165+ for STEM and Verbal 155+) is competitive for top-50 US universities. Scores of 325+ open doors to top-20 programs and high-value research fellowships.' },
      { q: 'How long is the new Shorter GRE test?', a: 'The new GRE format takes 1 hour and 58 minutes. ETS eliminated the unscored experimental section and the "Analyze an Argument" essay.' },
      { q: 'How long is my GRE score valid?', a: 'GRE scores are officially valid for 5 years following your test date.' }
    ]
  },

  // D. Digital SAT Preparation
  sat: {
    id: 'sat',
    slug: 'sat',
    title: 'Digital SAT Preparation Program',
    shortName: 'Digital SAT',
    tagline: 'Score 1450+ for Ivy League & Top Global Undergraduate Admissions',
    badge: 'Undergraduate Gateway Test',
    scoreTarget: 'Score 1450+ / 1600',
    officialScale: 'Score Scale: 400 to 1600 (RW: 200-800, Math: 200-800)',
    testDuration: '2 Hours 14 Minutes',
    testMode: 'Computerized Adaptive Format via College Board Bluebook App',
    globalAcceptance: 'US Colleges, Canadian Universities, Singapore (NUS/NTU), UK & Europe',
    introduction: 'The Digital SAT is the globally standardized college admissions exam developed by the College Board for high-school students seeking undergraduate entry into universities across the United States, Canada, and leading international institutions. Delivered entirely on a computer or tablet through the Bluebook application, it uses multistage adaptive testing with short reading passages and a built-in Desmos graphing calculator.',
    whyImportant: [
      'Strong Digital SAT scores (1400–1550) unlock presidential merit scholarships worth up to $100,000 over 4 years.',
      'Serves as an objective academic benchmark differentiating Indian CBSE, ICSE, and State Board scores for US admissions.',
      'Required by prestigious universities like MIT, Dartmouth, Georgetown, Purdue, and UT Austin for direct STEM entry.',
      'Shorter, streamlined test format (2 hours 14 mins) with concise single-question reading passages.'
    ],
    modules: [
      {
        name: 'Reading and Writing Section',
        duration: '64 Minutes (Two 32-minute Modules)',
        format: '54 Total Questions (27 Questions per Module)',
        questionTypes: [
          'Craft and Structure (Words in Context, Text Structure and Purpose, Cross-Text Connections)',
          'Information and Ideas (Central Ideas and Details, Inferences, Command of Evidence - Textual & Quantitative)',
          'Standard English Conventions (Boundaries: commas, semicolons, dashes; Form, Structure & Sense: verbs, pronouns, modifiers)',
          'Expression of Ideas (Rhetorical Synthesis using student research bullet notes, Transitions)'
        ],
        keyStrategies: [
          'Attacking short passages (25-150 words) by reading the prompt question first before reading the passage.',
          'Mastering punctuation rules (colons, semicolons, dependent clauses) for effortless 100% grammar accuracy.',
          'Skimming bulleted student notes in Rhetorical Synthesis to match the specific stated goal instantly.'
        ],
        scoringCriteria: 'Scored on a scale of 200 to 800 with multistage adaptivity between Module 1 and Module 2.'
      },
      {
        name: 'Mathematics Section',
        duration: '70 Minutes (Two 35-minute Modules)',
        format: '44 Total Questions (22 Questions per Module - Desmos Allowed Throughout)',
        questionTypes: [
          'Algebra (Linear equations in 1 & 2 variables, Linear functions, Systems of linear equations, Inequalities)',
          'Advanced Math (Equivalent expressions, Non-linear equations, Quadratic functions, Polynomials)',
          'Problem-Solving and Data Analysis (Ratios, rates, percentages, Probability, Two-way tables, Statistics)',
          'Geometry and Trigonometry (Area & volume, Triangles & trigonometry, Circle theorems, Radians)'
        ],
        keyStrategies: [
          'Mastering Desmos graphing calculator shortcuts to solve complex system equations and polynomials in under 20 seconds.',
          'Categorizing question types: ~75% multiple-choice and ~25% student-produced responses (grid-ins).',
          'Eliminating algebra arithmetic errors by checking answers with graphing intercepts.'
        ],
        scoringCriteria: 'Scored on a scale of 200 to 800 with high-stakes performance weighting on Module 1.'
      }
    ],
    examPattern: [
      { section: 'Reading & Writing (Module 1)', items: '27 Questions', timeLimit: '32 mins', scoreWeight: 'Multistage Adaptive' },
      { section: 'Reading & Writing (Module 2)', items: '27 Questions', timeLimit: '32 mins', scoreWeight: 'Total 200 - 800' },
      { section: 'Break', items: 'Scheduled Rest', timeLimit: '10 mins', scoreWeight: 'Rest Period' },
      { section: 'Math (Module 1)', items: '22 Questions', timeLimit: '35 mins', scoreWeight: 'Multistage Adaptive' },
      { section: 'Math (Module 2)', items: '22 Questions', timeLimit: '35 mins', scoreWeight: 'Total 200 - 800' }
    ],
    prepTips: [
      { title: 'Master Desmos Calculator Tricks', tip: 'Learn regression equations, finding intersection roots, and table functions to bypass tedious manual algebra.' },
      { title: 'Learn 25 Core Grammar Rules', tip: 'Memorize comma splices, restrictive clauses, semicolon rules, and subject-verb agreements for an automatic 700+ in RW.' },
      { title: 'Understand Adaptive Routing', tip: 'Perform flawlessly in Module 1 to be routed to the harder Module 2, which is required to score above 1350.' },
      { title: 'Practice in the Official Bluebook App', tip: 'Take College Board official digital practice tests directly on your laptop or tablet to become familiar with tools.' }
    ],
    trainingBenefits: [
      { title: 'High-School Friendly Evening Batches', description: 'Flexible batch schedules designed to accommodate 11th and 12th standard school timings in Guntur.' },
      { title: 'Desmos Masterclass Drills', description: 'Specialized calculator workshops that allow students to answer 40%+ of math questions without pencil-and-paper algebra.' },
      { title: 'Complete Bluebook Simulation Tests', description: 'Weekly computer tests replicating the exact digital interface, timer, and question styles of the real SAT.' },
      { title: 'Personalized Score Improvement Plan', description: 'Weekly 1-on-1 doubt clearing targeting your specific weaknesses in geometry, grammar, or vocabulary.' }
    ],
    faqs: [
      { q: 'What is a good Digital SAT score for top US universities?', a: 'A score of 1350 to 1450 is very competitive for major state flagships (like Purdue, Ohio State, UT Dallas). A score of 1500+ is ideal for top-20 universities and Ivy League institutions.' },
      { q: 'Can I use my own laptop for the Digital SAT test?', a: 'Yes! Students bring their own fully-charged laptop or iPad with the College Board Bluebook application installed to the designated test center.' },
      { q: 'Is a calculator allowed on all math questions?', a: 'Yes! Unlike the old paper SAT, a calculator is permitted on the entire math section, and the powerful Desmos graphing calculator is built directly into the testing interface.' },
      { q: 'How many times can I take the Digital SAT?', a: 'You can take the Digital SAT as many times as you like. Most universities participate in "Score Choice" or "Superscoring," which combines your highest Math and highest Reading & Writing scores across different test dates.' }
    ]
  },

  // E. TOEFL Training
  toefl: {
    id: 'toefl',
    slug: 'toefl',
    title: 'TOEFL iBT Comprehensive Coaching',
    shortName: 'TOEFL iBT',
    tagline: 'Score 100+ with ETS-Certified Master Trainers in Guntur',
    badge: 'Premier Academic English Test',
    scoreTarget: 'Score 100+ / 120',
    officialScale: '0 to 120 (30 Points per Section)',
    testDuration: 'Under 2 Hours (New Streamlined Format)',
    testMode: 'Computer-delivered at Certified Test Centers & Home Edition',
    globalAcceptance: '12,500+ Universities across USA, Canada, UK, Australia, New Zealand & Europe',
    introduction: 'The Test of English as a Foreign Language (TOEFL iBT) measures the English language proficiency of non-native speakers for university admission. Recognized by 100% of US universities and major institutions worldwide, the new shortened TOEFL iBT delivers an efficient, stress-free testing experience under two hours.',
    whyImportant: [
      'Gold standard requirement for admission to premier US universities, MIT, Stanford, Harvard, and Canadian top institutions.',
      'Mandatory threshold for securing Graduate Teaching Assistantships (GTA) and Research Assistantships (GRA) in North America.',
      'Preferred by scholarship boards and international academic fellowship programs globally.',
      'Evaluates authentic academic English communication needed in international university lecture halls and seminar discussions.'
    ],
    modules: [
      {
        name: 'Reading Section',
        duration: '35 Minutes',
        format: '2 Reading Passages with 10 Questions each (20 Questions Total)',
        questionTypes: [
          'Factual Information & Negative Factual Information',
          'Inference and Rhetorical Purpose',
          'Vocabulary in Context',
          'Reference and Sentence Simplification',
          'Insert Text & Reading to Learn (Prose Summary)'
        ],
        keyStrategies: [
          'Direct passage navigation by reading paragraph-by-paragraph corresponding to question sequences.',
          'Synthesizing main ideas quickly without getting bogged down by technical vocabulary.',
          'Eliminating trap options with extreme wording (always, never, exclusively).'
        ],
        scoringCriteria: 'Scored on a scale of 0 to 30 with automated ETS AI and statistical equating.'
      },
      {
        name: 'Listening Section',
        duration: '36 Minutes',
        format: '3 Academic Lectures (6 questions each) and 2 Campus Conversations (5 questions each)',
        questionTypes: [
          'Gist-Content & Gist-Purpose Questions',
          'Detail & Understanding Function Questions',
          'Attitude, Organization & Connecting Content Questions',
          'Inference & Implication Questions'
        ],
        keyStrategies: [
          'Active Cornell note-taking capturing speaker attitude, transitions, and cause-and-effect relationships.',
          'Identifying conversational discourse markers (e.g., however, on the other hand, essentially).',
          'Practicing with North American and international university classroom lecture recordings.'
        ],
        scoringCriteria: 'Scored on a scale of 0 to 30 based on raw score conversion.'
      },
      {
        name: 'Speaking Section',
        duration: '16 Minutes',
        format: '4 Spoken Tasks (1 Independent Task & 3 Integrated Tasks)',
        questionTypes: [
          'Task 1: Independent Speaking (Personal opinion on campus/general life choice)',
          'Task 2: Integrated Speaking (Campus announcement read + conversation listen)',
          'Task 3: Integrated Speaking (Academic textbook excerpt read + lecture listen)',
          'Task 4: Integrated Speaking (Academic lecture summary)'
        ],
        keyStrategies: [
          'Structuring responses using ETS rubrics: Topic statement, supporting details, and natural transitions within 45-60 seconds.',
          'Maintaining continuous delivery with clear pronunciation, proper syllable stress, and steady pacing.',
          'Using high-level academic reporting verbs (illustrates, asserts, demonstrates).'
        ],
        scoringCriteria: 'Scored on a scale of 0 to 30 using ETS SpeechRater AI combined with certified human raters.'
      },
      {
        name: 'Writing Section',
        duration: '29 Minutes',
        format: '2 Tasks: Integrated Writing & Writing for an Academic Discussion',
        questionTypes: [
          'Task 1: Integrated Writing (Read academic passage, listen to counter-lecture, write comparative response in 20 mins)',
          'Task 2: Writing for an Academic Discussion (State and support an opinion in an online class forum in 10 mins)'
        ],
        keyStrategies: [
          'Highlighting points of contrast between the reading passage and lecture points systematically.',
          'Delivering concise, articulate, and well-reasoned contributions in Academic Discussion within the 100-word recommendation.',
          'Ensuring grammatical precision, syntactic variety, and appropriate formal register.'
        ],
        scoringCriteria: 'Scored on a scale of 0 to 30 evaluating development, organization, and language facility.'
      }
    ],
    examPattern: [
      { section: 'Reading', items: '20 Questions (2 Passages)', timeLimit: '35 mins', scoreWeight: '0 - 30 Points' },
      { section: 'Listening', items: '28 Questions (3 Lectures, 2 Convs)', timeLimit: '36 mins', scoreWeight: '0 - 30 Points' },
      { section: 'Speaking', items: '4 Tasks (1 Indep, 3 Integ)', timeLimit: '16 mins', scoreWeight: '0 - 30 Points' },
      { section: 'Writing', items: '2 Tasks (Integ + Acad Discussion)', timeLimit: '29 mins', scoreWeight: '0 - 30 Points' }
    ],
    prepTips: [
      { title: 'Master Note-Taking for Integrated Tasks', tip: 'Develop shorthand symbols to capture contrasting lecture points against reading passages effortlessly.' },
      { title: 'Practice with Official ETS Software', tip: 'Use authentic ETS TOEFL Practice Online (TPO) mock tests to adapt to the official speech recording and timer interfaces.' },
      { title: 'Focus on Academic Discussion Speed', tip: 'Train to outline and compose a 120-word response for the new Academic Discussion task in under 8 minutes.' },
      { title: 'Pronunciation and Intonation Drills', tip: 'Record and play back your speaking responses to identify hesitation pauses, pitch variation, and clarity.' }
    ],
    trainingBenefits: [
      { title: 'Official ETS Licensed Mock Tests', description: 'Weekly computer-delivered simulations with authentic ETS scoring rubrics and SpeechRater AI feedback.' },
      { title: '1-on-1 Speaking Feedback Clinics', description: 'Personalized evaluation of pronunciation, fluency, and content delivery from senior English mentors in Guntur.' },
      { title: 'Intensive Writing Evaluation', description: 'Detailed line-by-line grammar, vocabulary, and cohesion critique for Integrated and Discussion essays.' },
      { title: 'High-Scoring Batch Mentorship', description: 'Small classroom batches ensuring every aspirant receives individualized attention and score-tracking.' }
    ],
    faqs: [
      { q: 'What is a competitive TOEFL iBT score for top universities?', a: 'A total score of 100+ with 25+ in each section is considered highly competitive for top-ranked US and Canadian universities.' },
      { q: 'How long are TOEFL scores valid?', a: 'TOEFL iBT scores are valid for 2 years from the date of the examination.' },
      { q: 'Can I take the TOEFL Home Edition from India?', a: 'Yes! The TOEFL iBT Home Edition is identical in content, format, and scoring to the test center version and is widely accepted by universities.' },
      { q: 'What is MyBest Scores in TOEFL?', a: 'MyBest Scores (superscores) combines your highest section scores from all valid test dates in the previous two years on your official score report.' }
    ]
  },

  // F. Duolingo English Test (DET)
  duolingo: {
    id: 'duolingo',
    slug: 'duolingo',
    title: 'Duolingo English Test (DET) Masterclass',
    shortName: 'Duolingo English Test',
    tagline: 'Fast, Affordable & Accepted by 5,000+ Global Universities',
    badge: 'Modern AI-Adaptive Test',
    scoreTarget: 'Score 125+ / 160',
    officialScale: '10 to 160 (5-point increments)',
    testDuration: '1 Hour Total (Results in 48 Hours)',
    testMode: '100% Online Computer Adaptive Test with AI Proctoring',
    globalAcceptance: '5,000+ Higher Education Institutions Worldwide including USA, UK, Canada & Ireland',
    introduction: 'The Duolingo English Test (DET) is a state-of-the-art computer adaptive language proficiency tool designed for international students. Taken from home at less than half the cost of traditional tests, DET provides accredited results within 48 hours and is accepted by thousands of top universities worldwide.',
    whyImportant: [
      'Accepted by 5,000+ universities worldwide including Columbia, Yale, NYU, Duke, and premier UK and Irish institutions.',
      'Significantly lower examination fee compared to IELTS and TOEFL with unlimited free official score sends to universities.',
      'Complete flexibility: Take the test anytime, anywhere from home with no appointment scheduling required.',
      'Rapid turnaround: Certified results delivered directly to your inbox and designated universities in just 48 hours.'
    ],
    modules: [
      {
        name: 'Adaptive Testing (Computer Adaptive Section)',
        duration: '45 Minutes',
        format: 'Dynamic questions that adapt in real-time to candidate ability level',
        questionTypes: [
          'Read and Complete (Fill in missing letters in passage context)',
          'Read and Select (Identify real English words from pseudo-words)',
          'Listen and Select (Identify real spoken English words)',
          'Listen and Type (Dictation - type sentences heard)',
          'Read Aloud (Record speaking written sentences)',
          'Write About the Photo & Speak About the Photo',
          'Read, Then Write & Read, Then Speak',
          'Listen, Then Speak & Interactive Reading passages'
        ],
        keyStrategies: [
          'Mastering context clues for missing letter puzzles in "Read and Complete".',
          'Building rapid vocabulary recognition to avoid selecting made-up words in "Read and Select".',
          'Writing with diverse syntactic structures and high-tier academic vocabulary for image descriptions.'
        ],
        scoringCriteria: 'Computer adaptive algorithm evaluating Literacy, Comprehension, Conversation, and Production.'
      },
      {
        name: 'Video Interview & Writing Sample',
        duration: '10 Minutes',
        format: 'Open-ended speaking and writing prompts shared directly with admissions committees',
        questionTypes: [
          'Writing Sample: 3 to 5 minutes response to an academic or personal prompt',
          'Speaking Sample: 1 to 3 minutes video response discussing an ethical or decision-making scenario'
        ],
        keyStrategies: [
          'Speaking with sustained eye contact with the camera and steady posture.',
          'Composing well-structured 3-paragraph responses with clear introductory statements and conclusions.',
          'Demonstrating critical thinking and authentic enthusiasm for higher education.'
        ],
        scoringCriteria: 'Shared directly with admissions officers alongside subscores to assess campus readiness.'
      }
    ],
    examPattern: [
      { section: 'Setup & Rules Onboarding', items: 'Camera & Mic Checks', timeLimit: '5 mins', scoreWeight: 'Ungraded Setup' },
      { section: 'Adaptive Test', items: 'Varied Dynamic Tasks', timeLimit: '45 mins', scoreWeight: 'Score 10 - 160' },
      { section: 'Writing Sample', items: '1 Essay Prompt', timeLimit: '5 mins', scoreWeight: 'Admissions Portfolio' },
      { section: 'Speaking Sample', items: '1 Video Prompt', timeLimit: '3 mins', scoreWeight: 'Admissions Portfolio' }
    ],
    prepTips: [
      { title: 'Strict Proctoring Protocol Readiness', tip: 'Ensure your room is well lit, completely quiet, with no earphones or second monitors to avoid proctor flags.' },
      { title: 'Practice "Read and Complete" Drills', tip: 'Train daily on passage cloze exercises to rapidly deduce prefix, suffix, and root word letters.' },
      { title: 'Expand Lexical Diversity', tip: 'Use sophisticated synonyms instead of repeating basic words (e.g., utilize "imperative" instead of "important").' },
      { title: 'Timed Typing Proficiency', tip: 'Practice typing at 40+ WPM on your desktop keyboard to comfortably exceed word count expectations in writing tasks.' }
    ],
    trainingBenefits: [
      { title: 'Duolingo Test Simulator Software', description: 'Practice with exact question interfaces, timers, and AI adaptive algorithms on modern desktop terminals.' },
      { title: 'Subscore Optimization Drills', description: 'Targeted coaching to elevate Production (Writing/Speaking) and Literacy subscores above 125.' },
      { title: 'Proctoring & Hardware Compliance Audit', description: 'Pre-exam testing room check to ensure lighting, microphone, and webcam settings pass AI scrutiny.' },
      { title: '48-Hour Rapid Score Prep', description: 'Express weekend bootcamps for candidates facing imminent university application deadlines.' }
    ],
    faqs: [
      { q: 'Is Duolingo accepted for student visas?', a: 'Duolingo is widely accepted by US and Irish universities for issuing I-20s and offer letters. For certain countries, check specific university-level acceptance lists.' },
      { q: 'How many times can I take the Duolingo English Test?', a: 'You may purchase up to 3 tests in any 30-day period. Tests are credited to your account and valid for 21 days.' },
      { q: 'What score is required for top universities?', a: 'A score of 120-130 is equivalent to IELTS 7.0 / TOEFL 95-100 and meets the requirements of most competitive global programs.' },
      { q: 'How is the Duolingo test proctored?', a: 'The test is secured through multi-layered AI proctoring and human proctors reviewing webcam video, screen recording, and keystrokes.' }
    ]
  }
};
