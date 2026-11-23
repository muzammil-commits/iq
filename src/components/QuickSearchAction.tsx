import React, { useState, useMemo } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Search, ArrowRight, Sparkles } from 'lucide-react';
import { SERVICES_DATA, DESTINATIONS_DATA, TRAINING_PROGRAMS } from '../data/siteContent';

export const QuickSearchAction: React.FC = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [studyLevel, setStudyLevel] = useState('All');
  const [serviceFilter, setServiceFilter] = useState('All');
  const [destinationFilter, setDestinationFilter] = useState('All');

  // Quick Action pills with popup hints
  const quickActions = [
    { label: 'Study Abroad', path: '/services', hint: '500+ global partner universities' },
    { label: 'Masters', path: '/masters', hint: 'Top MS, MBA & STEM degrees' },
    { label: 'Bachelors', path: '/bachelors', hint: 'Undergrad admissions & scholarships' },
    { label: 'Visa Assistance', path: '/visa', hint: '98%+ high visa success guidance' },
    { label: 'Training', path: '/training', hint: 'IELTS, TOEFL, GRE coaching' },
    { label: 'Career Counselling', path: '/services/career-counselling', hint: '1-on-1 profile evaluation' },
  ];

  // Dynamic live search results
  const searchResults = useMemo(() => {
    if (!query.trim() && studyLevel === 'All' && serviceFilter === 'All' && destinationFilter === 'All') {
      return [];
    }

    const q = query.toLowerCase().trim();
    const results: Array<{
      title: string;
      category: string;
      description: string;
      link: string;
    }> = [];

    SERVICES_DATA.forEach((s) => {
      const matchesQuery = !q || s.title.toLowerCase().includes(q) || s.shortDescription.toLowerCase().includes(q);
      const matchesService = serviceFilter === 'All' || s.title.toLowerCase().includes(serviceFilter.toLowerCase());
      if (matchesQuery && matchesService) {
        results.push({
          title: s.title,
          category: s.category,
          description: s.shortDescription,
          link: `/services/${s.slug}`
        });
      }
    });

    DESTINATIONS_DATA.forEach((d) => {
      const matchesQuery = !q || d.country.toLowerCase().includes(q) || d.popularCourses.some(c => c.toLowerCase().includes(q));
      const matchesDest = destinationFilter === 'All' || d.country.toLowerCase().includes(destinationFilter.toLowerCase());
      if (matchesQuery && matchesDest) {
        results.push({
          title: `Study in ${d.country}`,
          category: `Popular: ${d.popularCourses.slice(0, 2).join(', ')}`,
          description: d.description,
          link: '/services'
        });
      }
    });

    TRAINING_PROGRAMS.forEach((t) => {
      const matchesQuery = !q || t.title.toLowerCase().includes(q) || t.description.toLowerCase().includes(q);
      if (matchesQuery) {
        results.push({
          title: t.title,
          category: t.category,
          description: t.description,
          link: '/training'
        });
      }
    });

    if (studyLevel === 'Masters' || (q && 'masters'.includes(q))) {
      results.unshift({
        title: 'Master\'s Degree Abroad',
        category: 'Postgraduate Programs',
        description: 'Explore world-class Master’s degrees across USA, UK, Canada, Australia and Europe.',
        link: '/masters'
      });
    }

    if (studyLevel === 'Bachelors' || (q && 'bachelors'.includes(q))) {
      results.unshift({
        title: 'Bachelor\'s Degree Abroad',
        category: 'Undergraduate Programs',
        description: 'Start your undergraduate journey with comprehensive admission & visa guidance.',
        link: '/bachelors'
      });
    }

    return results.slice(0, 6);
  }, [query, studyLevel, serviceFilter, destinationFilter]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchResults.length > 0) {
      navigate(searchResults[0].link);
    } else if (query.toLowerCase().includes('visa')) {
      navigate('/visa');
    } else if (query.toLowerCase().includes('master')) {
      navigate('/masters');
    } else if (query.toLowerCase().includes('bachelor')) {
      navigate('/bachelors');
    } else if (query.toLowerCase().includes('training') || query.toLowerCase().includes('ielts')) {
      navigate('/training');
    } else {
      navigate('/services');
    }
  };

  return (
    <div className="w-full relative z-30 -mt-16 sm:-mt-20 lg:-mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* 50% Overlap Card: 50% in the hero section, 50% in the section below */}
      <div className="bg-white rounded-[28px] sm:rounded-[36px] p-6 sm:p-8 lg:p-9 border border-slate-200/90 shadow-[0_20px_50px_rgba(7,27,104,0.18)] hover:shadow-[0_28px_65px_rgba(7,27,104,0.22)] transition-all duration-300">
        
        {/* Quick Action Heading & Navigation Pills with Interactive Tooltip Popups */}
        <div className="mb-5 sm:mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3.5">
            <h3 className="text-xl sm:text-2xl font-black text-iq-navy flex items-center gap-2.5">
              <span className="w-3 h-3 rounded-full bg-iq-red animate-pulse shrink-0" />
              <span>What are you looking for?</span>
            </h3>
            <span className="text-xs sm:text-sm text-slate-500 font-semibold hidden sm:inline-flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-iq-red" />
              Instant site-wide search & smart filters
            </span>
          </div>

          {/* Quick Filter Pills with Interactive Hover Popups */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
            {quickActions.map((action) => (
              <div key={action.label} className="relative group">
                <Link
                  to={action.path}
                  className="px-4 py-2 sm:px-4.5 sm:py-2.5 rounded-2xl text-xs sm:text-sm font-bold bg-slate-100 hover:bg-iq-navy hover:text-white text-slate-700 transition-all duration-200 border border-slate-200/80 shadow-2xs hover:shadow-xs inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <span>{action.label}</span>
                </Link>

                {/* Animated Hover Popup Tooltip */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:flex flex-col items-center pointer-events-none z-50 animate-in fade-in zoom-in-95 duration-150">
                  <div className="bg-iq-navy text-white text-[11px] font-bold py-1 px-2.5 rounded-lg shadow-xl whitespace-nowrap border border-white/20">
                    {action.hint}
                  </div>
                  <div className="w-2 h-2 bg-iq-navy rotate-45 -mt-1" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Live Search Form & Dropdowns */}
        <form onSubmit={handleSearchSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
            
            {/* Search Input */}
            <div className="md:col-span-5 relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search courses, services or destinations..."
                className="w-full pl-12 pr-12 py-3.5 sm:py-4 bg-slate-50/80 hover:bg-white focus:bg-white border-2 border-slate-200/90 focus:border-iq-navy rounded-2xl text-sm sm:text-base text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-iq-navy/10 transition-all shadow-2xs font-medium"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs font-bold cursor-pointer"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Filter: Study Level */}
            <div className="md:col-span-2">
              <select
                value={studyLevel}
                onChange={(e) => setStudyLevel(e.target.value)}
                className="w-full px-4 py-3.5 sm:py-4 bg-slate-50/80 hover:bg-white focus:bg-white border-2 border-slate-200/90 focus:border-iq-navy rounded-2xl text-sm sm:text-base text-slate-700 focus:outline-none focus:ring-4 focus:ring-iq-navy/10 transition-all font-semibold shadow-2xs cursor-pointer"
              >
                <option value="All">Study Level</option>
                <option value="Masters">Masters</option>
                <option value="Bachelors">Bachelors</option>
                <option value="Training">Test Prep / Training</option>
              </select>
            </div>

            {/* Filter: Service */}
            <div className="md:col-span-2">
              <select
                value={serviceFilter}
                onChange={(e) => setServiceFilter(e.target.value)}
                className="w-full px-4 py-3.5 sm:py-4 bg-slate-50/80 hover:bg-white focus:bg-white border-2 border-slate-200/90 focus:border-iq-navy rounded-2xl text-sm sm:text-base text-slate-700 focus:outline-none focus:ring-4 focus:ring-iq-navy/10 transition-all font-semibold shadow-2xs cursor-pointer"
              >
                <option value="All">All Services</option>
                <option value="Career Counselling">Career Counselling</option>
                <option value="Application Processing">Application Processing</option>
                <option value="Study Visa">Study Visa</option>
                <option value="Pre-Departure">Pre-Departure</option>
                <option value="Tourist Visa">Tourist Visa</option>
                <option value="Business Visa">Business Visa</option>
              </select>
            </div>

            {/* Filter: Destination */}
            <div className="md:col-span-2">
              <select
                value={destinationFilter}
                onChange={(e) => setDestinationFilter(e.target.value)}
                className="w-full px-4 py-3.5 sm:py-4 bg-slate-50/80 hover:bg-white focus:bg-white border-2 border-slate-200/90 focus:border-iq-navy rounded-2xl text-sm sm:text-base text-slate-700 focus:outline-none focus:ring-4 focus:ring-iq-navy/10 transition-all font-semibold shadow-2xs cursor-pointer"
              >
                <option value="All">Destination</option>
                <option value="United States">USA</option>
                <option value="United Kingdom">UK</option>
                <option value="Canada">Canada</option>
                <option value="Australia">Australia</option>
                <option value="Ireland">Ireland</option>
                <option value="Germany">Germany</option>
                <option value="New Zealand">New Zealand</option>
                <option value="France">France</option>
              </select>
            </div>

            {/* Submit Button */}
            <div className="md:col-span-1">
              <button
                type="submit"
                className="w-full py-3.5 sm:py-4 px-5 bg-iq-red hover:bg-iq-red-hover text-white rounded-2xl text-sm sm:text-base font-bold flex items-center justify-center transition-all shadow-md shadow-iq-red/30 hover:shadow-iq-red/45 cursor-pointer"
                title="Search"
              >
                <Search className="w-5 h-5" />
              </button>
            </div>

          </div>

          {/* Active Search Dropdown Results with Solid White Background & Popup Animation */}
          {searchResults.length > 0 && (
            <div className="mt-3 p-4 bg-white rounded-2xl border-2 border-iq-navy/15 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2.5 flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-iq-navy">
                  <Sparkles className="w-3.5 h-3.5 text-iq-red" />
                  Matching Results ({searchResults.length})
                </span>
                <span className="text-[10px] text-iq-red font-bold">Click to view details</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                {searchResults.map((res, i) => (
                  <Link
                    key={i}
                    to={res.link}
                    className="p-3 bg-slate-50/80 hover:bg-blue-50/50 rounded-xl border border-slate-200/80 hover:border-iq-navy hover:shadow-xs transition-all group flex flex-col justify-between"
                  >
                    <div>
                      <div className="text-xs font-bold text-iq-navy group-hover:text-iq-red transition-colors flex items-center justify-between">
                        <span>{res.title}</span>
                        <ArrowRight className="w-3 h-3 text-slate-300 group-hover:text-iq-red transition-colors" />
                      </div>
                      <div className="text-[10px] text-iq-red font-medium mt-0.5">{res.category}</div>
                      <p className="text-[11px] text-slate-600 line-clamp-2 mt-1 leading-snug">
                        {res.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </form>

      </div>
    </div>
  );
};
