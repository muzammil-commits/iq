import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
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
  GraduationCap,
  ChevronRight,
  X,
  Info
} from 'lucide-react';
import { PageHero } from '../components/PageHero';
import {
  TRAINING_PROGRAMS_DATA,
  TrainingProgramDetail,
  TrainingModule
} from '../data/trainingData';

interface TrainingPageProps {
  onOpenConsultation: () => void;
}

export const TrainingPage: React.FC<TrainingPageProps> = ({ onOpenConsultation }) => {
  const { program } = useParams<{ program?: string }>();
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);
  const [selectedModuleModal, setSelectedModuleModal] = useState<TrainingModule | null>(null);

  // If no program parameter is present, we show the Grand Training Hub Overview
  const isOverview = !program;

  // Normalize program key
  const normalizeKey = (key?: string) => {
    if (!key) return 'ielts';
    const low = key.toLowerCase();
    if (low === 'digital-sat' || low === 'sat') return 'sat';
    if (low === 'toefl') return 'ielts';
    if (low === 'german') return 'pte';
    if (['ielts', 'pte', 'gre', 'sat'].includes(low)) return low;
    return 'ielts';
  };

  const selectedKey = normalizeKey(program);
  const currentProgram: TrainingProgramDetail =
    TRAINING_PROGRAMS_DATA[selectedKey] || TRAINING_PROGRAMS_DATA['ielts'];

  const allProgramsList = [
    {
      key: 'ielts',
      title: 'IELTS Academic & General',
      target: 'Band 7.5+',
      tagline: 'Accepted in 140+ countries for admissions & PR visas',
      description: 'Comprehensive 4-module training covering Listening, Reading, Writing, and 1-on-1 Speaking mock drills with certified British Council & IDP trainers.',
      image: '/images/program-training-grand.png',
      badge: 'Most Popular Exam',
      modules: ['Listening (40 mins)', 'Reading (60 mins)', 'Writing (60 mins)', 'Speaking (11-14 mins)']
    },
    {
      key: 'pte',
      title: 'PTE Academic Masterclass',
      target: 'Score 79+',
      tagline: 'Fast computer-based results with Pearson AI scoring',
      description: 'Automated Pearson AI mock testing lab in Guntur with proven templates for Describe Image, Retell Lecture, and Write from Dictation.',
      image: '/images/destinations-landmarks-grand.png',
      badge: 'Fast Results in 48 Hrs',
      modules: ['Speaking & Writing (54-67 mins)', 'Reading (29-30 mins)', 'Listening (30-43 mins)']
    },
    {
      key: 'gre',
      title: 'GRE General Test Prep',
      target: 'Score 320+',
      tagline: 'Shorter 1h 58m format for US STEM Master’s & PhDs',
      description: 'Master quantitative shortcuts, high-frequency vocabulary mnemonics, and analytical writing frameworks for top US and Canadian engineering schools.',
      image: '/images/hero-desktop.png',
      badge: 'STEM Master’s & PhD',
      modules: ['Analytical Writing (30 mins)', 'Verbal Reasoning (41 mins)', 'Quantitative Reasoning (47 mins)']
    },
    {
      key: 'sat',
      title: 'Digital SAT Preparation',
      target: 'Score 1450+',
      tagline: 'College Board adaptive format for US undergraduate scholarships',
      description: 'Master Reading & Writing passages and advanced Math with the built-in Desmos graphing calculator to secure prestigious undergraduate merit awards.',
      image: '/images/program-bachelors-grand.png',
      badge: 'Undergraduate Scholarships',
      modules: ['Reading and Writing (64 mins)', 'Math with Desmos (70 mins)']
    }
  ];

  // -------------------------------------------------------------
  // VIEW 1: TRAINING HUB OVERVIEW (When visited at /training)
  // -------------------------------------------------------------
  if (isOverview) {
    return (
      <div className="w-full bg-white text-slate-800 overflow-x-hidden">
        <PageHero
          title="Expert Test Preparation & Language Training"
          highlightedWord="Guntur's Highest Score Track Record"
          subtitle="Certified master trainers, computer simulation labs, and diagnostic scoring. Choose your test below to open its dedicated masterclass page."
          badge="British Council & ETS Certified Center"
          breadcrumbs={[{ label: 'Training Programs' }]}
          onOpenConsultation={onOpenConsultation}
        />

        {/* GRAND 4-CARD PREVIEW GRID */}
        <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-iq-red font-bold text-xs uppercase tracking-wider mb-2">
                <Target className="w-3.5 h-3.5" />
                <span>Dedicated Masterclasses</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-iq-navy tracking-tight">
                Choose Your Preparation Program
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2">
                Click any program below to open its full dedicated syllabus, examination blueprint, and practice strategies.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
              {allProgramsList.map((prog, idx) => (
                <motion.div
                  key={prog.key}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
                >
                  <div>
                    {/* Header Image */}
                    <div className="relative h-56 overflow-hidden bg-slate-100">
                      <img
                        src={prog.image}
                        alt={prog.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-iq-navy/90 via-iq-navy/20 to-transparent" />
                      
                      <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-iq-navy text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                        {prog.badge}
                      </span>

                      <span className="absolute top-4 right-4 bg-iq-red text-white text-xs font-black px-3 py-1 rounded-full shadow-md">
                        Target: {prog.target}
                      </span>

                      <div className="absolute bottom-4 left-5 right-5 text-white">
                        <h3 className="text-2xl font-black">{prog.title}</h3>
                        <p className="text-xs text-slate-200 mt-0.5">{prog.tagline}</p>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 sm:p-7 space-y-4">
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                        {prog.description}
                      </p>

                      <div className="space-y-2 pt-2 border-t border-slate-100">
                        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                          Included Modules:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {prog.modules.map((m, mIdx) => (
                            <span
                              key={mIdx}
                              className="text-xs bg-slate-100 text-slate-700 font-semibold px-2.5 py-1 rounded-lg"
                            >
                              {m}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 sm:p-7 pt-0">
                    <Link
                      to={`/training/${prog.key}`}
                      className="w-full py-3.5 px-6 bg-iq-navy hover:bg-iq-red text-white font-extrabold text-xs sm:text-sm rounded-xl transition-all flex items-center justify-center gap-2 shadow-md group-hover:shadow-lg cursor-pointer"
                    >
                      <span>Open Dedicated {prog.title.split(' ')[0]} Masterclass</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY TRAIN WITH IQ OVERSEAS */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-iq-red font-bold text-xs uppercase tracking-wider mb-2">
                <Award className="w-3.5 h-3.5" />
                <span>Guntur's Trusted Academy</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-iq-navy tracking-tight">
                Why Students Choose IQ Overseas Training
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2">
                State-of-the-art facilities, certified British Council & ETS master trainers, and unlimited mock simulations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Certified Master Trainers', desc: 'Faculty with 10+ years experience certified by British Council, IDP, and ETS.' },
                { title: 'Computer AI Simulation Lab', desc: 'Modern lab equipped with Pearson PTE and Cambridge IELTS mock test software.' },
                { title: 'Daily 1-on-1 Speaking Drills', desc: 'Personalized speaking sessions with real-time feedback on pronunciation and fluency.' },
                { title: 'Unlimited Full-Length Mocks', desc: 'Regular proctored simulated tests with detailed analytical diagnostic score cards.' }
              ].map((feat, idx) => (
                <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-iq-navy font-bold flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  </div>
                  <h3 className="text-base font-bold text-iq-navy">{feat.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FREE DIAGNOSTIC TEST CTA */}
        <section className="py-16 bg-gradient-to-r from-iq-navy via-iq-navy to-slate-900 text-white text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
              Book a Free <span className="text-iq-red">Diagnostic Test</span> in Guntur
            </h2>
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Find out your current benchmark score and receive a personalized 30-day study roadmap from our master trainers.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-iq-red hover:bg-iq-red-hover text-white font-extrabold text-sm sm:text-base rounded-full shadow-[0_8px_25px_rgba(227,6,19,0.35)] transition-all cursor-pointer"
              >
                <span>Book Free Diagnostic Test</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // -------------------------------------------------------------
  // VIEW 2: DEDICATED INDIVIDUAL PROGRAM PAGE (/training/:program)
  // -------------------------------------------------------------
  return (
    <div className="w-full bg-white text-slate-800 overflow-x-hidden">
      
      {/* 1. DEDICATED HERO BANNER */}
      <section className="relative bg-gradient-to-br from-slate-50 via-blue-50/40 to-white py-12 sm:py-16 lg:py-20 border-b border-slate-200/80 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-xs text-slate-500 mb-6" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-iq-navy transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link to="/training" className="hover:text-iq-navy transition-colors">Training Programs</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="font-bold text-iq-navy">{currentProgram.shortName}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-8 space-y-4"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 text-iq-red font-extrabold text-xs uppercase tracking-wider border border-red-100 shadow-2xs">
                <Target className="w-3.5 h-3.5" />
                <span>{currentProgram.badge}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-iq-navy tracking-tight leading-[1.2]">
                {currentProgram.title}
              </h1>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl font-medium">
                {currentProgram.introduction}
              </p>

              {/* Metrics Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3">
                <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs">
                  <div className="text-[11px] font-bold text-slate-400 uppercase">Target Score</div>
                  <div className="text-lg font-black text-iq-red mt-0.5">{currentProgram.scoreTarget}</div>
                </div>
                <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs">
                  <div className="text-[11px] font-bold text-slate-400 uppercase">Official Scale</div>
                  <div className="text-lg font-black text-iq-navy mt-0.5">{currentProgram.officialScale}</div>
                </div>
                <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs">
                  <div className="text-[11px] font-bold text-slate-400 uppercase">Total Duration</div>
                  <div className="text-lg font-black text-slate-800 mt-0.5">{currentProgram.testDuration}</div>
                </div>
                <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs">
                  <div className="text-[11px] font-bold text-slate-400 uppercase">Test Mode</div>
                  <div className="text-lg font-black text-emerald-700 mt-0.5">{currentProgram.testMode}</div>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={onOpenConsultation}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm sm:text-base rounded-xl shadow-[0_8px_25px_rgba(37,99,235,0.35)] transition-all transform hover:-translate-y-0.5 cursor-pointer"
                >
                  <span>Book Free 1-on-1 Diagnostic Test</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-4 bg-white p-6 rounded-3xl border border-slate-200 shadow-xl space-y-4"
            >
              <h3 className="text-base font-bold text-iq-navy flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-iq-red" />
                <span>Global Acceptance</span>
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                {currentProgram.globalAcceptance}
              </p>
              <div className="pt-3 border-t border-slate-100 space-y-2 text-xs text-slate-700 font-semibold">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Interactive Computer Simulation Lab</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>British Council & ETS Certified Trainers</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Unlimited Sectional & Full Mocks</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. WHY THIS TEST MATTERS */}
      <section className="py-12 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl font-black text-iq-navy tracking-tight">
              Why {currentProgram.shortName} Preparation is Critical
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm mt-2">
              A competitive score does not just fulfill visa requirements—it drives admissions and merit scholarships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {currentProgram.whyImportant.map((reason, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-2"
              >
                <div className="w-8 h-8 rounded-lg bg-red-100 text-iq-red font-black text-xs flex items-center justify-center">
                  0{idx + 1}
                </div>
                <p className="text-xs sm:text-sm text-slate-700 font-semibold leading-relaxed">
                  {reason}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. MODULE-BY-MODULE DEEP DIVE WITH INTERACTIVE POPUPS */}
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
              Click any module to inspect detailed question patterns, timing benchmarks, and scoring criteria.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
            {currentProgram.modules.map((mod, mIdx) => (
              <motion.div
                key={mIdx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: mIdx * 0.1 }}
                className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition-all p-6 sm:p-7 flex flex-col justify-between"
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
                      Proven High-Score Strategies:
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-700 font-medium">
                      {mod.keyStrategies.map((strat, sIdx) => (
                        <li key={sIdx} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{strat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100">
                  <button
                    onClick={() => setSelectedModuleModal(mod)}
                    className="w-full py-2.5 bg-slate-50 hover:bg-iq-navy hover:text-white text-iq-navy text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Info className="w-3.5 h-3.5" />
                    <span>View Module Strategy & Scoring Rubric</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. EXAMINATION PATTERN & TIMING TABLE */}
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
              Master the exact time constraints, section item counts, and score weights.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs"
          >
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
          </motion.div>
        </div>
      </section>

      {/* 5. PREPARATION TIPS & TECHNIQUES */}
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
              Refined across thousands of successful students from our Guntur training academy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentProgram.prepTips.map((tip, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-2 hover:border-iq-navy transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-red-100 text-iq-red font-bold text-xs flex items-center justify-center">
                  #{idx + 1}
                </div>
                <h3 className="text-base font-bold text-iq-navy">{tip.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">{tip.tip}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQS ACCORDION */}
      <section className="py-14 sm:py-20 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
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
                className="border border-slate-200 rounded-2xl overflow-hidden transition-colors bg-white shadow-2xs"
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
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed bg-white border-t border-slate-100 font-medium">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FREE ENQUIRY & DIAGNOSTIC TEST CTA */}
      <section className="py-16 bg-gradient-to-r from-iq-navy via-iq-navy to-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
            Book Your Free <span className="text-iq-red">{currentProgram.shortName} Diagnostic Test</span> Today
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Take a complimentary section diagnostic test at our Guntur center. Receive an instant AI score report and customized study roadmap.
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

      {/* INTERACTIVE MODULE MODAL POPUP */}
      <AnimatePresence>
        {selectedModuleModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative space-y-4"
            >
              <button
                onClick={() => setSelectedModuleModal(null)}
                className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-1">
                <span className="text-[11px] font-bold text-iq-red uppercase tracking-wider">
                  {currentProgram.shortName} • Module Deep Dive
                </span>
                <h3 className="text-xl font-bold text-iq-navy">{selectedModuleModal.name}</h3>
                <p className="text-xs text-slate-500 font-semibold">Duration: {selectedModuleModal.duration}</p>
              </div>

              <div className="space-y-3 py-3 border-y border-slate-100 text-xs text-slate-700">
                <div>
                  <span className="font-bold text-iq-navy block mb-1">Format & Question Types:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedModuleModal.questionTypes.map((q, idx) => (
                      <span key={idx} className="bg-slate-100 px-2 py-0.5 rounded font-medium text-slate-700">
                        {q}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="font-bold text-iq-navy block mb-1">Scoring Criteria:</span>
                  <p className="text-slate-600 font-medium">{selectedModuleModal.scoringCriteria}</p>
                </div>

                <div>
                  <span className="font-bold text-iq-navy block mb-1">Key Preparation Tips:</span>
                  <ul className="space-y-1">
                    {selectedModuleModal.keyStrategies.map((s, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => {
                    setSelectedModuleModal(null);
                    onOpenConsultation();
                  }}
                  className="w-full py-3 bg-iq-red hover:bg-iq-red-hover text-white text-xs sm:text-sm font-bold rounded-xl shadow-md transition-all cursor-pointer text-center"
                >
                  Join Next Batch / Book Mock Test
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};
