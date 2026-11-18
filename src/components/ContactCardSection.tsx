import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Send,
  MessageSquare,
  CheckCircle2,
  Clock,
  Sparkles
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { BRAND_INFO, SERVICES_DATA } from '../data/siteContent';

export const ContactCardSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    service: 'Career Counselling',
    studyLevel: 'Masters',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim() || !formData.email.trim()) {
      setError('Please fill in your name, phone number, and email.');
      return;
    }
    setError(null);
    setLoading(true);

    // Simulate reliable submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 }
      });
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        service: 'Career Counselling',
        studyLevel: 'Masters',
        message: ''
      });
    }, 700);
  };

  return (
    <section className="py-14 sm:py-20 bg-slate-50 relative overflow-hidden" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Card Container */}
        <div className="bg-[#071B68] rounded-3xl shadow-2xl overflow-hidden border border-iq-navy-light/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* Left Column: Contact Information (5 Cols) */}
            <div className="lg:col-span-5 p-6 sm:p-10 text-white flex flex-col justify-between relative bg-[#051554]">
              {/* Subtle background plane image */}
              <div className="absolute bottom-0 left-0 w-36 opacity-30 pointer-events-none">
                <img
                  src="/images/airplane-contact.png"
                  alt="Airplane"
                  className="w-full h-auto object-contain"
                />
              </div>

              <div>
                <div className="inline-flex items-center gap-2 text-xs font-bold text-iq-red uppercase tracking-wider mb-2 bg-white/10 px-3 py-1 rounded-full">
                  <span>Direct Consultation</span>
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Let's plan your <span className="text-iq-red">global journey</span> together.
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-blue-100/80 leading-relaxed">
                  Visit our office in Guntur or connect with our senior education advisors today.
                </p>

                {/* Contact List */}
                <div className="mt-8 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-iq-red text-white flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Office Address</div>
                      <p className="text-xs text-blue-100/80 leading-relaxed mt-0.5">
                        {BRAND_INFO.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-iq-navy-light text-white flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                      <Phone className="w-4 h-4 text-emerald-300" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Phone Numbers</div>
                      <div className="text-xs text-blue-100/90 space-y-0.5 mt-0.5">
                        <div>
                          <a href={`tel:${BRAND_INFO.primaryPhoneRaw}`} className="hover:underline">
                            {BRAND_INFO.primaryPhone}
                          </a>
                        </div>
                        <div>
                          <a href={`tel:${BRAND_INFO.secondaryPhoneRaw}`} className="hover:underline">
                            {BRAND_INFO.secondaryPhone}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-iq-navy-light text-white flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                      <Mail className="w-4 h-4 text-iq-red" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Email Addresses</div>
                      <div className="text-xs text-blue-100/90 space-y-0.5 mt-0.5">
                        <div>
                          <a href={`mailto:${BRAND_INFO.primaryEmail}`} className="hover:underline">
                            {BRAND_INFO.primaryEmail}
                          </a>
                        </div>
                        <div>
                          <a href={`mailto:${BRAND_INFO.secondaryEmail}`} className="hover:underline">
                            {BRAND_INFO.secondaryEmail}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-iq-navy-light text-white flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                      <Clock className="w-4 h-4 text-amber-300" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Working Hours</div>
                      <p className="text-xs text-blue-100/80 mt-0.5">
                        {BRAND_INFO.workingHours}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Communication Buttons */}
              <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-3 gap-2">
                <a
                  href={`tel:${BRAND_INFO.primaryPhoneRaw}`}
                  className="flex flex-col items-center justify-center py-2 px-1 bg-white/10 hover:bg-white/20 rounded-xl text-center text-xs font-semibold text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-emerald-400 mb-1" />
                  <span>Call Now</span>
                </a>
                <a
                  href={`https://wa.me/${BRAND_INFO.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(BRAND_INFO.defaultWhatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center py-2 px-1 bg-emerald-600/30 hover:bg-emerald-600/50 rounded-xl text-center text-xs font-semibold text-white transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-300 mb-1" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href={`mailto:${BRAND_INFO.primaryEmail}`}
                  className="flex flex-col items-center justify-center py-2 px-1 bg-white/10 hover:bg-white/20 rounded-xl text-center text-xs font-semibold text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-iq-red mb-1" />
                  <span>Email Us</span>
                </a>
              </div>
            </div>

            {/* Right Column: Contact Form (7 Cols) */}
            <div className="lg:col-span-7 p-6 sm:p-10 bg-white flex flex-col justify-center">
              <div className="mb-6">
                <h4 className="text-xl sm:text-2xl font-extrabold text-iq-navy">
                  Request Expert Guidance
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  Fill out your details below and our senior counselors will get in touch with you.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 text-center bg-emerald-50 rounded-2xl border border-emerald-200 space-y-3 animate-in zoom-in-95 duration-300">
                  <div className="w-14 h-14 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-emerald-900">
                    Thank you! Our team will get in touch with you shortly.
                  </h4>
                  <p className="text-xs text-emerald-700 max-w-md mx-auto">
                    We have received your enquiry for {formData.service || 'consultation'}. An IQ Overseas advisor will contact you within 24 business hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-3 px-5 py-2 bg-emerald-700 text-white rounded-xl text-xs font-bold hover:bg-emerald-800"
                  >
                    Submit Another Query
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {error && (
                    <div className="p-3 bg-red-50 text-red-700 text-xs rounded-xl border border-red-200">
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Full Name <span className="text-iq-red">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Ramesh Kumar"
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-iq-navy/20 focus:border-iq-navy"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Phone Number <span className="text-iq-red">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-iq-navy/20 focus:border-iq-navy"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Email Address <span className="text-iq-red">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="yourname@gmail.com"
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-iq-navy/20 focus:border-iq-navy"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Select Service
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-iq-navy/20 focus:border-iq-navy font-medium"
                      >
                        {SERVICES_DATA.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.number} - {s.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Study Level
                      </label>
                      <select
                        value={formData.studyLevel}
                        onChange={(e) => setFormData({ ...formData, studyLevel: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-iq-navy/20 focus:border-iq-navy font-medium"
                      >
                        <option value="Masters">Master's Degree</option>
                        <option value="Bachelors">Bachelor's Degree</option>
                        <option value="Diploma">Diploma / Post-Degree</option>
                        <option value="Visa Only">Visa Consultation Only</option>
                        <option value="Training">Test Preparation (IELTS/PTE/GRE)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Preferred Country (Optional)
                      </label>
                      <input
                        type="text"
                        placeholder="USA, UK, Canada, Australia, etc."
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-iq-navy/20 focus:border-iq-navy"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Your Query / Message
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your educational background, planned intake, or any questions you have..."
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-iq-navy/20 focus:border-iq-navy resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 px-6 bg-iq-red hover:bg-iq-red-hover text-white text-sm font-bold rounded-xl shadow-[0_4px_16px_rgba(227,6,19,0.35)] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                  >
                    {loading ? (
                      <span className="inline-flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Submitting...
                      </span>
                    ) : (
                      <>
                        <span>Request Expert Guidance</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
