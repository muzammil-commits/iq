import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Eye,
  Target,
  Shield,
  Users,
  Star,
  Handshake,
  UserCheck,
  Trophy,
  Globe,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { COMPANY_STATEMENTS, CORE_VALUES } from '../data/siteContent';

export const AboutSection: React.FC = () => {
  const [activeValue, setActiveValue] = useState<string | null>(CORE_VALUES[0].id);

  const getValueIcon = (name: string, active: boolean) => {
    const iconClass = `w-4 h-4 transition-colors duration-200 ${
      active ? 'text-white' : 'text-iq-navy group-hover:text-iq-red'
    }`;
    switch (name) {
      case 'Shield': return <Shield className={iconClass} />;
      case 'Users': return <Users className={iconClass} />;
      case 'Star': return <Star className={iconClass} />;
      case 'Handshake': return <Handshake className={iconClass} />;
      case 'UserCheck': return <UserCheck className={iconClass} />;
      case 'Trophy': return <Trophy className={iconClass} />;
      case 'Globe': return <Globe className={iconClass} />;
      default: return <Sparkles className={iconClass} />;
    }
  };

  return (
    <section className="py-14 sm:py-20 bg-white relative overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center sm:text-left mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-iq-red uppercase tracking-wider mb-2">
            <span className="w-6 h-0.5 bg-iq-red" />
            <span>About IQ Overseas</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-iq-navy tracking-tight max-w-2xl">
            Your Journey Beyond Borders Starts Here
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
            IQ Overseas Edu Consultants is dedicated to connecting ambitious students and professionals with life-changing international academic and career opportunities through transparent, personalized guidance.
          </p>
        </div>

        {/* Editorial Layout: Image + Vision/Mission + Values */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Image & Vision/Mission Cards (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Main Student Photo with badges */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-100 group">
              <img
                src="/images/about-students.png"
                alt="IQ Overseas Happy Students at International University Campus"
                className="w-full h-[260px] sm:h-[320px] object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-iq-navy/70 via-transparent to-transparent pointer-events-none" />

              {/* Floating Overlay Pill */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-white/40 shadow-lg flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-iq-navy">Empowering Dreams in Guntur & Beyond</div>
                  <div className="text-[11px] text-slate-500">Student-first counselling • Ethical admissions</div>
                </div>
                <Link
                  to="/about"
                  className="px-3.5 py-1.5 bg-iq-red hover:bg-iq-red-hover text-white text-xs font-bold rounded-lg shadow transition-colors inline-flex items-center gap-1 shrink-0"
                >
                  <span>Know More</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Vision & Mission Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Vision Block */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-50/70 to-white border border-blue-100/80 shadow-sm relative overflow-hidden group hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-iq-navy text-white flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Eye className="w-5 h-5 text-blue-200" />
                </div>
                <h3 className="text-sm font-bold text-iq-navy mb-1.5 flex items-center gap-1.5">
                  <span>{COMPANY_STATEMENTS.vision.title}</span>
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed italic">
                  "{COMPANY_STATEMENTS.vision.quote}"
                </p>
                <div className="mt-3 pt-2 border-t border-blue-100/60 text-[11px] font-semibold text-iq-navy flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-iq-red" />
                  <span>{COMPANY_STATEMENTS.vision.summary}</span>
                </div>
              </div>

              {/* Mission Block */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-red-50/60 to-white border border-red-100/80 shadow-sm relative overflow-hidden group hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-iq-red text-white flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-iq-navy mb-1.5 flex items-center gap-1.5">
                  <span>{COMPANY_STATEMENTS.mission.title}</span>
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed italic">
                  "{COMPANY_STATEMENTS.mission.quote}"
                </p>
                <div className="mt-3 pt-2 border-t border-red-100/60 text-[11px] font-semibold text-iq-red flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-iq-navy" />
                  <span>{COMPANY_STATEMENTS.mission.summary}</span>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: 7 Core Values (5 Cols) */}
          <div className="lg:col-span-5 bg-[#F8FAFD] rounded-2xl p-5 sm:p-6 border border-slate-100 shadow-sm">
            <div className="mb-4">
              <span className="text-[11px] font-bold text-iq-red uppercase tracking-wider">
                Principles That Guide Us
              </span>
              <h3 className="text-lg font-bold text-iq-navy">
                Our 7 Core Values
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Hover or click to explore our foundation of student trust
              </p>
            </div>

            <div className="space-y-2">
              {CORE_VALUES.map((val) => {
                const isActive = activeValue === val.id;
                return (
                  <div
                    key={val.id}
                    onMouseEnter={() => setActiveValue(val.id)}
                    onClick={() => setActiveValue(val.id)}
                    className={`p-3 rounded-xl transition-all duration-300 cursor-pointer border ${
                      isActive
                        ? 'bg-white shadow-md border-iq-navy/20 translate-x-1'
                        : 'bg-white/60 hover:bg-white border-transparent hover:border-slate-200'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${
                            isActive ? 'bg-iq-red text-white' : 'bg-slate-100 text-iq-navy'
                          }`}
                        >
                          {getValueIcon(val.iconName, isActive)}
                        </div>
                        <span className={`text-xs font-bold transition-colors ${
                          isActive ? 'text-iq-navy' : 'text-slate-700'
                        }`}>
                          {val.title}
                        </span>
                      </div>
                      <span className={`text-[11px] font-mono font-bold ${
                        isActive ? 'text-iq-red' : 'text-slate-300'
                      }`}>
                        0{val.id}
                      </span>
                    </div>

                    {/* Expandable description */}
                    {isActive && (
                      <p className="mt-2 pl-10 text-[11px] text-slate-600 leading-relaxed animate-in fade-in duration-200">
                        {val.description}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-5 pt-4 border-t border-slate-200/60 flex items-center justify-between">
              <span className="text-xs text-slate-500">Learn about our heritage</span>
              <Link
                to="/about"
                className="text-xs font-bold text-iq-red hover:underline inline-flex items-center gap-1"
              >
                <span>Read Full Story</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
