import { Shield, Phone, Mail, MapPin, MessageCircle, ArrowUp } from 'lucide-react';
import { BUSINESS_CONFIG, getWhatsAppUrl } from '../data/businessData';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1C1917] text-stone-300 pt-16 pb-24 lg:pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-stone-800/80">
          
          {/* Column 1: Brand & Founder Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-md bg-[#FAF8F5] flex items-center justify-center text-stone-950 font-serif-display text-lg font-bold">
                গ
              </div>
              <div>
                <span className="font-serif-display text-xl font-bold text-white tracking-tight block">
                  {BUSINESS_CONFIG.name}
                </span>
                <span className="text-xs text-[#C49A45]">
                  Owned & Led by {BUSINESS_CONFIG.founder}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed font-light">
              Your trusted Kolkata property partner for over 16 years. Dedicated to transparent transactions, 
              verified titles, and comprehensive documentation across Topsia, Kasba, Tangra, Beleghata, and EM Bypass.
            </p>

            {/* WBRERA Regulatory Highlight */}
            <div className="bg-stone-900/90 p-4 rounded-xl border border-stone-800 text-xs space-y-1">
              <div className="flex items-center gap-1.5 text-stone-200 font-bold">
                <Shield className="w-3.5 h-3.5 text-[#25D366]" />
                <span>WBRERA Compliance Line</span>
              </div>
              <p className="text-stone-300 font-mono">
                Registration No: <strong className="text-white">{BUSINESS_CONFIG.rera.regNumber}</strong>
              </p>
              <p className="text-[11px] text-stone-400">
                Registered Real Estate Agent under West Bengal Real Estate Regulatory Authority.
              </p>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-400">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Services</a>
              </li>
              <li>
                <a href="#listings" className="hover:text-white transition-colors">Featured Listings</a>
              </li>
              <li>
                <a href="#projects-gallery" className="hover:text-white transition-colors">Projects & Photos</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-white transition-colors">Why Choose Us</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact Office</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Areas Served in Kolkata (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Prime Kolkata Areas
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {BUSINESS_CONFIG.areasServed.map((area) => (
                <a
                  key={area}
                  href="#listings"
                  className="text-xs bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-white px-3 py-1 rounded-md border border-stone-800 transition-colors"
                >
                  {area}
                </a>
              ))}
            </div>
            <p className="text-xs text-stone-400 pt-2 font-light">
              Also catering to Greater Kolkata, South Kolkata, EM Bypass, and Salt Lake corridors on request.
            </p>
          </div>

          {/* Column 4: Contact Direct (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Direct Contact
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-stone-300">
              <a
                href={`tel:${BUSINESS_CONFIG.contact.phoneRaw}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#25D366]" />
                <span>{BUSINESS_CONFIG.contact.phoneDisplay}</span>
              </a>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#25D366] hover:underline font-semibold"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Chat Directly on WhatsApp</span>
              </a>

              <a
                href={`mailto:${BUSINESS_CONFIG.contact.email}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-stone-400" />
                <span>{BUSINESS_CONFIG.contact.email}</span>
              </a>

              <div className="flex items-start gap-2 pt-1">
                <MapPin className="w-3.5 h-3.5 text-[#C49A45] shrink-0 mt-0.5" />
                <span className="text-xs text-stone-400 leading-relaxed">
                  {BUSINESS_CONFIG.address.fullFormatted}
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p>
            © {new Date().getFullYear()} {BUSINESS_CONFIG.name}. All Rights Reserved. Led by Dipendu Sen.
          </p>

          <div className="flex items-center gap-4">
            <span className="text-stone-500">
              WBRERA: {BUSINESS_CONFIG.rera.regNumber}
            </span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-stone-300 hover:text-white transition-colors"
              id="footer-scroll-top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
