import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Users, ShieldCheck, Trophy, Sparkles, Award } from 'lucide-react';
import { TRUST_STRIP_ITEMS } from '../data/siteContent';
import { AnimatedCounter } from './AnimatedCounter';

export const TrustStrip: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe':
        return <Globe className="w-6 h-6 text-sky-400" />;
      case 'Users':
        return <Users className="w-6 h-6 text-blue-300" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-emerald-400" />;
      case 'Trophy':
        return <Trophy className="w-6 h-6 text-amber-400" />;
      default:
        return <Globe className="w-6 h-6 text-sky-400" />;
    }
  };

  return (
    <div className="w-full bg-gradient-to-r from-[#030E38] via-[#071B68] to-[#040F3D] text-white pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-10 border-b-2 border-amber-400/20 relative z-10 shadow-2xl overflow-hidden">
      {/* Background ambient lighting for grand look */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.04] pointer-events-none" />
      <div className="absolute -left-20 top-0 w-60 h-60 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -right-20 bottom-0 w-60 h-60 bg-red-500/10 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {TRUST_STRIP_ITEMS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 backdrop-blur-md rounded-2xl p-4 sm:p-5 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-900/30 group flex items-start gap-4"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/15 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:border-iq-red transition-all duration-300 shadow-md">
                {getIcon(item.icon)}
              </div>

              {/* Text & Metrics - 100% Visible with ZERO truncation */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-1.5">
                  <h4 className="text-sm sm:text-base font-extrabold text-white tracking-wide group-hover:text-sky-200 transition-colors whitespace-normal">
                    {item.title}
                  </h4>
                  <span className="text-[10px] font-mono font-bold text-amber-300 bg-amber-400/15 px-2 py-0.5 rounded border border-amber-400/30 shrink-0 self-start xl:self-auto whitespace-nowrap">
                    {item.badge}
                  </span>
                </div>

                <div className="text-xs sm:text-sm font-bold text-blue-200 mt-1">
                  <AnimatedCounter value={item.metric} />
                </div>

                <p className="text-[11px] sm:text-xs text-blue-100/80 leading-relaxed mt-1">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
