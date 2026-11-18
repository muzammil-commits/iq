import React from 'react';
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
  Globe
} from 'lucide-react';
import { PageHero } from '../components/PageHero';

interface MastersPageProps {
  onOpenConsultation: () => void;
}

export const MastersPage: React.FC<MastersPageProps> = ({ onOpenConsultation }) => {
  const sections = [
    {
      title: 'Course Exploration',
      desc: 'Mapping your bachelor’s foundation to in-demand global fields like Computer Science, AI, Data Analytics, Advanced Engineering, MBA, Finance, and Biomedical Sciences.',
      icon: BookOpen
    },
    {
      title: 'University Selection',
      desc: 'Curating a balanced list of Dream, Reach, and Safe world-ranked institutions aligned with your academic scores, budget, and post-study career goals.',
      icon: Globe
    },
    {
      title: 'Application Processing',
      desc: 'Drafting compelling Statements of Purpose (SOP), reviewing Letters of Recommendation (LORs), and submitting portal applications with zero procedural errors.',
      icon: Briefcase
    },
    {
      title: 'Financial Guidance',
      desc: 'Connecting you with education loan institutions, identifying merit scholarships, and structuring airtight proof of funds required for immigration.',
      icon: Award
    },
    {
      title: 'Visa Assistance',
      desc: 'Step-by-step consular guidance, Genuine Student documentation, and mock visa interview practice covering intent, financials, and future career plans.',
      icon: GraduationCap
    },
    {
      title: 'Pre-Departure Support',
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

      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Why Study a Master's Abroad */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-iq-red uppercase tracking-wider">
                <span className="w-5 h-0.5 bg-iq-red" />
                <span>Postgraduate Excellence</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-iq-navy tracking-tight">
                Why Study a Master's Abroad?
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                An international Master's degree delivers accelerated career growth, cutting-edge research exposure, hands-on industrial collaboration, and access to dynamic global economies.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-iq-red shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-sm font-bold text-iq-navy">High Return on Investment (ROI)</h5>
                    <p className="text-xs text-slate-500">Postgraduate degrees in STEM and business fields command top starting salaries globally.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-iq-red shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-sm font-bold text-iq-navy">Post-Study Work Permits</h5>
                    <p className="text-xs text-slate-500">Access 2 to 3 years of post-study work authorization (OPT in USA, Graduate Route in UK, PGWP in Canada).</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-iq-red shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-sm font-bold text-iq-navy">Global Network & Industry Connect</h5>
                    <p className="text-xs text-slate-500">Build peer networks with international scholars, corporate leaders, and faculty mentors.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={onOpenConsultation}
                  className="px-6 py-3 bg-iq-red hover:bg-iq-red-hover text-white text-xs sm:text-sm font-bold rounded-xl shadow-md transition-all"
                >
                  Explore Master’s Opportunities
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-slate-100">
                <img
                  src="/images/program-masters.png"
                  alt="Historic international university campus for Master's degrees"
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>

          {/* Master's Roadmap Sections */}
          <div className="mt-12">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h3 className="text-2xl font-extrabold text-iq-navy">
                Our 6-Stage Master's Mentorship Roadmap
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Personalized guidance from initial transcript audit to graduation day.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sections.map((sec, idx) => {
                const Icon = sec.icon;
                return (
                  <div
                    key={sec.title}
                    className="p-6 rounded-2xl bg-[#F8FAFD] border border-slate-200/80 hover:border-iq-navy hover:shadow-md transition-all group"
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
