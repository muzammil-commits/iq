export interface BachelorCourse {
  id: string;
  title: string;
  category: string;
  duration: string;
  avgStartingSalary: string;
  intakes: string;
  careerProspects: string[];
  description: string;
  image: string;
  badge?: string;
}

export interface BachelorStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  keyAction: string;
  timeline: string;
}

export interface BachelorCountry {
  country: string;
  slug: string;
  flag: string;
  duration: string;
  pswRights: string;
  avgTuition: string;
  intakes: string;
  highlights: string[];
  topUnis: string[];
}

export const BACHELOR_CATEGORIES = [
  'All Degrees',
  'Technology & Computer Science',
  'Business & Management',
  'Healthcare & Life Sciences',
  'Engineering',
  'Environmental Science'
];

export const BACHELOR_COURSES: BachelorCourse[] = [
  // Technology & Computer Science
  {
    id: 'bs-cs',
    title: 'B.S. in Computer Science & Software Systems',
    category: 'Technology & Computer Science',
    duration: '3 - 4 Years',
    avgStartingSalary: '$82,000 - $115,000',
    intakes: 'Fall (August) & Spring (January)',
    careerProspects: ['Software Developer', 'Systems Engineer', 'Cloud Architect'],
    description: 'Build foundational programming mastery in Python, Java, C++, algorithms, cloud architectures, and web technologies with paid internships.',
    image: '/images/program-bachelors-grand.png',
    badge: 'Most Popular STEM'
  },
  {
    id: 'bs-ai-data',
    title: 'B.S. in Artificial Intelligence & Data Science',
    category: 'Technology & Computer Science',
    duration: '3 - 4 Years',
    avgStartingSalary: '$85,000 - $120,000',
    intakes: 'Fall & Spring',
    careerProspects: ['Data Analyst', 'Junior ML Engineer', 'Business Intelligence Analyst'],
    description: 'Learn modern machine learning pipelines, predictive statistics, big data wrangling, and computer vision early in your undergraduate journey.',
    image: '/images/about-students-headquarters-grand.png',
    badge: 'High Growth Sector'
  },
  {
    id: 'bs-cybersecurity',
    title: 'B.S. in Cybersecurity & Cloud Defense',
    category: 'Technology & Computer Science',
    duration: '3 - 4 Years',
    avgStartingSalary: '$80,000 - $110,000',
    intakes: 'Fall (Sep) & Winter (Jan)',
    careerProspects: ['Security Analyst', 'Network Administrator', 'Incident Responder'],
    description: 'Master network security defense, ethical hacking protocols, digital forensics, and international data protection laws.',
    image: '/images/destinations-landmarks-grand.png',
    badge: 'Zero Unemployment'
  },

  // Business & Management
  {
    id: 'bba-general',
    title: 'Bachelor of Business Administration (BBA / BSBA)',
    category: 'Business & Management',
    duration: '3 - 4 Years',
    avgStartingSalary: '$68,000 - $95,000',
    intakes: 'Fall, Spring & Summer',
    careerProspects: ['Business Operations Analyst', 'Marketing Coordinator', 'Financial Advisor'],
    description: 'Comprehensive business grounding covering accounting, marketing, organizational behavior, business economics, and global team leadership.',
    image: '/images/about-students-grand.png',
    badge: 'Universal Transferability'
  },
  {
    id: 'bs-finance',
    title: 'B.S. in Finance & Investment Banking',
    category: 'Business & Management',
    duration: '3 - 4 Years',
    avgStartingSalary: '$75,000 - $105,000',
    intakes: 'Fall & Spring',
    careerProspects: ['Investment Banking Analyst', 'Equity Research Associate', 'Wealth Manager'],
    description: 'Intensive financial modeling, risk analysis, portfolio management, fintech integrations, and corporate valuation.',
    image: '/images/hero-desktop.png',
    badge: 'Wall Street & London'
  },
  {
    id: 'bs-supply-chain',
    title: 'B.S. in Global Supply Chain & Logistics',
    category: 'Business & Management',
    duration: '3 - 4 Years',
    avgStartingSalary: '$70,000 - $98,000',
    intakes: 'Fall & Winter',
    careerProspects: ['Supply Chain Coordinator', 'Logistics Analyst', 'Procurement Officer'],
    description: 'Understand procurement, international shipping, warehouse automation, SAP systems, and ethical vendor management.',
    image: '/images/program-masters-grand.png',
    badge: 'Essential Global Sector'
  },

  // Healthcare & Life Sciences
  {
    id: 'bs-biotech',
    title: 'B.S. in Biotechnology & Molecular Biology',
    category: 'Healthcare & Life Sciences',
    duration: '3 - 4 Years',
    avgStartingSalary: '$65,000 - $90,000',
    intakes: 'Fall (September)',
    careerProspects: ['Laboratory Technician', 'Bioinformatics Assistant', 'Quality Control Analyst'],
    description: 'Hands-on laboratory training in gene editing, immunology, microbiology, and biochemical assays in modern campus laboratories.',
    image: '/images/destinations-landmarks-grand.png',
    badge: 'R&D Pathway'
  },
  {
    id: 'bs-public-health',
    title: 'B.S. in Public Health & Health Administration',
    category: 'Healthcare & Life Sciences',
    duration: '3 - 4 Years',
    avgStartingSalary: '$62,000 - $88,000',
    intakes: 'Fall & Spring',
    careerProspects: ['Community Health Specialist', 'Hospital Administrator', 'Health Educator'],
    description: 'Analyze global epidemic response, health policy, health communication, and hospital service management.',
    image: '/images/about-students-headquarters-grand.png',
    badge: 'Global Healthcare'
  },
  {
    id: 'bs-biomedical',
    title: 'B.S. in Biomedical Sciences (Pre-Med Pathway)',
    category: 'Healthcare & Life Sciences',
    duration: '4 Years',
    avgStartingSalary: '$70,000 - $100,000',
    intakes: 'Fall (August/September)',
    careerProspects: ['Medical Researcher', 'Pre-Med Candidate', 'Pharmaceutical Specialist'],
    description: 'Rigorous pre-medical preparation covering anatomy, organic chemistry, physiology, and pathology for future MD/DO admissions.',
    image: '/images/program-bachelors-grand.png',
    badge: 'Pre-Med Foundation'
  },

  // Engineering
  {
    id: 'bs-mech-engg',
    title: 'B.S. in Mechanical & Mechatronics Engineering',
    category: 'Engineering',
    duration: '3 - 4 Years',
    avgStartingSalary: '$74,000 - $102,000',
    intakes: 'Fall & Spring',
    careerProspects: ['Mechanical Design Engineer', 'Automation Specialist', 'Automotive Engineer'],
    description: 'Study thermodynamics, robotics, machine kinematics, 3D CAD modeling, and manufacturing systems with factory internships.',
    image: '/images/hero-desktop.png',
    badge: 'Core Engineering'
  },
  {
    id: 'bs-electrical-engg',
    title: 'B.S. in Electrical & Computer Engineering',
    category: 'Engineering',
    duration: '3 - 4 Years',
    avgStartingSalary: '$78,000 - $108,000',
    intakes: 'Fall & Spring',
    careerProspects: ['Hardware Engineer', 'Circuit Design Lead', 'Telecommunications Analyst'],
    description: 'Bridge hardware and software with courses in digital circuits, microprocessor architecture, signal processing, and IoT sensors.',
    image: '/images/program-masters-grand.png',
    badge: 'Semiconductor Track'
  },
  {
    id: 'bs-aerospace',
    title: 'B.S. in Aerospace & Aeronautical Engineering',
    category: 'Engineering',
    duration: '4 Years',
    avgStartingSalary: '$78,000 - $112,000',
    intakes: 'Fall (August/September)',
    careerProspects: ['Aerospace Systems Engineer', 'Flight Test Analyst', 'Propulsion Specialist'],
    description: 'Aerodynamics, flight dynamics, propulsion rocket systems, spacecraft orbital mechanics, and space exploration technologies.',
    image: '/images/destinations-landmarks-grand.png',
    badge: 'High Prestige STEM'
  },

  // Environmental Science & Sustainability
  {
    id: 'bs-env-science',
    title: 'B.S. in Environmental Science & Climate Policy',
    category: 'Environmental Science',
    duration: '3 - 4 Years',
    avgStartingSalary: '$64,000 - $88,000',
    intakes: 'Fall & Spring',
    careerProspects: ['Environmental Consultant', 'Climate Policy Analyst', 'Ecosystem Specialist'],
    description: 'Fieldwork and policy studies addressing biodiversity loss, renewable conservation, water resource management, and ESG corporate reporting.',
    image: '/images/about-students-grand.png',
    badge: 'Future Green Leadership'
  },
  {
    id: 'bs-renewable-tech',
    title: 'B.S. in Sustainable Energy Technologies',
    category: 'Environmental Science',
    duration: '3 - 4 Years',
    avgStartingSalary: '$70,000 - $96,000',
    intakes: 'Fall & Spring',
    careerProspects: ['Solar Energy Consultant', 'Wind Power Specialist', 'CleanTech Associate'],
    description: 'Technical focus on solar photovoltaic engineering, wind energy systems, geothermal power, battery storage, and carbon capture.',
    image: '/images/program-training-grand.png',
    badge: 'CleanTech Boom'
  }
];

export const BACHELOR_ADMISSION_STEPS: BachelorStep[] = [
  {
    step: '01',
    title: 'Research and Select Universities',
    subtitle: 'Profile Assessment & Dream List',
    description: 'Explore global universities based on your 10th and 12th board scores, preferred degree stream, financial budget, and campus lifestyle. We create a balanced selection of Dream, Reach, and Safe colleges.',
    keyAction: 'Shortlist 6-10 colleges with proven undergraduate student support.',
    timeline: '12 - 14 Months Before Intake'
  },
  {
    step: '02',
    title: 'Understand Admission Requirements',
    subtitle: 'Standardized Tests & Criteria',
    description: 'Determine whether your shortlisted colleges require Digital SAT or ACT, verify board percentage cut-offs (CBSE, ICSE, State Board), and identify acceptable English test scores (IELTS/PTE/TOEFL/Duolingo).',
    keyAction: 'Prepare academic transcripts, teacher recommendations, and activity resume.',
    timeline: '10 - 12 Months Before Intake'
  },
  {
    step: '03',
    title: 'Apply for Scholarships & Financial Aid',
    subtitle: 'Maximize Tuition Reductions',
    description: 'Identify university presidential merit scholarships, international student grants, and departmental awards. We guide you through drafting high-impact scholarship essays and timely financial documentation.',
    keyAction: 'Apply before priority scholarship deadlines (often Nov 1 or Dec 1).',
    timeline: '8 - 10 Months Before Intake'
  },
  {
    step: '04',
    title: 'Submit Applications via Central Portals',
    subtitle: 'Common App, UCAS, OUAC & Direct',
    description: 'Complete and review your applications across global platforms like Common App (USA), UCAS (UK), OUAC (Canada), or direct university portals with zero administrative or biographical errors.',
    keyAction: 'Craft compelling personal statements, supplemental essays, and LOR submissions.',
    timeline: '6 - 8 Months Before Intake'
  },
  {
    step: '05',
    title: 'Attend Interviews & Portfolio Reviews',
    subtitle: 'Interactive Admissions Practice',
    description: 'Some competitive programs (Oxford, Cambridge, US Ivy Leagues, Art & Design colleges) conduct admissions interviews or portfolio evaluations. Our senior mentors conduct mock rounds to ensure confidence.',
    keyAction: 'Practice conversational responses highlighting your curiosity and leadership.',
    timeline: '4 - 6 Months Before Intake'
  },
  {
    step: '06',
    title: 'Receive and Respond to University Offers',
    subtitle: 'Offer Acceptance & Visa Filing',
    description: 'Review conditional and unconditional offer letters, compare scholarship awards, make tuition deposits, secure your I-20 / CAS / CoE, and complete your student visa application with mock interview drills.',
    keyAction: 'Accept your best offer, reserve on-campus dorms, and file student visa.',
    timeline: '2 - 4 Months Before Intake'
  }
];

export const BACHELOR_COUNTRIES: BachelorCountry[] = [
  {
    country: 'United States',
    slug: 'usa',
    flag: '🇺🇸',
    duration: '4 Years',
    pswRights: '1 Year OPT (3 Years for STEM Majors)',
    avgTuition: '$20,000 - $48,000 / Year',
    intakes: 'Fall (August/September) & Spring (January)',
    highlights: [
      'Flexible curriculum: choose major at end of sophomore year',
      'Option to pursue Double Majors or Major + Minor combinations',
      'Campus life with world-class athletics, research labs & clubs',
      'Generous merit scholarships up to $25,000/year for international students'
    ],
    topUnis: ['Purdue Univ', 'Arizona State Univ', 'Univ of Wisconsin-Madison', 'UT Dallas', 'Penn State']
  },
  {
    country: 'United Kingdom',
    slug: 'uk',
    flag: '🇬🇧',
    duration: '3 Years (4 Years in Scotland)',
    pswRights: '2-Year Graduate Route Work Permit',
    avgTuition: '£13,000 - £26,000 / Year',
    intakes: 'September / October',
    highlights: [
      'Accelerated 3-year degrees saving one full year of tuition & living',
      'Direct specialization from Day 1 without general education electives',
      'Simplified single application portal via UCAS (up to 5 choices)',
      'Historic universities with internationally respected qualifications'
    ],
    topUnis: ['Univ of Manchester', 'Univ of Bristol', 'Univ of Leeds', 'King’s College London', 'Univ of Glasgow']
  },
  {
    country: 'Canada',
    slug: 'canada',
    flag: '🇨🇦',
    duration: '4 Years',
    pswRights: 'Up to 3-Year Post-Graduation Work Permit (PGWP)',
    avgTuition: 'CAD 18,000 - 36,000 / Year',
    intakes: 'September & January',
    highlights: [
      'World-famous Co-op work terms providing paid industry internships',
      'High safety rating, welcoming culture, and diverse campuses',
      'Favorable post-study immigration point systems for graduates',
      'High-quality research universities and polytechnic institutes'
    ],
    topUnis: ['Univ of Waterloo', 'Univ of Toronto', 'Simon Fraser Univ', 'York Univ', 'Univ of Calgary']
  },
  {
    country: 'Australia',
    slug: 'australia',
    flag: '🇦🇺',
    duration: '3 Years (Honours: 4 Years)',
    pswRights: '2 to 4 Years (Subclass 485 Post-Study)',
    avgTuition: 'AUD 28,000 - 45,000 / Year',
    intakes: 'February & July',
    highlights: [
      'Group of Eight (Go8) world-leading institutions',
      'High minimum wage with part-time work rights up to 48 hours/fortnight',
      'Extended stay-back permits in designated regional cities',
      'Sunny climate, outdoor lifestyle, and strong Indian student diaspora'
    ],
    topUnis: ['Univ of Melbourne', 'UNSW Sydney', 'Univ of Queensland', 'Monash Univ', 'Univ of Western Australia']
  },
  {
    country: 'Ireland',
    slug: 'ireland',
    flag: '🇮🇪',
    duration: '3 - 4 Years',
    pswRights: '1-Year Third Level Graduate Scheme (Honours Bachelors)',
    avgTuition: '€11,000 - €22,000 / Year',
    intakes: 'September',
    highlights: [
      '100% English-speaking EU nation with booming technology sector',
      'Proximity to European HQs of Microsoft, Apple, Google, and Pfizer',
      'Safe, friendly student towns with world-class faculty',
      'Government of Ireland and institutional undergraduate awards'
    ],
    topUnis: ['Trinity College Dublin', 'Univ College Dublin', 'Univ of Galway', 'Dublin City Univ', 'Univ of Limerick']
  },
  {
    country: 'Germany',
    slug: 'germany',
    flag: '🇩🇪',
    duration: '3 - 3.5 Years',
    pswRights: '18-Month Job Seeker Visa',
    avgTuition: 'Nominal (€300 - €1,500/semester at Public Unis)',
    intakes: 'Winter (October) & Summer (April)',
    highlights: [
      'Virtually tuition-free higher education at public universities',
      'Europe’s engineering, automotive, and technological powerhouse',
      'Fast-track residency and EU Blue Card pathways for graduates',
      'Growing number of international English-taught bachelor’s programs'
    ],
    topUnis: ['TU Munich', 'RWTH Aachen', 'Heidelberg Univ', 'Karlsruhe Institute of Tech', 'Univ of Freiburg']
  }
];

export const BACHELOR_FAQS = [
  {
    q: 'Can Indian 12th board students (CBSE / ICSE / State Board) apply directly for Bachelors abroad?',
    a: 'Yes! Indian 10+2 high school qualifications (CBSE, ICSE, and State Boards including Andhra Pradesh Board of Intermediate Education) are widely recognized for direct entry into undergraduate degrees across the USA, UK, Canada, Australia, and Ireland.'
  },
  {
    q: 'Is Digital SAT mandatory for undergraduate admissions in the USA and Canada?',
    a: 'While many US universities are currently "test-optional," submitting a strong Digital SAT score (1350–1500+) significantly strengthens your application for competitive majors like Computer Science and dramatically increases your chances of securing presidential merit scholarships.'
  },
  {
    q: 'What is a Co-Op program, and why is it beneficial for Bachelor’s students?',
    a: 'Co-Op (Cooperative Education) alternates academic semesters with full-time, paid professional work in your field of study. Popular in Canada and the USA, Co-Op students earn significant money to offset living costs and frequently receive full-time job offers before graduation.'
  },
  {
    q: 'Can parents sponsor their child’s undergraduate education abroad, and what documents are required?',
    a: 'Yes, parents are the primary financial sponsors for undergraduate students. Essential documentation includes bank balance statements (past 6 months), fixed deposit certificates, approved education loan sanction letters, property valuation summaries, and income tax returns (ITR) for the last 2 to 3 years.'
  },
  {
    q: 'How safe is campus life for 18-year-old international undergraduate students?',
    a: 'International universities prioritize campus safety. Most institutions guarantee on-campus dormitory accommodation for first-year international students with 24/7 security, resident advisors, emergency call boxes, safe transit shuttles, and student health insurance centers.'
  },
  {
    q: 'What is the difference between a 3-year and a 4-year Bachelor’s degree?',
    a: 'In the UK, Australia, and New Zealand, standard Bachelor’s degrees are 3 years long, focusing exclusively on your chosen major from Year 1. In the USA and Canada, Bachelor’s degrees are 4 years, incorporating general education electives, minor options, and flexible exploratory coursework in the first two years.'
  }
];
