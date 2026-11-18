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
}

export const PageHero: React.FC<PageHeroProps> = ({
  title,
  highlightedWord,
  subtitle,
  badge = 'IQ Overseas Edu Consultants',
  breadcrumbs,
  onOpenConsultation
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

        {/* Content */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-blue-200 mb-3 border border-white/10">
            <span className="w-2 h-2 rounded-full bg-iq-red" />
            <span>{badge}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {title}{' '}
            {highlightedWord && (
              <span className="text-iq-red">{highlightedWord}</span>
            )}
          </h1>

          <p className="mt-3 text-sm sm:text-base text-blue-100/90 leading-relaxed max-w-2xl">
            {subtitle}
          </p>

          {onOpenConsultation && (
            <div className="mt-6 flex items-center gap-3">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-iq-red hover:bg-iq-red-hover text-white text-xs sm:text-sm font-bold rounded-full shadow-lg shadow-iq-red/30 transition-all transform hover:-translate-y-0.5"
              >
                <span>Get Expert Guidance</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
