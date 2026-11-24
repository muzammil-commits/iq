import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  GraduationCap,
  Camera,
  Briefcase,
  FileCheck,
  Users,
  Compass,
  Sparkles
} from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { SERVICES_DATA } from '../data/siteContent';

interface VisaPageProps {
  onOpenConsultation: () => void;
}

export const VisaPage: React.FC<VisaPageProps> = ({ onOpenConsultation }) => {
  // 3 Exact Visa Categories: 1. Study Visa, 2. Visiting Visa, 3. PR & Work Permit
  const visaServices = SERVICES_DATA.filter((s) => s.category === 'Visa Consultancy Services');

  const getVisaIcon = (slug: string) => {
    switch (slug) {
      case 'study-visa':
        return <GraduationCap className="w-6 h-6 text-iq-red" />;
      case 'visiting-visa':
        return <Camera className="w-6 h-6 text-blue-600" />;
      case 'pr-work-permit':
        return <Briefcase className="w-6 h-6 text-emerald-600" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-iq-navy" />;
    }
  };

  return (
    <div className="w-full bg-white">
      <PageHero
        title="Comprehensive Visa Advisory for Your"
        highlightedWord="International Future"
        subtitle="End-to-end guidance for Study Visas, Visiting Visas, and Permanent Residency (PR) & Work Permits. Precise documentation, financial audits, and 1-on-1 consular interview coaching."
        badge="Visa Advisory Division • IQ Overseas"
        image="/images/service-visa.png"
        imageAlt="IQ Overseas Visa Consultancy Advisory"
        breadcrumbs={[{ label: 'Visa Consultancy' }]}
        onOpenConsultation={onOpenConsultation}
      />

      <section className="py-14 sm:py-20 bg-[#F8FAFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Introduction */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold text-iq-red uppercase tracking-wider mb-2">
              <span className="w-6 h-0.5 bg-iq-red" />
              <span>Dedicated Visa Divisions</span>
              <span className="w-6 h-0.5 bg-iq-red" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-iq-navy tracking-tight">
              Our 3 Specialized Visa Categories
            </h2>
            <p className="text-xs sm:text-base text-slate-600 mt-2 font-medium">
              Every visa pathway demands distinct legal criteria, verified financial proof, and genuine intent articulation.
            </p>
          </div>

          {/* 3 Visa Stream Cards (Study Visa, Visiting Visa, PR & Work Permit) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 items-stretch">
            {visaServices.map((visa, idx) => (
              <motion.div
                key={visa.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-2 relative overflow-hidden"
              >
                {/* Top Accent Line */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 ${
                  idx === 0 ? 'bg-iq-red' : idx === 1 ? 'bg-blue-600' : 'bg-emerald-600'
                }`} />

                <div>
                  {/* Pictorial Representation Image Banner */}
                  {visa.image && (
                    <div className="relative w-full h-48 sm:h-52 rounded-2xl overflow-hidden mb-5 border border-slate-200/90 shadow-xs group/img">
                      <img
                        src={visa.image}
                        alt={visa.title}
                        className="w-full h-full object-cover object-center group-hover/img:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-iq-navy/75 via-transparent to-black/20" />
                      <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-mono font-bold text-white">
                        Category 0{idx + 1}
                      </div>
                      <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-white text-[11px] font-bold">
                        <span className="flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-iq-red" />
                          <span>IQ Overseas Division</span>
                        </span>
                        <span className="text-[10px] font-mono bg-white/20 px-2 py-0.5 rounded-full">
                          100% Verified
                        </span>
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xs">
                      {getVisaIcon(visa.slug)}
                    </div>

                    <span className="bg-iq-navy text-white text-[11px] font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-2xs">
                      {visa.badge || `Option 0${idx + 1}`}
                    </span>
                  </div>

                  <div className="text-xs font-mono font-bold text-iq-red mb-1">
                    Category 0{idx + 1}
                  </div>
                  <h3 className="text-2xl font-black text-iq-navy group-hover:text-iq-red transition-colors mb-2">
                    {visa.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                    {visa.shortDescription}
                  </p>

                  <div className="mt-6 pt-4 border-t border-slate-100 space-y-2.5">
                    <div className="text-xs font-black text-iq-navy uppercase tracking-wider">
                      Core Checklist Inclusions
                    </div>
                    {visa.keyHighlights.slice(0, 4).map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between gap-3">
                  <Link
                    to={`/services/${visa.slug}`}
                    className="text-xs font-black text-iq-navy group-hover:text-iq-red inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>Full Details & FAQs</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <button
                    onClick={onOpenConsultation}
                    className="px-4 py-2.5 bg-iq-red hover:bg-iq-navy text-white text-xs font-black rounded-xl shadow-sm transition-all duration-300 cursor-pointer"
                  >
                    Apply Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* 3-Pillar Methodology Strip */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-xl space-y-8">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-bold text-iq-red uppercase tracking-wider">
                Precision & Compliance
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-iq-navy mt-1">
                Our 3-Pillar Visa Filing Methodology
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-2 font-medium">
                Navigating complex consular expectations through disciplined, ethical preparation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="p-6 rounded-2xl bg-[#F8FAFD] border border-slate-200/80 space-y-3">
                <div className="w-11 h-11 rounded-xl bg-iq-navy text-white flex items-center justify-center font-black text-sm shadow-sm">
                  01
                </div>
                <h4 className="text-lg font-black text-iq-navy">Document Verification Audit</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  Country-specific financial audits, sponsor declarations, bank statements, income tax returns (ITR), and Genuine Student intent statements (GS/GTE).
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#F8FAFD] border border-slate-200/80 space-y-3">
                <div className="w-11 h-11 rounded-xl bg-iq-red text-white flex items-center justify-center font-black text-sm shadow-sm">
                  02
                </div>
                <h4 className="text-lg font-black text-iq-navy">Application Portal Lodgement</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  Flawless filling of DS-160 (USA), IMM 1294 (Canada), UK Visas & Immigration forms, and Australian ImmiAccount portals with zero discrepancies.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#F8FAFD] border border-slate-200/80 space-y-3">
                <div className="w-11 h-11 rounded-xl bg-iq-navy text-white flex items-center justify-center font-black text-sm shadow-sm">
                  03
                </div>
                <h4 className="text-lg font-black text-iq-navy">Consular Mock Interview Coaching</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  Intensive 1-on-1 consular interview practice for US F-1 visas and high-scrutiny applications, perfecting voice clarity, body language, and answers.
                </p>
              </div>
            </div>

            {/* Banner CTA */}
            <div className="pt-4 text-center">
              <button
                onClick={onOpenConsultation}
                className="px-8 py-4 bg-iq-red hover:bg-iq-navy text-white text-sm font-black rounded-2xl shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
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
