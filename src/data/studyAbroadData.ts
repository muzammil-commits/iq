import { CountryPageData } from '../types/studyAbroad';

export const INITIAL_COUNTRIES_DATA: Record<string, CountryPageData> = {
  // 1. Australia
  australia: {
    id: 'country-01',
    slug: 'australia',
    name: 'Australia',
    flag: '🇦🇺',
    isPublished: true,
    order: 1,
    seoTitle: 'Study in Australia – Top Universities, Courses, Cost & Visa Guidance | IQ Overseas',
    seoDescription: 'Complete guide to studying in Australia for Indian students. Learn about Group of Eight universities, tuition fees, post-study work visa up to 5 years, scholarships, and PR pathways with IQ Overseas.',
    heroBanner: {
      imageUrl: '/images/destinations/australia-dest.png',
      headline: 'Study in Australia – Expert Study Abroad Guidance by IQ Overseas',
      subtitle: 'Unlock world-class education across top-ranked universities, innovative research hubs, and generous post-study work opportunities.',
      badge: 'Group of Eight & High ROI',
      stats: [
        { label: 'Universities', value: '43' },
        { label: 'Global Rank', value: '9 in Top 100' },
        { label: 'Min Wage', value: '$26.44 / hr' },
        { label: 'Post-Study Work', value: 'Up to 5 Yrs' }
      ]
    },
    introduction: {
      heading: 'Study in Australia – Best Australia Student Visa Guidance in Guntur & Andhra Pradesh',
      subheading: 'Turn your global academic ambition into high-income career outcomes down under.',
      paragraphs: [
        'Australia has emerged as one of the premier study destinations for Indian students, offering world-class academic standards, state-of-the-art research infrastructure, and welcoming multicultural campuses. With 9 of the world’s top 100 universities located in Australia, your qualification is recognized by employers and institutions worldwide.',
        'At IQ Overseas, we take immense pride in being trusted study-in-Australia education consultants based in Lakshmipuram, Guntur. Our certified counselors provide individualized guidance on course selection, university shortlisting across Group of Eight and Australian Technology Network institutions, Genuine Student (GS) visa filing, and scholarship mapping.',
        'From managing initial application documents and English proficiency coaching to securing education loans, student health cover (OSHC), and pre-departure briefings, IQ Overseas delivers end-to-end guidance so you arrive on campus with absolute clarity.'
      ],
      highlights: [
        'World top-ranking institutions (University of Melbourne, Sydney, UNSW, ANU, Monash)',
        'Up to 48 hours per fortnight part-time work rights during studies with minimum wage of $26.44/hour',
        'Extended post-study work visas (Subclass 485) allowing up to 5 years of career experience in Australia',
        'Direct pathways to permanent residency (PR) in high-demand skill shortage sectors'
      ]
    },
    quickFacts: {
      country: 'Australia',
      capital: 'Canberra',
      popularCities: 'Sydney, Melbourne, Brisbane, Perth, Adelaide, Gold Coast',
      currency: 'Australian Dollar (AUD)',
      language: 'English',
      popularIntakes: 'Semester 1 (February/March), Semester 2 (July/August), Trimester 3 (November)',
      topCourses: 'Information Technology, Computer Science, Data Science, MBA, Nursing, Engineering, Hospitality',
      avgTuitionFee: 'AUD 20,000 to AUD 45,000 per year',
      postStudyWork: '2 to 5 Years (Subclass 485 Post-Higher Education Work Stream)',
      workRights: '48 hours per fortnight during study sessions; Unlimited hours during scheduled breaks'
    },
    educationLandscape: {
      intro: 'Australia’s higher education system is renowned globally for its rigorous academic framework, the Australian Qualifications Framework (AQF), ensuring seamless progression from diplomas to doctorates.',
      bulletPoints: [
        'Universities: 43 recognized universities (40 public universities, 2 international universities, and 1 private university).',
        'TAFEs (Technical and Further Education): Government-funded vocational colleges offering practical, industry-aligned diplomas.',
        'Private Higher Education Providers: Specialized colleges offering accredited degree and master’s programs with small classroom batches.'
      ],
      comparisonTable: [
        { aspect: 'Duration', undergraduate: 'Typically 3 - 4 Years (Honours: 4 Years)', postgraduate: '1 - 2 Years (Coursework or Research)' },
        { aspect: 'Entry Requirements', undergraduate: 'Completion of 12th grade (60% to 75%+)', postgraduate: 'Recognized Bachelor’s degree in related field' },
        { aspect: 'Popular Courses', undergraduate: 'Engineering, IT, Business, Nursing, Arts, Cyber Security', postgraduate: 'Data Science, Cyber Security, MBA, Public Health, AI' },
        { aspect: 'Focus', undergraduate: 'Broad foundational knowledge & core industry principles', postgraduate: 'Specialized advanced expertise, capstones & research' },
        { aspect: 'Teaching Style', undergraduate: 'Lectures, tutorials, laboratory practicals, group assignments', postgraduate: 'Research projects, case studies, industry practicums' },
        { aspect: 'Outcome', undergraduate: 'Bachelor’s Degree (AQF Level 7)', postgraduate: 'Master’s Degree (AQF Level 9) or Graduate Diploma' },
        { aspect: 'Eligibility for PR', undergraduate: 'Eligible for post-study work; PR via points-based skilled stream', postgraduate: 'Higher points weighting for Australian master’s qualifications' }
      ]
    },
    whyStudyBenefits: [
      { id: '1', title: 'Group of Eight Excellence', description: 'Study at world-class institutions with top 100 QS global rankings and billions in annual research investment.' },
      { id: '2', title: 'Attractive Work Rights', description: 'Work up to 48 hours per fortnight during semesters with Australia’s national minimum wage of $26.44 per hour.' },
      { id: '3', title: 'Generous Post-Study Work Visas', description: 'Stay and work in Australia for 2 to 5 years after graduation through the Subclass 485 Temporary Graduate Visa.' },
      { id: '4', title: 'Global Career Recognition', description: 'Australian qualifications are endorsed globally, enabling graduates to secure top positions across APAC, US, and Europe.' },
      { id: '5', title: 'Regional Study Benefits', description: 'Studying in regional cities (Perth, Adelaide, Gold Coast) grants an additional 1 to 2 years of work rights and 5 extra PR points.' },
      { id: '6', title: 'High Standard of Living', description: 'Australian cities consistently rank among the world’s top 10 most livable cities for safety, environment, and healthcare.' }
    ],
    topCourses: [
      { id: 'c1', title: 'Data Science & Artificial Intelligence', category: 'Technology', duration: '1.5 - 2 Years', description: 'Machine learning, predictive analytics, and big data architecture for high-demand tech sectors.', careerRoles: ['Data Scientist', 'AI Engineer', 'BI Analyst'] },
      { id: 'c2', title: 'Cyber Security & Cloud Computing', category: 'Technology', duration: '2 Years', description: 'Defensive architecture, ethical hacking, and secure network infrastructure in high shortage across Australia.', careerRoles: ['Security Architect', 'Cyber Analyst', 'Cloud Specialist'] },
      { id: 'c3', title: 'Master of Business Administration (MBA)', category: 'Business', duration: '1.5 - 2 Years', description: 'Strategic leadership, venture creation, and financial management with global industry case studies.', careerRoles: ['Management Consultant', 'Strategy Director', 'Product Manager'] },
      { id: 'c4', title: 'Master of Professional Accounting & Finance', category: 'Business', duration: '2 Years', description: 'CPA-accredited curriculum covering corporate taxation, financial modeling, and audits.', careerRoles: ['Financial Analyst', 'Auditor', 'Investment Manager'] },
      { id: 'c5', title: 'Civil & Mechanical Engineering', category: 'Engineering', duration: '2 Years', description: 'Engineers Australia accredited programs aligned with major Australian infrastructure megaprojects.', careerRoles: ['Structural Engineer', 'Project Manager', 'Design Engineer'] },
      { id: 'c6', title: 'Master of Nursing & Healthcare Management', category: 'Healthcare', duration: '2 Years', description: 'AHPRA registered nursing pathways with clinical rotations and priority PR processing.', careerRoles: ['Registered Nurse', 'Healthcare Administrator', 'Clinical Nurse Specialist'] }
    ],
    scholarships: {
      intro: 'Australian universities and the federal government offer substantial merit-based and equity scholarships specifically designed for talented Indian students.',
      items: [
        { id: 's1', name: 'Australia Awards Scholarships', provider: 'Australian Government (DFAT)', award: 'Full Tuition + Living Allowance + Airfare', eligibility: 'High-achieving postgraduate and research scholars with leadership potential.' },
        { id: 's2', name: 'Destination Australia Program', provider: 'Department of Education', award: 'Up to AUD 15,000 per year', eligibility: 'Students enrolling at regional university campuses in regional locations.' },
        { id: 's3', name: 'Global Excellence & Merit Scholarships', provider: 'Individual Universities (Go8 & ATN)', award: '15% to 50% Tuition Fee Reduction', eligibility: 'Academic merit in 12th or Bachelor’s degree (typically 70%+ GPA).' },
        { id: 's4', name: 'Vice-Chancellor’s International Scholarship', provider: 'Top Australian Universities', award: 'Up to AUD 40,000 total waiver', eligibility: 'Exemplary academic record and strong extracurricular / leadership profile.' }
      ]
    },
    admissionIntakes: {
      intro: 'Australian institutions follow a multi-intake academic calendar, giving students flexibility to apply according to their graduation timelines.',
      items: [
        { name: 'Semester 1 (Primary Intake)', period: 'February / March', deadline: 'October – November', remarks: 'Offers the widest range of courses, highest scholarship allocations, and campus orientations.' },
        { name: 'Semester 2 (Secondary Intake)', period: 'July / August', deadline: 'April – May', remarks: 'Very popular with Indian students completing undergraduate degrees in May/June.' },
        { name: 'Trimester 3 (Summer Intake)', period: 'October / November', deadline: 'August – September', remarks: 'Available for selected business, IT, and master’s degrees at trimester-based universities.' }
      ]
    },
    studyPrograms: {
      intro: 'Choose from a broad spectrum of accredited qualifications structured under the Australian Qualifications Framework (AQF).',
      items: [
        { level: 'Bachelor’s Degree', duration: '3 to 4 Years', description: 'Comprehensive undergraduate education combining theoretical foundations with industry internships.', outcomes: 'AQF Level 7 – Direct entry into professional roles or Master’s' },
        { level: 'Master’s by Coursework', duration: '1 to 2 Years', description: 'Intensive specialized professional training designed for accelerated industry career progression.', outcomes: 'AQF Level 9 – Qualifies for 2-5 year post-study work visa' },
        { level: 'Master’s by Research', duration: '2 Years', description: 'Independent investigative research project leading to a thesis under academic faculty supervision.', outcomes: 'AQF Level 9 – Pathway to PhD and doctoral fellowships' },
        { level: 'Doctor of Philosophy (PhD)', duration: '3 to 4 Years', description: 'Advanced original research contributing novel insights to global academic literature.', outcomes: 'AQF Level 10 – Highest academic credential with maximum PR points' }
      ]
    },
    englishRequirements: {
      intro: 'Demonstrating English proficiency is mandatory for university admission and the Australian Department of Home Affairs student visa.',
      ielts: { ug: 'Overall 6.0 (no band less than 5.5)', pg: 'Overall 6.5 (no band less than 6.0; 7.0 for Nursing/Teaching)', notes: 'Academic module required. Some institutions accept overall 6.0 with packaging.' },
      pte: { ug: 'Overall 50 to 52 (minimum 42 in each skill)', pg: 'Overall 58 to 64 (minimum 50 in communicative skills)', notes: 'PTE Academic is widely preferred across Australia for instant computerized scoring.' },
      toefl: { ug: 'Overall 60 to 70', pg: 'Overall 79 to 90 (with subscore minimums)', notes: 'TOEFL iBT test center scores accepted.' },
      duolingo: { ug: 'Overall 105 - 115', pg: 'Overall 115 - 125', notes: 'Accepted by selected institutions for admission; check specific visa requirements.' }
    },
    entryRequirements: {
      intro: 'Australian universities evaluate applications holistically, reviewing academic transcripts, backlogs, English proficiency, and Statement of Purpose.',
      criteria: [
        '10th & 12th Grade Marksheets with minimum 60% – 65% aggregate for Bachelor’s admissions.',
        'Recognized 3-Year or 4-Year Bachelor’s degree from an accredited Indian university with minimum 55% – 60% for Master’s.',
        'Universities accept up to 10 to 15 backlogs depending on university tier and degree area.',
        'Genuine Student (GS) Statement of Purpose detailing career goals, study rationale, and financial readiness.',
        'Letters of Recommendation (LORs) and Updated CV with documented work experience (where applicable).'
      ],
      academicPercentage: 'Minimum 60% for Tier-1/Go8 universities; 55% accepted by select established public universities.',
      backlogPolicy: 'Backlog limits typically range between 5 and 15 depending on whether single-attempt or repeat fails.'
    },
    costOfStudying: {
      bachelorsTuition: 'AUD 20,000 to AUD 40,000 per year',
      mastersTuition: 'AUD 22,000 to AUD 48,000 per year',
      livingExpenses: 'AUD 29,710 per year (Official DHA living cost requirement as of May 2024)',
      healthInsurance: 'AUD 600 to AUD 800 per year (Overseas Student Health Cover - OSHC)',
      visaFee: 'AUD 1,600 (Student Visa Subclass 500)',
      additionalNotes: 'Living expenses include accommodation, food, utilities, and local transport. Spousal accompanying cost is AUD 10,394/year; child cost is AUD 4,449/year.'
    },
    documentsRequired: {
      admissionDocuments: [
        'Class 10th and 12th official mark sheets and certificates',
        'Bachelor’s semester-wise mark sheets, consolidated transcript & provisional degree certificate',
        'Official English proficiency test scorecard (IELTS / PTE / TOEFL)',
        'Statement of Purpose (SOP) tailored to university and course',
        'Two Letters of Recommendation (Academic and Professional)',
        'Updated Resume / Curriculum Vitae',
        'Passport bio pages (front and back)'
      ],
      visaDocuments: [
        'Electronic Confirmation of Enrolment (eCoE) from the university',
        'Valid Passport with at least 6 months validity',
        'Genuine Student (GS) explanatory statement addressing DHA guidelines',
        'Proof of financial capacity (education loan sanction letter / bank savings covering 1 year tuition + AUD 29,710 living expenses)',
        'Sponsor Income Proof (ITRs of past 2-3 years, Form 16, Salary slips)',
        'Overseas Student Health Cover (OSHC) policy certificate',
        'Medical examination clearance and biometric verification receipts'
      ]
    },
    workOpportunities: {
      partTimeRules: 'International students can work up to 48 hours per fortnight during teaching periods.',
      vacationRules: 'Unlimited full-time work hours during officially scheduled university vacations and term breaks.',
      minimumWage: 'Australia’s national minimum wage is AUD $26.44 per hour (AUD $31.30+ for engaged delivery/casual shifts).',
      postStudyWorkVisa: 'Subclass 485 Temporary Graduate Visa allows 2 years for Bachelor’s, 2 years for Master’s (with additional 1-2 years in regional locations).'
    },
    prPathways: {
      intro: 'Graduating from an Australian university provides a strategic springboard toward long-term professional careers and Australian permanent residency.',
      pathways: [
        'Subclass 485 Temporary Graduate Visa: Gain valuable local Australian industry experience immediately after graduation.',
        'General Skilled Migration (Subclass 189 & 190): Points-tested permanent visas evaluating qualifications, Australian study points, age, and language scores.',
        'Regional Skilled Migration (Subclass 491): 5-year provisional visa granting 15 extra points for living and working in regional Australia.',
        'Employer Nomination Scheme (Subclass 186): Direct PR sponsorship by Australian companies for experienced skilled graduates.'
      ],
      disclaimer: 'Permanent residency is subject to Australian immigration policy, occupation demand lists, and individual eligibility criteria. IQ Overseas provides ethical, realistic counseling without making false guarantees.'
    },
    faqs: [
      { q: 'Why should Indian students study in Australia?', a: 'Australia offers world top-100 universities, high minimum wages ($26.44/hr), safe multicultural cities, and post-study work visas up to 5 years, providing exceptional academic and career return on investment.' },
      { q: 'What is the average tuition fee for a Master’s degree in Australia?', a: 'Average tuition fees for Master’s degrees typically range between AUD 22,000 and AUD 48,000 per year depending on the university and specialization (business and IT are around AUD 28,000 - 36,000).' },
      { q: 'What are the main admission intakes in Australia?', a: 'The primary intake is Semester 1 (February/March), followed by Semester 2 (July/August). A few universities also offer a smaller November intake.' },
      { q: 'How many hours can international students work in Australia?', a: 'Students on a Subclass 500 student visa can work up to 48 hours per fortnight during academic sessions and unlimited hours during semester breaks.' },
      { q: 'What IELTS or PTE score is required for Australian universities?', a: 'Most Master’s programs require IELTS 6.5 (no band less than 6.0) or PTE 58 (no score below 50). Bachelor’s degrees generally require IELTS 6.0 or PTE 52.' },
      { q: 'What is the DHA official living expense requirement for Australia?', a: 'As of May 2024, the Australian Department of Home Affairs requires students to show evidence of AUD 29,710 for 12 months of living expenses.' },
      { q: 'Can I get scholarships for studying in Australia?', a: 'Yes! Australian universities offer merit scholarships ranging from 15% to 50% tuition fee reduction based on your Indian 12th or Bachelor’s academic marks.' },
      { q: 'What are the post-study work visa rights in Australia?', a: 'Under the Subclass 485 Post-Higher Education Work stream, Bachelor’s graduates get 2 years, Master’s by coursework graduates get 2 years, and Master’s by research graduates get 3 years, with 1-2 bonus years in regional locations.' },
      { q: 'What is the Genuine Student (GS) requirement?', a: 'The Genuine Student (GS) requirement replaced the old GTE. It assesses your academic background, career trajectory, financial preparedness, and ties through targeted questions in the visa application.' },
      { q: 'How does IQ Overseas assist students aspiring to study in Australia?', a: 'IQ Overseas provides end-to-end guidance from our Guntur headquarters, including free university shortlisting, SOP reviews, GS documentation, visa filing, education loans, Forex, and mock interview coaching.' }
    ]
  },

  // 2. United Kingdom (UK)
  uk: {
    id: 'country-02',
    slug: 'uk',
    name: 'United Kingdom',
    flag: '🇬🇧',
    isPublished: true,
    order: 2,
    seoTitle: 'Study in UK – Top Universities, 1-Year Masters, Cost & Graduate Route Visa | IQ Overseas',
    seoDescription: 'Comprehensive guide to studying in the UK for Indian students. Learn about Russell Group universities, 1-year fast-track Masters, fees, 2-year PSW Graduate Route, and visa guidance with IQ Overseas.',
    heroBanner: {
      imageUrl: '/images/destinations/uk-dest.png',
      headline: 'Study in the United Kingdom – Fast-Track Your Career with IQ Overseas',
      subtitle: 'Experience world-renowned Russell Group universities, 1-year intensive Master’s programs, and a 2-year Graduate Route post-study work visa.',
      badge: '1-Year Masters & Russell Group',
      stats: [
        { label: 'Universities', value: '160+' },
        { label: 'Masters Duration', value: '1 Year' },
        { label: 'Tuition Savings', value: 'Save 50% Time' },
        { label: 'Post-Study Work', value: '2 Years PSW' }
      ]
    },
    introduction: {
      heading: 'Study in the UK – Premier Education Consultancy in Guntur & Andhra Pradesh',
      subheading: 'Graduate faster and start earning sooner in the world’s leading financial and academic capital.',
      paragraphs: [
        'The United Kingdom is a global education powerhouse, home to historic academic institutions, cutting-edge research laboratories, and four of the world’s top 10 universities. A UK degree is instantly respected worldwide, providing immediate credibility in international job markets.',
        'One of the greatest advantages of the UK education system is its streamlined program duration: Master’s degrees are completed in just 1 year, and Bachelor’s degrees in 3 years. This allows Indian students to save a full year of living expenses and tuition fees while entering the professional workforce 12 months ahead of their peers.',
        'At IQ Overseas, our dedicated UK education counselors in Guntur guide you through UCAS applications, Russell Group university selections, Statement of Purpose drafting, Confirmation of Acceptance for Studies (CAS) issuance, and student visa filing.'
      ],
      highlights: [
        '1-Year intensive Master’s degrees saving 50% time and living costs',
        '2-Year guaranteed Graduate Route Post-Study Work (PSW) visa',
        'Prestigious Russell Group universities known for pioneering global research',
        'London and regional tech hubs offering direct corporate networking'
      ]
    },
    quickFacts: {
      country: 'United Kingdom (UK)',
      capital: 'London',
      popularCities: 'London, Manchester, Birmingham, Edinburgh, Leeds, Glasgow, Bristol',
      currency: 'British Pound Sterling (GBP / £)',
      language: 'English',
      popularIntakes: 'September/October (Autumn Intake) & January/February (Spring Intake)',
      topCourses: 'Business Management / MBA, Data Analytics, Artificial Intelligence, Law, Finance, Public Health',
      avgTuitionFee: '£13,000 to £28,000 per year',
      postStudyWork: '2 Years Graduate Route (3 Years for PhD graduates)',
      workRights: '20 hours per week during term time; Full-time during scheduled vacations'
    },
    educationLandscape: {
      intro: 'The UK education system is celebrated for rigorous modular learning, high contact hours, and direct integration with industry bodies.',
      bulletPoints: [
        'Russell Group: 24 world-leading research-intensive universities representing top-tier academic excellence.',
        'Modern & Plate Glass Universities: Contemporary institutions with high industry collaboration and applied curriculums.',
        'Specialist Colleges: World-renowned academies in business, performing arts, design, and agriculture.'
      ],
      comparisonTable: [
        { aspect: 'Duration', undergraduate: '3 Years (4 Years in Scotland or with Placement)', postgraduate: '1 Year (Intensive 12 Months)' },
        { aspect: 'Entry Requirements', undergraduate: '12th Grade with 65% - 85%+', postgraduate: 'Bachelor’s degree with 55% - 65%+' },
        { aspect: 'Popular Courses', undergraduate: 'Computer Science, Business, Law, Economics, Engineering', postgraduate: 'MBA, FinTech, Data Science, AI, LLM, Project Management' },
        { aspect: 'Cost & Living', undergraduate: '£14,000 - £26,000 / year', postgraduate: '£13,000 - £28,000 / total course' },
        { aspect: 'Work Experience', undergraduate: 'Optional 1-Year Paid Industrial Placement (Sandwich Year)', postgraduate: 'Integrated industry projects & dissertations' },
        { aspect: 'Post-Study Work', undergraduate: '2 Years Graduate Route PSW', postgraduate: '2 Years Graduate Route PSW' }
      ]
    },
    whyStudyBenefits: [
      { id: '1', title: '1-Year Fast-Track Master’s', description: 'Complete a world-class Master’s degree in just 12 months, saving an entire year of tuition and living expenses.' },
      { id: '2', title: '2-Year Graduate Route PSW', description: 'Work in any sector or role across the UK for 2 full years after graduation without employer sponsorship.' },
      { id: '3', title: 'Russell Group Prestige', description: 'Gain credentials from world top-ranking universities renowned for industry innovation and global alumni networks.' },
      { id: '4', title: 'Global Financial & Tech Hub', description: 'London and regional cities offer direct access to FTSE 100 headquarters, international banks, and global consulting firms.' },
      { id: '5', title: 'Generous Merit Scholarships', description: 'Avail Commonwealth, Chevening, and university merit bursaries ranging from £2,000 to £10,000+ tuition waivers.' },
      { id: '6', title: '20 Hours/Week Work Rights', description: 'Earn while you learn with UK minimum wage standards to comfortably cover daily living and accommodation expenses.' }
    ],
    topCourses: [
      { id: 'c1', title: 'MSc Data Science & AI', category: 'Technology', duration: '1 Year', description: 'Cutting-edge data mining, algorithmic modeling, and machine learning aligned with the UK AI sector.', careerRoles: ['Data Scientist', 'AI Specialist', 'Data Engineer'] },
      { id: 'c2', title: 'Master of Business Administration (MBA)', category: 'Business', duration: '1 Year', description: 'AMBA and EQUIS accredited leadership training with live corporate consulting engagements.', careerRoles: ['Strategy Consultant', 'Operations Lead', 'Business Manager'] },
      { id: 'c3', title: 'MSc FinTech & Financial Analytics', category: 'Finance', duration: '1 Year', description: 'Blockchain, algorithmic trading, and quantitative risk analysis in Europe’s financial capital.', careerRoles: ['FinTech Analyst', 'Risk Manager', 'Investment Associate'] },
      { id: 'c4', title: 'MSc Advanced Computer Science', category: 'Technology', duration: '1 Year', description: 'Cloud computing, distributed systems, and modern software engineering frameworks.', careerRoles: ['Software Architect', 'Systems Engineer', 'Cloud Developer'] },
      { id: 'c5', title: 'MSc Public Health & Healthcare Leadership', category: 'Healthcare', duration: '1 Year', description: 'Epidemiology, health policy, and NHS healthcare administration.', careerRoles: ['Health Policy Analyst', 'Public Health Officer', 'NHS Manager'] },
      { id: 'c6', title: 'Master of Laws (LLM)', category: 'Law', duration: '1 Year', description: 'International commercial law, corporate governance, and arbitration under English common law.', careerRoles: ['Legal Consultant', 'Compliance Specialist', 'Corporate Counsel'] }
    ],
    scholarships: {
      intro: 'UK universities and the British Council offer substantial bursaries for Indian applicants demonstrating academic excellence.',
      items: [
        { id: 's1', name: 'GREAT Scholarships India', provider: 'British Council & UK Universities', award: '£10,000 Tuition Waiver', eligibility: 'Indian passport holders applying for one-year postgraduate taught programs.' },
        { id: 's2', name: 'Commonwealth Scholarships', provider: 'UK Foreign, Commonwealth & Development Office', award: 'Full Tuition + Stipend + Flights', eligibility: 'Outstanding graduates from Commonwealth countries applying for Master’s / PhD.' },
        { id: 's3', name: 'Chevening Scholarships', provider: 'UK Government', award: 'Full Cost Covered', eligibility: 'Mid-career professionals demonstrating proven leadership with 2+ years work experience.' },
        { id: 's4', name: 'University Vice-Chancellor Merit Bursaries', provider: 'UK Host Universities', award: '£2,000 to £6,000 Automatic Fee Reductions', eligibility: 'Awarded based on Bachelor’s degree grades (typically 65%+ in Indian undergraduate).' }
      ]
    },
    admissionIntakes: {
      intro: 'The UK academic year primarily starts in Autumn, with a substantial second intake in early Spring.',
      items: [
        { name: 'September / October Intake (Major)', period: 'September – October', deadline: 'May – July', remarks: 'Offers 100% of courses, all university scholarships, and complete on-campus student housing.' },
        { name: 'January / February Intake (Secondary)', period: 'January – February', deadline: 'October – November', remarks: 'Ideal for students needing extra time for exams, degree results, or visa preparations.' }
      ]
    },
    studyPrograms: {
      intro: 'UK universities offer compact, high-intensity qualifications recognized under the UK Framework for Higher Education Qualifications (FHEQ).',
      items: [
        { level: 'Bachelor’s Degree (BA / BSc / BEng)', duration: '3 Years', description: 'Focused single or joint honours programs with immediate subject specialization from Year 1.', outcomes: 'FHEQ Level 6 – Immediate entry into Graduate Route or Master’s' },
        { level: 'Master’s Degree (MA / MSc / MBA / LLM)', duration: '1 Year (12 Months)', description: 'Fast-track intensive postgraduate curriculum combining coursework and a summer dissertation.', outcomes: 'FHEQ Level 7 – Direct eligibility for 2-Year Graduate Route PSW' },
        { level: 'Doctor of Philosophy (PhD)', duration: '3 to 4 Years', description: 'Original advanced doctoral research leading to academic and corporate leadership.', outcomes: 'FHEQ Level 8 – 3-Year Post-Study Work rights' }
      ]
    },
    englishRequirements: {
      intro: 'UK universities require proof of English proficiency for issuing the Confirmation of Acceptance for Studies (CAS).',
      ielts: { ug: 'Overall 6.0 (minimum 5.5 in each component)', pg: 'Overall 6.5 (minimum 6.0 in all bands)', notes: 'IELTS Academic or IELTS for UKVI accepted. Many universities offer IELTS waivers for 70%+ in 12th English.' },
      pte: { ug: 'Overall 50 to 54', pg: 'Overall 58 to 65 (minimum 51 in each skill)', notes: 'PTE Academic accepted by 99% of UK universities.' },
      toefl: { ug: 'Overall 72 to 80', pg: 'Overall 88 to 95', notes: 'TOEFL iBT accepted across Russell Group and modern universities.' },
      duolingo: { ug: 'Overall 105 to 115', pg: 'Overall 115 to 125', notes: 'Accepted by selected UK universities; check individual university requirements.' }
    },
    entryRequirements: {
      intro: 'Admission entry benchmarks vary by university ranking and course competitiveness.',
      criteria: [
        'Bachelor’s Admissions: 12th standard CBSE / ICSE / State Board with 65% – 85% aggregate.',
        'Master’s Admissions: Bachelor’s degree from a recognized university with 55% – 65% aggregate.',
        'Acceptance of 3-Year Bachelor’s degrees (B.Com, B.Sc, BBA, BCA, BA) for direct Master’s entry.',
        'Statement of Purpose (SOP) explaining academic motivation, module interests, and career goals.',
        'Two Academic Letters of Recommendation (LORs) and Updated CV.'
      ],
      academicPercentage: 'Minimum 55% for modern universities; 65%+ for Russell Group institutions.',
      backlogPolicy: 'Most UK universities accept students with up to 10 to 15 backlogs provided all papers are cleared.'
    },
    costOfStudying: {
      bachelorsTuition: '£14,000 to £26,000 per year',
      mastersTuition: '£13,000 to £28,000 (Total course fee for 1 year)',
      livingExpenses: '£1,483/month in London; £1,136/month outside London (UKVI official rates)',
      healthInsurance: '£776 per year (Immigration Health Surcharge - IHS)',
      visaFee: '£490 (Student Visa UKVI)',
      additionalNotes: 'Because Master’s degrees are 1 year, the total living cost for the entire degree is only 9 to 12 months.'
    },
    documentsRequired: {
      admissionDocuments: [
        '10th and 12th Grade Marksheets and Passing Certificates',
        'Bachelor’s Semester Marksheets, Consolidated Transcript & Degree Certificate',
        'English Language Proficiency Scorecard (or 12th English 70%+ for waiver)',
        'Statement of Purpose (SOP) tailored for UK university criteria',
        'Two Letters of Recommendation (LORs)',
        'Updated Curriculum Vitae',
        'Valid Passport copy'
      ],
      visaDocuments: [
        'Valid CAS (Confirmation of Acceptance for Studies) number from university',
        'Valid Passport with at least 6 months validity',
        'Financial evidence: Bank statement held for 28 consecutive days covering balance tuition + 9 months living costs',
        'TB (Tuberculosis) Clearance Certificate from an approved UKVI clinic in India',
        'Payment confirmation of Visa Fee (£490) and IHS Health Surcharge (£776)',
        'Academic documents listed on your CAS statement'
      ]
    },
    workOpportunities: {
      partTimeRules: 'Up to 20 hours per week during term time for degree-level students.',
      vacationRules: 'Full-time (up to 40 hours per week) during official university vacation periods.',
      minimumWage: 'UK National Living Wage is £11.44 per hour for individuals aged 21 and over.',
      postStudyWorkVisa: 'Graduate Route visa provides 2 full years of unsponsored work authorization across the UK economy.'
    },
    prPathways: {
      intro: 'The UK provides transparent pathways for international graduates to transition into skilled employment and long-term settlement.',
      pathways: [
        'Graduate Route (PSW): 2 years of unrestricted work in the UK to establish your professional track record.',
        'Skilled Worker Visa: Switch from Graduate Route to Skilled Worker visa once you secure a job with an approved UK sponsor.',
        'Indefinite Leave to Remain (ILR): Qualify for permanent settlement after 5 continuous years on a Skilled Worker Visa.',
        'Global Talent Visa: Direct pathway for leaders in science, technology, engineering, and the arts.'
      ],
      disclaimer: 'Immigration regulations and salary thresholds are set by the UK Home Office. IQ Overseas provides realistic, compliant guidance.'
    },
    faqs: [
      { q: 'Why is a 1-year Master’s in the UK advantageous for Indian students?', a: 'A 1-year Master’s in the UK covers the same credits as a 2-year US/Canadian degree in a condensed 12-month period. You save 1 full year of tuition and living expenses, and enter the job market 12 months sooner.' },
      { q: 'What is the UK Graduate Route Post-Study Work visa?', a: 'The Graduate Route allows international students who complete an eligible degree to stay and work in the UK for 2 years (3 years for PhD) without needing a sponsor.' },
      { q: 'Can I get an IELTS waiver for UK universities?', a: 'Yes! Many UK universities offer an IELTS waiver if you scored 70% or higher in 12th standard English (CBSE/ICSE/State Board).' },
      { q: 'Are 3-year Indian Bachelor’s degrees (B.Com/B.Sc/BBA) accepted in the UK?', a: 'Yes! Unlike the US which often demands 16 years of education, UK universities gladly accept 3-year Indian Bachelor’s degrees for direct Master’s entry.' },
      { q: 'What are the living expense requirements for a UK student visa?', a: 'UKVI requires evidence of £1,483 per month (up to 9 months, total £13,347) for London, or £1,136 per month (total £10,224) outside London, maintained in a bank for 28 consecutive days.' },
      { q: 'What is the Russell Group?', a: 'The Russell Group is an association of 24 world-class, research-intensive UK universities, including Oxford, Cambridge, Imperial, UCL, Manchester, Edinburgh, and Warwick.' },
      { q: 'How many hours can international students work in the UK?', a: 'Students can work up to 20 hours per week during term time and full-time during official vacations.' },
      { q: 'What is a CAS letter?', a: 'A CAS (Confirmation of Acceptance for Studies) is an electronic reference number issued by your UK university confirming your unconditional offer, which is required for your visa application.' },
      { q: 'Can I switch to a work visa after my studies in the UK?', a: 'Yes! After your degree, you can work on the Graduate Route visa, and anytime you secure qualifying employment with an approved sponsor, you can switch to a Skilled Worker Visa.' },
      { q: 'How does IQ Overseas assist students aspiring to study in the UK?', a: 'IQ Overseas provides personalized counseling, university selection across 160+ UK institutions, SOP reviewing, CAS processing, 28-day financial audit, and visa filing support.' }
    ]
  },

  // 3. Europe (with Destination Cards for Germany, France, Sweden, Finland, Denmark, Switzerland)
  europe: {
    id: 'country-03',
    slug: 'europe',
    name: 'Europe',
    flag: '🇪🇺',
    isPublished: true,
    order: 3,
    seoTitle: 'Study in Europe – Germany, France, Sweden, Finland, Denmark & Switzerland | IQ Overseas',
    seoDescription: 'Explore studying in Europe for Indian students. Low or tuition-free universities, top business schools, 29 Schengen countries, and post-study work rights with IQ Overseas.',
    heroBanner: {
      imageUrl: '/images/destinations/europe-france-dest.png',
      headline: 'Study in Europe – World-Class Education with Minimal Tuition',
      subtitle: 'Experience Europe’s top tech and business universities, tuition-free public education in Germany, and unrestricted travel across 29 Schengen nations.',
      badge: 'Zero/Low Tuition & 29 Schengen Countries',
      stats: [
        { label: 'Countries', value: '29 Schengen' },
        { label: 'Tuition in Germany', value: '€0 at Public' },
        { label: 'Programs in English', value: '10,000+' },
        { label: 'Post-Study Work', value: '18 - 24 Months' }
      ]
    },
    introduction: {
      heading: 'Study in Europe – Premier European Study Abroad Consultants in Guntur',
      subheading: 'Access Europe’s innovation capitals, engineering hubs, and triple-accredited business schools.',
      paragraphs: [
        'Europe represents one of the most culturally diverse and academically rewarding continents for international students. With thousands of fully English-taught Bachelor’s and Master’s programs, European universities combine historic intellectual prestige with cutting-edge scientific innovation.',
        'Nations like Germany offer tuition-free higher education at public universities, charging only a nominal semester contribution. France is home to the world’s top-ranked business schools (INSEAD, HEC Paris, ESSEC), while Nordic nations like Sweden, Finland, and Denmark lead the world in sustainability, digital tech, and quality of life. Furthermore, Switzerland offers premier hospitality and technology management institutions.',
        'With a single Schengen student visa, you enjoy freedom of movement across 29 European countries, expanding your cultural exposure and internships with global multinationals like Siemens, BMW, SAP, L’Oréal, and Airbus. IQ Overseas guides you step-by-step through APS certification (for Germany), Campus France, blocked accounts, and university portals.'
      ],
      highlights: [
        'Tuition-free or low-cost higher education at top-ranked German public universities',
        'Triple-accredited (AACSB, AMBA, EQUIS) business and management schools in France',
        'Freedom of movement and internship opportunities across 29 Schengen countries',
        '18 to 24 months post-study stay-back visas to secure European corporate employment'
      ]
    },
    quickFacts: {
      country: 'European Union (Schengen Area)',
      capital: 'Multiple European Capitals (Berlin, Paris, Stockholm, Helsinki, Bern)',
      popularCities: 'Munich, Berlin, Paris, Lyon, Stockholm, Helsinki, Zurich, Copenhagen',
      currency: 'Euro (EUR / €) & National Currencies (CHF, SEK, DKK)',
      language: 'English (Programs fully taught in English) + Local Languages',
      popularIntakes: 'Winter Intake (September/October) & Summer Intake (March/April)',
      topCourses: 'Mechanical & Automotive Engineering, Computer Science, MBA, Luxury Brand Management, Renewable Energy',
      avgTuitionFee: '€0 to €3,000/yr (Germany Public) | €8,000 to €22,000/yr (Private/Other EU)',
      postStudyWork: '18 Months (Germany), 24 Months (France Masters), 12-24 Months (Nordics)',
      workRights: '120 full days or 240 half days per year in Germany; 20 hrs/week across EU'
    },
    educationLandscape: {
      intro: 'Europe’s education system is unified under the Bologna Process (ECTS credit system), ensuring high international academic parity across all European countries.',
      bulletPoints: [
        'TU9 & Public Universities (Germany): Globally revered research universities offering zero tuition for technical and engineering degrees.',
        'Grandes Écoles (France): Elite professional institutes with rigorous selection, offering world top-10 Master in Management (MiM) programs.',
        'Nordic Universities (Sweden & Finland): Pioneer institutions in AI, clean technology, design, and biotechnology.',
        'Swiss Applied Universities: World-renowned centers for hospitality, banking, and precision engineering.'
      ],
      comparisonTable: [
        { aspect: 'Tuition Model', undergraduate: 'Zero/Nominal in Germany; €8k - €16k in France/Nordics', postgraduate: 'Zero/Nominal in Germany Public; €10k - €24k in France/Nordics' },
        { aspect: 'Duration', undergraduate: '3 to 3.5 Years (180 - 210 ECTS)', postgraduate: '1.5 to 2 Years (90 - 120 ECTS)' },
        { aspect: 'Language of Study', undergraduate: 'English (Select programs) or German/French', postgraduate: '100% English taught programs widely available' },
        { aspect: 'Internship Integration', undergraduate: 'Mandatory practical semesters (Praxissemester)', postgraduate: 'Paid corporate master’s thesis and industry internships' },
        { aspect: 'Post-Study Stay Back', undergraduate: '18 Months (Germany) / 1 Year (EU average)', postgraduate: '18 Months (Germany) / 24 Months (France Masters)' }
      ]
    },
    whyStudyBenefits: [
      { id: '1', title: 'Zero or Low Tuition Fees', description: 'Study at prestigious German public universities with zero tuition fees, paying only a modest €250-€350 semester fee.' },
      { id: '2', title: '29-Country Schengen Travel', description: 'Travel, network, and attend career fairs across 29 European countries with a single resident permit.' },
      { id: '3', title: 'Europe’s Industrial Powerhouses', description: 'Direct career opportunities with world-leading engineering, automotive, chemical, and luxury brands.' },
      { id: '4', title: '18 to 24 Months Stay Back', description: 'Generous post-study job seeker permits allowing graduates to find skilled positions and secure European Blue Cards.' },
      { id: '5', title: 'High Quality of Life', description: 'Unmatched public infrastructure, clean green cities, universal healthcare, and safe student communities.' },
      { id: '6', title: 'Strong European Blue Card PR', description: 'Fast-track permanent residency pathways in Germany and Europe after 21 to 27 months of skilled employment.' }
    ],
    topCourses: [
      { id: 'c1', title: 'Automotive & Mechanical Engineering', category: 'Engineering', duration: '2 Years', description: 'Study in the heart of the automotive industry (Germany) with direct ties to BMW, Porsche, and Mercedes-Benz.', careerRoles: ['Automotive Engineer', 'Design Lead', 'R&D Specialist'] },
      { id: 'c2', title: 'Master in Management (MiM) & MBA', category: 'Business', duration: '1 - 2 Years', description: 'Financial Times world top-10 ranked business programs in France (HEC, ESSEC, EDHEC).', careerRoles: ['Strategy Consultant', 'Investment Banker', 'Marketing Manager'] },
      { id: 'c3', title: 'Computer Science & AI', category: 'Technology', duration: '2 Years', description: 'High-performance computing, robotics, and cyber-physical systems across Germany and Sweden.', careerRoles: ['Software Engineer', 'AI Researcher', 'Robotics Specialist'] },
      { id: 'c4', title: 'Renewable Energy & Sustainability', category: 'Engineering', duration: '2 Years', description: 'Wind energy, solar engineering, and circular economy leadership in Denmark and Sweden.', careerRoles: ['Energy Consultant', 'Sustainability Engineer', 'Project Lead'] },
      { id: 'c5', title: 'International Hospitality Management', category: 'Hospitality', duration: '1 - 2 Years', description: 'Swiss world-standard hospitality and luxury asset management programs.', careerRoles: ['General Manager', 'Luxury Brand Director', 'Hotel Operations Lead'] },
      { id: 'c6', title: 'Biotechnology & Life Sciences', category: 'Healthcare', duration: '2 Years', description: 'Pharmaceutical engineering and clinical biotech research in Switzerland, Germany, and France.', careerRoles: ['Biomedical Researcher', 'Clinical Specialist', 'Process Engineer'] }
    ],
    scholarships: {
      intro: 'European governments and universities offer substantial funding and scholarships for international master’s students.',
      items: [
        { id: 's1', name: 'DAAD Scholarships (Germany)', provider: 'German Academic Exchange Service', award: '€934/month Stipend + Health Insurance + Travel', eligibility: 'Graduates with at least 2 years of professional work experience applying for public master’s.' },
        { id: 's2', name: 'Eiffel Excellence Scholarship (France)', provider: 'French Ministry for Europe and Foreign Affairs', award: '€1,181/month Allowance + Travel + Health', eligibility: 'High-achieving international students applying for master’s and PhD programs in France.' },
        { id: 's3', name: 'Erasmus Mundus Joint Master Degrees', provider: 'European Commission', award: '100% Tuition Waiver + €1,400/month Stipend', eligibility: 'Top scholars studying across 2 to 3 different European countries during their master’s.' },
        { id: 's4', name: 'Swedish Institute Scholarships for Global Professionals', provider: 'Swedish Government', award: 'Full Tuition + SEK 12,000/month Allowance', eligibility: 'High-achieving applicants with 3,000+ hours of documented leadership and work experience.' }
      ]
    },
    admissionIntakes: {
      intro: 'European universities operate on Winter and Summer semesters.',
      items: [
        { name: 'Winter Intake (Primary Intake)', period: 'September / October', deadline: 'May – July 15', remarks: 'Main intake across Germany, France, and Europe with almost all English-taught programs open.' },
        { name: 'Summer Intake (Secondary Intake)', period: 'March / April', deadline: 'November 15 – January 15', remarks: 'Offered by select German universities and private French/European business schools.' }
      ]
    },
    studyPrograms: {
      intro: 'European higher education follows the standardized European Credit Transfer and Accumulation System (ECTS).',
      items: [
        { level: 'Bachelor’s Degree', duration: '3 to 3.5 Years (180 - 210 ECTS)', description: 'Undergraduate foundation combining technical theory with practical internships.', outcomes: 'ECTS Accredited – Recognized worldwide' },
        { level: 'Master of Science (M.Sc / M.Eng)', duration: '1.5 to 2 Years (90 - 120 ECTS)', description: 'Advanced research and corporate project work culminating in a Master’s thesis.', outcomes: 'Qualifies for 18-month German Job Seeker / 2-year French Stay Back' },
        { level: 'Master in Management (MiM)', duration: '2 Years', description: 'Specialized management curriculum with paid internships in top European conglomerates.', outcomes: 'Direct entry into European corporate leadership' },
        { level: 'Doctorate / PhD', duration: '3 to 4 Years', description: 'Fully paid research positions at European universities and Max Planck / Fraunhofer institutes.', outcomes: 'High salary employment and immediate Blue Card eligibility' }
      ]
    },
    englishRequirements: {
      intro: 'English-taught programs require certified language test scores; basic German/French is beneficial for daily life but not mandatory for admission.',
      ielts: { ug: 'Overall 6.0', pg: 'Overall 6.5 (minimum 6.0 in all bands)', notes: 'Academic IELTS required. Some public universities require 7.0 for specialized courses.' },
      pte: { ug: 'Overall 50 to 52', pg: 'Overall 58 to 65', notes: 'Widely accepted across German universities and French Grandes Écoles.' },
      toefl: { ug: 'Overall 75 to 80', pg: 'Overall 88 to 95', notes: 'TOEFL iBT accepted across all European universities.' },
      duolingo: { ug: 'Overall 105', pg: 'Overall 115', notes: 'Accepted by selected private European business schools.' }
    },
    entryRequirements: {
      intro: 'European university admission criteria depend on the country and whether applying to public or private institutions.',
      criteria: [
        'Germany: APS Certificate (Akademische Prüfstelle) is mandatory for Indian students before visa application.',
        'Bachelor’s Admissions: 12th standard + 1 year of Indian Bachelor’s or Studienkolleg (for German public universities).',
        'Master’s Admissions: 4-Year Bachelor’s degree (or 3-Year with appropriate ECTS credits) with minimum 65% – 70% aggregate.',
        'Course-specific ECTS credit matching in Mathematics, Programming, or Core Engineering modules.',
        'Statement of Purpose, Letters of Recommendation, and Updated Europass format CV.'
      ],
      academicPercentage: 'Minimum 65% - 70% for German public universities; 55%+ for private universities and business schools.',
      backlogPolicy: 'Public universities prefer fewer than 5-8 backlogs; private universities evaluate overall profile holistically.'
    },
    costOfStudying: {
      bachelorsTuition: '€0 to €3,000/yr (Germany Public) | €8,000 to €16,000/yr (France & Nordics)',
      mastersTuition: '€0 to €1,500/yr (Germany Public) | €9,000 to €22,000/yr (Private & European Business Schools)',
      livingExpenses: '€11,904 per year (German Blocked Account requirement: €992/month as of 2024)',
      healthInsurance: '€120 to €130 per month (Public health insurance in Germany / France)',
      visaFee: '€75 (National Long-Stay Student Visa)',
      additionalNotes: 'In Germany public universities, you pay only a semester ticket fee of ~€250-€350 which includes free regional public transit!'
    },
    documentsRequired: {
      admissionDocuments: [
        'APS Certificate (mandatory for Germany applications from India)',
        'Class 10th and 12th Marksheets and Certificates',
        'Bachelor’s Degree Transcripts, Semester Marksheets & Degree Certificate',
        'ECTS Credit Syllabus / Module Description Handbook',
        'English Proficiency Scorecard (IELTS / PTE / TOEFL)',
        'Statement of Purpose (SOP) and Letters of Recommendation (LORs)',
        'Curriculum Vitae in Europass Format',
        'Valid Passport copy'
      ],
      visaDocuments: [
        'University Admission Letter / Enrollment Offer',
        'Proof of Financial Resources: Blocked Account confirmation (€11,904) for Germany or equivalent proof',
        'APS Certificate copy (for Germany)',
        'Valid Passport with minimum 12 months validity',
        'Proof of European statutory or travel health insurance',
        'Motivation letter and biometric appointment booking'
      ]
    },
    workOpportunities: {
      partTimeRules: 'In Germany: 120 full days or 240 half days per calendar year. In France: 60% of annual working time (~964 hours/year).',
      vacationRules: 'Full-time work allowed during official university semester breaks.',
      minimumWage: 'Germany national minimum wage is €12.41 per hour; France minimum wage (SMIC) is ~€11.65 per hour.',
      postStudyWorkVisa: 'Germany offers an 18-month Job Seeker Visa; France offers a 2-year post-study work authorization for Master’s graduates.'
    },
    prPathways: {
      intro: 'Europe offers one of the most direct, structured residency pathways in the developed world for high-tech and skilled university graduates.',
      pathways: [
        'EU Blue Card: Accelerated work and residence permit for university graduates with qualifying employment contracts.',
        'Germany Permanent Settlement (Niederlassungserlaubnis): Fast-track permanent residency after just 21 months of employment with B1 German (or 27 months with basic A1 German).',
        'France 5-Year Resident Card: Long-term EU residency accessible for graduates with continuous employment.',
        'Nordic Work Permits: Direct pathways to permanent residency in Sweden, Finland, and Denmark for tech and engineering specialists.'
      ],
      disclaimer: 'Settlement pathways require meeting language proficiency thresholds and active social insurance contributions.'
    },
    subDestinations: [
      { id: 'de', country: 'Germany', flag: '🇩🇪', image: '/images/destinations/germany-dest.png', capital: 'Berlin', description: 'Zero tuition at top public universities, Europe’s strongest industrial economy, and an 18-month post-study work visa.', avgTuition: '€0 - €1,500 / year', psw: '18 Months Stay Back', slug: 'germany' },
      { id: 'fr', country: 'France', flag: '🇫🇷', image: '/images/destinations/europe-france-dest.png', capital: 'Paris', description: 'World top-10 business schools, aerospace engineering, luxury brand management, and 2-year Master’s stay back.', avgTuition: '€8,000 - €18,000 / year', psw: '2 Years Stay Back', slug: 'france' },
      { id: 'se', country: 'Sweden', flag: '🇸🇪', image: 'https://images.unsplash.com/photo-1509356843151-3e7d96241e11?auto=format&fit=crop&w=800&q=80', capital: 'Stockholm', description: 'Global innovation leader in tech, sustainability, and green mobility (Spotify, Ericsson, Volvo, Klarna).', avgTuition: 'SEK 90,000 - 150,000 / year', psw: '12 Months Stay Back', slug: 'sweden' },
      { id: 'fi', country: 'Finland', flag: '🇫🇮', image: 'https://images.unsplash.com/photo-1538332576228-eb5b4c4de6f5?auto=format&fit=crop&w=800&q=80', capital: 'Helsinki', description: 'Ranked world’s happiest country for 7 consecutive years with premier universities in AI and clean technology.', avgTuition: '€8,000 - €14,000 / year', psw: '2 Years Post-Study Work', slug: 'finland' },
      { id: 'dk', country: 'Denmark', flag: '🇩🇰', image: 'https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?auto=format&fit=crop&w=800&q=80', capital: 'Copenhagen', description: 'World-renowned for renewable energy, life sciences, design, and exceptional work-life harmony.', avgTuition: '€6,000 - €16,000 / year', psw: '3 Years Stay Back', slug: 'denmark' },
      { id: 'ch', country: 'Switzerland', flag: '🇨🇭', image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80', capital: 'Bern', description: 'Global benchmark for luxury hospitality management, banking, precision engineering, and high starting salaries.', avgTuition: 'CHF 15,000 - 32,000 / year', psw: '6 Months Job Seeker', slug: 'switzerland' }
    ],
    faqs: [
      { q: 'Is education really tuition-free in Germany for Indian students?', a: 'Yes! Most public universities in Germany charge zero tuition fees for both domestic and international students. You only pay a semester administrative fee of €250 to €350, which includes a free public transport pass.' },
      { q: 'What is the APS Certificate for Germany?', a: 'The APS (Akademische Prüfstelle) certificate is a mandatory document issued by the German Embassy in New Delhi that verifies the authenticity of your Indian academic records before you can submit a visa application.' },
      { q: 'What is a Blocked Account for European study?', a: 'For Germany, you must open a German Blocked Account (Sperrkonto) with €11,904 (as of 2024) to prove you have sufficient funds to cover your living expenses for the first year (€992/month).' },
      { q: 'Can I study in Europe in English?', a: 'Yes! Germany, France, Sweden, Finland, Denmark, and Switzerland offer thousands of Bachelor’s and Master’s programs taught 100% in English.' },
      { q: 'What is the post-study work visa in Germany and France?', a: 'Germany offers an 18-month Job Seeker Visa after graduation. France offers a 2-year post-study work permit (APS/RECE) for Indian Master’s graduates.' },
      { q: 'Can I travel across Europe on a student visa?', a: 'Yes! A student residence permit from any Schengen country allows you to travel freely across all 29 Schengen countries for tourism, networking, and conferences.' },
      { q: 'How many hours can I work part-time in Europe?', a: 'In Germany, you can work 120 full days or 240 half days per year. In France and most EU nations, you can work up to 20 hours per week during academic terms.' },
      { q: 'Are 3-year Indian Bachelor’s degrees accepted in Germany?', a: 'Most German public technical universities require 180 to 210 ECTS credits. While some direct programs accept 3-year degrees, others may require an additional bridge semester or 4-year degree.' },
      { q: 'What are the top courses to study in Europe?', a: 'Mechanical & Automotive Engineering, Data Science, AI, MBA, Luxury Brand Management, Renewable Energy, and Biotechnology.' },
      { q: 'How does IQ Overseas assist students aspiring to study in Europe?', a: 'IQ Overseas provides complete guidance on APS certification, Uni-Assist portal applications, Campus France, German Blocked Accounts, SOP drafting, and embassy visa filing.' }
    ]
  },

  // 4. United States (USA)
  usa: {
    id: 'country-04',
    slug: 'usa',
    name: 'United States',
    flag: '🇺🇸',
    isPublished: true,
    order: 4,
    seoTitle: 'Study in USA – Universities, STEM OPT 3 Years, Cost & F-1 Visa | IQ Overseas',
    seoDescription: 'Complete guide to studying in the USA for Indian students. Learn about Tier-1 universities, 3-Year STEM OPT work authorization, costs, scholarships, and F-1 visa interview prep with IQ Overseas.',
    heroBanner: {
      imageUrl: '/images/destinations/usa-dest.png',
      headline: 'Study in the USA – Lead the Future with IQ Overseas Guidance',
      subtitle: 'Access the world’s most prestigious research institutions, Silicon Valley innovation networks, and up to 3 years of STEM OPT work authorization.',
      badge: '3-Year STEM OPT & Fortune 500 Hubs',
      stats: [
        { label: 'Institutions', value: '5,000+' },
        { label: 'STEM OPT', value: '3 Years Work' },
        { label: 'Avg Tech Salary', value: '$95,000+' },
        { label: 'Ivy & Tier-1', value: 'World #1 Ranking' }
      ]
    },
    introduction: {
      heading: 'Study in the USA – Premier US Student Visa Consultants in Guntur',
      subheading: 'Turn your American academic dream into Fortune 500 career reality.',
      paragraphs: [
        'The United States is the world’s undisputed destination for higher education, hosting over 1 million international students annually. American universities dominate global rankings, powered by multi-billion dollar research endowments, renowned Nobel laureate faculties, and unmatched industry partnerships with tech giants like Apple, Google, Microsoft, Amazon, and Tesla.',
        'For Indian engineering, computer science, and business graduates, the US offers unmatched return on investment through the 3-Year STEM OPT (Optional Practical Training) extension. This allows graduates in STEM fields to work in the US for 36 full months without requiring an immediate H-1B lottery sponsorship.',
        'At IQ Overseas, our dedicated US advisory team in Lakshmipuram, Guntur prepares students with tailored university selections (categorized into Dream, Reach, and Safe tiers), Statement of Purpose drafting, WES credential assessments, and intensive 1-on-1 consular mock interviews that ensure F-1 visa success.'
      ],
      highlights: [
        'Up to 3-Year STEM OPT work authorization for science, technology, and analytics graduates',
        'Top starting salaries averaging $85,000 to $115,000+ for Indian STEM Master’s graduates',
        'Thousands of accredited universities offering rich interdisciplinary coursework and flexibility',
        'Graduate Teaching Assistantships (GTA) and Research Assistantships (GRA) with tuition waivers'
      ]
    },
    quickFacts: {
      country: 'United States of America (USA)',
      capital: 'Washington, D.C.',
      popularCities: 'New York, San Francisco/Silicon Valley, Boston, Chicago, Dallas/Austin, Seattle, Los Angeles',
      currency: 'United States Dollar (USD / $)',
      language: 'English',
      popularIntakes: 'Fall (August/September), Spring (January), Summer (May/June)',
      topCourses: 'Computer Science, Artificial Intelligence, Data Science, Business Analytics, MBA, Mechanical Engineering',
      avgTuitionFee: '$22,000 to $48,000 per year',
      postStudyWork: 'Up to 3 Years (12 Months OPT + 24 Months STEM Extension)',
      workRights: 'Up to 20 hours per week on-campus during semesters; Full-time during breaks'
    },
    educationLandscape: {
      intro: 'The US higher education system offers unparalleled academic flexibility, allowing students to choose double majors, minors, and interdisciplinary concentrations.',
      bulletPoints: [
        'Ivy League & Elite Private Universities: World-renowned institutions with immense research funding and global alumni prestige.',
        'Public State Flagships: Large research universities (UC Berkeley, UT Austin, Purdue, Georgia Tech) offering high-ROI education.',
        'Liberal Arts & Regional Universities: Institutions focusing on small classroom mentorship and individualized faculty attention.'
      ],
      comparisonTable: [
        { aspect: 'Duration', undergraduate: '4 Years (120 Credit Hours)', postgraduate: '1.5 to 2 Years (30 - 36 Credit Hours)' },
        { aspect: 'Admissions Criteria', undergraduate: '12th Grade + SAT/ACT (optional) + Extracurriculars', postgraduate: 'Bachelor’s Degree + GRE (select) + IELTS/TOEFL' },
        { aspect: 'Curriculum Flexibility', undergraduate: 'Choose major in Year 2; General education + electives', postgraduate: 'Specialized technical coursework + thesis/capstone' },
        { aspect: 'Funding & Aid', undergraduate: 'Merit-based international freshman scholarships', postgraduate: 'Teaching/Research Assistantships (GTA/GRA) with stipends' },
        { aspect: 'OPT Work Rights', undergraduate: '1 Year OPT (3 Years for STEM majors)', postgraduate: '1 Year OPT (3 Years for STEM majors)' }
      ]
    },
    whyStudyBenefits: [
      { id: '1', title: '3-Year STEM OPT Work Rights', description: 'Work in the United States for up to 36 months after graduation in high-paying engineering, technology, and analytics roles.' },
      { id: '2', title: 'Highest Global Starting Salaries', description: 'STEM Master’s graduates routinely command starting compensation packages between $85,000 and $125,000+.' },
      { id: '3', title: 'World-Leading Research Hubs', description: 'Work alongside world-renowned professors on cutting-edge DARPA, NSF, and corporate-funded research grants.' },
      { id: '4', title: 'Silicon Valley & Fortune 500 Ties', description: 'Direct campus recruitment by global giants like Microsoft, Amazon, Google, NVIDIA, Meta, and Goldman Sachs.' },
      { id: '5', title: 'On-Campus Assistantships (TA/RA)', description: 'Fund your degree through Graduate Teaching Assistantships (GTA) and Research Assistantships (GRA) with tuition waivers.' },
      { id: '6', title: 'Academic Curriculum Flexibility', description: 'Customize your degree coursework across multiple departments including machine learning, finance, and management.' }
    ],
    topCourses: [
      { id: 'c1', title: 'MS in Computer Science & AI', category: 'Technology', duration: '2 Years', description: 'Deep learning, distributed cloud systems, and scalable algorithms aligned with tech industry demands.', careerRoles: ['Software Engineer', 'Machine Learning Engineer', 'Systems Architect'] },
      { id: 'c2', title: 'MS in Data Science & Business Analytics', category: 'Analytics', duration: '1.5 - 2 Years', description: 'Big data analytics, predictive modeling, and strategic business intelligence for Fortune 500 corporations.', careerRoles: ['Data Scientist', 'Business Analyst', 'Analytics Consultant'] },
      { id: 'c3', title: 'Master of Business Administration (MBA)', category: 'Business', duration: '2 Years', description: 'STEM-designated MBA programs combining corporate finance, product strategy, and venture leadership.', careerRoles: ['Product Manager', 'Investment Banker', 'Management Consultant'] },
      { id: 'c4', title: 'MS in Cyber Security & Information Assurance', category: 'Technology', duration: '2 Years', description: 'Network defense, cloud security, and cryptographic protocols facing critical US talent shortages.', careerRoles: ['Security Engineer', 'Information Security Officer', 'Penetration Tester'] },
      { id: 'c5', title: 'MS in Electrical & Computer Engineering', category: 'Engineering', duration: '2 Years', description: 'Semiconductor design, VLSI architecture, and embedded IoT systems supported by the US CHIPS Act.', careerRoles: ['VLSI Design Engineer', 'Hardware Architect', 'Embedded Systems Lead'] },
      { id: 'c6', title: 'MS in Healthcare Informatics & Public Health', category: 'Healthcare', duration: '2 Years', description: 'Health data analytics, clinical informatics, and epidemiological research across US medical systems.', careerRoles: ['Health Informatics Specialist', 'Clinical Data Manager', 'Biostatistician'] }
    ],
    scholarships: {
      intro: 'US universities offer merit-based tuition remissions, graduate assistantships, and presidential awards for deserving Indian students.',
      items: [
        { id: 's1', name: 'Graduate Teaching & Research Assistantships (GTA/GRA)', provider: 'US University Departments', award: 'Full/Partial Tuition Waiver + $1,500 - $2,500/month Stipend', eligibility: 'Awarded to master’s and PhD students assisting professors in labs or grading.' },
        { id: 's2', name: 'Fulbright-Nehru Master’s Fellowships', provider: 'USIEF (United States-India Educational Foundation)', award: 'Full Tuition + Living Costs + Airfare', eligibility: 'Outstanding Indian graduates with minimum 3 years professional work experience.' },
        { id: 's3', name: 'Dean’s & Merit Tuition Scholarships', provider: 'Individual US Universities', award: '$5,000 to $25,000 per year', eligibility: 'Awarded automatically based on GRE scores, GPA, and undergraduate academic performance.' },
        { id: 's4', name: 'In-State Tuition Fee Waiver', provider: 'State Universities (e.g., Texas, Florida)', award: 'Saves 50% on Out-of-State Tuition (~$10,000 - $15,000/yr)', eligibility: 'Awarded with competitive university scholarships of $1,000+.' }
      ]
    },
    admissionIntakes: {
      intro: 'US universities offer two major admission intakes and one minor summer cycle.',
      items: [
        { name: 'Fall Intake (Primary & Largest)', period: 'August / September', deadline: 'December – March', remarks: '100% of programs open, maximum scholarship funding, and on-campus recruitment cycles.' },
        { name: 'Spring Intake (Secondary)', period: 'January', deadline: 'August – October', remarks: 'Popular alternative for students completing Indian engineering degree backlogs or exams.' },
        { name: 'Summer Intake (Limited)', period: 'May / June', deadline: 'January – February', remarks: 'Available for selected language prep and accelerated executive programs.' }
      ]
    },
    studyPrograms: {
      intro: 'The US credit system allows students to graduate as soon as credit milestones (typically 30 to 36 credits for Master’s) are completed.',
      items: [
        { level: 'Bachelor of Science / Arts (BS / BA)', duration: '4 Years (120 Credits)', description: 'Comprehensive undergraduate education with major, minor, and research opportunities.', outcomes: 'Eligible for 1 to 3 Years OPT' },
        { level: 'Master of Science (MS) / Professional Master’s', duration: '1.5 to 2 Years (30 - 36 Credits)', description: 'Specialized STEM-designated technical curriculum tailored for Silicon Valley and Fortune 500 careers.', outcomes: 'Qualifies for 3-Year STEM OPT extension' },
        { level: 'Master of Business Administration (MBA)', duration: '2 Years (Many STEM-designated)', description: 'Executive case-method leadership training with corporate summer internships.', outcomes: 'Fast-track career into tech product management and consulting' },
        { level: 'Doctor of Philosophy (PhD)', duration: '4 to 6 Years', description: 'Fully funded research positions with tuition waivers and university health coverage.', outcomes: 'Faculty and high-tier research scientist careers' }
      ]
    },
    englishRequirements: {
      intro: 'All US universities mandate English proficiency testing for issuing the I-20 certificate of eligibility.',
      ielts: { ug: 'Overall 6.0 to 6.5', pg: 'Overall 6.5 to 7.0 (minimum 6.0 in each section)', notes: 'Accepted by over 3,400 US institutions.' },
      pte: { ug: 'Overall 50 to 53', pg: 'Overall 58 to 68', notes: 'Widely accepted across top public state universities.' },
      toefl: { ug: 'Overall 70 to 80', pg: 'Overall 80 to 100+ (with 20+ in each band)', notes: 'Gold standard in the United States; preferred by top Ivy and Tier-1 universities.' },
      duolingo: { ug: 'Overall 105 to 115', pg: 'Overall 115 to 130', notes: 'Accepted by over 2,000 US universities for fast, affordable online testing.' }
    },
    entryRequirements: {
      intro: 'US university admissions are holistic, evaluating academic grades, test scores, essays, and career potential.',
      criteria: [
        'Bachelor’s Admissions: 12th grade with 65% – 85%+ aggregate from recognized Indian boards.',
        'Master’s Admissions: 4-Year Bachelor’s degree (or 3-Year degree with WES evaluation or university waiver) with minimum 60% – 70%.',
        'GRE Exam: Many universities now offer GRE test-optional policies; a strong score (315+) boosts scholarship chances.',
        'Statement of Purpose (SOP) demonstrating passion, academic projects, and specific alignment with university professors.',
        'Three Letters of Recommendation (LORs) and a comprehensive technical resume.'
      ],
      academicPercentage: 'Minimum 60% for public universities; 70%+ for top 50 ranked institutions.',
      backlogPolicy: 'US universities are generally lenient with backlogs provided degree is completed with good final GPA.'
    },
    costOfStudying: {
      bachelorsTuition: '$20,000 to $45,000 per year',
      mastersTuition: '$22,000 to $48,000 per year',
      livingExpenses: '$12,000 to $18,000 per year (depending on state and campus housing)',
      healthInsurance: '$1,500 to $2,500 per year (Mandatory university student health plan)',
      visaFee: '$185 (F-1 Visa Application Fee) + $350 (SEVIS I-901 Fee)',
      additionalNotes: 'Graduate assistantships (TA/RA) or on-campus jobs (20 hrs/week) significantly offset living costs.'
    },
    documentsRequired: {
      admissionDocuments: [
        'Official 10th and 12th Marksheets and Certificates',
        'Bachelor’s Individual Semester Marksheets, Consolidated Transcript & Degree Certificate',
        'Standardized Test Scorecards (GRE if applicable, IELTS / TOEFL / PTE / Duolingo)',
        'Statement of Purpose (SOP) tailored to department curriculum',
        'Three Letters of Recommendation (Academic / Professional)',
        'Updated Resume with technical projects and internships',
        'Passport bio pages and Bank Solvency Certificate for I-20 issuance'
      ],
      visaDocuments: [
        'Form I-20 issued by the approved SEVP institution',
        'SEVIS I-901 Fee payment confirmation receipt ($350)',
        'DS-160 online visa application confirmation barcode page',
        'US Visa Appointment Confirmation letter (VAC and Consular Interview)',
        'Valid Passport with at least 6 months validity',
        'Financial Evidence: Bank statements, loan sanction letter, and CA affidavits covering 1 year of total expenses listed on I-20',
        'Academic transcripts, test scorecards, and sponsor income proof (ITR / Form 16)'
      ]
    },
    workOpportunities: {
      partTimeRules: 'Up to 20 hours per week on-campus employment during academic sessions.',
      vacationRules: 'Full-time (up to 40 hours per week) on-campus during annual vacation and winter breaks.',
      minimumWage: 'Federal minimum wage is $7.25/hr; state campus wages typically range from $12 to $18/hr.',
      postStudyWorkVisa: '12 Months standard OPT + 24 Months STEM OPT Extension for a total of 36 months of full-time work authorization.'
    },
    prPathways: {
      intro: 'International graduates in the US transition from student status to high-earning corporate careers and permanent residency.',
      pathways: [
        'STEM OPT (36 Months): Ample time to gain experience and participate in multiple H-1B lottery cycles.',
        'H-1B Specialty Occupation Visa: Employer-sponsored professional work visa with an annual 20,000 master’s cap exemption.',
        'EB-2 / EB-3 Employment-Based Green Card: Permanent residency sponsored by US employers.',
        'EB-2 National Interest Waiver (NIW): Direct self-petition green card for researchers with significant STEM contributions.'
      ],
      disclaimer: 'US visa and permanent residency paths are governed by USCIS regulations and annual statutory quotas.'
    },
    faqs: [
      { q: 'What is STEM OPT in the USA and how does it benefit Indian students?', a: 'STEM OPT allows graduates of qualifying Science, Technology, Engineering, and Math degrees to work in the US for up to 36 months (3 years) after graduation without needing an immediate H-1B visa.' },
      { q: 'Can I apply for a Master’s in the USA with a 3-year Indian Bachelor’s degree?', a: 'Yes! Many US universities accept 3-year Indian degrees (B.Sc, BCA, B.Com, BBA) directly or through a credential evaluation like WES. Others may recommend a 1-year PG diploma.' },
      { q: 'Is the GRE mandatory for studying in the USA?', a: 'Many US universities have made GRE optional or waived it entirely for Fall/Spring intakes. However, submitting a strong GRE score (315+) significantly boosts your scholarship chances.' },
      { q: 'What is the F-1 visa interview and how does IQ Overseas prepare me?', a: 'The F-1 visa interview is a 2-3 minute conversation with a US consular officer assessing your academic intent, finances, and ties to India. IQ Overseas conducts intensive 1-on-1 mock interviews to ensure complete confidence.' },
      { q: 'What is an I-20 form?', a: 'Form I-20 is the official Certificate of Eligibility issued by an SEVP-certified US university confirming your admission and estimated annual costs, which is required to book your visa appointment.' },
      { q: 'Can I work off-campus on an F-1 student visa?', a: 'Off-campus work is strictly prohibited during the first academic year. After one full year, students can work off-campus through CPT (Curricular Practical Training) related to their course.' },
      { q: 'What is the SEVIS fee?', a: 'The SEVIS I-901 fee ($350) is a mandatory fee paid to the US Department of Homeland Security to maintain the international student tracking database.' },
      { q: 'How much funds do I need to show for a US student visa?', a: 'You must show liquid funds (savings, fixed deposits, education loan sanction letter) covering at least the total 1-year expenses listed on your university I-20 form.' },
      { q: 'What are the top starting salaries for STEM graduates in the US?', a: 'Graduates in Computer Science, AI, and Data Science typically earn between $85,000 and $125,000+ base salary upon graduation.' },
      { q: 'How does IQ Overseas help with US university applications?', a: 'IQ Overseas provides personalized university shortlisting, SOP and LOR polishing, financial document assembly, DS-160 filing, slot booking, and rigorous mock visa interview training.' }
    ]
  },

  // 5. Canada
  canada: {
    id: 'country-05',
    slug: 'canada',
    name: 'Canada',
    flag: '🇨🇦',
    isPublished: true,
    order: 5,
    seoTitle: 'Study in Canada – Top Universities, PGWP up to 3 Years, Cost & Express Entry | IQ Overseas',
    seoDescription: 'Comprehensive guide to studying in Canada for Indian students. Explore DLI universities, Co-op programs, up to 3-year PGWP, tuition costs, GIC, and Express Entry PR pathways with IQ Overseas.',
    heroBanner: {
      imageUrl: '/images/destinations/canada-dest.png',
      headline: 'Study in Canada – High-Quality Education & Clear Career Pathways',
      subtitle: 'Experience world-class Canadian universities, paid Co-op work terms, up to 3 years of Post-Graduation Work Permits (PGWP), and transparent Express Entry immigration.',
      badge: 'Up to 3-Year PGWP & Paid Co-op',
      stats: [
        { label: 'Universities & DLIs', value: '250+' },
        { label: 'PGWP Duration', value: 'Up to 3 Yrs' },
        { label: 'Off-Campus Work', value: '24 Hrs / Wk' },
        { label: 'PR Pathway', value: 'Express Entry' }
      ]
    },
    introduction: {
      heading: 'Study in Canada – Trusted Canada Student Visa Advisors in Guntur',
      subheading: 'Gain globally respected credentials in one of the safest and most welcoming countries in the world.',
      paragraphs: [
        'Canada consistently ranks among the most preferred study destinations for Indian students, celebrated for its high academic standards, safe multicultural cities, and progressive post-study work opportunities. Canadian degrees are globally recognized as equivalent to American qualifications, often at substantially more affordable tuition fees.',
        'A hallmark of the Canadian higher education model is the integrated Co-op (Cooperative Education) program, which weaves 4 to 12 months of paid, full-time industry work experience directly into your curriculum. Upon graduation, international students from Designated Learning Institutions (DLIs) can secure a Post-Graduation Work Permit (PGWP) for up to 3 years, establishing a solid foundation for Express Entry Canadian Experience Class (CEC) permanent residency.',
        'At IQ Overseas, we guide you through Designated Learning Institution (DLI) verifications, Provincial Attestation Letters (PAL), GIC account creation with Scotiabank/ICICI, Statement of Purpose formulation, and high-precision study permit filing.'
      ],
      highlights: [
        'Post-Graduation Work Permit (PGWP) offering up to 3 years of open work rights across Canada',
        'Co-op programs providing 4 to 12 months of paid Canadian corporate work experience before graduation',
        'Transparent Express Entry and Provincial Nominee Program (PNP) pathways to Permanent Residency',
        'Significantly more affordable tuition fees and living costs compared to private US institutions'
      ]
    },
    quickFacts: {
      country: 'Canada',
      capital: 'Ottawa',
      popularCities: 'Toronto, Vancouver, Montreal, Calgary, Ottawa, Edmonton, Waterloo',
      currency: 'Canadian Dollar (CAD / $)',
      language: 'English & French',
      popularIntakes: 'Fall (September), Winter (January), Spring/Summer (May)',
      topCourses: 'Computer Science, Data Science, Business Analytics, Project Management, Mechanical Engineering, Supply Chain',
      avgTuitionFee: 'CAD 16,000 to CAD 35,000 per year',
      postStudyWork: 'Up to 3 Years (Post-Graduation Work Permit - PGWP)',
      workRights: 'Up to 24 hours per week off-campus during academic terms; Full-time during breaks'
    },
    educationLandscape: {
      intro: 'Canadian higher education is delivered by Designated Learning Institutions (DLIs) categorized into research universities and polytechnic colleges.',
      bulletPoints: [
        'U15 Group of Canadian Research Universities: Premier research institutions (Toronto, UBC, McGill, Waterloo, Alberta).',
        'Comprehensive Universities: Institutions offering wide undergraduate and graduate programs with rich student enterprise.',
        'Colleges and Institutes of Technology: Applied institutions offering 1 to 2-year Post-Graduate Certificates (PG Diplomas) with industry training.'
      ],
      comparisonTable: [
        { aspect: 'Duration', undergraduate: '4 Years (Bachelor’s Degree)', postgraduate: '1 to 2 Years (Master’s or PG Diploma)' },
        { aspect: 'Focus', undergraduate: 'Academic theory, foundational principles & Co-op terms', postgraduate: 'Specialized technical research or applied industry skills' },
        { aspect: 'Tuition Fees', undergraduate: 'CAD 20,000 - CAD 38,000 / year', postgraduate: 'CAD 16,000 - CAD 32,000 / year' },
        { aspect: 'PGWP Eligibility', undergraduate: '3-Year Post-Graduation Work Permit', postgraduate: '3-Year PGWP for 2-year master’s (and new master’s rules)' },
        { aspect: 'PR Advantage', undergraduate: 'Higher CRS points for Canadian 4-year degree', postgraduate: 'Direct eligibility for Ontario/BC Master’s PNP streams' }
      ]
    },
    whyStudyBenefits: [
      { id: '1', title: 'Up to 3-Year Open Work Permit', description: 'Work for any employer in Canada for up to 3 years after graduation through the Post-Graduation Work Permit (PGWP).' },
      { id: '2', title: 'Paid Co-op Internships', description: 'Earn CAD $18 to $30 per hour while gaining 4 to 12 months of valuable Canadian corporate work experience.' },
      { id: '3', title: 'Clear Express Entry PR Pathways', description: 'Canadian education and work experience award substantial bonus points under the Comprehensive Ranking System (CRS).' },
      { id: '4', title: 'Safe & Inclusive Multicultural Cities', description: 'Canada consistently ranks among the top 10 safest countries globally, offering a vibrant home for Indian students.' },
      { id: '5', title: 'Affordable World-Class Tuition', description: 'Enjoy top global academic standards at roughly 30% to 40% lower overall tuition costs than US private universities.' },
      { id: '6', title: 'Spousal Work Rights for Master’s', description: 'Spouses of students enrolled in Master’s and Doctoral degree programs can qualify for Open Work Permits.' }
    ],
    topCourses: [
      { id: 'c1', title: 'Master of Computer Science & Data Analytics', category: 'Technology', duration: '2 Years', description: 'Machine learning, big data infrastructure, and software engineering in Toronto and Vancouver tech clusters.', careerRoles: ['Software Developer', 'Data Engineer', 'Systems Analyst'] },
      { id: 'c2', title: 'Master of Business Administration (MBA)', category: 'Business', duration: '1.5 - 2 Years', description: 'Rotman, Schulich, and Sauder accredited programs focusing on finance, venture capital, and consulting.', careerRoles: ['Management Consultant', 'Financial Analyst', 'Product Director'] },
      { id: 'c3', title: 'Post-Graduate Certificate in Cloud & Cyber Security', category: 'Technology', duration: '1 - 2 Years', description: 'Hands-on network defense, ethical hacking, and enterprise cloud infrastructure.', careerRoles: ['Cyber Security Specialist', 'Cloud Administrator', 'Network Lead'] },
      { id: 'c4', title: 'Master of Engineering (M.Eng) in Mechanical/Civil', category: 'Engineering', duration: '1.5 - 2 Years', description: 'Coursework-based engineering master’s designed for rapid Canadian industrial accreditation.', careerRoles: ['Project Engineer', 'Operations Manager', 'Structural Consultant'] },
      { id: 'c5', title: 'Global Supply Chain & Logistics Management', category: 'Business', duration: '1 - 2 Years', description: 'Procurement, inventory logistics, and international trade operations vital for Canadian commerce.', careerRoles: ['Supply Chain Manager', 'Logistics Analyst', 'Procurement Specialist'] },
      { id: 'c6', title: 'Health Informatics & Healthcare Administration', category: 'Healthcare', duration: '2 Years', description: 'Digital health systems and healthcare data governance across Canadian provincial health authorities.', careerRoles: ['Health Data Analyst', 'Clinical Project Manager', 'Informatics Lead'] }
    ],
    scholarships: {
      intro: 'Canadian institutions and provincial governments offer competitive entrance scholarships for high-performing Indian students.',
      items: [
        { id: 's1', name: 'University International Entrance Scholarships', provider: 'Individual Canadian Universities', award: 'CAD $3,000 to CAD $15,000 Tuition Waiver', eligibility: 'Awarded automatically based on high school or bachelor’s GPA (typically 75%+).' },
        { id: 's2', name: 'Vanier Canada Graduate Scholarships', provider: 'Government of Canada', award: 'CAD $50,000 per year for 3 years', eligibility: 'Highly competitive award for world-class doctoral scholars demonstrating leadership.' },
        { id: 's3', name: 'Ontario Graduate Scholarship (OGS)', provider: 'Government of Ontario & Universities', award: 'CAD $15,000 per year', eligibility: 'Merit-based scholarship for graduate students enrolled in Ontario universities.' },
        { id: 's4', name: 'Presidential International Excellence Awards', provider: 'Top Canadian Universities (UBC, York, Calgary)', award: 'CAD $5,000 to CAD $25,000 renewable', eligibility: 'Exceptional academic excellence, community service, and extracurricular achievements.' }
      ]
    },
    admissionIntakes: {
      intro: 'Canada operates on three admission intakes, with Fall attracting the largest volume of applicants.',
      items: [
        { name: 'Fall Intake (Primary)', period: 'September', deadline: 'December – March', remarks: 'Offers 100% of programs, highest on-campus housing, and Co-op placements.' },
        { name: 'Winter Intake (Secondary)', period: 'January', deadline: 'July – September', remarks: 'Extremely popular for Indian graduates finishing studies in the summer.' },
        { name: 'Spring / Summer Intake', period: 'May', deadline: 'October – January', remarks: 'Offered by select universities and colleges for specialized diploma and business programs.' }
      ]
    },
    studyPrograms: {
      intro: 'Canadian post-secondary qualifications balance academic theory with practical employment-readiness.',
      items: [
        { level: 'Bachelor’s Degree', duration: '4 Years', description: 'Comprehensive undergraduate degree with optional paid Co-op work semesters.', outcomes: 'Eligible for 3-Year PGWP and high CRS points' },
        { level: 'Master’s Degree (Coursework or Thesis)', duration: '1 to 2 Years', description: 'Advanced academic degree with research thesis or industry capstone.', outcomes: 'Eligible for 3-Year PGWP; Spousal Open Work Permit' },
        { level: 'Post-Graduate Certificate / Diploma (PG Diploma)', duration: '1 to 2 Years', description: 'Applied technical credentials offered by top Canadian colleges and polytechnics.', outcomes: 'Fast-track employment-focused; 1-3 Year PGWP' },
        { level: 'Doctor of Philosophy (PhD)', duration: '4 to 5 Years', description: 'Advanced doctoral research positions with research assistantship stipends.', outcomes: 'Direct provincial nominee PR nominations' }
      ]
    },
    englishRequirements: {
      intro: 'Demonstrating English language competence is required for DLI admissions and the Canadian Study Permit.',
      ielts: { ug: 'Overall 6.0 (no band less than 6.0)', pg: 'Overall 6.5 (minimum 6.0 in each band)', notes: 'IELTS Academic is accepted for all Canadian study permits and universities.' },
      pte: { ug: 'Overall 50 to 54', pg: 'Overall 58 to 65 (minimum 50 in each skill)', notes: 'PTE Academic is fully recognized for Canadian student visa processing.' },
      toefl: { ug: 'Overall 70 to 80', pg: 'Overall 86 to 92 (with minimum section scores)', notes: 'TOEFL iBT test center scores accepted.' },
      duolingo: { ug: 'Overall 105 to 110', pg: 'Overall 115 to 125', notes: 'Accepted by many Canadian universities for admission; confirm with visa requirements.' }
    },
    entryRequirements: {
      intro: 'Canadian institutions review academic rigor, GPA, English scores, and financial preparedness.',
      criteria: [
        'Provincial Attestation Letter (PAL): Mandatory document issued by the province via your DLI for study permit filing.',
        'Bachelor’s Admissions: 12th standard with 65% – 85% aggregate from recognized Indian educational boards.',
        'Master’s Admissions: 4-Year Bachelor’s degree (or 3-Year degree with 1-Year PG diploma) with minimum 60% – 70% aggregate.',
        'Guaranteed Investment Certificate (GIC): CAD $20,635 deposited into a Canadian bank prior to visa filing.',
        'Statement of Purpose (SOP) explaining course relevance, financial justification, and ties to India.'
      ],
      academicPercentage: 'Minimum 60% for public universities; 55%+ for post-graduate college diplomas.',
      backlogPolicy: 'Universities accept up to 5-8 backlogs; colleges may accept up to 10-15 backlogs with strong recent GPA.'
    },
    costOfStudying: {
      bachelorsTuition: 'CAD 18,000 to CAD 38,000 per year',
      mastersTuition: 'CAD 16,000 to CAD 32,000 per year',
      livingExpenses: 'CAD 20,635 per year (Mandatory official GIC amount as of 2024)',
      healthInsurance: 'CAD 600 to CAD 1,000 per year (Provincial or university health coverage)',
      visaFee: 'CAD $150 (Study Permit) + CAD $85 (Biometrics)',
      additionalNotes: 'The GIC amount of CAD $20,635 is disbursed back to the student in monthly installments once in Canada.'
    },
    documentsRequired: {
      admissionDocuments: [
        '10th and 12th Marksheets and Passing Certificates',
        'Bachelor’s Semester Marksheets, Consolidated Transcript & Degree Certificate',
        'English Language Proficiency Scorecard (IELTS / PTE / TOEFL)',
        'Statement of Purpose (SOP) tailored for the Canadian DLI',
        'Two Letters of Recommendation (LORs)',
        'Updated Resume / Curriculum Vitae',
        'Valid Passport copy'
      ],
      visaDocuments: [
        'Official Letter of Acceptance (LOA) from a Designated Learning Institution (DLI)',
        'Provincial Attestation Letter (PAL) from the host province',
        'Guaranteed Investment Certificate (GIC) receipt of CAD $20,635',
        'Proof of first-year tuition fee payment receipt from the DLI',
        'Valid Passport with at least 12 months validity',
        'Upfront Medical Examination sheet from an approved panel physician',
        'Comprehensive Study Plan / SOP demonstrating intent of study and home ties'
      ]
    },
    workOpportunities: {
      partTimeRules: 'Up to 24 hours per week off-campus during regular academic semesters.',
      vacationRules: 'Full-time work allowed during scheduled winter, summer, and reading week breaks.',
      minimumWage: 'Canadian minimum wages range from CAD $15.00 to CAD $17.30 per hour depending on the province.',
      postStudyWorkVisa: 'Graduates of eligible DLI programs receive an open Post-Graduation Work Permit (PGWP) for up to 3 years.'
    },
    prPathways: {
      intro: 'Canada has one of the world’s most transparent, merit-driven economic immigration systems.',
      pathways: [
        'Canadian Experience Class (CEC): Express Entry stream awarding high points for 1 year of Canadian skilled work experience.',
        'Provincial Nominee Programs (PNP): Direct provincial nominations awarding 600 bonus CRS points (e.g., OINP, BC PNP).',
        'Ontario / BC Master’s Graduate Streams: Direct permanent residency pathways without requiring a prior job offer.',
        'Atlantic Immigration Program (AIP): Streamlined settlement pathway for graduates of Atlantic Canadian universities.'
      ],
      disclaimer: 'PR is governed by IRCC Comprehensive Ranking System (CRS) cutoffs and provincial nominee allocations.'
    },
    faqs: [
      { q: 'What is a Post-Graduation Work Permit (PGWP) in Canada?', a: 'A PGWP is an open work permit allowing international graduates of Designated Learning Institutions (DLIs) to work in Canada for up to 3 years without requiring employer sponsorship.' },
      { q: 'What is a Provincial Attestation Letter (PAL)?', a: 'Under 2024 Canadian immigration regulations, a PAL is a mandatory provincial certificate confirming your study spot within the national cap, which must accompany your study permit application.' },
      { q: 'How much money is required for a Canada GIC in 2024?', a: 'As of 2024, the mandatory Guaranteed Investment Certificate (GIC) amount is CAD $20,635, which proves your ability to cover 1 year of living costs in Canada.' },
      { q: 'How many hours can international students work in Canada?', a: 'International students can work up to 24 hours per week off-campus during academic semesters and full-time during official breaks.' },
      { q: 'Are 3-year Indian Bachelor’s degrees accepted for Master’s in Canada?', a: 'Top Canadian universities typically require 16 years of education (4-year Bachelor’s). However, students with 3-year degrees can apply to Post-Graduate Certificates/Diplomas or select universities offering direct evaluation.' },
      { q: 'Can my spouse work while I study in Canada?', a: 'Under current rules, spouses of international students enrolled in Master’s and Doctoral degree programs at universities are eligible to apply for an Open Work Permit.' },
      { q: 'What is a Co-op program in Canada?', a: 'Co-op is an integrated academic track where you alternate between academic study terms and paid full-time industry internships (earning CAD $18 - $30/hr).' },
      { q: 'What IELTS score is required for Canada study permits?', a: 'Most university Master’s programs require IELTS Academic 6.5 (no band less than 6.0). Post-graduate college diplomas typically accept 6.0.' },
      { q: 'What is the processing time for a Canadian student visa?', a: 'Study permit processing times from India typically range between 4 and 8 weeks once biometric data is submitted.' },
      { q: 'How does IQ Overseas help students applying to Canada?', a: 'IQ Overseas provides personalized counseling, DLI institution shortlisting, PAL guidance, GIC setup, SOP reviews, and meticulous visa filing.' }
    ]
  },

  // 6. Ireland
  ireland: {
    id: 'country-06',
    slug: 'ireland',
    name: 'Ireland',
    flag: '🇮🇪',
    isPublished: true,
    order: 6,
    seoTitle: 'Study in Ireland – Top Universities, 2-Year Stay Back, Tech Hub & Visa | IQ Overseas',
    seoDescription: 'Complete guide to studying in Ireland for Indian students. Explore Dublin tech hubs, European headquarters of Google & Meta, 2-Year stay back visa, costs, and scholarships with IQ Overseas.',
    heroBanner: {
      imageUrl: '/images/destinations/ireland-dest.png',
      headline: 'Study in Ireland – European Silicon Valley with 2-Year Stay Back',
      subtitle: 'Study in the only English-speaking nation in the Eurozone, home to global headquarters of Google, Apple, Meta, Pfizer, and 2-year post-study work rights.',
      badge: 'European Silicon Valley & 2-Year Stay Back',
      stats: [
        { label: 'Global Tech HQs', value: '1,000+' },
        { label: 'Stay Back Visa', value: '2 Years PSW' },
        { label: 'Language', value: '100% English' },
        { label: 'Minimum Wage', value: '€12.70 / hr' }
      ]
    },
    introduction: {
      heading: 'Study in Ireland – Expert Ireland Education Consultants in Guntur',
      subheading: 'Launch your international career at the European corporate capital for technology and pharma.',
      paragraphs: [
        'Ireland has rapidly become one of the most attractive destinations for Indian students pursuing Master’s and Bachelor’s degrees. As the only native English-speaking country in the European Union, Ireland offers world-class academic institutions, a warm welcoming culture, and unmatched career prospects.',
        'Known globally as the "Silicon Valley of Europe", Dublin and Cork host the European headquarters of over 1,000 multinational giants, including Google, Meta, Apple, Microsoft, Intel, Pfizer, and Stripe. Through Ireland’s Third Level Graduate Scheme, Master’s graduates automatically receive a 2-Year stay-back work visa, providing immediate access to Europe’s most booming tech and pharmaceutical job markets.',
        'At IQ Overseas, our counselors guide you through National University of Ireland (NUI) selections, Trinity College Dublin, UCD, DCU, and technological universities, ensuring flawless visa documentation and scholarship applications.'
      ],
      highlights: [
        'Only native English-speaking nation in the European Union Eurozone',
        '2-Year Third Level Graduate Scheme stay-back work permit for Master’s graduates',
        'European headquarters of 16 of the top 20 global tech and pharma companies',
        'Direct Critical Skills Employment Permit pathway to Irish permanent residence (Stamp 4)'
      ]
    },
    quickFacts: {
      country: 'Ireland',
      capital: 'Dublin',
      popularCities: 'Dublin, Cork, Galway, Limerick, Waterford',
      currency: 'Euro (EUR / €)',
      language: 'English',
      popularIntakes: 'Autumn Intake (September) & Limited Spring Intake (January/February)',
      topCourses: 'Data Analytics, Cloud Computing, Artificial Intelligence, Pharmaceutical Science, FinTech, MBA',
      avgTuitionFee: '€12,000 to €26,000 per year',
      postStudyWork: '2 Years for Master’s graduates; 1 Year for Bachelor’s graduates (Third Level Graduate Scheme)',
      workRights: '20 hours per week during term time; 40 hours per week during June, July, August, and Christmas'
    },
    educationLandscape: {
      intro: 'Ireland’s higher education system is regulated by Quality and Qualifications Ireland (QQI) and National Framework of Qualifications (NFQ).',
      bulletPoints: [
        'Traditional Research Universities: World-renowned universities like Trinity College Dublin (TCD), University College Dublin (UCD), and University of Galway.',
        'Technological Universities (TUs): Modern career-focused institutions (TU Dublin, MTU, TUS) offering high-employability degrees.',
        'Private Colleges: Specialized business and technology institutes accredited by QQI with small interactive batches.'
      ],
      comparisonTable: [
        { aspect: 'Duration', undergraduate: '3 to 4 Years (NFQ Level 8)', postgraduate: '1 Year (NFQ Level 9)' },
        { aspect: 'Entry Requirements', undergraduate: '12th Grade with 70% - 85%+', postgraduate: 'Bachelor’s degree with 60% - 65%+' },
        { aspect: 'Tuition Fees', undergraduate: '€12,000 - €24,000 / year', postgraduate: '€13,000 - €26,000 / total course' },
        { aspect: 'Post-Study Work', undergraduate: '1 Year Stay Back (Third Level Scheme)', postgraduate: '2 Years Stay Back (Third Level Scheme)' },
        { aspect: 'Critical Skills Visa', undergraduate: 'Eligible with qualifying employment', postgraduate: 'High eligibility for Critical Skills Permit' }
      ]
    },
    whyStudyBenefits: [
      { id: '1', title: 'European Silicon Valley', description: 'Over 1,000 global multinationals have their European headquarters in Dublin, creating unprecedented graduate hiring.' },
      { id: '2', title: '2-Year Stay Back Work Visa', description: 'Master’s graduates receive a 24-month Third Level Graduate Scheme visa to work across the Irish economy.' },
      { id: '3', title: '1-Year Fast-Track Master’s', description: 'Complete your specialized Master’s degree in just 12 months, saving a full year of living expenses.' },
      { id: '4', title: 'Critical Skills Employment Permit', description: 'Earn €38,000+ in high-demand tech/pharma roles to qualify for fast-track Stamp 4 permanent settlement in 2 years.' },
      { id: '5', title: '100% English-Speaking Eurozone', description: 'Experience the cultural ease of a native English-speaking nation combined with the economic benefits of the Euro.' },
      { id: '6', title: 'Generous Government Scholarships', description: 'Compete for Government of Ireland International Education Scholarships offering full tuition + €10,000 stipend.' }
    ],
    topCourses: [
      { id: 'c1', title: 'MSc in Data Analytics & Machine Learning', category: 'Technology', duration: '1 Year', description: 'Big data processing, predictive modeling, and business intelligence aligned with Dublin’s tech district.', careerRoles: ['Data Scientist', 'Data Analyst', 'Analytics Lead'] },
      { id: 'c2', title: 'MSc in Cloud Computing & Cyber Security', category: 'Technology', duration: '1 Year', description: 'AWS, Azure, and distributed enterprise cloud architecture for global cloud providers in Ireland.', careerRoles: ['Cloud Architect', 'Security Engineer', 'DevOps Specialist'] },
      { id: 'c3', title: 'MSc in Pharmaceutical & Bioprocess Engineering', category: 'Healthcare', duration: '1 Year', description: 'Biologics manufacturing and pharmaceutical formulation in the world’s leading pharma export nation.', careerRoles: ['Process Engineer', 'Biochemist', 'Quality Assurance Manager'] },
      { id: 'c4', title: 'Master of Business Administration (MBA)', category: 'Business', duration: '1 Year', description: 'AMBA and EQUIS accredited leadership training with direct Dublin corporate consulting projects.', careerRoles: ['Business Consultant', 'Operations Lead', 'Project Director'] },
      { id: 'c5', title: 'MSc in FinTech & Financial Services', category: 'Finance', duration: '1 Year', description: 'RegTech, algorithmic trading, and digital banking in Europe’s premier financial funds administration hub.', careerRoles: ['FinTech Analyst', 'Risk Manager', 'Compliance Officer'] },
      { id: 'c6', title: 'MSc in Software Engineering', category: 'Technology', duration: '1 Year', description: 'Full-stack distributed software design and microservices for multinational technology enterprises.', careerRoles: ['Software Engineer', 'Full Stack Developer', 'Technical Lead'] }
    ],
    scholarships: {
      intro: 'The Irish government and leading universities offer merit scholarships to attract bright international graduates.',
      items: [
        { id: 's1', name: 'Government of Ireland International Education Scholarship (GOI-IES)', provider: 'Higher Education Authority (HEA)', award: '100% Tuition Waiver + €10,000 Living Stipend', eligibility: 'Prestigious national scholarship awarded to 60 top international students globally.' },
        { id: 's2', name: 'University Global Excellence Scholarships', provider: 'UCD, Trinity, Galway, DCU', award: '€2,000 to €5,000 Tuition Fee Reduction', eligibility: 'Awarded automatically based on undergraduate GPA (typically 65%+ in Indian degree).' },
        { id: 's3', name: 'India Undergraduate / Postgraduate Merit Award', provider: 'Individual Irish Universities', award: 'Up to €4,000 Fee Waiver', eligibility: 'Designed specifically for Indian passport holders with high academic merit.' },
        { id: 's4', name: 'Dean’s STEM Scholarships', provider: 'Faculty of Science & Engineering', award: '€3,000 to €6,000 Discount', eligibility: 'High-achieving applicants enrolling in engineering, computer science, and data programs.' }
      ]
    },
    admissionIntakes: {
      intro: 'Irish universities follow the European academic calendar with one primary autumn intake.',
      items: [
        { name: 'Autumn Intake (Primary - September)', period: 'September / October', deadline: 'February – June', remarks: 'Main intake offering all courses, university scholarships, and complete on-campus student housing.' },
        { name: 'Spring Intake (Limited - January)', period: 'January / February', deadline: 'October – November', remarks: 'Available for selected business, computing, and pharmaceutical programs at select universities.' }
      ]
    },
    studyPrograms: {
      intro: 'Qualifications in Ireland are mapped to the National Framework of Qualifications (NFQ).',
      items: [
        { level: 'Honours Bachelor’s Degree', duration: '3 to 4 Years (NFQ Level 8)', description: 'Undergraduate degrees combining academic excellence with industry internships.', outcomes: 'Qualifies for 1-Year Stay Back visa' },
        { level: 'Master’s Degree (Taught)', duration: '1 Year (NFQ Level 9)', description: 'Fast-track intensive 12-month program combining modular coursework and a thesis.', outcomes: 'Qualifies for 2-Year Stay Back visa' },
        { level: 'Master’s by Research', duration: '1.5 to 2 Years (NFQ Level 9)', description: 'Deep investigative research supervised by academic faculty.', outcomes: 'Pathway to PhD and corporate R&D' },
        { level: 'Doctor of Philosophy (PhD)', duration: '3 to 4 Years (NFQ Level 10)', description: 'Advanced doctoral research positions supported by Science Foundation Ireland (SFI).', outcomes: 'Highest global academic credential' }
      ]
    },
    englishRequirements: {
      intro: 'Proof of English language competence is mandatory for Irish university admission and immigration visa filing.',
      ielts: { ug: 'Overall 6.0 to 6.5 (no band less than 5.5)', pg: 'Overall 6.5 (minimum 6.0 in each band)', notes: 'IELTS Academic accepted across all Irish institutions.' },
      pte: { ug: 'Overall 50 to 52', pg: 'Overall 58 to 65', notes: 'PTE Academic accepted by 100% of Irish universities.' },
      toefl: { ug: 'Overall 70 to 80', pg: 'Overall 88 to 92', notes: 'TOEFL iBT accepted across all Irish institutions.' },
      duolingo: { ug: 'Overall 105 to 115', pg: 'Overall 115 to 125', notes: 'Widely accepted across Irish universities for admissions.' }
    },
    entryRequirements: {
      intro: 'Irish universities evaluate bachelor’s degree GPA, English proficiency, and Statement of Purpose.',
      criteria: [
        'Bachelor’s Admissions: 12th standard with 70% – 85%+ aggregate from CBSE, ICSE, or State Boards.',
        'Master’s Admissions: 3-Year or 4-Year Bachelor’s degree from a recognized Indian university with 60% – 65% aggregate.',
        'Acceptance of 3-Year Indian Bachelor’s degrees (B.Com, B.Sc, BCA, BBA) for direct Master’s entry.',
        'Statement of Purpose (SOP) demonstrating clear academic interest and post-study career goals.',
        'Two Academic Letters of Recommendation (LORs) and Updated CV.'
      ],
      academicPercentage: 'Minimum 60% for public universities; 65%+ for Trinity College Dublin and UCD.',
      backlogPolicy: 'Irish universities generally prefer candidates with fewer than 5 to 10 backlogs.'
    },
    costOfStudying: {
      bachelorsTuition: '€12,000 to €24,000 per year',
      mastersTuition: '€13,000 to €26,000 (Total course fee for 1 year)',
      livingExpenses: '€10,000 to €14,000 per year (depending on city; Dublin is €1,000 - €1,200/month)',
      healthInsurance: '€160 to €300 per year (Mandatory private student medical insurance)',
      visaFee: '€60 (Single Entry) / €100 (Multi-Entry) + IRP Registration €300',
      additionalNotes: 'Because Master’s degrees are 1 year, the total living and tuition expense is limited to just 12 months.'
    },
    documentsRequired: {
      admissionDocuments: [
        'Class 10th and 12th Marksheets and Certificates',
        'Bachelor’s Semester Marksheets, Consolidated Transcript & Degree Certificate',
        'English Language Proficiency Scorecard (IELTS / PTE / TOEFL / Duolingo)',
        'Statement of Purpose (SOP) tailored for Ireland',
        'Two Letters of Recommendation (Academic / Professional)',
        'Updated Resume / Curriculum Vitae',
        'Valid Passport copy'
      ],
      visaDocuments: [
        'Official Unconditional Letter of Offer from Irish university',
        'Proof of tuition fee payment receipt (via TransferMate / PayToStudy)',
        'Valid Passport with at least 12 months validity',
        'Proof of financial capacity: Bank statements covering €10,000 living cost + balance tuition for 6 months',
        'Sponsor documentation: Income tax returns, employment salary certificates, and relationship affidavits',
        'Private Medical Insurance policy certificate',
        'Comprehensive Statement of Purpose addressing immigration ties and career plans'
      ]
    },
    workOpportunities: {
      partTimeRules: 'Up to 20 hours per week during term time.',
      vacationRules: 'Up to 40 hours per week during June, July, August, and September, and from December 15 to January 15.',
      minimumWage: 'National minimum wage in Ireland is €12.70 per hour (as of 2024).',
      postStudyWorkVisa: 'Third Level Graduate Scheme grants 2 years of open work rights for NFQ Level 9 Master’s graduates.'
    },
    prPathways: {
      intro: 'Ireland provides one of the fastest routes to permanent residency in Europe through its Critical Skills Employment Permit.',
      pathways: [
        'Third Level Graduate Scheme (24 Months): Work freely to gain local industry experience in Ireland.',
        'Critical Skills Employment Permit: Available for tech, engineering, and medical roles earning €38,000+ per year.',
        'Stamp 4 Permission: Transition to Stamp 4 permanent residence after just 2 years on a Critical Skills Permit.',
        'Irish Citizenship: Eligible to apply for naturalization and an Irish (EU) passport after 5 years of legal residence.'
      ],
      disclaimer: 'Immigration regulations and occupation lists are managed by the Irish Department of Justice.'
    },
    faqs: [
      { q: 'Why is Ireland called the "Silicon Valley of Europe"?', a: 'Ireland hosts the European headquarters of 16 of the top 20 global tech giants, including Google, Meta, Apple, Microsoft, Intel, and TikTok, providing immense job opportunities for STEM graduates.' },
      { q: 'What is Ireland’s stay-back work visa for Master’s graduates?', a: 'Under the Third Level Graduate Scheme (Stamp 1G), international students completing an NFQ Level 9 Master’s degree receive 2 full years of open work authorization in Ireland.' },
      { q: 'Are 3-year Indian Bachelor’s degrees accepted in Ireland?', a: 'Yes! Irish universities widely accept 3-year Indian Bachelor’s degrees (B.Com, B.Sc, BCA, BBA) for direct admission into 1-year Master’s programs.' },
      { q: 'How many hours can international students work in Ireland?', a: 'Students can work up to 20 hours per week during academic semesters, and full-time (40 hours per week) during scheduled summer breaks (June to September) and winter holidays.' },
      { q: 'What is the minimum hourly wage in Ireland?', a: 'Ireland’s national minimum wage is €12.70 per hour (as of 2024), allowing students to comfortably support their day-to-day living expenses.' },
      { q: 'What is a Critical Skills Employment Permit in Ireland?', a: 'It is a fast-track work permit for in-demand roles (software, data science, engineering, pharmacy) with a salary of €38,000+ that leads directly to permanent residence (Stamp 4) after 2 years.' },
      { q: 'What IELTS or PTE score is required for Irish universities?', a: 'Most Master’s programs require IELTS 6.5 (no band below 6.0) or PTE 58 (no score below 50). Bachelor’s degrees require IELTS 6.0.' },
      { q: 'How long does an Irish Master’s degree take?', a: 'Master’s degrees in Ireland take only 1 year (12 months), saving an entire year of tuition and living expenses.' },
      { q: 'What is the Irish Residence Permit (IRP)?', a: 'The IRP is a registration card issued by Irish immigration authorities upon arrival in Ireland that certifies your legal student status.' },
      { q: 'How does IQ Overseas help with Ireland admissions and visas?', a: 'IQ Overseas provides personalized counseling, university shortlisting across Trinity, UCD, Galway, and TUs, SOP review, financial audit, and Irish visa application support.' }
    ]
  },

  // 7. New Zealand
  'new-zealand': {
    id: 'country-07',
    slug: 'new-zealand',
    name: 'New Zealand',
    flag: '🇳🇿',
    isPublished: true,
    order: 7,
    seoTitle: 'Study in New Zealand – Universities, 3-Year Post-Study Work Visa & Green List PR | IQ Overseas',
    seoDescription: 'Complete guide to studying in New Zealand for Indian students. Learn about top 8 universities, post-study work visa up to 3 years, Green List fast-track PR, costs, and visa filing with IQ Overseas.',
    heroBanner: {
      imageUrl: '/images/destinations/new-zealand-dest.png',
      headline: 'Study in New Zealand – World-Class Education in a Safe Paradise',
      subtitle: 'Experience world top-ranked universities, breathtaking landscapes, 3-year post-study work visas, and fast-track Green List residency pathways.',
      badge: '100% Universities in Global Top 3%',
      stats: [
        { label: 'Universities', value: 'All in Top 3%' },
        { label: 'Post-Study Work', value: 'Up to 3 Years' },
        { label: 'Safety Rank', value: 'World #2' },
        { label: 'Minimum Wage', value: 'NZD $23.15 / hr' }
      ]
    },
    introduction: {
      heading: 'Study in New Zealand – Premier Education Consultants in Guntur & AP',
      subheading: 'Combine world-ranked academic excellence with an unmatched standard of living and career stability.',
      paragraphs: [
        'New Zealand is celebrated globally for its high educational caliber, welcoming progressive society, and stunning natural landscapes. Uniquely, all eight of New Zealand’s public universities are ranked within the top 3% of universities worldwide by QS World University Rankings.',
        'With its forward-looking education system, New Zealand emphasizes critical inquiry, applied research, and hands-on industry problem solving. International students completing eligible Bachelor’s and Master’s degrees qualify for up to 3 years of Post-Study Work Visas. Additionally, New Zealand’s "Green List" of in-demand occupations offers direct, fast-track residence pathways for specialists in engineering, ICT, health, and construction.',
        'At IQ Overseas, our dedicated New Zealand counselors in Lakshmipuram, Guntur assist you with university shortlisting (Auckland, Otago, Canterbury, Victoria Wellington), genuine student documentation, Fee Protection, and student visa lodgement.'
      ],
      highlights: [
        'All 8 state universities ranked in the top 3% of universities globally',
        'Post-Study Work Visa (PSWV) for up to 3 years after Bachelor’s and Master’s degrees',
        'Direct Green List fast-track to New Zealand Permanent Residency for in-demand roles',
        'Voted the world’s second safest country with exceptional student welfare policies'
      ]
    },
    quickFacts: {
      country: 'New Zealand',
      capital: 'Wellington',
      popularCities: 'Auckland, Wellington, Christchurch, Dunedin, Hamilton',
      currency: 'New Zealand Dollar (NZD / $)',
      language: 'English',
      popularIntakes: 'Semester 1 (February/March) & Semester 2 (July)',
      topCourses: 'Information Technology, Civil & Environmental Engineering, Data Science, Wine & Agriculture, MBA, Healthcare',
      avgTuitionFee: 'NZD 24,000 to NZD 40,000 per year',
      postStudyWork: 'Up to 3 Years (Post-Study Work Visa)',
      workRights: 'Up to 20 hours per week during term time; Full-time during scheduled breaks'
    },
    educationLandscape: {
      intro: 'New Zealand’s education system is regulated by the New Zealand Qualifications Authority (NZQA) and the Code of Practice for the Pastoral Care of International Students.',
      bulletPoints: [
        'State Universities: 8 public universities offering research-led undergraduate and postgraduate degrees.',
        'Te Pūkenga (New Zealand Institute of Skills and Technology): Nationwide vocational network offering applied diplomas and degrees.',
        'Private Training Establishments (PTEs): Specialized institutions offering focused career diplomas in business, animation, and hospitality.'
      ],
      comparisonTable: [
        { aspect: 'Duration', undergraduate: '3 Years (Bachelor’s) / 4 Years (Honours)', postgraduate: '1 to 2 Years (Master’s)' },
        { aspect: 'Entry Requirements', undergraduate: '12th Grade with 65% - 75%+', postgraduate: 'Recognized Bachelor’s degree with 60%+' },
        { aspect: 'Tuition Fees', undergraduate: 'NZD 24,000 - NZD 36,000 / year', postgraduate: 'NZD 26,000 - NZD 42,000 / year' },
        { aspect: 'Post-Study Work', undergraduate: '3-Year Post-Study Work Visa', postgraduate: '3-Year Post-Study Work Visa' },
        { aspect: 'Spousal Work Rights', undergraduate: 'Subject to Green List degree', postgraduate: 'Full Open Work Permit for spouse' }
      ]
    },
    whyStudyBenefits: [
      { id: '1', title: 'Top 3% World Rankings', description: 'Every single university in New Zealand ranks among the world’s top 3% institutions according to QS World Rankings.' },
      { id: '2', title: '3-Year Post-Study Work Rights', description: 'Work in New Zealand for up to 3 years after graduation with open employment rights.' },
      { id: '3', title: 'Fast-Track Green List PR', description: 'Direct-to-residence and work-to-residence pathways for STEM, healthcare, and engineering professionals.' },
      { id: '4', title: 'Safe & Peaceful Society', description: 'Consistently ranked #2 in the Global Peace Index, offering an exceptionally secure and nurturing environment.' },
      { id: '5', title: 'Spouse Work Rights for Master’s', description: 'Spouses of students enrolled in Master’s programs can accompany and work full-time on Open Work Visas.' },
      { id: '6', title: 'Generous Minimum Wage', description: 'New Zealand minimum wage of NZD $23.15 per hour helps international students comfortably cover living expenses.' }
    ],
    topCourses: [
      { id: 'c1', title: 'Master of Information Technology & AI', category: 'Technology', duration: '1.5 - 2 Years', description: 'Software design, enterprise systems, and cybersecurity linked to New Zealand’s high-tech sector.', careerRoles: ['Software Developer', 'Security Analyst', 'Cloud Specialist'] },
      { id: 'c2', title: 'Master of Engineering in Civil / Structural', category: 'Engineering', duration: '1 - 2 Years', description: 'Seismic engineering and sustainable infrastructure accredited by Engineering New Zealand.', careerRoles: ['Structural Engineer', 'Project Manager', 'Geotechnical Lead'] },
      { id: 'c3', title: 'Master of Business Analytics & Data Science', category: 'Analytics', duration: '1.5 Years', description: 'Predictive data modeling, machine learning, and decision intelligence for business operations.', careerRoles: ['Data Scientist', 'Business Analyst', 'Analytics Consultant'] },
      { id: 'c4', title: 'Master of Business Administration (MBA)', category: 'Business', duration: '1.5 Years', description: 'Strategic leadership, venture innovation, and corporate governance in the Asia-Pacific region.', careerRoles: ['Operations Director', 'Strategy Consultant', 'General Manager'] },
      { id: 'c5', title: 'Master of Nursing & Healthcare Science', category: 'Healthcare', duration: '2 Years', description: 'Clinical healthcare practice with direct Green List priority permanent residence eligibility.', careerRoles: ['Registered Nurse', 'Clinical Lead', 'Healthcare Administrator'] },
      { id: 'c6', title: 'Environmental Science & Sustainable Energy', category: 'Science', duration: '2 Years', description: 'Ecology, renewable power, and environmental management in a country globally celebrated for conservation.', careerRoles: ['Environmental Consultant', 'Sustainability Manager', 'Ecologist'] }
    ],
    scholarships: {
      intro: 'New Zealand universities and government bodies offer merit awards to attract high-caliber Indian students.',
      items: [
        { id: 's1', name: 'Manaaki New Zealand Scholarships', provider: 'New Zealand Government', award: 'Full Tuition + NZD $531/week Stipend + Flights', eligibility: 'Prestigious government scholarship for sustainable development and postgraduate studies.' },
        { id: 's2', name: 'University International Student Excellence Scholarship', provider: 'University of Auckland & Otago', award: 'Up to NZD 10,000 Tuition Waiver', eligibility: 'Awarded based on academic merit in Indian 12th or Bachelor’s degree.' },
        { id: 's3', name: 'Vice-Chancellor’s International Excellence Award', provider: 'Victoria University of Wellington / Waikato', award: 'NZD 5,000 to NZD 15,000 Fee Reduction', eligibility: 'High-achieving international students enrolling in full-time degree programs.' },
        { id: 's4', name: 'South Asian Student Excellence Grant', provider: 'Canterbury & Massey Universities', award: 'NZD 3,000 to NZD 7,000 Waiver', eligibility: 'Awarded automatically to eligible Indian applicants meeting academic thresholds.' }
      ]
    },
    admissionIntakes: {
      intro: 'New Zealand runs two major semesters corresponding to the Southern Hemisphere academic cycle.',
      items: [
        { name: 'Semester 1 (Primary Intake)', period: 'February / March', deadline: 'October – November', remarks: 'Main intake offering all courses, scholarships, and comprehensive orientation programs.' },
        { name: 'Semester 2 (Secondary Intake)', period: 'July', deadline: 'April – May', remarks: 'Popular mid-year intake for Indian students finishing undergraduate degrees.' }
      ]
    },
    studyPrograms: {
      intro: 'Qualifications are accredited under the New Zealand Qualifications Framework (NZQF).',
      items: [
        { level: 'Bachelor’s Degree', duration: '3 Years (Level 7)', description: 'Broad undergraduate study combining theoretical foundations and industry placements.', outcomes: 'Qualifies for 3-Year Post-Study Work Visa' },
        { level: 'Master’s Degree (Coursework)', duration: '1 to 1.5 Years (Level 9)', description: 'Advanced career-focused professional postgraduate qualification.', outcomes: 'Qualifies for 3-Year Post-Study Work Visa & Spousal Work Visa' },
        { level: 'Master’s by Research', duration: '2 Years (Level 9)', description: 'Independent thesis research under supervision by university research professors.', outcomes: 'Pathway to doctoral studies and high PR points' },
        { level: 'Doctor of Philosophy (PhD)', duration: '3 to 4 Years (Level 10)', description: 'International PhD students pay the same low domestic tuition fees as New Zealand citizens!', outcomes: 'Domestic fee rates (~NZD $7,000/yr) & direct Green List PR' }
      ]
    },
    englishRequirements: {
      intro: 'Proof of English language competence is required for university enrollment and Immigration New Zealand visas.',
      ielts: { ug: 'Overall 6.0 (no band less than 5.5)', pg: 'Overall 6.5 (minimum 6.0 in each band)', notes: 'IELTS Academic accepted across all institutions.' },
      pte: { ug: 'Overall 50 to 52', pg: 'Overall 58 to 65 (minimum 50 in communicative skills)', notes: 'PTE Academic is widely preferred for fast automated scoring.' },
      toefl: { ug: 'Overall 70 to 80', pg: 'Overall 85 to 90', notes: 'TOEFL iBT test center scores accepted.' },
      duolingo: { ug: 'Overall 105 to 110', pg: 'Overall 115 to 125', notes: 'Accepted by selected institutions; check specific course requirements.' }
    },
    entryRequirements: {
      intro: 'New Zealand universities consider academic percentages, English proficiency, and Statement of Purpose.',
      criteria: [
        'Bachelor’s Admissions: 12th standard with 65% – 75%+ aggregate from recognized Indian boards.',
        'Master’s Admissions: Bachelor’s degree from a recognized university with minimum 60% – 65% aggregate.',
        'Acceptance of 3-Year Indian Bachelor’s degrees for select Master’s and Postgraduate Diplomas.',
        'Statement of Purpose (SOP) demonstrating genuine intention to study in New Zealand.',
        'Two Letters of Recommendation (LORs) and Updated CV.'
      ],
      academicPercentage: 'Minimum 60% for state universities.',
      backlogPolicy: 'Universities accept up to 5 to 10 backlogs provided academic performance is consistent.'
    },
    costOfStudying: {
      bachelorsTuition: 'NZD 24,000 to NZD 36,000 per year',
      mastersTuition: 'NZD 26,000 to NZD 42,000 per year',
      livingExpenses: 'NZD 20,000 per year (Official Immigration New Zealand living cost requirement)',
      healthInsurance: 'NZD 600 to NZD 800 per year (Mandatory medical and travel insurance)',
      visaFee: 'NZD $375 (Student Visa Fee)',
      additionalNotes: 'PhD students enjoy domestic tuition fees of only ~NZD 7,000 - 9,000/yr.'
    },
    documentsRequired: {
      admissionDocuments: [
        '10th and 12th Marksheets and Certificates',
        'Bachelor’s Semester Marksheets, Consolidated Transcript & Degree Certificate',
        'English Language Proficiency Scorecard (IELTS / PTE / TOEFL)',
        'Statement of Purpose (SOP) explaining study motivations',
        'Two Letters of Recommendation (LORs)',
        'Updated Resume / Curriculum Vitae',
        'Valid Passport copy'
      ],
      visaDocuments: [
        'Offer of Place from an approved New Zealand education provider',
        'Tuition fee payment receipt (or Approval in Principle - AIP letter for fee payment)',
        'Proof of funds: NZD 20,000 living expenses + 1 year tuition fee in bank savings or education loan',
        'FTS (Funds Transfer Scheme) account confirmation if utilizing ANZ New Zealand FTS',
        'Valid Passport with at least 6 months validity beyond intended stay',
        'Medical and Chest X-ray certificates from an approved panel clinic',
        'Police Clearance Certificate (PCC) for applicants over 17 years'
      ]
    },
    workOpportunities: {
      partTimeRules: 'Up to 20 hours per week during term time.',
      vacationRules: 'Full-time work allowed during scheduled Christmas, New Year, and summer breaks.',
      minimumWage: 'New Zealand national minimum wage is NZD $23.15 per hour.',
      postStudyWorkVisa: 'Up to 3-Year Post-Study Work Visa allowing open employment across New Zealand.'
    },
    prPathways: {
      intro: 'New Zealand offers clear residency pathways via the Green List and the Skilled Migrant Category.',
      pathways: [
        'Green List Straight to Residence: Immediate PR application for occupations on Tier 1 (engineering, ICT, medicine).',
        'Green List Work to Residence: Apply for PR after 2 years of working in a Tier 2 Green List role.',
        'Skilled Migrant Category (SMC): 6-Point system awarding points for New Zealand qualifications, income, and local experience.',
        'Post-Study Work Visa (3 Years): Ample duration to secure qualifying skilled employment and submit residency files.'
      ],
      disclaimer: 'Permanent residence is governed by Immigration New Zealand criteria and Green List occupation status.'
    },
    faqs: [
      { q: 'Why are all universities in New Zealand ranked in the world’s top 3%?', a: 'New Zealand maintains rigorous state-funded quality controls, ensuring that all 8 public universities (Auckland, Otago, Canterbury, etc.) consistently rank in the QS World Top 3%.' },
      { q: 'What is the Green List in New Zealand?', a: 'The Green List is a priority immigration register of high-demand roles in engineering, IT, healthcare, and construction that provides fast-track or direct pathways to New Zealand Permanent Residency.' },
      { q: 'How long is the Post-Study Work Visa in New Zealand?', a: 'International students completing Bachelor’s degrees (Level 7) and Master’s degrees (Level 9) qualify for a 3-Year Post-Study Work Visa.' },
      { q: 'Can my spouse work while I study in New Zealand?', a: 'Yes! If you are enrolled in a Master’s degree (Level 9) or an eligible Green List qualification, your spouse can apply for an open work visa with full-time work rights.' },
      { q: 'What is the Funds Transfer Scheme (FTS) for New Zealand?', a: 'The FTS is a secure banking arrangement with ANZ Bank New Zealand where students transfer living funds (NZD 20,000) into a blocked account, which is released monthly once in New Zealand.' },
      { q: 'How many hours can I work part-time in New Zealand?', a: 'International students can work up to 20 hours per week during term time and full-time during official vacations.' },
      { q: 'Are international PhD students charged domestic tuition fees in New Zealand?', a: 'Yes! International PhD students pay the exact same low tuition fee as local Kiwi students (~NZD 7,000 - 9,000/year).' },
      { q: 'What English test is required for New Zealand?', a: 'IELTS Academic (6.5 for Master’s, 6.0 for Bachelor’s) or PTE Academic (58 for Master’s, 50 for Bachelor’s) are the most popular.' },
      { q: 'How much living expense do I need to show for a New Zealand student visa?', a: 'Immigration New Zealand requires evidence of NZD 20,000 for 12 months of living expenses.' },
      { q: 'How does IQ Overseas assist students applying to New Zealand?', a: 'IQ Overseas provides comprehensive counseling, university shortlisting across all 8 universities, SOP reviews, FTS guidance, medical coordination, and visa filing.' }
    ]
  },

  // 8. Malaysia
  malaysia: {
    id: 'country-08',
    slug: 'malaysia',
    name: 'Malaysia',
    flag: '🇲🇾',
    isPublished: true,
    order: 8,
    seoTitle: 'Study in Malaysia – UK & Australian Branch Campuses, Low Cost & Easy Visa | IQ Overseas',
    seoDescription: 'Complete guide to studying in Malaysia for Indian students. Learn about Monash & Nottingham branch campuses, American degree transfer (ADTP), affordable costs, and student visa guidance with IQ Overseas.',
    heroBanner: {
      imageUrl: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1920&q=80',
      headline: 'Study in Malaysia – British & Australian Degrees at One-Third the Cost',
      subtitle: 'Earn world-class UK and Australian qualifications from branch campuses like Monash and Nottingham in Southeast Asia’s safest education hub.',
      badge: 'Foreign Branch Campuses & High Affordability',
      stats: [
        { label: 'Intl Campuses', value: 'Monash, Nottingham, Curtin' },
        { label: 'Cost Savings', value: 'Save up to 60%' },
        { label: 'Visa Approval', value: 'Fast Turnaround' },
        { label: 'Language', value: '100% English Taught' }
      ]
    },
    introduction: {
      heading: 'Study in Malaysia – Expert Higher Education Advisory in Guntur & AP',
      subheading: 'Earn prestigious foreign university degrees while enjoying low living expenses and modern tropical campus life.',
      paragraphs: [
        'Malaysia has emerged as a premier higher education hub in Southeast Asia, attracting over 130,000 international students from over 160 nations. The country offers a unique educational advantage: international branch campuses of top-ranked British and Australian universities (such as Monash University Australia, University of Nottingham UK, Curtin University, and Heriot-Watt University UK).',
        'At these international branch campuses in Malaysia, you receive the exact same curriculum, examination papers, and degree certificates as students studying at the home campuses in Melbourne or the UK, but at one-third of the tuition fees and living expenses! Furthermore, Malaysia’s American Degree Transfer Program (ADTP) allows students to complete 2 years in Malaysia and transfer seamlessly to top US universities.',
        'At IQ Overseas, we guide students through EMGS (Education Malaysia Global Services) visa processing, university shortlisting, accommodation reservations in modern student precincts, and currency transfer protocols.'
      ],
      highlights: [
        'Direct branch campuses of Monash (Australia Top 50) and Nottingham (UK Russell Group)',
        'Identical degree certificates awarded as the parent UK or Australian campuses',
        'Extremely affordable tuition fees (USD $6,000 - $12,000/year) and living costs (USD $350 - $500/month)',
        'Simplified, welcoming student visa approval process via EMGS with no embassy interviews'
      ]
    },
    quickFacts: {
      country: 'Malaysia',
      capital: 'Kuala Lumpur',
      popularCities: 'Kuala Lumpur, Penang, Johor Bahru, Selangor, Cyberjaya',
      currency: 'Malaysian Ringgit (MYR / RM)',
      language: 'English (Widely spoken and primary language of university instruction)',
      popularIntakes: 'February/March, July/August, and October/November',
      topCourses: 'Computer Science & AI, Business Administration, Mechanical Engineering, Biomedical Sciences, Digital Marketing',
      avgTuitionFee: 'USD $6,000 to USD $14,000 per year (MYR 25,000 - 60,000)',
      postStudyWork: 'Employment Pass & Digital Nomad DE Rantau visa pathways; Transfer options to UK/Australia',
      workRights: 'Part-time work permitted during semester breaks up to 20 hours per week in designated sectors'
    },
    educationLandscape: {
      intro: 'Malaysia’s higher education system is overseen by the Ministry of Higher Education (MOHE) and the Malaysian Qualifications Agency (MQA).',
      bulletPoints: [
        'Foreign University Branch Campuses: Monash University Malaysia, University of Nottingham Malaysia, Curtin University, Swinburne University.',
        'Premier Research Universities: Top-ranked public institutions like Universiti Malaya (UM - World Rank 60) and Universiti Putra Malaysia (UPM).',
        'Private Universities & Colleges: Dynamic private institutions like Taylor’s University, Sunway University, and APU (Asia Pacific University) known for high tech employability.'
      ],
      comparisonTable: [
        { aspect: 'Duration', undergraduate: '3 Years (UK model) / 4 Years (US/Engg model)', postgraduate: '1 to 2 Years (Master’s)' },
        { aspect: 'Degree Awarded', undergraduate: 'Direct UK / Australian degree certificate', postgraduate: 'Direct UK / Australian degree certificate' },
        { aspect: 'Tuition Fees', undergraduate: 'USD $6,000 - $12,000 / year', postgraduate: 'USD $7,000 - $15,000 / year' },
        { aspect: 'Living Cost', undergraduate: 'USD $4,000 - $6,000 / year', postgraduate: 'USD $4,000 - $6,000 / year' },
        { aspect: 'Transfer Options', undergraduate: '2+1 or 1+2 transfer to UK, Australia, or US', postgraduate: 'Dual degree options with European partners' }
      ]
    },
    whyStudyBenefits: [
      { id: '1', title: 'Identical UK & Australian Degrees', description: 'Earn the exact same internationally recognized degree certificate from Monash or Nottingham at 60% lower cost.' },
      { id: '2', title: 'Exceptional Affordability', description: 'Tuition fees and living expenses are among the lowest in the world for world-ranked higher education.' },
      { id: '3', title: 'Transfer Options (2+1 Pathways)', description: 'Spend 1 or 2 years in Malaysia and transfer seamlessly to parent campuses in the UK, Australia, or USA.' },
      { id: '4', title: 'Modern Infrastructure & Tech Hubs', description: 'Cyberjaya (Malaysia’s Silicon Valley) hosts regional technology centers for multinational tech firms.' },
      { id: '5', title: 'Fast & Streamlined Visa System', description: 'Student visas are processed centrally via EMGS with high approval rates and zero embassy interviews.' },
      { id: '6', title: 'Safe Multicultural Environment', description: 'A peaceful, multicultural country with world-famous culinary diversity, tropical weather, and high safety.' }
    ],
    topCourses: [
      { id: 'c1', title: 'BSc / MSc in Computer Science & Cyber Security', category: 'Technology', duration: '3 - 4 Years', description: 'Accredited by British and Australian computing societies with software engineering practicums.', careerRoles: ['Software Engineer', 'Cyber Security Analyst', 'DevOps Specialist'] },
      { id: 'c2', title: 'Master of Business Administration (MBA)', category: 'Business', duration: '1 - 1.5 Years', description: 'Global business strategy, emerging market economics, and multinational corporate finance.', careerRoles: ['Business Consultant', 'Operations Manager', 'Project Director'] },
      { id: 'c3', title: 'BEng / MEng in Mechanical & Mechatronics Engineering', category: 'Engineering', duration: '4 Years', description: 'Washington Accord accredited programs enabling global engineering practice.', careerRoles: ['Mechatronics Engineer', 'Automation Lead', 'Design Engineer'] },
      { id: 'c4', title: 'BSc in Biotechnology & Biomedical Sciences', category: 'Science', duration: '3 Years', description: 'Pharmaceutical testing, genetic engineering, and clinical research in modern laboratories.', careerRoles: ['Biomedical Scientist', 'Clinical Associate', 'Research Fellow'] },
      { id: 'c5', title: 'BA in International Business & Digital Marketing', category: 'Business', duration: '3 Years', description: 'E-commerce, digital brand growth, and supply chain logistics in the ASEAN trade corridor.', careerRoles: ['Digital Marketing Manager', 'E-commerce Specialist', 'Brand Strategist'] }
    ],
    scholarships: {
      intro: 'Malaysian private and branch campuses offer attractive tuition discounts and merit scholarships for international applicants.',
      items: [
        { id: 's1', name: 'Malaysian International Scholarship (MIS)', provider: 'Ministry of Higher Education Malaysia', award: 'Full Tuition + Monthly Living Allowance', eligibility: 'Government scholarship for high-achieving postgraduate and PhD candidates.' },
        { id: 's2', name: 'Monash / Nottingham High Achiever Scholarships', provider: 'Foreign Branch Campuses', award: '25% to 50% Tuition Fee Waiver', eligibility: 'Awarded automatically to students with 80%+ marks in Indian 12th or Bachelor’s.' },
        { id: 's3', name: 'APU Merit Awards for Tech Talents', provider: 'Asia Pacific University', award: '15% to 30% Fee Reduction', eligibility: 'Outstanding performance in mathematics, computing, and pre-university exams.' },
        { id: 's4', name: 'Taylor’s & Sunway Excellence Awards', provider: 'Private University Foundations', award: 'Up to USD $5,000 Waiver', eligibility: 'High GPA applicants demonstrating leadership and community participation.' }
      ]
    },
    admissionIntakes: {
      intro: 'Malaysia offers rolling intakes throughout the year across different universities.',
      items: [
        { name: 'Semester 1 (Spring/Early Intake)', period: 'February / March', deadline: 'November – December', remarks: 'Main intake for private and international branch campuses.' },
        { name: 'Semester 2 (Summer Intake)', period: 'July / August', deadline: 'April – May', remarks: 'Major intake for undergraduate and postgraduate degree courses.' },
        { name: 'Semester 3 (Autumn Intake)', period: 'October / November', deadline: 'August – September', remarks: 'Available for selected business, computing, and foundation programs.' }
      ]
    },
    studyPrograms: {
      intro: 'Diverse program pathways from foundation diplomas to direct foreign degrees and American transfer programs.',
      items: [
        { level: 'Bachelor’s Degree (Honours)', duration: '3 to 4 Years', description: 'Awarded directly by parent UK/Australian universities or premier Malaysian universities.', outcomes: 'Recognized globally; transfer credits to UK/Australia' },
        { level: 'Master’s Degree (Coursework / Research)', duration: '1 to 2 Years', description: 'Accelerated postgraduate studies with corporate project consulting.', outcomes: 'Direct entry into ASEAN and global multinational firms' },
        { level: 'American Degree Transfer Program (ADTP)', duration: '2 Years Malaysia + 2 Years USA', description: 'Complete first 2 years in Malaysia and transfer to top US universities, saving tens of thousands of dollars.', outcomes: 'Graduate with an accredited US university degree' }
      ]
    },
    englishRequirements: {
      intro: 'Most universities teach entirely in English; test requirements are straightforward.',
      ielts: { ug: 'Overall 5.5 to 6.0', pg: 'Overall 6.0 to 6.5', notes: 'Academic module required. Many universities offer English certification programs.' },
      pte: { ug: 'Overall 46 to 50', pg: 'Overall 50 to 58', notes: 'PTE Academic accepted across all institutions.' },
      toefl: { ug: 'Overall 60 to 70', pg: 'Overall 79 to 85', notes: 'TOEFL iBT accepted.' },
      duolingo: { ug: 'Overall 95 to 105', pg: 'Overall 105 to 115', notes: 'Accepted by selected private universities.' }
    },
    entryRequirements: {
      intro: 'Admission requirements are clear and transparent.',
      criteria: [
        'Bachelor’s Admissions: 12th standard with 55% – 70% aggregate from recognized Indian boards.',
        'Master’s Admissions: Bachelor’s degree from a recognized university with minimum 55% aggregate.',
        'No complicated aptitude tests like GRE or GMAT required for most master’s programs.',
        'Medical health checkup clearance submitted via the EMGS portal.',
        'Copy of all academic transcripts, certificates, and passport.'
      ],
      academicPercentage: 'Minimum 55% for most degree courses; 65%+ for Monash and Nottingham.',
      backlogPolicy: 'Flexible backlog policy; universities evaluate overall academic trajectory.'
    },
    costOfStudying: {
      bachelorsTuition: 'USD $6,000 to USD $12,000 per year (MYR 25,000 - 55,000)',
      mastersTuition: 'USD $7,000 to USD $15,000 per year (MYR 30,000 - 65,000)',
      livingExpenses: 'USD $4,000 to USD $6,000 per year (MYR 1,500 - 2,200/month)',
      healthInsurance: 'Included in EMGS student visa package (~MYR 500/year)',
      visaFee: 'EMGS Visa Processing Fee (~MYR 2,000 - 2,500 including insurance and medical)',
      additionalNotes: 'One of the lowest living expense structures in the world for international students.'
    },
    documentsRequired: {
      admissionDocuments: [
        '10th and 12th Marksheets and Passing Certificates',
        'Bachelor’s Semester Marksheets and Degree Certificate (for PG)',
        'English Language Proficiency Scorecard (or MOI certificate)',
        'Passport copies of all pages (including blank pages)',
        'Passport-size photographs with white background (EMGS specifications)',
        'Updated Resume / Curriculum Vitae'
      ],
      visaDocuments: [
        'eVAL (Electronic Visa Approval Letter) issued by EMGS / Immigration Department of Malaysia',
        'University Letter of Offer and Acceptance',
        'Single Entry Visa (SEV) stamped in India prior to departure',
        'Pre-arrival health declaration and medical report',
        'Valid Passport with minimum 18 months validity'
      ]
    },
    workOpportunities: {
      partTimeRules: 'Part-time work permitted during semester breaks and holidays up to 20 hours per week in designated sectors.',
      vacationRules: 'Students can intern full-time during official university industrial training semesters.',
      minimumWage: 'Malaysian national minimum wage is MYR 1,500 per month (~USD $320).',
      postStudyWorkVisa: 'Graduates can transition to Employment Passes or Digital Nomad DE Rantau visas; many students transfer to UK/Australia.'
    },
    prPathways: {
      intro: 'While Malaysia is primarily an education and corporate career launchpad, professionals secure long-term passes.',
      pathways: [
        'Employment Pass (EP): Work permit issued to skilled foreign professionals with qualifying corporate employment.',
        'DE Rantau Digital Nomad Pass: Multi-year visa for tech professionals and digital specialists.',
        'Global Transfer Pathways: Transfer degrees seamlessly to the UK, Australia, or Singapore for permanent settlement.'
      ],
      disclaimer: 'Permanent residence in Malaysia is selective; most students leverage Malaysian degrees for global employment.'
    },
    faqs: [
      { q: 'Can I earn a UK or Australian degree in Malaysia?', a: 'Yes! International branch campuses such as Monash University (Australia) and University of Nottingham (UK) award the exact same degree certificates in Malaysia as their home campuses at one-third of the cost.' },
      { q: 'What is the American Degree Transfer Program (ADTP) in Malaysia?', a: 'ADTP allows students to study the first 2 years of an American Bachelor’s degree in Malaysia and transfer the credits to top US universities for the final 2 years, saving over $50,000 in tuition.' },
      { q: 'Is English widely spoken in Malaysia?', a: 'Yes! English is the primary medium of instruction across all Malaysian universities and is widely spoken in daily commerce, dining, and city transit.' },
      { q: 'What is EMGS in Malaysia?', a: 'EMGS (Education Malaysia Global Services) is the official government agency that centrally processes international student admissions, health screening, and student visas.' },
      { q: 'How much does it cost to study in Malaysia?', a: 'Tuition fees average USD $6,000 to $12,000 per year, and living expenses average only USD $350 to $500 per month, making it exceptionally budget-friendly.' },
      { q: 'Do I need to attend an embassy interview for a Malaysia student visa?', a: 'No! Malaysia issues an Electronic Visa Approval Letter (eVAL) online through EMGS without requiring in-person embassy interviews.' },
      { q: 'Are degrees from Malaysia recognized globally?', a: 'Yes! Degrees from Malaysian universities are accredited by the Malaysian Qualifications Agency (MQA) and recognized by employers, WES, and universities worldwide.' },
      { q: 'Can I transfer from a Malaysian branch campus to Australia or the UK?', a: 'Yes! Students studying at Monash Malaysia, Nottingham Malaysia, or Curtin Malaysia can transfer to the parent campus after 1 or 2 years.' },
      { q: 'What are the top universities in Malaysia?', a: 'Monash University Malaysia, University of Nottingham Malaysia, Universiti Malaya (UM), Taylor’s University, Sunway University, and Asia Pacific University (APU).' },
      { q: 'How does IQ Overseas help students applying to Malaysia?', a: 'IQ Overseas provides personalized counseling, branch campus matching, EMGS visa filing, hostel booking, and pre-departure briefings from our Guntur office.' }
    ]
  },

  // 9. Singapore
  singapore: {
    id: 'country-09',
    slug: 'singapore',
    name: 'Singapore',
    flag: '🇸🇬',
    isPublished: true,
    order: 9,
    seoTitle: 'Study in Singapore – Top Universities (NUS, NTU), High Tech Hub & Careers | IQ Overseas',
    seoDescription: 'Complete guide to studying in Singapore for Indian students. Learn about NUS, NTU, leading private institutes, high starting salaries, tuition grants, and Employment Passes with IQ Overseas.',
    heroBanner: {
      imageUrl: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1920&q=80',
      headline: 'Study in Singapore – Asia’s Global Financial & Technology Capital',
      subtitle: 'Study at world top-20 universities like NUS and NTU, or top international management institutes in the safest and most technologically advanced city-state in the world.',
      badge: 'World Top 20 Universities & Global FinTech Hub',
      stats: [
        { label: 'Global Ranking', value: 'NUS #8 World' },
        { label: 'Safety Index', value: 'World #1' },
        { label: 'Starting Salary', value: 'SGD $4,500+ / mo' },
        { label: 'Corporate HQs', value: '7,000+ Multinationals' }
      ]
    },
    introduction: {
      heading: 'Study in Singapore – Premier Overseas Education Consultants in Guntur & AP',
      subheading: 'Launch your international career at the premier gateway to Asian and global commerce.',
      paragraphs: [
        'Singapore stands as a global pinnacle of academic excellence, technological innovation, and financial power. Despite its compact geographical size, Singapore punches far above its weight in global education: the National University of Singapore (NUS) and Nanyang Technological University (NTU) consistently rank in the world’s top 15 to 20 universities, rivaling Oxford, Harvard, and Cambridge.',
        'Beyond public universities, Singapore hosts premier private institutes and international business schools like INSEAD, ESSEC, James Cook University Singapore, and SIM Global Education (partnering with University of London, RMIT, and University of Birmingham). With over 7,000 multinational corporations maintaining their Asia-Pacific headquarters in Singapore, graduates enjoy direct recruitment into high-paying global banking, consulting, technology, and logistics roles.',
        'At IQ Overseas, our specialized counselors guide you through Student’s Pass applications, Ministry of Education (MOE) tuition grants, university entrance requirements, and post-graduation Employment Pass (EP) transitions.'
      ],
      highlights: [
        'Home to NUS and NTU, ranked among the top 15 universities in the entire world',
        'Over 7,000 multinational corporations providing top-tier corporate recruitment',
        'Average graduate starting salaries ranging from SGD $4,200 to $6,000+ per month',
        'Cleanest, safest, and most digitally advanced metropolitan city in the world'
      ]
    },
    quickFacts: {
      country: 'Singapore',
      capital: 'Singapore',
      popularCities: 'Singapore City',
      currency: 'Singapore Dollar (SGD / S$)',
      language: 'English (Primary official working and educational language)',
      popularIntakes: 'August (Main public intake) & January / May / September (Private institutes)',
      topCourses: 'Computer Science, Artificial Intelligence, FinTech, MBA, International Supply Chain, Finance & Banking',
      avgTuitionFee: 'SGD 18,000 to SGD 38,000 per year',
      postStudyWork: 'Long-Term Visit Pass (LTVP) for 1 Year to seek employment; Employment Pass (EP)',
      workRights: 'Up to 16 hours per week for approved institutions; Full-time during vacations'
    },
    educationLandscape: {
      intro: 'Singapore’s education landscape features world-renowned autonomous public universities and accredited private education institutions.',
      bulletPoints: [
        'Autonomous Public Universities: National University of Singapore (NUS), Nanyang Technological University (NTU), Singapore Management University (SMU), SUTD.',
        'Foreign Specialized Campuses: INSEAD, ESSEC Business School, James Cook University Singapore, Curtin Singapore.',
        'Private Education Institutions (PEIs): Institutes registered with EduTrust (like SIM Global Education and PSB Academy) offering accredited UK/Australian partner degrees.'
      ],
      comparisonTable: [
        { aspect: 'Duration', undergraduate: '3 to 4 Years', postgraduate: '1 to 1.5 Years (Master’s)' },
        { aspect: 'Tuition Fees', undergraduate: 'SGD 18,000 - SGD 35,000 / year', postgraduate: 'SGD 22,000 - SGD 45,000 / total course' },
        { aspect: 'Global Ranking', undergraduate: 'NUS (#8 World) / NTU (#15 World)', postgraduate: 'INSEAD (#2 World MBA) / NUS / NTU' },
        { aspect: 'Work During Study', undergraduate: '16 hrs/week for public/EduTrust institutions', postgraduate: '16 hrs/week for approved universities' },
        { aspect: 'Post-Study Pass', undergraduate: '1-Year Long-Term Visit Pass (LTVP)', postgraduate: '1-Year LTVP & Employment Pass (EP)' }
      ]
    },
    whyStudyBenefits: [
      { id: '1', title: 'World Top-20 Universities', description: 'Study at NUS or NTU, ranked alongside Harvard, Oxford, and MIT for engineering, business, and sciences.' },
      { id: '2', title: '7,000+ Multinational HQs', description: 'Network directly with Fortune 500 regional headquarters including Google, Apple, Meta, DBS, and Standard Chartered.' },
      { id: '3', title: 'High Starting Salaries', description: 'Graduates in computer science and finance routinely command starting salaries of SGD $4,500 to $6,500/month.' },
      { id: '4', title: 'MOE Service Obligation Grants', description: 'Singapore government offers substantial tuition subsidies in exchange for working 3 years in Singapore after graduation.' },
      { id: '5', title: 'World’s Safest Modern City', description: 'Consistently ranked #1 globally for public safety, clean environment, world-class healthcare, and transportation.' },
      { id: '6', title: 'Proximity to India', description: 'Just a 4 to 5-hour direct flight from India with minimal time zone difference, making family visits seamless.' }
    ],
    topCourses: [
      { id: 'c1', title: 'MSc in Computer Science & Artificial Intelligence', category: 'Technology', duration: '1 - 1.5 Years', description: 'Pioneering AI research, robotics, and cyber systems in Asia’s foremost digital innovation center.', careerRoles: ['AI Specialist', 'Software Engineer', 'Data Scientist'] },
      { id: 'c2', title: 'Master of Business Administration (MBA)', category: 'Business', duration: '1 - 1.5 Years', description: 'INSEAD, NUS, and NTU top-ranked MBA programs focusing on Asian and global business strategy.', careerRoles: ['Management Consultant', 'Investment Director', 'Product Manager'] },
      { id: 'c3', title: 'MSc in Financial Technology (FinTech)', category: 'Finance', duration: '1 Year', description: 'Algorithmic trading, blockchain, and digital asset regulation in Asia’s financial capital.', careerRoles: ['FinTech Strategist', 'Risk Analyst', 'Quantitative Trader'] },
      { id: 'c4', title: 'Master of Supply Chain & Maritime Logistics', category: 'Logistics', duration: '1 Year', description: 'Maritime economics and smart logistics in the world’s busiest transshipment hub.', careerRoles: ['Supply Chain Director', 'Logistics Operations Lead', 'Port Strategist'] },
      { id: 'c5', title: 'MSc in Precision Engineering & Smart Manufacturing', category: 'Engineering', duration: '1.5 Years', description: 'Semiconductor manufacturing, automation, and advanced robotics.', careerRoles: ['Manufacturing Engineer', 'Robotics Lead', 'Process Specialist'] }
    ],
    scholarships: {
      intro: 'Singapore offers competitive tuition subsidies and university fellowships for high-caliber international candidates.',
      items: [
        { id: 's1', name: 'Singapore Ministry of Education (MOE) Tuition Grant', provider: 'Ministry of Education Singapore', award: 'Covers up to 50% of Tuition Fees', eligibility: 'Awarded to students who agree to work in a Singapore-registered entity for 3 years post-graduation.' },
        { id: 's2', name: 'NUS / NTU Research Scholarships', provider: 'Autonomous Universities', award: 'Full Tuition Waiver + SGD $2,200 - $2,700/month Stipend', eligibility: 'Awarded to high-ranking candidates admitted to Master’s by Research and PhD programs.' },
        { id: 's3', name: 'Singapore International Graduate Award (SINGA)', provider: 'A*STAR & Universities', award: 'Full PhD Tuition + SGD $2,200 - $2,700/mo + Airfare', eligibility: 'Global scholars pursuing doctoral research in science and engineering.' },
        { id: 's4', name: 'Private Institute Merit Bursaries', provider: 'SIM, JCU, PSB', award: 'SGD $3,000 to SGD $8,000 Fee Reduction', eligibility: 'Awarded based on academic excellence in 12th or Indian Bachelor’s degree.' }
      ]
    },
    admissionIntakes: {
      intro: 'Autonomous universities primarily take in students in August; private institutes feature multiple rolling intakes.',
      items: [
        { name: 'August Intake (Primary Public Universities)', period: 'August', deadline: 'December – February', remarks: 'Main intake for NUS, NTU, and SMU undergraduate and postgraduate programs.' },
        { name: 'January / February Intake', period: 'January – February', deadline: 'August – October', remarks: 'Secondary intake for select Master’s programs at public universities and private institutes.' },
        { name: 'Rolling Intakes (May / July / October)', period: 'Year-round', deadline: '2 months prior', remarks: 'Offered by private education institutes (JCU, SIM, Curtin Singapore).' }
      ]
    },
    studyPrograms: {
      intro: 'Singapore provides streamlined, intensive degree tracks designed for rapid entry into top corporate careers.',
      items: [
        { level: 'Bachelor’s Degree', duration: '3 to 4 Years', description: 'Rigorous undergraduate curriculum with global corporate internships.', outcomes: 'Recognized by world top employers; LTVP stay-back' },
        { level: 'Master’s Degree (Coursework)', duration: '1 to 1.5 Years', description: 'Intensive professional degree designed for high-impact industry leadership.', outcomes: 'Qualifies for 1-Year LTVP and Employment Pass' },
        { level: 'Master’s by Research / PhD', duration: '2 to 4 Years', description: 'Fully funded research positions collaborating with A*STAR and global corporate labs.', outcomes: 'High starting salary and fast-track Singapore PR' }
      ]
    },
    englishRequirements: {
      intro: 'English is the primary language of instruction and administration in Singapore.',
      ielts: { ug: 'Overall 6.0 to 6.5', pg: 'Overall 6.5 to 7.0', notes: 'Academic module required.' },
      pte: { ug: 'Overall 50 to 54', pg: 'Overall 58 to 68', notes: 'Accepted by public universities and private institutions.' },
      toefl: { ug: 'Overall 80 to 85', pg: 'Overall 85 to 100', notes: 'TOEFL iBT accepted across all universities.' },
      duolingo: { ug: 'Overall 105 to 110', pg: 'Overall 115 to 125', notes: 'Accepted by selected private education institutes.' }
    },
    entryRequirements: {
      intro: 'Admissions to public universities (NUS/NTU) are highly competitive; private institutes offer accessible entry routes.',
      criteria: [
        'Public Universities: 12th grade with 90%+ aggregate (for UG) or Bachelor’s with First Class / 70%+ (for PG).',
        'Private Education Institutes: 12th grade with 60% – 70% (for UG) or Bachelor’s with 55% – 60% (for PG).',
        'GRE/GMAT: Required or highly recommended for top Master’s and MBA programs at NUS/NTU/SMU.',
        'Statement of Purpose and Two Professional / Academic Letters of Recommendation.',
        'Documented resume highlighting technical achievements and leadership.'
      ],
      academicPercentage: 'Minimum 55% for private institutes; 75%+ for public universities.',
      backlogPolicy: 'Public universities expect clean records; private institutes accept moderate backlogs.'
    },
    costOfStudying: {
      bachelorsTuition: 'SGD 18,000 to SGD 35,000 per year (Subsidized: SGD 12,000 - 20,000)',
      mastersTuition: 'SGD 22,000 to SGD 45,000 per year',
      livingExpenses: 'SGD 12,000 to SGD 18,000 per year (~SGD 1,000 - 1,500/month)',
      healthInsurance: 'SGD 200 to SGD 400 per year (University student medical insurance)',
      visaFee: 'SGD $30 (Application) + SGD $60 (Issuance Fee) for Student’s Pass',
      additionalNotes: 'Subsidized tuition is available under the MOE Tuition Grant in exchange for 3 years service in Singapore.'
    },
    documentsRequired: {
      admissionDocuments: [
        'Official 10th and 12th Grade Marksheets and Certificates',
        'Bachelor’s Semester Marksheets, Consolidated Transcript & Degree Certificate',
        'Standardized Test Scorecards (IELTS / TOEFL / PTE / GRE if applicable)',
        'Statement of Purpose (SOP) tailored for Singapore programs',
        'Two Letters of Recommendation (Academic / Professional)',
        'Updated Resume with project and internship details',
        'Valid Passport copy'
      ],
      visaDocuments: [
        'SOLAR (Student’s Pass Online Application & Registration) system confirmation from university',
        'In-Principle Approval (IPA) Letter issued by the Immigration & Checkpoints Authority (ICA)',
        'Valid Passport with at least 6 months validity',
        'eForm 16 submitted through the ICA portal',
        'Medical examination report including HIV and chest X-ray',
        'Proof of financial capability (bank statements covering 1 year expenses)'
      ]
    },
    workOpportunities: {
      partTimeRules: 'Up to 16 hours per week during term time for students at designated approved institutions (NUS, NTU, JCU, etc.).',
      vacationRules: 'Full-time work allowed during official university vacation breaks.',
      minimumWage: 'No statutory minimum wage; student part-time rates typically range from SGD $10 to $18 per hour.',
      postStudyWorkVisa: 'Long-Term Visit Pass (LTVP) allows graduates 1 full year to remain in Singapore and seek professional employment.'
    },
    prPathways: {
      intro: 'Singapore grants Permanent Residence (SPR) to skilled professionals through the Professional, Technical Personnel and Skilled Workers (PTS) scheme.',
      pathways: [
        'Employment Pass (EP): Work pass for professionals earning SGD $5,000+ per month ($5,500 in financial services).',
        'COMPASS Framework: Transparent points-based criteria evaluating qualifications, salary, diversity, and local hiring.',
        'Singapore Permanent Residence (SPR): EP holders can apply for PR under the PTS scheme after 1 to 2 years of local employment.',
        'MOE Service Obligation Holders: High transition rates to PR upon completing the 3-year post-graduation service bond.'
      ],
      disclaimer: 'Permanent residence is granted at the discretion of the Immigration & Checkpoints Authority (ICA).'
    },
    faqs: [
      { q: 'Why are NUS and NTU in Singapore ranked so highly globally?', a: 'NUS (#8 in the world) and NTU (#15 in the world) receive billions in government research funding, attract Nobel laureate faculty, and produce world-leading publications in AI, engineering, and business.' },
      { q: 'What is the Singapore MOE Tuition Grant?', a: 'The Ministry of Education (MOE) Tuition Grant subsidizes up to 50% of university tuition fees for international students in exchange for a commitment to work in a Singapore-based company for 3 years after graduation.' },
      { q: 'Can international students work part-time in Singapore?', a: 'Yes! International students enrolled at government universities (NUS, NTU, SMU) and approved institutions (like JCU Singapore) can work up to 16 hours per week during term time and full-time during vacations.' },
      { q: 'What is a Student’s Pass in Singapore?', a: 'A Student’s Pass is the official student visa issued by Singapore’s Immigration & Checkpoints Authority (ICA) via the online SOLAR system.' },
      { q: 'What is the Long-Term Visit Pass (LTVP) after graduation?', a: 'Graduates of recognized universities in Singapore can apply for a 1-year non-renewable LTVP, giving them 12 full months to seek professional corporate employment.' },
      { q: 'What are the average starting salaries in Singapore?', a: 'Starting salaries for graduates in technology, finance, and engineering typically range between SGD $4,200 and $6,000+ per month.' },
      { q: 'How long does a Master’s degree take in Singapore?', a: 'Most coursework Master’s degrees in Singapore take only 1 to 1.5 years to complete.' },
      { q: 'Is English required for daily life in Singapore?', a: 'Yes! English is the main working language of government, education, law, and business in Singapore.' },
      { q: 'What is the COMPASS framework for Singapore work passes?', a: 'COMPASS is a transparent points-based system that assesses foreign professionals for Employment Passes based on salary, qualifications, employer diversity, and national priority sectors.' },
      { q: 'How does IQ Overseas help students applying to Singapore?', a: 'IQ Overseas provides expert counseling, university shortlisting across NUS, NTU, and EduTrust private institutes, SOLAR visa processing, and pre-departure briefings.' }
    ]
  },

  // 10. Dubai (UAE)
  dubai: {
    id: 'country-10',
    slug: 'dubai',
    name: 'Dubai (UAE)',
    flag: '🇦🇪',
    isPublished: true,
    order: 10,
    seoTitle: 'Study in Dubai (UAE) – Top Universities, Tax-Free Careers, 100% Visa | IQ Overseas',
    seoDescription: 'Complete guide to studying in Dubai (UAE) for Indian students. Learn about British & Australian branch campuses, fast student visas, tax-free high salaries, costs, and career opportunities with IQ Overseas.',
    heroBanner: {
      imageUrl: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1920&q=80',
      headline: 'Study in Dubai – World-Class Global Degrees in a Tax-Free Economy',
      subtitle: 'Earn top-tier British, Australian, and American degrees at branch campuses in Dubai International Academic City with fast visa processing and high-paying tax-free careers.',
      badge: 'Tax-Free Incomes & Fast 100% Visa Approval',
      stats: [
        { label: 'Universities', value: '30+ Top Global' },
        { label: 'Visa Turnaround', value: '15 - 20 Days' },
        { label: 'Income Tax', value: '0% Tax-Free' },
        { label: 'Flight from India', value: 'Under 3.5 Hours' }
      ]
    },
    introduction: {
      heading: 'Study in Dubai – Premier UAE Study Abroad Advisors in Guntur & AP',
      subheading: 'Launch your global career at the crossroads of international trade, finance, and luxury enterprise.',
      paragraphs: [
        'Dubai has rapidly established itself as one of the world’s most dynamic, ultramodern international education hubs. Home to over 30 leading international branch campuses situated in purpose-built educational free zones (Dubai International Academic City - DIAC and Dubai Knowledge Park), Dubai offers students world-class British, Australian, and American qualifications without the high expenses or strict visa hurdles of western nations.',
        'Premier universities in Dubai include Heriot-Watt University Dubai (UK), University of Wollongong in Dubai (Australia), Murdoch University Dubai (Australia), Curtin University Dubai, Rochester Institute of Technology (USA), and Middlesex University Dubai (UK). You receive the exact same globally accredited degree as the home campus, with the option to transfer seamlessly to the UK or Australia after 1 or 2 years.',
        'Dubai boasts a 100% tax-free income environment, meaning international graduates retain their entire earnings upon entering the workforce. With over 90% international expatriate population and thousands of regional corporate headquarters, Dubai provides unparalleled corporate networking and employment opportunities. IQ Overseas manages your university admissions, student visa issuance, student accommodation, and travel assistance.'
      ],
      highlights: [
        'Over 30 top international branch campuses from the UK, Australia, and the USA',
        '100% tax-free salaries for graduates entering Dubai’s booming business and tech economy',
        'Fast and straightforward student visa processing with near 100% approval rates and no IELTS required by select universities',
        'Direct credit transfer options allowing students to complete 1 year in Dubai and graduate in the UK or Australia'
      ]
    },
    quickFacts: {
      country: 'United Arab Emirates (Dubai)',
      capital: 'Abu Dhabi (Dubai is the economic and educational capital)',
      popularCities: 'Dubai, Abu Dhabi, Sharjah',
      currency: 'United Arab Emirates Dirham (AED)',
      language: 'English (Primary language of commerce, education, and daily life)',
      popularIntakes: 'September/October (Autumn Intake) & January/February (Spring Intake)',
      topCourses: 'Computer Science, Artificial Intelligence, Business Analytics, International Business & MBA, Civil Engineering, Hospitality Management',
      avgTuitionFee: 'AED 38,000 to AED 75,000 per year (approx. USD $10,000 - $20,000)',
      postStudyWork: 'Green Visa (5-Year Residence), Golden Visa (10-Year for top graduates), and 2-Year Employment Visas',
      workRights: 'Part-time work permitted during studies in free zones and with university approval'
    },
    educationLandscape: {
      intro: 'Dubai’s higher education is overseen by the Knowledge and Human Development Authority (KHDA) and the UAE Ministry of Education (MOE).',
      bulletPoints: [
        'International Branch Campuses: Heriot-Watt University UK, University of Wollongong Australia, Middlesex University UK, Curtin University Australia, RIT USA.',
        'UAE National Universities: Premier federal universities such as UAE University and Zayed University.',
        'Private Specialized Institutions: Leading business, aviation, and digital media colleges offering accredited certifications.'
      ],
      comparisonTable: [
        { aspect: 'Duration', undergraduate: '3 Years (UK model) / 4 Years (US/Aus model)', postgraduate: '1 to 2 Years (Master’s)' },
        { aspect: 'Degree Awarded', undergraduate: 'Direct UK, Australian, or US degree certificate', postgraduate: 'Direct UK, Australian, or US degree certificate' },
        { aspect: 'Tuition Fees', undergraduate: 'AED 40,000 - AED 65,000 / year', postgraduate: 'AED 45,000 - AED 80,000 / total course' },
        { aspect: 'Transfer Options', undergraduate: '1+2 or 2+1 transfer to UK or Australia', postgraduate: 'Campus exchange programs with UK/Australia' },
        { aspect: 'Post-Graduation Visa', undergraduate: 'Green Visa / 2-Year Corporate Employment Visa', postgraduate: 'Golden Visa (for high GPA) / 2-Year Employment Visa' }
      ]
    },
    whyStudyBenefits: [
      { id: '1', title: '0% Tax-Free High Salaries', description: 'Graduates in Dubai enjoy 100% tax-free compensation packages across technology, banking, logistics, and consulting.' },
      { id: '2', title: 'Top UK & Australian Degrees', description: 'Earn identical degree certificates from prestigious UK and Australian universities without paying steep western living costs.' },
      { id: '3', title: 'Seamless Campus Transfers', description: 'Begin your studies in Dubai and transfer smoothly to parent campuses in the UK or Australia to graduate.' },
      { id: '4', title: 'Near 100% Visa Approval Rate', description: 'Student visas in Dubai are sponsored directly by the university with rapid 2 to 3-week turnaround and zero embassy interviews.' },
      { id: '5', title: 'World’s Safest International City', description: 'Ranked among the top 3 safest cities on earth with zero crime, world-class transit, and multicultural campuses.' },
      { id: '6', title: 'Close Proximity to India', description: 'Just a 3.5-hour direct flight from Hyderabad/Chennai/Vijayawada, allowing affordable weekend travel home.' }
    ],
    topCourses: [
      { id: 'c1', title: 'MSc in Computer Science, AI & Cyber Security', category: 'Technology', duration: '1 - 2 Years', description: 'Machine learning, smart city infrastructure, and blockchain in the Middle East’s primary tech hub.', careerRoles: ['Software Engineer', 'Cyber Security Lead', 'AI Specialist'] },
      { id: 'c2', title: 'Master of Business Administration (MBA)', category: 'Business', duration: '1 - 1.5 Years', description: 'Strategic leadership, venture financing, and multinational trade in the world’s fastest-growing enterprise hub.', careerRoles: ['Strategy Consultant', 'Operations Director', 'Business Development Lead'] },
      { id: 'c3', title: 'MSc in Construction Project Management & Civil Engineering', category: 'Engineering', duration: '1 - 2 Years', description: 'Megaproject engineering, BIM modeling, and smart building management across Dubai’s iconic skyline.', careerRoles: ['Project Manager', 'Structural Engineer', 'Site Operations Lead'] },
      { id: 'c4', title: 'MSc in International Business & Supply Chain Logistics', category: 'Logistics', duration: '1 Year', description: 'Jebel Ali port logistics, global air cargo routing, and digital supply chain architecture.', careerRoles: ['Supply Chain Manager', 'Logistics Director', 'Trade Specialist'] },
      { id: 'c5', title: 'International Hospitality & Luxury Tourism Management', category: 'Hospitality', duration: '1 - 2 Years', description: 'Global benchmark training in 7-star luxury resort management, events, and tourism governance.', careerRoles: ['Hotel General Manager', 'Luxury Brand Manager', 'Events Director'] },
      { id: 'c6', title: 'MSc in Finance, Banking & FinTech', category: 'Finance', duration: '1 Year', description: 'DIFC financial market regulation, wealth management, and digital payment systems.', careerRoles: ['Investment Analyst', 'Financial Manager', 'FinTech Specialist'] }
    ],
    scholarships: {
      intro: 'International branch campuses in Dubai offer generous merit-based fee discounts for Indian students.',
      items: [
        { id: 's1', name: 'Academic Merit Scholarship', provider: 'Heriot-Watt, Wollongong, Middlesex Dubai', award: '20% to 50% Tuition Fee Reduction', eligibility: 'Awarded automatically based on academic marks in 12th or Bachelor’s degree (typically 70%+).' },
        { id: 's2', name: 'Early Bird & Early Decision Grants', provider: 'Individual Dubai Universities', award: 'AED 3,000 to AED 10,000 Discount', eligibility: 'Awarded to students confirming admission and paying initial deposits before deadlines.' },
        { id: 's3', name: 'Sports & Leadership Excellence Awards', provider: 'Dubai University Foundations', award: '15% to 30% Fee Waiver', eligibility: 'Students demonstrating state or national level sports participation or civic leadership.' },
        { id: 's4', name: 'Alumni & Sibling Fee Concessions', provider: 'University Branch Campuses', award: '10% to 15% Ongoing Discount', eligibility: 'Awarded to candidates whose siblings or relatives have studied at the institution.' }
      ]
    },
    admissionIntakes: {
      intro: 'Dubai universities operate on two primary academic cycles with high scheduling flexibility.',
      items: [
        { name: 'September / October Intake (Major)', period: 'September – October', deadline: 'July – August', remarks: 'Main intake offering all academic programs, maximum scholarship funding, and student housing.' },
        { name: 'January / February Intake (Secondary)', period: 'January – February', deadline: 'November – December', remarks: 'Popular mid-year intake for students seeking spring admission.' },
        { name: 'April / May Intake (Select courses)', period: 'April – May', deadline: 'February – March', remarks: 'Offered by selected universities for foundation, language, and executive master’s.' }
      ]
    },
    studyPrograms: {
      intro: 'Earn accredited British, Australian, American, or UAE degrees accredited by the KHDA.',
      items: [
        { level: 'Bachelor’s Degree (Honours)', duration: '3 to 4 Years', description: 'Awarded by parent UK/Australian/US universities with global campus transfer rights.', outcomes: 'Identical certificate to UK or Australian parent campus' },
        { level: 'Master’s Degree (Taught / Coursework)', duration: '1 to 2 Years', description: 'Executive evening and weekend classes designed to allow students to work while completing degrees.', outcomes: 'Qualifies for 2-Year Employment Visas or Golden Visa' },
        { level: 'Doctor of Philosophy (PhD / DBA)', duration: '3 to 5 Years', description: 'Executive doctoral research programs addressing Middle Eastern and global commerce.', outcomes: 'Golden Visa eligibility and senior corporate leadership' }
      ]
    },
    englishRequirements: {
      intro: 'English proficiency requirements are flexible; many universities accept medium of instruction letters.',
      ielts: { ug: 'Overall 5.5 to 6.0', pg: 'Overall 6.0 to 6.5', notes: 'Academic module required; waivers available based on 12th English 70%+.' },
      pte: { ug: 'Overall 46 to 50', pg: 'Overall 52 to 58', notes: 'PTE Academic accepted across all branch campuses.' },
      toefl: { ug: 'Overall 65 to 70', pg: 'Overall 79 to 88', notes: 'TOEFL iBT accepted.' },
      duolingo: { ug: 'Overall 95 to 105', pg: 'Overall 105 to 115', notes: 'Accepted by select universities for direct admission.' }
    },
    entryRequirements: {
      intro: 'Admission requirements are clear and focused on academic achievements.',
      criteria: [
        'Bachelor’s Admissions: 12th standard with 55% – 75%+ aggregate from CBSE, ICSE, or State Boards.',
        'Master’s Admissions: Bachelor’s degree from a recognized university with minimum 50% – 60% aggregate.',
        'Acceptance of 3-Year Indian Bachelor’s degrees (B.Com, B.Sc, BCA, BBA) for direct Master’s entry.',
        'Statement of Purpose (SOP) and Letters of Recommendation.',
        'Medical fitness test clearance (blood test and chest X-ray) upon arrival in Dubai.'
      ],
      academicPercentage: 'Minimum 50% - 55% for most universities; 65%+ for prestigious scholarships.',
      backlogPolicy: 'Extremely flexible backlog policy; universities focus on overall GPA and recent course performance.'
    },
    costOfStudying: {
      bachelorsTuition: 'AED 38,000 to AED 65,000 per year (approx. USD $10,000 - $17,500)',
      mastersTuition: 'AED 45,000 to AED 75,000 per year (approx. USD $12,000 - $20,000)',
      livingExpenses: 'AED 24,000 to AED 40,000 per year (~AED 2,000 - 3,500/month for shared student housing and food)',
      healthInsurance: 'Included in the university student visa package (~AED 1,000 - 1,500/yr)',
      visaFee: 'AED 3,000 to AED 4,500 for 1-Year renewable Student Visa (sponsored by university)',
      additionalNotes: 'Part-time jobs or internships pay AED 2,500 to AED 5,000 per month, helping students cover living costs.'
    },
    documentsRequired: {
      admissionDocuments: [
        'Class 10th and 12th Marksheets and Passing Certificates',
        'Bachelor’s Semester Marksheets, Consolidated Transcript & Degree Certificate (for PG)',
        'English Language Proficiency Scorecard (or 12th English Medium certificate for waiver)',
        'Statement of Purpose (SOP) and Curriculum Vitae',
        'Two Letters of Recommendation (LORs)',
        'Valid Passport copy (color scan of all pages)',
        'Passport-size photographs with white background'
      ],
      visaDocuments: [
        'Official Admission Offer and Fee Receipt from the Dubai university',
        'Student Visa Application Form signed by the university',
        'Valid Passport with at least 6 months validity',
        'Medical fitness clearance certificate completed upon arrival in Dubai',
        'Emirates ID application biometric registration'
      ]
    },
    workOpportunities: {
      partTimeRules: 'Students are permitted to work part-time in free zone corporate hubs and with university career approvals.',
      vacationRules: 'Full-time internships permitted during scheduled semester vacations.',
      minimumWage: 'No statutory minimum wage; typical graduate starting salaries range from AED 8,000 to AED 16,000 per month tax-free.',
      postStudyWorkVisa: 'Graduates can transition directly to a 2-Year Corporate Employment Visa, 5-Year Green Visa, or 10-Year Golden Visa.'
    },
    prPathways: {
      intro: 'While the UAE does not grant traditional citizenship, it offers long-term residence visas that provide total security.',
      pathways: [
        'UAE Golden Visa (10 Years): Granted to high-performing university graduates with GPA of 3.8+ or specialized tech talent.',
        'UAE Green Visa (5 Years): Self-sponsored residence visa for skilled professionals and entrepreneurs without an employer sponsor.',
        'Standard 2-Year Renewable Employment Visa: Sponsored by your employer, renewable indefinitely as long as employed.',
        'Zero Income Tax: Accumulate substantial personal savings and investments in a booming world trade capital.'
      ],
      disclaimer: 'Residence permits are governed by the Federal Authority for Identity, Citizenship, Customs and Port Security (ICP).'
    },
    faqs: [
      { q: 'Is a degree from a Dubai university recognized in India and globally?', a: 'Yes! International branch campuses in Dubai (like Heriot-Watt, Wollongong, Curtin, RIT) award the exact same globally accredited degree certificates as their parent campuses in the UK, Australia, and USA.' },
      { q: 'Can I transfer from Dubai to the UK or Australia campus?', a: 'Yes! Most branch campuses allow students to complete 1 or 2 years in Dubai and transfer seamlessly to the home campus in the UK or Australia to complete their degree.' },
      { q: 'Is an IELTS score mandatory for studying in Dubai?', a: 'No, not for all universities. Many Dubai universities offer an English waiver if you scored 70%+ in 12th standard English or studied your degree in an English-medium college.' },
      { q: 'Are salaries in Dubai really 100% tax-free?', a: 'Yes! The UAE does not levy personal income tax on salaries. Whatever salary you negotiate with an employer is 100% yours to keep, spend, or remit back to India.' },
      { q: 'How long does a student visa take for Dubai?', a: 'Dubai student visas are sponsored directly by the university and typically take only 15 to 20 working days with near 100% approval rates and no embassy interviews.' },
      { q: 'What is the UAE Golden Visa for students?', a: 'The UAE Golden Visa is a 10-year self-sponsored residency visa granted to top high school graduates (95%+) and university graduates with a GPA of 3.8 and above.' },
      { q: 'How much does it cost to study in Dubai?', a: 'Tuition fees average AED 38,000 to AED 70,000 per year (USD $10,000 - $19,000), and living expenses average AED 2,000 to AED 3,500 per month.' },
      { q: 'Can international students work part-time in Dubai?', a: 'Yes! International students can work part-time or complete internships with approval from their university and the relevant free zone authority.' },
      { q: 'How far is Dubai from India?', a: 'Dubai is only a 3.5-hour direct flight from Hyderabad, Chennai, or Mumbai, making it one of the most accessible international study hubs.' },
      { q: 'How does IQ Overseas help students applying to Dubai?', a: 'IQ Overseas provides personalized counseling, university selection across 30+ Dubai branch campuses, visa processing, fee waivers, and hostel booking.' }
    ]
  }
};
