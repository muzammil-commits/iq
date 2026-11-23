import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Eye,
  Target,
  Shield,
  Users,
  Star,
  Handshake,
  UserCheck,
  Trophy,
  Globe,
  Sparkles,
  CheckCircle2,
  Award,
  Plane
} from 'lucide-react';
import { COMPANY_STATEMENTS } from '../data/siteContent';
import { VisionMissionModal } from './VisionMissionModal';

interface AboutSectionProps {
  onOpenConsultation?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenConsultation }) => {
  const [modalType, setModalType] = useState<'vision' | 'mission' | null>(null);

  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Grand Section Header */}
        <div className="text-center sm:text-left mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold text-iq-red uppercase tracking-wider mb-2">
            <span className="w-8 h-1 bg-iq-red rounded-full" />
            <span>About IQ Overseas Edu Consultants</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-iq-navy tracking-tight max-w-3xl leading-tight">
            Your Journey Beyond Borders <span className="text-iq-red">Starts Here</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base md:text-lg text-slate-600 max-w-3xl leading-relaxed">
            IQ Overseas Edu Consultants is dedicated to connecting ambitious students and professionals with life-changing international academic and career opportunities through transparent, personalized guidance.
          </p>
        </div>

        {/* Grand Editorial Layout: image copy 10.png + Vision/Mission + 7 Core Values */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Ultra HD Image (image copy 10.png) & Vision/Mission (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Main Student Photo (image copy 25.png) with Grand Look */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 group transition-all duration-500 hover:shadow-[0_25px_60px_rgba(7,27,104,0.22)]">
              <img
                src="/images/about-students-headquarters-grand.png"
                alt="IQ Overseas Happy Students at International University Campus - Headquartered in Lakshmipuram, Guntur"
                className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-700 ease-out"
              />
              
              {/* Sleek Top Badge */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-lg border border-slate-200/80 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-iq-red animate-pulse" />
                <span className="text-xs font-black text-iq-navy tracking-wide">Trusted Global Guidance</span>
                <span className="text-slate-300">|</span>
                <span className="text-xs font-semibold text-slate-600">Guntur HQ</span>
              </div>

              {/* Top Right "Know More" CTA Button */}
              <Link
                to="/about"
                className="absolute top-4 right-4 px-4 py-2 bg-iq-navy/95 hover:bg-iq-red text-white text-xs font-bold rounded-full shadow-lg backdrop-blur-md transition-all duration-300 inline-flex items-center gap-1.5 hover:scale-105"
              >
                <span>Know More</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Vision & Mission Popup Modal */}
            <VisionMissionModal
              type={modalType}
              isOpen={modalType !== null}
              onClose={() => setModalType(null)}
              onOpenConsultation={onOpenConsultation || (() => {})}
            />

            {/* Vision & Mission Grand Blocks with Scroll Animation & Interactive Popups */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Vision Block */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                onClick={() => setModalType('vision')}
                className="p-6 rounded-2xl bg-gradient-to-br from-blue-50/80 via-white to-blue-50/40 border border-blue-100 shadow-sm hover:shadow-xl hover:border-iq-navy relative overflow-hidden group transition-all cursor-pointer"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-11 h-11 rounded-xl bg-iq-navy text-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-xs">
                    <Eye className="w-5 h-5 text-sky-300" />
                  </div>
                  <span className="text-[10px] font-bold text-iq-navy bg-blue-100/60 px-2 py-0.5 rounded-full flex items-center gap-1 group-hover:bg-iq-navy group-hover:text-white transition-colors">
                    <span>View Roadmap</span>
                    <ArrowRight className="w-2.5 h-2.5" />
                  </span>
                </div>
                <h3 className="text-base font-extrabold text-iq-navy mb-1.5 group-hover:text-blue-900 transition-colors">
                  {COMPANY_STATEMENTS.vision.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed italic line-clamp-3">
                  "{COMPANY_STATEMENTS.vision.quote}"
                </p>
                <div className="mt-4 pt-3 border-t border-blue-100 text-xs font-bold text-iq-navy flex items-center justify-between gap-1.5">
                  <div className="flex items-center gap-1.5 min-w-0 truncate">
                    <CheckCircle2 className="w-4 h-4 text-iq-red shrink-0" />
                    <span className="truncate">{COMPANY_STATEMENTS.vision.summary}</span>
                  </div>
                  <span className="text-[11px] font-extrabold text-iq-navy shrink-0 underline">
                    Read More
                  </span>
                </div>
              </motion.div>

              {/* Mission Block */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                onClick={() => setModalType('mission')}
                className="p-6 rounded-2xl bg-gradient-to-br from-red-50/70 via-white to-red-50/40 border border-red-100 shadow-sm hover:shadow-xl hover:border-iq-red relative overflow-hidden group transition-all cursor-pointer"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-11 h-11 rounded-xl bg-iq-red text-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-xs">
                    <Target className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold text-iq-red bg-red-100/60 px-2 py-0.5 rounded-full flex items-center gap-1 group-hover:bg-iq-red group-hover:text-white transition-colors">
                    <span>View Pillars</span>
                    <ArrowRight className="w-2.5 h-2.5" />
                  </span>
                </div>
                <h3 className="text-base font-extrabold text-iq-navy mb-1.5 group-hover:text-iq-red transition-colors">
                  {COMPANY_STATEMENTS.mission.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed italic line-clamp-3">
                  "{COMPANY_STATEMENTS.mission.quote}"
                </p>
                <div className="mt-4 pt-3 border-t border-red-100 text-xs font-bold text-iq-red flex items-center justify-between gap-1.5">
                  <div className="flex items-center gap-1.5 min-w-0 truncate">
                    <CheckCircle2 className="w-4 h-4 text-iq-navy shrink-0" />
                    <span className="truncate">{COMPANY_STATEMENTS.mission.summary}</span>
                  </div>
                  <span className="text-[11px] font-extrabold text-iq-red shrink-0 underline">
                    Read More
                  </span>
                </div>
              </motion.div>

            </div>

          </div>

          {/* Right Column: Why Choose Us Grand Layout matching image copy 40 (5 Cols) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#F8FAFD] to-slate-50 rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-md flex flex-col justify-between">
            <div>
              <div className="mb-4">
                <span className="text-[11px] font-black text-iq-red uppercase tracking-wider inline-flex items-center gap-1.5">
                  <Plane className="w-3.5 h-3.5" />
                  <span>Why Choose Us</span>
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-iq-navy mt-1">
                  Your Journey Abroad Begins With The Right Guidance
                </h3>
                <p className="text-xs text-slate-500 mt-1 font-medium">
                  Proven student outcomes backed by transparent international advisory
                </p>
              </div>

              <div className="space-y-2.5">
                {[
                  {
                    num: '01',
                    title: 'Visa guidance',
                    desc: 'End-to-end embassy filing, financial audits & 1-on-1 consular mock interviews.',
                    icon: <Shield className="w-4 h-4 text-iq-red" />
                  },
                  {
                    num: '02',
                    title: 'Forex assistance',
                    desc: 'Multi-currency student Forex cards with zero hidden markup & quick wire transfers.',
                    icon: <Sparkles className="w-4 h-4 text-blue-600" />
                  },
                  {
                    num: '03',
                    title: 'Flight ticket',
                    desc: 'Discounted student airfares with exclusive 40-45 kg luggage allowances.',
                    icon: <Plane className="w-4 h-4 text-emerald-600" />
                  },
                  {
                    num: '04',
                    title: 'Application processing',
                    desc: 'Zero-error institutional dossiers, SOP editing, and direct admission liaison.',
                    icon: <CheckCircle2 className="w-4 h-4 text-iq-navy" />
                  },
                  {
                    num: '05',
                    title: 'Educational loan support',
                    desc: 'Fast-track collateral & non-collateral overseas loans through partner banks.',
                    icon: <Award className="w-4 h-4 text-amber-600" />
                  },
                  {
                    num: '06',
                    title: 'Accommodation & pre-departure',
                    desc: 'Verified student housing near campus & comprehensive transit briefings.',
                    icon: <Users className="w-4 h-4 text-indigo-600" />
                  }
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-2xl bg-white border border-slate-200/70 shadow-2xs hover:shadow-sm hover:border-iq-navy transition-all duration-200 flex items-start gap-3"
                  >
                    <div className="w-8 h-8 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0 mt-0.5">
                      {item.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-xs sm:text-sm font-black text-iq-navy">
                          {item.title}
                        </span>
                        <span className="text-[10px] font-mono font-bold text-slate-400">
                          {item.num}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-600 leading-snug mt-0.5 font-medium">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between">
              <span className="text-xs text-slate-500 font-semibold">Lakshmipuram, Guntur</span>
              <Link
                to="/about"
                className="text-xs font-black text-iq-red hover:underline inline-flex items-center gap-1"
              >
                <span>Read Full Story</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
