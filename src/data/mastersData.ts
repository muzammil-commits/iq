export interface MasterCourse {
  id: string;
  title: string;
  category: string;
  duration: string;
  avgSalary: string;
  intakes: string;
  topRoles: string[];
  description: string;
  image: string;
  badge?: string;
}

export interface MasterCountry {
  country: string;
  slug: string;
  flag: string;
  pswDuration: string;
  avgCostPerYear: string;
  avgSalary: string;
  intakes: string;
  topUniversities: string[];
  highlights: string[];
  visaType: string;
  image?: string;
}

export interface UniversityItem {
  id: string;
  name: string;
  country: string;
  flag: string;
  ranking: string;
  popularCourses: string[];
  tuitionFee: string;
  acceptanceRate: string;
  image: string;
}

export const MASTER_CATEGORIES = [
  'All Courses',
  'IT & Computer Science',
  'Business & Finance',
  'Management',
  'Healthcare & Pharma',
  'Engineering',
  'Design & Creative'
];

export const MASTER_COURSES: MasterCourse[] = [
  // IT & Computer Science
  {
    id: 'ms-ai-ml',
    title: 'Artificial Intelligence & Machine Learning',
    category: 'IT & Computer Science',
    duration: '1.5 - 2 Years',
    avgSalary: '$110,000 - $155,000',
    intakes: 'Fall (Aug/Sep) & Spring (Jan)',
    topRoles: ['AI Research Scientist', 'ML Engineer', 'NLP Architect'],
    description: 'Master deep neural networks, natural language processing, computer vision, and autonomous agent design with hands-on lab projects.',
    image: '/images/program-masters-grand.png',
    badge: 'High Demand STEM'
  },
  {
    id: 'ms-data-science',
    title: 'Data Science & Big Data Analytics',
    category: 'IT & Computer Science',
    duration: '1.5 - 2 Years',
    avgSalary: '$105,000 - $145,000',
    intakes: 'Fall, Spring & Summer',
    topRoles: ['Senior Data Scientist', 'Big Data Architect', 'Quantitative Analyst'],
    description: 'Harness predictive statistical modeling, distributed cloud architectures (Hadoop/Spark), and enterprise business intelligence.',
    image: '/images/destinations-landmarks-grand.png',
    badge: '3-Year STEM OPT'
  },
  {
    id: 'ms-cybersecurity',
    title: 'Cybersecurity & Information Assurance',
    category: 'IT & Computer Science',
    duration: '1 - 2 Years',
    avgSalary: '$100,000 - $140,000',
    intakes: 'Fall & Spring',
    topRoles: ['Chief Info Security Officer', 'Penetration Tester', 'Cloud Security Lead'],
    description: 'Learn ethical hacking, enterprise cryptography, security incident handling, and international cyber governance frameworks.',
    image: '/images/about-students-headquarters-grand.png',
    badge: 'Zero Unemployment Field'
  },
  {
    id: 'ms-computer-science',
    title: 'Computer Science & Software Engineering',
    category: 'IT & Computer Science',
    duration: '1 - 2 Years',
    avgSalary: '$102,000 - $150,000',
    intakes: 'Fall, Spring & Winter',
    topRoles: ['Full-Stack Lead', 'Systems Architect', 'DevOps Specialist'],
    description: 'Deep-dive into advanced algorithms, operating systems, distributed cloud computing, and high-performance software systems.',
    image: '/images/hero-desktop.png',
    badge: 'Flagship Program'
  },
  {
    id: 'ms-cloud-computing',
    title: 'Cloud Computing & Enterprise Systems',
    category: 'IT & Computer Science',
    duration: '1 - 2 Years',
    avgSalary: '$98,000 - $138,000',
    intakes: 'Fall & Spring',
    topRoles: ['Cloud Solutions Architect', 'Site Reliability Engineer', 'Cloud Consultant'],
    description: 'Specialize in AWS, Azure, Google Cloud hyperscale architecture, microservices, containerization, and enterprise automation.',
    image: '/images/program-masters-grand.png',
    badge: 'Global Industry Tie-Ups'
  },

  // Business & Finance
  {
    id: 'ms-mba',
    title: 'Master of Business Administration (MBA)',
    category: 'Business & Finance',
    duration: '1 - 2 Years',
    avgSalary: '$95,000 - $160,000',
    intakes: 'Rolling / September / January',
    topRoles: ['Management Consultant', 'Director of Operations', 'Product Manager'],
    description: 'World-renowned executive curriculum emphasizing corporate finance, entrepreneurial strategy, global marketing, and leadership.',
    image: '/images/about-students-grand.png',
    badge: 'Top Executive Return'
  },
  {
    id: 'ms-business-analytics',
    title: 'Business Analytics & Intelligence',
    category: 'Business & Finance',
    duration: '1 - 1.5 Years',
    avgSalary: '$90,000 - $130,000',
    intakes: 'Fall & Spring',
    topRoles: ['Business Analytics Lead', 'Strategy Associate', 'Data Insights Consultant'],
    description: 'Bridge the critical gap between computational analytics and executive board-level strategic decision-making with STEM qualification.',
    image: '/images/program-training-grand.png',
    badge: 'STEM Designated'
  },
  {
    id: 'ms-finance-fintech',
    title: 'Finance & FinTech',
    category: 'Business & Finance',
    duration: '1 - 2 Years',
    avgSalary: '$92,000 - $145,000',
    intakes: 'September & January',
    topRoles: ['Investment Banker', 'Algorithmic Trader', 'FinTech Product Specialist'],
    description: 'Comprehensive study of blockchain, digital currencies, corporate finance, algorithmic trading models, and global equity valuation.',
    image: '/images/destinations-landmarks-grand.png',
    badge: 'Wall Street & London Hubs'
  },
  {
    id: 'ms-intl-business',
    title: 'International Business & Trade',
    category: 'Business & Finance',
    duration: '1 - 2 Years',
    avgSalary: '$85,000 - $125,000',
    intakes: 'Fall & Winter',
    topRoles: ['Global Trade Specialist', 'Export-Import Director', 'Policy Analyst'],
    description: 'Navigate multinational operations, foreign direct investment, cross-border intellectual property, and global market expansion.',
    image: '/images/student-testimonial-grand.png',
    badge: 'European & Asian HQs'
  },

  // Management
  {
    id: 'ms-mem',
    title: 'Engineering Management (MEM)',
    category: 'Management',
    duration: '1 - 2 Years',
    avgSalary: '$92,000 - $135,000',
    intakes: 'Fall & Spring',
    topRoles: ['Technical Project Manager', 'Engineering Director', 'R&D Operations Lead'],
    description: 'Often termed the "Engineer’s MBA" – combining advanced technical execution with budgeting, agile leadership, and operations management.',
    image: '/images/program-masters-grand.png',
    badge: 'Popular for B.Tech Grads'
  },
  {
    id: 'ms-project-management',
    title: 'Global Project Management (PMI Accredited)',
    category: 'Management',
    duration: '1 - 2 Years',
    avgSalary: '$88,000 - $128,000',
    intakes: 'Fall, Spring & Summer',
    topRoles: ['Senior Project Manager', 'Scrum Master', 'Transformation Consultant'],
    description: 'Prepare for PMP certification while governing complex technical budgets, supply chains, human capital, and corporate delivery.',
    image: '/images/about-students-headquarters-grand.png',
    badge: 'Industry Certified'
  },
  {
    id: 'ms-supply-chain',
    title: 'Supply Chain & Logistics Management',
    category: 'Management',
    duration: '1 - 1.5 Years',
    avgSalary: '$85,000 - $122,000',
    intakes: 'September & January',
    topRoles: ['Global Supply Chain Director', 'Procurement Specialist', 'Logistics Analyst'],
    description: 'Master omnichannel logistics, maritime transportation, ERP systems (SAP), and green sustainability in modern production networks.',
    image: '/images/hero-desktop.png',
    badge: 'High Industry Demand'
  },

  // Healthcare & Pharma
  {
    id: 'ms-public-health',
    title: 'Public Health (MPH)',
    category: 'Healthcare & Pharma',
    duration: '1.5 - 2 Years',
    avgSalary: '$82,000 - $120,000',
    intakes: 'Fall (August/September)',
    topRoles: ['Epidemiologist', 'Public Health Policy Advisor', 'Clinical Research Manager'],
    description: 'Study biostatistics, epidemiology, global health economics, and infectious disease containment with WHO-recognized faculties.',
    image: '/images/program-bachelors-grand.png',
    badge: 'Global Health Impact'
  },
  {
    id: 'ms-health-informatics',
    title: 'Healthcare Informatics & Digital Health',
    category: 'Healthcare & Pharma',
    duration: '1.5 - 2 Years',
    avgSalary: '$88,000 - $130,000',
    intakes: 'Fall & Spring',
    topRoles: ['Clinical Informatics Specialist', 'Hospital IT Director', 'Health Data Architect'],
    description: 'Integrate electronic medical records, HIPAA compliance, healthcare analytics, and patient monitoring telemedicine tech.',
    image: '/images/about-students-grand.png',
    badge: 'Fast-Growing Sector'
  },
  {
    id: 'ms-biotech',
    title: 'Biotechnology & Molecular Sciences',
    category: 'Healthcare & Pharma',
    duration: '2 Years',
    avgSalary: '$85,000 - $125,000',
    intakes: 'Fall (September)',
    topRoles: ['Biomedical Scientist', 'Genetic Engineer', 'Clinical Trial Lead'],
    description: 'Hands-on lab training in CRISPR gene editing, drug formulation, biomaterials, and bio-manufacturing at top research universities.',
    image: '/images/destinations-landmarks-grand.png',
    badge: 'Research Lab Focus'
  },

  // Engineering
  {
    id: 'ms-mech-robotics',
    title: 'Mechanical Engineering & Robotics',
    category: 'Engineering',
    duration: '1.5 - 2 Years',
    avgSalary: '$90,000 - $132,000',
    intakes: 'Fall & Spring',
    topRoles: ['Robotics Design Engineer', 'Automotive Systems Lead', 'Simulation Analyst'],
    description: 'Cutting-edge training in automated robotics, finite element analysis (FEA), fluid dynamics, and additive 3D manufacturing.',
    image: '/images/program-masters-grand.png',
    badge: 'Heavy Industry Ties'
  },
  {
    id: 'ms-renewable-energy',
    title: 'Renewable Energy & Sustainability Engineering',
    category: 'Engineering',
    duration: '1 - 2 Years',
    avgSalary: '$88,000 - $128,000',
    intakes: 'Fall & Spring',
    topRoles: ['Renewable Energy Lead', 'Grid Optimization Engineer', 'Sustainability Officer'],
    description: 'Explore photovoltaic tech, offshore wind energy, smart power grids, battery storage, and carbon-neutral industrial design.',
    image: '/images/destinations-landmarks-grand.png',
    badge: 'Future Green Careers'
  },
  {
    id: 'ms-electrical-embed',
    title: 'Electrical & Embedded Systems',
    category: 'Engineering',
    duration: '1.5 - 2 Years',
    avgSalary: '$95,000 - $138,000',
    intakes: 'Fall & Spring',
    topRoles: ['VLSI Design Engineer', 'Embedded Firmware Lead', 'IoT Systems Architect'],
    description: 'Microcontroller architecture, semiconductor fabrication, chip design, signal processing, and real-time firmware development.',
    image: '/images/hero-desktop.png',
    badge: 'Semiconductor Boom'
  },

  // Design & Creative
  {
    id: 'ms-ui-ux',
    title: 'UI/UX Design & Human-Computer Interaction',
    category: 'Design & Creative',
    duration: '1 - 2 Years',
    avgSalary: '$88,000 - $130,000',
    intakes: 'Fall & Spring',
    topRoles: ['Lead Product Designer', 'UX Researcher', 'Interaction Architect'],
    description: 'Master user behavioral psychology, usability testing, wireframing, enterprise design systems, and inclusive digital accessibility.',
    image: '/images/program-training-grand.png',
    badge: 'Silicon Valley Standard'
  },
  {
    id: 'ms-digital-media',
    title: 'Digital Media & Game Production',
    category: 'Design & Creative',
    duration: '1 - 2 Years',
    avgSalary: '$80,000 - $120,000',
    intakes: 'September & January',
    topRoles: ['Creative Director', 'Game Engine Specialist', 'VFX Producer'],
    description: 'Immersive production across Unreal Engine, Unity, 3D character rigging, augmented reality, and global entertainment media.',
    image: '/images/about-students-headquarters-grand.png',
    badge: 'Entertainment & Gaming'
  }
];

export const MASTER_COUNTRIES: MasterCountry[] = [
  {
    country: 'United States',
    slug: 'usa',
    flag: '🇺🇸',
    pswDuration: 'Up to 3 Years (STEM OPT)',
    avgCostPerYear: '$22,000 - $48,000',
    avgSalary: '$85,000 - $145,000',
    intakes: 'Fall (Aug/Sep), Spring (Jan)',
    topUniversities: ['UT Arlington', 'Arizona State Univ', 'Northeastern Univ', 'Purdue Univ', 'Illinois Tech'],
    highlights: [
      '3-Year STEM OPT post-study work authorization',
      'Over 4,000+ accredited universities with rich assistantships',
      'Silicon Valley, Wall Street, and Austin tech hub employment',
      'GRE waivers available for qualified applicants'
    ],
    visaType: 'F-1 Student Visa',
    image: '/images/destinations/usa-dest.png'
  },
  {
    country: 'United Kingdom',
    slug: 'uk',
    flag: '🇬🇧',
    pswDuration: '2 Years (Graduate Route)',
    avgCostPerYear: '£14,000 - £28,000',
    avgSalary: '£36,000 - £65,000',
    intakes: 'September & January',
    topUniversities: ['Univ of Manchester', 'Univ of Leeds', 'Univ of Birmingham', 'Kingston Univ', 'Queen Mary'],
    highlights: [
      '1-Year accelerated Master’s saving tuition & living costs',
      '2-Year post-study work visa without employer sponsorship',
      'No GRE required for majority of postgraduate programs',
      'World-famous Russell Group research institutions'
    ],
    visaType: 'UK Student Route Visa',
    image: '/images/destinations/uk-dest.png'
  },
  {
    country: 'Australia',
    slug: 'australia',
    flag: '🇦🇺',
    pswDuration: '2 to 4 Years (Subclass 485)',
    avgCostPerYear: 'AUD 28,000 - 45,000',
    avgSalary: 'AUD 75,000 - 110,000',
    intakes: 'February & July',
    topUniversities: ['Monash Univ', 'Univ of Melbourne', 'UNSW Sydney', 'Univ of Queensland', 'Deakin Univ'],
    highlights: [
      'Top 100 Group of Eight (Go8) world-ranked institutions',
      'High minimum wage and generous student working rights',
      'Extended stay in regional growth cities (Adelaide, Perth)',
      'Clear, points-based Permanent Residency pathways'
    ],
    visaType: 'Subclass 500 Student Visa',
    image: '/images/destinations/australia-dest.png'
  },
  {
    country: 'Canada',
    slug: 'canada',
    flag: '🇨🇦',
    pswDuration: 'Up to 3 Years (PGWP)',
    avgCostPerYear: 'CAD 20,000 - 38,000',
    avgSalary: 'CAD 65,000 - 95,000',
    intakes: 'September, January & May',
    topUniversities: ['Univ of Windsor', 'Concordia Univ', 'Univ of Ottawa', 'Dalhousie Univ', 'York Univ'],
    highlights: [
      'Post-Graduation Work Permit (PGWP) up to 3 full years',
      'Affordable tuition relative to USD exchange rates',
      'Express Entry & Provincial Nominee Program (PNP) advantages',
      'Co-op integrated terms with leading tech employers'
    ],
    visaType: 'Study Permit & TRV',
    image: '/images/destinations/canada-dest.png'
  },
  {
    country: 'Ireland',
    slug: 'ireland',
    flag: '🇮🇪',
    pswDuration: '2 Years (Third Level Scheme)',
    avgCostPerYear: '€12,000 - €24,000',
    avgSalary: '€42,000 - €70,000',
    intakes: 'September & January',
    topUniversities: ['Trinity College Dublin', 'Univ College Dublin', 'Dublin City Univ', 'Univ of Galway', 'NCI'],
    highlights: [
      'European headquarters for Google, Apple, Meta, Pfizer & Stripe',
      '1-Year Master’s with 2-year post-study work permit',
      '100% English-speaking nation in the European Union',
      'Generous merit scholarships up to €5,000 for Indian students'
    ],
    visaType: 'Stamp 2 Student Visa',
    image: '/images/destinations/ireland-dest.png'
  },
  {
    country: 'Germany',
    slug: 'germany',
    flag: '🇩🇪',
    pswDuration: '18 Months Job Seeker Visa',
    avgCostPerYear: '€0 - €3,000 (Public Unis)',
    avgSalary: '€50,000 - €75,000',
    intakes: 'Winter (October) & Summer (April)',
    topUniversities: ['TU Munich', 'RWTH Aachen', 'TU Berlin', 'Univ of Stuttgart', 'FAU Erlangen'],
    highlights: [
      'Tuition-free or low-cost higher education at world-class public universities',
      'Europe’s largest economy with severe engineering shortages',
      '18-month stay-back permit leading directly to EU Blue Card',
      'English-taught postgraduate degrees in engineering & CS'
    ],
    visaType: 'National Visa (D-Visa)',
    image: '/images/destinations/germany-dest.png'
  },
  {
    country: 'New Zealand',
    slug: 'new-zealand',
    flag: '🇳🇿',
    pswDuration: 'Up to 3 Years',
    avgCostPerYear: 'NZD 28,000 - 42,000',
    avgSalary: 'NZD 68,000 - 95,000',
    intakes: 'February & July',
    topUniversities: ['Univ of Auckland', 'Univ of Otago', 'Univ of Canterbury', 'Waikato Univ', 'Victoria Univ'],
    highlights: [
      'Safe, tranquil environment with top-ranked public universities',
      '3-Year Post-Study Work Visa for Master’s graduates',
      'Green List occupations with direct residency pathways',
      'Spouse work visa rights for eligible postgraduate degrees'
    ],
    visaType: 'Fee Paying Student Visa',
    image: '/images/destinations/new-zealand-dest.png'
  },
  {
    country: 'France',
    slug: 'france',
    flag: '🇫🇷',
    pswDuration: '2 Years Stay-Back Visa',
    avgCostPerYear: '€9,000 - €22,000',
    avgSalary: '€40,000 - €65,000',
    intakes: 'September & January',
    topUniversities: ['HEC Paris', 'INSEAD', 'Sorbonne Univ', 'SKEMA Business School', 'Grenoble INP'],
    highlights: [
      'World-famous Grand Écoles for MBA, Luxury, Management & Fashion',
      'Subsidized student housing (CAF allowance) from French government',
      '2-Year post-study work visa for Master’s degree holders',
      'English-medium instruction with free French language workshops'
    ],
    visaType: 'VLS-TS Long Stay Visa',
    image: '/images/destinations/europe-france-dest.png'
  },
  {
    country: 'Singapore',
    slug: 'singapore',
    flag: '🇸🇬',
    pswDuration: '1 Year Work Pass / S-Pass',
    avgCostPerYear: 'SGD 26,000 - 48,000',
    avgSalary: 'SGD 60,000 - 100,000',
    intakes: 'August & January',
    topUniversities: ['NUS', 'NTU', 'SMU', 'PSB Academy', 'James Cook Univ Singapore'],
    highlights: [
      'Top-15 global university rankings with high Asian market prestige',
      'Financial and AI epicenter with 7,000+ multinational firms',
      'Close proximity to India with direct flights and safe lifestyle',
      'Short 1-year master’s with rapid corporate recruitment'
    ],
    visaType: 'Student Pass (STP)'
  },
  {
    country: 'Dubai (UAE)',
    slug: 'dubai',
    flag: '🇦🇪',
    pswDuration: '1 to 2 Years Green Visa',
    avgCostPerYear: 'AED 45,000 - 85,000',
    avgSalary: 'AED 80,000 - 140,000',
    intakes: 'September, January & May',
    topUniversities: ['Middlesex Univ Dubai', 'Heriot-Watt Dubai', 'Univ of Wollongong', 'BITS Dubai', 'Manipal Dubai'],
    highlights: [
      'Zero income tax on earnings with rapid corporate growth',
      'Direct branch campuses offering original UK & Australian degrees',
      'Simple, hassle-free visa processing with fast turnaround',
      'Booming trade, tech, and tourism corporate hub'
    ],
    visaType: 'UAE Student Residence Visa'
  }
];

export const POPULAR_UNIVERSITIES: UniversityItem[] = [
  {
    id: 'uta',
    name: 'University of Texas at Arlington',
    country: 'United States',
    flag: '🇺🇸',
    ranking: 'Top Tier R1 Research',
    popularCourses: ['MS Computer Science', 'MS Data Science', 'MS Mechanical'],
    tuitionFee: '$23,000 / Year',
    acceptanceRate: '80%',
    image: '/images/destinations-landmarks-grand.png'
  },
  {
    id: 'northeastern',
    name: 'Northeastern University',
    country: 'United States',
    flag: '🇺🇸',
    ranking: 'Top 50 US National',
    popularCourses: ['MS Computer Science', 'MS Analytics', 'MS Information Systems'],
    tuitionFee: '$32,000 / Year',
    acceptanceRate: '18%',
    image: '/images/program-masters-grand.png'
  },
  {
    id: 'leeds',
    name: 'University of Leeds',
    country: 'United Kingdom',
    flag: '🇬🇧',
    ranking: 'Russell Group • QS Top 80',
    popularCourses: ['MSc Business Analytics', 'MSc Data Science', 'MBA'],
    tuitionFee: '£26,500 / Year',
    acceptanceRate: '65%',
    image: '/images/about-students-headquarters-grand.png'
  },
  {
    id: 'manchester',
    name: 'University of Manchester',
    country: 'United Kingdom',
    flag: '🇬🇧',
    ranking: 'Russell Group • QS Top 35',
    popularCourses: ['MSc Advanced CS', 'MSc Finance', 'MSc Management'],
    tuitionFee: '£31,000 / Year',
    acceptanceRate: '56%',
    image: '/images/hero-desktop.png'
  },
  {
    id: 'monash',
    name: 'Monash University',
    country: 'Australia',
    flag: '🇦🇺',
    ranking: 'Group of Eight • QS Top 45',
    popularCourses: ['Master of IT', 'Master of Data Science', 'Master of Banking'],
    tuitionFee: 'AUD 44,000 / Year',
    acceptanceRate: '40%',
    image: '/images/destinations-landmarks-grand.png'
  },
  {
    id: 'concordia',
    name: 'Concordia University',
    country: 'Canada',
    flag: '🇨🇦',
    ranking: 'Top Canadian Comprehensive',
    popularCourses: ['M.Eng Software', 'M.Eng Mechanical', 'MSc Computer Science'],
    tuitionFee: 'CAD 24,000 / Year',
    acceptanceRate: '68%',
    image: '/images/program-bachelors-grand.png'
  },
  {
    id: 'ucd',
    name: 'University College Dublin (UCD)',
    country: 'Ireland',
    flag: '🇮🇪',
    ranking: 'QS Top 170 • Triple Crown',
    popularCourses: ['MSc Computer Science', 'MSc Business Analytics', 'MSc FinTech'],
    tuitionFee: '€22,500 / Year',
    acceptanceRate: '50%',
    image: '/images/about-students-grand.png'
  },
  {
    id: 'tum',
    name: 'Technical University of Munich (TUM)',
    country: 'Germany',
    flag: '🇩🇪',
    ranking: 'TU9 • QS Top 30 World',
    popularCourses: ['MSc Informatics', 'MSc Robotics', 'MSc Power Engg'],
    tuitionFee: '€3,000 / Year (Nominal)',
    acceptanceRate: '25%',
    image: '/images/hero-desktop.png'
  }
];

export const MASTER_FAQS = [
  {
    q: 'Can I apply for a Master’s degree abroad with a 3-year Bachelor’s (e.g. B.Sc, B.Com, BBA)?',
    a: 'Yes! The UK, Ireland, Australia, New Zealand, and most European countries fully accept 3-year Indian bachelor’s degrees for direct Master’s entry. In the USA and Canada, many top universities now evaluate 3-year degrees via WES or accept students directly into specialized MS programs.'
  },
  {
    q: 'Is GRE or GMAT mandatory for all Master’s programs abroad?',
    a: 'No. GRE/GMAT is completely waived by most universities in the UK, Australia, Ireland, and Canada. In the USA, many top institutions offer GRE waivers for applicants with strong undergraduate GPAs (above 3.0 / 70%) or relevant technical work experience.'
  },
  {
    q: 'How much does it cost to pursue a Master’s degree abroad, and can I get scholarships?',
    a: 'Tuition costs range from virtually zero tuition in public German universities to £14,000–£28,000 in the UK and $22,000–$45,000/year in the USA. IQ Overseas assists with university merit scholarships ranging from $3,000 to full 50% tuition waivers, as well as education loans.'
  },
  {
    q: 'How many backlogs are acceptable for international Master’s applications?',
    a: 'Most universities in the UK and USA accept candidates with up to 10 to 15 backlogs if cleared, provided the overall CGPA meets minimum thresholds. Australian and Canadian universities typically prefer fewer backlogs (generally under 5 to 8).'
  },
  {
    q: 'What is the Post-Study Work (PSW) permit duration after completing a Master’s degree?',
    a: 'In the USA, STEM Master’s graduates receive up to 3 years of OPT. In the UK and Ireland, graduates receive a 2-year post-study work visa. In Canada, 2-year Master’s programs qualify for a 3-year PGWP, while Australia offers 2 to 4 years.'
  },
  {
    q: 'Can I work part-time while studying Master’s abroad?',
    a: 'Yes. Most major destinations (USA, UK, Australia, Canada, Ireland, Germany) permit international students to work up to 20 hours per week during academic semesters and full-time (40 hours) during vacation periods.'
  }
];
