import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  GraduationCap,
  ArrowRight,
  CheckCircle2,
  BookOpen,
  Briefcase,
  Clock,
  Sparkles,
  Award,
  Globe,
  DollarSign,
  FileText,
  ChevronDown,
  Building2,
  ShieldCheck,
  Check,
  TrendingUp,
  Compass,
  Headphones,
  Calendar,
  Layers,
  MapPin,
  HeartHandshake,
  Users
} from 'lucide-react';
import { PageHero } from '../components/PageHero';
import {
  BACHELOR_CATEGORIES,
  BACHELOR_COURSES,
  BACHELOR_ADMISSION_STEPS,
  BACHELOR_COUNTRIES,
  BACHELOR_FAQS
} from '../data/bachelorsData';
import { POPULAR_UNIVERSITIES } from '../data/mastersData';

interface BachelorsPageProps {
  onOpenConsultation: () => void;
}

export const BachelorsPage: React.FC<BachelorsPageProps> = ({ onOpenConsultation }) => {
  const [selectedCategory, setSelectedCategory] = useState('All Degrees');
  const [selectedCountrySlug, setSelectedCountrySlug] = useState('usa');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  const filteredCourses = selectedCategory === 'All Degrees'
    ? BACHELOR_COURSES
    : BACHELOR_COURSES.filter(c => c.category === selectedCategory);

  const activeCountry = BACHELOR_COUNTRIES.find(c => c.slug === selectedCountrySlug) || BACHELOR_COUNTRIES[0];

  return (
    <div className="w-full bg-white text-slate-800">
      
      {/* 1. BACHELORS HERO SECTION */}
      <PageHero
        title="Study Undergraduate Degrees Abroad"
        highlightedWord="Shape Your Foundation"
        subtitle="Embark on a world-class 3 or 4-year Bachelor’s journey right after 12th grade. Gain practical skills, paid co-op internships, and direct pathways to top global corporations."
        badge="Undergraduate Admissions 2025 - 2026"
        breadcrumbs={[{ label: 'Bachelors Programs' }]}
        onOpenConsultation={onOpenConsultation}
      />

      {/* QUICK METRICS BAR */}
      <section className="bg-slate-50 border-y border-slate-200/80 py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
              <div className="text-2xl sm:text-3xl font-black text-iq-navy">10+2 Direct</div>
              <div className="text-xs sm:text-sm text-slate-600 font-medium mt-1">Direct Entry for CBSE / ICSE / State Board</div>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
              <div className="text-2xl sm:text-3xl font-black text-iq-red">Paid Co-Op</div>
              <div className="text-xs sm:text-sm text-slate-600 font-medium mt-1">Earn While You Learn in Canada & USA</div>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
              <div className="text-2xl sm:text-3xl font-black text-iq-navy">3 to 4 Years</div>
              <div className="text-xs sm:text-sm text-slate-600 font-medium mt-1">Flexible Degree Durations</div>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
              <div className="text-2xl sm:text-3xl font-black text-iq-red">Up to 100%</div>
              <div className="text-xs sm:text-sm text-slate-600 font-medium mt-1">Merit & Presidential Scholarships</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTRODUCTION TO UNDERGRADUATE EDUCATION ABROAD */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-iq-red font-bold text-xs uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Undergraduate Education Reimagined</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-iq-navy tracking-tight leading-tight">
                Build a Global Future from Year One with an <span className="text-iq-red">International Bachelor's</span>
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                Starting your undergraduate journey overseas immediately after higher secondary education provides an unmatched head-start. You master cutting-edge industry methodologies, engage in cross-disciplinary projects, and establish deep roots in international job markets four years ahead of standard postgraduate applicants.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Whether choosing a flexible 4-year American Bachelor's with double majors, an intensive 3-year British honors degree, or a Canadian university with structured 4-term paid Co-Op internships, IQ Overseas ensures every step—from SAT coaching and essay drafting to university selection and visa interview training—is seamless and successful.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                {[
                  'Hands-on research labs & project-based grading',
                  'Flexibility to choose or change majors in Year 2',
                  'On-campus safety guarantees & residential living',
                  'Early post-study work authorization & global mobility'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-slate-800">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <button
                  onClick={onOpenConsultation}
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-iq-red hover:bg-iq-red-hover text-white text-sm sm:text-base font-bold rounded-xl shadow-md transition-all cursor-pointer"
                >
                  <span>Evaluate My 12th Marks for Admission</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 group">
                <img
                  src="/images/about-students-headquarters-grand.png"
                  alt="Undergraduate international students smiling on campus lawn"
                  className="w-full h-[380px] sm:h-[440px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-iq-navy/90 via-iq-navy/20 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="text-xs uppercase tracking-widest font-bold text-red-300">Undergraduate Life</div>
                  <div className="text-lg font-bold mt-1">Holistic Academic & Personal Development</div>
                  <div className="text-xs text-slate-200 mt-1">Over 200+ Student Clubs, Sports & Hackathons</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY STUDY BACHELORS ABROAD? */}
      <section className="py-14 sm:py-20 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-iq-navy font-bold text-xs uppercase tracking-wider mb-2">
              <Award className="w-3.5 h-3.5 text-iq-red" />
              <span>Unmatched Undergraduate Advantages</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-iq-navy tracking-tight">
              Why Study a Bachelor's Degree Abroad?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Understand why ambitious students and forward-thinking parents choose international undergraduate education over domestic colleges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-red-100 text-iq-red flex items-center justify-center mb-4">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-iq-navy mb-2">Paid Co-Op Internships</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Programs in Canada, USA, and Europe integrate 3 to 4 semesters of paid industry internships, allowing students to earn up to $30,000–$45,000 before graduating.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-iq-navy flex items-center justify-center mb-4">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-iq-navy mb-2">Flexible Curriculum</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Unlike rigid domestic curriculums, international universities allow you to customize your studies with double majors (e.g. Computer Science + Economics) and interdisciplinary minors.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-iq-navy mb-2">Early Global Career Trajectory</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Undergraduate international alumni enter multinational corporations at average starting packages of $70,000 to $115,000 with recognized professional certifications.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-iq-navy mb-2">Immersive Cultural Independence</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Living on international campuses fosters critical problem-solving, self-reliance, cross-cultural collaboration, and friendships spanning 50+ countries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BEST UNDERGRADUATE COURSES (ROW-WISE CATEGORY ORGANIZATION) */}
      <section id="bachelor-courses" className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-iq-red font-bold text-xs uppercase tracking-wider mb-2">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Top Disciplines</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-iq-navy tracking-tight">
              Best Undergraduate Courses Abroad
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Browse world-recognized Bachelor of Science (B.S.), Engineering (B.Eng), and Business (BBA) degrees.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {BACHELOR_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-iq-navy text-white shadow-md'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Row-wise Course Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="relative h-44 overflow-hidden bg-slate-100">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
                    {course.badge && (
                      <span className="absolute top-3 left-3 bg-iq-red text-white text-[11px] font-extrabold px-2.5 py-1 rounded-md shadow-xs uppercase tracking-wider">
                        {course.badge}
                      </span>
                    )}
                    <span className="absolute bottom-2.5 left-3 text-white text-xs font-semibold">
                      {course.category}
                    </span>
                  </div>

                  <div className="p-5 sm:p-6 space-y-3">
                    <h3 className="text-lg font-bold text-iq-navy group-hover:text-iq-red transition-colors line-clamp-1">
                      {course.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
                      {course.description}
                    </p>

                    <div className="pt-2 border-t border-slate-100 space-y-2 text-xs">
                      <div className="flex items-center justify-between text-slate-600">
                        <span className="flex items-center gap-1.5 text-slate-500">
                          <Clock className="w-3.5 h-3.5 text-iq-red" /> Duration:
                        </span>
                        <span className="font-bold text-slate-800">{course.duration}</span>
                      </div>
                      <div className="flex items-center justify-between text-slate-600">
                        <span className="flex items-center gap-1.5 text-slate-500">
                          <DollarSign className="w-3.5 h-3.5 text-emerald-600" /> Starting Salary:
                        </span>
                        <span className="font-bold text-emerald-700">{course.avgStartingSalary}</span>
                      </div>
                      <div className="flex items-center justify-between text-slate-600">
                        <span className="flex items-center gap-1.5 text-slate-500">
                          <Calendar className="w-3.5 h-3.5 text-blue-600" /> Intakes:
                        </span>
                        <span className="font-semibold text-slate-700">{course.intakes}</span>
                      </div>
                    </div>

                    <div className="pt-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                        Career Roles:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {course.careerProspects.map((prospect, pIdx) => (
                          <span
                            key={pIdx}
                            className="bg-slate-100 text-slate-700 text-[11px] font-medium px-2 py-0.5 rounded-md"
                          >
                            {prospect}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-5 sm:p-6 pt-0">
                  <button
                    onClick={onOpenConsultation}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-slate-50 hover:bg-iq-navy text-iq-navy hover:text-white border border-slate-200 hover:border-iq-navy rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer"
                  >
                    <span>Check 12th Cut-Off & Eligibility</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. ADMISSION PROCESS (6-STEP NUMBERED TIMELINE) */}
      <section className="py-14 sm:py-20 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-iq-navy font-bold text-xs uppercase tracking-wider mb-2">
              <Compass className="w-3.5 h-3.5 text-iq-red" />
              <span>Step-by-Step Admissions Timeline</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-iq-navy tracking-tight">
              Undergraduate Admission Process
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Follow our proven 6-step roadmap designed specifically for high school graduates and intermediate students.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BACHELOR_ADMISSION_STEPS.map((step) => (
              <div
                key={step.step}
                className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-xs relative group hover:border-iq-navy transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-3xl font-black text-slate-300 group-hover:text-iq-red transition-colors">
                    {step.step}
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-1 bg-slate-100 rounded-md text-slate-600">
                    {step.timeline}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-iq-navy mb-1">{step.title}</h3>
                <div className="text-xs font-semibold text-iq-red mb-2">{step.subtitle}</div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {step.description}
                </p>
                <div className="pt-3 border-t border-slate-100 flex items-start gap-2 text-xs font-medium text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Key Action:</strong> {step.keyAction}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. ELIGIBILITY REQUIREMENTS (ACADEMIC, TEST, LANGUAGE, FINANCIALS) */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-iq-red font-bold text-xs uppercase tracking-wider mb-2">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Undergraduate Criteria</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-iq-navy tracking-tight">
              Undergraduate Eligibility Requirements
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Transparent, benchmarked requirements across high school grades, standardized entrance exams, and parent sponsorship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-red-100 text-iq-red flex items-center justify-center font-bold">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-iq-navy">1. High School Grades</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Recognized 10+2 / Intermediate qualification (CBSE, ICSE, or State Board).
              </p>
              <ul className="text-xs text-slate-700 space-y-1.5 pt-1">
                <li>• Tier-1 Universities: 75% - 90%+</li>
                <li>• Top Comprehensive: 60% - 75%</li>
                <li>• Mathematics required for CS/Engg</li>
              </ul>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-blue-100 text-iq-navy flex items-center justify-center font-bold">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-iq-navy">2. Standardized Tests</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Digital SAT or ACT scores for US/Canadian admissions & merit awards.
              </p>
              <ul className="text-xs text-slate-700 space-y-1.5 pt-1">
                <li>• Digital SAT: 1250 - 1500+</li>
                <li>• ACT Composite: 26 - 33+</li>
                <li>• Many US universities test-optional</li>
              </ul>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-iq-navy">3. English Language</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Standardized English score proving classroom communication readiness.
              </p>
              <ul className="text-xs text-slate-700 space-y-1.5 pt-1">
                <li>• IELTS Academic: 6.0 - 6.5</li>
                <li>• PTE Academic: 50 - 58+</li>
                <li>• TOEFL iBT: 75 - 88+</li>
              </ul>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
                <DollarSign className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-iq-navy">4. Financial Solvency</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Proof of funding for Year 1 tuition and living costs for visa approval.
              </p>
              <ul className="text-xs text-slate-700 space-y-1.5 pt-1">
                <li>• Bank Balance & Fixed Deposits</li>
                <li>• Education Loan Sanctions</li>
                <li>• Parent Sponsorship Affidavits</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 7. COUNTRY-WISE STUDY OPPORTUNITIES */}
      <section className="py-14 sm:py-20 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-iq-navy font-bold text-xs uppercase tracking-wider mb-2">
              <Globe className="w-3.5 h-3.5 text-iq-red" />
              <span>Global Horizons</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-iq-navy tracking-tight">
              Country-Wise Undergraduate Opportunities
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Explore undergraduate degree structures, post-study work regulations, and tuition fees across 6 premier countries.
            </p>
          </div>

          <div className="flex overflow-x-auto no-scrollbar gap-2 pb-2 mb-8 justify-start lg:justify-center">
            {BACHELOR_COUNTRIES.map((cty) => (
              <button
                key={cty.slug}
                onClick={() => setSelectedCountrySlug(cty.slug)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCountrySlug === cty.slug
                    ? 'bg-iq-red text-white shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                <span>{cty.flag}</span>
                <span>{cty.country}</span>
              </button>
            ))}
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{activeCountry.flag}</span>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-black text-iq-navy">
                      Study Bachelor's in {activeCountry.country}
                    </h3>
                    <div className="text-xs text-slate-500 font-medium">Standard Duration: {activeCountry.duration}</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                    <span className="text-[11px] text-slate-500 block font-medium">Post-Study Work:</span>
                    <span className="text-sm font-bold text-iq-red">{activeCountry.pswRights}</span>
                  </div>
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                    <span className="text-[11px] text-slate-500 block font-medium">Avg Tuition / Yr:</span>
                    <span className="text-sm font-bold text-slate-800">{activeCountry.avgTuition}</span>
                  </div>
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                    <span className="text-[11px] text-slate-500 block font-medium">Main Intakes:</span>
                    <span className="text-sm font-bold text-slate-800">{activeCountry.intakes}</span>
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Highlights for Undergraduates:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeCountry.highlights.map((h, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Renowned Universities:</h4>
                  <div className="flex flex-wrap gap-2">
                    {activeCountry.topUnis.map((uni, idx) => (
                      <span key={idx} className="px-3 py-1 bg-blue-50 text-iq-navy rounded-lg text-xs font-semibold border border-blue-100">
                        {uni}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 bg-gradient-to-br from-iq-navy to-slate-900 text-white p-6 sm:p-8 rounded-2xl space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-bold uppercase text-red-300">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Free Profile Evaluation</span>
                </div>
                <h4 className="text-xl font-bold">
                  Start Your Undergraduate Journey in {activeCountry.country}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  IQ Overseas assists high school seniors and parents with college shortlisting, Common App & UCAS applications, essay editing, and visa processing.
                </p>
                <div className="space-y-2 pt-2 text-xs">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Parent financial planning & education loan guidance</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Digital SAT diagnostic test and personalized coaching</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>High-approval student visa preparation and mock rounds</span>
                  </div>
                </div>
                <button
                  onClick={onOpenConsultation}
                  className="w-full mt-4 py-3 bg-iq-red hover:bg-iq-red-hover text-white rounded-xl text-sm font-bold shadow-lg transition-all cursor-pointer"
                >
                  Apply to {activeCountry.country} Undergrad Programs
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. POPULAR UNIVERSITIES CARDS (ROW-WISE) */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-iq-red font-bold text-xs uppercase tracking-wider mb-2">
              <Building2 className="w-3.5 h-3.5" />
              <span>World-Ranked Campuses</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-iq-navy tracking-tight">
              Popular Global Universities for Bachelors
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Exceptional international campuses offering high undergraduate safety, vibrant campus life, and top employer connections.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {POPULAR_UNIVERSITIES.map((uni) => (
              <div
                key={uni.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs hover:shadow-lg transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-40 overflow-hidden bg-slate-100">
                    <img
                      src={uni.image}
                      alt={uni.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-md text-xs font-bold text-iq-navy flex items-center gap-1.5 shadow-2xs">
                      <span>{uni.flag}</span>
                      <span>{uni.country}</span>
                    </div>
                  </div>

                  <div className="p-5 space-y-2.5">
                    <div className="text-[11px] font-bold text-iq-red uppercase tracking-wide">
                      {uni.ranking}
                    </div>
                    <h3 className="text-base font-bold text-iq-navy line-clamp-1 group-hover:text-iq-red transition-colors">
                      {uni.name}
                    </h3>
                    
                    <div className="pt-2 border-t border-slate-100 text-xs space-y-1.5 text-slate-600">
                      <div className="flex justify-between">
                        <span className="text-slate-400">Tuition:</span>
                        <span className="font-semibold text-slate-800">{uni.tuitionFee}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Acceptance Rate:</span>
                        <span className="font-semibold text-emerald-700">{uni.acceptanceRate}</span>
                      </div>
                    </div>

                    <div className="pt-2">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                        Top Bachelor's Programs:
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {uni.popularCourses.map((c, cIdx) => (
                          <span key={cIdx} className="text-[10px] bg-slate-100 text-slate-700 px-1.5 py-0.5 rounded font-medium">
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <button
                    onClick={onOpenConsultation}
                    className="w-full py-2 bg-slate-100 hover:bg-iq-navy hover:text-white text-iq-navy text-xs font-bold rounded-lg transition-colors cursor-pointer"
                  >
                    Check Admission Cut-off
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FREQUENTLY ASKED QUESTIONS (FAQS ACCORDION) */}
      <section className="py-14 sm:py-20 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-iq-red font-bold text-xs uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Parent & Student FAQs</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-iq-navy tracking-tight">
              Frequently Asked Questions: Bachelors Abroad
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Answers regarding 12th board recognition, campus safety, SAT requirements, and parents' financial sponsorship.
            </p>
          </div>

          <div className="space-y-3">
            {BACHELOR_FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="border border-slate-200 rounded-2xl overflow-hidden transition-colors bg-white"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full text-left p-5 sm:p-6 bg-white hover:bg-slate-50 flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-iq-navy cursor-pointer transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-200 ${
                      expandedFaq === idx ? 'rotate-180 text-iq-red' : ''
                    }`}
                  />
                </button>
                {expandedFaq === idx && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed bg-white border-t border-slate-100">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FREE COUNSELLING CTA BANNER */}
      <section className="py-16 bg-gradient-to-r from-iq-navy via-iq-navy to-slate-900 text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
            Launch Your Global Undergraduate Journey with <span className="text-iq-red">IQ Overseas</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Visit our state-of-the-art office in Guntur with your 10th and 12th marksheets for a free, comprehensive family counselling session.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-iq-red hover:bg-iq-red-hover text-white font-extrabold text-sm sm:text-base rounded-full shadow-[0_8px_25px_rgba(227,6,19,0.35)] transition-all cursor-pointer"
            >
              <span>Schedule Free Undergraduate Counselling</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="tel:+918074941919"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-sm sm:text-base rounded-full transition-colors"
            >
              <Headphones className="w-4 h-4 text-iq-red" />
              <span>Call: +91 80749 41919</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
