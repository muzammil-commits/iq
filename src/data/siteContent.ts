import {
  ServiceItem,
  HeroSlide,
  ValueItem,
  DestinationItem,
  TestimonialItem,
  FaqItem,
  TrainingItem
} from '../types';

export const BRAND_INFO = {
  name: 'IQ Overseas Edu Consultants',
  tagline: 'Your Trusted Partner for Global Education, Careers & Visa Solutions.',
  shortDescription:
    'From choosing the right course and university to applications, visas and your journey abroad, IQ Overseas Edu Consultants provides personalized guidance at every step.',
  address: '28-2-58, Pandaripuram, 4th Line, Lakshmipuram, Guntur, Andhra Pradesh – 522006, India',
  city: 'Guntur, Andhra Pradesh',
  primaryPhone: '+91 6302449859',
  secondaryPhone: '+91 9963895915',
  primaryPhoneRaw: '+916302449859',
  secondaryPhoneRaw: '+919963895915',
  primaryEmail: 'iqoverseasguntur@gmail.com',
  secondaryEmail: 'contact@iqoverseas.in',
  whatsappNumber: '+916302449859',
  defaultWhatsappMessage: 'Hello IQ Overseas Edu Consultants, I would like to know more about your overseas education and visa services.',
  googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3829.418296307137!2d80.42878931486167!3d16.29955898873722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a7536643b0d2d%3A0x6b30f2c42ab07f89!2sLakshmipuram%2C%20Guntur%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
  googleMapsDirectionsUrl: 'https://maps.google.com/?q=28-2-58,+Pandaripuram,+4th+Line,+Lakshmipuram,+Guntur,+Andhra+Pradesh+522006',
  workingHours: 'Monday – Saturday: 9:30 AM – 6:30 PM (IST)',
  socialLinks: {
    facebook: 'https://facebook.com',
    youtube: 'https://youtube.com',
    linkedin: 'https://linkedin.com',
    instagram: 'https://instagram.com'
  }
};

export const COMPANY_STATEMENTS = {
  vision: {
    title: 'Our Vision',
    quote: 'To become a trusted global education and immigration consultancy that connects students and professionals with international opportunities, helping them build successful careers beyond borders.',
    summary: 'A trusted global education consultancy for a brighter future.'
  },
  mission: {
    title: 'Our Mission',
    quote: 'To provide reliable, transparent, and personalized overseas education and visa consultancy services. We aim to simplify international admission, visa processing, documentation, and travel procedures through expert guidance and dedicated support.',
    summary: 'Simplify international admission & visa process with expert guidance.'
  }
};

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'slide-1',
    category: 'Global Education',
    title: 'Turn Your Global Ambition',
    highlightedText: 'Into Your Next Opportunity',
    subtitle: 'Your Trusted Partner for Global Education, Careers & Visa Solutions.',
    description: 'From choosing the right course and university to applications, visas and your journey abroad, IQ Overseas Edu Consultants provides personalized guidance at every step.',
    primaryCtaText: 'Explore Opportunities',
    primaryCtaLink: '/services',
    secondaryCtaText: 'Talk to an Expert',
    secondaryCtaLink: 'consultation',
    desktopImage: '/images/hero-desktop.png',
    mobileImage: '/images/hero-mobile.png'
  },
  {
    id: 'slide-2',
    category: 'Visa & Application Support',
    title: 'Guidance From Application',
    highlightedText: 'to Visa Approval',
    subtitle: 'Transparent, structured, and student-first consultancy.',
    description: 'Navigate complex admission criteria, visa documentation, and embassy interview preparation with dedicated education counselors in Guntur.',
    primaryCtaText: 'Visa Consultancy',
    primaryCtaLink: '/visa',
    secondaryCtaText: 'Book Free Session',
    secondaryCtaLink: 'consultation',
    desktopImage: '/images/hero-desktop.png',
    mobileImage: '/images/hero-mobile.png'
  },
  {
    id: 'slide-3',
    category: 'Global Career Journey',
    title: 'Build Your Future',
    highlightedText: 'Beyond Borders',
    subtitle: 'Empowering ambitious students for Master\'s and Bachelor\'s worldwide.',
    description: 'Explore top study destinations across the USA, UK, Canada, Australia, Ireland, and Europe with personalized profiling, scholarships, and post-study work pathways.',
    primaryCtaText: 'Explore Masters',
    primaryCtaLink: '/masters',
    secondaryCtaText: 'Explore Bachelors',
    secondaryCtaLink: '/bachelors',
    desktopImage: '/images/hero-desktop.png',
    mobileImage: '/images/hero-mobile.png'
  }
];

export const TRUST_STRIP_ITEMS = [
  {
    id: '1',
    title: 'Global Education',
    desc: 'World-class universities & programs',
    icon: 'Globe',
    metric: '500+ Universities',
    badge: 'Tier-1 Partners'
  },
  {
    id: '2',
    title: 'Expert Guidance',
    desc: 'Personalized 1-on-1 counseling',
    icon: 'Users',
    metric: '100% Student-First',
    badge: 'Certified Mentors'
  },
  {
    id: '3',
    title: 'Visa Support',
    desc: 'End-to-end documentation guidance',
    icon: 'ShieldCheck',
    metric: 'High Precision Filing',
    badge: 'Strict Compliance'
  },
  {
    id: '4',
    title: 'Student Success',
    desc: 'Dedicated pre & post departure aid',
    icon: 'Trophy',
    metric: 'Full Transit Care',
    badge: 'Port-of-Entry Ready'
  }
];

export const CORE_VALUES: ValueItem[] = [
  {
    id: '1',
    title: 'Trust & Transparency',
    description: 'Clear, honest guidance at every milestone with zero hidden surprises or unrealistic promises.',
    iconName: 'Shield'
  },
  {
    id: '2',
    title: 'Student-Centred Approach',
    description: 'Your goals, budget, and aspirations drive every recommendation we make.',
    iconName: 'Users'
  },
  {
    id: '3',
    title: 'Professional Excellence',
    description: 'Thorough documentation and rigorous application standards that meet university and embassy expectations.',
    iconName: 'Star'
  },
  {
    id: '4',
    title: 'Integrity & Honesty',
    description: 'Ethical counseling built on authentic institutional requirements and legitimate pathways.',
    iconName: 'Handshake'
  },
  {
    id: '5',
    title: 'Personalized Guidance',
    description: 'Tailored roadmaps crafted specifically for your academic background and career targets.',
    iconName: 'UserCheck'
  },
  {
    id: '6',
    title: 'Commitment to Success',
    description: 'Unwavering support from initial aptitude assessment to boarding your flight abroad.',
    iconName: 'Trophy'
  },
  {
    id: '7',
    title: 'Global Opportunities',
    description: 'Opening doors to leading global study destinations, industry exposure, and international careers.',
    iconName: 'Globe'
  }
];

// Rich Dropdown Structure matching top global consultancies like Ivy Overseas
export const MASTERS_DROPDOWN = [
  {
    code: 'US',
    title: 'Study in USA',
    slug: 'usa',
    flag: '🇺🇸',
    highlight1: 'STEM OPT 3 Years',
    highlight2: 'High Starting Salaries',
    highlight: 'STEM OPT 3 Years • High Starting Salaries',
    image: '/images/destinations/usa-dest.png'
  },
  {
    code: 'GB',
    title: 'Study in UK',
    slug: 'uk',
    flag: '🇬🇧',
    highlight1: '1-Year Fast-track Masters',
    highlight2: '2-Year PSW',
    highlight: '1-Year Fast-track Masters • 2-Year PSW',
    image: '/images/destinations/uk-dest.png'
  },
  {
    code: 'CA',
    title: 'Study in Canada',
    slug: 'canada',
    flag: '🇨🇦',
    highlight1: 'Up to 3-Year PGWP',
    highlight2: 'Research Hubs',
    highlight: 'Up to 3-Year PGWP • Research Hubs',
    image: '/images/destinations/canada-dest.png'
  },
  {
    code: 'AU',
    title: 'Study in Australia',
    slug: 'australia',
    flag: '🇦🇺',
    highlight1: 'Group of Eight',
    highlight2: 'Post-Study Work Visas',
    highlight: 'Group of Eight • Post-Study Work Visas',
    image: '/images/destinations/australia-dest.png'
  },
  {
    code: 'IE',
    title: 'Study in Ireland',
    slug: 'ireland',
    flag: '🇮🇪',
    highlight1: 'European Silicon Valley',
    highlight2: '2-Year Stay Back',
    highlight: 'European Silicon Valley • 2-Year Stay Back',
    image: '/images/destinations/ireland-dest.png'
  },
  {
    code: 'DE',
    title: 'Study in Germany',
    slug: 'germany',
    flag: '🇩🇪',
    highlight1: 'Low/Free Tuition',
    highlight2: '18-Month Job Seeker',
    highlight: 'Low/Free Tuition • 18-Mo Job Seeker',
    image: '/images/destinations/germany-dest.png'
  },
  {
    code: 'NZ',
    title: 'Study in New Zealand',
    slug: 'new-zealand',
    flag: '🇳🇿',
    highlight1: 'Safe Lifestyle',
    highlight2: 'Post-Study Work',
    highlight: 'Safe Lifestyle • Post-Study Work',
    image: '/images/destinations/new-zealand-dest.png'
  },
  {
    code: 'EU',
    title: 'Study in France & Europe',
    slug: 'europe',
    flag: '🇪🇺',
    highlight1: 'Top Business Schools',
    highlight2: 'Global Exposure',
    highlight: 'Top Business Schools • Global Exposure',
    image: '/images/destinations/europe-france-dest.png'
  }
];

export const BACHELORS_DROPDOWN = [
  { title: 'Study in USA', slug: 'usa', flag: '🇺🇸', desc: 'Common App • Double Majors • Campus Life' },
  { title: 'Study in UK', slug: 'uk', flag: '🇬🇧', desc: 'UCAS Admission • 3-Year Focused Degrees' },
  { title: 'Study in Canada', slug: 'canada', flag: '🇨🇦', desc: 'Co-op Work Internships • Safe Cities' },
  { title: 'Study in Ireland', slug: 'ireland', flag: '🇮🇪', desc: 'Silicon Docks • 1-Year Stay Back • High Tech' },
  { title: 'Study in Australia', slug: 'australia', flag: '🇦🇺', desc: 'World Top 100 Universities • 3-Year UG' },
  { title: 'Study in New Zealand', slug: 'new-zealand', flag: '🇳🇿', desc: 'Safe Campuses • Post-Study Work • High Quality of Life' },
  { title: 'Study in Europe', slug: 'europe', flag: '🇪🇺', desc: 'English-taught UG Degrees • Low Tuition' }
];

export const TRAINING_DROPDOWN = [
  { title: 'IELTS Academic & General', slug: 'ielts', target: 'Band 7.5+', desc: 'Cambridge Material & Daily Speaking Drills' },
  { title: 'PTE Academic Masterclass', slug: 'pte', target: 'Score 79+', desc: 'AI Scoring Simulator & Proven Templates' },
  { title: 'GRE General Preparation', slug: 'gre', target: 'Score 320+', desc: 'Quant Shortcuts & Vocab Mnemonics' },
  { title: 'TOEFL iBT Comprehensive', slug: 'toefl', target: 'Score 100+', desc: 'North America Focus & Integrated Tasks' },
  { title: 'Duolingo English Test (DET)', slug: 'duolingo', target: 'Score 125+', desc: 'Computer Adaptive Format & 48-Hour Results' },
  { title: 'Digital SAT Coaching', slug: 'sat', target: 'Score 1450+', desc: 'Adaptive Modules & High School Focus' }
];

export const SERVICES_DATA: ServiceItem[] = [
  // 9 Core Overseas Services
  {
    id: 'service-01',
    slug: 'career-counselling',
    number: '01',
    title: 'Career Counselling',
    category: 'Core Overseas Services',
    shortDescription: 'In-depth profile assessment, psychometric mapping, and career roadmapping aligned with your global ambition.',
    fullDescription: 'Our Career Counselling service is designed to understand your unique strengths, academic foundation, financial considerations, and long-term career aspirations. We guide you toward the right specialization and study destination to ensure high return on education.',
    iconName: 'Compass',
    image: '/images/about-students-grand.png',
    keyHighlights: [
      'Comprehensive academic and profile evaluation',
      'Course & country mapping based on industry demand',
      'ROI and budget-conscious study planning',
      'One-on-one session with senior international counselors'
    ],
    processSteps: [
      { step: '01', title: 'Aptitude & Profile Review', description: 'Analyze your transcripts, career interests, and geographic preferences.' },
      { step: '02', title: 'Course Shortlisting', description: 'Present curated programs that match your eligibility and long-term career goals.' },
      { step: '03', title: 'Roadmap Formulation', description: 'Define intake timelines, entrance exams, and documentation milestones.' }
    ],
    documentsRequired: [
      'Academic transcripts & degree certificates',
      'Curriculum Vitae / Resume',
      'Statement of Purpose draft or career goals',
      'Language proficiency scores (if available)'
    ],
    benefits: [
      'Clarity on suitable degree choices and future job markets',
      'Save time and money by applying only to well-matched universities',
      'Realistic assessment of admission and post-study opportunities'
    ],
    faqs: [
      {
        question: 'When should I start career counselling for overseas studies?',
        answer: 'Ideally 9 to 12 months prior to your intended university intake to allow ample time for test preparation, documentation, and scholarship deadlines.'
      },
      {
        question: 'Is career counselling personalized to my budget?',
        answer: 'Yes, we map options considering tuition fees, living expenses, available scholarships, and part-time work regulations.'
      }
    ]
  },
  {
    id: 'service-02',
    slug: 'application-process',
    number: '02',
    title: 'Application Process',
    category: 'Core Overseas Services',
    shortDescription: 'Meticulous university application drafting, SOP/LOR review, and deadline tracking for top global institutions.',
    fullDescription: 'University admissions are highly competitive and detail-oriented. IQ Overseas handles end-to-end application processing, verifying each dossier, reviewing your Statement of Purpose (SOP) and Letters of Recommendation (LORs), and liaising directly with university admissions offices.',
    iconName: 'FileCheck',
    image: '/images/program-masters-grand.png',
    keyHighlights: [
      'Zero-error application filing across multiple institutions',
      'Constructive editing of SOPs, Essays, and Personal Statements',
      'Verification of Letters of Recommendation and resumes',
      'Regular tracking and follow-ups with university admission boards'
    ],
    processSteps: [
      { step: '01', title: 'Document Audit', description: 'Cross-check all transcripts, certificates, and ID records for institutional compliance.' },
      { step: '02', title: 'Drafting & Polishing', description: 'Refine your personal statements and essays to highlight academic achievements.' },
      { step: '03', title: 'Submission & Tracking', description: 'Transmit portal submissions, track statuses, and resolve queries proactively.' }
    ],
    documentsRequired: [
      'Official Academic Transcripts (School/College)',
      'Valid Passport Copy',
      'Standardized Test Scores (IELTS, PTE, TOEFL, GRE, SAT)',
      'Letters of Recommendation (LORs)',
      'Statement of Purpose (SOP)'
    ],
    benefits: [
      'Significantly minimizes risk of application rejection due to technical errors',
      'Faster turnaround times through standardized document submission',
      'Guidance on conditional offer letters and fee deposits'
    ],
    faqs: [
      {
        question: 'To how many universities can I apply through IQ Overseas?',
        answer: 'We typically recommend shortlisting 5 to 8 universities categorized into Dream, Reach, and Safe institutions.'
      },
      {
        question: 'Do you help write the Statement of Purpose?',
        answer: 'We provide structured frameworks, professional reviewing, and editing guidance while ensuring your authentic voice remains intact.'
      }
    ]
  },
  {
    id: 'service-03',
    slug: 'shortlisting-universities-mock-interviews',
    number: '03',
    title: 'Shortlisting Universities and Mock Interviews',
    category: 'Core Overseas Services',
    shortDescription: 'Targeted institutional matching into Dream, Reach, and Safe categories plus rigorous 1-on-1 consular and university interview rehearsals.',
    fullDescription: 'Selecting the right university and excelling in admission interviews requires strategic planning. We shortlist universities aligned with your GPA, budget, and test scores, while providing realistic mock interview coaching with former visa officers and academic mentors.',
    iconName: 'GraduationCap',
    image: '/images/about-students-headquarters-grand.png',
    keyHighlights: [
      'Curated university matrices categorized into Dream, Reach, and Safe tiers',
      'In-depth review of university employment statistics and campus recruitment',
      '1-on-1 mock interviews simulating US F-1, UK CAS, and German university queries',
      'Personalized confidence building and voice modulation training'
    ],
    processSteps: [
      { step: '01', title: 'Profile-Driven Shortlisting', description: 'Evaluate your academic grades, GRE/IELTS scores, and research interests to pick optimal universities.' },
      { step: '02', title: 'Question Bank Preparation', description: 'Formulate bespoke answers for intent of study, career goals, and university choice.' },
      { step: '03', title: 'Simulated Mock Interviews', description: 'Conduct timed video interviews with critical feedback on body language, delivery, and answers.' }
    ],
    documentsRequired: [
      'Academic Mark Sheets & Degree Certificates',
      'University Offer Letters or Shortlist drafts',
      'Resume / Curriculum Vitae',
      'Standardized Test Scorecards'
    ],
    benefits: [
      'Maximizes admission chances to top-tier international universities',
      'Overcomes interview anxiety with real-world consular interview simulations',
      'Helps you articulate your academic purpose convincingly'
    ],
    faqs: [
      {
        question: 'How do you choose universities for my profile?',
        answer: 'We balance your CGPA, standardized test scores, budget, location preferences, and post-study employment prospects.'
      },
      {
        question: 'How many mock interview sessions are included?',
        answer: 'Students receive 3 to 5 comprehensive mock interview sessions until they achieve total fluency and confidence.'
      }
    ]
  },
  {
    id: 'service-04',
    slug: 'financial-assistance',
    number: '04',
    title: 'Financial Assistance',
    category: 'Core Overseas Services',
    shortDescription: 'Comprehensive guidance on international scholarships, financial affidavits, solvency certificates, and proof of funds.',
    fullDescription: 'Financing your overseas education is one of the most vital stages. We assist students with scholarship applications, assembling verified financial dossiers, and preparing rock-solid financial affidavits required by immigration authorities.',
    iconName: 'Banknote',
    image: '/images/service-education.png',
    keyHighlights: [
      'Guidance on merit-based and need-based university scholarships',
      'Solvency certificates, bank balance certification, and CA affidavits',
      'Sponsor income verification and relationship affidavits',
      'Blocked Account (Germany) and GIC (Canada) step-by-step setup'
    ],
    processSteps: [
      { step: '01', title: 'Cost Estimation', description: 'Calculate total cost including tuition, health cover, and living expenses.' },
      { step: '02', title: 'Scholarship Application', description: 'Identify qualifying university bursaries and submit early applications.' },
      { step: '03', title: 'Proof of Funds Assemble', description: 'Assemble compliant financial proof matching specific embassy mandates.' }
    ],
    documentsRequired: [
      'Sponsor income proof (ITR / Form 16 / Salary Slips)',
      'Bank account statements (last 6 months)',
      'Property evaluation documents (if applicable)',
      'University offer letter stating estimated tuition'
    ],
    benefits: [
      'Clear roadmap to minimize personal financial burden',
      'Avoid visa delays caused by improper financial documentation',
      'Access university tuition waivers and early-bird fee discounts'
    ],
    faqs: [
      {
        question: 'How much funds do I need to show for my visa?',
        answer: 'Most embassies require evidence of 1 full year tuition plus 1 full year estimated living expenses in liquid funds.'
      },
      {
        question: 'Can multiple family members sponsor my education?',
        answer: 'Yes, immediate family members (parents, siblings, grandparents) can act as co-sponsors with proper relationship affidavits.'
      }
    ]
  },
  {
    id: 'service-05',
    slug: 'forex-assistance',
    number: '05',
    title: 'Forex Assistance',
    category: 'Core Overseas Services',
    shortDescription: 'Competitive foreign exchange rates, student Forex travel cards, international wire transfers, and currency guidance.',
    fullDescription: 'International transactions and currency conversions can carry hefty bank markups. IQ Overseas partners with authorized RBI-licensed Forex providers to ensure students secure the best exchange rates with zero hidden charges for university tuition wire transfers and living expense cards.',
    iconName: 'Sparkles',
    image: '/images/program-training-grand.png',
    keyHighlights: [
      'Discounted currency exchange rates beating standard retail banks',
      'Pre-loaded multi-currency international student Forex cards',
      'Fast, direct wire transfers to university accounts (Flywire, Convera, Swift)',
      'Zero-charge card reloads managed directly from India by parents'
    ],
    processSteps: [
      { step: '01', title: 'Rate Locking', description: 'Monitor daily forex trends and lock the most favorable exchange rate.' },
      { step: '02', title: 'KYC & A2 Form Lodgement', description: 'Complete simplified RBI Liberalised Remittance Scheme (LRS) paperwork.' },
      { step: '03', title: 'Card Delivery & Transfer', description: 'Deliver active Forex card and execute SWIFT transfer directly to university.' }
    ],
    documentsRequired: [
      'Student Passport & Student Visa Copy',
      'University Offer Letter & Fee Invoice',
      'PAN Card of Student and Sponsor',
      'A2 Form under RBI LRS Guidelines'
    ],
    benefits: [
      'Save thousands of rupees per semester on foreign currency transfers',
      'Safety and convenience with chip-and-pin multi-currency cards',
      'Instant emergency reload capability for overseas living expenses'
    ],
    faqs: [
      {
        question: 'How long does a university tuition wire transfer take?',
        answer: 'Authorized student wire transfers typically credit into the university account within 24 to 48 business hours.'
      },
      {
        question: 'Is a Forex card better than an Indian credit or debit card?',
        answer: 'Yes! Forex cards carry fixed exchange rates with zero foreign transaction markup fees (which can reach 3.5% on regular cards).'
      }
    ]
  },
  {
    id: 'service-06',
    slug: 'flight-ticket',
    number: '06',
    title: 'Flight Ticket',
    category: 'Core Overseas Services',
    shortDescription: 'Exclusive student airfares, extra baggage allowances up to 45kg, convenient itineraries, and date change flexibility.',
    fullDescription: 'Flying abroad for the first time should be seamless and affordable. Our dedicated travel desk books discounted student tickets across premier international carriers with special student luggage allowances and flexible rescheduling options.',
    iconName: 'Plane',
    image: '/images/airplane-contact.png',
    badge: 'Popular',
    keyHighlights: [
      'Exclusive student fares with 40kg to 45kg baggage allowances',
      'Optimal flight connections with comfortable layover durations',
      'Flexible ticket dates and minimal cancellation penalties',
      'Pre-booked seats, vegetarian/special meal preferences, and transit advisory'
    ],
    processSteps: [
      { step: '01', title: 'Route Optimization', description: 'Find flights aligning with your university orientation and dorm check-in dates.' },
      { step: '02', title: 'Student Concession Verification', description: 'Submit student visa or admission letter to claim extra piece baggage allowance.' },
      { step: '03', title: 'Ticketing & Transit Pack', description: 'Issue confirmed e-ticket with airport transit checklist and terminal guidelines.' }
    ],
    documentsRequired: [
      'Valid Passport with minimum 6 months validity',
      'Approved Student Visa copy',
      'University Admission Letter (for student fare eligibility)'
    ],
    benefits: [
      'Carry essential books, utensils, and seasonal clothing without heavy excess fees',
      'Smooth transit through hub airports with clear terminal change instructions',
      'Dedicated helpline support until you reach your campus destination'
    ],
    faqs: [
      {
        question: 'How much extra baggage do students get on international flights?',
        answer: 'Most airlines like Emirates, Qatar Airways, Singapore Airlines, and Air India offer an extra 23kg bag (total 46kg) for student ticket holders.'
      },
      {
        question: 'When should I book my flight tickets?',
        answer: 'As soon as your student visa is stamped to avoid peak seasonal surge fares before August and January intakes.'
      }
    ]
  },
  {
    id: 'service-07',
    slug: 'educational-loan',
    number: '07',
    title: 'Educational Loan',
    category: 'Core Overseas Services',
    shortDescription: 'Collateral and non-collateral overseas education loans with fast-track approvals and competitive interest rates.',
    fullDescription: 'Do not let financial constraints hold back your global dreams. IQ Overseas partners with leading nationalized banks, private financial institutions, and specialized NBFCs (including HDFC Credila, Avanse, InCred, and SBI) to secure quick education loan sanctions with minimal hassle.',
    iconName: 'Banknote',
    image: '/images/destinations-landmarks-grand.png',
    keyHighlights: [
      'Secured (collateral) loans up to ₹1.5 Crores with nationalized banks',
      'Unsecured (non-collateral) loans up to ₹60 Lakhs based on academic merit',
      'Quick in-principle sanction letters within 3 to 5 working days',
      'Cover 100% of expenses: Tuition fees, living costs, travel, and laptop allowance'
    ],
    processSteps: [
      { step: '01', title: 'Eligibility Check', description: 'Assess academic scores, university ranking, and co-applicant income profile.' },
      { step: '02', title: 'Lender Selection', description: 'Compare interest rates, processing fees, and moratorium terms across top lenders.' },
      { step: '03', title: 'Sanction & Disbursement', description: 'Expedite document collection, property evaluation, and loan sanction letter issuance.' }
    ],
    documentsRequired: [
      'KYC documents of student and co-applicant (Aadhaar & PAN)',
      'Academic records (10th, 12th, Degree, GRE/IELTS scorecards)',
      'Proof of admission / conditional offer letter',
      'Co-applicant income proof (Salary slips / ITR / Form 16 / Bank statements)',
      'Property title deeds (for collateral loans)'
    ],
    benefits: [
      'Hassle-free doorstep document pickup and processing in Guntur',
      'Sanction letters accepted by US, UK, Canadian, and Australian embassies',
      'Tax deduction benefits under Section 80E on loan interest repayment'
    ],
    faqs: [
      {
        question: 'Can I get an education loan before receiving the final visa?',
        answer: 'Yes! Banks issue official loan sanction letters before visa lodgement, which serves as authentic financial proof for embassy visa officers.'
      },
      {
        question: 'What is the repayment moratorium period?',
        answer: 'Repayment generally begins 6 to 12 months after course completion, giving students ample time to secure international employment.'
      }
    ]
  },
  {
    id: 'service-08',
    slug: 'accommodation-assistance',
    number: '08',
    title: 'Accommodation Assistance',
    category: 'Core Overseas Services',
    shortDescription: 'Safe, verified on-campus dormitories, student apartments, and homestays within walking distance of universities.',
    fullDescription: 'Finding safe, budget-friendly accommodation in a new country is crucial. We connect students with verified university dormitories, purpose-built student accommodation (PBSA) providers, and trusted shared apartments across the USA, UK, Canada, Australia, and Europe.',
    iconName: 'Luggage',
    image: '/images/hero-mobile.png',
    keyHighlights: [
      'Verified accommodation options close to university campuses and transit lines',
      'All-inclusive utility options covering Wi-Fi, electricity, heating, and water',
      'Assistance with tenancy agreements, lease terms, and security deposit transfers',
      'Roommate matching with fellow Indian students from Andhra Pradesh'
    ],
    processSteps: [
      { step: '01', title: 'Preference Mapping', description: 'Determine budget, proximity to university, room type (private/shared), and dietary needs.' },
      { step: '02', title: 'Virtual Tours & Booking', description: 'Review property photos, 3D walkthroughs, amenities, and neighborhood safety.' },
      { step: '03', title: 'Contract Finalization', description: 'Review lease agreements, ensure zero scam risk, and confirm check-in dates.' }
    ],
    documentsRequired: [
      'University Offer Letter / Confirmation of Enrollment',
      'Student Passport & Student Visa Copy',
      'Proof of Identity and Emergency Contact Details'
    ],
    benefits: [
      'Land with confidence knowing your room keys are ready on arrival day',
      'Avoid rental scams, unregulated landlords, and misleading online listings',
      'Live with vetted students in vibrant, secure student communities'
    ],
    faqs: [
      {
        question: 'Is on-campus or off-campus housing better for international students?',
        answer: 'On-campus dorms are great for first-year undergraduates. Off-campus private student apartments are popular among postgraduates for greater flexibility and cost savings.'
      },
      {
        question: 'Do student apartments include basic furniture and kitchen facilities?',
        answer: 'Yes, PBSA accommodations typically come fully furnished with bed, study desk, wardrobe, shared/private kitchen, and high-speed internet.'
      }
    ]
  },
  {
    id: 'service-09',
    slug: 'travel-assistance',
    number: '09',
    title: 'Travel Assistance',
    category: 'Core Overseas Services',
    shortDescription: 'Comprehensive travel insurance, airport transfers, port-of-entry immigration orientation, and international SIM cards.',
    fullDescription: 'Complete your journey smoothly with our end-to-end travel assistance. We equip students with international travel health insurance, organize airport pickup shuttles, provide foreign SIM cards, and conduct port-of-entry immigration briefings so you transition effortlessly into campus life.',
    iconName: 'Plane',
    image: '/images/program-bachelors-grand.png',
    keyHighlights: [
      'Comprehensive overseas travel and transit medical insurance cover',
      'Pre-activated international student SIM cards with local phone numbers',
      'Airport pickup arrangements from international terminal to your doorstep',
      'Exhaustive packing lists covering academic papers, medicines, and clothing'
    ],
    processSteps: [
      { step: '01', title: 'Pre-Departure Briefing', description: 'Attend dedicated session on customs regulations, immigration checks, and transit rules.' },
      { step: '02', title: 'Insurance & SIM Setup', description: 'Issue comprehensive student travel insurance and dispatch activated SIM card.' },
      { step: '03', title: 'Airport Transit Care', description: 'Coordinate airport arrival assistance, university welcome desk, and transit shuttle.' }
    ],
    documentsRequired: [
      'Approved Student Visa stamped passport',
      'Confirmed Flight Tickets',
      'Travel Insurance Policy Certificate',
      'Emergency Contact Card & University Arrival Letter'
    ],
    benefits: [
      'Immediate phone and data connectivity upon landing abroad to call parents',
      'Protection against transit delays, lost luggage, and medical emergencies',
      'Complete peace of mind for parents back home in India'
    ],
    faqs: [
      {
        question: 'Why do I need travel insurance if I have university health insurance?',
        answer: 'University health cover usually begins on course start day; travel insurance covers you during international flights, layovers, and transit emergencies.'
      },
      {
        question: 'Can I get an international SIM card before leaving India?',
        answer: 'Yes! We provide pre-activated SIM cards with local data packages for USA, UK, Canada, and Australia so you are connected immediately upon touchdown.'
      }
    ]
  },

  // 3 Visa Consultancy Services
  {
    id: 'visa-01',
    slug: 'study-visa',
    number: '10',
    title: 'Study Visa',
    category: 'Visa Consultancy Services',
    shortDescription: 'High-precision student visa filing, Genuine Student (GS/GTE) documentation, and consular mock interview coaching.',
    fullDescription: 'The student visa is the defining gateway to your international education. Our seasoned counselors understand the specific visa mandates of the USA (F-1), UK (Student Route), Canada (Study Permit), Australia (Subclass 500), Ireland, and Schengen countries, ensuring meticulous paperwork and mock interview readiness.',
    iconName: 'GraduationCap',
    image: '/images/hero-desktop.png',
    badge: 'Core Specialty',
    keyHighlights: [
      'Strict adherence to latest embassy regulations and immigration laws',
      'Genuine Student (GS/GTE) statement drafting and academic intent articulation',
      'Complete biometric, SEVIS/IHS fee payment, and consular appointment scheduling',
      'One-on-one mock consular interview simulations with expert feedback'
    ],
    processSteps: [
      { step: '01', title: 'Checklist Customization', description: 'Prepare country-specific document dossier tailored to your academic background.' },
      { step: '02', title: 'Visa Application Lodgement', description: 'Accurate online portal filing, payment of visa fees, and SEVIS/IHS charges.' },
      { step: '03', title: 'Consular Interview Coaching', description: 'Intensive mock interviews addressing study intent, financials, and ties to home country.' }
    ],
    documentsRequired: [
      'I-20 (USA) / CAS (UK) / LOA (Canada) / CoE (Australia)',
      'Educational credentials and degree transcripts',
      'Sponsor financial proofs, bank statements, and tax returns',
      'Valid passport with minimum 6 months validity',
      'Medical clearance and biometrics confirmation'
    ],
    benefits: [
      'Maximize likelihood of visa approval through compliant filing',
      'Eliminate discrepancies between university application and visa files',
      'Total confidence during the consular interview'
    ],
    faqs: [
      {
        question: 'How long before course commencement should I lodge my visa?',
        answer: 'Most embassies allow visa filing 3 to 6 months prior to the course start date. We advise filing as early as your institutional letter allows.'
      },
      {
        question: 'Do you provide mock interview sessions for USA F-1 visa?',
        answer: 'Yes, we conduct comprehensive 1-on-1 mock interviews covering academic rationale, sponsor finances, and intent to return.'
      }
    ]
  },
  {
    id: 'visa-02',
    slug: 'visiting-visa',
    number: '11',
    title: 'Visiting Visa',
    category: 'Visa Consultancy Services',
    shortDescription: 'Family and friend visits, tourist leisure itineraries, and university graduation attendance handled with care.',
    fullDescription: 'Whether planning a memorable holiday abroad, attending your child\'s university graduation ceremony, or visiting family members settled overseas, our Visiting Visa service handles invitation letters, relationship proofs, day-wise itineraries, and financial justifications.',
    iconName: 'Camera',
    image: '/images/destinations-landmarks-grand.png',
    badge: 'Popular',
    keyHighlights: [
      'Customized day-to-day tourist itinerary planning and hotel booking verification',
      'Host invitation letter vetting and family relationship proof documentation',
      'US B1/B2, UK Standard Visitor, Schengen Tourist, and Australian Visitor visas',
      'Special guidance tailored for senior citizen parents traveling abroad'
    ],
    processSteps: [
      { step: '01', title: 'Itinerary Structuring', description: 'Map out travel dates, destinations, and planned leisure/family activities.' },
      { step: '02', title: 'Financial & Employment Proof', description: 'Organize leave sanction letters, bank statements, and tax filings.' },
      { step: '03', title: 'Appointment & Submission', description: 'Book VAC / VFS appointment slots and submit biometric data.' }
    ],
    documentsRequired: [
      'Valid passport with at least 2 blank pages',
      'Bank statements of the last 6 months with sufficient funds',
      'Income Tax Returns (ITR) of last 2-3 years',
      'Host invitation letter or hotel confirmation vouchers'
    ],
    benefits: [
      'Structured presentation that establishes genuine temporary visitor intent',
      'Guidance on Schengen multi-country travel rules',
      'Stress-free processing for individuals and family groups'
    ],
    faqs: [
      {
        question: 'How much bank balance is required for a visiting visa?',
        answer: 'It depends on travel duration and destination; generally enough to comfortably cover flights, lodging, and daily expenses without exhausting savings.'
      },
      {
        question: 'Can parents travel to attend their child\'s convocation ceremony?',
        answer: 'Yes! We help students obtain official graduation invitation letters from universities to support their parents\' visitor visa applications.'
      }
    ]
  },
  {
    id: 'visa-03',
    slug: 'pr-work-permit',
    number: '12',
    title: 'PR and Work Permit',
    category: 'Visa Consultancy Services',
    shortDescription: 'Strategic post-study work permit extensions, points-based permanent residency pathways, and skilled migration advisory.',
    fullDescription: 'Transitioning from student to permanent global resident requires long-term planning. We advise graduates and skilled professionals on Post-Graduation Work Permits (PGWP/PSW), employer-sponsored work visas, and points-based Permanent Residency (PR) systems in Canada, Australia, the UK, and New Zealand.',
    iconName: 'Briefcase',
    image: '/images/student-testimonial-grand.png',
    badge: 'Career Pathway',
    keyHighlights: [
      'Post-Study Work Visa filing (Canada PGWP, UK Graduate Route, Australia 485, US OPT/STEM OPT)',
      'Canada Express Entry (CRS points evaluation, PNP state nomination programs)',
      'Australia General Skilled Migration (Subclass 189, 190, 491 points calculators)',
      'Educational Credential Assessments (ECA) through WES, ACS, Engineers Australia'
    ],
    processSteps: [
      { step: '01', title: 'Points & Eligibility Assessment', description: 'Evaluate age, qualifications, language scores, and overseas work experience against national points tables.' },
      { step: '02', title: 'Skill Assessment & ECA Filing', description: 'Submit degree credentials to authorized assessment bodies (WES, ACS, VETASSESS).' },
      { step: '03', title: 'Expression of Interest (EOI)', description: 'Submit profile into national immigration pools and guide through Invitation to Apply (ITA).' }
    ],
    documentsRequired: [
      'All Academic Degree Certificates and ECA Evaluation Report',
      'Official Language Test Results (IELTS General / PTE Core)',
      'Work Experience Reference Letters, Salary Slips, and Tax Records',
      'Police Clearance Certificates (PCC) and Medical Examination'
    ],
    benefits: [
      'Clear, legal roadmap for long-term career settlement abroad',
      'Accurate points optimization to maximize invitation chances',
      'Transparent advisory backed by up-to-date immigration policies'
    ],
    faqs: [
      {
        question: 'When can international graduates apply for post-study work permits?',
        answer: 'Graduates typically have 90 to 180 days after official degree completion to apply for work permits like PGWP in Canada or Subclass 485 in Australia.'
      },
      {
        question: 'Does studying in a regional area give extra points for PR in Australia?',
        answer: 'Yes! Studying at a regional university campus in Australia grants an extra 5 PR points plus an additional 1 to 2 years of post-study work visa rights.'
      }
    ]
  }
];

export const DESTINATIONS_DATA: DestinationItem[] = [
  {
    id: 'usa',
    country: 'United States',
    flag: '🇺🇸',
    popularCourses: ['Computer Science', 'AI & Data Science', 'Business Analytics', 'Biomedical Sciences'],
    intakes: ['Fall (August)', 'Spring (January)'],
    workRights: 'Up to 3 years STEM OPT post-graduation',
    avgTuition: '$22,000 – $48,000 / year',
    description: 'Home to the world\'s leading research institutions, dynamic campus cultures, and unmatched tech innovation hubs.',
    image: '/images/destinations/usa-dest.png'
  },
  {
    id: 'uk',
    country: 'United Kingdom',
    flag: '🇬🇧',
    popularCourses: ['Management / MBA', 'FinTech', 'Data Analytics', 'Law & International Relations'],
    intakes: ['September', 'January'],
    workRights: '2 years Graduate Route post-study work',
    avgTuition: '£13,000 – £26,000 / year',
    description: '1-year Master\'s degrees, historic university traditions, and direct exposure to global financial and corporate headquarters.',
    image: '/images/destinations/uk-dest.png'
  },
  {
    id: 'canada',
    country: 'Canada',
    flag: '🇨🇦',
    popularCourses: ['Information Technology', 'Supply Chain', 'Project Management', 'Healthcare'],
    intakes: ['Fall (Sept)', 'Winter (Jan)', 'Summer (May)'],
    workRights: 'Up to 3 years Post-Graduation Work Permit (PGWP)',
    avgTuition: 'CAD 18,000 – 35,000 / year',
    description: 'High standard of living, welcoming multicultural cities, and structured post-study immigration pathways.',
    image: '/images/destinations/canada-dest.png'
  },
  {
    id: 'australia',
    country: 'Australia',
    flag: '🇦🇺',
    popularCourses: ['Cybersecurity', 'Civil & Mining Engg', 'Nursing & Public Health', 'Business Info Systems'],
    intakes: ['Semester 1 (Feb)', 'Semester 2 (July)'],
    workRights: '2 to 4 years Temporary Graduate Visa (subclass 485)',
    avgTuition: 'AUD 24,000 – 42,000 / year',
    description: 'World-renowned Group of Eight universities, exceptional lifestyle, and high-demand skilled occupation lists.',
    image: '/images/destinations/australia-dest.png'
  },
  {
    id: 'ireland',
    country: 'Ireland',
    flag: '🇮🇪',
    popularCourses: ['Cloud Computing', 'Pharmaceutical Science', 'Data Science', 'Digital Marketing'],
    intakes: ['Autumn (Sept)', 'Spring (Jan)'],
    workRights: '2 years Third Level Graduate Scheme for Master\'s',
    avgTuition: '€12,000 – €22,000 / year',
    description: 'European headquarters of global tech giants (Google, Meta, Apple) with 1-year Master\'s courses.',
    image: '/images/destinations/ireland-dest.png'
  },
  {
    id: 'germany',
    country: 'Germany',
    flag: '🇩🇪',
    popularCourses: ['Automotive Engineering', 'Mechanical & Robotics', 'Renewable Energy', 'Informatics'],
    intakes: ['Winter (Oct)', 'Summer (April)'],
    workRights: '18 months post-study job seeker visa',
    avgTuition: 'Low to zero tuition at public universities (semester fee €250–€350)',
    description: 'Powerhouse of European engineering, tuition-free public education options, and strong industrial integration.',
    image: '/images/destinations/germany-dest.png'
  },
  {
    id: 'new-zealand',
    country: 'New Zealand',
    flag: '🇳🇿',
    popularCourses: ['AgriTech & Environmental', 'Data Analytics', 'Civil Engineering', 'Tourism & Hospitality'],
    intakes: ['Semester 1 (Feb)', 'Semester 2 (July)'],
    workRights: 'Up to 3 years Post-Study Work Visa',
    avgTuition: 'NZD 26,000 – 40,000 / year',
    description: 'Safe lifestyle, pristine living standards, top 3% global universities, and straightforward residency pathways.',
    image: '/images/destinations/new-zealand-dest.png'
  },
  {
    id: 'europe',
    country: 'France & Europe',
    flag: '🇪🇺',
    popularCourses: ['Luxury & Brand Mgmt', 'International Business / MBA', 'Fashion & Design', 'Applied Artificial Intelligence'],
    intakes: ['Fall (Sept)', 'Spring (Feb)'],
    workRights: '2 years stay-back visa + EU mobility rights',
    avgTuition: '€8,000 – €22,000 / year',
    description: 'Triple-crown accredited business schools, government subsidized housing (CAF), and multinational corporate exposure.',
    image: '/images/destinations/europe-france-dest.png'
  }
];

export const TRAINING_PROGRAMS: TrainingItem[] = [
  {
    id: 'ielts',
    title: 'IELTS Academic & General',
    category: 'Language Proficiency',
    duration: '4 to 8 Weeks',
    eligibility: 'Intermediate English Foundation',
    mode: 'Classroom & Online Live',
    description: 'Master all four modules—Reading, Writing, Listening, and Speaking—with certified trainers, authentic Cambridge material, and computer-delivered practice tests.',
    highlights: [
      'Daily 1-on-1 speaking interview simulations',
      'Specialized writing task 1 & 2 evaluation with band score breakdowns',
      'Weekly full-length mock examinations under exam conditions',
      'Extensive library of high-band vocabulary and sentence structures'
    ],
    scoreTarget: 'Target Band 7.5 – 8.5+'
  },
  {
    id: 'pte',
    title: 'PTE Academic Masterclass',
    category: 'Computer-Based Test',
    duration: '3 to 6 Weeks',
    eligibility: 'All Study & Immigration Aspirants',
    mode: 'Interactive Lab & Live Online',
    description: 'Fast-paced, AI-scoring aligned coaching for Pearson Test of English. Learn proven templates, mic speech calibration, and repeat sentence memory drills.',
    highlights: [
      'Hands-on lab training with real AI scoring simulation software',
      'Standardized templates for Write Essay and Describe Image',
      'Pronunciation and oral fluency corrective sessions',
      'Instant AI diagnostic scorecards for targeted improvements'
    ],
    scoreTarget: 'Target Score 79+ / 90'
  },
  {
    id: 'toefl',
    title: 'TOEFL iBT Comprehensive',
    category: 'US & Global Standard',
    duration: '4 to 6 Weeks',
    eligibility: 'North American University Aspirants',
    mode: 'Classroom & Online',
    description: 'Comprehensive preparation for ETS TOEFL iBT with focus on integrated writing, academic listening passages, and synthesized speaking tasks.',
    highlights: [
      'ETS-pattern practice questions and timed mock tests',
      'Integrated speaking & writing note-taking strategies',
      'Vocabulary enrichment tailored for American academic contexts'
    ],
    scoreTarget: 'Target Score 105+ / 120'
  },
  {
    id: 'gre',
    title: 'GRE General Preparation',
    category: 'Graduate Admissions',
    duration: '8 to 12 Weeks',
    eligibility: 'Graduates & Final Year Engineering/Math Students',
    mode: 'Hybrid Intensive',
    description: 'Targeted quantitative problem solving shortcuts, high-frequency vocabulary mnemonics, and analytical writing essay blueprints.',
    highlights: [
      'Concept-by-concept quantitative reasoning mastery',
      'Text completion and sentence equivalence strategies',
      'Adaptive sectional mock tests mirroring the ETS GRE format'
    ],
    scoreTarget: 'Target Score 325+ / 340'
  },
  {
    id: 'sat',
    title: 'Digital SAT Coaching',
    category: 'Undergraduate Test Prep',
    duration: '6 to 10 Weeks',
    eligibility: 'Grade 10, 11 & 12 High School Students',
    mode: 'Interactive Lab',
    description: 'Adaptive digital test practice covering Reading & Writing modules, Desmos calculator speed tricks, and Math problem solving.',
    highlights: [
      'Official Bluebook exam drills & adaptive pacing',
      'Grammar convention blueprints & vocabulary in context',
      'Advanced algebra, geometry & trigonometry problem sets'
    ],
    scoreTarget: 'Target Score 1450+ / 1600'
  },
  {
    id: 'german',
    title: 'German Language (A1 / A2 / B1)',
    category: 'European Language Training',
    duration: '8 to 16 Weeks',
    eligibility: 'Germany Public University Aspirants',
    mode: 'Classroom & Native Speaking Labs',
    description: 'Intensive CEFR-aligned training for Goethe-Zertifikat examinations required for tuition-free public university degrees and part-time jobs in Germany.',
    highlights: [
      'Goethe-Zertifikat certified curriculum and examination patterns',
      'Conversational German speaking drills with native accent coaching',
      'Technical vocabulary preparation for engineering and STEM degrees'
    ],
    scoreTarget: 'Certified CEFR B1 Fluency'
  },
  {
    id: 'interview-prep',
    title: 'Visa & Consular Mock Interview Drills',
    category: 'Interview Coaching',
    duration: '1 to 2 Weeks (Intensive)',
    eligibility: 'Students with Scheduled Visa/University Interviews',
    mode: '1-on-1 Personalized Coaching',
    description: 'Rigorous mock sessions replicating the high-pressure environment of US Embassy consular interviews, Canadian queries, and university admissions.',
    highlights: [
      'Confidence building and body language alignment',
      'Drafting concise answers on study plans, financials, and future ties',
      'Recorded mock rounds with detailed critique from senior counselors'
    ],
    scoreTarget: 'High-Confidence Visa Readiness'
  }
];

export const APPLICATION_STEPS = [
  {
    step: '01',
    title: 'Discover',
    tagline: 'Understand your goals and interests',
    description: 'We listen to your ambitions, evaluate your academic strengths, assess financial readiness, and map your long-term career aspirations.',
    icon: 'Search'
  },
  {
    step: '02',
    title: 'Plan',
    tagline: 'Choose suitable courses, universities and destinations',
    description: 'Our counselors curate the best-fit programs, verify eligibility criteria, plan standardized test timelines, and structure your budget.',
    icon: 'Calendar'
  },
  {
    step: '03',
    title: 'Apply',
    tagline: 'Submit applications with expert support',
    description: 'We polish your SOP, review LORs, file flawless applications across shortlisted universities, and track offers until acceptance.',
    icon: 'FileText'
  },
  {
    step: '04',
    title: 'Go Global',
    tagline: 'Prepare for travel and your new journey',
    description: 'From comprehensive visa filing and mock interviews to forex, student accommodation, and pre-departure briefings, we ensure a smooth flight.',
    icon: 'PlaneTakeoff'
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'priya-sharma',
    name: 'Priya Sharma',
    course: 'M.S. in Computer Science',
    destination: 'United States',
    university: 'University of Texas at Arlington',
    story: '“IQ Overseas helped me turn my dream of studying abroad into reality. Their guidance on university shortlisting and visa interview preparation was exceptional!”',
    rating: 5,
    image: '/images/testimonial-priya.png'
  },
  {
    id: 'rahul-verma',
    name: 'Rahul Verma',
    course: 'MSc in International Business',
    destination: 'United Kingdom',
    university: 'University of Leeds',
    story: '“The entire application and CAS process was completely transparent. The team in Guntur made sure every document was verified before submission. Highly recommended!”',
    rating: 5,
    image: '/images/about-students-grand.png'
  },
  {
    id: 'kavya-reddy',
    name: 'Kavya Reddy',
    course: 'Master of Information Technology',
    destination: 'Australia',
    university: 'Monash University',
    story: '“From IELTS coaching to GTE statement guidance and education loan assistance, IQ Overseas was with me every step of the way. I received my visa in record time!”',
    rating: 5,
    image: '/images/student-testimonial-grand.png'
  },
  {
    id: 'suresh-kumar',
    name: 'Suresh Kumar',
    course: 'B.Tech in Artificial Intelligence',
    destination: 'Canada',
    university: 'Concordia University',
    story: '“The counselors at IQ Overseas provided genuine advice without false promises. They helped me secure a partial tuition scholarship and guided my parents with the financials.”',
    rating: 5,
    image: '/images/program-bachelors-grand.png'
  }
];

export const FAQS_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'General',
    question: 'How do I choose the right course?',
    answer: 'Choosing the right course starts with understanding your academic foundation, personal aptitude, and future employment landscape. During our personalized career counselling sessions, we evaluate your previous coursework, career targets, industry trends, and preferred study destinations to recommend programs that offer both intellectual fulfillment and strong return on investment.'
  },
  {
    id: 'faq-2',
    category: 'Applications',
    question: 'How can IQ Overseas help with university applications?',
    answer: 'IQ Overseas provides end-to-end admission management. We evaluate your profile, curate a balanced list of Dream, Reach, and Safe universities, edit and review your Statements of Purpose (SOP) and Letters of Recommendation (LORs), submit applications directly through institutional portals, and liaise with admissions committees to secure your offer letter.'
  },
  {
    id: 'faq-3',
    category: 'Documentation',
    question: 'What documents are required for studying abroad?',
    answer: 'Core documents typically include official academic mark sheets and transcripts (10th, 12th, Bachelor\'s), degree provisional or original certificate, valid passport (minimum 6 months validity), standardized test scores (IELTS/PTE/TOEFL/GRE), Statement of Purpose (SOP), 2–3 Letters of Recommendation (LOR), updated resume, and financial capability documentation.'
  },
  {
    id: 'faq-4',
    category: 'Visa',
    question: 'How does visa assistance work?',
    answer: 'Our visa assistance covers the complete spectrum: country-specific document assembly, genuine intent statements (like GTE/GS), financial affidavit verification, portal filing, visa fee facilitation, medical exam scheduling, and rigorous one-on-one mock interview sessions replicating embassy conditions to maximize your confidence.'
  },
  {
    id: 'faq-5',
    category: 'Departure',
    question: 'Do you provide pre-departure guidance?',
    answer: 'Yes! We conduct detailed pre-departure briefings covering airport transit rules, port of entry customs procedures, student accommodation booking, foreign exchange (Forex) cards, international SIM cards, overseas health insurance, and connections with student groups in your destination city.'
  },
  {
    id: 'faq-6',
    category: 'Counselling',
    question: 'Can I get career counselling if I am still unsure about studying abroad?',
    answer: 'Absolutely. We encourage prospective students to schedule an exploratory counselling session. We will evaluate your profile objectively, discuss your domestic vs. international career prospects, estimate financial requirements, and help you make an informed decision without any pressure.'
  }
];
