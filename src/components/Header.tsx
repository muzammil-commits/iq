import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronRight, Search, Phone, MessageSquare, ArrowRight } from 'lucide-react';
import { BRAND_INFO, SERVICES_DATA } from '../data/siteContent';

interface HeaderProps {
  onOpenConsultation: () => void;
  onOpenSearch: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenConsultation, onOpenSearch }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [visaDropdownOpen, setVisaDropdownOpen] = useState(false);
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
    setServicesDropdownOpen(false);
    setVisaDropdownOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Company', path: '/about' },
    {
      name: 'Services',
      path: '/services',
      hasDropdown: true,
      type: 'services'
    },
    {
      name: 'Visa',
      path: '/visa',
      hasDropdown: true,
      type: 'visa'
    },
    { name: 'Masters', path: '/masters' },
    { name: 'Bachelors', path: '/bachelors' },
    { name: 'Training', path: '/training' },
    { name: 'Success Stories', path: '/success-stories' },
    { name: 'Contact Us', path: '/contact' }
  ];

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
          ? 'shadow-[0_4px_20px_rgba(7,27,104,0.08)] py-2.5 border-b border-slate-100'
          : 'py-3.5 border-b border-slate-100/80'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-2 group shrink-0" aria-label="IQ Overseas Home">
            <img
              src="/images/logo.png"
              alt="IQ Overseas Edu Consultants Logo"
              className="h-11 sm:h-14 md:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-1 lg:space-x-1.5" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const active = isActive(link.path);

              if (link.type === 'services') {
                return (
                  <div
                    key={link.name}
                    className="relative group"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <Link
                      to={link.path}
                      className={`inline-flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md relative ${
                        active
                          ? 'text-iq-navy font-semibold'
                          : 'text-slate-700 hover:text-iq-navy hover:bg-slate-50'
                      }`}
                    >
                      {link.name}
                      <ChevronDown
                        className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 group-hover:rotate-180 group-hover:text-iq-red ${
                          servicesDropdownOpen ? 'rotate-180 text-iq-red' : ''
                        }`}
                      />
                      {active && (
                        <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-iq-red rounded-full" />
                      )}
                    </Link>

                    {/* Services Dropdown */}
                    <div
                      className={`absolute top-full left-1/2 -translate-x-1/2 w-[540px] bg-white rounded-xl shadow-2xl border border-slate-100 p-4 transition-all duration-200 transform ${
                        servicesDropdownOpen
                          ? 'opacity-100 visible translate-y-1'
                          : 'opacity-0 invisible pointer-events-none translate-y-3'
                      }`}
                    >
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="text-[11px] font-bold uppercase tracking-wider text-iq-navy px-2 pb-2 mb-1 border-b border-slate-100">
                            Student Support (01–06)
                          </div>
                          <div className="space-y-0.5">
                            {educationServices.map((service) => (
                              <Link
                                key={service.id}
                                to={`/services/${service.slug}`}
                                className="block px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-700 hover:bg-iq-navy/5 hover:text-iq-navy transition-colors"
                              >
                                <span className="text-iq-red font-semibold mr-1.5">{service.number}</span>
                                {service.title}
                              </Link>
                            ))}
                          </div>
                        </div>

                        <div>
                          <div className="text-[11px] font-bold uppercase tracking-wider text-iq-red px-2 pb-2 mb-1 border-b border-slate-100">
                            Visa Consultancy (07–10)
                          </div>
                          <div className="space-y-0.5">
                            {visaServices.map((service) => (
                              <Link
                                key={service.id}
                                to={`/services/${service.slug}`}
                                className="block px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-700 hover:bg-iq-red/5 hover:text-iq-red transition-colors"
                              >
                                <span className="text-iq-navy font-semibold mr-1.5">{service.number}</span>
                                {service.title}
                              </Link>
                            ))}
                            <div className="pt-2 mt-2 border-t border-slate-100">
                              <Link
                                to="/services"
                                className="inline-flex items-center gap-1 text-xs font-semibold text-iq-navy hover:text-iq-red px-2 transition-colors"
                              >
                                View All 10 Services <ArrowRight className="w-3 h-3" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              if (link.type === 'visa') {
                return (
                  <div
                    key={link.name}
                    className="relative group"
                    onMouseEnter={() => setVisaDropdownOpen(true)}
                    onMouseLeave={() => setVisaDropdownOpen(false)}
                  >
                    <Link
                      to={link.path}
                      className={`inline-flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md relative ${
                        active
                          ? 'text-iq-navy font-semibold'
                          : 'text-slate-700 hover:text-iq-navy hover:bg-slate-50'
                      }`}
                    >
                      {link.name}
                      <ChevronDown
                        className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 group-hover:rotate-180 group-hover:text-iq-red ${
                          visaDropdownOpen ? 'rotate-180 text-iq-red' : ''
                        }`}
                      />
                      {active && (
                        <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-iq-red rounded-full" />
                      )}
                    </Link>

                    {/* Visa Dropdown */}
                    <div
                      className={`absolute top-full left-1/2 -translate-x-1/2 w-64 bg-white rounded-xl shadow-2xl border border-slate-100 p-3 transition-all duration-200 transform ${
                        visaDropdownOpen
                          ? 'opacity-100 visible translate-y-1'
                          : 'opacity-0 invisible pointer-events-none translate-y-3'
                      }`}
                    >
                      <div className="space-y-1">
                        {visaServices.map((v) => (
                          <Link
                            key={v.id}
                            to={`/services/${v.slug}`}
                            className="block px-3 py-2 rounded-lg text-xs font-medium text-slate-700 hover:bg-iq-navy/5 hover:text-iq-navy transition-colors"
                          >
                            <div className="font-semibold">{v.title}</div>
                            <p className="text-[11px] text-slate-400 line-clamp-1">{v.shortDescription}</p>
                          </Link>
                        ))}
                        <div className="pt-2 mt-1 border-t border-slate-100">
                          <Link
                            to="/visa"
                            className="flex items-center justify-between text-xs font-semibold text-iq-navy hover:text-iq-red px-2 py-1"
                          >
                            <span>Explore Visa Hub</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md relative whitespace-nowrap ${
                    active
                      ? 'text-iq-navy font-semibold'
                      : 'text-slate-700 hover:text-iq-navy hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                  {active && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-iq-red rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Icons & CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Quick Search Button */}
            <button
              onClick={onOpenSearch}
              className="p-2 sm:p-2.5 text-slate-600 hover:text-iq-navy hover:bg-slate-100 rounded-full transition-colors flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-iq-navy/20"
              aria-label="Search courses, services, and destinations"
              title="Search (Ctrl + K)"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Quick Call Icon (Desktop) */}
            <a
              href={`tel:${BRAND_INFO.primaryPhoneRaw}`}
              className="hidden lg:flex items-center gap-2 px-3 py-2 text-xs font-semibold text-iq-navy bg-iq-navy/5 hover:bg-iq-navy/10 rounded-full transition-colors"
              title="Call IQ Overseas Counselor"
            >
              <Phone className="w-3.5 h-3.5 text-iq-red" />
              <span>{BRAND_INFO.primaryPhone}</span>
            </a>

            {/* Red Apply Now CTA */}
            <button
              onClick={onOpenConsultation}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-iq-red hover:bg-iq-red-hover rounded-full shadow-[0_4px_14px_rgba(227,6,19,0.35)] hover:shadow-[0_6px_20px_rgba(227,6,19,0.45)] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer whitespace-nowrap"
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

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[65px] sm:top-[75px] z-50 bg-slate-900/60 backdrop-blur-sm xl:hidden">
          <div className="bg-white h-[calc(100vh-65px)] sm:h-[calc(100vh-75px)] overflow-y-auto max-w-sm w-full ml-auto shadow-2xl p-5 flex flex-col justify-between animate-in slide-in-from-right duration-300">
            <div>
              {/* Mobile Quick Action Buttons */}
              <div className="grid grid-cols-2 gap-2 mb-4 pb-4 border-b border-slate-100">
                <a
                  href={`tel:${BRAND_INFO.primaryPhoneRaw}`}
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-iq-navy/5 text-iq-navy rounded-lg text-xs font-semibold"
                >
                  <Phone className="w-3.5 h-3.5 text-iq-red" />
                  <span>Call Now</span>
                </a>
                <a
                  href={`https://wa.me/${BRAND_INFO.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(BRAND_INFO.defaultWhatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-emerald-50 text-emerald-700 rounded-lg text-xs font-semibold"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                  <span>WhatsApp</span>
                </a>
              </div>

              {/* Mobile Navigation List */}
              <nav className="space-y-1">
                {navLinks.map((link) => {
                  const active = isActive(link.path);
                  return (
                    <div key={link.name}>
                      <Link
                        to={link.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                          active
                            ? 'bg-iq-navy text-white'
                            : 'text-slate-800 hover:bg-slate-50'
                        }`}
                      >
                        <span>{link.name}</span>
                        <ChevronRight className={`w-4 h-4 ${active ? 'text-white' : 'text-slate-400'}`} />
                      </Link>
                    </div>
                  );
                })}
              </nav>

              {/* Quick Services Links inside Mobile Drawer */}
              <div className="mt-5 pt-4 border-t border-slate-100">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Popular Services
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <Link
                    to="/services/career-counselling"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-xs text-slate-600 hover:text-iq-navy p-2 bg-slate-50 rounded-md"
                  >
                    Career Counselling
                  </Link>
                  <Link
                    to="/services/study-visa-assistance"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-xs text-slate-600 hover:text-iq-navy p-2 bg-slate-50 rounded-md"
                  >
                    Study Visa Assist
                  </Link>
                  <Link
                    to="/services/application-processing"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-xs text-slate-600 hover:text-iq-navy p-2 bg-slate-50 rounded-md"
                  >
                    App Processing
                  </Link>
                  <Link
                    to="/services/student-visa"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-xs text-slate-600 hover:text-iq-navy p-2 bg-slate-50 rounded-md"
                  >
                    Student Visa
                  </Link>
                </div>
              </div>
            </div>

            {/* Mobile Drawer Bottom CTA */}
            <div className="pt-6 border-t border-slate-100 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-3 px-4 bg-iq-red hover:bg-iq-red-hover text-white text-sm font-bold rounded-xl shadow-lg shadow-iq-red/20 flex items-center justify-center gap-2"
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
