import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS_DATA } from '../data/siteContent';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-md h-full flex flex-col justify-between">
      <div>
        <div className="mb-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-iq-red uppercase tracking-wider mb-1">
            <span className="w-4 h-0.5 bg-iq-red" />
            <span>Got Questions?</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-iq-navy">
            Frequently Asked Questions
          </h3>
        </div>

        {/* Accordion list */}
        <div className="space-y-2.5 mt-4">
          {FAQS_DATA.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.id}
                className="border border-slate-200/80 rounded-xl overflow-hidden transition-all duration-200 bg-white"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-3.5 text-left flex items-center justify-between gap-3 hover:bg-slate-50 transition-colors focus:outline-none"
                >
                  <span className="text-xs sm:text-sm font-bold text-iq-navy">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-iq-red' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="p-3.5 pt-0 text-xs text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500 flex items-center justify-between">
        <span>Have a unique question?</span>
        <a href="#contact" className="text-iq-red font-bold hover:underline">
          Ask our counselors
        </a>
      </div>
    </div>
  );
};
