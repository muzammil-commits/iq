import React, { useState, useEffect } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
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
  Landmark,
  Compass,
  Headphones,
  Calendar,
  Layers,
  MapPin,
  ExternalLink
} from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { AnimatedCounter } from '../components/AnimatedCounter';
import {
  MASTER_CATEGORIES,
  MASTER_COURSES,
  MASTER_COUNTRIES,
  POPULAR_UNIVERSITIES,
  MASTER_FAQS
} from '../data/mastersData';

interface MastersPageProps {
  onOpenConsultation: () => void;
}

export const MastersPage: React.FC<MastersPageProps> = ({ onOpenConsultation }) => {
  const { country } = useParams<{ country?: string }>();
  const [searchParams] = useSearchParams();
  const countryParam = country || searchParams.get('country');

  const [selectedCategory, setSelectedCategory] = useState('All Courses');
  const [selectedCountrySlug, setSelectedCountrySlug] = useState('usa');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  useEffect(() => {
    if (countryParam) {
      let slug = countryParam.toLowerCase().trim();
      if (slug === 'europe') slug = 'france';
      const exists = MASTER_COUNTRIES.some(c => c.slug === slug);
      if (exists) {
        setSelectedCountrySlug(slug);
        const el = document.getElementById('country-opportunities');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  }, [countryParam]);

  // Filter courses row-wise by selected category
  const filteredCourses = selectedCategory === 'All Courses'
    ? MASTER_COURSES
    : MASTER_COURSES.filter(c => c.category === selectedCategory);

  const activeCountry = MASTER_COUNTRIES.find(c => c.slug === selectedCountrySlug) || MASTER_COUNTRIES[0];

  return (
    <div className="w-full bg-white text-slate-800">
      
      {/* 1. MASTERS HERO SECTION */}
      <PageHero
        title="Study Master's Degrees Abroad"
        highlightedWord="Build Global Leadership"
        subtitle="Accelerate your career with world-ranked Master's, MS & MBA programs across top destinations including USA, UK, Canada, Australia, Ireland, and Europe."
        badge="Postgraduate & STEM Excellence"
        breadcrumbs={[{ label: 'Masters Programs' }]}
        onOpenConsultation={onOpenConsultation}
      />

      {/* QUICK HIGHLIGHTS METRICS STRIP */}
      <section className="bg-slate-50 border-y border-slate-200/80 py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center"
          >
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
              <div className="text-2xl sm:text-3xl font-black text-iq-navy">
                <AnimatedCounter value="1000+" />
              </div>
              <div className="text-xs sm:text-sm text-slate-600 font-medium mt-1">Partner Universities Worldwide</div>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
              <div className="text-2xl sm:text-3xl font-black text-iq-red">
                Up to <AnimatedCounter value="3" /> Yrs
              </div>
              <div className="text-xs sm:text-sm text-slate-600 font-medium mt-1">Post-Study Work Permit</div>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
              <div className="text-2xl sm:text-3xl font-black text-iq-navy">
                <AnimatedCounter value="99.2%" />
              </div>
              <div className="text-xs sm:text-sm text-slate-600 font-medium mt-1">Master's Visa Success Rate</div>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
              <div className="text-2xl sm:text-3xl font-black text-iq-red">
                <AnimatedCounter value="$10M+" />
              </div>
              <div className="text-xs sm:text-sm text-slate-600 font-medium mt-1">Scholarships Secured for Students</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. INTRODUCTION TO STUDYING MASTER'S DEGREES ABROAD */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-iq-red font-bold text-xs uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Premier Postgraduate Education</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-iq-navy tracking-tight leading-tight">
                Unlock Elite Global Careers with an <span className="text-iq-red">International Master's Degree</span>
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                Pursuing a Master's degree abroad is more than earning an advanced academic credential—it is a transformational investment in high-impact international career opportunities, specialized research expertise, and permanent residency pathways in world economic hubs.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Whether you aspire to lead engineering teams in Silicon Valley, manage quantitative investment portfolios in London, or drive renewable energy breakthroughs in Germany, IQ Overseas Edu Consultants provides end-to-end strategic guidance tailored to your academic background, test scores, budget, and long-term career roadmap.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                {[
                  'Guaranteed 3-year OPT for STEM fields in the USA',
                  'Flexible 1-year and 2-year Master’s durations',
                  'Part-time work rights up to 20 hours/week',
                  'High ROI starting salaries from $85,000 to $160,000'
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
                  <span>Evaluate My Master's Profile</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 group">
                <img
                  src="/images/destinations-landmarks-grand.png"
                  alt="Students attending global university master's lecture"
                  className="w-full h-[380px] sm:h-[440px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-iq-navy/90 via-iq-navy/20 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="text-xs uppercase tracking-widest font-bold text-red-300">Global Recognition</div>
                  <div className="text-lg font-bold mt-1">Recognized by Fortune 500 Employers Worldwide</div>
                  <div className="text-xs text-slate-200 mt-1">AACSB, ABET & EQUIS Accredited Programs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY STUDY MASTERS ABROAD? */}
      <section className="py-14 sm:py-20 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-iq-navy font-bold text-xs uppercase tracking-wider mb-2">
              <Award className="w-3.5 h-3.5 text-iq-red" />
              <span>Strategic Advantages</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-iq-navy tracking-tight">
              Why Study a Master's Abroad?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Gain competitive advantages that set you apart from domestic peers in technology, corporate leadership, and research.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-red-100 text-iq-red flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-iq-navy mb-2">High Career ROI</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Graduates from top international Master's programs see average starting salaries between $90,000 to $155,000 with rapid multi-national promotion paths.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-iq-navy flex items-center justify-center mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-iq-navy mb-2">Post-Study Work Visas</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Enjoy up to 3 years of post-study work authorization (OPT in the USA, PGWP in Canada, 2-year Graduate Route in UK & Ireland) to gain international experience.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-iq-navy mb-2">Merit Scholarships</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Access merit tuition reductions, graduate teaching assistantships (TA), and research assistantships (RA) providing tuition waivers and monthly living stipends.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center mb-4">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-iq-navy mb-2">Global Network & PR</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Study in diverse international cohorts, build an elite alumni network, and benefit from structured immigration pathways for highly skilled master's graduates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. POPULAR MASTER'S COURSES (ROW-WISE CATEGORY ORGANIZATION) */}
      <section id="popular-courses" className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-iq-red font-bold text-xs uppercase tracking-wider mb-2">
              <BookOpen className="w-3.5 h-3.5" />
              <span>In-Demand Specializations</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-iq-navy tracking-tight">
              Popular Master's Courses Abroad
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Explore leading postgraduate disciplines categorized row-wise with industry-standard compensation and intakes.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {MASTER_CATEGORIES.map((cat) => (
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

          {/* Row-wise Course Cards Grid: Desktop 3-4 cards/row, Tablet 2, Mobile 1, Equal Heights */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  {/* Course Image & Badge */}
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

                  {/* Course Content */}
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
                          <DollarSign className="w-3.5 h-3.5 text-emerald-600" /> Avg Salary:
                        </span>
                        <span className="font-bold text-emerald-700">{course.avgSalary}</span>
                      </div>
                      <div className="flex items-center justify-between text-slate-600">
                        <span className="flex items-center gap-1.5 text-slate-500">
                          <Calendar className="w-3.5 h-3.5 text-blue-600" /> Intakes:
                        </span>
                        <span className="font-semibold text-slate-700 truncate max-w-[170px]">{course.intakes}</span>
                      </div>
                    </div>

                    {/* Top Career Roles */}
                    <div className="pt-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                        Top Roles After Graduation:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {course.topRoles.map((role, rIdx) => (
                          <span
                            key={rIdx}
                            className="bg-slate-100 text-slate-700 text-[11px] font-medium px-2 py-0.5 rounded-md"
                          >
                            {role}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-5 sm:p-6 pt-0">
                  <button
                    onClick={onOpenConsultation}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-slate-50 hover:bg-iq-navy text-iq-navy hover:text-white border border-slate-200 hover:border-iq-navy rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer"
                  >
                    <span>Check Admission Eligibility</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. COUNTRY-WISE MASTER'S OPPORTUNITIES */}
      <section id="country-opportunities" className="py-14 sm:py-20 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-iq-navy font-bold text-xs uppercase tracking-wider mb-2">
              <Globe className="w-3.5 h-3.5 text-iq-red" />
              <span>10 Global Destinations</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-iq-navy tracking-tight">
              Country-Wise Master's Opportunities
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Compare visa rules, post-study work rights, living costs, and top master's institutions across major student destinations.
            </p>
          </div>

          {/* Country Selection Tabs */}
          <div className="flex overflow-x-auto no-scrollbar gap-2 pb-2 mb-8 justify-start lg:justify-center">
            {MASTER_COUNTRIES.map((cty) => (
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

          {/* Active Country Detail Card */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{activeCountry.flag}</span>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-black text-iq-navy">
                      Study Master's in {activeCountry.country}
                    </h3>
                    <div className="text-xs text-slate-500 font-medium">Visa Route: {activeCountry.visaType}</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                    <span className="text-[11px] text-slate-500 block font-medium">Post-Study Work:</span>
                    <span className="text-sm font-bold text-iq-red">{activeCountry.pswDuration}</span>
                  </div>
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                    <span className="text-[11px] text-slate-500 block font-medium">Avg Tuition / Yr:</span>
                    <span className="text-sm font-bold text-slate-800">{activeCountry.avgCostPerYear}</span>
                  </div>
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                    <span className="text-[11px] text-slate-500 block font-medium">Starting Salary:</span>
                    <span className="text-sm font-bold text-emerald-700">{activeCountry.avgSalary}</span>
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Key Highlights for Indian Students:</h4>
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
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Top Partner Universities:</h4>
                  <div className="flex flex-wrap gap-2">
                    {activeCountry.topUniversities.map((uni, idx) => (
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
                  Targeting {activeCountry.country} for {activeCountry.intakes}?
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Our certified consultants in Guntur evaluate your CGPA, backlogs, and GRE/English scores to secure university admits and maximum scholarships.
                </p>
                <div className="space-y-2 pt-2 text-xs">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Free application fee waivers at select universities</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>High-approval visa filing & mock interview prep</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Fast-track 24–48 hour application turnaround</span>
                  </div>
                </div>
                <button
                  onClick={onOpenConsultation}
                  className="w-full mt-4 py-3 bg-iq-red hover:bg-iq-red-hover text-white rounded-xl text-sm font-bold shadow-lg transition-all cursor-pointer"
                >
                  Apply to {activeCountry.country} Universities
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. POPULAR UNIVERSITIES (CARDS ROW-WISE) */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-iq-red font-bold text-xs uppercase tracking-wider mb-2">
              <Building2 className="w-3.5 h-3.5" />
              <span>World-Ranked Institutions</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-iq-navy tracking-tight">
              Popular Global Universities for Master's
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Direct institutional partnerships with tier-1 research universities and high-acceptance institutions.
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
                        Top Master's Programs:
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

      {/* 7. ELIGIBILITY REQUIREMENTS & REQUIRED DOCUMENTS */}
      <section className="py-14 sm:py-20 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-iq-navy font-bold text-xs uppercase tracking-wider mb-2">
              <ShieldCheck className="w-3.5 h-3.5 text-iq-red" />
              <span>Admissions Criteria</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-iq-navy tracking-tight">
              Master's Eligibility & Document Checklist
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Everything required to secure an unconditional admit and student visa without unexpected delays.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Academic Requirements */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-red-100 text-iq-red flex items-center justify-center">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-iq-navy">1. Academic Requirements</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Most international universities require a recognized undergraduate degree in a relevant discipline.
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Minimum GPA:</strong> 2.8 to 3.0 / 4.0 or 55% - 65% aggregate in Bachelor's.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>3-Year Degrees Accepted:</strong> B.Sc, B.Com, BBA accepted in UK, Ireland, Australia & select US/Canada universities.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Backlogs:</strong> Up to 10-15 backlogs accepted in UK/USA; up to 5 in Australia.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>GRE / GMAT:</strong> Optional or waived at 80%+ partner universities.</span>
                </li>
              </ul>
            </div>

            {/* English Language Requirements */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-iq-navy flex items-center justify-center">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-iq-navy">2. English Proficiency</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Valid standardized language score or Medium of Instruction (MOI) waiver where permitted.
              </p>
              <div className="space-y-2.5 pt-1 text-xs sm:text-sm">
                <div className="flex justify-between items-center p-2.5 bg-slate-50 rounded-lg">
                  <span className="font-bold text-slate-800">IELTS Academic</span>
                  <span className="font-bold text-iq-red">6.5 Overall (min 6.0 each)</span>
                </div>
                <div className="flex justify-between items-center p-2.5 bg-slate-50 rounded-lg">
                  <span className="font-bold text-slate-800">PTE Academic</span>
                  <span className="font-bold text-iq-red">58 - 65 Overall</span>
                </div>
                <div className="flex justify-between items-center p-2.5 bg-slate-50 rounded-lg">
                  <span className="font-bold text-slate-800">TOEFL iBT</span>
                  <span className="font-bold text-iq-red">80 - 92 Overall</span>
                </div>
                <div className="flex justify-between items-center p-2.5 bg-slate-50 rounded-lg">
                  <span className="font-bold text-slate-800">MOI Waiver</span>
                  <span className="font-bold text-emerald-700">Available in select UK/Ireland Unis</span>
                </div>
              </div>
            </div>

            {/* Required Documents Checklist */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-iq-navy">3. Required Documents</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                IQ Overseas helps draft and edit professional statements and portfolios.
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Valid International Passport (min 6 months validity)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>10th, 12th & Semester-wise Degree Transcripts + CMM</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Statement of Purpose (SOP) tailored to each university</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>2–3 Letters of Recommendation (Academic & Employer)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Updated Resume & Experience Letters (if applicable)</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 8. SCHOLARSHIP OPPORTUNITIES BANNER */}
      <section className="py-12 bg-gradient-to-r from-iq-navy via-slate-900 to-iq-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 text-red-300 font-bold text-xs uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Financial Aid & Assistantships</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black tracking-tight">
                Scholarships up to <span className="text-iq-red">$25,000</span> for Master's Applicants
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Over 78% of IQ Overseas Master's applicants receive automatic merit scholarships, STEM fellowships, or teaching assistantships. We also assist with collateral-free education loans from major nationalized and international banks.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <button
                onClick={onOpenConsultation}
                className="w-full py-3.5 px-6 bg-iq-red hover:bg-iq-red-hover text-white font-bold rounded-xl text-center shadow-lg transition-all cursor-pointer"
              >
                Apply for Master's Scholarships
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 9. APPLICATION PROCESS ROADMAP (6-STEP TIMELINE) */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-iq-red font-bold text-xs uppercase tracking-wider mb-2">
              <Compass className="w-3.5 h-3.5" />
              <span>Step-by-Step Roadmap</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-iq-navy tracking-tight">
              Master's Application Journey
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              How IQ Overseas guides you from university shortlisting to landing at your international campus.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                step: '01',
                title: 'Profile Evaluation & Shortlisting',
                desc: 'In-depth assessment of your undergraduate GPA, budget, target destination, and career outcomes to pick 8-10 ambitious, moderate, and safe universities.'
              },
              {
                step: '02',
                title: 'Test Preparation (IELTS/PTE/GRE)',
                desc: 'Specialized coaching in our modern training center in Guntur with diagnostic tests, practice materials, and score improvement guarantees.'
              },
              {
                step: '03',
                title: 'SOP & Documentation Crafting',
                desc: 'Expert editorial review of your Statement of Purpose (SOP), Letters of Recommendation (LORs), and CV to highlight your strengths.'
              },
              {
                step: '04',
                title: 'University Applications & Waivers',
                desc: 'Direct portal submissions with institutional application fee waivers, scholarship nominations, and proactive offer tracking.'
              },
              {
                step: '05',
                title: 'Offer Acceptance & I-20 / CAS',
                desc: 'Advisory on tuition deposit payment, financial documentation, and fast-track issuance of I-20 (USA) or CAS (UK).'
              },
              {
                step: '06',
                title: 'Visa Filing & Mock Interviews',
                desc: 'Complete DS-160/Visa documentation, financial solvency affidavits, and realistic 1-on-1 mock interview preparation.'
              }
            ].map((st) => (
              <div key={st.step} className="bg-slate-50 p-6 rounded-2xl border border-slate-200 relative group hover:border-iq-navy transition-colors">
                <span className="text-3xl font-black text-slate-300 group-hover:text-iq-red transition-colors block mb-2">
                  {st.step}
                </span>
                <h3 className="text-lg font-bold text-iq-navy mb-2">{st.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. POST-STUDY WORK PERMIT & CAREER OUTCOMES TABLE */}
      <section className="py-14 sm:py-20 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-iq-navy font-bold text-xs uppercase tracking-wider mb-2">
              <Briefcase className="w-3.5 h-3.5 text-iq-red" />
              <span>Global Employability</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-iq-navy tracking-tight">
              Post-Study Work Rights & High-Demand Careers
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Compare international work visa policies and post-graduation salary benchmarks for master's degree holders.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-iq-navy text-white uppercase text-[11px] tracking-wider font-bold">
                  <tr>
                    <th className="py-4 px-6">Country</th>
                    <th className="py-4 px-6">Work Visa Duration</th>
                    <th className="py-4 px-6">Part-Time Work Rights</th>
                    <th className="py-4 px-6">Avg Starting Salary</th>
                    <th className="py-4 px-6">PR / Permanent Residency</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-6 font-bold text-iq-navy flex items-center gap-2">
                      <span>🇺🇸</span> United States
                    </td>
                    <td className="py-4 px-6 font-semibold text-iq-red">Up to 3 Years (STEM OPT)</td>
                    <td className="py-4 px-6 text-slate-600">20 hrs/week (On-Campus)</td>
                    <td className="py-4 px-6 font-bold text-emerald-700">$95,000 - $145,000</td>
                    <td className="py-4 px-6 text-slate-600">H-1B Cap Exempt / EB-2</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-6 font-bold text-iq-navy flex items-center gap-2">
                      <span>🇬🇧</span> United Kingdom
                    </td>
                    <td className="py-4 px-6 font-semibold text-iq-red">2 Years Graduate Route</td>
                    <td className="py-4 px-6 text-slate-600">20 hrs/week</td>
                    <td className="py-4 px-6 font-bold text-emerald-700">£36,000 - £60,000</td>
                    <td className="py-4 px-6 text-slate-600">Skilled Worker Visa (5-Yr Route)</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-6 font-bold text-iq-navy flex items-center gap-2">
                      <span>🇨🇦</span> Canada
                    </td>
                    <td className="py-4 px-6 font-semibold text-iq-red">Up to 3 Years PGWP</td>
                    <td className="py-4 px-6 text-slate-600">24 hrs/week</td>
                    <td className="py-4 px-6 font-bold text-emerald-700">CAD 75,000 - 110,000</td>
                    <td className="py-4 px-6 text-slate-600">Express Entry (CEC & PNP)</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-6 font-bold text-iq-navy flex items-center gap-2">
                      <span>🇦🇺</span> Australia
                    </td>
                    <td className="py-4 px-6 font-semibold text-iq-red">2 to 3 Years (Subclass 485)</td>
                    <td className="py-4 px-6 text-slate-600">48 hrs per fortnight</td>
                    <td className="py-4 px-6 font-bold text-emerald-700">AUD 80,000 - 120,000</td>
                    <td className="py-4 px-6 text-slate-600">Subclass 189 / 190 PR Points</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-6 font-bold text-iq-navy flex items-center gap-2">
                      <span>🇮🇪</span> Ireland
                    </td>
                    <td className="py-4 px-6 font-semibold text-iq-red">2 Years (Third Level Scheme)</td>
                    <td className="py-4 px-6 text-slate-600">20 hrs/week (40 in holidays)</td>
                    <td className="py-4 px-6 font-bold text-emerald-700">€42,000 - €70,000</td>
                    <td className="py-4 px-6 text-slate-600">Critical Skills Employment Permit</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-6 font-bold text-iq-navy flex items-center gap-2">
                      <span>🇩🇪</span> Germany
                    </td>
                    <td className="py-4 px-6 font-semibold text-iq-red">18 Months Jobseeker Visa</td>
                    <td className="py-4 px-6 text-slate-600">140 full days / 280 half days</td>
                    <td className="py-4 px-6 font-bold text-emerald-700">€50,000 - €80,000</td>
                    <td className="py-4 px-6 text-slate-600">EU Blue Card (PR in 21-27 months)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 11. FREQUENTLY ASKED QUESTIONS (FAQS ACCORDION) */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-iq-red font-bold text-xs uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Clear Guidance</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-iq-navy tracking-tight">
              Frequently Asked Questions: Master's Abroad
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Find answers to the most common queries regarding admissions, backlogs, costs, and work rights.
            </p>
          </div>

          <div className="space-y-3">
            {MASTER_FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="border border-slate-200 rounded-2xl overflow-hidden transition-colors"
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

      {/* 12. FREE COUNSELLING CTA BANNER */}
      <section className="py-16 bg-gradient-to-r from-iq-navy via-iq-navy to-slate-900 text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
            Ready to Accelerate Your Career with an <span className="text-iq-red">International Master's?</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Get personalized university shortlisting, scholarship assistance, and visa consultation from South India's trusted study-abroad specialists.
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
