import { MessageCircle, ArrowRight } from 'lucide-react';
import { BUSINESS_CONFIG, getWhatsAppUrl } from '../data/businessData';
import { PropertyCategory } from '../types';

interface HeroProps {
  onSearch: (category: PropertyCategory, locality: string) => void;
}

export function Hero({ onSearch }: HeroProps) {
  const handleScrollToSection = (selector: string) => {
    const el = document.querySelector(selector);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative bg-white text-stone-900 pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden border-b border-stone-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Main Hero Copy (Left column - Exact format from Screenshot 1) */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8">
            
            {/* Top Subtitle: DIPENDU SEN PRESENTS */}
            <div className="tracking-[0.22em] text-[#A0522D] font-bold text-xs sm:text-sm uppercase">
              Dipendu Sen Presents
            </div>

            {/* Main Headline: Trusted Property Partner in Kolkata. */}
            <h1 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-stone-950 leading-[1.08]">
              Trusted<br />
              Property<br />
              Partner in<br />
              Kolkata.
            </h1>

            {/* Description Text */}
            <p className="text-stone-600 text-base sm:text-lg leading-relaxed max-w-lg font-normal">
              Ganapati Real Estate offers unparalleled local expertise across Topsia, Kasba, Beleghata, and Tangra. 
              Finding your perfect space has never been more secure.
            </p>

            {/* Action Buttons: ENQUIRE ON WHATSAPP + CONTACT US */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {/* WhatsApp Button */}
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-lg bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs sm:text-sm tracking-wider uppercase shadow-md shadow-[#25D366]/20 transition-all transform hover:-translate-y-0.5"
                id="hero-whatsapp-cta"
              >
                <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
                <span>Enquire on WhatsApp</span>
              </a>

              {/* Outlined Contact Us Button */}
              <button
                onClick={() => handleScrollToSection('#contact')}
                className="inline-flex items-center justify-center px-6 sm:px-7 py-3.5 rounded-lg border border-stone-800 text-stone-900 hover:bg-stone-900 hover:text-white font-bold text-xs sm:text-sm tracking-wider uppercase transition-all"
                id="hero-contact-cta"
              >
                <span>Contact Us</span>
              </button>
            </div>

            {/* Verified Credentials Trust Signals */}
            <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-stone-500">
              <span className="flex items-center gap-1.5 text-stone-800 font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#25D366]" />
                WBRERA Registered: {BUSINESS_CONFIG.rera.regNumber}
              </span>
              <span className="hidden sm:inline text-stone-300">•</span>
              <span>16+ Years Local Experience</span>
              <span className="hidden sm:inline text-stone-300">•</span>
              <span>620+ Completed Deals</span>
            </div>

          </div>

          {/* Right Column: Arched Architectural Image from Screenshot 1 */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md sm:max-w-lg">
              {/* Subtle background glow */}
              <div className="absolute -top-6 -right-6 w-72 h-72 bg-[#A0522D]/5 rounded-full blur-3xl pointer-events-none" />
              
              {/* Arched Image Container */}
              <div className="relative rounded-t-[180px] sm:rounded-t-[220px] lg:rounded-t-[260px] overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] bg-stone-100 group">
                <img
                  src="https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=1200&q=80"
                  alt="Modern luxury residential apartments in Kolkata - Ganapati Real Estate"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                
                {/* Subtle bottom gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/45 via-transparent to-transparent pointer-events-none" />

                {/* Floating Apartment Badge at top right */}
                <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-md rounded-full px-3.5 py-1.5 shadow-md border border-stone-200/80 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#25D366]" />
                  <span className="text-[11px] font-bold text-stone-900 tracking-wide uppercase">
                    2 & 3 BHK Apartments
                  </span>
                </div>

                {/* Micro-badge at bottom */}
                <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-lg border border-stone-200/80 flex items-center justify-between">
                  <div>
                    <p className="text-xs sm:text-sm font-bold text-stone-900 font-serif-display">
                      Premium Kolkata Apartments
                    </p>
                    <p className="text-[11px] text-stone-500">
                      Kasba • Topsia • Beleghata • EM Bypass
                    </p>
                  </div>
                  <button
                    onClick={() => handleScrollToSection('#listings')}
                    className="text-xs font-bold text-[#A0522D] hover:underline flex items-center gap-1"
                  >
                    <span>View Flats</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
