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
  CheckCircle2,
  Award
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
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Grand Section Header */}
        <div className="text-center sm:text-left mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold text-iq-red uppercase tracking-wider mb-2">
            <span className="w-8 h-1 bg-iq-red rounded-full" />
            <span>About IQ Overseas Edu Consultants</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-iq-navy tracking-tight max-w-3xl leading-tight">
            Your Journey Beyond Borders <span className="text-iq-red">Starts Here</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base md:text-lg text-slate-600 max-w-3xl leading-relaxed">
            IQ Overseas Edu Consultants is dedicated to connecting ambitious students and professionals with life-changing international academic and career opportunities through transparent, personalized guidance.
          </p>
        </div>

        {/* Grand Editorial Layout: image copy 10.png + Vision/Mission + 7 Core Values */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Ultra HD Image (image copy 10.png) & Vision/Mission (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Main Student Photo (image copy 25.png) with Grand Look */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 group transition-all duration-500 hover:shadow-[0_25px_60px_rgba(7,27,104,0.22)]">
              <img
                src="/images/about-students-headquarters-grand.png"
                alt="IQ Overseas Happy Students at International University Campus - Headquartered in Lakshmipuram, Guntur"
                className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-700 ease-out"
              />
              
              {/* Sleek Top Badge */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-lg border border-slate-200/80 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-iq-red animate-pulse" />
                <span className="text-xs font-black text-iq-navy tracking-wide">Trusted Global Guidance</span>
                <span className="text-slate-300">|</span>
                <span className="text-xs font-semibold text-slate-600">Guntur HQ</span>
              </div>

              {/* Top Right "Know More" CTA Button */}
              <Link
                to="/about"
                className="absolute top-4 right-4 px-4 py-2 bg-iq-navy/95 hover:bg-iq-red text-white text-xs font-bold rounded-full shadow-lg backdrop-blur-md transition-all duration-300 inline-flex items-center gap-1.5 hover:scale-105"
              >
                <span>Know More</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Vision & Mission Grand Blocks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Vision Block */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50/80 via-white to-blue-50/40 border border-blue-100 shadow-sm relative overflow-hidden group hover:shadow-md transition-all">
                <div className="w-11 h-11 rounded-xl bg-iq-navy text-white flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-xs">
                  <Eye className="w-5 h-5 text-sky-300" />
                </div>
                <h3 className="text-base font-extrabold text-iq-navy mb-1.5">
                  {COMPANY_STATEMENTS.vision.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed italic">
                  "{COMPANY_STATEMENTS.vision.quote}"
                </p>
                <div className="mt-4 pt-3 border-t border-blue-100 text-xs font-bold text-iq-navy flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-iq-red shrink-0" />
                  <span>{COMPANY_STATEMENTS.vision.summary}</span>
                </div>
              </div>

              {/* Mission Block */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-red-50/70 via-white to-red-50/40 border border-red-100 shadow-sm relative overflow-hidden group hover:shadow-md transition-all">
                <div className="w-11 h-11 rounded-xl bg-iq-red text-white flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-xs">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-base font-extrabold text-iq-navy mb-1.5">
                  {COMPANY_STATEMENTS.mission.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed italic">
                  "{COMPANY_STATEMENTS.mission.quote}"
                </p>
                <div className="mt-4 pt-3 border-t border-red-100 text-xs font-bold text-iq-red flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-iq-navy shrink-0" />
                  <span>{COMPANY_STATEMENTS.mission.summary}</span>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: 7 Core Values Grand Layout (5 Cols) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#F8FAFD] to-slate-50 rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-md">
            <div className="mb-4">
              <span className="text-[11px] font-bold text-iq-red uppercase tracking-wider">
                Principles That Guide Us
              </span>
              <h3 className="text-xl font-black text-iq-navy mt-0.5">
                Our 7 Core Values
              </h3>
              <p className="text-xs text-slate-500 mt-1">
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
                    className={`p-3.5 rounded-2xl transition-all duration-300 cursor-pointer border ${
                      isActive
                        ? 'bg-white shadow-md border-iq-navy/20 translate-x-1'
                        : 'bg-white/70 hover:bg-white border-slate-200/60 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-8 h-8 rounded-xl flex items-center justify-center transition-colors shadow-2xs ${
                            isActive ? 'bg-iq-red text-white' : 'bg-slate-100 text-iq-navy'
                          }`}
                        >
                          {getValueIcon(val.iconName, isActive)}
                        </div>
                        <span className={`text-xs sm:text-sm font-bold transition-colors ${
                          isActive ? 'text-iq-navy' : 'text-slate-800'
                        }`}>
                          {val.title}
                        </span>
                      </div>
                      <span className={`text-xs font-mono font-bold ${
                        isActive ? 'text-iq-red' : 'text-slate-300'
                      }`}>
                        0{val.id}
                      </span>
                    </div>

                    {/* Expandable description */}
                    {isActive && (
                      <p className="mt-2.5 pl-11 text-xs text-slate-600 leading-relaxed animate-in fade-in duration-200 font-normal">
                        {val.description}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between">
              <span className="text-xs text-slate-500 font-medium">Headquartered in Guntur, AP</span>
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
