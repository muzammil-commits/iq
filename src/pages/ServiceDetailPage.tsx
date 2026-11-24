import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  ShieldCheck,
  ChevronDown,
  HelpCircle,
  Phone,
  MessageSquare,
  Sparkles,
  ArrowLeft
} from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { SERVICES_DATA, BRAND_INFO } from '../data/siteContent';

interface ServiceDetailPageProps {
  onOpenConsultation: () => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ onOpenConsultation }) => {
  const { slug } = useParams<{ slug: string }>();
  const service = SERVICES_DATA.find(s => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <div className="w-full">
      {/* Page Hero with High-Quality Pictorial Representation */}
      <PageHero
        title={service.title}
        subtitle={service.shortDescription}
        badge={`Service ${service.number} • ${service.category}`}
        image={service.image}
        imageAlt={`IQ Overseas ${service.title}`}
        breadcrumbs={[
          { label: service.category === 'Visa Consultancy Services' ? 'Visa' : 'Services', path: service.category === 'Visa Consultancy Services' ? '/visa' : '/services' },
          { label: service.title }
        ]}
        onOpenConsultation={onOpenConsultation}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Content (8 cols) */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Overview Section with Pictorial Showcase Banner */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-5">
              {/* Service Feature Banner Image */}
              {service.image && (
                <div className="relative w-full h-56 sm:h-72 md:h-80 rounded-2xl overflow-hidden border border-slate-200 shadow-inner group">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-iq-navy/85 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-iq-red animate-pulse" />
                      <span className="text-xs sm:text-sm font-bold tracking-wide">
                        {service.title} Specialist Guidance
                      </span>
                    </div>
                    <span className="text-[11px] font-mono bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-full font-bold">
                      Service {service.number}
                    </span>
                  </div>
                </div>
              )}

              <div className="inline-flex items-center gap-2 text-xs font-bold text-iq-red uppercase tracking-wider">
                <span className="w-5 h-0.5 bg-iq-red" />
                <span>Overview & What We Provide</span>
              </div>
              <h2 className="text-2xl font-extrabold text-iq-navy">
                Comprehensive Support for {service.title}
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed">
                {service.fullDescription}
              </p>

              {/* Highlights */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 border-t border-slate-100">
                {service.keyHighlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-2.5 bg-slate-50 rounded-xl">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs font-medium text-slate-800">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* How The Process Works (3-Step Roadmap) */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-bold text-iq-red uppercase tracking-wider mb-1">
                  <span className="w-5 h-0.5 bg-iq-red" />
                  <span>Step-by-Step Procedure</span>
                </div>
                <h3 className="text-xl font-extrabold text-iq-navy">
                  How the Process Works
                </h3>
              </div>

              <div className="space-y-4">
                {service.processSteps.map((step, idx) => (
                  <div
                    key={step.step}
                    className="flex flex-col sm:flex-row items-start gap-4 p-4 rounded-xl bg-[#F8FAFD] border border-slate-100 hover:border-iq-navy/20 transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-iq-navy text-white flex items-center justify-center shrink-0 font-mono font-bold text-sm shadow">
                      {step.step}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-iq-navy">
                        {step.title}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed mt-1">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Documents & Requirements */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-4">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-bold text-iq-red uppercase tracking-wider mb-1">
                  <span className="w-5 h-0.5 bg-iq-red" />
                  <span>Checklist</span>
                </div>
                <h3 className="text-xl font-extrabold text-iq-navy">
                  Key Documents & Requirements
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  General documentation required. Specific checklists may vary by country and institution.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {service.documentsRequired.map((doc, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl border border-slate-200/80 bg-white">
                    <FileText className="w-4 h-4 text-iq-navy shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-700 font-medium">{doc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-gradient-to-br from-blue-50/70 to-white rounded-2xl p-6 sm:p-8 border border-blue-100 shadow-sm space-y-4">
              <h3 className="text-xl font-extrabold text-iq-navy">
                Key Benefits with IQ Overseas
              </h3>
              <div className="space-y-2.5">
                {service.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-iq-red shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Service FAQs */}
            {service.faqs && service.faqs.length > 0 && (
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-4">
                <h3 className="text-xl font-extrabold text-iq-navy">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-3">
                  {service.faqs.map((faq, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1.5">
                      <div className="text-xs sm:text-sm font-bold text-iq-navy flex items-center gap-2">
                        <HelpCircle className="w-4 h-4 text-iq-red shrink-0" />
                        <span>{faq.question}</span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed pl-6">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Sidebar CTA & Contact Card (4 cols) */}
          <div className="lg:col-span-4 space-y-6 sticky top-24">
            
            {/* Consultation Booking Widget */}
            <div className="bg-[#071B68] text-white rounded-2xl p-6 shadow-xl border border-iq-navy-light/40 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 rounded-full text-xs font-semibold text-blue-200">
                <Sparkles className="w-3.5 h-3.5 text-iq-red" />
                <span>Expert Assistance</span>
              </div>
              <h4 className="text-xl font-extrabold text-white">
                Ready for {service.title}?
              </h4>
              <p className="text-xs text-blue-100/80 leading-relaxed">
                Connect with our dedicated counselors in Guntur for personalized evaluation and immediate application processing.
              </p>

              <button
                onClick={onOpenConsultation}
                className="w-full py-3 px-4 bg-iq-red hover:bg-iq-red-hover text-white text-xs sm:text-sm font-bold rounded-xl shadow transition-colors flex items-center justify-center gap-2"
              >
                <span>Get Expert Guidance</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="pt-3 border-t border-white/10 space-y-2 text-xs text-blue-100">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <a href={`tel:${BRAND_INFO.primaryPhoneRaw}`} className="hover:underline">
                    {BRAND_INFO.primaryPhone}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                  <a
                    href={`https://wa.me/${BRAND_INFO.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hello IQ Overseas, I am interested in ${service.title}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Other Services Navigation */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Other Services
              </div>
              <div className="space-y-1">
                {SERVICES_DATA.filter(s => s.id !== service.id).slice(0, 6).map((other) => (
                  <Link
                    key={other.id}
                    to={`/services/${other.slug}`}
                    className="flex items-center justify-between p-2 rounded-lg text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-iq-navy transition-colors"
                  >
                    <span className="truncate">{other.title}</span>
                    <span className="text-[10px] text-iq-red font-mono font-bold">
                      {other.number}
                    </span>
                  </Link>
                ))}
              </div>

              <div className="pt-2 border-t border-slate-100">
                <Link
                  to="/services"
                  className="text-xs font-bold text-iq-navy hover:text-iq-red flex items-center gap-1"
                >
                  <ArrowLeft className="w-3 h-3" />
                  <span>Back to All Services</span>
                </Link>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
