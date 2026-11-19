import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
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
  GraduationCap,
  Sparkles
} from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { BRAND_INFO, COMPANY_STATEMENTS, CORE_VALUES } from '../data/siteContent';
import { VisionMissionModal } from '../components/VisionMissionModal';

interface AboutPageProps {
  onOpenConsultation: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenConsultation }) => {
  const [modalType, setModalType] = useState<'vision' | 'mission' | null>(null);

  return (
    <div className="w-full">
      {/* Vision & Mission Popup Modal */}
      <VisionMissionModal
        type={modalType}
        isOpen={modalType !== null}
        onClose={() => setModalType(null)}
        onOpenConsultation={onOpenConsultation}
      />
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
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 group transition-all duration-500 hover:shadow-[0_25px_60px_rgba(7,27,104,0.22)]">
                <img
                  src="/images/about-students-headquarters-grand.png"
                  alt="Students at International University - Headquartered in Lakshmipuram, Guntur"
                  className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                />
                
                {/* Sleek Top Badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-lg border border-slate-200/80 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-iq-red animate-pulse" />
                  <span className="text-xs font-black text-iq-navy tracking-wide">Global Campus Pathways</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Vision & Mission Deep Dive with Scrolling Animations & Popups */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-[#F8FAFD] via-white to-[#F8FAFD] border-y border-slate-200/70 relative overflow-hidden">
        {/* Background ambient lighting */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-100/25 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-xs text-xs font-bold text-iq-navy mb-3">
              <Sparkles className="w-3.5 h-3.5 text-iq-red animate-pulse" />
              <span>Foundation of Excellence</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-black text-iq-navy tracking-tight">
              Our Vision & Mission
            </h3>
            <p className="text-sm sm:text-base text-slate-600 mt-2.5 font-medium leading-relaxed">
              The fundamental driving purpose behind every student we counsel. Click any card to explore full strategic roadmaps.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Vision Card with Scroll Slide & Interactive Popup */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              onClick={() => setModalType('vision')}
              className="bg-white rounded-3xl p-7 sm:p-9 shadow-xl hover:shadow-2xl border-2 border-blue-100/80 hover:border-iq-navy transition-all flex flex-col justify-between group cursor-pointer relative overflow-hidden"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 to-iq-navy" />

              <div>
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-iq-navy to-blue-900 text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <Eye className="w-7 h-7 text-sky-300" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-blue-50 text-iq-navy text-xs font-bold border border-blue-200/60 flex items-center gap-1 group-hover:bg-iq-navy group-hover:text-white transition-colors">
                    <span>Click for Roadmap</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>

                <h4 className="text-2xl font-black text-iq-navy mb-3 group-hover:text-blue-900 transition-colors">
                  {COMPANY_STATEMENTS.vision.title}
                </h4>

                <blockquote className="text-sm sm:text-base text-slate-700 leading-relaxed italic border-l-4 border-blue-200 pl-4 my-4 font-medium">
                  "{COMPANY_STATEMENTS.vision.quote}"
                </blockquote>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
                <div className="text-xs font-bold text-iq-navy flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-iq-red shrink-0" />
                  <span>{COMPANY_STATEMENTS.vision.summary}</span>
                </div>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setModalType('vision');
                  }}
                  className="px-4 py-2 bg-blue-50 hover:bg-iq-navy text-iq-navy hover:text-white rounded-xl text-xs font-extrabold transition-all shadow-2xs hover:shadow-sm inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Explore Vision Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>

            {/* Mission Card with Scroll Slide & Interactive Popup */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              onClick={() => setModalType('mission')}
              className="bg-white rounded-3xl p-7 sm:p-9 shadow-xl hover:shadow-2xl border-2 border-red-100/80 hover:border-iq-red transition-all flex flex-col justify-between group cursor-pointer relative overflow-hidden"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-iq-red to-rose-600" />

              <div>
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-iq-red to-rose-700 text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <Target className="w-7 h-7" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-red-50 text-iq-red text-xs font-bold border border-red-200/60 flex items-center gap-1 group-hover:bg-iq-red group-hover:text-white transition-colors">
                    <span>Click for Commitments</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>

                <h4 className="text-2xl font-black text-iq-navy mb-3 group-hover:text-iq-red transition-colors">
                  {COMPANY_STATEMENTS.mission.title}
                </h4>

                <blockquote className="text-sm sm:text-base text-slate-700 leading-relaxed italic border-l-4 border-red-200 pl-4 my-4 font-medium">
                  "{COMPANY_STATEMENTS.mission.quote}"
                </blockquote>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
                <div className="text-xs font-bold text-iq-red flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-iq-navy shrink-0" />
                  <span>{COMPANY_STATEMENTS.mission.summary}</span>
                </div>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setModalType('mission');
                  }}
                  className="px-4 py-2 bg-red-50 hover:bg-iq-red text-iq-red hover:text-white rounded-xl text-xs font-extrabold transition-all shadow-2xs hover:shadow-sm inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <span>View 5 Core Commitments</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
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
