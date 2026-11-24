import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight, Sparkles } from 'lucide-react';

interface PageHeroProps {
  title: string;
  highlightedWord?: string;
  subtitle: string;
  badge?: string;
  breadcrumbs: { label: string; path?: string }[];
  onOpenConsultation?: () => void;
  image?: string;
  imageAlt?: string;
}

export const PageHero: React.FC<PageHeroProps> = ({
  title,
  highlightedWord,
  subtitle,
  badge = 'IQ Overseas Edu Consultants',
  breadcrumbs,
  onOpenConsultation,
  image,
  imageAlt
}) => {
  return (
    <section className="relative bg-gradient-to-br from-[#040F38] via-[#071B68] to-[#0D2991] text-white py-12 sm:py-16 overflow-hidden">
      {/* Background grid watermark */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-1.5 text-xs text-blue-200/80 mb-4" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-white transition-colors">
            Home
          </Link>
          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={idx}>
              <ChevronRight className="w-3.5 h-3.5 text-blue-300/50" />
              {crumb.path ? (
                <Link to={crumb.path} className="hover:text-white transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-white font-medium">{crumb.label}</span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Content Layout */}
        <div className={`grid grid-cols-1 ${image ? 'lg:grid-cols-12 gap-8 lg:gap-12 items-center' : ''}`}>
          
          {/* Text Content */}
          <div className={image ? 'lg:col-span-7 max-w-2xl' : 'max-w-3xl'}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-blue-200 mb-3 border border-white/10">
              <span className="w-2 h-2 rounded-full bg-iq-red animate-pulse" />
              <span>{badge}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {title}{' '}
              {highlightedWord && (
                <span className="text-iq-red">{highlightedWord}</span>
              )}
            </h1>

            <p className="mt-3 text-sm sm:text-base text-blue-100/90 leading-relaxed">
              {subtitle}
            </p>

            {onOpenConsultation && (
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <button
                  onClick={onOpenConsultation}
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-iq-red hover:bg-iq-red-hover text-white text-xs sm:text-sm font-bold rounded-full shadow-lg shadow-iq-red/30 transition-all transform hover:-translate-y-0.5 cursor-pointer"
                >
                  <span>Get Expert Guidance</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="https://wa.me/916302449859"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold rounded-full border border-white/20 transition-all"
                >
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            )}
          </div>

          {/* Pictorial Representation Image Banner (when image prop provided) */}
          {image && (
            <div className="lg:col-span-5 mt-6 lg:mt-0">
              <div className="relative rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl shadow-blue-950/50 group bg-slate-900/60 max-h-[340px] sm:max-h-[380px]">
                <img
                  src={image}
                  alt={imageAlt || title}
                  className="w-full h-full object-cover object-center max-h-[340px] sm:max-h-[380px] group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#040F38]/90 via-transparent to-black/20" />
                
                {/* Bottom Overlay Badge */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-bold text-white bg-white/15 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-white/20">
                  <span className="flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-iq-red" />
                    <span>IQ Overseas Dedicated Desk</span>
                  </span>
                  <span className="text-[11px] font-mono text-blue-200">100% Verified</span>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
