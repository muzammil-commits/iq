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
  CheckSquare,
  Send,
  User
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
  
  // Interactive Modal & Popup States
  const [activePopupModal, setActivePopupModal] = useState<'call' | 'whatsapp' | 'shortlist' | null>(null);
  const [selectedCourse, setSelectedCourse] = useState<any | null>(null);
  const [selectedScholarship, setSelectedScholarship] = useState<any | null>(null);
  const [selectedSubDest, setSelectedSubDest] = useState<any | null>(null);
  const [shortlistSuccess, setShortlistSuccess] = useState(false);
  const [shortlistForm, setShortlistForm] = useState({
    name: '',
    phone: '',
    degree: degreeLevel === 'bachelors' ? "Bachelor's Degree" : "Master's Degree",
    field: 'Computer Science & AI',
    intake: 'Next Upcoming Intake'
  });

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
        Bright scenic background without any dark patchwork behind text
      */}
      <section className="relative w-full overflow-hidden bg-slate-900 text-white">
        {/* Full-Width Background Landmark Image with Full Vertical & Horizontal Visibility */}
        <div className="relative min-h-[580px] sm:min-h-[660px] md:min-h-[720px] lg:min-h-[760px] xl:min-h-[800px] w-full overflow-hidden flex flex-col justify-between">
          <img
            src={data.heroBanner.imageUrl}
            alt={`${data.name} landmark banner`}
            className="absolute inset-0 w-full h-full object-cover object-top filter brightness-[1.04] contrast-[1.03] saturate-[1.06]"
          />
          
          {/* Soft, natural ambient lighting - NO heavy black patchwork or opaque boxes */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/15 to-transparent w-full lg:w-[55%] pointer-events-none" />
          
          {/* Hero Banner Content Container */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 pb-12 sm:pb-16 flex-1 flex flex-col justify-between w-full">
            
            {/* Breadcrumb Navigation on LHS */}
            <nav className="flex items-center gap-2 text-xs sm:text-sm text-white/90 drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)] mb-6 sm:mb-8" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 text-white/70" />
              <Link to={parentPath} className="hover:text-white transition-colors">{parentLabel}</Link>
              <ChevronRight className="w-3.5 h-3.5 text-white/70" />
              <span className="font-bold text-white flex items-center gap-1.5">
                <span className="px-2 py-0.5 rounded-lg bg-black/30 backdrop-blur-xs text-white font-mono font-bold text-xs uppercase border border-white/20">
                  {data.flag}
                </span>
                <span>Study in {data.name}</span>
              </span>
            </nav>

            {/* Hero Main Copy - Clean LHS placement directly on background, NO dark patchwork box */}
            <div className="max-w-2xl space-y-4 sm:space-y-5 text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-iq-red text-white font-black text-xs uppercase tracking-wider shadow-[0_4px_14px_rgba(227,6,19,0.5)]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{heroBadge}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[50px] font-black text-white tracking-tight leading-[1.14] drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
                {heroHeadline}
              </h1>

              <p className="text-sm sm:text-base md:text-lg text-white font-semibold leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] max-w-xl">
                {heroSubtitle}
              </p>

              {/* 4 Stat Chips - Bright clean white cards with navy numbers, NO dark block */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 pt-2">
                {data.heroBanner.stats.map((stat, sIdx) => (
                  <div
                    key={sIdx}
                    className="bg-white/95 backdrop-blur-md px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-2xl border border-white shadow-[0_8px_20px_rgba(0,0,0,0.18)]"
                  >
                    <div className="text-[10px] sm:text-[11px] font-bold text-slate-500 uppercase tracking-wider truncate">
                      {stat.label}
                    </div>
                    <div className="text-base sm:text-lg lg:text-xl font-black text-iq-navy mt-0.5 truncate">
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
          GRAND HIGH-IMPACT QUICK CONTACT & ACTION STRIP (Enhanced Size & Interactive Popups)
          Prominent height, grand cards, large icons, bold numbers, and responsive 4-column layout
        */}
        <div className="bg-white border-b-2 border-slate-100 shadow-[0_20px_50px_rgba(7,27,104,0.12)] relative z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6 lg:py-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 items-center">
              
              {/* 1. Call Us */}
              <button
                type="button"
                onClick={() => setActivePopupModal('call')}
                className="w-full text-left p-3.5 sm:p-4 rounded-2xl bg-slate-50/80 hover:bg-white border border-slate-200/90 hover:border-blue-400 hover:shadow-xl transition-all duration-300 flex items-center gap-3.5 group cursor-pointer"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-blue-50 text-blue-600 border border-blue-100 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center shrink-0 shadow-xs transition-all duration-300 group-hover:scale-105">
                  <Phone className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] font-black uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                    <span>Instant Call</span>
                  </div>
                  <div className="text-sm sm:text-base lg:text-lg font-black text-iq-navy group-hover:text-iq-red transition-colors truncate">
                    Call: {BRAND_INFO.primaryPhone}
                  </div>
                  <div className="text-[11px] text-slate-500 font-semibold truncate hidden sm:block">
                    Talk with Senior Counselor
                  </div>
                </div>
              </button>

              {/* 2. Chat on WhatsApp */}
              <button
                type="button"
                onClick={() => setActivePopupModal('whatsapp')}
                className="w-full text-left p-3.5 sm:p-4 rounded-2xl bg-emerald-50/40 hover:bg-white border border-emerald-200/80 hover:border-emerald-500 hover:shadow-xl transition-all duration-300 flex items-center gap-3.5 group cursor-pointer"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-emerald-100/70 text-emerald-600 border border-emerald-200 group-hover:bg-emerald-600 group-hover:text-white flex items-center justify-center shrink-0 shadow-xs transition-all duration-300 group-hover:scale-105">
                  <MessageSquare className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] font-black uppercase tracking-wider text-emerald-600 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                    <span>Online Now</span>
                  </div>
                  <div className="text-sm sm:text-base lg:text-lg font-black text-slate-800 group-hover:text-emerald-700 transition-colors truncate">
                    Chat on WhatsApp
                  </div>
                  <div className="text-[11px] text-slate-500 font-semibold truncate hidden sm:block">
                    Instant 2-Min Reply
                  </div>
                </div>
              </button>

              {/* 3. Get University Shortlist */}
              <button
                type="button"
                onClick={() => {
                  setShortlistSuccess(false);
                  setActivePopupModal('shortlist');
                }}
                className="w-full text-left p-3.5 sm:p-4 rounded-2xl bg-red-50/40 hover:bg-white border border-red-200/80 hover:border-iq-red hover:shadow-xl transition-all duration-300 flex items-center gap-3.5 group cursor-pointer"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-red-100/70 text-iq-red border border-red-200 group-hover:bg-iq-red group-hover:text-white flex items-center justify-center shrink-0 shadow-xs transition-all duration-300 group-hover:scale-105">
                  <Calendar className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] font-black uppercase tracking-wider text-iq-red flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-iq-red" />
                    <span>Free Matching</span>
                  </div>
                  <div className="text-sm sm:text-base lg:text-lg font-black text-iq-red group-hover:text-red-700 transition-colors truncate">
                    Get University Shortlist
                  </div>
                  <div className="text-[11px] text-slate-500 font-semibold truncate hidden sm:block">
                    Filtered for {data.name}
                  </div>
                </div>
              </button>

              {/* 4. Book Free Consultation CTA Button */}
              <div className="w-full">
                <button
                  type="button"
                  onClick={onOpenConsultation}
                  className="w-full py-4 sm:py-4.5 px-6 rounded-2xl bg-gradient-to-r from-iq-red via-[#e30613] to-[#be0510] hover:from-iq-navy hover:to-slate-900 text-white text-sm sm:text-base lg:text-lg font-black tracking-wide shadow-[0_12px_30px_rgba(227,6,19,0.38)] hover:shadow-[0_16px_40px_rgba(7,27,104,0.4)] transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2.5 cursor-pointer text-center"
                >
                  <span>Book Free Consultation</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

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
                  onClick={() => setSelectedSubDest(sub)}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 cursor-pointer"
                >
                  <div>
                    <div className="relative h-48 overflow-hidden bg-slate-100">
                      <img
                        src={sub.image}
                        alt={`Study in ${sub.country}`}
                        className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3 text-white flex items-center justify-between">
                        <span className="text-xl font-black flex items-center gap-1.5">
                          <span>{sub.flag}</span>
                          <span>{sub.country}</span>
                        </span>
                        <span className="text-xs font-bold bg-white/25 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/30">
                          {sub.capital}
                        </span>
                      </div>
                    </div>

                    <div className="p-5 space-y-3">
                      <p className="text-xs text-slate-600 leading-relaxed font-medium line-clamp-3">
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
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedSubDest(sub);
                      }}
                      className="w-full py-2.5 rounded-xl bg-slate-50 hover:bg-iq-navy text-iq-navy hover:text-white border border-slate-200 text-xs font-black transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                    >
                      <span>View Destination Insights</span>
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
                onClick={() => setSelectedCourse(course)}
                className="bg-[#F8FAFD] rounded-2xl p-6 border border-slate-200/80 shadow-2xs hover:shadow-xl hover:border-iq-navy transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 cursor-pointer"
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

                  <p className="text-xs text-slate-600 leading-relaxed font-medium mb-4 line-clamp-3">
                    {course.description}
                  </p>

                  {course.careerRoles && course.careerRoles.length > 0 && (
                    <div className="space-y-1.5 pt-3 border-t border-slate-200/60">
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider block">
                        Typical Career Roles:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {course.careerRoles.slice(0, 3).map((role, rIdx) => (
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

                <div className="mt-5 pt-3 border-t border-slate-200/60 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-slate-400 group-hover:text-iq-navy transition-colors">
                    Click to View Modules & Roles ↗
                  </span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedCourse(course);
                    }}
                    className="py-1.5 px-3 bg-white hover:bg-iq-navy text-iq-navy hover:text-white rounded-xl text-xs font-black border border-slate-200 transition-colors flex items-center gap-1 shadow-2xs"
                  >
                    <span>Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
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
                onClick={() => setSelectedScholarship(sch)}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wide">
                      {sch.provider}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 font-black text-xs border border-emerald-100 shadow-2xs">
                      {sch.award}
                    </span>
                  </div>
                  <h4 className="text-lg font-black text-iq-navy group-hover:text-iq-red transition-colors mb-2">
                    {sch.name}
                  </h4>
                  <div className="text-xs text-slate-600 leading-relaxed font-medium line-clamp-3">
                    <span className="font-bold text-slate-800">Eligibility: </span>
                    {sch.eligibility}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400 font-semibold flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                    <span>Click to Check Eligibility ↗</span>
                  </span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedScholarship(sch);
                    }}
                    className="text-xs font-black text-iq-red hover:text-red-700 inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>View Criteria</span>
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

      {/* 
        ========================================================================
        INTERACTIVE POPUP MODALS SYSTEM
        (Call Helpline, WhatsApp Connect, University Shortlist, Course Details, 
         Scholarship Criteria, Sub-Destination Insights)
        ========================================================================
      */}
      <AnimatePresence>
        {/* 1. CALL HELPLINE MODAL */}
        {activePopupModal === 'call' && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setActivePopupModal(null)}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 font-bold text-xs uppercase tracking-wider mb-3">
                <Phone className="w-3.5 h-3.5" />
                <span>Direct Counselor Hotlines</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-iq-navy tracking-tight mb-2">
                Talk to {data.name} Admissions Experts
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-medium mb-6 leading-relaxed">
                Connect directly with certified study abroad counselors at IQ Overseas for instant profile assessment, university shortlists, and visa documentation guidance.
              </p>

              <div className="space-y-3.5 mb-6">
                <a
                  href={`tel:${BRAND_INFO.primaryPhoneRaw}`}
                  className="p-4 rounded-2xl bg-slate-50 hover:bg-blue-50/70 border border-slate-200 hover:border-blue-400 flex items-center justify-between group transition-all"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-xs">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Primary Helpline</div>
                      <div className="text-base sm:text-lg font-black text-iq-navy group-hover:text-blue-600 transition-colors">
                        {BRAND_INFO.primaryPhone}
                      </div>
                    </div>
                  </div>
                  <span className="px-3 py-1.5 rounded-xl bg-blue-600 text-white text-xs font-black shadow-xs group-hover:scale-105 transition-transform">
                    Tap to Call
                  </span>
                </a>

                <a
                  href="tel:+919390506085"
                  className="p-4 rounded-2xl bg-slate-50 hover:bg-blue-50/70 border border-slate-200 hover:border-blue-400 flex items-center justify-between group transition-all"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-slate-700 group-hover:bg-blue-600 text-white flex items-center justify-center shadow-xs transition-colors">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Guntur Head Office</div>
                      <div className="text-base sm:text-lg font-black text-iq-navy group-hover:text-blue-600 transition-colors">
                        +91 9390506085
                      </div>
                    </div>
                  </div>
                  <span className="px-3 py-1.5 rounded-xl bg-slate-800 group-hover:bg-blue-600 text-white text-xs font-black shadow-xs group-hover:scale-105 transition-all">
                    Tap to Call
                  </span>
                </a>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-100/70 text-slate-600 text-xs font-medium space-y-1 mb-5">
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span><strong>Working Hours:</strong> Mon - Sat: 9:30 AM to 7:00 PM IST</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span><strong>Location:</strong> Lakshmipuram 4th Line, Pandaripuram, Guntur</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setActivePopupModal(null);
                    onOpenConsultation();
                  }}
                  className="flex-1 py-3.5 rounded-xl bg-iq-red hover:bg-iq-red-hover text-white font-black text-xs uppercase tracking-wider shadow-md transition-all text-center cursor-pointer"
                >
                  Book 1-on-1 Profile Strategy
                </button>
              </div>
            </motion.div>
          </div>
        )}

        {/* 2. WHATSAPP CONNECT MODAL */}
        {activePopupModal === 'whatsapp' && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setActivePopupModal(null)}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 font-bold text-xs uppercase tracking-wider mb-3">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span>WhatsApp Instant Admissions Desk</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-iq-navy tracking-tight mb-2">
                Chat Directly on WhatsApp: {data.name}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-medium mb-5 leading-relaxed">
                Get real-time answers on university eligibility, required IELTS/PTE scores, scholarship options, and cost estimates directly from our senior counselor.
              </p>

              <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/90 text-xs text-slate-700 space-y-2 mb-6">
                <div className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider">Pre-filled Chat Inquiry:</div>
                <div className="italic text-slate-600 bg-white p-3 rounded-xl border border-emerald-100">
                  "Hello IQ Overseas team, I am interested in studying in {data.name} for {degreeLevel === 'bachelors' ? 'Undergraduate / Bachelors' : 'Postgraduate / Masters'}. Please share the top eligible universities, scholarships, and next intake deadlines."
                </div>
              </div>

              <div className="space-y-3">
                <a
                  href={`https://wa.me/${BRAND_INFO.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                    `Hello IQ Overseas, I am interested in studying in ${data.name} for ${degreeLevel === 'bachelors' ? 'Undergraduate / Bachelors' : 'Postgraduate / Masters'}. Please guide me on universities, scholarships, and admissions.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm shadow-lg shadow-emerald-600/30 transition-all flex items-center justify-center gap-2.5 cursor-pointer"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Start WhatsApp Chat Now</span>
                </a>

                <button
                  type="button"
                  onClick={() => setActivePopupModal(null)}
                  className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}

        {/* 3. GET UNIVERSITY SHORTLIST MODAL */}
        {activePopupModal === 'shortlist' && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setActivePopupModal(null)}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {!shortlistSuccess ? (
                <>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-iq-red font-bold text-xs uppercase tracking-wider mb-3">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Free Profile Matching</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-iq-navy tracking-tight mb-2">
                    Get Your Custom {data.name} University Shortlist
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-medium mb-5 leading-relaxed">
                    Receive 5–8 top accredited universities tailored to your academic scores, budget, and desired course with fee and scholarship evaluations.
                  </p>

                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setShortlistSuccess(true);
                    }}
                    className="space-y-3.5"
                  >
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Full Name</label>
                      <input
                        type="text"
                        required
                        value={shortlistForm.name}
                        onChange={(e) => setShortlistForm({ ...shortlistForm, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-iq-navy/20 focus:border-iq-navy font-medium"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Mobile Number</label>
                        <input
                          type="tel"
                          required
                          value={shortlistForm.phone}
                          onChange={(e) => setShortlistForm({ ...shortlistForm, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-iq-navy/20 focus:border-iq-navy font-medium"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Target Degree</label>
                        <select
                          value={shortlistForm.degree}
                          onChange={(e) => setShortlistForm({ ...shortlistForm, degree: e.target.value })}
                          className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-iq-navy/20 focus:border-iq-navy font-medium"
                        >
                          <option value="Master's Degree">Master's Degree (MS / MBA)</option>
                          <option value="Bachelor's Degree">Bachelor's Degree (UG)</option>
                          <option value="Doctorate / PhD">Doctorate / PhD</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Field of Study / Specialization</label>
                      <input
                        type="text"
                        value={shortlistForm.field}
                        onChange={(e) => setShortlistForm({ ...shortlistForm, field: e.target.value })}
                        placeholder="e.g. Computer Science, Data Analytics, Mechanical, Finance"
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-iq-navy/20 focus:border-iq-navy font-medium"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full py-4 rounded-2xl bg-iq-red hover:bg-iq-red-hover text-white font-black text-sm shadow-lg shadow-iq-red/30 transition-all cursor-pointer flex items-center justify-center gap-2"
                      >
                        <span>Generate & Send My Shortlist</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </form>
                </>
              ) : (
                <div className="py-6 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-iq-navy">
                    Shortlist Request Received!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed font-medium">
                    Thank you <strong>{shortlistForm.name || 'Student'}</strong>! Our senior counselor is generating your personalized <strong>{data.name}</strong> university shortlist. We will contact you at <strong>{shortlistForm.phone}</strong> shortly.
                  </p>
                  <div className="pt-3 flex flex-col gap-2.5">
                    <a
                      href={`https://wa.me/${BRAND_INFO.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                        `Hi IQ Overseas, I requested a university shortlist for ${data.name}. My name is ${shortlistForm.name || 'Student'} and phone is ${shortlistForm.phone}. Please send me the details.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Get Instant Shortlist on WhatsApp</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => setActivePopupModal(null)}
                      className="py-2.5 text-xs font-bold text-slate-500 hover:text-iq-navy"
                    >
                      Done
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        )}

        {/* 4. COURSE CURRICULUM & CAREERS MODAL */}
        {selectedCourse && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setSelectedCourse(null)}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 rounded-full bg-blue-100 text-iq-navy text-xs font-black uppercase">
                  {selectedCourse.category}
                </span>
                {selectedCourse.duration && (
                  <span className="text-xs font-mono font-bold text-slate-400">
                    Duration: {selectedCourse.duration}
                  </span>
                )}
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-iq-navy tracking-tight mb-3">
                {selectedCourse.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium mb-5">
                {selectedCourse.description}
              </p>

              {selectedCourse.careerRoles && selectedCourse.careerRoles.length > 0 && (
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 mb-6">
                  <div className="text-xs font-black text-iq-navy uppercase tracking-wider mb-2">
                    Industry Placement & Career Roles:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedCourse.careerRoles.map((role: string, idx: number) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-xs font-bold text-slate-700 shadow-2xs"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCourse(null);
                    onOpenConsultation();
                  }}
                  className="flex-1 py-3.5 rounded-xl bg-iq-red hover:bg-iq-red-hover text-white font-black text-xs uppercase tracking-wider shadow-md transition-all text-center cursor-pointer"
                >
                  Apply for {selectedCourse.title}
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedCourse(null)}
                  className="px-4 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}

        {/* 5. SCHOLARSHIP ELIGIBILITY MODAL */}
        {selectedScholarship && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setSelectedScholarship(null)}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-xs font-black uppercase tracking-wider text-slate-400">
                  {selectedScholarship.provider}
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 font-black text-xs border border-emerald-100">
                  {selectedScholarship.award}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-iq-navy tracking-tight mb-4">
                {selectedScholarship.name}
              </h3>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 mb-6 space-y-2">
                <div className="text-xs font-black text-iq-navy uppercase tracking-wider">
                  Eligibility Criteria:
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                  {selectedScholarship.eligibility}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedScholarship(null);
                    onOpenConsultation();
                  }}
                  className="flex-1 py-3.5 rounded-xl bg-iq-red hover:bg-iq-red-hover text-white font-black text-xs uppercase tracking-wider shadow-md transition-all text-center cursor-pointer"
                >
                  Check My Eligibility via IQ Overseas
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedScholarship(null)}
                  className="px-4 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}

        {/* 6. SUB-DESTINATION SPOTLIGHT MODAL (Europe) */}
        {selectedSubDest && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setSelectedSubDest(null)}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">{selectedSubDest.flag}</span>
                <h3 className="text-2xl font-black text-iq-navy">Study in {selectedSubDest.country}</h3>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium mb-5">
                {selectedSubDest.description}
              </p>

              <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 mb-6 text-xs">
                <div>
                  <div className="font-bold text-slate-400 uppercase">Capital City</div>
                  <div className="font-black text-iq-navy mt-0.5">{selectedSubDest.capital}</div>
                </div>
                <div>
                  <div className="font-bold text-slate-400 uppercase">Average Tuition</div>
                  <div className="font-black text-iq-navy mt-0.5">{selectedSubDest.avgTuition}</div>
                </div>
                <div className="col-span-2 pt-2 border-t border-slate-200">
                  <div className="font-bold text-slate-400 uppercase">Post-Study Stay Back</div>
                  <div className="font-black text-emerald-600 mt-0.5">{selectedSubDest.psw}</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedSubDest(null);
                    onOpenConsultation();
                  }}
                  className="flex-1 py-3.5 rounded-xl bg-iq-red hover:bg-iq-red-hover text-white font-black text-xs uppercase tracking-wider shadow-md transition-all text-center cursor-pointer"
                >
                  Consult for {selectedSubDest.country}
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedSubDest(null)}
                  className="px-4 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};
