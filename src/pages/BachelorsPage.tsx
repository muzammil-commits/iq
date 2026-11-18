import React from 'react';
import { Link } from 'react-router-dom';
import {
  School,
  ArrowRight,
  CheckCircle2,
  Compass,
  FileCheck,
  Award,
  ShieldCheck,
  Plane,
  Sparkles
} from 'lucide-react';
import { PageHero } from '../components/PageHero';

interface BachelorsPageProps {
  onOpenConsultation: () => void;
}

export const BachelorsPage: React.FC<BachelorsPageProps> = ({ onOpenConsultation }) => {
  const sections = [
    {
      title: 'Career Planning',
      desc: 'Early aptitude assessment to identify your interests, strengths, and long-term professional ambitions before choosing an undergraduate degree.',
      icon: Compass
    },
    {
      title: 'Course Selection',
      desc: 'Exploring foundational majors in Computer Science, Business, Engineering, Life Sciences, Economics, and Liberal Arts across leading global education systems.',
      icon: School
    },
    {
      title: 'University Selection',
      desc: 'Shortlisting world-class colleges offering robust campus life, safety, faculty mentorship, and international undergraduate scholarship opportunities.',
      icon: Award
    },
    {
      title: 'Application Support',
      desc: 'Assistance with Common App, UCAS, OUAC portals, high school transcript evaluations, essays, and guidance for parents on financial documentation.',
      icon: FileCheck
    },
    {
      title: 'Visa Support',
      desc: 'Student visa filing, minor/guardian requirements where applicable, sponsor affidavits, and thorough consular interview preparation.',
      icon: ShieldCheck
    },
    {
      title: 'Pre-Departure Guidance',
      desc: 'On-campus dorm reservations, meal plans, health insurance, orientation bookings, and parent-student briefings for a smooth transition.',
      icon: Plane
    }
  ];

  return (
    <div className="w-full">
      <PageHero
        title="Start Your Global"
        highlightedWord="Academic Journey"
        subtitle="Embark on an undergraduate bachelor's degree at world-renowned international colleges with comprehensive guidance for students and parents in Guntur."
        breadcrumbs={[{ label: 'Bachelors Abroad' }]}
        onOpenConsultation={onOpenConsultation}
      />

      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main Bachelor Intro */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-iq-red uppercase tracking-wider">
                <span className="w-5 h-0.5 bg-iq-red" />
                <span>Undergraduate Admissions</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-iq-navy tracking-tight">
                Build a Strong Foundation for Life
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Starting your higher education abroad as an undergraduate develops lifelong independence, cultural adaptability, fluent global communication, and access to world-class career placements.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-iq-red shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-sm font-bold text-iq-navy">Holistic Learning Environment</h5>
                    <p className="text-xs text-slate-500">Flexible double majors, co-op internships, and cutting-edge laboratory facilities.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-iq-red shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-sm font-bold text-iq-navy">Parental Peace of Mind</h5>
                    <p className="text-xs text-slate-500">Dedicated campus housing, on-campus medical care, and 24/7 security standards.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={onOpenConsultation}
                  className="px-6 py-3 bg-iq-red hover:bg-iq-red-hover text-white text-xs sm:text-sm font-bold rounded-xl shadow-md transition-all"
                >
                  Explore Bachelor’s Opportunities
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-slate-100">
                <img
                  src="/images/program-bachelors.png"
                  alt="Undergraduate Indian students walking on international campus"
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>

          {/* 6 Sections */}
          <div className="mt-12">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h3 className="text-2xl font-extrabold text-iq-navy">
                Undergraduate Support Program
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Every step from Grade 12 onwards handled with utmost care.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sections.map((sec, idx) => {
                const Icon = sec.icon;
                return (
                  <div
                    key={sec.title}
                    className="p-6 rounded-2xl bg-[#F8FAFD] border border-slate-200/80 hover:border-iq-navy hover:shadow-md transition-all group"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-iq-navy text-white flex items-center justify-center group-hover:bg-iq-red transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-400">
                        0{idx + 1}
                      </span>
                    </div>
                    <h4 className="text-base font-bold text-iq-navy group-hover:text-iq-red transition-colors">
                      {sec.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed mt-2">
                      {sec.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
