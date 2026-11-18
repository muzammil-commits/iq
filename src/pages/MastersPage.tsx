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
  FileText
} from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { MASTERS_DROPDOWN, DESTINATIONS_DATA } from '../data/siteContent';

interface MastersPageProps {
  onOpenConsultation: () => void;
}

export const MastersPage: React.FC<MastersPageProps> = ({ onOpenConsultation }) => {
  const [selectedCountry, setSelectedCountry] = useState('usa');

  const masterSpecializations = [
    { title: 'Computer Science & Software Engg', intake: 'Fall & Spring', duration: '1-2 Years', avgSalary: '$95,000 - $130,000' },
    { title: 'Data Science & Artificial Intelligence', intake: 'Fall & Spring', duration: '1.5-2 Years', avgSalary: '$100,000 - $140,000' },
    { title: 'Master of Business Administration (MBA)', intake: 'Rolling / Sept', duration: '1-2 Years', avgSalary: '$90,000 - $150,000' },
    { title: 'Engineering Management (MEM)', intake: 'Fall & Spring', duration: '1-2 Years', avgSalary: '$85,000 - $120,000' },
    { title: 'Biotechnology & Health Informatics', intake: 'Fall & Winter', duration: '2 Years', avgSalary: '$80,000 - $115,000' },
    { title: 'FinTech & Financial Analytics', intake: 'Sept & Jan', duration: '1 Year', avgSalary: '$85,000 - $125,000' }
  ];

  const sections = [
    {
      title: 'Course & Specialization Mapping',
      desc: 'Mapping your bachelor’s foundation to in-demand global fields like Computer Science, AI, Data Analytics, Advanced Engineering, MBA, Finance, and Biomedical Sciences.',
      icon: BookOpen
    },
    {
      title: 'University Selection Matrix',
      desc: 'Curating a balanced list of Dream, Reach, and Safe world-ranked institutions aligned with your academic scores, budget, and post-study career goals.',
      icon: Globe
    },
    {
      title: 'Application & SOP Processing',
      desc: 'Drafting compelling Statements of Purpose (SOP), reviewing Letters of Recommendation (LORs), and submitting portal applications with zero procedural errors.',
      icon: Briefcase
    },
    {
      title: 'Financial & Loan Guidance',
      desc: 'Connecting you with education loan institutions, identifying merit scholarships, and structuring airtight proof of funds required for immigration.',
      icon: Award
    },
    {
      title: 'Visa Assistance & Mock Interviews',
      desc: 'Step-by-step consular guidance, Genuine Student documentation, and mock visa interview practice covering intent, financials, and future career plans.',
      icon: GraduationCap
    },
    {
      title: 'Pre-Departure Briefings',
      desc: 'Accommodation bookings, student health insurance, flight tickets with student baggage allowances, and currency exchange cards.',
      icon: Clock
    }
  ];

  return (
    <div className="w-full">
      <PageHero
        title="Build Your Future With"
        highlightedWord="Global Master’s Opportunities"
        subtitle="Transform your career with specialized postgraduate degrees from leading international institutions across the USA, UK, Canada, Australia, Ireland, and Europe."
        breadcrumbs={[{ label: 'Masters Abroad' }]}
        onOpenConsultation={onOpenConsultation}
      />

      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Main Hero Overview with Grand Picture (image copy 14.png) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-iq-red uppercase tracking-wider">
                <span className="w-6 h-0.5 bg-iq-red" />
                <span>Postgraduate Excellence</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-iq-navy tracking-tight leading-tight">
                Why Study a Master's Abroad?
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                An international Master's degree delivers accelerated career growth, cutting-edge research exposure, hands-on industrial collaboration, and access to dynamic global economies.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
                  <CheckCircle2 className="w-5 h-5 text-iq-red shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-sm font-bold text-iq-navy">High Return on Investment (ROI)</h5>
                    <p className="text-xs text-slate-500 mt-0.5">Postgraduate degrees in STEM and business fields command top starting salaries globally.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
                  <CheckCircle2 className="w-5 h-5 text-iq-red shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-sm font-bold text-iq-navy">Post-Study Work Permits (PSW)</h5>
                    <p className="text-xs text-slate-500 mt-0.5">Access 2 to 3 years of post-study work authorization (OPT in USA, Graduate Route in UK, PGWP in Canada).</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
                  <CheckCircle2 className="w-5 h-5 text-iq-red shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-sm font-bold text-iq-navy">Global Network & Industry Connect</h5>
                    <p className="text-xs text-slate-500 mt-0.5">Build peer networks with international scholars, corporate leaders, and faculty mentors.</p>
                  </div>
                </div>
              </div>

              <div className="pt-3">
                <button
                  onClick={onOpenConsultation}
                  className="px-7 py-3.5 bg-iq-red hover:bg-iq-red-hover text-white text-xs sm:text-sm font-bold rounded-2xl shadow-lg transition-all"
                >
                  Explore Master’s Opportunities
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 group">
                <img
                  src="/images/program-masters-grand.png"
                  alt="Students pursuing Master degrees abroad"
                  className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </div>
          </div>

          {/* Master's by Country Explorer (Ivy Overseas Style) */}
          <div className="bg-[#F8FAFD] rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-lg space-y-6">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-bold text-iq-red uppercase tracking-wider">Top Study Destinations</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-iq-navy mt-1">
                Study Masters by Country
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Explore tailored admission criteria, post-study work rights, and living costs.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {MASTERS_DROPDOWN.map((m) => (
                <div
                  key={m.slug}
                  onClick={onOpenConsultation}
                  className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md hover:border-iq-navy transition-all cursor-pointer group"
                >
                  <div className="text-3xl mb-2">{m.flag}</div>
                  <h4 className="text-base font-bold text-iq-navy group-hover:text-iq-red transition-colors">
                    {m.title}
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    {m.highlight}
                  </p>
                  <div className="mt-3 text-xs font-bold text-iq-navy flex items-center gap-1 group-hover:text-iq-red">
                    <span>Check Eligibility</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* High In-Demand Master's Specializations */}
          <div className="space-y-6">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-bold text-iq-red uppercase tracking-wider">Top Industry Fields</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-iq-navy mt-1">
                In-Demand Master’s Specializations
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {masterSpecializations.map((spec, i) => (
                <div key={i} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-all space-y-2">
                  <div className="text-[10px] font-bold text-iq-red uppercase tracking-wider">Program 0{i + 1}</div>
                  <h4 className="text-sm font-bold text-iq-navy leading-snug">{spec.title}</h4>
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span>Duration: {spec.duration}</span>
                    <span>Intakes: {spec.intake}</span>
                  </div>
                  <div className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg">
                    Avg Salary: {spec.avgSalary}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 6-Stage Master's Roadmap */}
          <div className="space-y-6">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-2xl font-extrabold text-iq-navy">
                Our 6-Stage Master's Mentorship Roadmap
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sections.map((sec, idx) => {
                const Icon = sec.icon;
                return (
                  <div
                    key={sec.title}
                    className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-iq-navy hover:shadow-md transition-all group"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-iq-navy text-white flex items-center justify-center group-hover:bg-iq-red transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-400">
                        0{idx + 1}
                      </span>
                    </div>
                    <h4 className="text-base font-bold text-iq-navy group-hover:text-iq-red transition-colors">
                      {sec.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed mt-2">
                      {sec.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
