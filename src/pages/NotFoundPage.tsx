import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowRight, Compass, HelpCircle } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 bg-[#F8FAFD]">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-20 h-20 rounded-3xl bg-iq-navy/5 text-iq-red mx-auto flex items-center justify-center font-black text-3xl font-mono border-2 border-iq-red/20">
          404
        </div>
        
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-iq-navy tracking-tight">
            Page Not Found
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
            The page you are looking for may have been relocated, renamed, or is currently unavailable.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-iq-navy hover:bg-iq-navy-light text-white text-xs sm:text-sm font-bold rounded-xl shadow transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            to="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 bg-white hover:bg-slate-50 text-iq-navy border border-slate-200 text-xs sm:text-sm font-bold rounded-xl shadow-xs transition-colors"
          >
            <Compass className="w-4 h-4 text-iq-red" />
            <span>Explore Services</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
