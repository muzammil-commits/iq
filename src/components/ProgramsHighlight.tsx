import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, GraduationCap, School, BookOpenCheck } from 'lucide-react';

export const ProgramsHighlight: React.FC = () => {
  const programs = [
    {
      id: 'masters',
      title: 'Masters',
      subtitle: 'Build Your Future with Global Master’s Opportunities',
      description: 'Specialized 1-year and 2-year postgraduate degrees with STEM extensions, high industry ROI, and research fellowships.',
      image: '/images/program-masters.png',
      link: '/masters',
      icon: GraduationCap,
      badge: 'Postgraduate'
    },
    {
      id: 'bachelors',
      title: 'Bachelors',
      subtitle: 'Start Your Global Academic Journey',
      description: 'Foundational undergraduate degree programs worldwide with flexible majors, campus living, and global peer networks.',
      image: '/images/program-bachelors.png',
      link: '/bachelors',
      icon: School,
      badge: 'Undergraduate'
    },
    {
      id: 'training',
      title: 'Training',
      subtitle: 'Enhance Your Skills for Global Opportunities',
      description: 'Comprehensive test preparation for IELTS, PTE, TOEFL, GRE, GMAT, and visa consular mock interviews.',
      image: '/images/program-training.png',
      link: '/training',
      icon: BookOpenCheck,
      badge: 'Test Prep'
    }
  ];

  return (
    <section className="py-14 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {programs.map((program) => {
            const Icon = program.icon;
            return (
              <div
                key={program.id}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
              >
                <div>
                  {/* Image container */}
                  <div className="relative h-44 overflow-hidden bg-slate-100">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                    
                    <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-iq-navy text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {program.badge}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 sm:p-6 space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-iq-navy/5 text-iq-navy flex items-center justify-center">
                        <Icon className="w-4 h-4 text-iq-navy" />
                      </div>
                      <h3 className="text-xl font-extrabold text-iq-navy">
                        {program.title}
                      </h3>
                    </div>

                    <p className="text-sm font-semibold text-slate-800 leading-snug pt-1">
                      {program.subtitle}
                    </p>

                    <p className="text-xs text-slate-500 leading-relaxed pt-1">
                      {program.description}
                    </p>
                  </div>
                </div>

                {/* Footer Link */}
                <div className="p-5 sm:p-6 pt-0">
                  <Link
                    to={program.link}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-iq-red hover:text-iq-red-hover group-hover:gap-2.5 transition-all"
                  >
                    <span>Explore {program.title}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
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
