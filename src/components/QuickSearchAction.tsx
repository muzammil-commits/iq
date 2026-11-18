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

  // Quick Action pills
  const quickActions = [
    { label: 'Study Abroad', path: '/services' },
    { label: 'Masters', path: '/masters' },
    { label: 'Bachelors', path: '/bachelors' },
    { label: 'Visa Assistance', path: '/visa' },
    { label: 'Training', path: '/training' },
    { label: 'Career Counselling', path: '/services/career-counselling' },
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
    <div className="w-full relative z-20 py-5 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Seamless container blended directly with section background as requested */}
      <div className="bg-gradient-to-r from-slate-100/70 via-blue-50/50 to-slate-100/70 backdrop-blur-md rounded-3xl p-5 sm:p-6 border border-slate-200/70 shadow-xs">
        
        {/* Quick Action Heading & Navigation Pills */}
        <div className="mb-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
            <h3 className="text-base sm:text-lg font-bold text-iq-navy flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-iq-red animate-pulse" />
              What are you looking for?
            </h3>
            <span className="text-xs text-slate-500 font-medium hidden sm:inline">
              Instant site-wide search & filter
            </span>
          </div>

          {/* Quick Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {quickActions.map((action) => (
              <Link
                key={action.label}
                to={action.path}
                className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/90 hover:bg-iq-navy hover:text-white text-slate-700 transition-all duration-200 border border-slate-200/80 shadow-2xs hover:shadow-xs"
              >
                {action.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Live Search Form & Dropdowns */}
        <form onSubmit={handleSearchSubmit} className="space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-2.5 items-center">
            
            {/* Search Input */}
            <div className="md:col-span-5 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search courses, services or destinations..."
                className="w-full pl-10 pr-4 py-2.5 bg-white/95 border border-slate-200/90 rounded-2xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-iq-navy/20 focus:border-iq-navy transition-all shadow-2xs"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs font-bold"
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
                className="w-full px-3 py-2.5 bg-white/95 border border-slate-200/90 rounded-2xl text-xs sm:text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-iq-navy/20 focus:border-iq-navy transition-all font-medium shadow-2xs"
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
                className="w-full px-3 py-2.5 bg-white/95 border border-slate-200/90 rounded-2xl text-xs sm:text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-iq-navy/20 focus:border-iq-navy transition-all font-medium shadow-2xs"
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
                className="w-full px-3 py-2.5 bg-white/95 border border-slate-200/90 rounded-2xl text-xs sm:text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-iq-navy/20 focus:border-iq-navy transition-all font-medium shadow-2xs"
              >
                <option value="All">Destination</option>
                <option value="United States">USA</option>
                <option value="United Kingdom">UK</option>
                <option value="Canada">Canada</option>
                <option value="Australia">Australia</option>
                <option value="Ireland">Ireland</option>
                <option value="Germany">Germany</option>
              </select>
            </div>

            {/* Submit Button */}
            <div className="md:col-span-1">
              <button
                type="submit"
                className="w-full py-2.5 px-4 bg-iq-red hover:bg-iq-red-hover text-white rounded-2xl text-xs sm:text-sm font-bold flex items-center justify-center transition-colors shadow-sm"
                title="Search"
              >
                <Search className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Active Search Dropdown Results */}
          {searchResults.length > 0 && (
            <div className="mt-3 p-3.5 bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200 shadow-lg animate-in fade-in duration-200">
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center justify-between">
                <span>Matching Results ({searchResults.length})</span>
                <span className="text-[10px] text-iq-navy font-semibold">Click to open</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                {searchResults.map((res, i) => (
                  <Link
                    key={i}
                    to={res.link}
                    className="p-3 bg-slate-50/70 hover:bg-white rounded-xl border border-slate-200/70 hover:border-iq-navy hover:shadow-xs transition-all group flex flex-col justify-between"
                  >
                    <div>
                      <div className="text-xs font-bold text-iq-navy group-hover:text-iq-red transition-colors flex items-center justify-between">
                        <span>{res.title}</span>
                        <ArrowRight className="w-3 h-3 text-slate-300 group-hover:text-iq-red transition-colors" />
                      </div>
                      <div className="text-[10px] text-iq-red font-medium mt-0.5">{res.category}</div>
                      <p className="text-[11px] text-slate-500 line-clamp-2 mt-1 leading-snug">
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
