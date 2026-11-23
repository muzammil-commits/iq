import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Award,
  BookOpen,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowRight,
  Headphones,
  Laptop,
  Check,
  ChevronDown,
  Layers,
  FileText,
  Target,
  ShieldCheck,
  Building,
  GraduationCap
} from 'lucide-react';
import { PageHero } from '../components/PageHero';
import {
  TRAINING_PROGRAMS_DATA,
  TrainingProgramDetail
} from '../data/trainingData';

interface TrainingPageProps {
  onOpenConsultation: () => void;
}

export const TrainingPage: React.FC<TrainingPageProps> = ({ onOpenConsultation }) => {
  const { program } = useParams<{ program?: string }>();
  const navigate = useNavigate();

  // Normalize program key
  const activeKey = (program && ['ielts', 'pte', 'gre', 'sat', 'digital-sat'].includes(program.toLowerCase()))
    ? (program.toLowerCase() === 'digital-sat' ? 'sat' : program.toLowerCase())
    : 'ielts';

  const [selectedKey, setSelectedKey] = useState<string>(activeKey);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  // Sync state if URL changes
  useEffect(() => {
    if (program) {
      const normalized = program.toLowerCase() === 'digital-sat' ? 'sat' : program.toLowerCase();
      if (['ielts', 'pte', 'gre', 'sat'].includes(normalized)) {
        setSelectedKey(normalized);
      }
    }
  }, [program]);

  const handleSelectProgram = (key: string) => {
    setSelectedKey(key);
    navigate(`/training/${key}`);
    setExpandedFaq(0);
  };

  const currentProgram: TrainingProgramDetail =
    TRAINING_PROGRAMS_DATA[selectedKey] || TRAINING_PROGRAMS_DATA['ielts'];

  return (
    <div className="w-full bg-white text-slate-800">
      
      {/* 1. TRAINING HERO SECTION */}
      <PageHero
        title="Expert Test Preparation & Training"
        highlightedWord="Achieve Your Target Score"
        subtitle="Certified trainers, modern computer labs, and AI-powered diagnostic scoring in Guntur. Master IELTS, PTE Academic, GRE General, and Digital SAT with high-score strategies."
        badge="Guntur's Highest Score Track Record"
        breadcrumbs={[{ label: 'Training & Test Prep' }]}
        onOpenConsultation={onOpenConsultation}
      />

      {/* 2. DEDICATED TRAINING PROGRAM SELECTION TABS */}
      <section className="bg-slate-50 border-y border-slate-200/80 sticky top-16 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between gap-2 overflow-x-auto no-scrollbar">
            {[
              { key: 'ielts', label: 'IELTS Academic & General', badge: 'Band 7.5+' },
              { key: 'pte', label: 'PTE Academic Masterclass', badge: '79+ Score' },
              { key: 'gre', label: 'GRE General Test', badge: '320+ Target' },
              { key: 'sat', label: 'Digital SAT Preparation', badge: '1450+ Target' }
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => handleSelectProgram(tab.key)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all cursor-pointer ${
                  selectedKey === tab.key
                    ? 'bg-iq-red text-white shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-md font-extrabold uppercase ${
                    selectedKey === tab.key ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  {tab.badge}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. DEDICATED PROGRAM OVERVIEW & METRICS BANNER */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-iq-red font-bold text-xs uppercase tracking-wider">
                <Target className="w-3.5 h-3.5" />
                <span>{currentProgram.badge}</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-iq-navy tracking-tight">
                {currentProgram.title}
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {currentProgram.introduction}
              </p>

              {/* Quick Key Exam Metrics Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3">
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <div className="text-[11px] font-bold text-slate-500 uppercase">Target Score</div>
                  <div className="text-base font-extrabold text-iq-red mt-0.5">{currentProgram.scoreTarget}</div>
                </div>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <div className="text-[11px] font-bold text-slate-500 uppercase">Official Scale</div>
                  <div className="text-base font-extrabold text-iq-navy mt-0.5">{currentProgram.officialScale}</div>
                </div>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <div className="text-[11px] font-bold text-slate-500 uppercase">Total Duration</div>
                  <div className="text-base font-extrabold text-slate-800 mt-0.5">{currentProgram.testDuration}</div>
                </div>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <div className="text-[11px] font-bold text-slate-500 uppercase">Test Mode</div>
                  <div className="text-base font-extrabold text-emerald-700 mt-0.5">{currentProgram.testMode}</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
              <h3 className="text-base font-bold text-iq-navy flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-iq-red" />
                <span>Global Acceptance</span>
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {currentProgram.globalAcceptance}
              </p>
              <div className="pt-2 border-t border-slate-200">
                <button
                  onClick={onOpenConsultation}
                  className="w-full py-3 bg-iq-navy hover:bg-iq-navy-dark text-white rounded-xl text-xs sm:text-sm font-bold shadow-md transition-colors cursor-pointer"
                >
                  Book Free 1-on-1 Diagnostic Test
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHY THIS TEST MATTERS */}
      <section className="py-12 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h3 className="text-xl sm:text-3xl font-black text-iq-navy tracking-tight">
              Why {currentProgram.shortName} Preparation is Critical
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm mt-2">
              A competitive score does not just fulfill visa requirements—it drives university admissions and financial scholarships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {currentProgram.whyImportant.map((reason, idx) => (
              <div key={idx} className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs space-y-2">
                <div className="w-8 h-8 rounded-lg bg-red-100 text-iq-red font-bold text-xs flex items-center justify-center">
                  0{idx + 1}
                </div>
                <p className="text-xs sm:text-sm text-slate-700 font-semibold leading-relaxed">
                  {reason}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. MODULE-BY-MODULE DEEP DIVE (ROW-WISE CARDS) */}
      <section id="training-modules" className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-iq-red font-bold text-xs uppercase tracking-wider mb-2">
              <Layers className="w-3.5 h-3.5" />
              <span>Section Breakdown</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-iq-navy tracking-tight">
              {currentProgram.shortName} Modules & Question Types
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Comprehensive module analysis with question categories, timing benchmarks, and scoring criteria.
            </p>
          </div>

          {/* Row-wise Module Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
            {currentProgram.modules.map((mod, mIdx) => (
              <div
                key={mIdx}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-lg transition-all p-6 sm:p-7 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-50 text-iq-navy border border-blue-100">
                      Module {mIdx + 1}
                    </span>
                    <span className="text-xs font-bold text-iq-red flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {mod.duration}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-iq-navy">{mod.name}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-medium">
                    {mod.format}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      Common Question Types:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {mod.questionTypes.map((qType, qIdx) => (
                        <span
                          key={qIdx}
                          className="bg-slate-100 text-slate-700 text-xs font-medium px-2.5 py-1 rounded-lg"
                        >
                          {qType}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2 pt-2">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      Proven Key Strategies:
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      {mod.keyStrategies.map((strat, sIdx) => (
                        <li key={sIdx} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{strat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 bg-slate-50 -mx-6 -mb-6 p-4 px-6 rounded-b-2xl">
                  <span className="text-[11px] text-slate-500 font-semibold block">Scoring Criteria:</span>
                  <span className="text-xs font-bold text-iq-navy">{mod.scoringCriteria}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. EXAMINATION PATTERN & TIMING TABLE */}
      <section className="py-14 sm:py-20 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-iq-navy font-bold text-xs uppercase tracking-wider mb-2">
              <FileText className="w-3.5 h-3.5 text-iq-red" />
              <span>Official Test Blueprint</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-iq-navy tracking-tight">
              {currentProgram.shortName} Official Exam Pattern
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Master the exact time constraints, section item counts, and score weights before taking the official exam.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-iq-navy text-white uppercase text-[11px] tracking-wider font-bold">
                  <tr>
                    <th className="py-4 px-6">Test Section</th>
                    <th className="py-4 px-6">Number of Questions / Tasks</th>
                    <th className="py-4 px-6">Time Limit</th>
                    <th className="py-4 px-6">Score Weight</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {currentProgram.examPattern.map((pat, idx) => (
                    <tr key={idx} className="hover:bg-slate-50 transition-colors">
                      <td className="py-4 px-6 font-bold text-iq-navy">{pat.section}</td>
                      <td className="py-4 px-6 text-slate-700 font-medium">{pat.items}</td>
                      <td className="py-4 px-6 font-semibold text-iq-red">{pat.timeLimit}</td>
                      <td className="py-4 px-6 text-emerald-700 font-bold">{pat.scoreWeight}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 7. PREPARATION TIPS & TECHNIQUES */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-iq-red font-bold text-xs uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Score Maximization</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-iq-navy tracking-tight">
              Expert Preparation Tips for {currentProgram.shortName}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Field-tested strategies refined across thousands of successful students from our Guntur training academy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentProgram.prepTips.map((tip, idx) => (
              <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-red-100 text-iq-red font-bold text-xs flex items-center justify-center">
                  #{idx + 1}
                </div>
                <h3 className="text-base font-bold text-iq-navy">{tip.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{tip.tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. IQ OVERSEAS TRAINING BENEFITS */}
      <section className="py-14 sm:py-20 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-iq-navy font-bold text-xs uppercase tracking-wider mb-2">
              <Award className="w-3.5 h-3.5 text-iq-red" />
              <span>The IQ Overseas Edge</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-iq-navy tracking-tight">
              Why Train with IQ Overseas in Guntur?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              State-of-the-art facilities, certified British Council & ETS master trainers, and unlimited mock simulations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentProgram.trainingBenefits.map((ben, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-iq-navy flex items-center justify-center font-bold">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                </div>
                <h3 className="text-base font-bold text-iq-navy">{ben.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{ben.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FREQUENTLY ASKED QUESTIONS ACCORDION */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-iq-red font-bold text-xs uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{currentProgram.shortName} FAQs</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-iq-navy tracking-tight">
              Frequently Asked Questions: {currentProgram.shortName}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Get clarity on test registrations, score validity, retake policies, and fee structures.
            </p>
          </div>

          <div className="space-y-3">
            {currentProgram.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-slate-200 rounded-2xl overflow-hidden transition-colors bg-white"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full text-left p-5 sm:p-6 bg-white hover:bg-slate-50 flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-iq-navy cursor-pointer transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-200 ${
                      expandedFaq === idx ? 'rotate-180 text-iq-red' : ''
                    }`}
                  />
                </button>
                {expandedFaq === idx && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed bg-white border-t border-slate-100">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FREE ENQUIRY & DIAGNOSTIC TEST CTA */}
      <section className="py-16 bg-gradient-to-r from-iq-navy via-iq-navy to-slate-900 text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
            Book Your Free <span className="text-iq-red">{currentProgram.shortName} Diagnostic Test</span> Today
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Take a complimentary section diagnostic test at our Guntur center. Receive an instant AI score report and a customized 30-day study roadmap.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-iq-red hover:bg-iq-red-hover text-white font-extrabold text-sm sm:text-base rounded-full shadow-[0_8px_25px_rgba(227,6,19,0.35)] transition-all cursor-pointer"
            >
              <span>Enquire Now / Enroll in Next Batch</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="tel:+918074941919"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-sm sm:text-base rounded-full transition-colors"
            >
              <Headphones className="w-4 h-4 text-iq-red" />
              <span>Direct Line: +91 80749 41919</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
