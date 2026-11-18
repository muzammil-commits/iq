import React from 'react';
import { Link } from 'react-router-dom';
import {
  Clock,
  UserCheck,
  CheckCircle2,
  ArrowRight,
  BookOpen,
  Sparkles,
  Award,
  Headphones,
  Laptop
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
        subtitle="Certified test preparation and communication coaching for IELTS, PTE, TOEFL, GRE, Digital SAT, German language, and intensive consular visa interview readiness."
        breadcrumbs={[{ label: 'Training' }]}
        onOpenConsultation={onOpenConsultation}
      />

      <section className="py-14 sm:py-20 bg-[#F8FAFD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Main Training Hero with Grand Picture (image copy 16.png) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-iq-red uppercase tracking-wider">
                <span className="w-6 h-0.5 bg-iq-red" />
                <span>Test Prep & Language Academy</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-iq-navy tracking-tight leading-tight">
                Achieve Your Dream Score on the First Attempt
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Standardized test scores are crucial for securing university offer letters and high-value merit scholarships. Our dedicated training division in Guntur offers structured, computer-delivered practice tests, certified instructors, and 1-on-1 interview simulations.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs">
                  <div className="text-xl font-extrabold text-iq-navy">IELTS 7.5+ / PTE 79+</div>
                  <div className="text-xs text-slate-500 mt-0.5">Consistent student target achievement</div>
                </div>
                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs">
                  <div className="text-xl font-extrabold text-iq-navy">AI Lab Software</div>
                  <div className="text-xs text-slate-500 mt-0.5">Real-time pronunciation & timing drills</div>
                </div>
              </div>

              <div className="pt-3">
                <button
                  onClick={onOpenConsultation}
                  className="px-7 py-3.5 bg-iq-red hover:bg-iq-red-hover text-white text-xs sm:text-sm font-bold rounded-2xl shadow-lg transition-all"
                >
                  Book Free Diagnostic Test
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 group">
                <img
                  src="/images/program-training-grand.png"
                  alt="Students and trainer in modern training room"
                  className="w-full h-[380px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </div>
          </div>

          {/* Test Prep Modules Grid */}
          <div className="space-y-6">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-bold text-iq-red uppercase tracking-wider">Course Catalog</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-iq-navy mt-1">
                Structured Test Prep Programs
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Classroom and hybrid training with certified master trainers in Guntur.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {TRAINING_PROGRAMS.map((prog) => (
                <div
                  key={prog.id}
                  className="bg-white rounded-3xl p-6 border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-bold px-3 py-1 bg-iq-navy/5 text-iq-navy rounded-full">
                        {prog.category}
                      </span>
                      <span className="text-xs font-bold text-iq-red bg-red-50 px-2.5 py-1 rounded-lg">
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
                        <span className="font-medium">{prog.duration}</span>
                      </div>

                      <div className="flex items-center justify-between text-slate-600">
                        <span className="font-semibold flex items-center gap-1.5">
                          <UserCheck className="w-3.5 h-3.5 text-iq-navy" />
                          Eligibility:
                        </span>
                        <span className="font-medium text-right truncate max-w-[160px]">{prog.eligibility}</span>
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5">
                      <div className="text-[11px] font-bold text-iq-navy uppercase tracking-wider">Curriculum Highlights</div>
                      {prog.highlights.map((h, i) => (
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
                      className="w-full py-3 bg-iq-red hover:bg-iq-red-hover text-white text-xs font-bold rounded-2xl shadow transition-colors flex items-center justify-center gap-2"
                    >
                      <span>Enroll in Training</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
