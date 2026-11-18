import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Globe2, ShieldCheck, HeartHandshake, Sparkles } from 'lucide-react';
import { DESTINATIONS_DATA } from '../data/siteContent';

export const DestinationsWhyChoose: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left Block: Global Destinations with image copy 18.png (6 Cols) */}
          <div className="lg:col-span-6 bg-gradient-to-br from-[#F5F8FF] via-white to-[#F0F4FF] rounded-3xl p-6 sm:p-9 border border-slate-200/80 shadow-lg flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-iq-red uppercase tracking-wider mb-2">
                <span className="w-6 h-0.5 bg-iq-red" />
                <span>Global Destinations</span>
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-iq-navy tracking-tight leading-tight">
                Explore the World with Confidence
              </h3>

              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Discover top study destinations, renowned global academic systems, and thriving international career ecosystems across North America, Europe & Australasia.
              </p>

              {/* Grand Panoramic Landmarks Image (image copy 18.png) */}
              <div className="mt-6 rounded-2xl overflow-hidden shadow-md border-2 border-white bg-slate-100 aspect-[16/9] group">
                <img
                  src="/images/destinations-landmarks-grand.png"
                  alt="World landmarks including Big Ben, Eiffel Tower, Statue of Liberty, and Sydney Opera House"
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Destination Badges */}
              <div className="mt-5 flex flex-wrap gap-2">
                {DESTINATIONS_DATA.map((d) => (
                  <span
                    key={d.id}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-white border border-slate-200 text-slate-700 shadow-2xs hover:border-iq-navy transition-colors cursor-default"
                  >
                    <span className="text-sm">{d.flag}</span>
                    <span>{d.country}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-slate-200/80 flex items-center justify-between">
              <span className="text-xs text-slate-500 font-medium">Over 500+ University Programs</span>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-iq-red hover:bg-iq-red-hover text-white text-xs sm:text-sm font-bold rounded-xl shadow transition-all"
              >
                <span>Explore Destinations</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Block: Why Students Choose IQ Overseas (6 Cols) */}
          <div className="lg:col-span-6 bg-gradient-to-br from-[#071B68] via-[#051554] to-[#030D36] text-white rounded-3xl p-6 sm:p-9 shadow-2xl flex flex-col justify-between relative overflow-hidden">
            {/* Ambient globe glow background */}
            <div className="absolute -right-16 -bottom-16 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-300 uppercase tracking-wider mb-2">
                <span className="w-6 h-0.5 bg-iq-red" />
                <span>Why Students Choose IQ Overseas</span>
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Guidance that goes beyond admission.
              </h3>

              <p className="mt-2 text-xs sm:text-sm text-blue-100/80 leading-relaxed">
                We believe overseas education is a life-altering investment. Our mission is to walk beside you from initial course discovery until you settle in your international classroom.
              </p>

              {/* Benefit checklist with grand styling */}
              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3.5 bg-white/5 p-3.5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="w-8 h-8 rounded-xl bg-iq-red/20 text-iq-red flex items-center justify-center shrink-0 shadow-xs">
                    <CheckCircle2 className="w-4 h-4 text-iq-red" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-white">Trusted & Transparent Guidance</h5>
                    <p className="text-xs text-blue-200/80 mt-0.5">Ethical advice, realistic eligibility evaluations, and zero misleading promises.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 bg-white/5 p-3.5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="w-8 h-8 rounded-xl bg-iq-red/20 text-iq-red flex items-center justify-center shrink-0 shadow-xs">
                    <CheckCircle2 className="w-4 h-4 text-iq-red" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-white">Personalized Support</h5>
                    <p className="text-xs text-blue-200/80 mt-0.5">Tailored university lists matching your specific budget, academics, and career targets.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 bg-white/5 p-3.5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="w-8 h-8 rounded-xl bg-iq-red/20 text-iq-red flex items-center justify-center shrink-0 shadow-xs">
                    <CheckCircle2 className="w-4 h-4 text-iq-red" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-white">Global Opportunities</h5>
                    <p className="text-xs text-blue-200/80 mt-0.5">Broad portfolio of leading academic destinations across North America, Europe & Australasia.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-blue-200 font-medium">Headquartered in Guntur, AP</span>
              <Link
                to="/about"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-300 hover:text-white transition-colors"
              >
                <span>Our Heritage & Values</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
