import { Shield, MessageCircle, Phone, ArrowRight, CheckCircle2 } from 'lucide-react';
import { BUSINESS_CONFIG, getWhatsAppUrl } from '../data/businessData';

export function AboutSection() {
  const handleScrollToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.querySelector('#services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-16 sm:py-24 bg-[#EAE0D5] text-stone-900 overflow-hidden border-b border-[#ded2c3]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Arch Portrait of Dipendu Sen (Matches Screenshot 2) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm">
              
              {/* Outer Thin Arch Line Frame */}
              <div className="border border-[#BFAFA0] rounded-t-full p-3 sm:p-4 shadow-sm bg-[#EAE0D5]/50">
                
                {/* Inner Arch Photo Container */}
                <div className="rounded-t-full overflow-hidden aspect-[3/4] shadow-md bg-stone-200 relative group">
                  <img
                    src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1000&q=80"
                    alt="Dipendu Sen - Founder & Principal Consultant of Ganapati Real Estate Kolkata"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Subtle Gradient & Badge at base */}
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent opacity-80" />
                  
                  <div className="absolute bottom-4 inset-x-4 text-center text-white">
                    <p className="font-serif-display text-lg font-bold tracking-wide">
                      {BUSINESS_CONFIG.founder}
                    </p>
                    <p className="text-[11px] text-stone-200 tracking-wider uppercase font-medium">
                      Founder & Principal Broker • 16+ Yrs
                    </p>
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* Right Column: Editorial Copy (Matches Screenshot 2) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7">
            
            {/* Main Serif Headline */}
            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-950 leading-tight">
              Rooted in Trust.<br />
              Driven by Results.
            </h2>

            {/* Paragraph 1 */}
            <p className="text-stone-700 text-base sm:text-lg leading-relaxed font-normal">
              Founded and led by <strong className="text-stone-950 font-semibold">{BUSINESS_CONFIG.founder}</strong>, 
              Ganapati Real Estate has established itself as a cornerstone of the Kolkata property market. 
              We specialize in matching families and businesses with spaces that perfectly align with their vision and budget.
            </p>

            {/* Paragraph 2 */}
            <p className="text-stone-700 text-base sm:text-lg leading-relaxed font-normal">
              With deep local expertise across <span className="text-stone-950 font-medium">Topsia, Kasba, Beleghata, and Tangra</span>, 
              our hands-on approach ensures transparency, fair pricing, and peace of mind at every single step of your real estate journey.
            </p>

            {/* Explore Services Link as seen in Screenshot 2 */}
            <div className="pt-2">
              <a
                href="#services"
                onClick={handleScrollToServices}
                className="text-xs sm:text-sm font-bold tracking-[0.2em] text-stone-950 uppercase underline underline-offset-8 decoration-stone-900 hover:text-[#A0522D] hover:decoration-[#A0522D] transition-colors inline-block"
              >
                Explore Our Services
              </a>
            </div>

            {/* Trust Micro-Cards */}
            <div className="pt-4 border-t border-[#D5C7B8] grid sm:grid-cols-2 gap-4 text-xs text-stone-800">
              <div className="bg-white/60 backdrop-blur-xs p-3.5 rounded-xl border border-[#D5C7B8]/70 flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-stone-950">100% Vetted Deeds</strong>
                  <span className="text-stone-600">30-year chain title scrutiny before arranging site visits.</span>
                </div>
              </div>

              <div className="bg-white/60 backdrop-blur-xs p-3.5 rounded-xl border border-[#D5C7B8]/70 flex items-start gap-3">
                <Shield className="w-4 h-4 text-[#A0522D] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-stone-950">WBRERA Registered</strong>
                  <span className="text-stone-600">{BUSINESS_CONFIG.rera.regNumber}</span>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp Action */}
            <div className="pt-1 flex flex-wrap items-center gap-3">
              <a
                href={getWhatsAppUrl(`Hello Dipendu Babu, I read about Ganapati Real Estate and would like to speak directly with you regarding property options in Kolkata.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs tracking-wider uppercase transition-colors"
                id="about-consult-cta"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                <span>Talk with Dipendu Sen</span>
              </a>

              <a
                href={`tel:${BUSINESS_CONFIG.contact.phoneRaw}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-stone-800 text-stone-900 hover:bg-stone-900 hover:text-white font-bold text-xs tracking-wider uppercase transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call {BUSINESS_CONFIG.contact.phoneDisplay}</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
