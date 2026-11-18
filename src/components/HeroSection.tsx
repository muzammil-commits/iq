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
      className="relative w-full overflow-hidden min-h-[580px] lg:min-h-[640px] xl:min-h-[680px] flex flex-col justify-between border-b border-slate-100"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-label="IQ Overseas Hero Section"
    >
      {/* 
        DESKTOP HERO FULL BACKGROUND (image copy 3.png)
        The user explicitly requested:
        "in the hero section pic set the baground like text baground hero setion baground - C:\Users\muzam\Desktop\IQ\image copy 3.png - et this picin desktop view in ghe hero setion and"
      */}
      <div className="hidden lg:block absolute inset-0 z-0">
        <img
          src="/images/hero-desktop.png"
          alt="IQ Overseas Hero Background Banner"
          className="w-full h-full object-cover object-right 2xl:object-center filter brightness-[1.02]"
        />
        {/* Soft elegant gradient on the left so the text sits on top of the sky while keeping the sky & plane visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent w-full lg:w-[62%] 2xl:w-[55%] pointer-events-none" />
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* 
        MOBILE HERO FULL BACKGROUND (image copy 4.png)
        The user explicitly requested:
        "C:\Users\muzam\Desktop\IQ\image copy 4.png - this pic in ghe mobile view hero section with animgted , in ghe etxt bagroound and"
      */}
      <div className="lg:hidden absolute inset-0 z-0">
        <img
          src="/images/hero-mobile.png"
          alt="IQ Overseas Mobile Hero Background"
          className="w-full h-full object-cover object-top filter brightness-[1.05]"
        />
        {/* Bright atmospheric gradient so text on top is 100% crisp and readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/85 to-white/90 pointer-events-none" />
      </div>

      {/* Main Content Container Layer */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-6 w-full relative z-10 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Heading, Subtitle & CTAs directly on top of the background */}
          <div className="lg:col-span-7 xl:col-span-6 space-y-5 sm:space-y-6 text-center lg:text-left">
            
            {/* Category Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/90 shadow-xs text-iq-navy text-xs sm:text-sm font-bold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-iq-red animate-pulse" />
              <span>{slide.category}</span>
              <span className="text-slate-300">|</span>
              <span className="text-slate-600 font-semibold">IQ Overseas Guntur</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[54px] font-black text-iq-navy tracking-tight leading-[1.12]">
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
            <p className="text-sm sm:text-base md:text-lg text-slate-700 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
              {slide.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <Link
                to={slide.primaryCtaLink}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm sm:text-base font-extrabold text-white bg-iq-red hover:bg-iq-red-hover rounded-full shadow-[0_8px_25px_rgba(227,6,19,0.35)] hover:shadow-[0_12px_32px_rgba(227,6,19,0.45)] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>{slide.primaryCtaText}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm sm:text-base font-bold text-iq-navy bg-white/95 hover:bg-white border-2 border-iq-navy/25 hover:border-iq-navy rounded-full shadow-xs hover:shadow transition-all duration-300 cursor-pointer"
              >
                <Headphones className="w-4 h-4 text-iq-red" />
                <span>{slide.secondaryCtaText}</span>
              </button>
            </div>

            {/* Trust Highlights below CTAs */}
            <div className="pt-4 grid grid-cols-3 gap-3 border-t border-slate-300/60 text-left max-w-md mx-auto lg:mx-0">
              <div className="bg-white/85 backdrop-blur-md p-2.5 rounded-2xl border border-slate-200/80 shadow-2xs">
                <div className="text-xs font-bold text-iq-navy">100% Focused</div>
                <div className="text-[11px] text-slate-500">Student First</div>
              </div>
              <div className="bg-white/85 backdrop-blur-md p-2.5 rounded-2xl border border-slate-200/80 shadow-2xs">
                <div className="text-xs font-bold text-iq-navy">Global Reach</div>
                <div className="text-[11px] text-slate-500">Tier-1 Countries</div>
              </div>
              <div className="bg-white/85 backdrop-blur-md p-2.5 rounded-2xl border border-slate-200/80 shadow-2xs">
                <div className="text-xs font-bold text-iq-navy">Full Support</div>
                <div className="text-[11px] text-slate-500">Profile to Visa</div>
              </div>
            </div>

          </div>

          {/* 
            Right Column: Layered Interactive Floating Cards
            They float right over the student and globe visual of image copy 3.png in the background!
          */}
          <div className="lg:col-span-5 xl:col-span-6 relative min-h-[380px] lg:min-h-[480px] pointer-events-none">
            
            {/* Desktop Floating Cards overlaid onto background image */}
            <div className="hidden lg:block w-full h-full relative pointer-events-auto">
              
              {/* Card 1: Global Universities (Top Right) */}
              <div className="absolute top-2 right-4 2xl:right-8 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 animate-float-slow transition-transform hover:scale-105">
                <div className="w-10 h-10 rounded-xl bg-iq-navy text-white flex items-center justify-center shrink-0 shadow-xs">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs font-extrabold text-iq-navy">Global Universities</div>
                  <div className="text-[10px] text-slate-500 font-medium">World-ranked programs</div>
                </div>
              </div>

              {/* Card 2: Career Guidance (Upper Right Center) */}
              <div className="absolute top-28 right-4 2xl:right-8 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 animate-float-delayed transition-transform hover:scale-105">
                <div className="w-10 h-10 rounded-xl bg-iq-red text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Briefcase className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs font-extrabold text-iq-navy">Career Guidance</div>
                  <div className="text-[10px] text-slate-500 font-medium">Profile & ROI roadmap</div>
                </div>
              </div>

              {/* Card 3: Visa Assistance (Lower Right Center) */}
              <div className="absolute top-56 right-4 2xl:right-8 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 animate-float-slow transition-transform hover:scale-105">
                <div className="w-10 h-10 rounded-xl bg-iq-navy text-white flex items-center justify-center shrink-0 shadow-xs">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <div className="text-xs font-extrabold text-iq-navy">Visa Assistance</div>
                  <div className="text-[10px] text-slate-500 font-medium">Filing & mock interviews</div>
                </div>
              </div>

              {/* Card 4: Student Support (Bottom Right) */}
              <div className="absolute bottom-4 right-4 2xl:right-8 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 animate-float-delayed transition-transform hover:scale-105">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs font-extrabold text-iq-navy">Student Support</div>
                  <div className="text-[10px] text-slate-500 font-medium">Pre & post departure</div>
                </div>
              </div>

              {/* Bottom Badge: Guntur to Global Campuses */}
              <div className="absolute bottom-4 left-6 bg-iq-navy/95 backdrop-blur-md text-white px-4 py-2.5 rounded-2xl text-xs font-bold flex items-center gap-2.5 shadow-xl border border-white/20">
                <Plane className="w-4 h-4 text-iq-red animate-pulse" />
                <span>Guntur to Global Campuses</span>
              </div>
            </div>

            {/* Mobile View Floating Badges */}
            <div className="lg:hidden flex flex-wrap items-center justify-center gap-2 pt-2 pointer-events-auto">
              <div className="bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl text-xs font-bold text-iq-navy shadow-md flex items-center gap-1.5 border border-slate-200">
                <GraduationCap className="w-4 h-4 text-iq-red" />
                <span>Masters & Bachelors</span>
              </div>
              <div className="bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl text-xs font-bold text-iq-navy shadow-md flex items-center gap-1.5 border border-slate-200">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Visa Guidance</span>
              </div>
              <div className="bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl text-xs font-bold text-iq-navy shadow-md flex items-center gap-1.5 border border-slate-200">
                <Users className="w-4 h-4 text-blue-600" />
                <span>100% Student Care</span>
              </div>
            </div>

          </div>

        </div>

        {/* Carousel Slide Indicators */}
        <div className="mt-8 pt-4 flex items-center justify-between border-t border-slate-300/40">
          <div className="flex items-center gap-2">
            {HERO_SLIDES.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentSlide === idx
                    ? 'w-8 bg-iq-red shadow-[0_0_8px_rgba(227,6,19,0.5)]'
                    : 'w-2 bg-slate-400 hover:bg-slate-600'
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
            <span className="text-xs text-slate-600 ml-2 font-mono font-bold">
              0{currentSlide + 1} / 0{HERO_SLIDES.length}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              className="w-8 h-8 rounded-full bg-white/90 hover:bg-iq-navy hover:text-white text-slate-700 border border-slate-300 flex items-center justify-center transition-colors shadow-xs"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextSlide}
              className="w-8 h-8 rounded-full bg-white/90 hover:bg-iq-navy hover:text-white text-slate-700 border border-slate-300 flex items-center justify-center transition-colors shadow-xs"
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
