import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ChevronLeft, ChevronRight, Quote, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/siteContent';

export const SuccessStoriesSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const current = TESTIMONIALS_DATA[currentIndex];

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xl h-full flex flex-col justify-between overflow-hidden">
      <div>
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-iq-red uppercase tracking-wider mb-1">
              <span className="w-5 h-0.5 bg-iq-red" />
              <span>Success Stories</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-iq-navy">
              Student Journeys. Global Dreams.
            </h3>
          </div>
          <Link
            to="/success-stories"
            className="text-xs font-bold text-iq-red hover:underline hidden sm:inline-flex items-center gap-1"
          >
            <span>View All</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Testimonial Quote Card */}
        <div className="p-5 bg-gradient-to-br from-blue-50/60 to-white rounded-2xl border border-blue-100/80 relative mt-2 shadow-xs">
          <Quote className="w-8 h-8 text-iq-navy/10 absolute top-4 right-4 pointer-events-none" />

          <div className="flex items-start gap-4">
            <div className="relative shrink-0">
              <img
                src={current.image}
                alt={current.name}
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-iq-red shadow-sm"
              />
              <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-iq-navy text-white text-[10px] font-bold rounded-full flex items-center justify-center border border-white">
                ★
              </span>
            </div>

            <div className="space-y-1.5 flex-1 min-w-0">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                {current.story}
              </p>

              <div className="pt-1">
                <div className="text-xs font-bold text-iq-navy">{current.name}</div>
                <div className="text-[11px] text-iq-red font-semibold">
                  {current.course} • {current.destination}
                </div>
                {current.university && (
                  <div className="text-[10px] text-slate-400">{current.university}</div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* image copy 12.png set in the empty space as requested by user */}
        <div className="mt-4 rounded-2xl overflow-hidden border border-slate-100 shadow-sm relative group bg-gradient-to-r from-pink-50/30 via-white to-blue-50/30">
          <img
            src="/images/student-testimonial-grand.png"
            alt="Student Success Thumbs Up and 5 Star Rating"
            className="w-full h-48 sm:h-52 object-cover object-center transform group-hover:scale-[1.02] transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-iq-navy/60 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs">
            <div className="flex items-center gap-1.5 font-bold">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Real Verified Placements</span>
            </div>
            <span className="text-[11px] font-mono text-amber-300">100% Genuine Guidance</span>
          </div>
        </div>
      </div>

      {/* Pagination & Arrow Controls */}
      <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          {TESTIMONIALS_DATA.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-2 rounded-full transition-all ${
                currentIndex === i ? 'w-6 bg-iq-red' : 'w-2 bg-slate-300'
              }`}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={prev}
            className="w-8 h-8 rounded-full border border-slate-200 hover:bg-iq-navy hover:text-white flex items-center justify-center transition-colors text-slate-600 shadow-2xs"
            aria-label="Previous story"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={next}
            className="w-8 h-8 rounded-full border border-slate-200 hover:bg-iq-navy hover:text-white flex items-center justify-center transition-colors text-slate-600 shadow-2xs"
            aria-label="Next story"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
