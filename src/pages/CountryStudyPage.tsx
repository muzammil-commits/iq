import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
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
  Headphones,
  Calendar,
  Layers,
  MapPin,
  ChevronRight,
  Compass
} from 'lucide-react';
import { COUNTRY_PAGES_DATA, CountryDegreeContent } from '../data/countryPagesData';

interface CountryStudyPageProps {
  degreeLevel: 'bachelors' | 'masters';
  onOpenConsultation: () => void;
}

export const CountryStudyPage: React.FC<CountryStudyPageProps> = ({ degreeLevel, onOpenConsultation }) => {
  const { country } = useParams<{ country?: string }>();
  const navigate = useNavigate();
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  // Normalize slug
  let raw = (country || 'usa').toLowerCase().trim();
  raw = raw.replace('.html', '');
  raw = raw.replace(/^bachelors-degree-in-(the-)?/, '');
  raw = raw.replace(/^bachelors-in-/, '');
  raw = raw.replace(/^masters-degree-in-(the-)?/, '');
  raw = raw.replace(/^masters-in-/, '');
  raw = raw.replace(/^study-in-/, '');
  raw = raw.replace(/^bachelors-/, '');
  raw = raw.replace(/^masters-/, '');

  let normalizedSlug = raw;
  if (normalizedSlug === 'europe') {
    normalizedSlug = degreeLevel === 'bachelors' ? 'ireland' : 'germany';
  }

  const lookupKey = `${degreeLevel}-${normalizedSlug}`;
  const data: CountryDegreeContent = COUNTRY_PAGES_DATA[lookupKey] || COUNTRY_PAGES_DATA[`${degreeLevel}-usa`];

  const destinationOptions = [
    { slug: 'usa', name: 'USA', flag: '🇺🇸' },
    { slug: 'uk', name: 'UK', flag: '🇬🇧' },
    { slug: 'canada', name: 'Canada', flag: '🇨🇦' },
    { slug: 'australia', name: 'Australia', flag: '🇦🇺' },
    { slug: 'ireland', name: 'Ireland', flag: '🇮🇪' },
    { slug: 'germany', name: 'Germany', flag: '🇩🇪' }
  ];

  const degreeTitle = degreeLevel === 'bachelors' ? "Bachelor's Degree" : "Master's Degree";
  const parentPath = degreeLevel === 'bachelors' ? '/bachelors' : '/masters';
  const parentLabel = degreeLevel === 'bachelors' ? 'Bachelors Abroad' : 'Masters Abroad';

  return (
    <div className="w-full bg-white text-slate-800">
      
      {/* 1. IVY OVERSEAS STYLE HERO BANNER */}
      <section className="relative bg-gradient-to-br from-slate-50 via-blue-50/40 to-white py-12 sm:py-16 lg:py-20 border-b border-slate-200/80 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-1.5 text-xs text-slate-500 mb-6" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-iq-navy transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link to={parentPath} className="hover:text-iq-navy transition-colors">{parentLabel}</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="font-bold text-iq-navy">{data.countryName}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 text-iq-red font-extrabold text-xs uppercase tracking-wider border border-red-100">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{data.badge}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-iq-navy tracking-tight leading-[1.2]">
                {data.heroHeadline}
              </h1>

              <p className="text-base sm:text-xl font-bold text-iq-red">
                {data.heroTagline}
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl">
                {data.heroSubtitle}
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <button
                  onClick={onOpenConsultation}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm sm:text-base rounded-xl shadow-[0_8px_25px_rgba(37,99,235,0.35)] transition-all transform hover:-translate-y-0.5 cursor-pointer"
                >
                  <span>Schedule Free Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => {
                    const el = document.getElementById('programs-section');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white hover:bg-slate-50 text-iq-navy border border-slate-300 font-bold text-sm sm:text-base rounded-xl transition-colors cursor-pointer"
                >
                  <span>Explore Programs</span>
                </button>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 group">
                <img
                  src={data.heroImage}
                  alt={`Study in ${data.countryName}`}
                  className="w-full h-[360px] sm:h-[420px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-iq-navy/90 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                  <div className="flex items-center gap-2 text-2xl font-black">
                    <span>{data.flag}</span>
                    <span>{data.countryName}</span>
                  </div>
                  <div className="text-xs text-slate-200">
                    Direct Admissions & High Visa Approval Rate
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. DESTINATION SWITCHER STRIP */}
      <section className="bg-white border-b border-slate-200/80 py-4 sticky top-16 z-20 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 whitespace-nowrap mr-2">
              Select Country:
            </span>
            {destinationOptions.map((opt) => (
              <button
                key={opt.slug}
                onClick={() => navigate(`/${degreeLevel}/${opt.slug}`)}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                  data.slug === opt.slug
                    ? 'bg-iq-navy text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <span>{opt.flag}</span>
                <span>{opt.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. QUICK FACTS MATRIX */}
      <section className="py-10 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            <div className="bg-white p-4 rounded-xl border border-slate-200">
              <span className="text-[11px] font-bold text-slate-400 uppercase block">Duration</span>
              <span className="text-xs sm:text-sm font-bold text-iq-navy mt-1 block">{data.quickFacts.duration}</span>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-200">
              <span className="text-[11px] font-bold text-slate-400 uppercase block">Intakes</span>
              <span className="text-xs sm:text-sm font-bold text-slate-800 mt-1 block">{data.quickFacts.intakes}</span>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-200">
              <span className="text-[11px] font-bold text-slate-400 uppercase block">Post-Study Work</span>
              <span className="text-xs sm:text-sm font-bold text-iq-red mt-1 block">{data.quickFacts.postStudyWork}</span>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-200">
              <span className="text-[11px] font-bold text-slate-400 uppercase block">Avg Tuition / Yr</span>
              <span className="text-xs sm:text-sm font-bold text-emerald-700 mt-1 block">{data.quickFacts.avgTuition}</span>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-200">
              <span className="text-[11px] font-bold text-slate-400 uppercase block">Part-Time Work</span>
              <span className="text-xs sm:text-sm font-bold text-slate-800 mt-1 block">{data.quickFacts.workRights}</span>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-200">
              <span className="text-[11px] font-bold text-slate-400 uppercase block">PR / Visa Route</span>
              <span className="text-xs sm:text-sm font-bold text-blue-700 mt-1 block">{data.quickFacts.prPathway}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHY STUDY IN THIS COUNTRY? */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-iq-red font-bold text-xs uppercase tracking-wider mb-2">
              <Award className="w-3.5 h-3.5" />
              <span>Key Advantages</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-iq-navy tracking-tight">
              Why Study {degreeTitle} in {data.countryName}?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Strategic educational and career benefits for Indian students.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.whyStudy.map((item, idx) => (
              <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:border-iq-navy transition-all space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-iq-navy font-bold flex items-center justify-center">
                  0{idx + 1}
                </div>
                <h3 className="text-base font-bold text-iq-navy">{item.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. POPULAR PROGRAMS IN THIS COUNTRY */}
      <section id="programs-section" className="py-14 sm:py-20 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-iq-navy font-bold text-xs uppercase tracking-wider mb-2">
              <BookOpen className="w-3.5 h-3.5 text-iq-red" />
              <span>Top Specializations</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-iq-navy tracking-tight">
              Popular {degreeTitle} Courses in {data.countryName}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              High-demand majors with proven career outcomes and corporate recruitment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.popularPrograms.map((prog, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between space-y-4">
                <div className="space-y-2.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-iq-red bg-red-50 px-2 py-0.5 rounded-md inline-block">
                    {prog.category}
                  </span>
                  <h3 className="text-lg font-bold text-iq-navy">{prog.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{prog.description}</p>
                  
                  <div className="pt-2 border-t border-slate-100 space-y-1.5 text-xs text-slate-600">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Duration:</span>
                      <span className="font-semibold text-slate-800">{prog.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Avg Salary:</span>
                      <span className="font-bold text-emerald-700">{prog.avgSalary}</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                      Top Career Roles:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {prog.topRoles.map((r, rIdx) => (
                        <span key={rIdx} className="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-medium">
                          {r}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <button
                  onClick={onOpenConsultation}
                  className="w-full py-2.5 bg-slate-100 hover:bg-iq-navy hover:text-white text-iq-navy text-xs font-bold rounded-xl transition-all cursor-pointer"
                >
                  Check Eligibility for this Course
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. TOP UNIVERSITIES IN THIS COUNTRY */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-iq-red font-bold text-xs uppercase tracking-wider mb-2">
              <Building2 className="w-3.5 h-3.5" />
              <span>Campus Rankings</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-iq-navy tracking-tight">
              Top Ranked Universities in {data.countryName}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Leading institutions partnered with IQ Overseas for direct application submissions and fee waivers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.topUniversities.map((uni, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs flex flex-col justify-between">
                <div>
                  <div className="relative h-40 overflow-hidden bg-slate-100">
                    <img src={uni.image} alt={uni.name} className="w-full h-full object-cover" />
                    <div className="absolute top-3 left-3 bg-white/95 px-2 py-0.5 rounded text-[11px] font-bold text-iq-navy">
                      {uni.location}
                    </div>
                  </div>

                  <div className="p-5 space-y-2">
                    <div className="text-[11px] font-bold text-iq-red uppercase">{uni.ranking}</div>
                    <h3 className="text-base font-bold text-iq-navy line-clamp-1">{uni.name}</h3>
                    
                    <div className="pt-2 border-t border-slate-100 text-xs space-y-1 text-slate-600">
                      <div className="flex justify-between">
                        <span className="text-slate-400">Tuition:</span>
                        <span className="font-semibold text-slate-800">{uni.tuition}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Acceptance Rate:</span>
                        <span className="font-semibold text-emerald-700">{uni.acceptanceRate}</span>
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

      {/* 7. COST BREAKDOWN & SCHOLARSHIPS */}
      <section className="py-14 sm:py-20 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Cost Table */}
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-iq-navy font-bold text-xs uppercase tracking-wider">
                <DollarSign className="w-3.5 h-3.5 text-iq-red" />
                <span>Financial Planning</span>
              </div>
              <h3 className="text-2xl font-black text-iq-navy">Cost of Studying & Living</h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Estimated annual budget for international students studying {degreeTitle} in {data.countryName}.
              </p>

              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs divide-y divide-slate-100 text-xs sm:text-sm">
                <div className="p-3.5 flex justify-between">
                  <span className="text-slate-600">Average Annual Tuition:</span>
                  <span className="font-bold text-slate-800">{data.costBreakdown.tuition}</span>
                </div>
                <div className="p-3.5 flex justify-between">
                  <span className="text-slate-600">Living Expenses & Housing:</span>
                  <span className="font-bold text-slate-800">{data.costBreakdown.living}</span>
                </div>
                <div className="p-3.5 flex justify-between">
                  <span className="text-slate-600">Health Insurance:</span>
                  <span className="font-bold text-slate-800">{data.costBreakdown.insurance}</span>
                </div>
                <div className="p-3.5 flex justify-between">
                  <span className="text-slate-600">Books & Miscellaneous:</span>
                  <span className="font-bold text-slate-800">{data.costBreakdown.misc}</span>
                </div>
                <div className="p-4 bg-slate-50 flex justify-between font-black text-iq-navy text-sm">
                  <span>Total Estimated Annual Cost:</span>
                  <span className="text-iq-red">{data.costBreakdown.total}</span>
                </div>
              </div>
            </div>

            {/* Scholarships */}
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-iq-red font-bold text-xs uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Financial Aid</span>
              </div>
              <h3 className="text-2xl font-black text-iq-navy">Scholarships in {data.countryName}</h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Merit-based tuition discounts and government grants available for Indian applicants.
              </p>

              <div className="space-y-3">
                {data.scholarships.map((sch, idx) => (
                  <div key={idx} className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-1.5">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-bold text-iq-navy">{sch.name}</h4>
                      <span className="text-xs font-black text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                        {sch.award}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">{sch.coverage}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 8. ELIGIBILITY & VISA REQUIREMENTS */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-iq-navy font-bold text-xs uppercase tracking-wider mb-2">
              <ShieldCheck className="w-3.5 h-3.5 text-iq-red" />
              <span>Admissions Criteria</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-iq-navy tracking-tight">
              Eligibility & Student Visa Process
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Essential qualifications and documentation requirements for {data.countryName}.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-2">
              <span className="text-xs font-bold text-iq-red uppercase block">1. Academic Criteria</span>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{data.eligibility.academicRequirements}</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-2">
              <span className="text-xs font-bold text-iq-navy uppercase block">2. Standardized Tests</span>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{data.eligibility.standardizedTests}</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-2">
              <span className="text-xs font-bold text-emerald-700 uppercase block">3. English Proficiency</span>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{data.eligibility.englishRequirements}</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-2">
              <span className="text-xs font-bold text-purple-700 uppercase block">4. Financial Solvency</span>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{data.eligibility.financialSolvency}</p>
            </div>
          </div>

          {/* Visa Highlight Box */}
          <div className="bg-gradient-to-br from-iq-navy to-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-bold text-red-300">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Student Visa Guidance</span>
                </div>
                <h3 className="text-2xl font-bold">{data.visaGuide.visaName}</h3>
                <p className="text-xs sm:text-sm text-slate-300">
                  Processing Time: <strong>{data.visaGuide.processingTime}</strong> • Proof of Funds: <strong>{data.visaGuide.proofOfFunds}</strong>
                </p>
                <div className="space-y-1.5 pt-2 text-xs text-slate-200">
                  {data.visaGuide.keyPoints.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-4 flex flex-col gap-3">
                <button
                  onClick={onOpenConsultation}
                  className="w-full py-3.5 px-6 bg-iq-red hover:bg-iq-red-hover text-white font-bold rounded-xl text-center shadow-lg transition-all cursor-pointer"
                >
                  Book Visa Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-14 sm:py-20 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-4xl font-black text-iq-navy tracking-tight">
              FAQs: Studying in {data.countryName}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Answers to top questions regarding admissions, work rights, and costs.
            </p>
          </div>

          <div className="space-y-3">
            {data.faqs.map((faq, idx) => (
              <div key={idx} className="border border-slate-200 rounded-2xl overflow-hidden bg-white">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full text-left p-5 sm:p-6 bg-white hover:bg-slate-50 flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-iq-navy cursor-pointer transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-500 shrink-0 transition-transform ${expandedFaq === idx ? 'rotate-180 text-iq-red' : ''}`} />
                </button>
                {expandedFaq === idx && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
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
            Start Your {degreeTitle} Journey in <span className="text-iq-red">{data.countryName}</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Get 1-on-1 expert guidance from IQ Overseas Guntur for university shortlisting, application fee waivers, and visa processing.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-iq-red hover:bg-iq-red-hover text-white font-extrabold text-sm sm:text-base rounded-full shadow-[0_8px_25px_rgba(227,6,19,0.35)] transition-all cursor-pointer"
            >
              <span>Schedule Free In-Person / Online Counselling</span>
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
