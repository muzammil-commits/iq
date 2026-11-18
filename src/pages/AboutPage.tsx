import React from 'react';
import { Link } from 'react-router-dom';
import {
  Shield,
  Users,
  Star,
  Handshake,
  UserCheck,
  Trophy,
  Globe,
  CheckCircle2,
  ArrowRight,
  Eye,
  Target,
  MapPin,
  Building2,
  GraduationCap
} from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { BRAND_INFO, COMPANY_STATEMENTS, CORE_VALUES } from '../data/siteContent';

interface AboutPageProps {
  onOpenConsultation: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenConsultation }) => {
  return (
    <div className="w-full">
      <PageHero
        title="About IQ Overseas"
        highlightedWord="Edu Consultants"
        subtitle="Your Trusted Partner for Global Education, Careers & Visa Solutions. Based in Guntur, Andhra Pradesh, guiding students toward world-class international horizons."
        breadcrumbs={[{ label: 'About Company' }]}
        onOpenConsultation={onOpenConsultation}
      />

      {/* Main Narrative Section */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-iq-red uppercase tracking-wider">
                <span className="w-6 h-0.5 bg-iq-red" />
                <span>Our Heritage</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-iq-navy tracking-tight leading-tight">
                Your Journey Beyond Borders <span className="text-iq-red">Starts Here</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                At IQ Overseas Edu Consultants, we understand that studying abroad is more than just choosing a college; it is a life-defining career investment. We bridge the gap between ambitious students from Andhra Pradesh and leading global universities across the USA, UK, Canada, Australia, Ireland, and Europe.
              </p>

              <p className="text-sm text-slate-600 leading-relaxed">
                Through ethical counseling, transparent documentation, and individualized attention, we demystify international admissions and visa protocols, making global education accessible and realistic for every committed aspirant.
              </p>

              <div className="pt-2 grid grid-cols-2 gap-4">
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                  <div className="text-lg font-extrabold text-iq-navy">100% Genuine</div>
                  <div className="text-xs text-slate-500">Transparent & ethical advice</div>
                </div>
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                  <div className="text-lg font-extrabold text-iq-navy">End-to-End</div>
                  <div className="text-xs text-slate-500">Profile to arrival support</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="/images/about-students.png"
                  alt="Students at International University"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-iq-navy/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-white/50 shadow">
                  <div className="text-xs font-bold text-iq-navy">{BRAND_INFO.address}</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Headquartered in Lakshmipuram, Guntur</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Vision & Mission Deep Dive */}
      <section className="py-14 sm:py-16 bg-[#F8FAFD] border-y border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-iq-navy">
              Our Vision & Mission
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              The fundamental driving purpose behind every student we counsel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-white rounded-2xl p-7 shadow-md border border-blue-100 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-iq-navy text-white flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-blue-200" />
                </div>
                <h4 className="text-xl font-bold text-iq-navy mb-3">
                  {COMPANY_STATEMENTS.vision.title}
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed italic">
                  "{COMPANY_STATEMENTS.vision.quote}"
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-semibold text-iq-navy flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-iq-red" />
                <span>{COMPANY_STATEMENTS.vision.summary}</span>
              </div>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-2xl p-7 shadow-md border border-red-100 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-iq-red text-white flex items-center justify-center mb-4">
                  <Target className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-iq-navy mb-3">
                  {COMPANY_STATEMENTS.mission.title}
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed italic">
                  "{COMPANY_STATEMENTS.mission.quote}"
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-semibold text-iq-red flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-iq-navy" />
                <span>{COMPANY_STATEMENTS.mission.summary}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7 Core Values Expanded */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-iq-red uppercase tracking-wider">
              Guiding Principles
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-iq-navy mt-1">
              Our 7 Core Values
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Every decision at IQ Overseas is anchored in these non-negotiable principles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CORE_VALUES.map((val) => (
              <div
                key={val.id}
                className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200/80 hover:border-iq-navy hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-iq-navy group-hover:bg-iq-red text-white flex items-center justify-center transition-colors">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400">
                    0{val.id}
                  </span>
                </div>
                <h4 className="text-base font-bold text-iq-navy group-hover:text-iq-red transition-colors">
                  {val.title}
                </h4>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Box */}
          <div className="mt-14 bg-gradient-to-r from-iq-navy to-[#051554] rounded-2xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div>
              <h4 className="text-xl font-bold">Have questions regarding your eligibility?</h4>
              <p className="text-xs text-blue-200 mt-1">Speak directly with our senior counselors at our Guntur branch.</p>
            </div>
            <button
              onClick={onOpenConsultation}
              className="px-6 py-3 bg-iq-red hover:bg-iq-red-hover text-white text-xs sm:text-sm font-bold rounded-xl shadow transition-all whitespace-nowrap"
            >
              Book Free Counselling Session
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
