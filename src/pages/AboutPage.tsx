import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Shield,
  Users,
  Star,
  CheckCircle2,
  ArrowRight,
  Eye,
  Target,
  Sparkles,
  Plane,
  X,
  GraduationCap,
  Briefcase,
  HelpCircle,
  Banknote,
  Luggage,
  CheckSquare
} from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { BRAND_INFO, COMPANY_STATEMENTS } from '../data/siteContent';
import { VisionMissionModal } from '../components/VisionMissionModal';

interface AboutPageProps {
  onOpenConsultation: () => void;
}

interface PillarDetail {
  id: 'consultancy' | 'immigration' | 'facilitation';
  title: string;
  tagline: string;
  badge: string;
  color: string;
  description: string;
  features: string[];
  process: string[];
}

const PILLARS_DATA: Record<string, PillarDetail> = {
  consultancy: {
    id: 'consultancy',
    title: 'Consultancy',
    tagline: 'Worldwide Academic & Career Solutions',
    badge: 'Core Foundation',
    color: 'from-red-600 to-rose-700',
    description:
      'Our Educational Consultancy division bridges students with 1,000+ top universities across the USA, UK, Canada, Australia, Ireland, and Europe. We provide scientific psychometric profile mapping, university shortlisting, and zero-error application lodgement.',
    features: [
      'Comprehensive profile evaluation & psychometric career assessment',
      'Targeted university matching across Dream, Reach, and Safe categories',
      'Drafting and constructive review of SOPs, LORs, and CVs',
      'Scholarship application support and fee waiver assistance',
      'Intake calendar tracking and proactive admission follow-ups'
    ],
    process: [
      'Initial Aptitude & Profile Consultation',
      'Curated University Matrix Presentation',
      'Dossier Drafting & Document Audit',
      'Official Institutional Application Lodgement'
    ]
  },
  immigration: {
    id: 'immigration',
    title: 'Immigration',
    tagline: 'Worldwide Visa & Legal Pathways',
    badge: 'Legal & Compliance',
    color: 'from-iq-navy to-blue-900',
    description:
      'Navigating international immigration laws with high precision. From student visas (F-1, UK Student Route, Subclass 500) to family visiting visas and post-study work permits, our certified counselors ensure compliant paperwork with zero discrepancy risk.',
    features: [
      'Country-specific visa checklist customization (US, UK, CA, AU, IE, EU)',
      'Genuine Student (GS) / Genuine Temporary Entrant (GTE) statement drafting',
      'Sponsor financial affidavits, bank verification, and ITR compliance',
      '1-on-1 consular mock interviews simulating actual embassy questions',
      'Post-study work permit (PGWP, PSW) and PR points assessment'
    ],
    process: [
      'Case Feasibility & Financial Assessment',
      'Sponsor Dossier & Legal Affidavit Assembly',
      'Portal Submission & Biometrics Booking',
      'Rigorous Consular Mock Interview Drills'
    ]
  },
  facilitation: {
    id: 'facilitation',
    title: 'Facilitation',
    tagline: 'Worldwide Logistics & Transit Solutions',
    badge: 'Full Student Care',
    color: 'from-slate-800 to-slate-950',
    description:
      'Studying abroad involves critical logistics beyond admission letters. We provide student foreign currency exchange (Forex) cards, discounted international flight tickets with extra luggage allowances, verified student accommodation, and pre-departure briefings.',
    features: [
      'Discounted student airfares with 40-45kg extra baggage allowance',
      'RBI-licensed Forex exchange cards with zero transaction markup',
      'Fast educational loan approvals with nationalized banks and NBFCs',
      'Verified student apartments and university dormitory reservations',
      'International SIM cards and airport pickup coordination'
    ],
    process: [
      'Education Loan Sanction & Forex Rate Lock',
      'Student Fare Flight Booking & Baggage Waiver',
      'Safe University Housing Confirmation',
      'Pre-Departure Orientation & Transit Pack'
    ]
  }
};

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenConsultation }) => {
  const [modalType, setModalType] = useState<'vision' | 'mission' | null>(null);
  const [selectedPillar, setSelectedPillar] = useState<PillarDetail | null>(null);

  // Why Choose Us Checklist matching image copy 40.png with user's mandatory points
  const whyChooseUsPoints = [
    { title: 'Visa guidance', desc: 'Precision embassy filing & 1-on-1 consular mock interview drills.' },
    { title: 'Forex assistance', desc: 'RBI-licensed international student multi-currency travel cards with zero markup.' },
    { title: 'Flight ticket', desc: 'Discounted student airfares with exclusive 40-45 kg luggage allowance.' },
    { title: 'Personalized Career Counselling', desc: 'In-depth profile assessment aligned with global industry demand.' },
    { title: 'Study Abroad Guidance', desc: 'Direct representation across 1,000+ accredited universities worldwide.' },
    { title: 'Application Processing Assistance', desc: 'Zero-error document audit, SOP/LOR editing, and admission follow-ups.' },
    { title: 'Educational Loan & Financial Guidance', desc: 'Collateral and non-collateral overseas education loans with fast approval.' },
    { title: 'Accommodation Assistance', desc: 'Safe, verified on-campus dorms and student apartments near universities.' },
    { title: 'Dedicated Support', desc: 'End-to-end guidance from initial profiling to campus touchdown.' }
  ];

  return (
    <div className="w-full bg-white">
      {/* Vision & Mission Popup Modal */}
      <VisionMissionModal
        type={modalType}
        isOpen={modalType !== null}
        onClose={() => setModalType(null)}
        onOpenConsultation={onOpenConsultation}
      />

      {/* Pillar Detail Interactive Modal Popup (Consultancy, Immigration, Facilitation) */}
      <AnimatePresence>
        {selectedPillar && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 sm:p-8 relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedPillar(null)}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-2">
                <span className={`px-3 py-1 rounded-full bg-gradient-to-r ${selectedPillar.color} text-white text-[11px] font-black uppercase tracking-wider`}>
                  {selectedPillar.badge}
                </span>
                <span className="text-xs font-bold text-slate-400">IQ Overseas Division</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-iq-navy">
                {selectedPillar.title}
              </h3>
              <p className="text-xs sm:text-sm font-bold text-iq-red mt-0.5">
                {selectedPillar.tagline}
              </p>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed font-medium">
                {selectedPillar.description}
              </p>

              {/* Inclusions */}
              <div className="mt-6 pt-5 border-t border-slate-100 space-y-3">
                <h4 className="text-xs font-black text-iq-navy uppercase tracking-wider">
                  Key Deliverables & Inclusions
                </h4>
                <div className="space-y-2">
                  {selectedPillar.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="font-medium">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step Process */}
              <div className="mt-6 pt-5 border-t border-slate-100 space-y-3">
                <h4 className="text-xs font-black text-iq-navy uppercase tracking-wider">
                  Our Step-by-Step Delivery
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedPillar.process.map((step, idx) => (
                    <div key={idx} className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center gap-2.5">
                      <span className="w-6 h-6 rounded-lg bg-iq-navy text-white text-xs font-black flex items-center justify-center shrink-0">
                        0{idx + 1}
                      </span>
                      <span className="text-xs font-bold text-slate-800">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                <button
                  onClick={() => {
                    setSelectedPillar(null);
                    onOpenConsultation();
                  }}
                  className="w-full sm:w-auto px-6 py-3 bg-iq-red hover:bg-iq-navy text-white text-xs sm:text-sm font-black rounded-xl shadow-md transition-all cursor-pointer"
                >
                  Book Free Session for {selectedPillar.title}
                </button>
                <button
                  onClick={() => setSelectedPillar(null)}
                  className="w-full sm:w-auto px-5 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition-all cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

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

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
                At IQ Overseas Edu Consultants, we understand that studying abroad is more than just choosing a college; it is a life-defining career investment. We bridge the gap between ambitious students from Andhra Pradesh and leading global universities across the USA, UK, Canada, Australia, Ireland, and Europe.
              </p>

              <p className="text-sm text-slate-600 leading-relaxed font-medium">
                Through ethical counseling, transparent documentation, and individualized attention, we demystify international admissions and visa protocols, making global education accessible and realistic for every committed aspirant.
              </p>

              <div className="pt-2 grid grid-cols-2 gap-4">
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                  <div className="text-lg font-black text-iq-navy">100% Genuine</div>
                  <div className="text-xs text-slate-500 font-medium">Transparent & ethical advice</div>
                </div>
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                  <div className="text-lg font-black text-iq-navy">End-to-End</div>
                  <div className="text-xs text-slate-500 font-medium">Profile to arrival support</div>
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

      {/* Vision & Mission Deep Dive */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-[#F8FAFD] via-white to-[#F8FAFD] border-y border-slate-200/70 relative overflow-hidden">
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
            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              onClick={() => setModalType('vision')}
              className="bg-white rounded-3xl p-7 sm:p-9 shadow-xl hover:shadow-2xl border-2 border-blue-100/80 hover:border-iq-navy transition-all flex flex-col justify-between group cursor-pointer relative overflow-hidden"
            >
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

            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              onClick={() => setModalType('mission')}
              className="bg-white rounded-3xl p-7 sm:p-9 shadow-xl hover:shadow-2xl border-2 border-red-100/80 hover:border-iq-red transition-all flex flex-col justify-between group cursor-pointer relative overflow-hidden"
            >
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

      {/* 
        WHY CHOOSE US SECTION (matching image copy 40.png)
        - Left: Official IQ Overseas Logo with Graduation Cap & Airplane
        - Right: Checklist including user's mandatory points:
          1. Visa guidance
          2. Forex assistance
          3. Flight ticket
        - Bottom 3 Full-Width Feature Cards: Consultancy, Immigration, Facilitation with Interactive Popups
      */}
      <section className="py-16 sm:py-24 bg-white" id="why-choose-us">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Half: Logo + Header + Checklist */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center pb-14 border-b border-slate-200">
            
            {/* Left Column: Official IQ Logo Display */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 sm:p-8 bg-slate-50/70 rounded-3xl border border-slate-200/80 shadow-sm text-center">
              <div className="relative p-6 bg-white rounded-2xl shadow-md border border-slate-100">
                <img
                  src="/images/logo.png"
                  alt="IQ Overseas Edu Consultants Official Logo"
                  className="w-64 sm:w-80 h-auto object-contain mx-auto"
                />
              </div>
              <h4 className="text-xl sm:text-2xl font-black text-iq-navy mt-6">
                IQ Overseas Edu Consultants
              </h4>
              <p className="text-xs sm:text-sm text-slate-500 font-semibold mt-1">
                Your Trusted Partner for Global Education, Careers & Visa Solutions
              </p>
              <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 bg-red-50 text-iq-red text-xs font-bold rounded-full">
                <Plane className="w-3.5 h-3.5 text-iq-red" />
                <span>Lakshmipuram, Guntur, AP</span>
              </div>
            </div>

            {/* Right Column: WHY CHOOSE US & Points */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold text-iq-red uppercase tracking-wider mb-2">
                  <span className="w-2.5 h-2.5 rounded-xs bg-slate-800 inline-block" />
                  <Plane className="w-4 h-4 text-iq-red inline-block" />
                  <span>WHY CHOOSE US</span>
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-iq-navy tracking-tight leading-tight">
                  Your Journey Abroad Begins with <span className="text-iq-red">the Right Guidance</span>
                </h3>
              </div>

              {/* Checklist Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {whyChooseUsPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: index * 0.05 }}
                    className="flex items-start gap-2.5 p-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                  >
                    <CheckSquare className="w-4 h-4 text-slate-700 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs sm:text-sm font-bold text-slate-800 block">
                        {point.title}.
                      </span>
                      <span className="text-[11px] text-slate-500 font-medium leading-snug block">
                        {point.desc}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>

          {/* 
            Bottom Half: The 3 Characteristic Cards matching image copy 40.png:
            1. Consultancy (Red badge)
            2. Immigration (Dark badge)
            3. Facilitation (Dark badge)
            All with interactive popups
          */}
          <div className="pt-12">
            <div className="text-center max-w-xl mx-auto mb-8">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Three Strategic Pillars
              </span>
              <h4 className="text-xl sm:text-2xl font-black text-iq-navy mt-1">
                Explore Our Core Divisions
              </h4>
              <p className="text-xs text-slate-500 mt-1">
                Click any pillar below to view full service details and methodologies
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
              {/* Card 1: Consultancy */}
              <div
                onClick={() => setSelectedPillar(PILLARS_DATA.consultancy)}
                className="bg-[#121620] hover:bg-slate-900 rounded-2xl p-6 sm:p-7 text-white shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-t-4 border-iq-red flex flex-col justify-between group"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-iq-red flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform">
                    <GraduationCap className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-2xl font-black tracking-tight text-white group-hover:text-red-400 transition-colors">
                    Consultancy
                  </h4>
                  <p className="text-xs text-slate-300 mt-1.5 font-medium">
                    Worldwide Trade This Solution.
                  </p>
                  <p className="text-xs text-slate-400 mt-3 line-clamp-3 leading-relaxed">
                    Personalized profile mapping, university shortlisting across USA, UK, Canada, Australia, and European countries.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-bold text-red-400 group-hover:text-white transition-colors">
                  <span>View Details & Popups</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Card 2: Immigration */}
              <div
                onClick={() => setSelectedPillar(PILLARS_DATA.immigration)}
                className="bg-[#F8FAFD] hover:bg-slate-100 rounded-2xl p-6 sm:p-7 text-slate-800 shadow-md transition-all duration-300 hover:-translate-y-2 cursor-pointer border-t-4 border-iq-navy flex flex-col justify-between group"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-iq-navy flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform">
                    <Shield className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-2xl font-black tracking-tight text-iq-navy group-hover:text-iq-red transition-colors">
                    Immigration
                  </h4>
                  <p className="text-xs text-slate-500 mt-1.5 font-medium">
                    Worldwide Trade This Solution.
                  </p>
                  <p className="text-xs text-slate-600 mt-3 line-clamp-3 leading-relaxed font-medium">
                    High-precision student visa filing, financial audits, genuine temporary entrant (GTE/GS) statements, and consular mock interviews.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-xs font-bold text-iq-navy group-hover:text-iq-red transition-colors">
                  <span>View Details & Popups</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Card 3: Facilitation */}
              <div
                onClick={() => setSelectedPillar(PILLARS_DATA.facilitation)}
                className="bg-[#F8FAFD] hover:bg-slate-100 rounded-2xl p-6 sm:p-7 text-slate-800 shadow-md transition-all duration-300 hover:-translate-y-2 cursor-pointer border-t-4 border-slate-700 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform">
                    <Plane className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-2xl font-black tracking-tight text-iq-navy group-hover:text-iq-red transition-colors">
                    Facilitation
                  </h4>
                  <p className="text-xs text-slate-500 mt-1.5 font-medium">
                    Worldwide Trade This Solution.
                  </p>
                  <p className="text-xs text-slate-600 mt-3 line-clamp-3 leading-relaxed font-medium">
                    Forex multi-currency travel cards, discounted student flight tickets with 45kg luggage, accommodation bookings, and educational loans.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-xs font-bold text-slate-700 group-hover:text-iq-red transition-colors">
                  <span>View Details & Popups</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>

          {/* CTA Box */}
          <div className="mt-14 bg-gradient-to-r from-iq-navy to-[#051554] rounded-2xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div>
              <h4 className="text-xl font-bold">Have questions regarding your eligibility?</h4>
              <p className="text-xs text-blue-200 mt-1">Speak directly with our senior counselors at our Lakshmipuram, Guntur branch.</p>
            </div>
            <button
              onClick={onOpenConsultation}
              className="px-6 py-3 bg-iq-red hover:bg-iq-navy text-white text-xs sm:text-sm font-bold rounded-xl shadow transition-all whitespace-nowrap cursor-pointer"
            >
              Book Free Counselling Session
            </button>
          </div>

        </div>
      </section>
    </div>
  );
};
