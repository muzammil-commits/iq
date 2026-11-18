import React from 'react';
import { Globe, Users, ShieldCheck, Trophy } from 'lucide-react';
import { TRUST_STRIP_ITEMS } from '../data/siteContent';

export const TrustStrip: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe':
        return <Globe className="w-5 h-5 text-blue-300" />;
      case 'Users':
        return <Users className="w-5 h-5 text-blue-300" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
      case 'Trophy':
        return <Trophy className="w-5 h-5 text-amber-400" />;
      default:
        return <Globe className="w-5 h-5 text-blue-300" />;
    }
  };

  return (
    <div className="w-full bg-[#071B68] text-white py-4 sm:py-5 border-y border-iq-navy-light/40 relative z-10 shadow-inner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 items-center justify-between divide-y-0 md:divide-x md:divide-white/10">
          {TRUST_STRIP_ITEMS.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-3 px-2 sm:px-4 py-1.5 group hover:bg-white/5 rounded-xl transition-colors cursor-default"
            >
              <div className="w-10 h-10 rounded-xl bg-white/10 group-hover:bg-iq-red flex items-center justify-center shrink-0 transition-colors duration-300">
                {getIcon(item.icon)}
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-white tracking-wide group-hover:text-blue-100 transition-colors">
                  {item.title}
                </h4>
                <p className="text-[11px] text-blue-200/80 hidden sm:block">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
