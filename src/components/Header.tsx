import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Search,
  MessageSquare,
  ArrowRight,
  GraduationCap,
  School,
  BookOpenCheck,
  ShieldCheck,
  Globe2,
  Sparkles
} from 'lucide-react';
import {
  BRAND_INFO,
  SERVICES_DATA,
  MASTERS_DROPDOWN,
  BACHELORS_DROPDOWN,
  TRAINING_DROPDOWN
} from '../data/siteContent';

interface HeaderProps {
  onOpenConsultation: () => void;
  onOpenSearch?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenConsultation, onOpenSearch }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    setMobileAccordion(null);
  }, [location.pathname]);

  const educationServices = SERVICES_DATA.filter(s => s.category === 'Overseas Education & Student Support');
  const visaServices = SERVICES_DATA.filter(s => s.category === 'Visa Consultancy Services');

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full bg-white transition-all duration-300 ${
        scrolled
          ? 'shadow-[0_4px_25px_rgba(7,27,104,0.08)] py-2 border-b border-slate-100'
          : 'py-3 border-b border-slate-100/90'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 lg:gap-4">
          
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-2 group shrink-0" aria-label="IQ Overseas Home">
            <img
              src="/images/logo.png"
              alt="IQ Overseas Edu Consultants Logo"
              className="h-10 sm:h-12 md:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </Link>

          {/* Desktop Navigation Menu - Strictly single line with whitespace-nowrap */}
          <nav className="hidden xl:flex items-center space-x-1 2xl:space-x-1.5 shrink-0" aria-label="Main Navigation">
            {/* 1. Home */}
            <Link
              to="/"
              className={`px-2.5 py-2 text-xs 2xl:text-sm font-bold transition-colors duration-200 rounded-lg relative whitespace-nowrap ${
                location.pathname === '/'
                  ? 'text-iq-navy'
                  : 'text-slate-700 hover:text-iq-navy hover:bg-slate-50'
              }`}
            >
              Home
              {location.pathname === '/' && (
                <span className="absolute bottom-0 left-2.5 right-2.5 h-0.5 bg-iq-red rounded-full" />
              )}
            </Link>

            {/* 2. About Company - single line */}
            <Link
              to="/about"
              className={`px-2.5 py-2 text-xs 2xl:text-sm font-bold transition-colors duration-200 rounded-lg relative whitespace-nowrap ${
                isActive('/about')
                  ? 'text-iq-navy'
                  : 'text-slate-700 hover:text-iq-navy hover:bg-slate-50'
              }`}
            >
              About Company
              {isActive('/about') && (
                <span className="absolute bottom-0 left-2.5 right-2.5 h-0.5 bg-iq-red rounded-full" />
              )}
            </Link>

            {/* 3. Services Dropdown - single line */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                to="/services"
                className={`inline-flex items-center gap-1 px-2.5 py-2 text-xs 2xl:text-sm font-bold transition-colors duration-200 rounded-lg relative whitespace-nowrap ${
                  isActive('/services')
                    ? 'text-iq-navy'
                    : 'text-slate-700 hover:text-iq-navy hover:bg-slate-50'
                }`}
              >
                <span>Services</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:rotate-180 group-hover:text-iq-red transition-transform duration-200" />
                {isActive('/services') && (
                  <span className="absolute bottom-0 left-2.5 right-2.5 h-0.5 bg-iq-red rounded-full" />
                )}
              </Link>

              {activeDropdown === 'services' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[580px] bg-white rounded-2xl shadow-2xl border border-slate-100 p-5 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="grid grid-cols-2 gap-5">
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-iq-navy px-2 pb-2 mb-2 border-b border-slate-100 flex items-center justify-between">
                        <span>Student Support</span>
                        <span className="text-iq-red font-mono">01–06</span>
                      </div>
                      <div className="space-y-1">
                        {educationServices.map((service) => (
                          <Link
                            key={service.id}
                            to={`/services/${service.slug}`}
                            onClick={() => setActiveDropdown(null)}
                            className="block px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-700 hover:bg-iq-navy/5 hover:text-iq-navy transition-colors"
                          >
                            <span className="text-iq-red font-semibold mr-1.5">{service.number}</span>
                            {service.title}
                          </Link>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-iq-red px-2 pb-2 mb-2 border-b border-slate-100 flex items-center justify-between">
                        <span>Visa Consultancy</span>
                        <span className="text-iq-navy font-mono">07–10</span>
                      </div>
                      <div className="space-y-1">
                        {visaServices.map((service) => (
                          <Link
                            key={service.id}
                            to={`/services/${service.slug}`}
                            onClick={() => setActiveDropdown(null)}
                            className="block px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-700 hover:bg-iq-red/5 hover:text-iq-red transition-colors"
                          >
                            <span className="text-iq-navy font-semibold mr-1.5">{service.number}</span>
                            {service.title}
                          </Link>
                        ))}
                      </div>
                      <div className="pt-3 mt-3 border-t border-slate-100">
                        <Link
                          to="/services"
                          onClick={() => setActiveDropdown(null)}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-iq-navy hover:text-iq-red px-2 transition-colors"
                        >
                          <span>Explore All 10 Services</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 4. Visa Dropdown - single line */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown('visa')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                to="/visa"
                className={`inline-flex items-center gap-1 px-2.5 py-2 text-xs 2xl:text-sm font-bold transition-colors duration-200 rounded-lg relative whitespace-nowrap ${
                  isActive('/visa')
                    ? 'text-iq-navy'
                    : 'text-slate-700 hover:text-iq-navy hover:bg-slate-50'
                }`}
              >
                <span>Visa</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:rotate-180 group-hover:text-iq-red transition-transform duration-200" />
                {isActive('/visa') && (
                  <span className="absolute bottom-0 left-2.5 right-2.5 h-0.5 bg-iq-red rounded-full" />
                )}
              </Link>

              {activeDropdown === 'visa' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-72 bg-white rounded-2xl shadow-2xl border border-slate-100 p-4 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-iq-red pb-2 mb-2 border-b border-slate-100">
                    Visa Consultation Hub
                  </div>
                  <div className="space-y-1">
                    {visaServices.map((v) => (
                      <Link
                        key={v.id}
                        to={`/services/${v.slug}`}
                        onClick={() => setActiveDropdown(null)}
                        className="block px-3 py-2 rounded-xl text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-iq-navy transition-colors"
                      >
                        <div className="font-bold flex items-center justify-between">
                          <span>{v.title}</span>
                          <span className="text-[10px] text-iq-red font-mono">{v.number}</span>
                        </div>
                        <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">{v.shortDescription}</p>
                      </Link>
                    ))}
                    <div className="pt-2 mt-2 border-t border-slate-100">
                      <Link
                        to="/visa"
                        onClick={() => setActiveDropdown(null)}
                        className="flex items-center justify-between text-xs font-bold text-iq-navy hover:text-iq-red px-2 py-1 transition-colors"
                      >
                        <span>View Visa Page</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 5. Masters Dropdown - single line */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown('masters')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                to="/masters"
                className={`inline-flex items-center gap-1 px-2.5 py-2 text-xs 2xl:text-sm font-bold transition-colors duration-200 rounded-lg relative whitespace-nowrap ${
                  isActive('/masters')
                    ? 'text-iq-navy'
                    : 'text-slate-700 hover:text-iq-navy hover:bg-slate-50'
                }`}
              >
                <span>Masters</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:rotate-180 group-hover:text-iq-red transition-transform duration-200" />
                {isActive('/masters') && (
                  <span className="absolute bottom-0 left-2.5 right-2.5 h-0.5 bg-iq-red rounded-full" />
                )}
              </Link>

              {activeDropdown === 'masters' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[740px] 2xl:w-[780px] bg-white rounded-3xl shadow-2xl border border-slate-100 p-5 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-iq-red animate-pulse" />
                      <span className="text-xs font-black uppercase tracking-wider text-iq-navy">
                        Study Destinations & Master's Programs
                      </span>
                    </div>
                    <span className="text-[11px] font-bold text-iq-red bg-red-50 px-2.5 py-0.5 rounded-full border border-red-100">
                      Postgraduate Excellence
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    {MASTERS_DROPDOWN.map((item) => (
                      <Link
                        key={item.title}
                        to={`/masters/${item.slug}`}
                        onClick={() => setActiveDropdown(null)}
                        className="p-2.5 rounded-2xl hover:bg-slate-50 border border-slate-100/90 hover:border-slate-200 hover:shadow-md transition-all duration-300 flex items-center gap-3.5 group/item bg-white"
                      >
                        {/* Destination Photo Thumbnail */}
                        <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden shrink-0 border border-slate-200/80 shadow-xs bg-slate-100 group-hover/item:scale-105 transition-transform duration-300">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover object-top"
                            loading="lazy"
                          />
                          <div className="absolute top-1 left-1 px-1.5 py-0.5 bg-black/75 backdrop-blur-xs rounded text-[9px] font-mono font-bold text-white leading-none">
                            {item.code}
                          </div>
                        </div>

                        {/* Destination Info */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-black text-iq-navy group-hover/item:text-iq-red transition-colors truncate">
                              {item.title}
                            </span>
                            <span className="text-sm shrink-0 ml-1">{item.flag}</span>
                          </div>
                          <div className="mt-1 space-y-0.5">
                            <div className="flex items-center gap-1.5 text-[10px] font-bold text-iq-navy/90 truncate">
                              <span className="w-1.5 h-1.5 rounded-full bg-iq-red shrink-0" />
                              <span className="truncate">{item.highlight1}</span>
                            </div>
                            <div className="flex items-center gap-1.5 text-[10px] text-slate-500 font-medium truncate">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                              <span className="truncate">{item.highlight2}</span>
                            </div>
                          </div>
                        </div>

                        <ArrowRight className="w-4 h-4 text-slate-300 group-hover/item:text-iq-red group-hover/item:translate-x-0.5 transition-all shrink-0" />
                      </Link>
                    ))}
                  </div>

                  <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] text-slate-500 font-medium">STEM Extensions • 1-Year & 2-Year MS • Post-Study Work Visas</span>
                    <Link
                      to="/masters"
                      onClick={() => setActiveDropdown(null)}
                      className="text-xs font-bold text-iq-navy hover:text-iq-red inline-flex items-center gap-1"
                    >
                      <span>Explore Masters Hub</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* 6. Bachelors Dropdown - single line */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown('bachelors')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                to="/bachelors"
                className={`inline-flex items-center gap-1 px-2.5 py-2 text-xs 2xl:text-sm font-bold transition-colors duration-200 rounded-lg relative whitespace-nowrap ${
                  isActive('/bachelors')
                    ? 'text-iq-navy'
                    : 'text-slate-700 hover:text-iq-navy hover:bg-slate-50'
                }`}
              >
                <span>Bachelors</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:rotate-180 group-hover:text-iq-red transition-transform duration-200" />
                {isActive('/bachelors') && (
                  <span className="absolute bottom-0 left-2.5 right-2.5 h-0.5 bg-iq-red rounded-full" />
                )}
              </Link>

              {activeDropdown === 'bachelors' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[480px] bg-white rounded-2xl shadow-2xl border border-slate-100 p-5 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-100">
                    <span className="text-xs font-bold uppercase tracking-wider text-iq-navy">
                      Undergraduate Degrees Abroad
                    </span>
                    <span className="text-[11px] font-semibold text-iq-red">
                      Direct High-School Admissions
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    {BACHELORS_DROPDOWN.map((item) => {
                      const dest = item.slug === 'overview'
                        ? '/bachelors'
                        : item.slug === 'scholarships'
                        ? '/bachelors#scholarships'
                        : `/bachelors/${item.slug.replace('bachelors-', '')}`;
                      return (
                        <Link
                          key={item.title}
                          to={dest}
                          onClick={() => setActiveDropdown(null)}
                          className="p-2.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all flex items-start gap-2 group/item"
                        >
                          {item.flag && <span className="text-base leading-none mt-0.5">{item.flag}</span>}
                          <div>
                            <div className="text-xs font-bold text-slate-800 group-hover/item:text-iq-red transition-colors">
                              {item.title}
                            </div>
                            <p className="text-[10px] text-slate-400 leading-tight mt-0.5">{item.desc}</p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>

                  <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] text-slate-500">Common App & UCAS Specialists</span>
                    <Link
                      to="/bachelors"
                      onClick={() => setActiveDropdown(null)}
                      className="text-xs font-bold text-iq-navy hover:text-iq-red inline-flex items-center gap-1"
                    >
                      <span>Explore Bachelors Page</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* 7. Training Dropdown - single line */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown('training')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                to="/training"
                className={`inline-flex items-center gap-1 px-2.5 py-2 text-xs 2xl:text-sm font-bold transition-colors duration-200 rounded-lg relative whitespace-nowrap ${
                  isActive('/training')
                    ? 'text-iq-navy'
                    : 'text-slate-700 hover:text-iq-navy hover:bg-slate-50'
                }`}
              >
                <span>Training</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:rotate-180 group-hover:text-iq-red transition-transform duration-200" />
                {isActive('/training') && (
                  <span className="absolute bottom-0 left-2.5 right-2.5 h-0.5 bg-iq-red rounded-full" />
                )}
              </Link>

              {activeDropdown === 'training' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[520px] bg-white rounded-2xl shadow-2xl border border-slate-100 p-5 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-100">
                    <span className="text-xs font-bold uppercase tracking-wider text-iq-navy">
                      Test Prep & Language Training
                    </span>
                    <span className="text-[11px] font-semibold text-emerald-600 font-mono">
                      Lab & Interactive Batches
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    {TRAINING_DROPDOWN.map((t) => {
                      const dest = t.slug === 'interview'
                        ? '/visa'
                        : `/training/${t.slug}`;
                      return (
                        <Link
                          key={t.title}
                          to={dest}
                          onClick={() => setActiveDropdown(null)}
                          className="p-2.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all group/item"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-slate-800 group-hover/item:text-iq-red transition-colors truncate">
                              {t.title}
                            </span>
                            <span className="text-[10px] font-bold text-iq-red bg-red-50 px-1.5 py-0.5 rounded shrink-0 ml-1">
                              {t.target}
                            </span>
                          </div>
                          <p className="text-[10px] text-slate-400 leading-tight mt-0.5">{t.desc}</p>
                        </Link>
                      );
                    })}
                  </div>

                  <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] text-slate-500">Certified Trainers • Authentic Material</span>
                    <Link
                      to="/training"
                      onClick={() => setActiveDropdown(null)}
                      className="text-xs font-bold text-iq-navy hover:text-iq-red inline-flex items-center gap-1"
                    >
                      <span>View Training Modules</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* 8. Success Stories - single line */}
            <Link
              to="/success-stories"
              className={`px-2.5 py-2 text-xs 2xl:text-sm font-bold transition-colors duration-200 rounded-lg relative whitespace-nowrap ${
                isActive('/success-stories')
                  ? 'text-iq-navy'
                  : 'text-slate-700 hover:text-iq-navy hover:bg-slate-50'
              }`}
            >
              Success Stories
              {isActive('/success-stories') && (
                <span className="absolute bottom-0 left-2.5 right-2.5 h-0.5 bg-iq-red rounded-full" />
              )}
            </Link>

            {/* 9. Contact Us - single line */}
            <Link
              to="/contact"
              className={`px-2.5 py-2 text-xs 2xl:text-sm font-bold transition-colors duration-200 rounded-lg relative whitespace-nowrap ${
                isActive('/contact')
                  ? 'text-iq-navy'
                  : 'text-slate-700 hover:text-iq-navy hover:bg-slate-50'
              }`}
            >
              Contact Us
              {isActive('/contact') && (
                <span className="absolute bottom-0 left-2.5 right-2.5 h-0.5 bg-iq-red rounded-full" />
              )}
            </Link>
          </nav>

          {/* Right Action: Apply Now CTA (Search button removed per request) */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Red Apply Now CTA */}
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-iq-red hover:bg-iq-red-hover rounded-full shadow-[0_4px_14px_rgba(227,6,19,0.35)] hover:shadow-[0_6px_20px_rgba(227,6,19,0.45)] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer whitespace-nowrap"
            >
              <span>Apply Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-slate-700 hover:text-iq-navy hover:bg-slate-100 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-iq-navy/30"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation with Full Dropdown Accordions */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[60px] sm:top-[70px] z-50 bg-slate-900/60 backdrop-blur-sm xl:hidden">
          <div className="bg-white h-[calc(100vh-60px)] sm:h-[calc(100vh-70px)] overflow-y-auto max-w-sm w-full ml-auto shadow-2xl p-5 flex flex-col justify-between animate-in slide-in-from-right duration-300">
            <div>
              <div className="space-y-1">
                <Link
                  to="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3.5 py-2.5 rounded-xl text-sm font-bold text-slate-800 hover:bg-slate-50"
                >
                  Home
                </Link>

                <Link
                  to="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3.5 py-2.5 rounded-xl text-sm font-bold text-slate-800 hover:bg-slate-50"
                >
                  About Company
                </Link>

                {/* Mobile Services Accordion */}
                <div>
                  <button
                    onClick={() => setMobileAccordion(mobileAccordion === 'services' ? null : 'services')}
                    className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-bold text-slate-800 hover:bg-slate-50"
                  >
                    <span>Services (10 Categories)</span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${mobileAccordion === 'services' ? 'rotate-180 text-iq-red' : ''}`} />
                  </button>
                  {mobileAccordion === 'services' && (
                    <div className="pl-4 pr-2 py-1 space-y-1 bg-slate-50/80 rounded-xl mb-1">
                      {SERVICES_DATA.map((s) => (
                        <Link
                          key={s.id}
                          to={`/services/${s.slug}`}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block py-1.5 text-xs font-medium text-slate-600 hover:text-iq-navy"
                        >
                          <span className="text-iq-red font-mono mr-1">{s.number}</span>
                          {s.title}
                        </Link>
                      ))}
                      <Link
                        to="/services"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-2 text-xs font-bold text-iq-navy hover:underline"
                      >
                        View All Services →
                      </Link>
                    </div>
                  )}
                </div>

                {/* Mobile Masters Accordion */}
                <div>
                  <button
                    onClick={() => setMobileAccordion(mobileAccordion === 'masters' ? null : 'masters')}
                    className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-bold text-slate-800 hover:bg-slate-50"
                  >
                    <span>Masters by Country</span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${mobileAccordion === 'masters' ? 'rotate-180 text-iq-red' : ''}`} />
                  </button>
                  {mobileAccordion === 'masters' && (
                    <div className="py-2 px-1 space-y-2 bg-slate-50/90 rounded-2xl mb-2">
                      <div className="space-y-2">
                        {MASTERS_DROPDOWN.map((m) => (
                          <Link
                            key={m.title}
                            to={`/masters/${m.slug}`}
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex items-center gap-3 p-2 bg-white rounded-xl border border-slate-200/90 shadow-2xs hover:border-iq-navy transition-all"
                          >
                            <div className="relative w-14 h-14 rounded-lg overflow-hidden shrink-0 border border-slate-200 shadow-2xs bg-slate-100">
                              <img
                                src={m.image}
                                alt={m.title}
                                className="w-full h-full object-cover object-top"
                                loading="lazy"
                              />
                              <span className="absolute top-0.5 left-0.5 px-1 py-0.5 bg-black/75 rounded text-[8px] font-mono font-bold text-white leading-none">
                                {m.code}
                              </span>
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between">
                                <span className="text-xs font-bold text-iq-navy truncate">{m.title}</span>
                                <span className="text-xs shrink-0 ml-1">{m.flag}</span>
                              </div>
                              <p className="text-[10px] text-iq-red font-semibold truncate mt-0.5">{m.highlight1}</p>
                              <p className="text-[10px] text-slate-500 truncate">{m.highlight2}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                      <Link
                        to="/masters"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-center py-2.5 text-xs font-bold text-iq-navy bg-white rounded-xl border border-slate-200 hover:bg-slate-100 shadow-2xs transition-colors"
                      >
                        Explore Masters Hub →
                      </Link>
                    </div>
                  )}
                </div>

                {/* Mobile Bachelors Accordion */}
                <div>
                  <button
                    onClick={() => setMobileAccordion(mobileAccordion === 'bachelors' ? null : 'bachelors')}
                    className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-bold text-slate-800 hover:bg-slate-50"
                  >
                    <span>Bachelors Abroad</span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${mobileAccordion === 'bachelors' ? 'rotate-180 text-iq-red' : ''}`} />
                  </button>
                  {mobileAccordion === 'bachelors' && (
                    <div className="pl-4 pr-2 py-1 space-y-1 bg-slate-50/80 rounded-xl mb-1">
                      {BACHELORS_DROPDOWN.map((b) => {
                        const dest = b.slug === 'overview'
                          ? '/bachelors'
                          : b.slug === 'scholarships'
                          ? '/bachelors#scholarships'
                          : `/bachelors/${b.slug.replace('bachelors-', '')}`;
                        return (
                          <Link
                            key={b.title}
                            to={dest}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block py-1.5 text-xs font-medium text-slate-600 hover:text-iq-navy"
                          >
                            {b.flag ? `${b.flag} ` : ''}{b.title}
                          </Link>
                        );
                      })}
                      <Link
                        to="/bachelors"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-2 text-xs font-bold text-iq-navy hover:underline"
                      >
                        Explore Bachelors Hub →
                      </Link>
                    </div>
                  )}
                </div>

                {/* Mobile Training Accordion */}
                <div>
                  <button
                    onClick={() => setMobileAccordion(mobileAccordion === 'training' ? null : 'training')}
                    className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-bold text-slate-800 hover:bg-slate-50"
                  >
                    <span>Training & Test Prep</span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${mobileAccordion === 'training' ? 'rotate-180 text-iq-red' : ''}`} />
                  </button>
                  {mobileAccordion === 'training' && (
                    <div className="pl-4 pr-2 py-1 space-y-1 bg-slate-50/80 rounded-xl mb-1">
                      {TRAINING_DROPDOWN.map((t) => {
                        const dest = t.slug === 'interview'
                          ? '/visa'
                          : `/training/${t.slug}`;
                        return (
                          <Link
                            key={t.title}
                            to={dest}
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex items-center justify-between py-1.5 text-xs font-medium text-slate-600 hover:text-iq-navy"
                          >
                            <span>{t.title}</span>
                            <span className="text-[10px] text-iq-red font-bold">{t.target}</span>
                          </Link>
                        );
                      })}
                      <Link
                        to="/training"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-2 text-xs font-bold text-iq-navy hover:underline"
                      >
                        Explore Training Programs →
                      </Link>
                    </div>
                  )}
                </div>

                <Link
                  to="/visa"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3.5 py-2.5 rounded-xl text-sm font-bold text-slate-800 hover:bg-slate-50"
                >
                  Visa Consultancy
                </Link>

                <Link
                  to="/success-stories"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3.5 py-2.5 rounded-xl text-sm font-bold text-slate-800 hover:bg-slate-50"
                >
                  Success Stories
                </Link>

                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3.5 py-2.5 rounded-xl text-sm font-bold text-slate-800 hover:bg-slate-50"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Mobile Drawer Bottom CTA */}
            <div className="pt-6 border-t border-slate-100 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-3 px-4 bg-iq-red hover:bg-iq-red-hover text-white text-sm font-bold rounded-xl shadow-lg flex items-center justify-center gap-2"
              >
                <span>Request Free Guidance</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-center text-[11px] text-slate-400">
                Guntur, Andhra Pradesh • Mon–Sat 9:30 AM – 6:30 PM
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
