import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Globe2, ShieldCheck, HeartHandshake } from 'lucide-react';
import { DESTINATIONS_DATA } from '../data/siteContent';

export const DestinationsWhyChoose: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left Block: Global Destinations (6 Cols) */}
          <div className="lg:col-span-6 bg-gradient-to-br from-[#F5F8FF] to-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-md flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-iq-red uppercase tracking-wider mb-2">
                <span className="w-5 h-0.5 bg-iq-red" />
                <span>Global Destinations</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-iq-navy tracking-tight">
                Explore the World with Confidence
              </h3>

              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Discover top study destinations, renowned global academic systems, and thriving international career ecosystems.
              </p>

              {/* Landmark collage photo from design reference */}
              <div className="mt-5 rounded-xl overflow-hidden shadow-sm border border-slate-200/60 bg-white aspect-[21/9]">
                <img
                  src="/images/destinations-landmarks.png"
                  alt="World landmarks including Big Ben, Eiffel Tower, Statue of Liberty and Sydney Opera House"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Destination tags */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {DESTINATIONS_DATA.map((d) => (
                  <span
                    key={d.id}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-semibold bg-white border border-slate-200 text-slate-700 shadow-2xs"
                  >
                    <span>{d.flag}</span>
                    <span>{d.country}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200/60">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-iq-red hover:bg-iq-red-hover text-white text-xs sm:text-sm font-bold rounded-lg shadow transition-all"
              >
                <span>Explore Destinations</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Block: Why Students Choose IQ Overseas (6 Cols) */}
          <div className="lg:col-span-6 bg-gradient-to-br from-[#071B68] to-[#040F38] text-white rounded-2xl p-6 sm:p-8 shadow-xl flex flex-col justify-between relative overflow-hidden">
            {/* Ambient globe background glow */}
            <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-300 uppercase tracking-wider mb-2">
                <span className="w-5 h-0.5 bg-iq-red" />
                <span>Why Students Choose IQ Overseas</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Guidance that goes beyond admission.
              </h3>

              <p className="mt-2 text-xs sm:text-sm text-blue-100/80 leading-relaxed">
                We believe overseas education is a life-altering investment. Our mission is to walk beside you from initial course discovery until you settle in your international classroom.
              </p>

              {/* Benefit checklist with icons */}
              <div className="mt-6 space-y-3.5">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-iq-red/20 text-iq-red flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-iq-red" />
                  </div>
                  <div>
                    <h5 className="text-xs sm:text-sm font-bold text-white">Trusted & Transparent Guidance</h5>
                    <p className="text-[11px] text-blue-200/80">Ethical advice, realistic eligibility evaluations, and zero misleading promises.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-iq-red/20 text-iq-red flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-iq-red" />
                  </div>
                  <div>
                    <h5 className="text-xs sm:text-sm font-bold text-white">Personalized Support</h5>
                    <p className="text-[11px] text-blue-200/80">Tailored university lists matching your specific budget, academics, and career targets.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-iq-red/20 text-iq-red flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-iq-red" />
                  </div>
                  <div>
                    <h5 className="text-xs sm:text-sm font-bold text-white">Global Opportunities</h5>
                    <p className="text-[11px] text-blue-200/80">Broad portfolio of leading academic destinations across North America, Europe & Australasia.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-blue-200 font-medium">Headquartered in Guntur, AP</span>
              <Link
                to="/about"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-iq-red hover:text-white transition-colors"
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
