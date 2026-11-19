import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Eye,
  Target,
  CheckCircle2,
  Globe,
  Award,
  ShieldCheck,
  GraduationCap,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Headphones
} from 'lucide-react';

interface VisionMissionModalProps {
  type: 'vision' | 'mission' | null;
  isOpen: boolean;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const VisionMissionModal: React.FC<VisionMissionModalProps> = ({
  type,
  isOpen,
  onClose,
  onOpenConsultation,
}) => {
  // ESC key handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !type) return null;

  const isVision = type === 'vision';

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm cursor-pointer"
        />

        {/* Modal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden z-10 my-8"
        >
          {/* Header Banner */}
          <div
            className={`p-6 sm:p-7 text-white relative overflow-hidden ${
              isVision
                ? 'bg-gradient-to-r from-[#030E38] via-[#071B68] to-blue-900'
                : 'bg-gradient-to-r from-[#990000] via-[#E30613] to-rose-700'
            }`}
          >
            {/* Ambient Lighting */}
            <div className="absolute -right-10 -bottom-10 w-44 h-44 bg-white/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-start justify-between relative z-10">
              <div className="flex items-center gap-3.5">
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg border border-white/20 ${
                    isVision ? 'bg-white/15 text-sky-300' : 'bg-white/15 text-white'
                  }`}
                >
                  {isVision ? <Eye className="w-6 h-6" /> : <Target className="w-6 h-6" />}
                </div>
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/20 text-[11px] font-bold tracking-wide uppercase">
                    <Sparkles className="w-3 h-3 text-amber-300" />
                    <span>{isVision ? 'Strategic Horizon 2030' : 'Operational Pillars'}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black mt-1">
                    {isVision ? 'Our Vision' : 'Our Mission'}
                  </h3>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center transition-colors text-white cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quote Block */}
            <blockquote className="mt-4 text-xs sm:text-sm text-blue-100/90 italic font-medium leading-relaxed bg-white/10 p-3.5 rounded-2xl border border-white/15">
              "{isVision
                ? 'To become a trusted global education and immigration consultancy that connects students and professionals with international opportunities, helping them build successful careers beyond borders.'
                : 'To provide reliable, transparent, and personalized overseas education and visa consultancy services. We aim to simplify international admission, visa processing, documentation, and travel procedures through expert guidance and dedicated support.'}"
            </blockquote>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-7 max-h-[60vh] overflow-y-auto space-y-6">
            <div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                {isVision ? 'Our 4 Core Strategic Goals' : '5 Commitments to Every Student'}
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {isVision ? (
                  <>
                    <div className="p-3.5 rounded-2xl bg-blue-50/60 border border-blue-100 hover:border-iq-navy transition-colors">
                      <div className="w-8 h-8 rounded-xl bg-iq-navy text-white flex items-center justify-center mb-2 shadow-2xs">
                        <Globe className="w-4 h-4 text-sky-300" />
                      </div>
                      <div className="text-xs font-bold text-iq-navy">500+ Partner Universities</div>
                      <p className="text-[11px] text-slate-600 mt-0.5 leading-snug">
                        Direct tie-ups with leading institutions across USA, UK, Canada, Australia, Ireland & Europe.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-blue-50/60 border border-blue-100 hover:border-iq-navy transition-colors">
                      <div className="w-8 h-8 rounded-xl bg-iq-navy text-white flex items-center justify-center mb-2 shadow-2xs">
                        <TrendingUp className="w-4 h-4 text-emerald-400" />
                      </div>
                      <div className="text-xs font-bold text-iq-navy">High ROI & Career Outcomes</div>
                      <p className="text-[11px] text-slate-600 mt-0.5 leading-snug">
                        Focus on STEM programs, work-integrated learning, and post-study work visa rights.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-blue-50/60 border border-blue-100 hover:border-iq-navy transition-colors">
                      <div className="w-8 h-8 rounded-xl bg-iq-navy text-white flex items-center justify-center mb-2 shadow-2xs">
                        <ShieldCheck className="w-4 h-4 text-amber-300" />
                      </div>
                      <div className="text-xs font-bold text-iq-navy">99.2% Visa Success Rate</div>
                      <p className="text-[11px] text-slate-600 mt-0.5 leading-snug">
                        High-accuracy documentation, SOP review committee, and 1-on-1 mock interviews.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-blue-50/60 border border-blue-100 hover:border-iq-navy transition-colors">
                      <div className="w-8 h-8 rounded-xl bg-iq-navy text-white flex items-center justify-center mb-2 shadow-2xs">
                        <Award className="w-4 h-4 text-sky-300" />
                      </div>
                      <div className="text-xs font-bold text-iq-navy">Ethical Guntur Heritage</div>
                      <p className="text-[11px] text-slate-600 mt-0.5 leading-snug">
                        Rooted in Lakshmipuram, Guntur with zero hidden costs and genuine student-first care.
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="p-3.5 rounded-2xl bg-red-50/60 border border-red-100 hover:border-iq-red transition-colors">
                      <div className="w-8 h-8 rounded-xl bg-iq-red text-white flex items-center justify-center mb-2 shadow-2xs">
                        <GraduationCap className="w-4 h-4" />
                      </div>
                      <div className="text-xs font-bold text-iq-navy">1-on-1 Profile Mapping</div>
                      <p className="text-[11px] text-slate-600 mt-0.5 leading-snug">
                        Individualized analysis of GPA, test scores, and budget to find dream & realistic matches.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-red-50/60 border border-red-100 hover:border-iq-red transition-colors">
                      <div className="w-8 h-8 rounded-xl bg-iq-red text-white flex items-center justify-center mb-2 shadow-2xs">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <div className="text-xs font-bold text-iq-navy">Zero Hidden Fees</div>
                      <p className="text-[11px] text-slate-600 mt-0.5 leading-snug">
                        100% upfront transparency on tuition, university application fees, and living deposits.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-red-50/60 border border-red-100 hover:border-iq-red transition-colors">
                      <div className="w-8 h-8 rounded-xl bg-iq-red text-white flex items-center justify-center mb-2 shadow-2xs">
                        <Award className="w-4 h-4" />
                      </div>
                      <div className="text-xs font-bold text-iq-navy">Scholarship Assistance</div>
                      <p className="text-[11px] text-slate-600 mt-0.5 leading-snug">
                        Over ₹12+ Crores in financial aid and tuition waivers secured for our students.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-red-50/60 border border-red-100 hover:border-iq-red transition-colors">
                      <div className="w-8 h-8 rounded-xl bg-iq-red text-white flex items-center justify-center mb-2 shadow-2xs">
                        <Headphones className="w-4 h-4" />
                      </div>
                      <div className="text-xs font-bold text-iq-navy">Pre & Post Departure Care</div>
                      <p className="text-[11px] text-slate-600 mt-0.5 leading-snug">
                        Forex, accommodation, flight booking, and airport arrival assistance in host nations.
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Trust Quote Strip */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-iq-red animate-pulse" />
                <span className="text-xs font-bold text-iq-navy">
                  {isVision
                    ? 'Empowering Andhra Pradesh students since inception'
                    : '100% verified documentation & visa compliance'}
                </span>
              </div>
              <span className="text-[11px] font-mono font-bold text-slate-500">
                IQ Overseas Guntur
              </span>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="p-5 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-200 text-xs font-bold transition-colors cursor-pointer"
            >
              Close
            </button>

            <button
              onClick={() => {
                onClose();
                onOpenConsultation();
              }}
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-iq-red hover:bg-iq-red-hover text-white text-xs font-extrabold shadow-md hover:shadow-lg transition-all inline-flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{isVision ? 'Book Free Vision Consultation' : 'Get Free Profile Assessment'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
