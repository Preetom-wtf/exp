import { Home, Layers, Key, Building2, FileCheck2, MessageCircle, ArrowRight } from 'lucide-react';
import { getWhatsAppUrl } from '../data/businessData';

export function ServicesSection() {
  const services = [
    {
      id: 'residential-sales',
      title: 'Residential Sales',
      description: 'Find your dream flat or apartment in prime Kolkata locations with completely verified titles.',
      icon: Home,
      whatsappNote: 'Residential flats and apartments in Kolkata'
    },
    {
      id: 'land-plots',
      title: 'Land & Plots',
      description: 'Secure high-value plots for future investment or custom residential construction.',
      icon: Layers,
      whatsappNote: 'Freehold Bastu plots and land in Kolkata'
    },
    {
      id: 'rental-properties',
      title: 'Rental Properties',
      description: 'Hassle-free leasing services ensuring reliable tenants and smooth transitions.',
      icon: Key,
      whatsappNote: 'Rental residential and office properties in Kolkata'
    },
    {
      id: 'commercial-property',
      title: 'Commercial Property',
      description: 'Strategic retail and office spaces along prime Kolkata commercial corridors.',
      icon: Building2,
      whatsappNote: 'Commercial offices and retail spaces in Topsia / EM Bypass'
    },
    {
      id: 'documentation',
      title: 'Documentation',
      description: 'Complete legal scrutiny, KMC mutation, BL&LRO porcha search, and registry support.',
      icon: FileCheck2,
      whatsappNote: 'Deed scrutiny, KMC mutation, and legal verification support'
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-24 bg-[#FAF8F5] text-stone-900 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        
        {/* Section Header (Matches Screenshot 3) */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="font-serif-display text-4xl sm:text-5xl font-bold text-stone-950 tracking-tight mb-3">
            Our Services
          </h2>
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed font-normal">
            Comprehensive, end-to-end real estate solutions tailored to the Kolkata market.
          </p>
        </div>

        {/* 3-Column Services Grid (5 standard cards + 1 terracotta CTA card) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          
          {services.map((srv) => {
            const Icon = srv.icon;
            return (
              <div
                key={srv.id}
                className="bg-white rounded-2xl p-7 sm:p-8 border border-stone-200/80 shadow-xs hover:shadow-md transition-all group flex flex-col justify-between"
              >
                <div>
                  {/* Square Tan/Taupe Rounded Icon Box as in Screenshot 3 */}
                  <div className="w-12 h-12 rounded-xl bg-[#EAE2D7] text-stone-900 flex items-center justify-center mb-6 group-hover:bg-[#dfd4c6] transition-colors">
                    <Icon className="w-6 h-6 stroke-[1.75]" />
                  </div>

                  {/* Service Title */}
                  <h3 className="font-serif-display text-xl sm:text-2xl font-bold text-stone-950 mb-3">
                    {srv.title}
                  </h3>

                  {/* Service Description */}
                  <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                    {srv.description}
                  </p>
                </div>

                {/* Subtle Direct WhatsApp Link */}
                <div className="pt-6 mt-6 border-t border-stone-100 flex items-center justify-between">
                  <a
                    href={getWhatsAppUrl(`Hello Dipendu Babu, I am inquiring regarding ${srv.whatsappNote}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold uppercase tracking-wider text-stone-900 hover:text-[#B85B35] inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>Enquire Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}

          {/* Card 6: Terracotta Accent Card from Screenshot 3 */}
          <div className="bg-[#B85B35] text-white rounded-2xl p-7 sm:p-8 shadow-md flex flex-col justify-between relative overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 space-y-4">
              <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-white leading-tight">
                Looking for something specific?
              </h3>
              <p className="text-stone-100/90 text-sm sm:text-base leading-relaxed">
                Tell us your exact requirements in Kolkata. We source bespoke off-market properties and negotiate directly with developers.
              </p>
            </div>

            <div className="relative z-10 pt-6">
              <a
                href={getWhatsAppUrl(`Hello Dipendu Babu, I have a specific custom property requirement in Kolkata. Here are the details:`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white text-[#B85B35] hover:bg-stone-100 font-bold text-xs uppercase tracking-wider shadow-sm transition-all transform hover:-translate-y-0.5"
                id="services-custom-whatsapp-cta"
              >
                <MessageCircle className="w-4 h-4 fill-[#B85B35]" />
                <span>Enquire on WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
