import React from 'react';
import { Search, Calendar, FileText, PlaneTakeoff, ArrowRight } from 'lucide-react';
import { APPLICATION_STEPS } from '../data/siteContent';

export const ApplicationJourney: React.FC = () => {
  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'Search': return <Search className="w-5 h-5 text-iq-navy" />;
      case 'Calendar': return <Calendar className="w-5 h-5 text-iq-navy" />;
      case 'FileText': return <FileText className="w-5 h-5 text-iq-navy" />;
      case 'PlaneTakeoff': return <PlaneTakeoff className="w-5 h-5 text-white" />;
      default: return <Search className="w-5 h-5 text-iq-navy" />;
    }
  };

  return (
    <section className="py-14 sm:py-20 bg-[#F8FAFD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-iq-red uppercase tracking-wider mb-2">
            <span className="w-6 h-0.5 bg-iq-red" />
            <span>Application Journey</span>
            <span className="w-6 h-0.5 bg-iq-red" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-iq-navy tracking-tight">
            Four Simple Steps to Your <span className="text-iq-red">Global Campus</span>
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600">
            A structured, transparent roadmap designed to make international admissions straightforward and stress-free.
          </p>
        </div>

        {/* Desktop Timeline (Horizontal) */}
        <div className="hidden md:grid grid-cols-4 gap-6 relative">
          {/* Connecting line */}
          <div className="absolute top-10 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-iq-navy/20 via-iq-red/40 to-iq-navy/20 -z-0" />

          {APPLICATION_STEPS.map((step, idx) => {
            const isLast = idx === APPLICATION_STEPS.length - 1;
            return (
              <div
                key={step.step}
                className="relative z-10 flex flex-col items-center text-center group"
              >
                {/* Step Circle */}
                <div
                  className={`w-20 h-20 rounded-2xl flex flex-col items-center justify-center transition-all duration-300 shadow-md group-hover:scale-105 ${
                    isLast
                      ? 'bg-iq-red text-white shadow-iq-red/30'
                      : 'bg-white text-iq-navy border-2 border-slate-200 group-hover:border-iq-navy'
                  }`}
                >
                  <span className={`text-[11px] font-mono font-bold ${isLast ? 'text-red-100' : 'text-iq-red'}`}>
                    {step.step}
                  </span>
                  <div className="mt-1">
                    {getStepIcon(step.icon)}
                  </div>
                </div>

                {/* Content Card */}
                <div className="mt-5 bg-white p-5 rounded-xl border border-slate-200/80 shadow-sm w-full h-full flex flex-col justify-between group-hover:shadow-md transition-shadow">
                  <div>
                    <h4 className="text-base font-extrabold text-iq-navy">
                      {step.title}
                    </h4>
                    <div className="text-xs font-semibold text-iq-red mt-0.5">
                      {step.tagline}
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed mt-2">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Timeline (Vertical) */}
        <div className="md:hidden space-y-4 relative pl-6 border-l-2 border-iq-navy/20 ml-3">
          {APPLICATION_STEPS.map((step, idx) => {
            const isLast = idx === APPLICATION_STEPS.length - 1;
            return (
              <div key={step.step} className="relative group">
                {/* Node pin */}
                <div
                  className={`absolute -left-[35px] top-1.5 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-mono font-bold ${
                    isLast ? 'bg-iq-red text-white' : 'bg-iq-navy text-white'
                  }`}
                >
                  {step.step}
                </div>

                {/* Card */}
                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-iq-navy">{step.title}</h4>
                    <span className="text-[10px] font-semibold text-iq-red">{step.tagline}</span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed pt-1">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
