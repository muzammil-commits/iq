import React, { useState } from 'react';
import { Star, Quote, ArrowRight, CheckCircle2, ChevronLeft, ChevronRight, Globe2 } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { TESTIMONIALS_DATA } from '../data/siteContent';

interface SuccessStoriesPageProps {
  onOpenConsultation: () => void;
}

export const SuccessStoriesPage: React.FC<SuccessStoriesPageProps> = ({ onOpenConsultation }) => {
  const [filterDestination, setFilterDestination] = useState('All');

  const destinations = ['All', 'United States', 'United Kingdom', 'Australia', 'Canada'];

  const filtered = filterDestination === 'All'
    ? TESTIMONIALS_DATA
    : TESTIMONIALS_DATA.filter(t => t.destination.toLowerCase() === filterDestination.toLowerCase());

  return (
    <div className="w-full">
      <PageHero
        title="Real Students."
        highlightedWord="Global Journeys."
        subtitle="Genuine experiences and inspiring admission milestones achieved by students guided by IQ Overseas Edu Consultants."
        breadcrumbs={[{ label: 'Success Stories' }]}
        onOpenConsultation={onOpenConsultation}
      />

      <section className="py-12 sm:py-16 bg-[#F8FAFD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Destination Filter */}
          <div className="flex items-center justify-center gap-2 mb-10 overflow-x-auto pb-2">
            {destinations.map((dest) => (
              <button
                key={dest}
                onClick={() => setFilterDestination(dest)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                  filterDestination === dest
                    ? 'bg-iq-navy text-white shadow'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {dest}
              </button>
            ))}
          </div>

          {/* Stories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative"
              >
                <Quote className="w-10 h-10 text-iq-navy/10 absolute top-5 right-5 pointer-events-none" />

                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-iq-red shadow-sm"
                    />
                    <div>
                      <h3 className="text-base font-bold text-iq-navy">{item.name}</h3>
                      <div className="text-xs font-semibold text-iq-red">{item.course}</div>
                      <div className="text-[11px] text-slate-500">{item.destination} {item.university && `• ${item.university}`}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-amber-400 mb-3">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                    {item.story}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1 text-emerald-600 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Verified Student Experience
                  </span>
                  <span className="font-mono text-[11px]">IQ Overseas</span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-14 bg-gradient-to-r from-iq-navy to-[#051554] rounded-2xl p-8 text-white text-center max-w-2xl mx-auto shadow-xl space-y-4">
            <h4 className="text-xl font-bold">Write Your Own Success Story</h4>
            <p className="text-xs text-blue-200">
              Take the first confident step toward your international education dreams today.
            </p>
            <button
              onClick={onOpenConsultation}
              className="px-6 py-3 bg-iq-red hover:bg-iq-red-hover text-white text-xs sm:text-sm font-bold rounded-xl shadow transition-all inline-flex items-center gap-2"
            >
              <span>Begin Your Application</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>
    </div>
  );
};
