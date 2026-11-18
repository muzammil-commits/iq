import React from 'react';
import { Link } from 'react-router-dom';
import {
  Clock,
  UserCheck,
  CheckCircle2,
  ArrowRight,
  BookOpen,
  Sparkles,
  Award
} from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { TRAINING_PROGRAMS } from '../data/siteContent';

interface TrainingPageProps {
  onOpenConsultation: () => void;
}

export const TrainingPage: React.FC<TrainingPageProps> = ({ onOpenConsultation }) => {
  return (
    <div className="w-full">
      <PageHero
        title="Enhance Your Skills for"
        highlightedWord="Global Opportunities"
        subtitle="Certified test preparation and communication coaching for IELTS, PTE, TOEFL, GRE, and intensive consular visa interview readiness."
        breadcrumbs={[{ label: 'Training' }]}
        onOpenConsultation={onOpenConsultation}
      />

      <section className="py-12 sm:py-16 bg-[#F8FAFD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-iq-red uppercase tracking-wider">
              Test Prep & Readiness
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-iq-navy mt-1">
              Structured Exam Preparation
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Expert classroom & interactive lab batches in Guntur designed to achieve your target admission score.
            </p>
          </div>

          {/* Training Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {TRAINING_PROGRAMS.map((prog) => (
              <div
                key={prog.id}
                className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-bold px-2.5 py-1 bg-iq-navy/5 text-iq-navy rounded-full">
                      {prog.category}
                    </span>
                    <span className="text-xs font-bold text-iq-red bg-red-50 px-2 py-0.5 rounded">
                      {prog.scoreTarget}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-iq-navy group-hover:text-iq-red transition-colors">
                    {prog.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mt-2">
                    {prog.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-100 space-y-2 text-xs">
                    <div className="flex items-center justify-between text-slate-600">
                      <span className="font-semibold flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-iq-red" />
                        Duration:
                      </span>
                      <span>{prog.duration}</span>
                    </div>

                    <div className="flex items-center justify-between text-slate-600">
                      <span className="font-semibold flex items-center gap-1.5">
                        <UserCheck className="w-3.5 h-3.5 text-iq-navy" />
                        Eligibility:
                      </span>
                      <span className="text-right truncate max-w-[160px]">{prog.eligibility}</span>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5">
                    <div className="text-[11px] font-bold text-iq-navy uppercase tracking-wider">Course Highlights</div>
                    {prog.highlights.slice(0, 3).map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-[11px] text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <button
                    onClick={onOpenConsultation}
                    className="w-full py-2.5 bg-iq-red hover:bg-iq-red-hover text-white text-xs font-bold rounded-xl shadow transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Enrol in Training</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};
