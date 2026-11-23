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
  { title: 'Undergraduate Overview', slug: 'overview', desc: '4-Year Degree Roadmap & Global Intakes' },
  { title: 'Bachelors in USA', slug: 'bachelors-usa', flag: '🇺🇸', desc: 'Common App • Double Majors • Campus Life' },
  { title: 'Bachelors in UK', slug: 'bachelors-uk', flag: '🇬🇧', desc: 'UCAS Admission • 3-Year Focused Degrees' },
  { title: 'Bachelors in Canada', slug: 'bachelors-canada', flag: '🇨🇦', desc: 'Co-op Work Internships • Safe Cities' },
  { title: 'Bachelors in Australia', slug: 'bachelors-australia', flag: '🇦🇺', desc: 'World Top 100 Universities • 3-Year UG' },
  { title: 'Bachelors in Ireland & Europe', slug: 'bachelors-europe', flag: '🇪🇺', desc: 'English-taught UG Degrees • Low Tuition' },
  { title: 'UG Scholarships & Aid', slug: 'scholarships', desc: 'Merit-based & Need-based High School Grants' }
];

export const TRAINING_DROPDOWN = [
  { title: 'IELTS Academic & General', slug: 'ielts', target: 'Band 7.5+', desc: 'Cambridge Material & Daily Speaking Drills' },
  { title: 'PTE Academic Masterclass', slug: 'pte', target: 'Score 79+', desc: 'AI Scoring Simulator & Proven Templates' },
  { title: 'TOEFL iBT Comprehensive', slug: 'toefl', target: 'Score 100+', desc: 'North America Focus & Integrated Tasks' },
  { title: 'GRE General Preparation', slug: 'gre', target: 'Score 320+', desc: 'Quant Shortcuts & Vocab Mnemonics' },
  { title: 'Digital SAT Coaching', slug: 'sat', target: 'Score 1450+', desc: 'Adaptive Modules & High School Focus' },
  { title: 'German Language (A1/A2/B1)', slug: 'german', target: 'Goethe Exam', desc: 'Mandatory German Proficiency for Tech & Engg' },
  { title: 'Visa Mock Interview Drills', slug: 'interview', target: '100% Confidence', desc: 'Consular Simulations for US F-1 & Global Visas' }
];

export const SERVICES_DATA: ServiceItem[] = [
  // Category 1: Overseas Education & Student Support
  {
    id: 'service-01',
    slug: 'career-counselling',
    number: '01',
    title: 'Career Counselling',
    category: 'Overseas Education & Student Support',
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
    slug: 'application-processing',
    number: '02',
    title: 'Application Processing',
    category: 'Overseas Education & Student Support',
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
      'Standardized Test Scores (IELTS, PTE, TOEFL, GRE, GMAT)',
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
    slug: 'financial-assistance',
    number: '03',
    title: 'Financial Assistance',
    category: 'Overseas Education & Student Support',
    shortDescription: 'Guidance on education loans, international scholarships, fee transfer protocols, and financial documentation.',
    fullDescription: 'Financing your overseas education is one of the most vital stages. We assist students with scholarship applications, connect you with authorized education loan providers, and prepare rock-solid financial affidavits required by immigration authorities.',
    iconName: 'Banknote',
    image: '/images/service-education.png',
    keyHighlights: [
      'Guidance on merit-based and need-based university scholarships',
      'Assistance with collateral and non-collateral education loan procedures',
      'Solvency certificates, bank balance certification, and CA affidavits',
      'Forex, tuition wire transfer, and GIC / Blocked Account advice'
    ],
    processSteps: [
      { step: '01', title: 'Cost of Education Estimation', description: 'Calculate total cost including tuition, health cover, accommodation, and living expenses.' },
      { step: '02', title: 'Scholarship & Loan Mapping', description: 'Identify qualifying university bursaries and appropriate banking channels.' },
      { step: '03', title: 'Proof of Funds Preparation', description: 'Assemble compliant financial proof matching specific embassy mandates.' }
    ],
    documentsRequired: [
      'Sponsor income proof (ITR / Form 16 / Salary Slips)',
      'Bank account statements (last 6 months)',
      'Property evaluation documents (for secured loans, if applicable)',
      'University offer letter stating estimated tuition'
    ],
    benefits: [
      'Clear roadmap to minimize personal financial burden',
      'Avoid visa delays caused by improper financial documentation',
      'Access competitive education loan interest rates'
    ],
    faqs: [
      {
        question: 'Can I get an education loan without collateral?',
        answer: 'Yes, several non-banking financial companies (NBFCs) and banks offer non-collateral loans depending on your GRE/test scores and university ranking.'
      },
      {
        question: 'What is a Blocked Account or GIC?',
        answer: 'Certain countries like Germany (Blocked Account) and Canada (GIC) require prospective students to deposit living expenses into a dedicated account prior to visa filing.'
      }
    ]
  },
  {
    id: 'service-04',
    slug: 'pre-departure-guidance',
    number: '04',
    title: 'Pre-Departure Guidance',
    category: 'Overseas Education & Student Support',
    shortDescription: 'Comprehensive briefings on accommodation, airport transit, student health insurance, and cultural orientation.',
    fullDescription: 'Moving to a foreign country involves exciting transitions. Our Pre-Departure Guidance ensures you land with complete confidence, prepared with all necessary paperwork, campus contacts, student health insurance, and cultural insights.',
    iconName: 'Luggage',
    image: '/images/program-bachelors-grand.png',
    keyHighlights: [
      'On-campus and off-campus accommodation assistance',
      'Mandatory student health insurance (OSHC, NHS, private plans)',
      'Baggage allowance rules and essential packing checklists',
      'Foreign currency exchange (Forex) cards and student SIM cards'
    ],
    processSteps: [
      { step: '01', title: 'Pre-Departure Briefing', description: 'Attend dedicated orientation covering transit, port of entry, and customs.' },
      { step: '02', title: 'Logistics Finalization', description: 'Secure student accommodation, medical cover, and airport pickups.' },
      { step: '03', title: 'Departure Checklist Verification', description: 'Final inspection of original documents, medical reports, and travel insurance.' }
    ],
    documentsRequired: [
      'Valid student visa & passport',
      'University Confirmation of Enrollment (CoE / I-20 / CAS)',
      'Tuition fee receipts and proof of accommodation',
      'Immunization & vaccination records'
    ],
    benefits: [
      'Zero stress upon arrival at international airports',
      'Pre-booked student housing ready before departure',
      'Peer networks connecting you with senior students in your city'
    ],
    faqs: [
      {
        question: 'Do you help with finding accommodation near the university?',
        answer: 'Yes, we guide students through verified student housing providers, university dormitories, and shared apartment portals.'
      },
      {
        question: 'What happens at the port of entry immigration?',
        answer: 'We prepare you for the immigration interview questions asked by border control officers, providing an organized document dossier.'
      }
    ]
  },
  {
    id: 'service-05',
    slug: 'study-visa-assistance',
    number: '05',
    title: 'Study Visa Assistance',
    category: 'Overseas Education & Student Support',
    shortDescription: 'High-precision visa filing, genuine temporary entrant (GTE/GS) documentation, and mock interview coaching.',
    fullDescription: 'The student visa is the defining gateway to your international education. Our seasoned counselors understand the specific visa mandates of the USA, UK, Canada, Australia, Ireland, and Schengen countries, ensuring meticulous paperwork and mock interview readiness.',
    iconName: 'GraduationCap',
    image: '/images/hero-desktop.png',
    badge: 'Popular',
    keyHighlights: [
      'Strict adherence to the latest immigration regulations',
      'GTE / Genuine Student (GS) statement drafting assistance',
      'Complete biometric & medical examination scheduling',
      'One-on-one mock visa interview simulations with feedback'
    ],
    processSteps: [
      { step: '01', title: 'Checklist Customization', description: 'Prepare country-specific document dossier tailored to your case.' },
      { step: '02', title: 'Visa Application Lodgement', description: 'Accurate online portal filing, payment of visa fees, and SEVIS/IHS charges.' },
      { step: '03', title: 'Interview Preparation', description: 'Intensive mock interviews addressing intent of study, financials, and ties to home country.' }
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
      'Confidence and clarity during the consular interview'
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
    id: 'service-06',
    slug: 'travel-assistance',
    number: '06',
    title: 'Travel Assistance',
    category: 'Overseas Education & Student Support',
    shortDescription: 'Student flight discounts, extra baggage allowances, travel insurance, and port of entry support.',
    fullDescription: 'Complete your journey smoothly with our dedicated travel assistance. We help students book convenient flight routes with student baggage concessions, comprehensive travel insurance, and foreign exchange assistance.',
    iconName: 'Plane',
    image: '/images/airplane-contact.png',
    keyHighlights: [
      'Exclusive student flight fares with 40-45 kg luggage allowances',
      'Comprehensive overseas travel and baggage insurance policies',
      'International Forex card loading with zero hidden markup',
      'Transit visa advice for connecting flight hubs'
    ],
    processSteps: [
      { step: '01', title: 'Itinerary Planning', description: 'Select optimal flight connections with adequate layover time.' },
      { step: '02', title: 'Student Fare Booking', description: 'Leverage student ID cards to unlock extra baggage and discounted tickets.' },
      { step: '03', title: 'Transit Advisory', description: 'Review airport transfer regulations and transit visa requirements.' }
    ],
    documentsRequired: [
      'Approved student visa stamped passport',
      'Confirmed flight tickets',
      'Travel insurance policy document',
      'Forex card and emergency cash'
    ],
    benefits: [
      'Significant savings on airfare and additional luggage charges',
      'Peace of mind with full medical emergency travel insurance',
      'Seamless multi-leg international flight connections'
    ],
    faqs: [
      {
        question: 'Can I get extra baggage allowance as an international student?',
        answer: 'Yes, most major airlines offer 1 extra 23kg piece for student ticket holders with valid visas.'
      },
      {
        question: 'Is travel insurance compulsory before flying?',
        answer: 'While some countries require health coverage before arrival, travel insurance protects against transit medical emergencies, lost baggage, and flight cancellations.'
      }
    ]
  },

  // Category 2: Visa Consultancy Services
  {
    id: 'service-07',
    slug: 'business-visa',
    number: '07',
    title: 'Business Visa',
    category: 'Visa Consultancy Services',
    shortDescription: 'Professional visa consultancy for trade conferences, corporate meetings, and global business expansions.',
    fullDescription: 'Facilitating seamless international business mobility. Whether attending commercial negotiations, international conferences, vendor meetings, or exploring foreign market expansion, we structure compliant business visa filings.',
    iconName: 'Briefcase',
    image: '/images/program-training-grand.png',
    keyHighlights: [
      'Corporate invitation letter vetting and formal cover letters',
      'Demonstration of company credentials and business ties',
      'Expedited visa slot booking where applicable',
      'Multi-entry business visa filing support'
    ],
    processSteps: [
      { step: '01', title: 'Corporate Dossier Review', description: 'Review invitation letter from overseas entity and employer sponsorship letter.' },
      { step: '02', title: 'Application Preparation', description: 'Complete consular forms and verify corporate financial standing.' },
      { step: '03', title: 'Consular Submission', description: 'Schedule biometrics and consular appointments with full interview prep.' }
    ],
    documentsRequired: [
      'Official Invitation Letter from host company abroad',
      'Company deputation letter stating purpose and duration',
      'Company registration (GST/Incorporation) & financial records',
      'Personal bank statements and tax returns (last 3 years)'
    ],
    benefits: [
      'Prevents business schedule disruptions due to visa delays',
      'High standard of corporate documentation conforming to embassy rules',
      'Guidance on multi-destination business itineraries'
    ],
    faqs: [
      {
        question: 'Can I conduct commercial sales on a business visa?',
        answer: 'Business visas generally permit meetings, contracts, conferences, and seminars, but strictly prohibit local employment or direct retail sales.'
      },
      {
        question: 'What is the standard processing time for a Business Visa?',
        answer: 'Processing times vary from 10 to 25 business days depending on the country and consular workload.'
      }
    ]
  },
  {
    id: 'service-08',
    slug: 'student-visa',
    number: '08',
    title: 'Student Visa',
    category: 'Visa Consultancy Services',
    shortDescription: 'Dedicated immigration consultation for undergraduate, postgraduate, and vocational study permits.',
    fullDescription: 'A dedicated visa service specifically engineered for overseas degree seekers. We ensure all academic, financial, language, and character requirements are presented impeccably to visa officers.',
    iconName: 'BookOpen',
    image: '/images/hero-mobile.png',
    badge: 'Core Service',
    keyHighlights: [
      'Accurate filling of DS-160, IMM 1294, PRISMS, and national visa portals',
      'Genuine student intent documentation and study plan formulation',
      'Comprehensive review of sponsor relationship affidavits',
      'Complete biometric, medical, and police clearance certificate (PCC) assistance'
    ],
    processSteps: [
      { step: '01', title: 'File Assessment', description: 'Evaluate institutional acceptance documentation and financial viability.' },
      { step: '02', title: 'Visa Filing', description: 'Portal submission, fee payment, and biometric appointment scheduling.' },
      { step: '03', title: 'Consular Verification', description: 'Preparation for interview or administrative processing follow-ups.' }
    ],
    documentsRequired: [
      'Official letter of admission / Confirmation of acceptance',
      'Original educational certificates and mark sheets',
      'Language proficiency scorecards',
      'Proof of sufficient funds (bank deposits, loan sanction letters)'
    ],
    benefits: [
      'Comprehensive protection against common refusal triggers',
      'Transparent advisory on immigration laws and post-study work rights',
      'End-to-end counselor accompaniment throughout the process'
    ],
    faqs: [
      {
        question: 'What happens if a student visa was previously refused?',
        answer: 'We conduct a thorough case analysis, obtain CAIPS/GCMS notes where applicable, address the specific reasons for refusal, and file a strengthened reapplication.'
      },
      {
        question: 'Can my spouse accompany me on a student visa?',
        answer: 'Depending on the country and degree level (e.g., Master\'s/PhD programs in certain nations), spousal open work permits or dependent visas may be permitted.'
      }
    ]
  },
  {
    id: 'service-09',
    slug: 'tourist-visa',
    number: '09',
    title: 'Tourist Visa',
    category: 'Visa Consultancy Services',
    shortDescription: 'Hassle-free tourist and leisure visa consultancy with customized day-wise itineraries and flight bookings.',
    fullDescription: 'Planning a vacation abroad with family or friends? We ensure your tourist visa application is backed by logical travel itineraries, hotel vouchers, strong ties to your home country, and authentic financial credentials.',
    iconName: 'Camera',
    image: '/images/destinations-landmarks-grand.png',
    keyHighlights: [
      'Customized day-to-day tourist itinerary planning',
      'Dummy flight tickets and hotel confirmation assistance',
      'Strong proof of financial sufficiency and employment leave approval',
      'Schengen, UK Standard Visitor, US B1/B2, and Australian eVisitor processing'
    ],
    processSteps: [
      { step: '01', title: 'Itinerary Structuring', description: 'Map out travel dates, destinations, and planned activities.' },
      { step: '02', title: 'Financial & Employment Proof', description: 'Organize leave sanction letters, bank statements, and tax filings.' },
      { step: '03', title: 'Appointment & Submission', description: 'Book VAC / VFS appointment slots and submit biometric data.' }
    ],
    documentsRequired: [
      'Valid passport with at least 2 blank pages',
      'Bank statements of the last 6 months with sufficient balance',
      'Income Tax Returns (ITR) of last 2-3 years',
      'Leave sanction letter from employer or business registration'
    ],
    benefits: [
      'Structured presentation that establishes genuine temporary visitor intent',
      'Guidance on Schengen multi-country travel rules',
      'Stress-free processing for individuals and family groups'
    ],
    faqs: [
      {
        question: 'How much bank balance is required for a tourist visa?',
        answer: 'It depends on your travel duration and destination; generally enough to comfortably cover flights, lodging, daily expenses plus emergency reserves without exhausting your savings.'
      },
      {
        question: 'How long can I stay on a tourist visa?',
        answer: 'Typically between 30 days and 90 days per visit depending on the country and visa category issued.'
      }
    ]
  },
  {
    id: 'service-10',
    slug: 'visitor-visa',
    number: '10',
    title: 'Visitor Visa',
    category: 'Visa Consultancy Services',
    shortDescription: 'Family and friend visits, university graduation attendance, and personal invitations handled with care.',
    fullDescription: 'Whether attending your child\'s university graduation, visiting relatives settled abroad, or participating in family events, our Visitor Visa service handles sponsorship letters, relationship proofs, and genuine visitor justifications.',
    iconName: 'UserPlus',
    image: '/images/student-testimonial-grand.png',
    keyHighlights: [
      'Guidance on host invitation letters and statutory declarations',
      'Proof of relationship documentation (birth certificates, family registers)',
      'Host financial solvency and legal immigration status verification',
      'Interview tips for parents and senior citizens visiting children abroad'
    ],
    processSteps: [
      { step: '01', title: 'Invitation Verification', description: 'Examine host status, tenancy agreements, and formal invitation text.' },
      { step: '02', title: 'Ties to Home Country', description: 'Highlight family ties, property assets, and return commitments in India.' },
      { step: '03', title: 'File Lodgement', description: 'Submit visa applications online and assist with biometrics booking.' }
    ],
    documentsRequired: [
      'Host Invitation Letter and passport/visa/citizenship copy',
      'Host accommodation and employment evidence abroad',
      'Proof of relation with the invitee',
      'Applicant\'s financial stability and ties to India'
    ],
    benefits: [
      'Clear documentation showcasing legitimate familial reasons to visit',
      'Special assistance tailored for elderly parents traveling internationally',
      'Avoidance of costly documentation mistakes'
    ],
    faqs: [
      {
        question: 'Can parents travel to attend their child\'s convocation ceremony?',
        answer: 'Yes! We help students obtain official graduation invitation letters from universities to support their parents\' visitor visa applications.'
      },
      {
        question: 'Does the host need to sponsor all expenses?',
        answer: 'Not necessarily. Either the host can sponsor, or the visitor can self-sponsor with personal financial records, or a combination of both.'
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
