import React from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Youtube,
  Linkedin,
  Instagram,
  ArrowRight,
  ShieldCheck,
  Globe2
} from 'lucide-react';
import { BRAND_INFO, SERVICES_DATA } from '../data/siteContent';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#040F38] text-white pt-16 pb-8 border-t border-slate-800 overflow-hidden">
      {/* Subtle world map background decoration */}
      <div 
        className="absolute inset-0 opacity-[0.035] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand & Mission column (2 cols wide on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block bg-white p-2 rounded-xl shadow-md">
              <img
                src="/images/logo.png"
                alt="IQ Overseas Edu Consultants"
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-sm font-semibold text-white/90">
              {BRAND_INFO.tagline}
            </p>
            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              Providing reliable, transparent, and personalized overseas education, career roadmaps, and visa solutions for ambitious students and professionals worldwide.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={BRAND_INFO.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-iq-red flex items-center justify-center transition-colors text-white"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={BRAND_INFO.socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-iq-red flex items-center justify-center transition-colors text-white"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={BRAND_INFO.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-iq-red flex items-center justify-center transition-colors text-white"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={BRAND_INFO.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-iq-red flex items-center justify-center transition-colors text-white"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-3 inline-flex items-center gap-2 text-xs text-emerald-400 font-medium bg-emerald-950/40 border border-emerald-800/50 px-3 py-1.5 rounded-full">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Guntur's Trusted International Education Gateway</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-iq-red">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-slate-300 font-medium">
              <li>
                <Link to="/" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                  About Company
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                  All 10 Services
                </Link>
              </li>
              <li>
                <Link to="/visa" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                  Visa Consultancy
                </Link>
              </li>
              <li>
                <Link to="/masters" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                  Masters Abroad
                </Link>
              </li>
              <li>
                <Link to="/bachelors" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                  Bachelors Abroad
                </Link>
              </li>
              <li>
                <Link to="/training" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                  Test Prep & Training
                </Link>
              </li>
              <li>
                <Link to="/success-stories" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                  Success Stories
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Key Services */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-iq-red">
              Key Services
            </h4>
            <ul className="space-y-2 text-xs text-slate-300 font-medium">
              {SERVICES_DATA.slice(0, 7).map((s) => (
                <li key={s.id}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-[10px] text-iq-red font-mono">{s.number}</span>
                    <span className="truncate">{s.title}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/services"
                  className="text-xs font-semibold text-iq-red hover:underline inline-flex items-center gap-1 pt-1"
                >
                  View All Services <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-iq-red">
              Guntur Office
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-iq-red shrink-0 mt-0.5" />
                <a
                  href={BRAND_INFO.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="leading-relaxed hover:text-white transition-colors"
                >
                  28-2-58, Pandaripuram, 4th Line, Lakshmipuram, Guntur – 522006, Andhra Pradesh, India
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-iq-red shrink-0" />
                <div className="flex flex-col">
                  <a href={`tel:${BRAND_INFO.primaryPhoneRaw}`} className="hover:text-white">
                    {BRAND_INFO.primaryPhone}
                  </a>
                  <a href={`tel:${BRAND_INFO.secondaryPhoneRaw}`} className="hover:text-white">
                    {BRAND_INFO.secondaryPhone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-iq-red shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <a href={`mailto:${BRAND_INFO.primaryEmail}`} className="hover:text-white break-all">
                    {BRAND_INFO.primaryEmail}
                  </a>
                  <a href={`mailto:${BRAND_INFO.secondaryEmail}`} className="hover:text-white break-all">
                    {BRAND_INFO.secondaryEmail}
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-iq-red shrink-0" />
                <span>{BRAND_INFO.workingHours}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} IQ Overseas Edu Consultants. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
            <Link to="/services" className="hover:text-white transition-colors">Services</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
            <Link to="/visa" className="hover:text-white transition-colors">Visa Support</Link>
            <Link to="/admin/study-abroad" className="hover:text-iq-red transition-colors font-mono text-[11px] opacity-70 hover:opacity-100">Admin CMS</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
