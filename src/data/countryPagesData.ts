export interface CountryDegreeContent {
  slug: string;
  degreeLevel: 'bachelors' | 'masters';
  countryName: string;
  flag: string;
  heroHeadline: string;
  heroSubtitle: string;
  heroTagline: string;
  badge: string;
  heroImage: string;
  quickFacts: {
    duration: string;
    intakes: string;
    postStudyWork: string;
    avgTuition: string;
    workRights: string;
    prPathway: string;
  };
  whyStudy: {
    title: string;
    desc: string;
  }[];
  popularPrograms: {
    title: string;
    category: string;
    duration: string;
    avgSalary: string;
    topRoles: string[];
    description: string;
  }[];
  topUniversities: {
    name: string;
    ranking: string;
    tuition: string;
    acceptanceRate: string;
    location: string;
    image: string;
  }[];
  costBreakdown: {
    tuition: string;
    living: string;
    insurance: string;
    misc: string;
    total: string;
  };
  scholarships: {
    name: string;
    award: string;
    coverage: string;
  }[];
  eligibility: {
    academicRequirements: string;
    standardizedTests: string;
    englishRequirements: string;
    financialSolvency: string;
  };
  visaGuide: {
    visaName: string;
    processingTime: string;
    proofOfFunds: string;
    interviewRequired: boolean;
    keyPoints: string[];
  };
  faqs: {
    q: string;
    a: string;
  }[];
}

export const COUNTRY_PAGES_DATA: Record<string, CountryDegreeContent> = {
  // ==========================================
  // BACHELORS IN THE USA
  // ==========================================
  'bachelors-usa': {
    slug: 'usa',
    degreeLevel: 'bachelors',
    countryName: 'United States',
    flag: '🇺🇸',
    heroHeadline: "Don't just learn, thrive! Choose US education for a transformative academic journey.",
    heroSubtitle: "Start your UG journey in the USA with 4-year world-recognized degrees, STEM OPT extensions, and presidential scholarships.",
    heroTagline: "Start your UG journey in the USA",
    badge: "Undergraduate Admissions 2025 - 2026",
    heroImage: "/images/destinations/usa-dest.png",
    quickFacts: {
      duration: "4 Years (120 - 130 Semester Credits)",
      intakes: "Fall (August/September) & Spring (January)",
      postStudyWork: "Up to 3 Years (12-Mo OPT + 24-Mo STEM Extension)",
      avgTuition: "$20,000 - $48,000 / Year (Public & Private)",
      workRights: "20 hrs/week On-Campus during semesters",
      prPathway: "H-1B Specialty Occupation & EB-2 / EB-3 Corporate Sponsorship"
    },
    whyStudy: [
      {
        title: "Curriculum Flexibility & Double Majors",
        desc: "US universities do not force you into a single track immediately. You take general education electives in Year 1-2, explore multiple passions, and can declare double majors (e.g. CS + Finance)."
      },
      {
        title: "3-Year STEM OPT Work Authorization",
        desc: "Graduates of designated STEM degrees (Science, Tech, Engineering, Math) enjoy 3 full years of paid work authorization in the USA without requiring an immediate H-1B visa lottery."
      },
      {
        title: "Paid Co-Op Internships & CPT",
        desc: "Curricular Practical Training (CPT) allows undergraduate students to work off-campus in high-paying internships at top tech and engineering companies before graduating."
      },
      {
        title: "Generous Presidential & Merit Scholarships",
        desc: "International undergraduates with high 12th board marks or strong Digital SAT scores can secure merit awards ranging from $5,000 to full 50%-100% tuition coverage."
      }
    ],
    popularPrograms: [
      {
        title: "B.S. in Computer Science & Artificial Intelligence",
        category: "Computer Science",
        duration: "4 Years",
        avgSalary: "$85,000 - $130,000",
        topRoles: ["Software Engineer", "AI Developer", "Cloud Architect"],
        description: "Comprehensive software engineering, algorithm design, machine learning, and systems architecture with top Silicon Valley recruiter connections."
      },
      {
        title: "B.S. in Mechanical & Aerospace Engineering",
        category: "Engineering",
        duration: "4 Years",
        avgSalary: "$78,000 - $115,000",
        topRoles: ["Robotics Engineer", "Thermal Systems Analyst", "Aerospace Specialist"],
        description: "ABET-accredited hands-on curriculum with computer-aided design (CAD), fluid dynamics, and cutting-edge robotics lab simulations."
      },
      {
        title: "B.S. in Finance & Quantitative Economics",
        category: "Business",
        duration: "4 Years",
        avgSalary: "$80,000 - $125,000",
        topRoles: ["Investment Banking Analyst", "Financial Modeler", "Risk Associate"],
        description: "Rigorous corporate valuation, Wall Street case studies, algorithmic trading, and Bloomberg Terminal portfolio management."
      },
      {
        title: "B.S. in Biomedical Sciences (Pre-Med Pathway)",
        category: "Healthcare",
        duration: "4 Years",
        avgSalary: "$70,000 - $105,000",
        topRoles: ["Clinical Research Associate", "Biotech Analyst", "Lab Scientist"],
        description: "Extensive laboratory immersion in molecular genetics, organic chemistry, and hospital clinical shadowing preparing for medical school."
      }
    ],
    topUniversities: [
      {
        name: "University of Texas at Arlington",
        ranking: "R1 Carnegie Doctoral Top Tier",
        tuition: "$24,500 / Year",
        acceptanceRate: "81%",
        location: "Arlington, Texas",
        image: "/images/program-bachelors-grand.png"
      },
      {
        name: "Northeastern University",
        ranking: "#1 in Co-Op Internships in USA",
        tuition: "$56,000 / Year",
        acceptanceRate: "18%",
        location: "Boston, Massachusetts",
        image: "/images/destinations-landmarks-grand.png"
      },
      {
        name: "Arizona State University",
        ranking: "#1 in Innovation in the US (US News)",
        tuition: "$31,000 / Year",
        acceptanceRate: "88%",
        location: "Tempe, Arizona",
        image: "/images/about-students-headquarters-grand.png"
      },
      {
        name: "Purdue University",
        ranking: "Top 10 US Engineering Institution",
        tuition: "$31,500 / Year",
        acceptanceRate: "52%",
        location: "West Lafayette, Indiana",
        image: "/images/hero-desktop.png"
      }
    ],
    costBreakdown: {
      tuition: "$22,000 - $42,000 / Year",
      living: "$10,000 - $15,000 / Year (Dorm & Meal Plan)",
      insurance: "$1,500 - $2,500 / Year",
      misc: "$2,000 / Year (Books & Supplies)",
      total: "$35,500 - $61,500 / Year (Before Scholarships)"
    },
    scholarships: [
      {
        name: "International Presidential Excellence Award",
        award: "$10,000 to $25,000 / Year (Renewable for 4 Years)",
        coverage: "Awarded automatically based on high school GPA (85%+) and Digital SAT (1350+)."
      },
      {
        name: "Out-of-State / Non-Resident Tuition Waiver",
        award: "Saves up to $15,000 / Year",
        coverage: "Enables international students with top merit to pay in-state resident tuition rates."
      },
      {
        name: "Global Ambassador Honors Scholarship",
        award: "$5,000 to $12,000 / Year",
        coverage: "Recognizes student leadership, extracurricular achievements, and community service."
      }
    ],
    eligibility: {
      academicRequirements: "Recognized 10+2 / Intermediate Certificate (CBSE, ICSE, or State Boards including AP/TS Board) with minimum 65% - 75%+ overall aggregate.",
      standardizedTests: "Digital SAT (1250 - 1450+) or ACT (26 - 32+) highly recommended for merit scholarships, though many universities remain test-optional.",
      englishRequirements: "IELTS Academic 6.5 (min 6.0 each), PTE Academic 58+, or TOEFL iBT 80+. Duolingo English Test (110+) accepted at many institutions.",
      financialSolvency: "Liquid financial proof (bank balance, fixed deposits, or education loan sanction) showing coverage for Year 1 tuition and living expenses (~$38,000 - $55,000)."
    },
    visaGuide: {
      visaName: "US F-1 Academic Student Visa",
      processingTime: "I-20 issued within 1-3 weeks; visa interview appointment varies by season",
      proofOfFunds: "Form I-20 requires institutional financial verification; Form DS-160 and SEVIS I-901 fee payment ($350)",
      interviewRequired: true,
      keyPoints: [
        "In-person visa interview at US Embassy/Consulate (Hyderabad, Chennai, Mumbai, Delhi)",
        "Demonstrate clear non-immigrant intent, academic readiness, and parent funding",
        "IQ Overseas conducts 3 full-length 1-on-1 mock interviews with certified visa counselors"
      ]
    },
    faqs: [
      {
        q: "Can Indian 12th board students apply directly for a Bachelor's in the USA?",
        a: "Yes! Indian 10+2 qualifications from CBSE, ICSE, and State Boards (including Andhra Pradesh and Telangana Intermediate) are fully recognized for direct 4-year undergraduate admissions."
      },
      {
        q: "What is the benefit of a 4-year degree compared to a 3-year degree?",
        a: "A 4-year US Bachelor's provides comprehensive coursework, hands-on labs, paid Co-Op internships, and satisfies all requirements worldwide for direct entry into Master's or PhD programs without requiring post-graduate bridging diplomas."
      },
      {
        q: "Can I change my major after arriving in the USA?",
        a: "Yes! One of the greatest features of US undergraduate education is that students can declare 'Undecided' or switch their major easily during the first two years without losing academic credits."
      },
      {
        q: "What is STEM OPT and how does it help international students?",
        a: "Under US immigration regulations, students graduating from STEM degree programs can work in the USA for up to 36 months (3 years) on their student visa, providing ample time to earn high salaries and transition to H-1B work visas."
      }
    ]
  },

  // ==========================================
  // MASTERS IN THE USA
  // ==========================================
  'masters-usa': {
    slug: 'usa',
    degreeLevel: 'masters',
    countryName: 'United States',
    flag: '🇺🇸',
    heroHeadline: "Accelerate your career in the world's innovation epicenter: Study Master's in the USA.",
    heroSubtitle: "Earn high ROI postgraduate degrees with 3-Year STEM OPT, graduate assistantships, and direct recruitment by Fortune 500 tech leaders.",
    heroTagline: "Start your Master's journey in the USA",
    badge: "Master's & STEM OPT Hub 2025 - 2026",
    heroImage: "/images/destinations/usa-dest.png",
    quickFacts: {
      duration: "1.5 to 2 Years (30 - 36 Graduate Credits)",
      intakes: "Fall (August/September), Spring (January) & Summer",
      postStudyWork: "Up to 3 Years (12-Mo Initial OPT + 24-Mo STEM Extension)",
      avgTuition: "$18,000 - $38,000 / Year",
      workRights: "20 hrs/week On-Campus (TA, RA, Graduate Assistant)",
      prPathway: "H-1B Cap-Exempt & Cap-Subject, EB-2 National Interest Waiver"
    },
    whyStudy: [
      {
        title: "Top Earning Potential & Career ROI",
        desc: "Graduates of US Master's in Computer Science, Data Science, AI, and Engineering command average starting packages from $95,000 to $160,000 with rapid multi-national career progression."
      },
      {
        title: "36-Month STEM OPT Work Rights",
        desc: "Over 85% of Master's programs guided by IQ Overseas carry official STEM designation, granting students 3 years of unrestricted full-time legal work rights in the US."
      },
      {
        title: "Graduate Assistantships (TA / RA / GA)",
        desc: "Teaching and Research Assistantships offer full or partial tuition fee waivers combined with a monthly living stipend ranging from $1,200 to $2,400."
      },
      {
        title: "Widespread GRE Waivers Available",
        desc: "Many top US universities now offer GRE waivers for students with strong undergraduate performance (65%+ / 3.0+ GPA) or relevant engineering work experience."
      }
    ],
    popularPrograms: [
      {
        title: "M.S. in Computer Science & Cloud Architecture",
        category: "Computer Science",
        duration: "1.5 - 2 Years",
        avgSalary: "$110,000 - $160,000",
        topRoles: ["Cloud Solutions Architect", "Senior Full-Stack Engineer", "Distributed Systems Lead"],
        description: "Advanced distributed computing, microservices, containerization, and advanced cybersecurity at premier tech research universities."
      },
      {
        title: "M.S. in Data Science & Machine Learning",
        category: "AI & Analytics",
        duration: "1.5 - 2 Years",
        avgSalary: "$105,000 - $155,000",
        topRoles: ["Principal Data Scientist", "Machine Learning Researcher", "Quantitative Strategist"],
        description: "High-level statistical modeling, deep neural networks, natural language processing, and big data infrastructure."
      },
      {
        title: "M.S. in Business Analytics (STEM MBA/MSBA)",
        category: "Business Analytics",
        duration: "1 - 1.5 Years",
        avgSalary: "$90,000 - $135,000",
        topRoles: ["Business Intelligence Manager", "Supply Chain Analyst", "Financial Analytics Lead"],
        description: "Intersection of strategic management, SQL, Tableau, predictive forecasting, and executive decision science."
      },
      {
        title: "M.S. in Electrical & Computer Engineering",
        category: "Engineering",
        duration: "2 Years",
        avgSalary: "$100,000 - $145,000",
        topRoles: ["VLSI Design Engineer", "Embedded Systems Architect", "Hardware Systems Specialist"],
        description: "Semiconductor design, integrated circuits, wireless networks, and IoT sensor technologies."
      }
    ],
    topUniversities: [
      {
        name: "University of Texas at Arlington",
        ranking: "R1 Carnegie Doctoral Institution",
        tuition: "$22,500 / Year",
        acceptanceRate: "81%",
        location: "Dallas-Fort Worth Metroplex, Texas",
        image: "/images/program-masters-grand.png"
      },
      {
        name: "University of North Texas",
        ranking: "Tier One Research University",
        tuition: "$19,800 / Year",
        acceptanceRate: "79%",
        location: "Denton, Texas",
        image: "/images/destinations-landmarks-grand.png"
      },
      {
        name: "George Mason University",
        ranking: "Top 70 US Public University",
        tuition: "$26,000 / Year",
        acceptanceRate: "89%",
        location: "Fairfax, Virginia (Washington DC Metro)",
        image: "/images/about-students-headquarters-grand.png"
      },
      {
        name: "University of South Florida",
        ranking: "Top 50 US Public University",
        tuition: "$21,000 / Year",
        acceptanceRate: "44%",
        location: "Tampa, Florida",
        image: "/images/hero-desktop.png"
      }
    ],
    costBreakdown: {
      tuition: "$18,000 - $34,000 / Year",
      living: "$9,000 - $14,000 / Year (Off-Campus Student Housing)",
      insurance: "$1,800 / Year",
      misc: "$1,500 / Year",
      total: "$30,300 - $51,300 / Year (Offset by Part-time / TA)"
    },
    scholarships: [
      {
        name: "Graduate Dean's Merit Scholarship",
        award: "$4,000 to $10,000 / Year",
        coverage: "Automatically considered upon application; often qualifies student for In-State tuition rates."
      },
      {
        name: "Graduate Teaching / Research Assistantship",
        award: "100% Tuition Waiver + $1,500/Month Stipend",
        coverage: "Assisting faculty members with laboratory research or grading undergraduate courses."
      },
      {
        name: "STEM Merit Fellowship",
        award: "$5,000 to $12,000 One-time Award",
        coverage: "Awarded to promising candidates applying for computer science and data analytics majors."
      }
    ],
    eligibility: {
      academicRequirements: "Recognized 4-year Bachelor's degree (B.Tech, B.E.) or eligible 3-year Bachelor's (B.Sc, B.Com, BBA with WES or direct waiver) with minimum 58% - 65%+ aggregate.",
      standardizedTests: "GRE optional or waived at 80%+ partner universities. Submitting 310+ strengthens scholarship claims.",
      englishRequirements: "IELTS 6.5 (min 6.0 each), PTE 58 - 65, or TOEFL iBT 80 - 90+.",
      financialSolvency: "Affidavit of support and bank balance of approx $35,000 - $45,000 for Form I-20 issuance."
    },
    visaGuide: {
      visaName: "US F-1 Visa",
      processingTime: "I-20 turnaround in 5-10 business days",
      proofOfFunds: "Show liquid funds for Year 1 tuition & living expenses",
      interviewRequired: true,
      keyPoints: [
        "F-1 visa appointment at US Consulates across India",
        "Convey passion for specialized course and future career goals",
        "Complete documentation support provided by IQ Overseas certified team"
      ]
    },
    faqs: [
      {
        q: "Can I study a Master's in the USA with backlogs in my Bachelor's?",
        a: "Yes! Most US partner universities accept candidates with up to 10 to 15 backlogs if all subjects have been cleared and your overall CGPA is above 2.8 / 60%."
      },
      {
        q: "Do I need a GRE to get admission to a Master's program in the USA?",
        a: "No! A huge majority of US universities have waived GRE requirements for Fall 2025 and Spring 2026, relying primarily on your undergraduate GPA, SOP, and recommendation letters."
      },
      {
        q: "How can I get an In-State tuition fee waiver in the US?",
        a: "In states like Texas, receiving a competitive merit scholarship of $1,000 or more automatically qualifies international students for in-state resident tuition, reducing tuition fees by almost 50%!"
      }
    ]
  },

  // ==========================================
  // BACHELORS IN THE UK
  // ==========================================
  'bachelors-uk': {
    slug: 'uk',
    degreeLevel: 'bachelors',
    countryName: 'United Kingdom',
    flag: '🇬🇧',
    heroHeadline: "Fast-track your global career: 3-Year Focused Honors Degrees in the UK.",
    heroSubtitle: "Graduate faster, save an entire year of living expenses, and enjoy a guaranteed 2-Year Graduate Route post-study work visa in London and top student cities.",
    heroTagline: "Start your UG journey in the UK",
    badge: "UCAS Undergraduate Admissions 2025 - 2026",
    heroImage: "/images/destinations/uk-dest.png",
    quickFacts: {
      duration: "3 Years (England & Wales) / 4 Years (Scotland)",
      intakes: "September/October (Major) & January/February",
      postStudyWork: "2 Full Years Guaranteed (Graduate Route Visa)",
      avgTuition: "£13,000 - £24,000 / Year",
      workRights: "20 hrs/week during term-time, 40 hrs in holidays",
      prPathway: "Skilled Worker Visa leading to Indefinite Leave to Remain (ILR)"
    },
    whyStudy: [
      {
        title: "3-Year Focused Degree (Save 1 Full Year)",
        desc: "Unlike 4-year programs elsewhere, standard English Bachelor's degrees take only 3 years by focusing on your chosen subject from day one, saving tuition and living costs."
      },
      {
        title: "Guaranteed 2-Year Graduate Route PSW",
        desc: "All international undergraduates who complete their degree in the UK are entitled to 2 full years of post-study work rights with no minimum salary cap."
      },
      {
        title: "No Standardized SAT / ACT Required",
        desc: "UK universities evaluate Indian students directly based on 12th board marks (CBSE/ICSE 65%-85%+), eliminating the stress of standardized entrance examinations."
      },
      {
        title: "World Top 100 Historic Institutions",
        desc: "Home to Russell Group and historic universities offering centuries of prestige, pioneering research laboratories, and global corporate alumni networks."
      }
    ],
    popularPrograms: [
      {
        title: "BSc (Hons) in Computer Science & Cyber Security",
        category: "Computer Science",
        duration: "3 Years",
        avgSalary: "£35,000 - £55,000",
        topRoles: ["Cyber Security Analyst", "Full Stack Developer", "Systems Specialist"],
        description: "Accredited by the British Computer Society (BCS) with optional 1-year paid industry placement year."
      },
      {
        title: "BSc (Hons) in International Business & Management",
        category: "Business",
        duration: "3 Years",
        avgSalary: "£32,000 - £48,000",
        topRoles: ["Management Consultant", "Business Operations Lead", "Marketing Strategist"],
        description: "AACSB and AMBA accredited business education located in the financial and commercial powerhouse of Europe."
      },
      {
        title: "BEng (Hons) in Mechanical & Automotive Engineering",
        category: "Engineering",
        duration: "3 Years",
        avgSalary: "£34,000 - £52,000",
        topRoles: ["Automotive Design Engineer", "Manufacturing Lead", "CAD Specialist"],
        description: "Hands-on engineering workshops aligned with Formula Student racing teams and aerospace manufacturing hubs."
      }
    ],
    topUniversities: [
      {
        name: "University of Birmingham",
        ranking: "Russell Group • QS Top 80 World",
        tuition: "£21,000 / Year",
        acceptanceRate: "15%",
        location: "Birmingham, UK",
        image: "/images/destinations-landmarks-grand.png"
      },
      {
        name: "University of Greenwich",
        ranking: "Historic Maritime Campus in London",
        tuition: "£16,000 / Year",
        acceptanceRate: "64%",
        location: "London, UK",
        image: "/images/about-students-headquarters-grand.png"
      },
      {
        name: "Coventry University",
        ranking: "Top UK University for Student Satisfaction",
        tuition: "£15,500 / Year",
        acceptanceRate: "70%",
        location: "Coventry, UK",
        image: "/images/program-bachelors-grand.png"
      }
    ],
    costBreakdown: {
      tuition: "£13,500 - £22,000 / Year",
      living: "£9,207 / Year (Outside London) / £12,006 / Year (London)",
      insurance: "£776 / Year (NHS Immigration Health Surcharge)",
      misc: "£1,000 / Year",
      total: "£24,400 - £35,700 / Year"
    },
    scholarships: [
      {
        name: "Vice-Chancellor's International Merit Award",
        award: "£2,000 to £5,000 Tuition Discount",
        coverage: "Applied automatically to first-year tuition for Indian students with 70%+ in 12th board."
      },
      {
        name: "British Council Women in STEM Scholarship",
        award: "100% Tuition + Living Stipend",
        coverage: "Competitive full award for outstanding female scholars in science and technology."
      }
    ],
    eligibility: {
      academicRequirements: "Higher Secondary Certificate (10+2 / CBSE / ICSE / Intermediate) with minimum 60% - 75%+ overall aggregate.",
      standardizedTests: "None required. No SAT / ACT needed for UK undergraduate admissions.",
      englishRequirements: "IELTS 6.0 (min 5.5 each) or 70%+ in 12th English for English MOI waiver at select universities.",
      financialSolvency: "Show 28 days of living costs + remaining Year 1 tuition in a bank account for UKVI student visa."
    },
    visaGuide: {
      visaName: "UK Student Visa (Subclass Route)",
      processingTime: "CAS issued in 3-7 days; visa decision in 3 weeks (Priority 5 days available)",
      proofOfFunds: "28-day holding rule in approved bank account",
      interviewRequired: false,
      keyPoints: [
        "CAS (Confirmation of Acceptance for Studies) letter from university",
        "TB screening test from approved IOM / UKVI clinic",
        "No routine consular interview (occasional credibility video check)"
      ]
    },
    faqs: [
      {
        q: "Can I get an IELTS waiver for UK Bachelor's?",
        a: "Yes! Many UK universities waive the IELTS requirement if you scored 70% or higher in English in your 12th CBSE, ICSE, or State Board examination."
      },
      {
        q: "What is the Graduate Route visa?",
        a: "The Graduate Route allows international students who complete an undergraduate degree in the UK to stay and work in any job for 2 years without requiring employer sponsorship."
      }
    ]
  },

  // ==========================================
  // MASTERS IN THE UK
  // ==========================================
  'masters-uk': {
    slug: 'uk',
    degreeLevel: 'masters',
    countryName: 'United Kingdom',
    flag: '🇬🇧',
    heroHeadline: "Complete your Master's in just 1 Year: Study in the United Kingdom.",
    heroSubtitle: "Save a full year of tuition and living expenses with intensive 1-year Master's programs, followed by a guaranteed 2-Year post-study work visa.",
    heroTagline: "Start your Master's journey in the UK",
    badge: "1-Year Fast-Track Master's Hub",
    heroImage: "/images/destinations/uk-dest.png",
    quickFacts: {
      duration: "1 Year (12 Months Intensive)",
      intakes: "September/October & January/February",
      postStudyWork: "2 Full Years Guaranteed (Graduate Route Visa)",
      avgTuition: "£14,000 - £26,000 / Year",
      workRights: "20 hrs/week during study, 40 hrs during breaks",
      prPathway: "Skilled Worker Visa (5-Year pathway to ILR & Citizenship)"
    },
    whyStudy: [
      {
        title: "1-Year Master's (Save 50% Time & Cost)",
        desc: "UK postgraduate degrees are designed as intensive 12-month masterclasses, allowing you to enter the international job market an entire year earlier than US/Canadian counterparts."
      },
      {
        title: "Direct Entry with 3-Year Indian Degrees",
        desc: "Indian students with 3-year degrees (B.Sc, B.Com, BBA, BCA) qualify for direct Master's admission without requiring extra credential evaluations."
      },
      {
        title: "No GRE / GMAT Mandated",
        desc: "Virtually all UK universities assess Master's applications based on undergraduate CGPA, academic transcripts, and personal statements without standardized tests."
      },
      {
        title: "High Acceptance for Backlogs",
        desc: "Many premier UK universities accept applicants with up to 10-15 backlogs provided all subjects are successfully completed and the overall aggregate meets criteria."
      }
    ],
    popularPrograms: [
      {
        title: "MSc in Advanced Computer Science",
        category: "Computer Science",
        duration: "1 Year",
        avgSalary: "£42,000 - £65,000",
        topRoles: ["Senior Software Architect", "Data Engineer", "Machine Learning Specialist"],
        description: "Algorithms, distributed cloud computing, and real-world industrial dissertation projects."
      },
      {
        title: "MSc in Business Analytics & Big Data",
        category: "Business",
        duration: "1 Year",
        avgSalary: "£40,000 - £60,000",
        topRoles: ["BI Lead", "Analytics Consultant", "Product Strategist"],
        description: "Statistical computing with R, Python, and SQL combined with managerial decision intelligence."
      },
      {
        title: "MSc in International Business Management",
        category: "Management",
        duration: "1 Year",
        avgSalary: "£38,000 - £56,000",
        topRoles: ["Operations Manager", "Global Trade Associate", "Project Lead"],
        description: "Strategic corporate leadership, global supply networks, and corporate finance frameworks."
      }
    ],
    topUniversities: [
      {
        name: "University of Birmingham",
        ranking: "Russell Group • QS World Top 80",
        tuition: "£23,500 / Year",
        acceptanceRate: "15%",
        location: "Birmingham, UK",
        image: "/images/destinations-landmarks-grand.png"
      },
      {
        name: "University of Greenwich",
        ranking: "Historic Campus in London",
        tuition: "£17,000 / Year",
        acceptanceRate: "64%",
        location: "London, UK",
        image: "/images/about-students-headquarters-grand.png"
      },
      {
        name: "Northumbria University",
        ranking: "Times Higher Education University of the Year",
        tuition: "£16,500 / Year",
        acceptanceRate: "72%",
        location: "Newcastle & London, UK",
        image: "/images/program-masters-grand.png"
      }
    ],
    costBreakdown: {
      tuition: "£14,000 - £24,000 / Year",
      living: "£9,207 - £12,006 / Year",
      insurance: "£776 / Year",
      misc: "£1,000 / Year",
      total: "£24,900 - £37,700 / Year (One Year Total)"
    },
    scholarships: [
      {
        name: "International Early Bird & Merit Grant",
        award: "£2,000 to £5,000 Deduction",
        coverage: "Deducted automatically from tuition invoice upon early deposit payment."
      },
      {
        name: "GREAT Scholarships by British Council",
        award: "£10,000 Full Scholarship",
        coverage: "Awarded to exceptional Indian postgraduate applicants in partnership with UK universities."
      }
    ],
    eligibility: {
      academicRequirements: "Recognized Bachelor's degree (3-year or 4-year) with minimum 55% - 65% aggregate.",
      standardizedTests: "No GRE / GMAT required at 95%+ institutions.",
      englishRequirements: "IELTS 6.5 (min 6.0 each) or PTE 58-65. 12th English score of 70%+ accepted for IELTS waiver.",
      financialSolvency: "Bank balance meeting the 28-day holding requirement before applying for the student visa."
    },
    visaGuide: {
      visaName: "UK Student Visa",
      processingTime: "CAS issued in 3-5 days; visa in 3 weeks",
      proofOfFunds: "Show remaining tuition + 9 months living costs held for 28 consecutive days",
      interviewRequired: false,
      keyPoints: [
        "CAS issued directly by university sponsor",
        "Fast-track Priority service (5 working days) available",
        "Full support on fund documentation and maintenance calculation"
      ]
    },
    faqs: [
      {
        q: "Is a 1-year UK Master's degree recognized globally and in India?",
        a: "Yes! 1-year UK Master's degrees are fully recognized worldwide and by the Association of Indian Universities (AIU) under the UK-India mutual qualification recognition agreement."
      },
      {
        q: "Can I bring my spouse/dependents on a UK Student Visa?",
        a: "Under current UK visa regulations, dependents are permitted for students enrolled in PhD and postgraduate research degrees."
      }
    ]
  },

  // ==========================================
  // BACHELORS IN CANADA
  // ==========================================
  'bachelors-canada': {
    slug: 'canada',
    degreeLevel: 'bachelors',
    countryName: 'Canada',
    flag: '🇨🇦',
    heroHeadline: "Study, Work, and Settle: High Quality Undergraduate Education in Canada.",
    heroSubtitle: "Experience world-leading universities, safe multi-cultural cities, paid Co-Op work semesters, and direct post-study work permits.",
    heroTagline: "Start your UG journey in Canada",
    badge: "Undergraduate Admissions 2025 - 2026",
    heroImage: "/images/destinations/canada-dest.png",
    quickFacts: {
      duration: "4 Years (Bachelor's Degree) / 3 Years (Advanced Diploma)",
      intakes: "Fall (September), Winter (January) & Summer (May)",
      postStudyWork: "Up to 3-Year Post-Graduation Work Permit (PGWP)",
      avgTuition: "CAD 22,000 - CAD 38,000 / Year",
      workRights: "24 hrs/week Off-Campus during academic terms",
      prPathway: "Express Entry (Canadian Experience Class & Provincial Nominee Program)"
    },
    whyStudy: [
      {
        title: "World's Best Paid Co-Op Programs",
        desc: "Canadian universities pioneered Co-Op education, enabling undergraduates to complete 3 to 4 semesters of paid industry work, earning CAD 35,000+ before graduating."
      },
      {
        title: "Up to 3-Year PGWP Work Authorization",
        desc: "Graduating from a recognized Canadian university qualifies you for an open post-graduation work permit of up to 3 years with any employer across the country."
      },
      {
        title: "Clear Pathways to Permanent Residency",
        desc: "Canadian work experience earned through your PGWP directly awards high Comprehensive Ranking System (CRS) points for Express Entry PR."
      },
      {
        title: "Affordable Living & Inclusive Society",
        desc: "Ranked as one of the safest and most welcoming countries globally, Canada offers lower living costs compared to major US and UK cities."
      }
    ],
    popularPrograms: [
      {
        title: "B.S. in Computer Science & Software Systems",
        category: "Computer Science",
        duration: "4 Years",
        avgSalary: "CAD 75,000 - CAD 110,000",
        topRoles: ["Software Developer", "Cloud Specialist", "Data Engineer"],
        description: "Algorithm theory, operating systems, and industry Co-Op placements at Toronto and Vancouver tech clusters."
      },
      {
        title: "Bachelor of Business Administration (BBA)",
        category: "Business",
        duration: "4 Years",
        avgSalary: "CAD 68,000 - CAD 95,000",
        topRoles: ["Financial Analyst", "Operations Specialist", "Marketing Associate"],
        description: "Corporate finance, international marketing, logistics, and entrepreneurial venture incubation."
      }
    ],
    topUniversities: [
      {
        name: "Concordia University",
        ranking: "Top Comprehensive Canadian University",
        tuition: "CAD 24,000 / Year",
        acceptanceRate: "68%",
        location: "Montreal, Quebec",
        image: "/images/program-bachelors-grand.png"
      },
      {
        name: "University of Windsor",
        ranking: "Top Engineering & Co-Op Hub",
        tuition: "CAD 26,000 / Year",
        acceptanceRate: "70%",
        location: "Windsor, Ontario",
        image: "/images/about-students-grand.png"
      }
    ],
    costBreakdown: {
      tuition: "CAD 22,000 - CAD 36,000 / Year",
      living: "CAD 14,000 - CAD 18,000 / Year",
      insurance: "CAD 800 - CAD 1,200 / Year",
      misc: "CAD 1,500 / Year",
      total: "CAD 38,300 - CAD 56,700 / Year"
    },
    scholarships: [
      {
        name: "President's International Scholarship of Excellence",
        award: "CAD 5,000 to CAD 15,000",
        coverage: "Awarded automatically to high-achieving high school graduates applying for Fall intake."
      }
    ],
    eligibility: {
      academicRequirements: "Recognized 10+2 / Intermediate certificate with minimum 65% - 75%+ overall marks (Math mandatory for CS/Engg).",
      standardizedTests: "None required. No SAT or ACT needed.",
      englishRequirements: "IELTS Academic 6.5 (min 6.0 in each band) or PTE Academic 60+.",
      financialSolvency: "GIC (Guaranteed Investment Certificate) of CAD 20,635 plus receipt for Year 1 tuition fee."
    },
    visaGuide: {
      visaName: "Canadian Study Permit",
      processingTime: "PAL (Provincial Attestation Letter) + Study Permit in 4-8 weeks",
      proofOfFunds: "GIC of CAD 20,635 + First year paid tuition receipt",
      interviewRequired: false,
      keyPoints: [
        "Provincial Attestation Letter (PAL) secured by IQ Overseas with university admit",
        "Biometrics and upfront medical exam at authorized panel clinic",
        "No routine in-person interview required"
      ]
    },
    faqs: [
      {
        q: "What is a GIC and why is it mandatory for Canadian student visas?",
        a: "A Guaranteed Investment Certificate (GIC) with a designated Canadian bank (like ICICI Bank Canada or CIBC) proves that you have the mandatory funds (CAD 20,635) to cover your living expenses for your first year."
      }
    ]
  },

  // ==========================================
  // MASTERS IN CANADA
  // ==========================================
  'masters-canada': {
    slug: 'canada',
    degreeLevel: 'masters',
    countryName: 'Canada',
    flag: '🇨🇦',
    heroHeadline: "Earn World-Class Graduate Credentials with 3-Year PGWP in Canada.",
    heroSubtitle: "Explore specialized Master of Science (MSc) and Master of Engineering (MEng) degrees with strong research funding and immigration pathways.",
    heroTagline: "Start your Master's journey in Canada",
    badge: "Postgraduate & PGWP Hub",
    heroImage: "/images/destinations/canada-dest.png",
    quickFacts: {
      duration: "1.5 to 2 Years",
      intakes: "Fall (September) & Winter (January)",
      postStudyWork: "3 Full Years PGWP (for 2-Year Master's degrees)",
      avgTuition: "CAD 20,000 - CAD 34,000 / Year",
      workRights: "24 hrs/week Off-Campus during academic terms",
      prPathway: "Express Entry (CEC) and Provincial Nominee Master's Streams (e.g. OINP)"
    },
    whyStudy: [
      {
        title: "3-Year Open Work Permit (PGWP)",
        desc: "Graduating from a master's program of 16-24 months qualifies you for a full 3-year Post-Graduation Work Permit, giving ample time to accumulate Canadian work experience."
      },
      {
        title: "Dedicated Master's PR Streams (OINP / BC PNP)",
        desc: "Provinces like Ontario and British Columbia offer direct PR streams for international Master's graduates that do not require an active job offer to apply."
      },
      {
        title: "World Top Tier Research Institutions",
        desc: "Access federally funded research laboratories, industrial partnerships, and subsidized tuition compared to neighboring American institutions."
      }
    ],
    popularPrograms: [
      {
        title: "M.Eng in Software Engineering & Applied AI",
        category: "Computer Science",
        duration: "1.5 - 2 Years",
        avgSalary: "CAD 85,000 - CAD 125,000",
        topRoles: ["Cloud Systems Engineer", "Machine Learning Specialist", "Software Architect"],
        description: "Course-based professional master's degree focusing on software architecture, DevOps, and cloud deployment."
      },
      {
        title: "M.Eng in Electrical & Mechanical Engineering",
        category: "Engineering",
        duration: "2 Years",
        avgSalary: "CAD 80,000 - CAD 115,000",
        topRoles: ["Industrial Engineer", "Automation Engineer", "Energy Consultant"],
        description: "Advanced thermodynamics, industrial automation, and smart manufacturing systems."
      }
    ],
    topUniversities: [
      {
        name: "Concordia University",
        ranking: "Montreal Tech Hub Leader",
        tuition: "CAD 24,000 / Year",
        acceptanceRate: "68%",
        location: "Montreal, Canada",
        image: "/images/program-bachelors-grand.png"
      },
      {
        name: "University of Windsor",
        ranking: "Top Automotive & Engineering Center",
        tuition: "CAD 25,000 / Year",
        acceptanceRate: "70%",
        location: "Windsor, Canada",
        image: "/images/about-students-grand.png"
      }
    ],
    costBreakdown: {
      tuition: "CAD 20,000 - CAD 32,000 / Year",
      living: "CAD 14,000 - CAD 18,000 / Year",
      insurance: "CAD 900 / Year",
      misc: "CAD 1,500 / Year",
      total: "CAD 36,400 - CAD 52,400 / Year"
    },
    scholarships: [
      {
        name: "Graduate Merit Entrance Award",
        award: "CAD 3,000 to CAD 8,000",
        coverage: "Offered to incoming master's students with first-class honors in undergraduate studies."
      }
    ],
    eligibility: {
      academicRequirements: "Recognized 4-year Bachelor's (B.Tech, B.E.) with minimum 65% - 70%+ overall marks and few backlogs (generally under 5-8).",
      standardizedTests: "GRE waived for course-based MEng programs at most universities.",
      englishRequirements: "IELTS 6.5 (min 6.0 in each band) or PTE 60+.",
      financialSolvency: "GIC of CAD 20,635 + paid first year tuition fee."
    },
    visaGuide: {
      visaName: "Canadian Study Permit",
      processingTime: "4 - 8 weeks",
      proofOfFunds: "GIC + Paid Tuition Receipt + CAQ (for Quebec)",
      interviewRequired: false,
      keyPoints: [
        "PAL exemption applied for Master's/PhD degree applicants under current regulations",
        "Clear statement of purpose explaining post-study career trajectory",
        "Upfront medical check and biometrics verification"
      ]
    },
    faqs: [
      {
        q: "Are Master's students in Canada exempt from the recent student visa caps?",
        a: "Yes! Master's and Doctoral degree students are explicitly prioritized and granted full 3-year PGWP work rights upon graduation."
      }
    ]
  },

  // ==========================================
  // BACHELORS IN AUSTRALIA
  // ==========================================
  'bachelors-australia': {
    slug: 'australia',
    degreeLevel: 'bachelors',
    countryName: 'Australia',
    flag: '🇦🇺',
    heroHeadline: "World Top 100 Universities & High Quality Living: Study in Australia.",
    heroSubtitle: "Experience modern campuses, sunny coastal cities, 3-year focused degrees, and extensive post-study work rights in Sydney, Melbourne, Brisbane and Perth.",
    heroTagline: "Start your UG journey in Australia",
    badge: "Undergraduate Admissions 2025 - 2026",
    heroImage: "/images/destinations/australia-dest.png",
    quickFacts: {
      duration: "3 Years (General) / 4 Years (Honours / Engineering)",
      intakes: "Semester 1 (February) & Semester 2 (July)",
      postStudyWork: "2 to 4 Years (Subclass 485 Temporary Graduate Visa)",
      avgTuition: "AUD 26,000 - AUD 44,000 / Year",
      workRights: "48 hours per fortnight during semester, unlimited in breaks",
      prPathway: "General Skilled Migration (Subclass 189, 190, 491 Points Test)"
    },
    whyStudy: [
      {
        title: "World Top 100 Group of Eight Universities",
        desc: "Over 7 Australian universities rank in the QS World Top 50, providing globally respected academic degrees and elite employer recognition."
      },
      {
        title: "Extended Post-Study Work Visas (2-4 Yrs)",
        desc: "Graduates enjoy generous post-study work authorization, with extra years granted for studying in designated regional centers (Adelaide, Perth, Gold Coast)."
      },
      {
        title: "Highest Student Minimum Wage Globally",
        desc: "Australia features the highest legal minimum wage in the world (over AUD $23.23/hour), allowing students to easily cover living costs through part-time work."
      }
    ],
    popularPrograms: [
      {
        title: "Bachelor of Computer Science (BCS)",
        category: "Computer Science",
        duration: "3 Years",
        avgSalary: "AUD 75,000 - AUD 110,000",
        topRoles: ["Full Stack Developer", "Network Architect", "Data Engineer"],
        description: "Accredited by the Australian Computer Society (ACS) with direct pathways to skilled migration assessments."
      },
      {
        title: "Bachelor of Business & Commerce",
        category: "Business",
        duration: "3 Years",
        avgSalary: "AUD 70,000 - AUD 98,000",
        topRoles: ["Financial Analyst", "Accountant", "Business Operations Lead"],
        description: "CPA and CA Australia accredited business education with major Australian corporate internships."
      }
    ],
    topUniversities: [
      {
        name: "University of Melbourne",
        ranking: "QS Top 14 in the World",
        tuition: "AUD 38,000 / Year",
        acceptanceRate: "70%",
        location: "Melbourne, Victoria",
        image: "/images/hero-desktop.png"
      },
      {
        name: "University of Wollongong",
        ranking: "Top Modern Research University",
        tuition: "AUD 28,000 / Year",
        acceptanceRate: "65%",
        location: "Wollongong / Sydney",
        image: "/images/about-students-grand.png"
      }
    ],
    costBreakdown: {
      tuition: "AUD 26,000 - AUD 42,000 / Year",
      living: "AUD 24,505 / Year (Official Home Affairs requirement)",
      insurance: "AUD 600 / Year (OSHC - Overseas Student Health Cover)",
      misc: "AUD 1,200 / Year",
      total: "AUD 52,305 - AUD 68,305 / Year"
    },
    scholarships: [
      {
        name: "Vice-Chancellor's International Excellence Award",
        award: "20% to 50% Tuition Reduction",
        coverage: "Awarded automatically to Indian students with 80%+ marks in 12th board exams."
      }
    ],
    eligibility: {
      academicRequirements: "Recognized 10+2 / Intermediate certificate with minimum 65% - 75%+ overall aggregate.",
      standardizedTests: "None required. No SAT or ACT required.",
      englishRequirements: "IELTS Academic 6.0 - 6.5 or PTE Academic 50 - 58+.",
      financialSolvency: "Genuine Student (GS) assessment requires proof of Year 1 tuition and living costs (~AUD $45,000 - $55,000)."
    },
    visaGuide: {
      visaName: "Australian Student Visa (Subclass 500)",
      processingTime: "4 - 8 weeks",
      proofOfFunds: "Confirmation of Enrolment (CoE) + OSHC health cover + GS requirement",
      interviewRequired: false,
      keyPoints: [
        "Genuine Student (GS) criteria evaluation",
        "OSHC medical health insurance mandatory for full course duration",
        "Direct electronic visa grant with biometrics"
      ]
    },
    faqs: [
      {
        q: "What is the Genuine Student (GS) requirement for Australian student visas?",
        a: "The Genuine Student (GS) requirement evaluates your academic background, genuine intention to study, financial preparedness, and post-study career goals to ensure visa authenticity."
      }
    ]
  },

  // ==========================================
  // MASTERS IN AUSTRALIA
  // ==========================================
  'masters-australia': {
    slug: 'australia',
    degreeLevel: 'masters',
    countryName: 'Australia',
    flag: '🇦🇺',
    heroHeadline: "Elite Postgraduate Degrees with Top Tier Salaries: Study Master's in Australia.",
    heroSubtitle: "Experience world-ranked universities, generous 2-4 year post-study work visas, and seamless point-tested permanent residency pathways.",
    heroTagline: "Start your Master's journey in Australia",
    badge: "Master's & Post-Study Work Hub",
    heroImage: "/images/destinations/australia-dest.png",
    quickFacts: {
      duration: "1.5 to 2 Years",
      intakes: "February / March & July / August",
      postStudyWork: "2 to 3 Years (plus 1-2 extra years in regional cities)",
      avgTuition: "AUD 28,000 - AUD 46,000 / Year",
      workRights: "48 hours per fortnight during terms, unlimited in breaks",
      prPathway: "General Skilled Migration (Subclass 189 / 190 / 491)"
    },
    whyStudy: [
      {
        title: "Extended Post-Study Work Visas (Subclass 485)",
        desc: "Graduates of 2-year Master's programs receive 2 to 3 years of unrestricted post-study work rights, with additional years awarded for studying outside Sydney, Melbourne, or Brisbane."
      },
      {
        title: "Direct Acceptance of 3-Year Indian Degrees",
        desc: "Many top Australian universities readily accept 3-year Indian degrees (B.Sc, B.Com, BBA, BCA) for direct Master's admission."
      },
      {
        title: "Point-Tested PR & Migration System",
        desc: "An Australian master's qualification grants 15 points towards the points test for skilled migration, accelerating your permanent residency journey."
      }
    ],
    popularPrograms: [
      {
        title: "Master of Information Technology (MIT)",
        category: "Computer Science",
        duration: "2 Years",
        avgSalary: "AUD 85,000 - AUD 125,000",
        topRoles: ["Cloud Engineer", "IT Consultant", "Cyber Security Analyst"],
        description: "Advanced database systems, network security, software design, and enterprise cloud solutions."
      },
      {
        title: "Master of Professional Accounting (MPA)",
        category: "Finance",
        duration: "2 Years",
        avgSalary: "AUD 80,000 - AUD 115,000",
        topRoles: ["Auditor", "Tax Consultant", "Financial Controller"],
        description: "Full accreditation from CPA Australia and Chartered Accountants ANZ for direct professional registration."
      }
    ],
    topUniversities: [
      {
        name: "University of Melbourne",
        ranking: "QS World Top 14",
        tuition: "AUD 42,000 / Year",
        acceptanceRate: "70%",
        location: "Melbourne, Australia",
        image: "/images/hero-desktop.png"
      },
      {
        name: "University of Wollongong",
        ranking: "Top Australian Tech University",
        tuition: "AUD 32,000 / Year",
        acceptanceRate: "65%",
        location: "Wollongong & Sydney",
        image: "/images/about-students-grand.png"
      }
    ],
    costBreakdown: {
      tuition: "AUD 28,000 - AUD 44,000 / Year",
      living: "AUD 24,505 / Year",
      insurance: "AUD 650 / Year",
      misc: "AUD 1,500 / Year",
      total: "AUD 54,655 - AUD 70,655 / Year"
    },
    scholarships: [
      {
        name: "Global Leaders Postgraduate Scholarship",
        award: "20% to 30% Fee Waiver",
        coverage: "Awarded automatically based on undergraduate GPA (65%+ aggregate)."
      }
    ],
    eligibility: {
      academicRequirements: "Recognized Bachelor's degree (3-year or 4-year) with minimum 60% aggregate and limited backlogs.",
      standardizedTests: "No GRE / GMAT required at most institutions.",
      englishRequirements: "IELTS 6.5 (min 6.0 in each band) or PTE Academic 58 - 65.",
      financialSolvency: "Proof of 1 year tuition + AUD 24,505 living expenses for Genuine Student assessment."
    },
    visaGuide: {
      visaName: "Student Visa (Subclass 500)",
      processingTime: "4 - 6 weeks",
      proofOfFunds: "CoE + OSHC insurance + GS documentation",
      interviewRequired: false,
      keyPoints: [
        "Genuine Student criteria evaluation",
        "Clear explanation of why studying in Australia benefits your career",
        "Streamlined visa processing through partner university network"
      ]
    },
    faqs: [
      {
        q: "Can I bring my family while studying a Master's in Australia?",
        a: "Yes! Students pursuing a Master's degree in Australia can bring their spouse and dependent children. Your spouse is granted full-time work rights."
      }
    ]
  },

  // ==========================================
  // BACHELORS IN IRELAND
  // ==========================================
  'bachelors-ireland': {
    slug: 'ireland',
    degreeLevel: 'bachelors',
    countryName: 'Ireland',
    flag: '🇮🇪',
    heroHeadline: "Silicon Valley of Europe: Study Your Bachelor's Degree in Ireland.",
    heroSubtitle: "Launch your career with European HQs of Google, Apple, Microsoft, Meta, and Pfizer right in your backyard, with a 2-Year graduate stay-back option.",
    heroTagline: "Start your UG journey in Ireland",
    badge: "Undergraduate Admissions 2025 - 2026",
    heroImage: "/images/destinations/ireland-dest.png",
    quickFacts: {
      duration: "3 to 4 Years (Honours Bachelor's Level 8)",
      intakes: "September (Major) & January",
      postStudyWork: "1 to 2 Years (Third Level Graduate Scheme)",
      avgTuition: "€10,000 - €22,000 / Year",
      workRights: "20 hrs/week during term, 40 hrs during holidays",
      prPathway: "Critical Skills Employment Permit leading to Stamp 4 PR"
    },
    whyStudy: [
      {
        title: "European Tech & Pharma Capital",
        desc: "Dublin is home to the European headquarters of 9 of the top 10 global tech firms and 8 of the top 10 pharmaceutical giants, offering unmatched internship access."
      },
      {
        title: "Only English-Speaking Country in the Eurozone",
        desc: "Enjoy seamless communication, high safety, friendly communities, and direct access to the entire European single market."
      },
      {
        title: "Affordable European Tuition & Scholarships",
        desc: "High quality education with lower tuition rates compared to the USA and UK, accompanied by generous government and university grants."
      }
    ],
    popularPrograms: [
      {
        title: "BSc (Hons) in Computer Science & Data Analytics",
        category: "Computer Science",
        duration: "4 Years",
        avgSalary: "€40,000 - €62,000",
        topRoles: ["Cloud Developer", "Data Analyst", "Cybersecurity Specialist"],
        description: "Hands-on software development with mandatory 6-month industry work placement."
      }
    ],
    topUniversities: [
      {
        name: "University College Dublin (UCD)",
        ranking: "QS Top 170 • Ireland's Global University",
        tuition: "€21,500 / Year",
        acceptanceRate: "50%",
        location: "Dublin, Ireland",
        image: "/images/about-students-grand.png"
      },
      {
        name: "National College of Ireland (NCI)",
        ranking: "Located in Dublin Silicon Docks",
        tuition: "€12,000 / Year",
        acceptanceRate: "65%",
        location: "Dublin, Ireland",
        image: "/images/program-bachelors-grand.png"
      }
    ],
    costBreakdown: {
      tuition: "€10,000 - €20,000 / Year",
      living: "€10,000 - €14,000 / Year",
      insurance: "€500 / Year",
      misc: "€1,000 / Year",
      total: "€21,500 - €35,500 / Year"
    },
    scholarships: [
      {
        name: "Global Excellence Undergraduate Scholarship",
        award: "€2,000 to €5,000 Tuition Discount",
        coverage: "Merit award based on high school academic performance."
      }
    ],
    eligibility: {
      academicRequirements: "Recognized 10+2 / Intermediate Certificate with minimum 65% - 75%+ overall aggregate.",
      standardizedTests: "None. No SAT or ACT required.",
      englishRequirements: "IELTS 6.5 (min 6.0 each) or PTE Academic 58+.",
      financialSolvency: "Show €10,000 in personal/sponsor bank balance + paid tuition receipt."
    },
    visaGuide: {
      visaName: "Ireland Stamp 2 Student Visa",
      processingTime: "4 - 8 weeks",
      proofOfFunds: "Show €10,000 living expenses + full tuition receipt",
      interviewRequired: false,
      keyPoints: [
        "Irish immigration online visa application",
        "Police clearance and medical insurance",
        "No routine consular interview"
      ]
    },
    faqs: [
      {
        q: "What is the post-study work visa in Ireland?",
        a: "Under the Third Level Graduate Scheme, undergraduate degree (Level 8) holders receive a 1-year stay-back visa to secure a qualifying job."
      }
    ]
  },

  // ==========================================
  // MASTERS IN IRELAND
  // ==========================================
  'masters-ireland': {
    slug: 'ireland',
    degreeLevel: 'masters',
    countryName: 'Ireland',
    flag: '🇮🇪',
    heroHeadline: "Lead Innovation at Europe's Tech Headquarters: Study Master's in Ireland.",
    heroSubtitle: "Access direct employment with Fortune 500 leaders in Dublin, 2-Year stay-back work rights, and fast-track Critical Skills permits.",
    heroTagline: "Start your Master's journey in Ireland",
    badge: "Tech & Critical Skills Hub",
    heroImage: "/images/destinations/ireland-dest.png",
    quickFacts: {
      duration: "1 Year (Full-time Intensive)",
      intakes: "September (Major) & January",
      postStudyWork: "2 Full Years Guaranteed (Third Level Graduate Scheme)",
      avgTuition: "€12,000 - €24,000 / Year",
      workRights: "20 hrs/week during study, 40 hrs in holidays",
      prPathway: "Critical Skills Employment Permit (PR Stamp 4 in 2 Years)"
    },
    whyStudy: [
      {
        title: "2-Year Post-Study Work Visa",
        desc: "All master's graduates receive a full 2-year stay back visa with unrestricted working rights across the tech, finance, and biopharma industries."
      },
      {
        title: "Fast-Track PR in Just 2 Years",
        desc: "Graduates securing jobs on the Critical Skills Occupations List (CSOL) with salaries over €38,000 qualify for Stamp 4 permanent residency in only 24 months."
      },
      {
        title: "Global Headquarters Ecosystem",
        desc: "Over 1,000 multinational companies operate their European headquarters in Ireland, creating unprecedented demand for international master's graduates."
      }
    ],
    popularPrograms: [
      {
        title: "MSc in Computer Science & Data Analytics",
        category: "Computer Science",
        duration: "1 Year",
        avgSalary: "€45,000 - €70,000",
        topRoles: ["Cloud Architect", "Data Scientist", "Software Lead"],
        description: "Specialized in cloud architecture, machine learning, and enterprise systems."
      },
      {
        title: "MSc in FinTech & Financial Analytics",
        category: "Finance",
        duration: "1 Year",
        avgSalary: "€44,000 - €68,000",
        topRoles: ["FinTech Analyst", "Risk Lead", "Algorithmic Trader"],
        description: "Blockchain, quantitative trading, regulatory technology, and digital payments."
      }
    ],
    topUniversities: [
      {
        name: "University College Dublin (UCD)",
        ranking: "QS World Top 170 • Triple Crown Business",
        tuition: "€22,500 / Year",
        acceptanceRate: "50%",
        location: "Dublin, Ireland",
        image: "/images/about-students-grand.png"
      },
      {
        name: "National College of Ireland (NCI)",
        ranking: "Silicon Docks Prime Location",
        tuition: "€15,000 / Year",
        acceptanceRate: "65%",
        location: "Dublin, Ireland",
        image: "/images/program-masters-grand.png"
      }
    ],
    costBreakdown: {
      tuition: "€12,000 - €24,000 / Year",
      living: "€10,000 - €14,000 / Year",
      insurance: "€500 / Year",
      misc: "€1,000 / Year",
      total: "€23,500 - €39,500 / Year (One Year Total)"
    },
    scholarships: [
      {
        name: "Global Excellence Postgraduate Scholarship",
        award: "€3,000 to €8,000 Tuition Discount",
        coverage: "Deducted automatically based on undergraduate GPA (65%+ aggregate)."
      }
    ],
    eligibility: {
      academicRequirements: "Recognized Bachelor's degree (3-year or 4-year) with minimum 60% aggregate.",
      standardizedTests: "No GRE / GMAT required.",
      englishRequirements: "IELTS 6.5 (min 6.0 each) or PTE 58-65.",
      financialSolvency: "Show €10,000 in personal bank balance + paid tuition receipt."
    },
    visaGuide: {
      visaName: "Ireland Stamp 2 Student Visa",
      processingTime: "4 - 8 weeks",
      proofOfFunds: "Show €10,000 living expenses + full tuition receipt",
      interviewRequired: false,
      keyPoints: [
        "Irish immigration online visa application",
        "Police clearance and medical insurance",
        "No routine consular interview"
      ]
    },
    faqs: [
      {
        q: "What is the Critical Skills Employment Permit in Ireland?",
        a: "The Critical Skills Employment Permit is designed to attract highly skilled professionals in IT, engineering, and healthcare. It requires a job offer of €38,000+ and provides permanent residency eligibility (Stamp 4) after just 2 years of employment."
      }
    ]
  },

  // ==========================================
  // BACHELORS IN GERMANY
  // ==========================================
  'bachelors-germany': {
    slug: 'germany',
    degreeLevel: 'bachelors',
    countryName: 'Germany',
    flag: '🇩🇪',
    heroHeadline: "Tuition-Free Engineering & Tech Excellence: Study Bachelor's in Germany.",
    heroSubtitle: "Benefit from Europe's economic powerhouse with virtually zero tuition fees at public universities, world-class research laboratories, and 18-month stay-back visas.",
    heroTagline: "Start your UG journey in Germany",
    badge: "Zero/Low Tuition Universities",
    heroImage: "/images/destinations/germany-dest.png",
    quickFacts: {
      duration: "3 to 3.5 Years",
      intakes: "Winter (October - Major) & Summer (April)",
      postStudyWork: "18 Months Jobseeker Visa",
      avgTuition: "€0 - €3,000 / Year (Nominal semester fees at Public Universities)",
      workRights: "140 full days or 280 half days per calendar year",
      prPathway: "EU Blue Card (Permanent Residency in 21 - 27 months)"
    },
    whyStudy: [
      {
        title: "Virtually Tuition-Free Public Universities",
        desc: "Public universities in Germany charge zero tuition for domestic and international students alike; you only pay a nominal semester administrative contribution (€150–€350)."
      },
      {
        title: "Global Engineering & Automotive Leadership",
        desc: "Home to global industrial giants including BMW, Mercedes-Benz, Siemens, Bosch, and SAP with tremendous demand for engineering graduates."
      },
      {
        title: "Fast-Track EU Blue Card & PR",
        desc: "Graduates who obtain full-time employment can secure an EU Blue Card and achieve permanent residency in as little as 21 months with German language proficiency."
      }
    ],
    popularPrograms: [
      {
        title: "B.Sc in Computer Science & Software Systems",
        category: "Computer Science",
        duration: "3 Years",
        avgSalary: "€48,000 - €72,000",
        topRoles: ["Embedded Software Engineer", "Full Stack Developer", "Systems Analyst"],
        description: "English-taught computer science degree with dual-study industrial work options."
      }
    ],
    topUniversities: [
      {
        name: "Technical University of Munich (TUM)",
        ranking: "TU9 • QS World Top 30",
        tuition: "€2,000 - €3,000 / Year",
        acceptanceRate: "25%",
        location: "Munich, Germany",
        image: "/images/hero-desktop.png"
      },
      {
        name: "RWTH Aachen University",
        ranking: "Germany's Leading Engineering School",
        tuition: "Nominal (~€300/semester)",
        acceptanceRate: "30%",
        location: "Aachen, Germany",
        image: "/images/destinations-landmarks-grand.png"
      }
    ],
    costBreakdown: {
      tuition: "€0 - €3,000 / Year",
      living: "€11,208 / Year (Official Blocked Account requirement)",
      insurance: "€1,200 / Year",
      misc: "€1,000 / Year",
      total: "€13,408 - €16,408 / Year (Extremely Cost Effective)"
    },
    scholarships: [
      {
        name: "DAAD International Student Grants",
        award: "€300 to €850 / Month Living Stipend",
        coverage: "Competitive awards for outstanding international academic merit."
      }
    ],
    eligibility: {
      academicRequirements: "10+2 with 1 Year of University Education in India OR Feststellungsprüfung (Studienkolleg) OR direct recognition via APS certificate.",
      standardizedTests: "None.",
      englishRequirements: "IELTS 6.5 or PTE 58+. German A1/A2 beneficial for day-to-day living.",
      financialSolvency: "Mandatory Blocked Account (Sperrkonto) with €11,208 deposited in an approved German bank."
    },
    visaGuide: {
      visaName: "German National Student Visa (Type D)",
      processingTime: "APS Certificate (4-6 weeks) + Visa (4-6 weeks)",
      proofOfFunds: "Blocked Account confirmation with €11,208",
      interviewRequired: true,
      keyPoints: [
        "Mandatory APS Certificate verification for Indian students",
        "Blocked account opened via Expatrio or Fintiba",
        "VFS appointment and consular document verification"
      ]
    },
    faqs: [
      {
        q: "What is the APS Certificate for studying in Germany?",
        a: "The APS (Akademische Prüfstelle) certificate is a mandatory document verification process issued by the German Embassy in New Delhi confirming the authenticity of your Indian educational credentials before applying for a student visa."
      }
    ]
  },

  // ==========================================
  // MASTERS IN GERMANY
  // ==========================================
  'masters-germany': {
    slug: 'germany',
    degreeLevel: 'masters',
    countryName: 'Germany',
    flag: '🇩🇪',
    heroHeadline: "Elite Postgraduate Engineering & Research at Low/Zero Tuition: Germany.",
    heroSubtitle: "Study in Europe's technological leader with English-taught Master's degrees, 18-month job seeker visas, and rapid EU Blue Card permanent residency.",
    heroTagline: "Start your Master's journey in Germany",
    badge: "Low/Zero Tuition Master's Hub",
    heroImage: "/images/destinations/germany-dest.png",
    quickFacts: {
      duration: "1.5 to 2 Years",
      intakes: "Winter (October - Major) & Summer (April)",
      postStudyWork: "18-Month Job Seeker Visa",
      avgTuition: "€0 - €3,000 / Year (Public Universities)",
      workRights: "140 full days or 280 half days per year",
      prPathway: "EU Blue Card (Permanent Residency in 21 - 27 months)"
    },
    whyStudy: [
      {
        title: "Virtually Free Higher Education",
        desc: "Enjoy top-ranking world education with zero tuition fees, needing only to fund your personal living expenses via a blocked account."
      },
      {
        title: "18-Month Post-Study Job Seeker Visa",
        desc: "All master's graduates receive 18 months to seek employment matching their qualifications anywhere across Germany."
      },
      {
        title: "EU Blue Card & Fastest PR in Europe",
        desc: "With a qualifying job offer, graduates obtain an EU Blue Card and achieve permanent residency in just 21 months with B1 German proficiency."
      }
    ],
    popularPrograms: [
      {
        title: "MSc in Informatics & Autonomous Systems",
        category: "Computer Science",
        duration: "2 Years",
        avgSalary: "€55,000 - €85,000",
        topRoles: ["AI Engineer", "Autonomous Vehicle Architect", "Embedded Lead"],
        description: "Specialized in artificial intelligence, robotics, and high-performance computing."
      },
      {
        title: "MSc in Automotive & Power Engineering",
        category: "Engineering",
        duration: "2 Years",
        avgSalary: "€52,000 - €80,000",
        topRoles: ["Powertrain Engineer", "Battery Systems Lead", "Automation Specialist"],
        description: "Direct ties with Mercedes-Benz, Porsche, Audi, and Bosch research facilities."
      }
    ],
    topUniversities: [
      {
        name: "Technical University of Munich (TUM)",
        ranking: "TU9 • QS Top 30 World",
        tuition: "€3,000 / Year (Nominal)",
        acceptanceRate: "25%",
        location: "Munich, Germany",
        image: "/images/hero-desktop.png"
      },
      {
        name: "RWTH Aachen University",
        ranking: "Top Engineering School in Germany",
        tuition: "Nominal (~€320/semester)",
        acceptanceRate: "30%",
        location: "Aachen, Germany",
        image: "/images/destinations-landmarks-grand.png"
      }
    ],
    costBreakdown: {
      tuition: "€0 - €3,000 / Year",
      living: "€11,208 / Year (Blocked Account)",
      insurance: "€1,200 / Year",
      misc: "€1,000 / Year",
      total: "€13,408 - €16,408 / Year"
    },
    scholarships: [
      {
        name: "DAAD Master's Studies Scholarships",
        award: "€934 / Month + Health Insurance",
        coverage: "Competitive scholarship for graduates of exceptional academic merit."
      }
    ],
    eligibility: {
      academicRequirements: "Recognized 4-year Bachelor's (B.Tech, B.E.) with minimum 70%+ aggregate, high ECTS credit compatibility, and an APS certificate.",
      standardizedTests: "GRE required by select TU9 universities (e.g. RWTH Aachen, TUM Informatics).",
      englishRequirements: "IELTS 6.5 - 7.0 or PTE 65+.",
      financialSolvency: "Mandatory Blocked Account (Sperrkonto) with €11,208 deposited."
    },
    visaGuide: {
      visaName: "German National Student Visa",
      processingTime: "APS Certificate (4-6 weeks) + Visa (4-6 weeks)",
      proofOfFunds: "Blocked Account confirmation with €11,208",
      interviewRequired: true,
      keyPoints: [
        "Mandatory APS Certificate verification",
        "Blocked account opened with Expatrio/Fintiba",
        "VFS appointment and biometrics"
      ]
    },
    faqs: [
      {
        q: "Are German Master's degrees taught in English?",
        a: "Yes! Thousands of specialized Master of Science programs at public German universities are taught 100% in the English language."
      }
    ]
  },

  // ==========================================
  // BACHELORS IN NEW ZEALAND
  // ==========================================
  'bachelors-new-zealand': {
    slug: 'new-zealand',
    degreeLevel: 'bachelors',
    countryName: 'New Zealand',
    flag: '🇳🇿',
    heroHeadline: "Peaceful, pristine, and world-ranked: Study Bachelor's in New Zealand.",
    heroSubtitle: "Experience world-leading universities across Auckland, Wellington, and Christchurch with vibrant campus cultures and up to 3 years of post-study work rights.",
    heroTagline: "Start your UG journey in New Zealand",
    badge: "Undergraduate Admissions 2025 - 2026",
    heroImage: "/images/destinations/new-zealand-dest.png",
    quickFacts: {
      duration: "3 Years (General) / 4 Years (Engineering/Honours)",
      intakes: "Semester 1 (February) & Semester 2 (July)",
      postStudyWork: "Up to 3 Years (Post Study Work Visa)",
      avgTuition: "NZD 26,000 - NZD 38,000 / Year",
      workRights: "20 hrs/week during study, full-time during vacations",
      prPathway: "Skilled Migrant Category (Points-based Resident Visa)"
    },
    whyStudy: [
      {
        title: "All 8 Universities in the World Top 3%",
        desc: "New Zealand is the only country where 100% of its state universities are ranked in the top 3% globally by QS World University Rankings."
      },
      {
        title: "Generous 3-Year Post-Study Work Visa",
        desc: "International bachelor's graduates in degree-level qualifications are granted up to 3 years to live and work with any employer across New Zealand."
      },
      {
        title: "Safest & Most Welcoming Student Nation",
        desc: "Consistently ranked among the top 3 most peaceful countries in the Global Peace Index, ensuring unmatched student security and wellbeing."
      },
      {
        title: "Hands-On Practical Applied Learning",
        desc: "Close industry linkages, real-world case projects, and collaborative research with environmental and tech laboratories."
      }
    ],
    popularPrograms: [
      {
        title: "Bachelor of Science in Information Technology",
        category: "Computer Science",
        duration: "3 Years",
        avgSalary: "NZD 65,000 - NZD 92,000",
        topRoles: ["Cloud Specialist", "Software Developer", "IT Analyst"],
        description: "Accredited curriculum with hands-on software design and direct connections to Auckland tech incubators."
      },
      {
        title: "Bachelor of Commerce & International Business",
        category: "Business",
        duration: "3 Years",
        avgSalary: "NZD 60,000 - NZD 85,000",
        topRoles: ["Financial Analyst", "Operations Coordinator", "Supply Chain Lead"],
        description: "Focusing on Pacific-rim trade, digital enterprise, and corporate financial planning."
      }
    ],
    topUniversities: [
      {
        name: "University of Auckland",
        ranking: "QS World Top 68",
        tuition: "NZD 36,000 / Year",
        acceptanceRate: "73%",
        location: "Auckland, New Zealand",
        image: "/images/program-bachelors-grand.png"
      },
      {
        name: "University of Otago",
        ranking: "NZ's First University • Top Health & Science",
        tuition: "NZD 31,000 / Year",
        acceptanceRate: "65%",
        location: "Dunedin, New Zealand",
        image: "/images/about-students-grand.png"
      }
    ],
    costBreakdown: {
      tuition: "NZD 26,000 - NZD 38,000 / Year",
      living: "NZD 20,000 / Year (Official Immigration requirement)",
      insurance: "NZD 700 / Year",
      misc: "NZD 1,200 / Year",
      total: "NZD 47,900 - NZD 59,900 / Year"
    },
    scholarships: [
      {
        name: "New Zealand International Student Grant",
        award: "NZD 5,000 to NZD 10,000",
        coverage: "Awarded automatically to high-achieving 12th board applicants."
      }
    ],
    eligibility: {
      academicRequirements: "Recognized 10+2 / Intermediate Certificate with minimum 65% - 75%+ overall aggregate.",
      standardizedTests: "None required. No SAT or ACT needed.",
      englishRequirements: "IELTS Academic 6.0 (min 5.5 each band) or PTE Academic 50+.",
      financialSolvency: "Show NZD 20,000 per year for living expenses + Year 1 paid tuition fee receipt."
    },
    visaGuide: {
      visaName: "New Zealand Fee Paying Student Visa",
      processingTime: "4 - 8 weeks",
      proofOfFunds: "Funds in bank account for 3-6 months or Education Loan Sanction Letter",
      interviewRequired: false,
      keyPoints: [
        "Offer of place from an NZQA-accredited university",
        "Medical chest X-ray and police clearance certificate",
        "Electronic visa approval with working rights endorsement"
      ]
    },
    faqs: [
      {
        q: "What is the post-study work visa duration for New Zealand Bachelor's graduates?",
        a: "Graduates who complete a degree-level undergraduate qualification (NZQA Level 7) in New Zealand receive up to 3 years of unrestricted post-study work rights."
      }
    ]
  },

  // ==========================================
  // MASTERS IN NEW ZEALAND
  // ==========================================
  'masters-new-zealand': {
    slug: 'new-zealand',
    degreeLevel: 'masters',
    countryName: 'New Zealand',
    flag: '🇳🇿',
    heroHeadline: "Specialized Research & High Earning Careers: Study Master's in New Zealand.",
    heroSubtitle: "Earn high-ranking postgraduate qualifications in 1 to 1.5 years, accompanied by a 3-year post-study work visa and spouse open work rights.",
    heroTagline: "Start your Master's journey in New Zealand",
    badge: "Master's & Post-Study Work Hub",
    heroImage: "/images/destinations/new-zealand-dest.png",
    quickFacts: {
      duration: "1 to 1.5 Years (180 NZQA Credits)",
      intakes: "February & July",
      postStudyWork: "3 Full Years (Unrestricted Open Work Visa)",
      avgTuition: "NZD 30,000 - NZD 44,000 / Year",
      workRights: "Full-time work rights for spouse + 20 hrs/week for student",
      prPathway: "Green List Fast-Track & Skilled Migrant Resident Visa"
    },
    whyStudy: [
      {
        title: "3-Year Open Work Visa Post Graduation",
        desc: "All master's graduates (Level 9) qualify for a full 3-year Post-Study Work Visa, allowing ample time to secure roles on the NZ Green List."
      },
      {
        title: "Full Spouse Open Work Rights",
        desc: "Spouses of students enrolled in Level 9 Master's degrees in New Zealand can work full-time, and accompanying children can attend state schools as domestic students."
      },
      {
        title: "Fast-Track Green List PR Occupations",
        desc: "Roles in Software Engineering, ICT, Civil Engineering, and Construction benefit from immediate or 2-year work-to-residence Green List pathways."
      }
    ],
    popularPrograms: [
      {
        title: "Master of Information Technology (MInfoTech)",
        category: "Computer Science",
        duration: "1.5 Years",
        avgSalary: "NZD 75,000 - NZD 110,000",
        topRoles: ["Cloud Engineer", "Software Lead", "Cyber Security Analyst"],
        description: "Joint program with commercial internship placements in New Zealand's thriving tech sector."
      },
      {
        title: "Master of Business Management (MBM)",
        category: "Management",
        duration: "1 Year",
        avgSalary: "NZD 70,000 - NZD 98,000",
        topRoles: ["Business Operations Lead", "Strategy Consultant", "Project Manager"],
        description: "Intensive 12-month program for career switchers without requiring prior management experience."
      }
    ],
    topUniversities: [
      {
        name: "University of Auckland",
        ranking: "QS World Top 68",
        tuition: "NZD 38,000 / Year",
        acceptanceRate: "73%",
        location: "Auckland, New Zealand",
        image: "/images/hero-desktop.png"
      },
      {
        name: "University of Canterbury",
        ranking: "World-Renowned Engineering Faculty",
        tuition: "NZD 34,000 / Year",
        acceptanceRate: "68%",
        location: "Christchurch, New Zealand",
        image: "/images/about-students-headquarters-grand.png"
      }
    ],
    costBreakdown: {
      tuition: "NZD 30,000 - NZD 42,000 / Year",
      living: "NZD 20,000 / Year",
      insurance: "NZD 750 / Year",
      misc: "NZD 1,500 / Year",
      total: "NZD 52,250 - NZD 64,250 / Year"
    },
    scholarships: [
      {
        name: "Auckland International Master's Scholarship",
        award: "Up to NZD 10,000",
        coverage: "Competitive merit award for outstanding postgraduate applicants."
      }
    ],
    eligibility: {
      academicRequirements: "Recognized Bachelor's degree (3-year or 4-year) with minimum 60% aggregate.",
      standardizedTests: "No GRE / GMAT required.",
      englishRequirements: "IELTS 6.5 (min 6.0 in each band) or PTE Academic 58+.",
      financialSolvency: "NZD 20,000 living costs + first year tuition proof."
    },
    visaGuide: {
      visaName: "New Zealand Student Visa",
      processingTime: "4 - 8 weeks",
      proofOfFunds: "Funds in approved bank account",
      interviewRequired: false,
      keyPoints: [
        "Unconditional offer of place + tuition payment receipt",
        "Spouse and dependent child visa applications supported simultaneously"
      ]
    },
    faqs: [
      {
        q: "Can my spouse work full-time in New Zealand while I study a Master's?",
        a: "Yes! If you are enrolled in a Level 9 Master's program, your partner can apply for a Partner of a Student Work Visa allowing unrestricted full-time employment."
      }
    ]
  },

  // ==========================================
  // BACHELORS IN FRANCE & EUROPE
  // ==========================================
  'bachelors-france': {
    slug: 'france',
    degreeLevel: 'bachelors',
    countryName: 'France',
    flag: '🇫🇷',
    heroHeadline: "Elite Business & Engineering in English: Study Bachelor's in France.",
    heroSubtitle: "Study in world-capital Paris, Lyon, or Nice at prestigious Grandes Écoles with subsidized European living and 2-year post-study work authorization.",
    heroTagline: "Start your UG journey in France",
    badge: "Undergraduate Admissions 2025 - 2026",
    heroImage: "/images/destinations/europe-france-dest.png",
    quickFacts: {
      duration: "3 Years (Bachelor / Licence)",
      intakes: "September/October (Major) & January",
      postStudyWork: "Up to 2 Years (APS / Post-Study Work Residence Permit)",
      avgTuition: "€7,500 - €14,000 / Year",
      workRights: "964 hours per year (approx 20 hrs/week)",
      prPathway: "Passeport Talent & EU Blue Card"
    },
    whyStudy: [
      {
        title: "100% English-Taught Undergraduate Programs",
        desc: "Over 1,500 degree programs in France are taught entirely in English, allowing international students to earn European degrees without initial French proficiency."
      },
      {
        title: "CAF Housing Subsidies for Students",
        desc: "The French government (CAF) provides monthly housing subsidies covering 20% to 40% of student accommodation rent for all international students."
      },
      {
        title: "Gateway to the 29 Schengen Countries",
        desc: "A French student visa grants unrestricted travel and internship access across all 29 European Schengen member states."
      }
    ],
    popularPrograms: [
      {
        title: "BBA in International Management & Digital Strategy",
        category: "Business",
        duration: "3 Years",
        avgSalary: "€38,000 - €55,000",
        topRoles: ["Brand Specialist", "Digital Operations Analyst", "Global Trade Associate"],
        description: "AACSB and EQUIS accredited business curriculum with European corporate internships."
      }
    ],
    topUniversities: [
      {
        name: "SKEMA Business School",
        ranking: "Top European Business School",
        tuition: "€11,000 / Year",
        acceptanceRate: "55%",
        location: "Paris & Sophia Antipolis, France",
        image: "/images/about-students-grand.png"
      },
      {
        name: "Emlyon Business School",
        ranking: "Triple Crown Accredited (AACSB, EQUIS, AMBA)",
        tuition: "€13,500 / Year",
        acceptanceRate: "45%",
        location: "Lyon, France",
        image: "/images/program-bachelors-grand.png"
      }
    ],
    costBreakdown: {
      tuition: "€7,500 - €14,000 / Year",
      living: "€7,380 / Year (Official Campus France minimum €615/mo)",
      insurance: "€0 (Free French National Social Security for students)",
      misc: "€800 / Year",
      total: "€15,680 - €22,180 / Year (Offset by CAF housing subsidy)"
    },
    scholarships: [
      {
        name: "Charpak Scholarship of Excellence (French Embassy)",
        award: "Full Tuition Waiver + €860/Month Living Allowance",
        coverage: "Competitive Indian student grant awarded by the French Embassy in India."
      }
    ],
    eligibility: {
      academicRequirements: "Recognized 10+2 / Intermediate certificate with minimum 60% - 70%+ overall marks.",
      standardizedTests: "None required.",
      englishRequirements: "IELTS 6.0 or PTE 50+ or English medium certificate.",
      financialSolvency: "Show €7,380 in bank balance (€615/month for 12 months) + paid tuition deposit."
    },
    visaGuide: {
      visaName: "France Long Stay Student Visa (VLS-TS)",
      processingTime: "Etudes en France (Campus France) interview + Visa in 3-5 weeks",
      proofOfFunds: "Show €615/month maintenance",
      interviewRequired: true,
      keyPoints: [
        "Campus France academic interview (Hyderabad, Chennai, Bangalore, Delhi)",
        "VFS biometrics submission",
        "Free healthcare enrollment via French social security system upon arrival"
      ]
    },
    faqs: [
      {
        q: "What is the CAF housing subsidy in France?",
        a: "CAF (Caisse d'Allocations Familiales) is a French government program that refunds international students approximately €100 to €220 every month toward their student accommodation costs."
      }
    ]
  },

  // ==========================================
  // MASTERS IN FRANCE & EUROPE
  // ==========================================
  'masters-france': {
    slug: 'france',
    degreeLevel: 'masters',
    countryName: 'France',
    flag: '🇫🇷',
    heroHeadline: "Triple Crown Management & Technology: Study Master's in France.",
    heroSubtitle: "Study in Paris at world top-ranked business schools (HEC, ESSEC, EDHEC) and elite engineering Grandes Écoles with 2-year post-study work permits.",
    heroTagline: "Start your Master's journey in France",
    badge: "European Elite Business & Tech Hub",
    heroImage: "/images/destinations/europe-france-dest.png",
    quickFacts: {
      duration: "1 to 2 Years (MSc & MiM Degrees)",
      intakes: "September/October & January/February",
      postStudyWork: "Up to 2 Years (APS Residence Permit)",
      avgTuition: "€9,000 - €18,000 / Year",
      workRights: "964 hours per year (approx 20 hrs/week)",
      prPathway: "Passeport Talent & EU Blue Card"
    },
    whyStudy: [
      {
        title: "Ranked #1 for Masters in Management (FT Rankings)",
        desc: "France dominates the Financial Times global rankings for Master in Management (MiM) and Finance degrees with unmatched corporate recruitment across Europe."
      },
      {
        title: "2-Year Post-Study Stay Back (APS)",
        desc: "Indian students holding a master's degree from France are granted a 2-year post-study work visa (APS), and are eligible for a 5-year short-stay Schengen visa."
      },
      {
        title: "Subsidized Living & Health Insurance",
        desc: "Free national healthcare, CAF housing subsidies of up to 40%, and European discounts for students under 26 years of age."
      }
    ],
    popularPrograms: [
      {
        title: "Master in Management (MiM) & International Business",
        category: "Management",
        duration: "2 Years",
        avgSalary: "€45,000 - €70,000",
        topRoles: ["Management Consultant", "Product Lead", "Investment Analyst"],
        description: "Ranked globally for rapid executive placement in London, Paris, Frankfurt, and Zurich."
      },
      {
        title: "MSc in Artificial Intelligence & Data Management",
        category: "Computer Science",
        duration: "1.5 - 2 Years",
        avgSalary: "€46,000 - €72,000",
        topRoles: ["AI Specialist", "Data Architect", "Algorithm Engineer"],
        description: "Specialized in deep learning, neural networks, and industrial robotics in Europe's AI research centers."
      }
    ],
    topUniversities: [
      {
        name: "SKEMA Business School",
        ranking: "FT World Top 25 Master's in Finance",
        tuition: "€14,000 / Year",
        acceptanceRate: "50%",
        location: "Paris, France",
        image: "/images/about-students-grand.png"
      },
      {
        name: "Grenoble Ecole de Management (GEM)",
        ranking: "Triple Crown Accredited • Tech & Innovation",
        tuition: "€13,500 / Year",
        acceptanceRate: "52%",
        location: "Grenoble & Paris, France",
        image: "/images/program-masters-grand.png"
      }
    ],
    costBreakdown: {
      tuition: "€9,000 - €18,000 / Year",
      living: "€7,380 / Year (€615/month official minimum)",
      insurance: "€0 (Free National Health Insurance)",
      misc: "€800 / Year",
      total: "€17,180 - €26,180 / Year"
    },
    scholarships: [
      {
        name: "Charpak Master's Scholarship",
        award: "Full Tuition + €860/Month Stipend",
        coverage: "Official flagship scholarship from the Embassy of France in India."
      },
      {
        name: "Early Bird & Dean's Merit Award",
        award: "€2,000 to €5,000",
        coverage: "Awarded automatically upon early application and deposit payment."
      }
    ],
    eligibility: {
      academicRequirements: "Recognized 3-year or 4-year Bachelor's degree with minimum 55% - 65% aggregate.",
      standardizedTests: "GMAT / GRE optional; waived at most partner business schools.",
      englishRequirements: "IELTS 6.5 (min 6.0 each) or PTE 58-65.",
      financialSolvency: "Show €7,380 living expense maintenance in bank balance + tuition deposit."
    },
    visaGuide: {
      visaName: "France Long Stay Student Visa (VLS-TS)",
      processingTime: "Campus France interview + Visa in 3-4 weeks",
      proofOfFunds: "Show €615/month living funds",
      interviewRequired: true,
      keyPoints: [
        "Campus France interview evaluating academic motivation",
        "VFS biometrics submission",
        "5-year Schengen visa privilege awarded to Indian alumni"
      ]
    },
    faqs: [
      {
        q: "Do I need to know French to study a Master's in France?",
        a: "No! All programs guided by IQ Overseas in France are taught 100% in English. You can learn basic French during your studies for day-to-day social interactions."
      }
    ]
  },

  // Europe Fallback alias
  'bachelors-europe': {
    slug: 'europe',
    degreeLevel: 'bachelors',
    countryName: 'France & Europe',
    flag: '🇪🇺',
    heroHeadline: "Elite European Education in English: Study Bachelor's in Europe.",
    heroSubtitle: "Explore top universities across France, Germany, Ireland, and the Netherlands with affordable tuition and 27-country Schengen mobility.",
    heroTagline: "Start your UG journey in Europe",
    badge: "European Union Admissions 2025 - 2026",
    heroImage: "/images/destinations/europe-france-dest.png",
    quickFacts: {
      duration: "3 to 4 Years",
      intakes: "September/October & January",
      postStudyWork: "1.5 to 2 Years (EU Country Specific)",
      avgTuition: "€3,000 - €14,000 / Year",
      workRights: "20 hrs/week across EU countries",
      prPathway: "EU Blue Card & National Work Permits"
    },
    whyStudy: [
      {
        title: "Affordable European Tuition & Zero Fees",
        desc: "European universities offer world-leading quality at a fraction of US/UK costs, with countries like Germany offering virtually tuition-free education."
      },
      {
        title: "29 Schengen Countries Travel & Work Mobility",
        desc: "Your student visa provides borderless access across France, Germany, Italy, Spain, Sweden, and Switzerland."
      }
    ],
    popularPrograms: [
      {
        title: "Bachelor in International Business & Technology",
        category: "Business",
        duration: "3 Years",
        avgSalary: "€40,000 - €58,000",
        topRoles: ["International Operations", "Product Specialist", "Business Analyst"],
        description: "Multi-campus European business degree with pan-European corporate internships."
      }
    ],
    topUniversities: [
      {
        name: "SKEMA Business School",
        ranking: "Top European Business School",
        tuition: "€11,000 / Year",
        acceptanceRate: "55%",
        location: "Paris, France",
        image: "/images/about-students-grand.png"
      }
    ],
    costBreakdown: {
      tuition: "€3,000 - €12,000 / Year",
      living: "€8,000 - €12,000 / Year",
      insurance: "€500 / Year",
      misc: "€800 / Year",
      total: "€12,300 - €25,300 / Year"
    },
    scholarships: [
      {
        name: "Erasmus+ & National European Grants",
        award: "€2,000 to €8,000",
        coverage: "Available for outstanding international scholars."
      }
    ],
    eligibility: {
      academicRequirements: "Recognized 10+2 with minimum 65%+ aggregate.",
      standardizedTests: "None required.",
      englishRequirements: "IELTS 6.0 - 6.5 or PTE 58+.",
      financialSolvency: "Country-specific maintenance fund proof."
    },
    visaGuide: {
      visaName: "European National Student Visa (Schengen)",
      processingTime: "4 - 8 weeks",
      proofOfFunds: "Show living expenses + tuition deposit",
      interviewRequired: true,
      keyPoints: ["Campus France / APS / VFS submission based on chosen destination"]
    },
    faqs: [
      {
        q: "Can I travel to other European countries on a French or German student visa?",
        a: "Yes! A student visa from any Schengen member state allows visa-free travel across all 29 Schengen member countries during your studies."
      }
    ]
  },

  'masters-europe': {
    slug: 'europe',
    degreeLevel: 'masters',
    countryName: 'France & Europe',
    flag: '🇪🇺',
    heroHeadline: "Lead European Business & Technology: Study Master's in Europe.",
    heroSubtitle: "Earn prestigious European Master of Science & Management degrees with 1.5 to 2 years post-study work authorization and EU Blue Card pathways.",
    heroTagline: "Start your Master's journey in Europe",
    badge: "European Postgraduate Hub",
    heroImage: "/images/destinations/europe-france-dest.png",
    quickFacts: {
      duration: "1 to 2 Years",
      intakes: "September & January",
      postStudyWork: "18 Months to 2 Years",
      avgTuition: "€3,000 - €18,000 / Year",
      workRights: "20 hrs/week during terms",
      prPathway: "EU Blue Card (PR in 21 - 27 months)"
    },
    whyStudy: [
      {
        title: "World Leading Return on Investment",
        desc: "European master's programs combine low tuition with high multinational salaries (€45,000–€75,000) across automotive, tech, and financial hubs."
      },
      {
        title: "Fast-Track EU Blue Card Residency",
        desc: "EU Blue Card regulations allow qualified master's graduates to achieve permanent European residency in just 21-27 months."
      }
    ],
    popularPrograms: [
      {
        title: "Master in Management (MiM) & Global Strategy",
        category: "Management",
        duration: "2 Years",
        avgSalary: "€48,000 - €72,000",
        topRoles: ["Management Consultant", "Supply Chain Lead", "Strategic Planner"],
        description: "Equipping graduates for leadership roles in Paris, Munich, Amsterdam, and London."
      }
    ],
    topUniversities: [
      {
        name: "SKEMA Business School",
        ranking: "FT World Top 25",
        tuition: "€14,000 / Year",
        acceptanceRate: "50%",
        location: "Paris, France",
        image: "/images/about-students-grand.png"
      }
    ],
    costBreakdown: {
      tuition: "€3,000 - €16,000 / Year",
      living: "€8,000 - €12,000 / Year",
      insurance: "€600 / Year",
      misc: "€1,000 / Year",
      total: "€12,600 - €29,600 / Year"
    },
    scholarships: [
      {
        name: "European International Merit Award",
        award: "€3,000 to €8,000",
        coverage: "Awarded automatically based on undergraduate GPA."
      }
    ],
    eligibility: {
      academicRequirements: "Recognized Bachelor's degree (3-year or 4-year) with minimum 60% aggregate.",
      standardizedTests: "GMAT / GRE waived at most European partner institutions.",
      englishRequirements: "IELTS 6.5 or PTE 60+.",
      financialSolvency: "Proof of country-specific maintenance in personal account."
    },
    visaGuide: {
      visaName: "European Student Visa",
      processingTime: "4 - 6 weeks",
      proofOfFunds: "Show living funds + tuition receipt",
      interviewRequired: true,
      keyPoints: ["Full documentation and visa interview preparation provided by IQ Overseas"]
    },
    faqs: [
      {
        q: "What is the EU Blue Card?",
        a: "The EU Blue Card is a work and residence permit for non-EU highly qualified workers that grants generous family reunification rights and permanent residency in as little as 21 months."
      }
    ]
  }
};
