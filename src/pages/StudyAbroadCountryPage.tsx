import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
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
  ChevronRight,
  Building2,
  ShieldCheck,
  Check,
  TrendingUp,
  Headphones,
  Calendar,
  Layers,
  MapPin,
  X,
  Phone,
  MessageSquare,
  HelpCircle,
  ExternalLink,
  CheckSquare
} from 'lucide-react';
import { useCountry, countryStore } from '../store/countryStore';
import { BRAND_INFO } from '../data/siteContent';

interface StudyAbroadCountryPageProps {
  degreeLevel?: 'masters' | 'bachelors';
  onOpenConsultation: () => void;
}

export const StudyAbroadCountryPage: React.FC<StudyAbroadCountryPageProps> = ({ degreeLevel, onOpenConsultation }) => {
  const { country: routeSlug } = useParams<{ country?: string }>();
  const countryData = useCountry(routeSlug);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);
  const [activeCourseModal, setActiveCourseModal] = useState<any | null>(null);

  // If country is not found or not published, fall back to Australia
  const data = countryData || countryStore.getBySlug('australia') || Object.values(countryStore.getAll())[0];

  if (!data) {
    return (
      <div className="w-full py-20 text-center">
        <h2 className="text-2xl font-bold text-iq-navy">Destination not found</h2>
        <Link to="/" className="text-iq-red underline mt-4 inline-block">Return Home</Link>
      </div>
    );
  }

  const isEurope = data.slug === 'europe';

  // Degree Level Context
  const isBachelors = degreeLevel === 'bachelors';
  const isMasters = degreeLevel === 'masters';
  const parentPath = isBachelors ? '/bachelors' : isMasters ? '/masters' : '/masters';
  const parentLabel = isBachelors ? 'Bachelors Abroad' : isMasters ? 'Masters Abroad' : 'Study Destinations';

  const heroHeadline = isBachelors
    ? `Don't just learn, thrive! Choose ${data.name === 'United States' ? 'US' : data.name} education for a transformative academic journey.`
    : isMasters
    ? `Accelerate Your Global Career: Study Master's in ${data.name}`
    : data.heroBanner.headline;

  const heroSubtitle = isBachelors
    ? `Start your UG journey in ${data.name === 'United States' ? 'the USA' : data.name} with IQ Overseas expert admissions, test prep, and scholarship support.`
    : isMasters
    ? `Start your Master's journey in ${data.name} with world-class research institutions, STEM OPT / PSW work visas, and high starting career packages.`
    : data.heroBanner.subtitle;

  const heroBadge = isBachelors
    ? 'Undergraduate Excellence • Fall & Spring Intakes'
    : isMasters
    ? 'Postgraduate & STEM Excellence • Fall & Spring Intakes'
    : data.heroBanner.badge;

  return (
    <div className="w-full bg-white text-slate-800 overflow-x-hidden">
      
      {/* 
        SECTION 1: COUNTRY HERO BANNER
        Full-width high-resolution landmark banner matching image copy 43.png
      */}
      <section className="relative w-full overflow-hidden bg-slate-900 text-white">
        {/* Full-Width Background Landmark Image */}
        <div className="relative h-[420px] sm:h-[480px] lg:h-[560px] w-full overflow-hidden">
          <img
            src={data.heroBanner.imageUrl}
            alt={`${data.name} landmark banner`}
            className="w-full h-full object-cover object-center filter brightness-[0.82] contrast-[1.05]"
          />
          {/* Subtle gradient overlay for high contrast and readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/30" />
          
          {/* Hero Banner Content Container */}
          <div className="absolute inset-0 flex flex-col justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 z-10">
            
            {/* Breadcrumb Navigation */}
            <nav className="flex items-center gap-2 text-xs sm:text-sm text-slate-200" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <Link to={parentPath} className="hover:text-white transition-colors">{parentLabel}</Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="font-bold text-white flex items-center gap-1.5">
                <span>{data.flag}</span>
                <span>Study in {data.name}</span>
              </span>
            </nav>

            {/* Hero Main Copy */}
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-iq-red text-white font-black text-xs uppercase tracking-wider shadow-md">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{heroBadge}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.15] drop-shadow-md">
                {heroHeadline}
              </h1>

              <p className="text-sm sm:text-base md:text-lg text-slate-100 leading-relaxed font-medium drop-shadow">
                {heroSubtitle}
              </p>

              {/* 4 Stat Chips */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 pt-2">
                {data.heroBanner.stats.map((stat, sIdx) => (
                  <div
                    key={sIdx}
                    className="bg-white/15 backdrop-blur-md px-3.5 py-2.5 rounded-2xl border border-white/20 shadow-sm"
                  >
                    <div className="text-[10px] sm:text-xs font-bold text-slate-200 uppercase tracking-wider">
                      {stat.label}
                    </div>
                    <div className="text-base sm:text-lg font-black text-white mt-0.5">
                      {stat.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Spacer */}
            <div className="hidden sm:block" />
          </div>
        </div>

        {/* 
          Quick Contact & Action Strip (matching image copy 43.png)
          Call Us, Chat on WhatsApp, Get University Shortlist
        */}
        <div className="bg-white border-b border-slate-200 shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
            <div className="flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm font-bold text-slate-700">
              
              <a
                href={`tel:${BRAND_INFO.primaryPhoneRaw}`}
                className="inline-flex items-center gap-2 hover:text-iq-navy transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </div>
                <span>Call Us: {BRAND_INFO.primaryPhone}</span>
              </a>

              <a
                href={`https://wa.me/${BRAND_INFO.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                  `Hello IQ Overseas, I am interested in studying in ${data.name}. Please guide me.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-emerald-700 hover:text-emerald-800 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <span>Chat on WhatsApp</span>
              </a>

              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2 text-iq-red hover:text-red-700 transition-colors cursor-pointer"
              >
                <div className="w-8 h-8 rounded-full bg-red-50 text-iq-red flex items-center justify-center">
                  <Calendar className="w-4 h-4" />
                </div>
                <span>Get University Shortlist</span>
              </button>

              <button
                onClick={onOpenConsultation}
                className="px-5 py-2 rounded-xl bg-iq-red hover:bg-iq-navy text-white text-xs font-black transition-all shadow-sm cursor-pointer ml-auto sm:ml-0"
              >
                Book Free Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 
        SECTION 2: COUNTRY INTRODUCTION
        Clean narrative, high-authority positioning matching image copy 43.png
      */}
      <section className="py-14 sm:py-20 bg-white" id="introduction">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-black text-iq-red uppercase tracking-wider">
                <span className="w-6 h-0.5 bg-iq-red" />
                <span>Destination Overview</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-iq-navy tracking-tight leading-tight">
                {data.introduction.heading}
              </h2>

              {data.introduction.subheading && (
                <p className="text-base sm:text-lg font-bold text-iq-red">
                  {data.introduction.subheading}
                </p>
              )}

              {data.introduction.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
                  {p}
                </p>
              ))}

              {/* Highlight Bullets */}
              <div className="pt-3 space-y-2.5">
                <div className="text-xs font-black text-iq-navy uppercase tracking-wider">
                  Key Reasons Students Choose {data.name}:
                </div>
                {data.introduction.highlights.map((h, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Card: Quick Action Consultation Box */}
            <div className="lg:col-span-4 bg-[#071B68] text-white rounded-3xl p-6 sm:p-7 shadow-xl border border-blue-900/40 space-y-5 sticky top-24">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 rounded-full text-xs font-bold text-blue-200">
                <Sparkles className="w-3.5 h-3.5 text-iq-red" />
                <span>IQ Overseas Guidance</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                Planning to Study in {data.name}?
              </h3>

              <p className="text-xs text-blue-100 leading-relaxed font-medium">
                Connect with our senior international counselors in Guntur for transparent course matching, scholarship checks, and student visa filing.
              </p>

              <button
                onClick={onOpenConsultation}
                className="w-full py-3.5 px-4 bg-iq-red hover:bg-white hover:text-iq-navy text-white text-xs sm:text-sm font-black rounded-xl shadow-md transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Schedule Free 1-on-1 Session</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="pt-3 border-t border-white/15 space-y-2 text-xs text-blue-200">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>100% Genuine & Ethical Counseling</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-amber-400" />
                  <span>High Visa Approval Track Record</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 
        OPTIONAL SUB-SECTION FOR EUROPE:
        Sub-destination cards for France, Netherlands, Sweden, Finland, Denmark, Switzerland
      */}
      {isEurope && data.subDestinations && (
        <section className="py-14 bg-slate-50 border-y border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-xs font-black text-iq-red uppercase tracking-wider">
                Explore Popular European Nations
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-iq-navy mt-1">
                Top European Study Destinations
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 font-medium">
                Every country offers distinct academic advantages, tuition subsidies, and post-study work opportunities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.subDestinations.map((sub) => (
                <div
                  key={sub.id}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                >
                  <div>
                    <div className="relative h-44 overflow-hidden bg-slate-100">
                      <img
                        src={sub.image}
                        alt={`Study in ${sub.country}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3 text-white flex items-center justify-between">
                        <span className="text-lg font-black flex items-center gap-1.5">
                          <span>{sub.flag}</span>
                          <span>{sub.country}</span>
                        </span>
                        <span className="text-[11px] font-bold bg-white/20 backdrop-blur-md px-2.5 py-0.5 rounded-full">
                          {sub.capital}
                        </span>
                      </div>
                    </div>

                    <div className="p-5 space-y-3">
                      <p className="text-xs text-slate-600 leading-relaxed font-medium">
                        {sub.description}
                      </p>
                      <div className="pt-2 border-t border-slate-100 space-y-1 text-xs">
                        <div className="flex justify-between text-slate-600">
                          <span className="font-bold text-slate-400">Tuition:</span>
                          <span className="font-bold text-iq-navy">{sub.avgTuition}</span>
                        </div>
                        <div className="flex justify-between text-slate-600">
                          <span className="font-bold text-slate-400">Stay Back:</span>
                          <span className="font-bold text-emerald-600">{sub.psw}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 pt-0">
                    <button
                      onClick={onOpenConsultation}
                      className="w-full py-2.5 rounded-xl bg-slate-50 hover:bg-iq-navy text-iq-navy hover:text-white border border-slate-200 text-xs font-black transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>Consult for {sub.country}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 
        SECTION 3: QUICK FACTS ABOUT THE COUNTRY
        Matching exact 2-column layout with blue header column in image copy 44.png
      */}
      <section className="py-14 sm:py-18 bg-[#F8FAFD] border-b border-slate-200/80" id="quick-facts">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-black text-iq-red uppercase tracking-wider">
              Essential Country Overview
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-iq-navy mt-1">
              Quick Facts About {data.name}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">
              Key information for prospective international students planning their studies.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-md">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <tbody>
                {[
                  { label: 'Country', value: data.quickFacts.country },
                  { label: 'Capital', value: data.quickFacts.capital },
                  { label: 'Popular Cities', value: data.quickFacts.popularCities },
                  { label: 'Currency', value: data.quickFacts.currency },
                  { label: 'Language', value: data.quickFacts.language },
                  { label: 'Popular Intakes', value: data.quickFacts.popularIntakes },
                  { label: 'Top Courses', value: data.quickFacts.topCourses },
                  { label: 'Average Tuition Fee', value: data.quickFacts.avgTuitionFee },
                  { label: 'Post-Study Work Opportunities', value: data.quickFacts.postStudyWork },
                  { label: 'Work Rights During Studies', value: data.quickFacts.workRights }
                ].map((row, rIdx) => (
                  <tr
                    key={rIdx}
                    className={`border-b border-slate-200/70 last:border-b-0 ${
                      rIdx % 2 === 0 ? 'bg-white' : 'bg-slate-50/70'
                    }`}
                  >
                    <td className="w-1/3 sm:w-1/4 bg-[#0072CE] text-white font-extrabold px-4 sm:px-6 py-3.5 border-r border-blue-400/40">
                      {row.label}
                    </td>
                    <td className="px-4 sm:px-6 py-3.5 text-slate-800 font-medium">
                      {row.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 
        SECTION 4: EDUCATION SYSTEM & LANDSCAPE
        Checklist + Aspect Comparison Table matching image copy 45.png
      */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-200/80" id="education-system">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-8 space-y-3">
            <span className="text-xs font-black text-iq-red uppercase tracking-wider">
              Higher Education Landscape
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-iq-navy">
              Education System in {data.name}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed font-medium">
              {data.educationLandscape.intro}
            </p>
          </div>

          {/* Bullet points matching image copy 45.png */}
          <div className="space-y-2 mb-10 bg-slate-50 p-5 rounded-2xl border border-slate-200/80">
            {data.educationLandscape.bulletPoints.map((bp, bpIdx) => (
              <div key={bpIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 font-medium">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5 stroke-[3]" />
                <span>{bp}</span>
              </div>
            ))}
          </div>

          {/* Comparison Table: Aspect | Undergraduate (UG) | Postgraduate (PG) */}
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-md">
            <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[640px]">
              <thead>
                <tr className="bg-[#0072CE] text-white">
                  <th className="px-4 sm:px-6 py-4 font-black w-1/4">Aspect</th>
                  <th className="px-4 sm:px-6 py-4 font-black w-3/8 border-l border-blue-400/40">
                    Undergraduate (UG)
                  </th>
                  <th className="px-4 sm:px-6 py-4 font-black w-3/8 border-l border-blue-400/40">
                    Postgraduate (PG)
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.educationLandscape.comparisonTable.map((row, rIdx) => (
                  <tr
                    key={rIdx}
                    className={`border-b border-slate-200/80 last:border-b-0 ${
                      rIdx % 2 === 0 ? 'bg-white' : 'bg-slate-50/70'
                    }`}
                  >
                    <td className="px-4 sm:px-6 py-3.5 font-bold text-iq-navy bg-slate-100/50">
                      {row.aspect}
                    </td>
                    <td className="px-4 sm:px-6 py-3.5 text-slate-700 font-medium border-l border-slate-200/60">
                      {row.undergraduate}
                    </td>
                    <td className="px-4 sm:px-6 py-3.5 text-slate-700 font-medium border-l border-slate-200/60">
                      {row.postgraduate}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* 
        SECTION 5: WHY STUDY IN THIS COUNTRY?
        Grid of benefit cards
      */}
      <section className="py-14 sm:py-20 bg-[#F8FAFD] border-b border-slate-200/80" id="why-study">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-black text-iq-red uppercase tracking-wider">
              Student Advantages
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-iq-navy mt-1">
              Why Study in {data.name}?
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-2 font-medium">
              Explore the key career, academic, and lifestyle benefits that make {data.name} a premier choice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {data.whyStudyBenefits.map((benefit, bIdx) => (
              <div
                key={benefit.id || bIdx}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-iq-navy group-hover:bg-iq-red text-white flex items-center justify-center font-black text-sm mb-4 transition-colors shadow-2xs">
                    0{bIdx + 1}
                  </div>
                  <h4 className="text-lg font-black text-iq-navy group-hover:text-iq-red transition-colors mb-2">
                    {benefit.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 
        SECTION 6: TOP COURSES TO STUDY
        Matching image copy 46.png
      */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-200/80" id="top-courses">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-black text-iq-red uppercase tracking-wider">
              High-Demand Specializations
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-iq-navy mt-1">
              Top Courses to Study in {data.name}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed font-medium">
              Curated programs designed in collaboration with global industry, ensuring graduates are equipped for high-paying roles in the international job market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.topCourses.map((course) => (
              <div
                key={course.id}
                className="bg-[#F8FAFD] rounded-2xl p-6 border border-slate-200/80 shadow-2xs hover:shadow-lg hover:border-iq-navy transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-iq-navy text-[10px] font-black uppercase">
                      {course.category}
                    </span>
                    {course.duration && (
                      <span className="text-xs font-mono font-bold text-slate-400">
                        {course.duration}
                      </span>
                    )}
                  </div>

                  <h4 className="text-lg font-black text-iq-navy group-hover:text-iq-red transition-colors mb-2">
                    {course.title}
                  </h4>

                  <p className="text-xs text-slate-600 leading-relaxed font-medium mb-4">
                    {course.description}
                  </p>

                  {course.careerRoles && course.careerRoles.length > 0 && (
                    <div className="space-y-1.5 pt-3 border-t border-slate-200/60">
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider block">
                        Typical Career Roles:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {course.careerRoles.map((role, rIdx) => (
                          <span
                            key={rIdx}
                            className="text-[11px] font-semibold bg-white text-slate-700 px-2 py-0.5 rounded-md border border-slate-200"
                          >
                            {role}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <button
                  onClick={onOpenConsultation}
                  className="mt-5 w-full py-2 bg-white hover:bg-iq-navy text-iq-navy hover:text-white rounded-xl text-xs font-black border border-slate-200 transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                >
                  <span>Check Eligibility</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 
        SECTION 7: SCHOLARSHIPS FOR INDIAN STUDENTS
        Matching image copy 46.png
      */}
      <section className="py-14 sm:py-20 bg-[#F8FAFD] border-b border-slate-200/80" id="scholarships">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-black text-iq-red uppercase tracking-wider">
              Financial Aid & Grants
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-iq-navy mt-1">
              Scholarships for Indian Students in {data.name}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed font-medium">
              {data.scholarships.intro}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.scholarships.items.map((sch) => (
              <div
                key={sch.id}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wide">
                      {sch.provider}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 font-black text-xs">
                      {sch.award}
                    </span>
                  </div>
                  <h4 className="text-lg font-black text-iq-navy mb-2">
                    {sch.name}
                  </h4>
                  <div className="text-xs text-slate-600 leading-relaxed font-medium">
                    <span className="font-bold text-slate-800">Eligibility: </span>
                    {sch.eligibility}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400 font-semibold">Available for Indian Citizens</span>
                  <button
                    onClick={onOpenConsultation}
                    className="text-xs font-black text-iq-red hover:underline inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>Apply via IQ Overseas</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 
        SECTIONS 8, 9, 10 & 11: INTAKES, STUDY PROGRAMS, ENGLISH REQUIREMENTS & ENTRY
        Matching image copy 47.png & image copy 48.png
      */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-200/80" id="admissions">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          
          {/* Header */}
          <div className="max-w-3xl">
            <span className="text-xs font-black text-iq-red uppercase tracking-wider">
              Admission Guidelines
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-iq-navy mt-1">
              Study in {data.name}: Intakes, Programs & English Test Requirements
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 font-medium">
              Flexible admission cycles, diverse study levels, and straightforward entry criteria.
            </p>
          </div>

          {/* Section 8: Intakes */}
          <div className="space-y-4">
            <h4 className="text-xl font-black text-iq-navy flex items-center gap-2">
              <Calendar className="w-5 h-5 text-iq-red" />
              <span>{data.name} Intakes:</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {data.admissionIntakes.items.map((intake, iIdx) => (
                <div key={iIdx} className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-2 text-slate-800 font-bold text-sm">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 stroke-[3]" />
                    <span>{intake.name}:</span>
                  </div>
                  <div className="text-xs text-iq-red font-black mt-1 pl-6">
                    {intake.period}
                  </div>
                  {intake.remarks && (
                    <div className="text-[11px] text-slate-500 mt-1 pl-6">
                      {intake.remarks}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Section 9: Study Programs */}
          <div className="space-y-4 pt-4 border-t border-slate-100">
            <h4 className="text-xl font-black text-iq-navy flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-iq-red" />
              <span>{data.name} Study Programs:</span>
            </h4>
            <div className="space-y-2.5">
              {data.studyPrograms.items.map((prog, pIdx) => (
                <div key={pIdx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5 stroke-[3]" />
                  <div>
                    <span className="text-xs sm:text-sm font-bold text-slate-800">
                      {prog.level}:{' '}
                    </span>
                    <span className="text-xs text-slate-600 font-medium">
                      {prog.duration}. {prog.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 10: English Language Requirements (IELTS & PTE) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
            
            {/* IELTS Requirement Box */}
            <div className="p-6 rounded-2xl bg-blue-50/50 border border-blue-200 space-y-3">
              <h4 className="text-lg font-black text-iq-navy flex items-center gap-2">
                <Award className="w-5 h-5 text-blue-600" />
                <span>{data.name} Study IELTS Requirement:</span>
              </h4>
              <div className="space-y-2 text-xs sm:text-sm text-slate-800 font-medium">
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5 stroke-[3]" />
                  <span><strong className="text-iq-navy">Masters:</strong> {data.englishRequirements.ielts.pg}</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5 stroke-[3]" />
                  <span><strong className="text-iq-navy">Bachelors:</strong> {data.englishRequirements.ielts.ug}</span>
                </div>
                {data.englishRequirements.ielts.notes && (
                  <p className="text-[11px] text-slate-500 pt-1 italic">
                    *{data.englishRequirements.ielts.notes}
                  </p>
                )}
              </div>
            </div>

            {/* PTE Requirement Box */}
            <div className="p-6 rounded-2xl bg-red-50/50 border border-red-200 space-y-3">
              <h4 className="text-lg font-black text-iq-navy flex items-center gap-2">
                <Award className="w-5 h-5 text-iq-red" />
                <span>{data.name} Study PTE Requirement:</span>
              </h4>
              <div className="space-y-2 text-xs sm:text-sm text-slate-800 font-medium">
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-iq-red shrink-0 mt-0.5 stroke-[3]" />
                  <span><strong className="text-iq-navy">Masters:</strong> {data.englishRequirements.pte.pg}</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-iq-red shrink-0 mt-0.5 stroke-[3]" />
                  <span><strong className="text-iq-navy">Bachelors:</strong> {data.englishRequirements.pte.ug}</span>
                </div>
                {data.englishRequirements.pte.notes && (
                  <p className="text-[11px] text-slate-500 pt-1 italic">
                    *{data.englishRequirements.pte.notes}
                  </p>
                )}
              </div>
            </div>

          </div>

          {/* Section 11: Entry Requirements */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-4">
            <h4 className="text-xl font-black text-iq-navy">
              Study in {data.name} Entry Requirements:
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-slate-800 font-medium">
              {data.entryRequirements.criteria.map((crit, cIdx) => (
                <div key={cIdx} className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5 stroke-[3]" />
                  <span>{crit}</span>
                </div>
              ))}
            </div>
            <div className="pt-2 text-xs font-bold text-slate-500">
              <span>Academic benchmark: {data.entryRequirements.academicPercentage} | Backlogs: {data.entryRequirements.backlogPolicy}</span>
            </div>
          </div>

        </div>
      </section>

      {/* 
        SECTIONS 12 & 13: COST OF STUDYING & DOCUMENTS REQUIRED
        Matching image copy 49.png
      */}
      <section className="py-14 sm:py-20 bg-[#F8FAFD] border-b border-slate-200/80" id="cost-and-documents">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Section 12: Cost of Studying */}
          <div className="space-y-4">
            <div className="max-w-3xl">
              <span className="text-xs font-black text-iq-red uppercase tracking-wider">
                Financial Planning
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-iq-navy mt-1">
                Cost of Studying in {data.name}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 font-medium">
                Costs depend on your chosen institution, degree level, and city location. Below is indicative official guidance for budgeting.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-sm space-y-3 text-xs sm:text-sm text-slate-800 font-medium">
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5 stroke-[3]" />
                <span><strong className="text-iq-navy">Bachelors:</strong> {data.costOfStudying.bachelorsTuition}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5 stroke-[3]" />
                <span><strong className="text-iq-navy">Masters:</strong> {data.costOfStudying.mastersTuition}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5 stroke-[3]" />
                <span><strong className="text-iq-navy">Living Expenses:</strong> {data.costOfStudying.livingExpenses}</span>
              </div>
              {data.costOfStudying.additionalNotes && (
                <p className="text-xs text-slate-500 pt-2 border-t border-slate-100 italic">
                  *{data.costOfStudying.additionalNotes}
                </p>
              )}
            </div>
          </div>

          {/* Section 13: Documents Required */}
          <div className="space-y-4">
            <h4 className="text-xl font-black text-iq-navy">
              Documents Required for a {data.name} Student Visa
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Admission Checklist */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                <h5 className="text-sm font-black text-iq-navy uppercase tracking-wider text-blue-600">
                  For University Admission:
                </h5>
                <div className="space-y-2 text-xs text-slate-700 font-medium">
                  {data.documentsRequired.admissionDocuments.map((doc, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2">
                      <CheckSquare className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
                      <span>{doc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visa Checklist */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                <h5 className="text-sm font-black text-iq-navy uppercase tracking-wider text-iq-red">
                  For Student Visa Filing:
                </h5>
                <div className="space-y-2 text-xs text-slate-700 font-medium">
                  {data.documentsRequired.visaDocuments.map((doc, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2">
                      <CheckSquare className="w-3.5 h-3.5 text-iq-red shrink-0 mt-0.5" />
                      <span>{doc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 
        SECTIONS 14 & 15: WORK OPPORTUNITIES & PR PATHWAYS
        Matching image copy 46.png & image copy 50.png
      */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-200/80" id="work-and-pr">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Section 14: Work Opportunities */}
          <div className="space-y-4">
            <span className="text-xs font-black text-iq-red uppercase tracking-wider">
              Employment Rights
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-iq-navy">
              Work Opportunities in {data.name}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Part-Time Work During Studies
                </div>
                <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                  {data.workOpportunities.partTimeRules}
                </p>
                <div className="text-xs font-bold text-emerald-600 pt-1">
                  Minimum Wage: {data.workOpportunities.minimumWage}
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Post-Study Work Visa Opportunities
                </div>
                <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                  {data.workOpportunities.postStudyWorkVisa}
                </p>
                <div className="text-xs font-bold text-iq-navy pt-1">
                  Vacation rights: {data.workOpportunities.vacationRules}
                </div>
              </div>
            </div>
          </div>

          {/* Section 15: PR and Career Pathways */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-iq-navy text-white space-y-5 shadow-xl">
            <h4 className="text-2xl font-black tracking-tight text-white">
              {data.name} PR Pathway After Study
            </h4>

            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
              {data.prPathways.intro}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {data.prPathways.pathways.map((path, pIdx) => (
                <div key={pIdx} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/10 backdrop-blur-md">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-white font-medium">{path}</span>
                </div>
              ))}
            </div>

            <p className="text-[11px] text-slate-400 pt-3 border-t border-white/15 italic">
              *{data.prPathways.disclaimer}
            </p>
          </div>

        </div>
      </section>

      {/* 
        SECTION 16: FREQUENTLY ASKED QUESTIONS
        Clean accordion UI matching image copy 50.png
      */}
      <section className="py-14 sm:py-20 bg-[#F8FAFD] border-b border-slate-200/80" id="faqs">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-10">
            <span className="text-xs font-black text-iq-red uppercase tracking-wider">
              Common Queries Answered
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-iq-navy mt-1">
              Frequently Asked Questions About Studying in {data.name}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">
              Clear answers to the most common questions asked by Indian students and parents.
            </p>
          </div>

          {/* Accordion List matching image copy 50.png */}
          <div className="space-y-3">
            {data.faqs.map((faq, fIdx) => {
              const isOpen = expandedFaq === fIdx;
              return (
                <div
                  key={fIdx}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs transition-all"
                >
                  <button
                    onClick={() => setExpandedFaq(isOpen ? null : fIdx)}
                    className="w-full p-4 sm:p-5 text-left font-bold text-xs sm:text-sm text-iq-navy flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <span className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center shrink-0 font-mono text-base font-bold text-slate-600">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>

                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed font-medium border-t border-slate-100"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 
        SECTION 17: FINAL COUNSELLING CTA
        "Start Your Study Abroad Journey with IQ Overseas"
      */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-iq-navy via-[#0A266E] to-iq-navy text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-iq-red text-white text-xs font-black uppercase tracking-wider shadow-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Lakshmipuram, Guntur Head Office</span>
          </div>

          <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            Start Your Study Abroad Journey in {data.name} with IQ Overseas
          </h3>

          <p className="text-sm sm:text-base text-blue-100 max-w-2xl mx-auto leading-relaxed font-medium">
            From free university shortlisting and scholarship evaluations to SOP drafting and visa interview coaching, our experienced counselors support you every step of the way.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="px-8 py-4 bg-iq-red hover:bg-white hover:text-iq-navy text-white font-black text-sm rounded-2xl shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
            >
              Get Free Counselling
            </button>

            <a
              href={`https://wa.me/${BRAND_INFO.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                `Hello IQ Overseas, I want to apply for studying in ${data.name}. Please connect me with a senior counselor.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold text-sm rounded-2xl border border-white/25 shadow-md transition-all cursor-pointer inline-flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Us Directly</span>
            </a>
          </div>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-blue-200 font-semibold">
            <span>📍 28-2-58, Pandaripuram, 4th Line, Lakshmipuram, Guntur</span>
            <span>📞 +91 6302449859</span>
            <span>✉️ iqoverseasguntur@gmail.com</span>
          </div>
        </div>
      </section>

    </div>
  );
};
