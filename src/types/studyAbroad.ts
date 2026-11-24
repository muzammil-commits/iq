export interface CountryQuickFacts {
  country: string;
  capital: string;
  popularCities: string;
  currency: string;
  language: string;
  popularIntakes: string;
  topCourses: string;
  avgTuitionFee: string;
  postStudyWork: string;
  workRights: string;
}

export interface EducationComparisonRow {
  aspect: string;
  undergraduate: string;
  postgraduate: string;
}

export interface WhyStudyBenefit {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export interface CourseDetail {
  id: string;
  title: string;
  category: string;
  description: string;
  duration?: string;
  careerRoles?: string[];
}

export interface ScholarshipItem {
  id: string;
  name: string;
  provider: string;
  award: string;
  eligibility: string;
}

export interface IntakeItem {
  name: string;
  period: string;
  deadline?: string;
  remarks?: string;
}

export interface StudyProgramItem {
  level: string;
  duration: string;
  description: string;
  outcomes?: string;
}

export interface EnglishTestRequirement {
  ug: string;
  pg: string;
  notes?: string;
}

export interface CostBreakdown {
  bachelorsTuition: string;
  mastersTuition: string;
  livingExpenses: string;
  healthInsurance?: string;
  visaFee?: string;
  additionalNotes?: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface SubDestinationCard {
  id: string;
  country: string;
  flag: string;
  image: string;
  capital: string;
  description: string;
  avgTuition: string;
  psw: string;
  slug: string;
}

export interface CountryPageData {
  id: string;
  slug: string; // e.g. "australia", "uk", "europe", "usa", "canada", "ireland", "new-zealand", "malaysia", "singapore", "dubai"
  name: string;
  flag: string;
  isPublished: boolean;
  order: number;
  seoTitle: string;
  seoDescription: string;
  
  // Section 1: Hero Banner
  heroBanner: {
    imageUrl: string;
    headline: string;
    subtitle: string;
    badge: string;
    stats: { label: string; value: string }[];
  };

  // Section 2: Country Introduction
  introduction: {
    heading: string;
    subheading?: string;
    paragraphs: string[];
    highlights: string[];
  };

  // Section 3: Quick Facts Table
  quickFacts: CountryQuickFacts;

  // Section 4: Education System / Landscape
  educationLandscape: {
    intro: string;
    bulletPoints: string[];
    comparisonTable: EducationComparisonRow[];
  };

  // Section 5: Why Study in This Country?
  whyStudyBenefits: WhyStudyBenefit[];

  // Section 6: Top Courses to Study
  topCourses: CourseDetail[];

  // Section 7: Scholarships
  scholarships: {
    intro: string;
    items: ScholarshipItem[];
  };

  // Section 8: Admission Intakes
  admissionIntakes: {
    intro: string;
    items: IntakeItem[];
  };

  // Section 9: Study Programs
  studyPrograms: {
    intro: string;
    items: StudyProgramItem[];
  };

  // Section 10: English Language Requirements
  englishRequirements: {
    intro: string;
    ielts: EnglishTestRequirement;
    pte: EnglishTestRequirement;
    toefl: EnglishTestRequirement;
    duolingo?: EnglishTestRequirement;
  };

  // Section 11: Entry Requirements
  entryRequirements: {
    intro: string;
    criteria: string[];
    academicPercentage: string;
    backlogPolicy: string;
  };

  // Section 12: Cost of Studying
  costOfStudying: CostBreakdown;

  // Section 13: Documents Required
  documentsRequired: {
    admissionDocuments: string[];
    visaDocuments: string[];
  };

  // Section 14: Work Opportunities
  workOpportunities: {
    partTimeRules: string;
    vacationRules: string;
    minimumWage: string;
    postStudyWorkVisa: string;
  };

  // Section 15: PR and Career Pathways
  prPathways: {
    intro: string;
    pathways: string[];
    disclaimer: string;
  };

  // Section 16: Frequently Asked Questions
  faqs: FaqItem[];

  // Optional: European Destinations (Only for Europe)
  subDestinations?: SubDestinationCard[];
}
