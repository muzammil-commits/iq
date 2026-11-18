import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageSquare,
  CheckCircle2,
  Navigation,
  ExternalLink
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PageHero } from '../components/PageHero';
import { BRAND_INFO, SERVICES_DATA } from '../data/siteContent';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    service: 'Career Counselling',
    studyLevel: 'Masters',
    destination: 'USA',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim() || !formData.email.trim()) {
      setError('Please provide your name, phone number, and email.');
      return;
    }
    setError(null);
    setLoading(true);

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
        destination: 'USA',
        message: ''
      });
    }, 700);
  };

  return (
    <div className="w-full">
      <PageHero
        title="Contact IQ Overseas"
        highlightedWord="Edu Consultants"
        subtitle="Visit our Guntur counseling center or contact our senior team directly for personalized international education and visa advice."
        breadcrumbs={[{ label: 'Contact Us' }]}
      />

      <section className="py-12 sm:py-16 bg-[#F8FAFD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Top Quick Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Phone Card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-md space-y-3">
              <div className="w-12 h-12 rounded-xl bg-iq-navy/5 text-iq-navy flex items-center justify-center">
                <Phone className="w-6 h-6 text-iq-red" />
              </div>
              <h3 className="text-base font-bold text-iq-navy">Direct Phone Calling</h3>
              <p className="text-xs text-slate-500">Immediate telephone assistance during office hours.</p>
              <div className="space-y-1 pt-1 text-sm font-semibold">
                <div>
                  <a href={`tel:${BRAND_INFO.primaryPhoneRaw}`} className="text-iq-navy hover:text-iq-red transition-colors block">
                    {BRAND_INFO.primaryPhone} (Primary)
                  </a>
                </div>
                <div>
                  <a href={`tel:${BRAND_INFO.secondaryPhoneRaw}`} className="text-iq-navy hover:text-iq-red transition-colors block">
                    {BRAND_INFO.secondaryPhone} (Support)
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-md space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-iq-navy">WhatsApp Chat</h3>
              <p className="text-xs text-slate-500">Instant messaging for queries and document checklists.</p>
              <div className="pt-1">
                <a
                  href={`https://wa.me/${BRAND_INFO.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(BRAND_INFO.defaultWhatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold rounded-xl shadow transition-colors"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-md space-y-3">
              <div className="w-12 h-12 rounded-xl bg-iq-red/10 text-iq-red flex items-center justify-center">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-iq-navy">Official Email</h3>
              <p className="text-xs text-slate-500">Send profile dossiers and university transcripts.</p>
              <div className="space-y-1 pt-1 text-xs font-semibold">
                <div>
                  <a href={`mailto:${BRAND_INFO.primaryEmail}`} className="text-iq-navy hover:text-iq-red transition-colors block truncate">
                    {BRAND_INFO.primaryEmail}
                  </a>
                </div>
                <div>
                  <a href={`mailto:${BRAND_INFO.secondaryEmail}`} className="text-iq-navy hover:text-iq-red transition-colors block truncate">
                    {BRAND_INFO.secondaryEmail}
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Form and Address Details */}
          <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              
              {/* Form Column (7 Cols) */}
              <div className="lg:col-span-7 p-6 sm:p-10">
                <div className="mb-6">
                  <span className="text-xs font-bold text-iq-red uppercase tracking-wider">
                    Online Inquiry
                  </span>
                  <h3 className="text-2xl font-extrabold text-iq-navy mt-1">
                    Request Expert Guidance
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Our advisors respond promptly with customized guidance.
                  </p>
                </div>

                {submitted ? (
                  <div className="p-8 text-center bg-emerald-50 rounded-2xl border border-emerald-200 space-y-3">
                    <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto shadow">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h4 className="text-lg font-bold text-emerald-900">
                      Thank you! Our team will get in touch with you shortly.
                    </h4>
                    <p className="text-xs text-emerald-700 max-w-sm mx-auto">
                      Your query has been assigned to a senior international education consultant in Guntur.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-3 px-5 py-2 bg-emerald-700 text-white rounded-xl text-xs font-bold"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {error && (
                      <div className="p-3 bg-red-50 text-red-600 text-xs rounded-xl">
                        {error}
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Full Name <span className="text-iq-red">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="Your name"
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-iq-navy/20 focus:border-iq-navy"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
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
                        <label className="block text-xs font-bold text-slate-700 mb-1">
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
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Preferred Service
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
                        <label className="block text-xs font-bold text-slate-700 mb-1">
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
                          <option value="Training">Test Preparation</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Preferred Destination
                        </label>
                        <select
                          value={formData.destination}
                          onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-iq-navy/20 focus:border-iq-navy font-medium"
                        >
                          <option value="USA">United States</option>
                          <option value="UK">United Kingdom</option>
                          <option value="Canada">Canada</option>
                          <option value="Australia">Australia</option>
                          <option value="Ireland">Ireland</option>
                          <option value="Germany">Germany</option>
                          <option value="Other">Other / Undecided</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Your Message
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Mention your academic background, scores, or any specific questions..."
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-iq-navy/20 focus:border-iq-navy resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3.5 bg-iq-red hover:bg-iq-red-hover text-white text-sm font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {loading ? (
                        <span>Submitting...</span>
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

              {/* Office Details Column (5 Cols) */}
              <div className="lg:col-span-5 bg-[#071B68] text-white p-6 sm:p-10 flex flex-col justify-between">
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    Head Office in Guntur
                  </h4>
                  <p className="text-xs text-blue-200 leading-relaxed mb-6">
                    Conveniently located in Lakshmipuram, Guntur. Walk in for an exploratory one-on-one session with our senior counseling faculty.
                  </p>

                  <div className="space-y-4 text-xs">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-iq-red shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold text-white">Full Address</div>
                        <p className="text-blue-100/80 leading-relaxed mt-0.5">
                          {BRAND_INFO.address}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-amber-300 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold text-white">Office Hours</div>
                        <p className="text-blue-100/80 mt-0.5">
                          {BRAND_INFO.workingHours}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <a
                    href={BRAND_INFO.googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 bg-white hover:bg-slate-100 text-iq-navy text-xs font-bold rounded-xl shadow transition-colors flex items-center justify-center gap-2"
                  >
                    <Navigation className="w-4 h-4 text-iq-red" />
                    <span>Get Directions on Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5 ml-1" />
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Embedded Google Maps Section */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-md">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
              <div>
                <h4 className="text-lg font-bold text-iq-navy">Find Us in Guntur</h4>
                <p className="text-xs text-slate-500">28-2-58, Pandaripuram, 4th Line, Lakshmipuram, Guntur – 522006</p>
              </div>
              <a
                href={BRAND_INFO.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-iq-navy text-white text-xs font-bold rounded-lg hover:bg-iq-navy-light transition-colors"
              >
                <Navigation className="w-3.5 h-3.5 text-iq-red" />
                <span>Open in Maps</span>
              </a>
            </div>

            <div className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-slate-200">
              <iframe
                title="IQ Overseas Edu Consultants Location in Guntur"
                src={BRAND_INFO.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
