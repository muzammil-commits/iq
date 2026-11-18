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
  Plane,
  Sparkles,
  Award
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

  // Autoplay every 5.5s
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

  // Mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };
  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) nextSlide();
    else if (distance < -50) prevSlide();
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const slide = HERO_SLIDES[currentSlide];

  return (
    <section
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#EDF2FE] via-[#F6F9FE] to-white border-b border-slate-100/80"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-label="IQ Overseas Hero Section"
    >
      {/* Ambient background particles & grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#071b68_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.035] pointer-events-none" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[550px] h-[550px] bg-sky-200/25 rounded-full blur-3xl pointer-events-none" />

      {/* Main Hero Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 md:py-14 lg:py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center min-h-[500px] lg:min-h-[560px]">
          
          {/* Left Column: Heading, Subtitle & CTAs (6 Cols) */}
          <div className="lg:col-span-6 z-20 space-y-5 sm:space-y-6 text-center lg:text-left">
            
            {/* Category Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-xs text-iq-navy text-xs sm:text-sm font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-iq-red animate-pulse" />
              <span>{slide.category}</span>
              <span className="text-slate-300">|</span>
              <span className="text-slate-500 font-normal">IQ Overseas Guntur</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[45px] xl:text-[52px] font-extrabold text-iq-navy tracking-tight leading-[1.12]">
              {slide.title}{' '}
              <span className="text-iq-red relative inline-block">
                {slide.highlightedText}
                <svg
                  className="absolute -bottom-1.5 left-0 w-full h-3 text-iq-red/25 -z-10"
                  viewBox="0 0 100 20"
                  preserveAspectRatio="none"
                >
                  <path d="M0,15 Q50,0 100,15" stroke="currentColor" strokeWidth="6" fill="none" />
                </svg>
              </span>
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0 font-normal">
              {slide.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <Link
                to={slide.primaryCtaLink}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm sm:text-base font-bold text-white bg-iq-red hover:bg-iq-red-hover rounded-full shadow-[0_8px_25px_rgba(227,6,19,0.35)] hover:shadow-[0_12px_30px_rgba(227,6,19,0.45)] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>{slide.primaryCtaText}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm sm:text-base font-bold text-iq-navy bg-white hover:bg-slate-50 border-2 border-iq-navy/20 hover:border-iq-navy rounded-full shadow-xs hover:shadow transition-all duration-300 cursor-pointer"
              >
                <Headphones className="w-4 h-4 text-iq-red" />
                <span>{slide.secondaryCtaText}</span>
              </button>
            </div>

            {/* Trust Highlights below CTAs */}
            <div className="pt-4 grid grid-cols-3 gap-3 border-t border-slate-200/70 text-left max-w-md mx-auto lg:mx-0">
              <div className="bg-white/80 backdrop-blur-sm p-2 rounded-xl border border-slate-100">
                <div className="text-xs font-bold text-iq-navy">100% Focused</div>
                <div className="text-[11px] text-slate-500">Student First</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-2 rounded-xl border border-slate-100">
                <div className="text-xs font-bold text-iq-navy">Global Reach</div>
                <div className="text-[11px] text-slate-500">Tier-1 Countries</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-2 rounded-xl border border-slate-100">
                <div className="text-xs font-bold text-iq-navy">Full Support</div>
                <div className="text-[11px] text-slate-500">Profile to Visa</div>
              </div>
            </div>

          </div>

          {/* Right Column: Grand Visual Composition (6 Cols) */}
          <div className="lg:col-span-6 relative z-10">
            
            {/* Desktop Grand Composition with image copy 3.png */}
            <div className="hidden lg:block relative min-h-[480px] w-full">
              {/* Grand Background Image: Natural blending without the restrictive small box container */}
              <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl border-2 border-white bg-white group">
                <img
                  src="/images/hero-desktop.png"
                  alt="IQ Overseas Global Education Experience"
                  className="w-full h-full object-cover object-center transform group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                />

                {/* Soft gradient bottom overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-iq-navy/40 via-transparent to-transparent pointer-events-none" />

                {/* Floating Information Cards as positioned in the master design */}
                
                {/* 1. Global Universities */}
                <div className="absolute top-6 right-6 z-20 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 animate-float-slow transition-transform hover:scale-105">
                  <div className="w-9 h-9 rounded-xl bg-iq-navy text-white flex items-center justify-center shrink-0 shadow-xs">
                    <GraduationCap className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-iq-navy">Global Universities</div>
                    <div className="text-[10px] text-slate-500">World-ranked programs</div>
                  </div>
                </div>

                {/* 2. Career Guidance */}
                <div className="absolute top-28 right-6 z-20 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 animate-float-delayed transition-transform hover:scale-105">
                  <div className="w-9 h-9 rounded-xl bg-iq-red text-white flex items-center justify-center shrink-0 shadow-xs">
                    <Briefcase className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-iq-navy">Career Guidance</div>
                    <div className="text-[10px] text-slate-500">Profile & ROI roadmap</div>
                  </div>
                </div>

                {/* 3. Visa Assistance */}
                <div className="absolute top-52 right-6 z-20 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 animate-float-slow transition-transform hover:scale-105">
                  <div className="w-9 h-9 rounded-xl bg-iq-navy text-white flex items-center justify-center shrink-0 shadow-xs">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-iq-navy">Visa Assistance</div>
                    <div className="text-[10px] text-slate-500">Filing & mock interviews</div>
                  </div>
                </div>

                {/* 4. Student Support */}
                <div className="absolute bottom-6 right-6 z-20 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 animate-float-delayed transition-transform hover:scale-105">
                  <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-iq-navy">Student Support</div>
                    <div className="text-[10px] text-slate-500">Pre & post departure</div>
                  </div>
                </div>

                {/* Bottom Left Badge: Guntur to Global Campuses */}
                <div className="absolute bottom-6 left-6 z-20 bg-iq-navy/90 backdrop-blur-sm text-white px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-2 shadow-lg">
                  <Plane className="w-4 h-4 text-iq-red animate-pulse" />
                  <span>Guntur to Global Campuses</span>
                </div>
              </div>
            </div>

            {/* Mobile View with image copy 4.png with animated bright look */}
            <div className="lg:hidden relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white mt-4">
              <div className="relative aspect-[3/4] max-h-[480px] overflow-hidden">
                <img
                  src="/images/hero-mobile.png"
                  alt="IQ Overseas Student Hero Mobile"
                  className="w-full h-full object-cover object-top filter brightness-105 contrast-105"
                />

                {/* Atmospheric gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-iq-navy/85 via-transparent to-transparent pointer-events-none" />

                {/* Mobile Floating badges */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl text-xs font-bold text-iq-navy shadow-md flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4 text-iq-red" />
                  <span>Masters & Bachelors</span>
                </div>

                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl text-xs font-bold text-iq-navy shadow-md flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Visa Guidance</span>
                </div>

                {/* Mobile Bottom Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-iq-navy text-white flex items-center justify-center text-xs font-extrabold">
                      IQ
                    </div>
                    <div>
                      <div className="text-xs font-bold text-iq-navy">100% Dedicated Support</div>
                      <div className="text-[10px] text-slate-500">Admissions • Visas • Travel</div>
                    </div>
                  </div>
                  <button
                    onClick={onOpenConsultation}
                    className="px-3.5 py-1.5 bg-iq-red text-white text-xs font-bold rounded-xl shadow transition-transform active:scale-95"
                  >
                    Enquire
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Carousel Slide Indicators */}
        <div className="mt-8 pt-4 flex items-center justify-between border-t border-slate-200/50">
          <div className="flex items-center gap-2">
            {HERO_SLIDES.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentSlide === idx
                    ? 'w-8 bg-iq-red shadow-[0_0_8px_rgba(227,6,19,0.5)]'
                    : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
            <span className="text-xs text-slate-400 ml-2 font-mono font-medium">
              0{currentSlide + 1} / 0{HERO_SLIDES.length}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              className="w-8 h-8 rounded-full bg-white hover:bg-iq-navy hover:text-white text-slate-700 border border-slate-200 flex items-center justify-center transition-colors shadow-xs"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextSlide}
              className="w-8 h-8 rounded-full bg-white hover:bg-iq-navy hover:text-white text-slate-700 border border-slate-200 flex items-center justify-center transition-colors shadow-xs"
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
