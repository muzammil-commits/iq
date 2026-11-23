import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  Compass,
  FileCheck,
  GraduationCap,
  Banknote,
  Sparkles,
  Plane,
  Luggage,
  ShieldCheck,
  ExternalLink
} from 'lucide-react';
import { SERVICES_DATA } from '../data/siteContent';

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  'career-counselling': <Compass className="w-5 h-5 text-white" />,
  'application-process': <FileCheck className="w-5 h-5 text-white" />,
  'shortlisting-universities-mock-interviews': <GraduationCap className="w-5 h-5 text-white" />,
  'financial-assistance': <Banknote className="w-5 h-5 text-white" />,
  'forex-assistance': <Sparkles className="w-5 h-5 text-white" />,
  'flight-ticket': <Plane className="w-5 h-5 text-white" />,
  'educational-loan': <Banknote className="w-5 h-5 text-white" />,
  'accommodation-assistance': <Luggage className="w-5 h-5 text-white" />,
  'travel-assistance': <Plane className="w-5 h-5 text-white" />
};

export const ServicesSection: React.FC = () => {
  // Show all 9 core overseas education and student services simultaneously
  const coreServices = SERVICES_DATA.filter((s) => s.category === 'Core Overseas Services').slice(0, 9);

  return (
    <section className="py-16 sm:py-24 bg-[#F8FAFD] border-y border-slate-200/80" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold text-iq-red uppercase tracking-wider mb-2.5">
            <span className="w-6 h-0.5 bg-iq-red" />
            <span>Complete Global Solutions</span>
            <span className="w-6 h-0.5 bg-iq-red" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-iq-navy tracking-tight leading-tight">
            Our 9 Comprehensive <span className="text-iq-red">Overseas Services</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed font-medium">
            All services visible on a single screen with pictorial representations. Click any service to explore detailed step-by-step guides, documentation checklists, and FAQs.
          </p>
        </div>

        {/* 3x3 Grand Pictorial Grid - Single Screen View */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {coreServices.map((service, index) => {
            const icon = SERVICE_ICONS[service.slug] || <Sparkles className="w-5 h-5 text-white" />;
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Image Header with Badge and Service Number */}
                <div>
                  <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent" />
                    
                    {/* Top Left: Number Badge */}
                    <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-iq-navy text-white text-xs font-black shadow-md border border-white/20">
                        Service {service.number}
                      </span>
                      {service.badge && (
                        <span className="px-2.5 py-0.5 rounded-full bg-iq-red text-white text-[10px] font-black uppercase tracking-wider shadow-sm">
                          {service.badge}
                        </span>
                      )}
                    </div>

                    {/* Bottom Left on Image: Icon & Title overlay for grand look */}
                    <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-iq-red/90 backdrop-blur-md flex items-center justify-center shadow-lg shrink-0 group-hover:bg-iq-navy transition-colors">
                        {icon}
                      </div>
                      <h3 className="text-lg sm:text-xl font-black text-white drop-shadow-md leading-tight line-clamp-1">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 sm:p-6 space-y-4">
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium line-clamp-3">
                      {service.shortDescription}
                    </p>

                    {/* Key Highlights List */}
                    <div className="space-y-2 pt-2 border-t border-slate-100">
                      <div className="text-[11px] font-extrabold text-iq-navy uppercase tracking-wider">
                        Key Inclusions:
                      </div>
                      {service.keyHighlights.slice(0, 3).map((hl, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="line-clamp-1 font-medium">{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Action Footer with Direct Link */}
                <div className="p-5 sm:p-6 pt-0">
                  <Link
                    to={`/services/${service.slug}`}
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-iq-navy group-hover:bg-iq-navy text-iq-navy group-hover:text-white hover:text-white text-xs font-black border border-slate-200 group-hover:border-iq-navy transition-all duration-300 flex items-center justify-between shadow-2xs hover:shadow-md cursor-pointer"
                  >
                    <span>Explore {service.title}</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Banner Linking to Visa Consultancy Page */}
        <div className="mt-14 bg-gradient-to-r from-iq-navy via-[#0A266E] to-iq-navy rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-blue-900/50">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-iq-red flex items-center justify-center shrink-0 shadow-md">
              <ShieldCheck className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-xs font-bold text-red-300 uppercase tracking-wider">Visa Specialized Support</div>
              <h3 className="text-lg sm:text-xl font-black">Looking for Study Visa, Visiting Visa, or PR & Work Permit?</h3>
              <p className="text-xs text-blue-200 mt-0.5">Explore our dedicated visa consultation division for embassy filings and mock interviews.</p>
            </div>
          </div>
          <Link
            to="/visa"
            className="px-6 py-3 bg-white hover:bg-iq-red text-iq-navy hover:text-white rounded-xl text-xs sm:text-sm font-black transition-all shadow-md inline-flex items-center gap-2 shrink-0"
          >
            <span>Explore Visa Page</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};
