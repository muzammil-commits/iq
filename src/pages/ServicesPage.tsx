import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Search, Filter, ShieldCheck, ExternalLink } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { SERVICES_DATA } from '../data/siteContent';

interface ServicesPageProps {
  onOpenConsultation: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenConsultation }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'education' | 'visa'>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const displayedServices = SERVICES_DATA.filter(s => {
    const matchesTab = activeTab === 'all'
      ? true
      : activeTab === 'education'
      ? s.category === 'Core Overseas Services'
      : s.category === 'Visa Consultancy Services';

    const matchesSearch = !searchTerm.trim() ||
      s.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.shortDescription.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesTab && matchesSearch;
  });

  return (
    <div className="w-full">
      <PageHero
        title="Complete Services for Your"
        highlightedWord="Global Journey"
        subtitle="Comprehensive overseas services spanning Career Counselling, Application Process, University Shortlisting, Financial Assistance, Forex, Flight Booking, and Accommodations."
        breadcrumbs={[{ label: 'Services' }]}
        onOpenConsultation={onOpenConsultation}
      />

      <section className="py-12 sm:py-16 bg-[#F8FAFD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Controls: Search & Tabs */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-200">
            {/* Tabs */}
            <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
                  activeTab === 'all'
                    ? 'bg-iq-navy text-white shadow'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                All Services
              </button>
              <button
                onClick={() => setActiveTab('education')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
                  activeTab === 'education'
                    ? 'bg-iq-navy text-white shadow'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                Overseas Education (01–09)
              </button>
              <button
                onClick={() => setActiveTab('visa')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
                  activeTab === 'visa'
                    ? 'bg-iq-navy text-white shadow'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                Visa Solutions
              </button>
            </div>

            {/* Filter Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Filter services..."
                className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-iq-navy/20 focus:border-iq-navy"
              />
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {displayedServices.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  {/* Service Image */}
                  <div className="relative h-44 overflow-hidden bg-slate-100">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                    <span className="absolute top-3 left-3 bg-iq-navy text-white text-[11px] font-mono font-bold px-2.5 py-1 rounded-md shadow">
                      {service.number}
                    </span>

                    {service.badge && (
                      <span className="absolute top-3 right-3 bg-iq-red text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow">
                        {service.badge}
                      </span>
                    )}

                    <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-semibold truncate">
                      {service.category}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 sm:p-6 space-y-3">
                    <h3 className="text-lg font-bold text-iq-navy group-hover:text-iq-red transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {service.shortDescription}
                    </p>

                    <div className="pt-2 space-y-1.5 border-t border-slate-100">
                      {service.keyHighlights.slice(0, 3).map((h, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer link */}
                <div className="p-5 sm:p-6 pt-0 flex items-center justify-between border-t border-slate-100 mt-2">
                  <Link
                    to={`/services/${service.slug}`}
                    className="text-xs font-bold text-iq-navy group-hover:text-iq-red inline-flex items-center gap-1 transition-colors"
                  >
                    <span>View Roadmap & FAQs</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <button
                    onClick={onOpenConsultation}
                    className="px-3 py-1.5 bg-iq-red/10 hover:bg-iq-red text-iq-red hover:text-white rounded-lg text-xs font-semibold transition-colors"
                  >
                    Enquire
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Support Card */}
          <div className="mt-14 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-lg font-bold text-iq-navy">Not sure which service you need?</h4>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Schedule an initial profile assessment with our advisors in Guntur.
              </p>
            </div>
            <button
              onClick={onOpenConsultation}
              className="px-6 py-3 bg-iq-navy hover:bg-iq-navy-light text-white text-xs sm:text-sm font-bold rounded-xl shadow transition-colors shrink-0"
            >
              Talk to an Expert
            </button>
          </div>

        </div>
      </section>
    </div>
  );
};
