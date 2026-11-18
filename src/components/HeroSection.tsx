import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Headphones,
  GraduationCap,
  Briefcase,
  ShieldCheck,
  Users,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Plane
} from 'lucide-react';
import { HERO_SLIDES } from '../data/siteContent';

interface HeroSectionProps {
  onOpenConsultation: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenConsultation }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Autoplay every 5.5s, pause on hover/interaction
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  // Mobile swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) {
      nextSlide();
    } else if (distance < -50) {
      prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const slide = HERO_SLIDES[currentSlide];

  return (
    <section
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#F5F8FF] via-white to-[#F3F5FA] border-b border-slate-100"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-label="IQ Overseas Hero Carousel"
    >
      {/* Decorative background grid and ambient lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(#071b68_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-red-100/30 rounded-full blur-3xl pointer-events-none" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center min-h-[520px] lg:min-h-[580px]">
          
          {/* Left Column: Editorial & Copy */}
          <div className="lg:col-span-6 xl:col-span-6 z-10 space-y-5 sm:space-y-6 text-center lg:text-left">
            
            {/* Category / Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-iq-navy/5 border border-iq-navy/10 text-iq-navy text-xs sm:text-sm font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-iq-red animate-pulse" />
              <span>{slide.category}</span>
              <span className="text-slate-300">|</span>
              <span className="text-slate-600 font-normal">IQ Overseas Guntur</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] xl:text-[50px] font-extrabold text-iq-navy tracking-tight leading-[1.12]">
              {slide.title}{' '}
              <span className="text-iq-red relative inline-block">
                {slide.highlightedText}
                <svg
                  className="absolute -bottom-1 left-0 w-full h-2.5 text-iq-red/20 -z-10"
                  viewBox="0 0 100 20"
                  preserveAspectRatio="none"
                >
                  <path d="M0,15 Q50,0 100,15" stroke="currentColor" strokeWidth="6" fill="none" />
                </svg>
              </span>
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              {slide.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <Link
                to={slide.primaryCtaLink}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm sm:text-base font-bold text-white bg-iq-red hover:bg-iq-red-hover rounded-full shadow-[0_6px_20px_rgba(227,6,19,0.35)] hover:shadow-[0_8px_25px_rgba(227,6,19,0.5)] transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>{slide.primaryCtaText}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-bold text-iq-navy bg-white hover:bg-slate-50 border-2 border-iq-navy/20 hover:border-iq-navy rounded-full shadow-sm hover:shadow transition-all duration-300"
              >
                <Headphones className="w-4 h-4 text-iq-red" />
                <span>{slide.secondaryCtaText}</span>
              </button>
            </div>

            {/* Quick Metrics / Guarantees */}
            <div className="pt-3 grid grid-cols-3 gap-2 border-t border-slate-200/80 text-left max-w-md mx-auto lg:mx-0">
              <div className="p-2">
                <div className="text-xs font-bold text-iq-navy">100% Focused</div>
                <div className="text-[11px] text-slate-500">Student First</div>
              </div>
              <div className="p-2 border-x border-slate-200">
                <div className="text-xs font-bold text-iq-navy">Global Reach</div>
                <div className="text-[11px] text-slate-500">Top Destinations</div>
              </div>
              <div className="p-2">
                <div className="text-xs font-bold text-iq-navy">End-to-End</div>
                <div className="text-[11px] text-slate-500">From Profile to Visa</div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visuals */}
          <div className="lg:col-span-6 xl:col-span-6 relative">
            
            {/* Desktop Composition (Large wide visual with animated cards) */}
            <div className="hidden lg:block relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white group">
              {/* Animated flight streak line */}
              <div className="absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/80 to-transparent z-20 animate-pulse pointer-events-none" />

              {/* The high-res desktop hero graphic from image copy 3.png */}
              <div className="relative overflow-hidden aspect-[2169/1200] max-h-[460px]">
                <img
                  src="/images/hero-desktop.png"
                  alt="IQ Overseas Student and Global Education"
                  className="w-full h-full object-cover object-center transform group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                />

                {/* Subtle gradient vignette to blend */}
                <div className="absolute inset-0 bg-gradient-to-t from-iq-navy/30 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Information Cards as specified in the prompt & reference */}
              
              {/* Floating Card 1: Global Universities (Top Right) */}
              <div className="absolute top-4 right-4 z-20 bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-xl shadow-lg border border-slate-100 flex items-center gap-3 animate-float-slow transition-transform hover:scale-105">
                <div className="w-8 h-8 rounded-lg bg-iq-navy text-white flex items-center justify-center shrink-0">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-iq-navy">Global Universities</div>
                  <div className="text-[10px] text-slate-500">World-ranked programs</div>
                </div>
              </div>

              {/* Floating Card 2: Career Guidance (Right Center) */}
              <div className="absolute top-24 right-4 z-20 bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-xl shadow-lg border border-slate-100 flex items-center gap-3 animate-float-delayed transition-transform hover:scale-105">
                <div className="w-8 h-8 rounded-lg bg-iq-red text-white flex items-center justify-center shrink-0">
                  <Briefcase className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-iq-navy">Career Guidance</div>
                  <div className="text-[10px] text-slate-500">Profile & ROI roadmap</div>
                </div>
              </div>

              {/* Floating Card 3: Visa Assistance (Lower Right) */}
              <div className="absolute top-44 right-4 z-20 bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-xl shadow-lg border border-slate-100 flex items-center gap-3 animate-float-slow transition-transform hover:scale-105">
                <div className="w-8 h-8 rounded-lg bg-iq-navy text-white flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4 text-emerald-300" />
                </div>
                <div>
                  <div className="text-xs font-bold text-iq-navy">Visa Assistance</div>
                  <div className="text-[10px] text-slate-500">Filing & mock interviews</div>
                </div>
              </div>

              {/* Floating Card 4: Student Support (Bottom Right) */}
              <div className="absolute bottom-4 right-4 z-20 bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-xl shadow-lg border border-slate-100 flex items-center gap-3 animate-float-delayed transition-transform hover:scale-105">
                <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-iq-navy">Student Support</div>
                  <div className="text-[10px] text-slate-500">Pre & post departure</div>
                </div>
              </div>

              {/* Subtle animated airplane badge */}
              <div className="absolute bottom-4 left-4 z-20 bg-iq-navy/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-2 shadow-md">
                <Plane className="w-3.5 h-3.5 text-iq-red animate-bounce" />
                <span>Guntur to Global Campuses</span>
              </div>
            </div>

            {/* Mobile Composition (Using image copy 4.png with bright crisp look and responsive vertical order) */}
            <div className="lg:hidden relative rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-white mt-2">
              <div className="relative aspect-[3/4] max-h-[460px] overflow-hidden">
                <img
                  src="/images/hero-mobile.png"
                  alt="IQ Overseas Student Hero Mobile"
                  className="w-full h-full object-cover object-top"
                />
                
                {/* Bright atmospheric overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-iq-navy/80 via-transparent to-transparent" />
                
                {/* Mobile Floating badges */}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1.5 rounded-lg text-[11px] font-bold text-iq-navy shadow flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5 text-iq-red" />
                  <span>Masters & Bachelors</span>
                </div>

                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2.5 py-1.5 rounded-lg text-[11px] font-bold text-iq-navy shadow flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Visa Guidance</span>
                </div>

                {/* Mobile Bottom Badge */}
                <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md p-2.5 rounded-xl shadow-lg border border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-iq-navy text-white flex items-center justify-center text-xs font-bold">
                      IQ
                    </div>
                    <div>
                      <div className="text-xs font-bold text-iq-navy">100% Dedicated Support</div>
                      <div className="text-[10px] text-slate-500">Admissions • Visas • Travel</div>
                    </div>
                  </div>
                  <button
                    onClick={onOpenConsultation}
                    className="px-3 py-1.5 bg-iq-red text-white text-xs font-bold rounded-lg shadow"
                  >
                    Enquire
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Carousel Controls & Indicators */}
        <div className="mt-8 pt-4 flex items-center justify-between border-t border-slate-200/60">
          {/* Dots Indicator */}
          <div className="flex items-center gap-2">
            {HERO_SLIDES.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentSlide === idx
                    ? 'w-8 bg-iq-red shadow-[0_0_10px_rgba(227,6,19,0.5)]'
                    : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
            <span className="text-xs text-slate-400 ml-2 font-medium">
              0{currentSlide + 1} / 0{HERO_SLIDES.length}
            </span>
          </div>

          {/* Arrow Buttons (Desktop & Tablet) */}
          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              className="w-9 h-9 rounded-full bg-white hover:bg-iq-navy hover:text-white text-slate-700 border border-slate-200 flex items-center justify-center transition-colors shadow-sm focus:outline-none"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextSlide}
              className="w-9 h-9 rounded-full bg-white hover:bg-iq-navy hover:text-white text-slate-700 border border-slate-200 flex items-center justify-center transition-colors shadow-sm focus:outline-none"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
