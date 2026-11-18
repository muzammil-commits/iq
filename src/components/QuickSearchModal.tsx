import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, ArrowRight, CornerDownLeft, Sparkles, Compass, ShieldCheck } from 'lucide-react';
import { SERVICES_DATA, DESTINATIONS_DATA, TRAINING_PROGRAMS, FAQS_DATA } from '../data/siteContent';

interface QuickSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuickSearchModal: React.FC<QuickSearchModalProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSearchTerm('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  // Global key listener for Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Combine searchable items
  const results = React.useMemo(() => {
    const q = searchTerm.toLowerCase().trim();
    if (!q) {
      // Default top suggestions
      return [
        { title: 'Career Counselling', category: 'Service 01', link: '/services/career-counselling', desc: 'Aptitude & profile assessment' },
        { title: 'Study Visa Assistance', category: 'Service 05', link: '/services/study-visa-assistance', desc: 'Mock interviews & filing' },
        { title: 'Master’s Degree Abroad', category: 'Postgraduate', link: '/masters', desc: 'Global MS / MBA programs' },
        { title: 'Bachelor’s Degree Abroad', category: 'Undergraduate', link: '/bachelors', desc: 'Undergraduate global admissions' },
        { title: 'IELTS Academic Prep', category: 'Test Prep', link: '/training', desc: 'Band 7.0+ coaching' },
        { title: 'Visa Consultancy', category: 'Immigration', link: '/visa', desc: 'Business, Tourist & Student Visas' }
      ];
    }

    const matches: Array<{ title: string; category: string; link: string; desc: string }> = [];

    // Search services
    SERVICES_DATA.forEach((s) => {
      if (s.title.toLowerCase().includes(q) || s.shortDescription.toLowerCase().includes(q)) {
        matches.push({
          title: s.title,
          category: s.category,
          link: `/services/${s.slug}`,
          desc: s.shortDescription
        });
      }
    });

    // Search training
    TRAINING_PROGRAMS.forEach((t) => {
      if (t.title.toLowerCase().includes(q) || t.description.toLowerCase().includes(q)) {
        matches.push({
          title: t.title,
          category: 'Training / Test Prep',
          link: '/training',
          desc: t.description
        });
      }
    });

    // Search destinations
    DESTINATIONS_DATA.forEach((d) => {
      if (d.country.toLowerCase().includes(q) || d.popularCourses.some(c => c.toLowerCase().includes(q))) {
        matches.push({
          title: `Study in ${d.country}`,
          category: 'Destination',
          link: '/services',
          desc: d.description
        });
      }
    });

    // Search FAQs
    FAQS_DATA.forEach((f) => {
      if (f.question.toLowerCase().includes(q) || f.answer.toLowerCase().includes(q)) {
        matches.push({
          title: f.question,
          category: 'FAQ',
          link: '/#contact',
          desc: f.answer.substring(0, 80) + '...'
        });
      }
    });

    return matches.slice(0, 8);
  }, [searchTerm]);

  const handleSelect = (link: string) => {
    navigate(link);
    onClose();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % results.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + results.length) % results.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (results[selectedIndex]) {
        handleSelect(results[selectedIndex].link);
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden border border-slate-200 animate-in zoom-in-95 duration-200"
        role="dialog"
      >
        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-100 flex items-center gap-3 bg-slate-50">
          <Search className="w-5 h-5 text-iq-navy shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleKeyDown}
            placeholder="Search courses, services, visas, test prep or destinations..."
            className="w-full bg-transparent text-sm sm:text-base text-slate-800 placeholder-slate-400 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-200/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[380px] overflow-y-auto p-2 divide-y divide-slate-100">
          {results.length === 0 ? (
            <div className="text-center py-10 text-slate-400 text-xs">
              No results found for "{searchTerm}". Try "Masters", "Visa", or "Counselling".
            </div>
          ) : (
            results.map((item, idx) => {
              const isSelected = selectedIndex === idx;
              return (
                <div
                  key={idx}
                  onClick={() => handleSelect(item.link)}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`p-3 rounded-xl cursor-pointer transition-colors flex items-center justify-between ${
                    isSelected ? 'bg-iq-navy text-white' : 'hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className="text-xs sm:text-sm font-bold">{item.title}</span>
                      <span
                        className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                          isSelected ? 'bg-iq-red text-white' : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        {item.category}
                      </span>
                    </div>
                    <p className={`text-xs line-clamp-1 ${isSelected ? 'text-blue-100' : 'text-slate-400'}`}>
                      {item.desc}
                    </p>
                  </div>

                  <ArrowRight
                    className={`w-4 h-4 shrink-0 transition-transform ${
                      isSelected ? 'text-iq-red translate-x-1' : 'text-slate-300'
                    }`}
                  />
                </div>
              );
            })
          )}
        </div>

        {/* Keyboard Helper Footer */}
        <div className="p-3 bg-slate-100 border-t border-slate-200/60 flex items-center justify-between text-[11px] text-slate-500">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-white border border-slate-300 rounded font-mono text-[10px]">↑↓</kbd>
              Navigate
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-white border border-slate-300 rounded font-mono text-[10px]">↵</kbd>
              Select
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-white border border-slate-300 rounded font-mono text-[10px]">esc</kbd>
              Close
            </span>
          </div>
          <span className="text-iq-navy font-semibold">IQ Overseas Guntur</span>
        </div>
      </div>
    </div>
  );
};
