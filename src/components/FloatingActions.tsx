import React, { useState, useEffect } from 'react';
import { MessageSquare, Phone, ArrowUp, Calendar } from 'lucide-react';
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

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const message = contextMessage || BRAND_INFO.defaultWhatsappMessage;
  const whatsappUrl = `https://wa.me/${BRAND_INFO.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;

  return (
    <>
      {/* Desktop & Mobile Floating WhatsApp + Back to Top Buttons */}
      <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end gap-2.5">
        {/* Scroll To Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-iq-navy hover:bg-iq-navy-light text-white shadow-lg flex items-center justify-center transition-all transform hover:scale-110 focus:outline-none"
            aria-label="Scroll to top"
            title="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        {/* WhatsApp Floating Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white p-3 sm:px-4 sm:py-3 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] transition-all transform hover:scale-105"
          aria-label="Chat with IQ Overseas on WhatsApp"
        >
          <MessageSquare className="w-6 h-6 fill-white text-white" />
          <span className="text-xs font-bold hidden sm:inline-block pr-1">
            Chat on WhatsApp
          </span>
        </a>
      </div>

      {/* Mobile Sticky Bottom Bar (Call | WhatsApp | Enquire) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2 sm:hidden shadow-[0_-4px_15px_rgba(0,0,0,0.06)]">
        <div className="grid grid-cols-3 gap-2">
          {/* Call button */}
          <a
            href={`tel:${BRAND_INFO.primaryPhoneRaw}`}
            className="flex items-center justify-center gap-1.5 py-2 px-2 bg-iq-navy/5 text-iq-navy rounded-xl text-xs font-bold active:bg-iq-navy/10"
          >
            <Phone className="w-3.5 h-3.5 text-iq-red" />
            <span>Call</span>
          </a>

          {/* WhatsApp button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 py-2 px-2 bg-emerald-50 text-emerald-700 rounded-xl text-xs font-bold active:bg-emerald-100"
          >
            <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
            <span>WhatsApp</span>
          </a>

          {/* Enquire button */}
          <button
            onClick={onOpenConsultation}
            className="flex items-center justify-center gap-1.5 py-2 px-2 bg-iq-red text-white rounded-xl text-xs font-bold shadow-sm active:bg-iq-red-hover"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Enquire</span>
          </button>
        </div>
      </div>
    </>
  );
};
