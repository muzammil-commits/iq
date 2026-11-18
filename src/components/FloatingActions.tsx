import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, Phone, ArrowUp, Calendar, X, Send, Sparkles } from 'lucide-react';
import { BRAND_INFO } from '../data/siteContent';

interface FloatingActionsProps {
  onOpenConsultation: () => void;
  contextMessage?: string;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({
  onOpenConsultation,
  contextMessage
}) => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isWhatsappPopupOpen, setIsWhatsappPopupOpen] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close popup if clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
        setIsWhatsappPopupOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openWhatsappWithMessage = (msg: string) => {
    const url = `https://wa.me/${BRAND_INFO.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setIsWhatsappPopupOpen(false);
  };

  return (
    <>
      {/* Floating Action Buttons (Desktop & Tablet) */}
      <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end gap-3" ref={popupRef}>
        
        {/* WhatsApp Interactive Popup Box as requested */}
        {isWhatsappPopupOpen && (
          <div className="w-80 bg-white rounded-3xl shadow-2xl border border-slate-200/90 overflow-hidden animate-in fade-in slide-in-from-bottom-3 duration-200 mb-2">
            {/* Header */}
            <div className="bg-[#075E54] text-white p-4 relative">
              <button
                onClick={() => setIsWhatsappPopupOpen(false)}
                className="absolute top-3 right-3 text-white/80 hover:text-white p-1 rounded-full"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-white text-sm">
                  IQ
                </div>
                <div>
                  <h4 className="text-sm font-bold">IQ Overseas Support</h4>
                  <div className="flex items-center gap-1.5 text-[11px] text-emerald-200">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Online • Guntur Office</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content & Quick Prompts */}
            <div className="p-4 space-y-3 bg-[#EFEAE2]/30">
              <div className="p-3 bg-white rounded-2xl shadow-2xs text-xs text-slate-700 leading-relaxed">
                👋 Hello! How can our senior counselors assist your study abroad plans today?
              </div>

              <div className="space-y-1.5">
                <button
                  onClick={() => openWhatsappWithMessage('Hello IQ Overseas, I want to enquire about Master’s abroad.')}
                  className="w-full text-left p-2.5 bg-white hover:bg-emerald-50 text-xs font-semibold text-slate-800 rounded-xl border border-slate-200/80 transition-colors flex items-center justify-between"
                >
                  <span>🎓 Master’s Degree Guidance</span>
                  <Send className="w-3 h-3 text-emerald-600" />
                </button>

                <button
                  onClick={() => openWhatsappWithMessage('Hello IQ Overseas, I need assistance with Student Visa processing.')}
                  className="w-full text-left p-2.5 bg-white hover:bg-emerald-50 text-xs font-semibold text-slate-800 rounded-xl border border-slate-200/80 transition-colors flex items-center justify-between"
                >
                  <span>🛂 Student Visa Assistance</span>
                  <Send className="w-3 h-3 text-emerald-600" />
                </button>

                <button
                  onClick={() => openWhatsappWithMessage('Hello IQ Overseas, I want to know about IELTS/PTE coaching batches.')}
                  className="w-full text-left p-2.5 bg-white hover:bg-emerald-50 text-xs font-semibold text-slate-800 rounded-xl border border-slate-200/80 transition-colors flex items-center justify-between"
                >
                  <span>📖 IELTS / PTE Coaching</span>
                  <Send className="w-3 h-3 text-emerald-600" />
                </button>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => openWhatsappWithMessage(BRAND_INFO.defaultWhatsappMessage)}
                  className="w-full py-2.5 px-3 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold rounded-xl shadow transition-colors flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>Start WhatsApp Chat</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Scroll To Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="w-11 h-11 rounded-full bg-iq-navy hover:bg-iq-navy-light text-white shadow-xl flex items-center justify-center transition-all transform hover:scale-110 focus:outline-none"
            aria-label="Scroll to top"
            title="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        {/* Circular WhatsApp Floating Button (Text removed as requested by user) */}
        <button
          onClick={() => setIsWhatsappPopupOpen(!isWhatsappPopupOpen)}
          className="relative group w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-[0_6px_25px_rgba(37,211,102,0.45)] flex items-center justify-center transition-all transform hover:scale-110 active:scale-95 focus:outline-none"
          aria-label="Open WhatsApp Chat Popup"
          title="WhatsApp Support"
        >
          {/* Animated ripple badge */}
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-iq-red rounded-full flex items-center justify-center text-[9px] font-bold text-white border-2 border-white animate-pulse">
            1
          </span>
          <MessageSquare className="w-7 h-7 fill-white text-white" />
        </button>
      </div>

      {/* Mobile Sticky Bottom Action Bar (Call | WhatsApp | Enquire) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2 sm:hidden shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
        <div className="grid grid-cols-3 gap-2">
          {/* Call button */}
          <a
            href={`tel:${BRAND_INFO.primaryPhoneRaw}`}
            className="flex items-center justify-center gap-1.5 py-2.5 px-2 bg-iq-navy/5 text-iq-navy rounded-xl text-xs font-bold active:bg-iq-navy/10"
          >
            <Phone className="w-3.5 h-3.5 text-iq-red" />
            <span>Call</span>
          </a>

          {/* WhatsApp button */}
          <button
            onClick={() => setIsWhatsappPopupOpen(!isWhatsappPopupOpen)}
            className="flex items-center justify-center gap-1.5 py-2.5 px-2 bg-emerald-50 text-emerald-700 rounded-xl text-xs font-bold active:bg-emerald-100"
          >
            <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
            <span>WhatsApp</span>
          </button>

          {/* Enquire button */}
          <button
            onClick={onOpenConsultation}
            className="flex items-center justify-center gap-1.5 py-2.5 px-2 bg-iq-red text-white rounded-xl text-xs font-bold shadow-sm active:bg-iq-red-hover"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Enquire</span>
          </button>
        </div>
      </div>
    </>
  );
};
