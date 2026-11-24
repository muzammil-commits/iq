import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Landmark, GraduationCap, ArrowRight, X, Sparkles, CheckCircle2 } from 'lucide-react';
import { AnimatedCounter } from './AnimatedCounter';

export interface StudyDestinationCard {
  id: string;
  country: string;
  image: string;
  description: string;
  buttonText: string;
  bachelorsSlug: string;
  mastersSlug: string;
  institutions: string;
  institutionCount: number;
  students: string;
  studentCount: string;
  flag: string;
  highlights: string[];
}

export const STUDY_DESTINATIONS: StudyDestinationCard[] = [
  {
    id: 'usa',
    country: 'United States',
    image: '/images/destinations/usa-dest.png',
    description: 'Home to world-renowned universities, cutting-edge research, and high starting salaries.',
    buttonText: 'Explore USA',
    bachelorsSlug: '/bachelors/usa',
    mastersSlug: '/masters/usa',
    institutions: '5000+ institutions',
    institutionCount: 5000,
    students: '1.1M+ students',
    studentCount: '1.1M+',
    flag: '🇺🇸',
    highlights: ['Up to 3-Year STEM OPT work authorization', 'Top global university research funding', 'Fortune 500 recruitment hubs']
  },
  {
    id: 'uk',
    country: 'United Kingdom',
    image: '/images/destinations/uk-dest.png',
    description: 'World-class education with rich history and culture. 1-year Master’s and 2-year PSW.',
    buttonText: 'Explore UK',
    bachelorsSlug: '/bachelors/uk',
    mastersSlug: '/masters/uk',
    institutions: '160+ institutions',
    institutionCount: 160,
    students: '750k+ students',
    studentCount: '750k+',
    flag: '🇬🇧',
    highlights: ['1-Year intensive Master’s save 50% tuition', '2-Year guaranteed Graduate Route PSW', 'Russell Group research institutions']
  },
  {
    id: 'ireland',
    country: 'Ireland',
    image: '/images/destinations/ireland-dest.png',
    description: 'European Silicon Valley with top tech giants, 1-year Master’s, and 2-year stay back.',
    buttonText: 'Explore Ireland',
    bachelorsSlug: '/bachelors/ireland',
    mastersSlug: '/masters/ireland',
    institutions: '10+ institutions',
    institutionCount: 10,
    students: '35k+ students',
    studentCount: '35k+',
    flag: '🇮🇪',
    highlights: ['European HQ for Google, Meta, Apple & Pfizer', '2-Year Third Level graduate stay-back', 'Fast-track Critical Skills work permits']
  },
  {
    id: 'australia',
    country: 'Australia',
    image: '/images/destinations/australia-dest.png',
    description: 'High-quality Group of Eight universities, exceptional lifestyle, and post-study work visas.',
    buttonText: 'Explore Australia',
    bachelorsSlug: '/bachelors/australia',
    mastersSlug: '/masters/australia',
    institutions: '43 institutions',
    institutionCount: 43,
    students: '750k+ students',
    studentCount: '750k+',
    flag: '🇦🇺',
    highlights: ['Group of Eight world top-100 universities', '2 to 5 years post-study work visa', 'High minimum student wage']
  },
  {
    id: 'canada',
    country: 'Canada',
    image: '/images/destinations/canada-dest.png',
    description: 'Welcoming multicultural cities, up to 3-year PGWP, and clear PR pathways.',
    buttonText: 'Explore Canada',
    bachelorsSlug: '/bachelors/canada',
    mastersSlug: '/masters/canada',
    institutions: '250+ institutions',
    institutionCount: 250,
    students: '1M+ students',
    studentCount: '1M+',
    flag: '🇨🇦',
    highlights: ['Up to 3-Year Post-Graduation Work Permit', 'Paid Co-op work term opportunities', 'Clear Express Entry immigration pathway']
  },
  {
    id: 'new-zealand',
    country: 'New Zealand',
    image: '/images/destinations/new-zealand-dest.png',
    description: 'Safe lifestyle, top 3% world universities, and post-study work pathways.',
    buttonText: 'Explore New Zealand',
    bachelorsSlug: '/bachelors/new-zealand',
    mastersSlug: '/masters/new-zealand',
    institutions: '8 universities',
    institutionCount: 8,
    students: '120k+ students',
    studentCount: '120k+',
    flag: '🇳🇿',
    highlights: ['All 8 state universities ranked in global top 3%', 'Up to 3-Year post-study work visa', 'Safe, scenic and peaceful study lifestyle']
  },
  {
    id: 'europe',
    country: 'Europe Countries',
    image: '/images/destinations/europe-france-dest.png',
    description: 'Top business schools, rich cultural heritage, and 27-country Schengen mobility.',
    buttonText: 'Explore Europe',
    bachelorsSlug: '/bachelors/europe',
    mastersSlug: '/masters/europe',
    institutions: '1500+ institutions',
    institutionCount: 1500,
    students: '2M+ students',
    studentCount: '2M+',
    flag: '🇪🇺',
    highlights: ['Triple-crown accredited business schools in France & EU', 'Subsidized student living & housing allowances', '27-country Schengen zone visa free travel']
  }
];

export const ExploreStudyDestinations: React.FC = () => {
  const [selectedDest, setSelectedDest] = useState<StudyDestinationCard | null>(null);

  return (
    <section id="explore-study-destinations" className="py-16 sm:py-24 bg-white relative z-10 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading - Exact format from user reference */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1E1B4B] tracking-tight"
          >
            Explore Study Destinations
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 text-sm sm:text-base md:text-lg text-slate-600 font-medium"
          >
            We help students achieve their dreams of studying in these popular destinations
          </motion.p>
        </div>

        {/* 3 Cards Per Row Grid - Exactly as in image copy 41 & 42 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {STUDY_DESTINATIONS.map((dest, idx) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (idx % 3) * 0.12 }}
              className="bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Destination Landmark Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={dest.image}
                    alt={dest.country}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3 text-xl bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-xl shadow-xs">
                    {dest.flag}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1E1B4B] tracking-tight">
                    {dest.country}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed min-h-[40px]">
                    {dest.description}
                  </p>

                  {/* Explore Button */}
                  <div className="mt-5">
                    <button
                      onClick={() => setSelectedDest(dest)}
                      className="w-auto px-6 py-2.5 rounded-xl bg-[#4338CA] hover:bg-[#3730A3] text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-2 cursor-pointer"
                    >
                      <span>{dest.buttonText}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Card Footer: Institutions & Students Count */}
              <div className="px-6 py-4 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-700">
                <div className="flex items-center gap-1.5 text-iq-navy">
                  <Landmark className="w-4 h-4 text-[#4338CA] shrink-0" />
                  <span>
                    <AnimatedCounter value={dest.institutions.split(' ')[0]} /> {dest.institutions.split(' ').slice(1).join(' ')}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-iq-navy">
                  <GraduationCap className="w-4 h-4 text-[#4338CA] shrink-0" />
                  <span>
                    <AnimatedCounter value={dest.students.split(' ')[0]} /> {dest.students.split(' ').slice(1).join(' ')}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Interactive Destination Modal Popup */}
      <AnimatePresence>
        {selectedDest && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedDest(null)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Destination Header */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{selectedDest.flag}</span>
                <div>
                  <h3 className="text-2xl font-black text-iq-navy">{selectedDest.country}</h3>
                  <div className="text-xs text-slate-500 font-semibold">{selectedDest.institutions} • {selectedDest.students}</div>
                </div>
              </div>

              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-4 border border-slate-200">
                <img
                  src={selectedDest.image}
                  alt={selectedDest.country}
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed font-medium">
                {selectedDest.description}
              </p>

              {/* Key Highlights */}
              <div className="space-y-2 mb-6">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Why Study in {selectedDest.country}:</div>
                {selectedDest.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              {/* Action Links: Choose Degree Level */}
              <div className="grid grid-cols-2 gap-3 pt-2 border-t border-slate-100">
                <Link
                  to={selectedDest.mastersSlug}
                  onClick={() => setSelectedDest(null)}
                  className="w-full py-3 px-4 rounded-xl bg-iq-red hover:bg-iq-red-hover text-white text-center text-xs sm:text-sm font-bold shadow-md transition-colors"
                >
                  Master's in {selectedDest.country} →
                </Link>
                <Link
                  to={selectedDest.bachelorsSlug}
                  onClick={() => setSelectedDest(null)}
                  className="w-full py-3 px-4 rounded-xl bg-iq-navy hover:bg-slate-800 text-white text-center text-xs sm:text-sm font-bold shadow-md transition-colors"
                >
                  Bachelor's in {selectedDest.country} →
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
