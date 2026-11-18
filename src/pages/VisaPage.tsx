import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  FileText,
  UserCheck,
  Clock,
  Briefcase,
  BookOpen,
  Camera,
  UserPlus
} from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { SERVICES_DATA } from '../data/siteContent';

interface VisaPageProps {
  onOpenConsultation: () => void;
}

export const VisaPage: React.FC<VisaPageProps> = ({ onOpenConsultation }) => {
  const visaServices = SERVICES_DATA.filter(s => s.category === 'Visa Consultancy Services');

  const getVisaIcon = (slug: string) => {
    switch (slug) {
      case 'business-visa': return <Briefcase className="w-5 h-5 text-iq-navy" />;
      case 'student-visa': return <BookOpen className="w-5 h-5 text-iq-red" />;
      case 'tourist-visa': return <Camera className="w-5 h-5 text-emerald-600" />;
      case 'visitor-visa': return <UserPlus className="w-5 h-5 text-blue-600" />;
      default: return <ShieldCheck className="w-5 h-5 text-iq-navy" />;
    }
  };

  return (
    <div className="w-full">
      <PageHero
        title="Visa Guidance for Your"
        highlightedWord="Global Journey"
        subtitle="End-to-end visa consultation for Student, Business, Tourist, and Visitor visas. Rigorous documentation, mock consular interviews, and embassy protocol guidance."
        breadcrumbs={[{ label: 'Visa Consultancy' }]}
        onOpenConsultation={onOpenConsultation}
      />

      <section className="py-12 sm:py-16 bg-[#F8FAFD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Introduction */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-iq-red uppercase tracking-wider">
              Specialized Visa Categories
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-iq-navy mt-1">
              Select Your Visa Category
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Every visa stream requires distinct legal criteria, genuine intent evidence, and verified financial backing.
            </p>
          </div>

          {/* Visa Stream Cards (07–10) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
            {visaServices.map((visa) => (
              <div
                key={visa.id}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:scale-105 transition-transform">
                        {getVisaIcon(visa.slug)}
                      </div>
                      <div>
                        <div className="text-xs font-mono font-bold text-iq-red">Service {visa.number}</div>
                        <h3 className="text-xl font-bold text-iq-navy group-hover:text-iq-red transition-colors">
                          {visa.title}
                        </h3>
                      </div>
                    </div>

                    {visa.badge && (
                      <span className="bg-iq-navy text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase">
                        {visa.badge}
                      </span>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {visa.shortDescription}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-100 space-y-2">
                    <div className="text-xs font-bold text-iq-navy uppercase tracking-wider">Key Inclusions</div>
                    {visa.keyHighlights.slice(0, 3).map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    to={`/services/${visa.slug}`}
                    className="text-xs font-bold text-iq-navy group-hover:text-iq-red inline-flex items-center gap-1 transition-colors"
                  >
                    <span>Full Checklist & Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <button
                    onClick={onOpenConsultation}
                    className="px-4 py-2 bg-iq-red hover:bg-iq-red-hover text-white text-xs font-bold rounded-lg shadow transition-colors"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Visa Pillars: Document Guidance, Application Guidance, Interview Prep */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xl space-y-8">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-2xl font-extrabold text-iq-navy">
                Our 3-Pillar Visa Assurance Methodology
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Navigating embassy expectations through disciplined, ethical preparation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 rounded-2xl bg-[#F8FAFD] border border-slate-200/80 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-iq-navy text-white flex items-center justify-center font-bold">
                  01
                </div>
                <h4 className="text-base font-bold text-iq-navy">Document Guidance</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Country-specific financial audits, sponsor declarations, bank statements, income proof, and genuine student intent statements (GTE/GS).
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#F8FAFD] border border-slate-200/80 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-iq-red text-white flex items-center justify-center font-bold">
                  02
                </div>
                <h4 className="text-base font-bold text-iq-navy">Application Lodgement</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Flawless filling of DS-160 (USA), IMM 1294 (Canada), UK Visas & Immigration forms, and Australian ImmiAccount portals with zero discrepancies.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#F8FAFD] border border-slate-200/80 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-iq-navy text-white flex items-center justify-center font-bold">
                  03
                </div>
                <h4 className="text-base font-bold text-iq-navy">Mock Interview Coaching</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Intensive 1-on-1 consular interview practice for US F-1 visas and high-scrutiny applications, perfecting concise articulation of academic goals.
                </p>
              </div>
            </div>

            {/* Banner CTA */}
            <div className="pt-4 text-center">
              <button
                onClick={onOpenConsultation}
                className="px-8 py-3.5 bg-iq-red hover:bg-iq-red-hover text-white text-sm font-bold rounded-full shadow-lg transition-all"
              >
                Schedule Visa Advisory Session
              </button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
