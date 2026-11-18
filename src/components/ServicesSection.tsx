import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  Compass,
  FileCheck,
  Banknote,
  Luggage,
  GraduationCap,
  Plane,
  Briefcase,
  BookOpen,
  Camera,
  UserPlus
} from 'lucide-react';
import { SERVICES_DATA } from '../data/siteContent';
import { ServiceItem } from '../types';

export const ServicesSection: React.FC = () => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(SERVICES_DATA[0].id);
  const [activeCategory, setActiveCategory] = useState<'All' | 'Education' | 'Visa'>('All');
  const [mobileExpandedId, setMobileExpandedId] = useState<string | null>(SERVICES_DATA[0].id);

  const selectedService: ServiceItem = SERVICES_DATA.find(s => s.id === selectedServiceId) || SERVICES_DATA[0];

  const educationServices = SERVICES_DATA.filter(s => s.category === 'Overseas Education & Student Support');
  const visaServices = SERVICES_DATA.filter(s => s.category === 'Visa Consultancy Services');

  const filteredServices = activeCategory === 'All'
    ? SERVICES_DATA
    : activeCategory === 'Education'
    ? educationServices
    : visaServices;

  const getServiceIcon = (name: string, active: boolean) => {
    const cls = `w-4 h-4 ${active ? 'text-white' : 'text-iq-navy group-hover:text-iq-red'}`;
    switch (name) {
      case 'Compass': return <Compass className={cls} />;
      case 'FileCheck': return <FileCheck className={cls} />;
      case 'Banknote': return <Banknote className={cls} />;
      case 'Luggage': return <Luggage className={cls} />;
      case 'GraduationCap': return <GraduationCap className={cls} />;
      case 'Plane': return <Plane className={cls} />;
      case 'Briefcase': return <Briefcase className={cls} />;
      case 'BookOpen': return <BookOpen className={cls} />;
      case 'Camera': return <Camera className={cls} />;
      case 'UserPlus': return <UserPlus className={cls} />;
      default: return <Sparkles className={cls} />;
    }
  };

  return (
    <section className="py-14 sm:py-20 bg-[#F8FAFD] border-y border-slate-200/70" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-iq-red uppercase tracking-wider mb-2">
            <span className="w-6 h-0.5 bg-iq-red" />
            <span>Our Services</span>
            <span className="w-6 h-0.5 bg-iq-red" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-iq-navy tracking-tight">
            Complete Support for Your <span className="text-iq-red">Global Journey</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            From career planning to university applications, visas and travel preparation, we support you throughout your overseas journey.
          </p>

          {/* Filter Pills */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <button
              onClick={() => setActiveCategory('All')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                activeCategory === 'All'
                  ? 'bg-iq-navy text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              All 10 Services
            </button>
            <button
              onClick={() => setActiveCategory('Education')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                activeCategory === 'Education'
                  ? 'bg-iq-navy text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              Overseas Education (01–06)
            </button>
            <button
              onClick={() => setActiveCategory('Visa')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                activeCategory === 'Visa'
                  ? 'bg-iq-navy text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              Visa Consultancy (07–10)
            </button>
          </div>
        </div>

        {/* Desktop Interactive Service Explorer */}
        <div className="hidden lg:grid grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Service List (5 Cols) */}
          <div className="col-span-5 bg-white rounded-2xl p-4 shadow-sm border border-slate-200/80 space-y-1.5 max-h-[620px] overflow-y-auto">
            <div className="px-3 py-2 text-xs font-bold uppercase tracking-wider text-slate-400 flex justify-between items-center">
              <span>Select Service</span>
              <span className="text-iq-navy font-semibold">{filteredServices.length} Available</span>
            </div>

            {filteredServices.map((service) => {
              const isSelected = selectedServiceId === service.id;
              return (
                <div
                  key={service.id}
                  onClick={() => setSelectedServiceId(service.id)}
                  onMouseEnter={() => setSelectedServiceId(service.id)}
                  className={`p-3 rounded-xl cursor-pointer transition-all duration-200 flex items-center justify-between border ${
                    isSelected
                      ? 'bg-iq-navy text-white border-iq-navy shadow-md translate-x-1'
                      : 'bg-slate-50/70 hover:bg-slate-100 text-slate-800 border-transparent hover:border-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                        isSelected ? 'bg-iq-red text-white' : 'bg-white text-iq-navy border border-slate-200'
                      }`}
                    >
                      {service.number}
                    </span>
                    <div>
                      <div className="text-xs font-bold leading-tight">
                        {service.title}
                      </div>
                      <div className={`text-[10px] mt-0.5 ${isSelected ? 'text-blue-200' : 'text-slate-400'}`}>
                        {service.category.includes('Visa') ? 'Visa Specialization' : 'Student Pathway'}
                      </div>
                    </div>
                  </div>

                  <ArrowRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected ? 'text-iq-red translate-x-0.5' : 'text-slate-300'
                    }`}
                  />
                </div>
              );
            })}
          </div>

          {/* Right Column: Large Dynamic Content Panel (7 Cols) */}
          <div className="col-span-7 bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-200/80 relative overflow-hidden transition-all duration-300">
            {/* Visual Header of the Selected Service */}
            <div className="flex flex-col sm:flex-row items-start justify-between gap-4 pb-6 border-b border-slate-100">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-iq-red/10 text-iq-red rounded-full text-xs font-bold mb-2">
                  <span>Service {selectedService.number}</span>
                  <span>•</span>
                  <span>{selectedService.category}</span>
                </div>
                <h3 className="text-2xl font-extrabold text-iq-navy">
                  {selectedService.title}
                </h3>
              </div>

              <Link
                to={`/services/${selectedService.slug}`}
                className="inline-flex items-center gap-2 px-4 py-2 bg-iq-red hover:bg-iq-red-hover text-white text-xs font-bold rounded-lg shadow transition-colors shrink-0"
              >
                <span>Full Details & FAQs</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Service Image Preview + Description */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 my-6 items-center">
              <div className="md:col-span-5 rounded-xl overflow-hidden shadow-md border border-slate-100 aspect-[4/3] bg-slate-100">
                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div className="md:col-span-7 space-y-3">
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                  {selectedService.shortDescription}
                </p>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {selectedService.fullDescription}
                </p>
              </div>
            </div>

            {/* Key Highlights */}
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 mb-6">
              <div className="text-xs font-bold text-iq-navy uppercase tracking-wider mb-2.5">
                Service Highlights
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedService.keyHighlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 3 Step Process Preview */}
            <div className="grid grid-cols-3 gap-3 pt-2 border-t border-slate-100">
              {selectedService.processSteps.map((step) => (
                <div key={step.step} className="p-2.5 bg-white border border-slate-200/80 rounded-lg">
                  <div className="text-[10px] font-mono font-bold text-iq-red">Step {step.step}</div>
                  <div className="text-xs font-bold text-iq-navy truncate">{step.title}</div>
                  <p className="text-[10px] text-slate-500 line-clamp-2 mt-0.5">{step.description}</p>
                </div>
              ))}
            </div>

            {/* Action Bar */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500">
                Ready to begin your application?
              </span>
              <div className="flex items-center gap-3">
                <Link
                  to={`/services/${selectedService.slug}`}
                  className="text-xs font-bold text-iq-navy hover:text-iq-red transition-colors"
                >
                  Learn Process & Docs →
                </Link>
                <Link
                  to="/contact"
                  className="px-4 py-2 bg-iq-navy hover:bg-iq-navy-light text-white text-xs font-bold rounded-lg shadow transition-colors"
                >
                  Book Consultation
                </Link>
              </div>
            </div>

          </div>

        </div>

        {/* Mobile Accordion Cards View */}
        <div className="lg:hidden space-y-3">
          {filteredServices.map((service) => {
            const isExpanded = mobileExpandedId === service.id;
            return (
              <div
                key={service.id}
                className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden transition-all"
              >
                <button
                  onClick={() => setMobileExpandedId(isExpanded ? null : service.id)}
                  className="w-full p-4 flex items-center justify-between text-left focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold px-2 py-0.5 bg-iq-navy text-white rounded">
                      {service.number}
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-iq-navy">{service.title}</h4>
                      <p className="text-[11px] text-slate-400">{service.category}</p>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                      isExpanded ? 'rotate-180 text-iq-red' : ''
                    }`}
                  />
                </button>

                {isExpanded && (
                  <div className="p-4 pt-0 border-t border-slate-100 space-y-3 bg-slate-50/50 animate-in fade-in duration-200">
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {service.shortDescription}
                    </p>

                    <div className="space-y-1.5 pt-1">
                      {service.keyHighlights.slice(0, 3).map((h, i) => (
                        <div key={i} className="flex items-start gap-2 text-[11px] text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-3 flex items-center gap-2">
                      <Link
                        to={`/services/${service.slug}`}
                        className="flex-1 py-2 text-center bg-iq-red text-white text-xs font-bold rounded-lg shadow"
                      >
                        Explore Service
                      </Link>
                      <Link
                        to="/contact"
                        className="px-3 py-2 bg-white text-iq-navy border border-slate-200 text-xs font-bold rounded-lg"
                      >
                        Enquire
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
