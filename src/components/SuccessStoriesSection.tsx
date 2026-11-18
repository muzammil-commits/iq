import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ChevronLeft, ChevronRight, Quote, ArrowRight } from 'lucide-react';
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
    <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-md h-full flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-iq-red uppercase tracking-wider mb-1">
              <span className="w-4 h-0.5 bg-iq-red" />
              <span>Success Stories</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-iq-navy">
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

        {/* Testimonial Card */}
        <div className="p-4 sm:p-5 bg-[#F8FAFD] rounded-xl border border-slate-100 relative mt-4">
          <Quote className="w-8 h-8 text-iq-navy/10 absolute top-3 right-3 pointer-events-none" />

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
            {/* Student Avatar */}
            <div className="relative shrink-0">
              <img
                src={current.image}
                alt={current.name}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-iq-red shadow-sm"
              />
              <span className="absolute bottom-0 right-0 w-5 h-5 bg-iq-navy text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                ★
              </span>
            </div>

            {/* Quote and Details */}
            <div className="text-center sm:text-left space-y-1.5 flex-1">
              <div className="flex items-center justify-center sm:justify-start gap-1 text-amber-400">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                {current.story}
              </p>

              <div className="pt-2">
                <div className="text-xs font-bold text-iq-navy">{current.name}</div>
                <div className="text-[11px] text-iq-red font-medium">
                  {current.course} • {current.destination}
                </div>
                {current.university && (
                  <div className="text-[10px] text-slate-400">{current.university}</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pagination & Arrows */}
      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
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
            className="w-8 h-8 rounded-full border border-slate-200 hover:bg-iq-navy hover:text-white flex items-center justify-center transition-colors text-slate-600"
            aria-label="Previous story"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={next}
            className="w-8 h-8 rounded-full border border-slate-200 hover:bg-iq-navy hover:text-white flex items-center justify-center transition-colors text-slate-600"
            aria-label="Next story"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
