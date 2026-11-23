export interface ServiceItem {
  id: string;
  slug: string;
  number: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  badge?: string;
  image: string;
  keyHighlights: string[];
  processSteps: {
    step: string;
    title: string;
    description: string;
  }[];
  documentsRequired: string[];
  benefits: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export interface HeroSlide {
  id: string;
  category: string;
  title: string;
  highlightedText: string;
  subtitle: string;
  description: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
  desktopImage: string;
  mobileImage: string;
}

export interface ValueItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface DestinationItem {
  id: string;
  country: string;
  flag: string;
  popularCourses: string[];
  intakes: string[];
  workRights: string;
  avgTuition: string;
  description: string;
  image: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  course: string;
  destination: string;
  university?: string;
  story: string;
  rating: number;
  image: string;
}

export interface FaqItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export interface TrainingItem {
  id: string;
  title: string;
  category: string;
  duration: string;
  eligibility: string;
  mode: string;
  description: string;
  highlights: string[];
  scoreTarget: string;
}

export interface ProgramOverview {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  link: string;
  keyPillars: {
    title: string;
    desc: string;
  }[];
}

export interface ContactFormData {
  fullName: string;
  phoneNumber: string;
  email: string;
  preferredService: string;
  studyLevel?: string;
  preferredDestination?: string;
  message: string;
}
