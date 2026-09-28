import { useState } from 'react';
import { Phone, MessageCircle, MapPin, Clock, Mail, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { BUSINESS_CONFIG, getWhatsAppUrl } from '../data/businessData';
import { ContactFormData } from '../types';

export function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    phone: '',
    email: '',
    propertyInterest: 'Residential Sale / Purchase',
    preferredArea: 'Topsia / EM Bypass',
    budgetRange: '₹50 Lakhs – ₹1 Crore',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) return;

    // Simulate instant local submit & offer to forward straight to WhatsApp
    setFormSubmitted(true);
  };

  const handleSendViaWhatsApp = () => {
    const text = `Hello Dipendu Babu, here is my property inquiry via your website:\n\n• Name: ${formData.fullName}\n• Phone: ${formData.phone}\n• Email: ${formData.email || 'Not provided'}\n• Interest: ${formData.propertyInterest}\n• Preferred Area: ${formData.preferredArea}\n• Budget Range: ${formData.budgetRange}\n• Message: ${formData.message || 'Please share matching verified options.'}`;
    window.open(getWhatsAppUrl(text), '_blank');
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#FAF8F5] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#163829] bg-[#163829]/10 px-3 py-1 rounded-full mb-3">
            <MapPin className="w-3.5 h-3.5 text-[#163829]" />
            Get In Touch
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 leading-tight">
            Connect with Dipendu Sen
          </h2>
          <p className="mt-4 text-stone-600 text-base sm:text-lg">
            Have a property to buy, sell, or rent? Or need legal title verification? 
            Reach out via WhatsApp for the quickest response, or visit our Kolkata office.
          </p>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Direct Contact Details & Google Maps Embed */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-stone-200 shadow-sm space-y-6">
              
              {/* WhatsApp Callout Highlight */}
              <div className="bg-[#25D366]/10 border border-[#25D366]/30 rounded-xl p-4 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5 fill-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900 text-sm">Instant WhatsApp Assistance</h4>
                    <p className="text-xs text-stone-600">Quickest response directly from Dipendu Sen</p>
                  </div>
                </div>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-lg bg-[#25D366] text-stone-950 font-bold text-xs hover:bg-[#20ba5a] transition-colors shrink-0"
                  id="contact-whatsapp-direct"
                >
                  Chat Now
                </a>
              </div>

              {/* Contact List */}
              <div className="space-y-4 text-sm text-stone-700">
                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-stone-100 flex items-center justify-center text-[#163829] shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider block">
                      Direct Phone
                    </span>
                    <a
                      href={`tel:${BUSINESS_CONFIG.contact.phoneRaw}`}
                      className="font-bold text-stone-900 text-base hover:text-[#163829] transition-colors"
                    >
                      {BUSINESS_CONFIG.contact.phoneDisplay}
                    </a>
                    <span className="text-xs text-stone-500 block mt-0.5">
                      Alt: {BUSINESS_CONFIG.contact.altPhoneDisplay}
                    </span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-stone-100 flex items-center justify-center text-[#163829] shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider block">
                      Official Email
                    </span>
                    <a
                      href={`mailto:${BUSINESS_CONFIG.contact.email}`}
                      className="font-semibold text-stone-800 hover:text-[#163829] transition-colors"
                    >
                      {BUSINESS_CONFIG.contact.email}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-stone-100 flex items-center justify-center text-[#163829] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider block">
                      Office Location
                    </span>
                    <p className="font-semibold text-stone-900">
                      {BUSINESS_CONFIG.address.line1}
                    </p>
                    <p className="text-xs text-stone-600 mt-0.5">
                      {BUSINESS_CONFIG.address.line2}
                    </p>
                    <p className="text-xs text-stone-600">
                      {BUSINESS_CONFIG.address.locality}, {BUSINESS_CONFIG.address.city}, West Bengal {BUSINESS_CONFIG.address.pincode}
                    </p>
                    <span className="inline-block mt-1 text-[11px] text-[#163829] font-medium bg-stone-100 px-2 py-0.5 rounded">
                      Landmark: {BUSINESS_CONFIG.address.landmark}
                    </span>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-stone-100 flex items-center justify-center text-[#163829] shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider block">
                      Office & Consultation Hours
                    </span>
                    {BUSINESS_CONFIG.businessHours.map((bh, i) => (
                      <p key={i} className="text-xs text-stone-700 mt-0.5">
                        <strong>{bh.days}:</strong> {bh.time}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Embed Section */}
            <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm">
              <div className="p-3.5 bg-stone-50 border-b border-stone-200 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 font-semibold text-stone-800">
                  <MapPin className="w-3.5 h-3.5 text-[#163829]" />
                  <span>Google Maps: Topsia - Kasba - EM Bypass Hub</span>
                </div>
                <a
                  href={BUSINESS_CONFIG.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#163829] hover:underline font-semibold"
                >
                  Open in Maps ↗
                </a>
              </div>
              <div className="h-64 w-full bg-stone-100">
                <iframe
                  title="Ganapati Real Estate Location"
                  src={BUSINESS_CONFIG.mapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
            </div>

          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm">
              <div className="border-b border-stone-100 pb-4 mb-6">
                <h3 className="font-serif-display text-2xl font-bold text-stone-900">
                  Send a Direct Property Enquiry
                </h3>
                <p className="text-stone-600 text-sm mt-1">
                  Fill in your requirements below. Dipendu Sen will review and call or message you back promptly.
                </p>
              </div>

              {formSubmitted ? (
                <div className="py-8 text-center space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-[#163829]/10 text-[#163829] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8 text-[#25D366]" />
                  </div>
                  <h4 className="font-serif-display text-2xl font-bold text-stone-900">
                    Thank You, {formData.fullName}!
                  </h4>
                  <p className="text-stone-600 text-sm max-w-md mx-auto leading-relaxed">
                    Your inquiry regarding <strong>{formData.propertyInterest}</strong> in <strong>{formData.preferredArea}</strong> has been logged.
                  </p>
                  
                  {/* WhatsApp Forwarding Button */}
                  <div className="pt-4 space-y-3 max-w-sm mx-auto">
                    <button
                      onClick={handleSendViaWhatsApp}
                      className="w-full py-3.5 px-4 rounded-xl bg-[#25D366] text-stone-950 font-bold text-sm hover:bg-[#20ba5a] transition-all flex items-center justify-center gap-2 shadow-md shadow-[#25D366]/20"
                    >
                      <MessageCircle className="w-4 h-4 fill-stone-950 text-white" />
                      <span>Forward Directly to Dipendu Sen via WhatsApp</span>
                    </button>

                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="text-xs text-stone-500 hover:text-stone-800 underline block mx-auto"
                    >
                      Submit Another Requirement
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name and Phone */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                        Your Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Subir Mukherjee"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 bg-stone-50/50 text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#163829] focus:bg-white"
                        id="contact-form-name"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                        Phone / WhatsApp Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 98301 XXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 bg-stone-50/50 text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#163829] focus:bg-white"
                        id="contact-form-phone"
                      />
                    </div>
                  </div>

                  {/* Email & Property Interest */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. subir@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 bg-stone-50/50 text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#163829] focus:bg-white"
                        id="contact-form-email"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                        Property Interest
                      </label>
                      <select
                        value={formData.propertyInterest}
                        onChange={(e) => setFormData({ ...formData, propertyInterest: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 bg-white text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#163829]"
                        id="contact-form-interest"
                      >
                        <option value="Residential Sale / Purchase">Residential Flat / Apartment Purchase</option>
                        <option value="Selling My Property">Selling My Property (Owner Listing)</option>
                        <option value="Land / Plot Purchase">Land / Plot Purchase or Sale</option>
                        <option value="Commercial Space">Commercial Showroom / Office Space</option>
                        <option value="Rental Flat / Tenant Search">Rental Flat / Tenant Placement</option>
                        <option value="Property Documentation / Mutation">Property Documentation / Title Search</option>
                      </select>
                    </div>
                  </div>

                  {/* Preferred Location and Budget */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                        Preferred Kolkata Locality
                      </label>
                      <select
                        value={formData.preferredArea}
                        onChange={(e) => setFormData({ ...formData, preferredArea: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 bg-white text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#163829]"
                      >
                        {BUSINESS_CONFIG.areasServed.map((area) => (
                          <option key={area} value={area}>{area}</option>
                        ))}
                        <option value="Other Area in Kolkata">Other Area in Kolkata</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                        Estimated Budget
                      </label>
                      <select
                        value={formData.budgetRange}
                        onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 bg-white text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#163829]"
                      >
                        <option value="Under ₹50 Lakhs">Under ₹50 Lakhs</option>
                        <option value="₹50 Lakhs – ₹1 Crore">₹50 Lakhs – ₹1 Crore</option>
                        <option value="₹1 Crore – ₹2 Crore">₹1 Crore – ₹2 Crore</option>
                        <option value="Above ₹2 Crore">Above ₹2 Crore</option>
                        <option value="Rental: ₹15k - ₹40k / mo">Rental: ₹15k - ₹40k / month</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                      Specific Requirements / Notes
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. Looking for a 3 BHK near Ruby or Topsia with lift and car parking. Need to close deal within 3 months."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 bg-stone-50/50 text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#163829] focus:bg-white resize-none"
                      id="contact-form-message"
                    />
                  </div>

                  {/* Submit Actions */}
                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      className="flex-1 py-3.5 px-6 rounded-xl bg-[#163829] text-white font-bold text-sm hover:bg-[#10291e] transition-colors flex items-center justify-center gap-2 shadow-md shadow-[#163829]/15"
                      id="contact-form-submit"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Property Request</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleSendViaWhatsApp}
                      className="py-3.5 px-5 rounded-xl bg-[#25D366] text-stone-950 font-bold text-sm hover:bg-[#20ba5a] transition-colors flex items-center justify-center gap-2"
                      title="Send immediately via WhatsApp"
                    >
                      <MessageCircle className="w-4 h-4 fill-stone-950 text-white" />
                      <span className="hidden sm:inline">Send on</span> WhatsApp
                    </button>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-stone-500 pt-1">
                    <AlertCircle className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                    <span>Your contact information is strictly confidential. No spam or unsolicited calls.</span>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
