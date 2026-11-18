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
  Sparkles,
  BookOpen,
  Calendar
} from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { BACHELORS_DROPDOWN } from '../data/siteContent';

interface BachelorsPageProps {
  onOpenConsultation: () => void;
}

export const BachelorsPage: React.FC<BachelorsPageProps> = ({ onOpenConsultation }) => {
  const sections = [
    {
      title: 'Career Planning & Stream Selection',
      desc: 'Early aptitude assessment to identify your interests, strengths, and long-term professional ambitions before choosing an undergraduate degree.',
      icon: Compass
    },
    {
      title: 'Course Selection & Double Majors',
      desc: 'Exploring foundational majors in Computer Science, Business, Engineering, Life Sciences, Economics, and Liberal Arts across leading global education systems.',
      icon: School
    },
    {
      title: 'University Selection Matrix',
      desc: 'Shortlisting world-class colleges offering robust campus life, safety, faculty mentorship, and international undergraduate scholarship opportunities.',
      icon: Award
    },
    {
      title: 'Common App & UCAS Support',
      desc: 'Assistance with Common App, UCAS, OUAC portals, high school transcript evaluations, essays, and guidance for parents on financial documentation.',
      icon: FileCheck
    },
    {
      title: 'Student Visa & Minor Protocols',
      desc: 'Student visa filing, minor/guardian requirements where applicable, sponsor affidavits, and thorough consular interview preparation.',
      icon: ShieldCheck
    },
    {
      title: 'Pre-Departure & Dorm Bookings',
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

      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Main Hero Overview with Grand Picture (image copy 15.png) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-iq-red uppercase tracking-wider">
                <span className="w-6 h-0.5 bg-iq-red" />
                <span>Undergraduate Admissions</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-iq-navy tracking-tight leading-tight">
                Build a Strong Foundation for Life
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Starting your higher education abroad as an undergraduate develops lifelong independence, cultural adaptability, fluent global communication, and access to world-class career placements.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
                  <CheckCircle2 className="w-5 h-5 text-iq-red shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-sm font-bold text-iq-navy">Holistic Learning & Flexible Majors</h5>
                    <p className="text-xs text-slate-500 mt-0.5">Explore diverse subjects in year 1 and 2, declare majors later, or pursue double majors.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
                  <CheckCircle2 className="w-5 h-5 text-iq-red shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-sm font-bold text-iq-navy">Parental Peace of Mind & Safety</h5>
                    <p className="text-xs text-slate-500 mt-0.5">Guaranteed on-campus dormitories, student health centers, and dedicated international student offices.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
                  <CheckCircle2 className="w-5 h-5 text-iq-red shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-sm font-bold text-iq-navy">Co-Op Work Internships</h5>
                    <p className="text-xs text-slate-500 mt-0.5">Paid semester-long internships integrated directly into degree curricula in Canada and USA.</p>
                  </div>
                </div>
              </div>

              <div className="pt-3">
                <button
                  onClick={onOpenConsultation}
                  className="px-7 py-3.5 bg-iq-red hover:bg-iq-red-hover text-white text-xs sm:text-sm font-bold rounded-2xl shadow-lg transition-all"
                >
                  Explore Bachelor’s Opportunities
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 group">
                <img
                  src="/images/program-bachelors-grand.png"
                  alt="Undergraduate Indian students smiling on campus"
                  className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </div>
          </div>

          {/* Undergraduate by Country Explorer */}
          <div className="bg-[#F8FAFD] rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-lg space-y-6">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-bold text-iq-red uppercase tracking-wider">Country Options</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-iq-navy mt-1">
                Bachelors by Study Destination
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Select your preferred country for detailed eligibility, costs, and timeline.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {BACHELORS_DROPDOWN.slice(1).map((b) => (
                <div
                  key={b.slug}
                  onClick={onOpenConsultation}
                  className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md hover:border-iq-navy transition-all cursor-pointer group"
                >
                  <div className="text-3xl mb-2">{b.flag}</div>
                  <h4 className="text-base font-bold text-iq-navy group-hover:text-iq-red transition-colors">
                    {b.title}
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    {b.desc}
                  </p>
                  <div className="mt-3 text-xs font-bold text-iq-navy flex items-center gap-1 group-hover:text-iq-red">
                    <span>Enquire Requirements</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 6 Sections Roadmap */}
          <div className="space-y-6">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-2xl font-extrabold text-iq-navy">
                Complete Undergraduate Roadmap
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sections.map((sec, idx) => {
                const Icon = sec.icon;
                return (
                  <div
                    key={sec.title}
                    className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-iq-navy hover:shadow-md transition-all group"
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
