import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, GraduationCap, School, BookOpenCheck, CheckCircle2, Sparkles } from 'lucide-react';

export const ProgramsHighlight: React.FC = () => {
  const programs = [
    {
      id: 'masters',
      title: 'Masters',
      category: 'Postgraduate Programs',
      subtitle: 'Build Your Future with Global Master’s Opportunities',
      description: 'Specialized 1-year and 2-year postgraduate degrees with 3-year STEM OPT extensions, high starting salaries, and international research fellowships.',
      image: '/images/program-masters-grand.png',
      link: '/masters',
      icon: GraduationCap,
      badge: 'Postgraduate',
      highlights: ['STEM OPT 3-Year Extensions', '1-Year & 2-Year Master’s', 'GRE/GMAT & Direct Intakes']
    },
    {
      id: 'bachelors',
      title: 'Bachelors',
      category: 'Undergraduate Programs',
      subtitle: 'Start Your Global Academic Journey',
      description: 'Foundational undergraduate degree programs worldwide with flexible double majors, co-op internships, safe campus residences, and global peer networks.',
      image: '/images/program-bachelors-grand.png',
      link: '/bachelors',
      icon: School,
      badge: 'Undergraduate',
      highlights: ['Common App & UCAS Portals', 'Merit High-School Grants', 'Co-op Work Internships']
    },
    {
      id: 'training',
      title: 'Training',
      category: 'Test Prep & Coaching',
      subtitle: 'Enhance Your Skills for Global Opportunities',
      description: 'Certified test preparation for IELTS, PTE, TOEFL, GRE, Digital SAT, German language, and intensive consular visa mock interview simulations.',
      image: '/images/program-training-grand.png',
      link: '/training',
      icon: BookOpenCheck,
      badge: 'Test Prep & Language',
      highlights: ['IELTS Band 7.5+ Coaching', 'PTE 79+ AI Lab Simulator', 'Visa Consular Mock Drills']
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-iq-red uppercase tracking-wider mb-2">
            <span className="w-6 h-0.5 bg-iq-red" />
            <span>Academic Pathways</span>
            <span className="w-6 h-0.5 bg-iq-red" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-iq-navy tracking-tight">
            Explore Leading Study Opportunities
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Choose the right academic tier tailored for your career stage, academic profile, and long-term settlement ambitions.
          </p>
        </div>

        {/* 3 Grand Program Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {programs.map((program) => {
            const Icon = program.icon;
            return (
              <div
                key={program.id}
                className="group bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5"
              >
                <div>
                  {/* High Definition Image Container */}
                  <div className="relative h-56 sm:h-60 overflow-hidden bg-slate-100">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
                    
                    {/* Badge Pill */}
                    <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-iq-navy text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                      {program.badge}
                    </span>

                    <div className="absolute bottom-3 left-4 right-4 text-white">
                      <span className="text-[11px] font-bold text-red-200 uppercase tracking-wider">
                        {program.category}
                      </span>
                      <h3 className="text-2xl font-black text-white leading-tight">
                        {program.title}
                      </h3>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-3">
                    <p className="text-sm font-bold text-slate-800 leading-snug">
                      {program.subtitle}
                    </p>

                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {program.description}
                    </p>

                    {/* Highlights */}
                    <div className="pt-3 border-t border-slate-100 space-y-1.5">
                      {program.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-iq-red shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Link */}
                <div className="p-6 pt-0">
                  <Link
                    to={program.link}
                    className="w-full py-3 px-4 bg-slate-50 group-hover:bg-iq-navy text-iq-navy group-hover:text-white rounded-2xl text-xs font-bold transition-all flex items-center justify-between border border-slate-200 group-hover:border-iq-navy shadow-2xs"
                  >
                    <span>Explore {program.title} Abroad</span>
                    <ArrowRight className="w-4 h-4 text-iq-red group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
