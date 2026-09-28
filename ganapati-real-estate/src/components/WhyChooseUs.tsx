import { ShieldCheck, Compass, Handshake, Eye, FileText, CheckCircle } from 'lucide-react';
import { WHY_CHOOSE_US, BUSINESS_CONFIG, getWhatsAppUrl } from '../data/businessData';

export function WhyChooseUs() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass':
        return <Compass className="w-6 h-6 text-[#163829]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#163829]" />;
      case 'Handshake':
        return <Handshake className="w-6 h-6 text-[#163829]" />;
      case 'Eye':
      default:
        return <Eye className="w-6 h-6 text-[#163829]" />;
    }
  };

  return (
    <section id="why-us" className="py-16 sm:py-24 bg-[#FAF8F5] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#163829] bg-[#163829]/10 px-3 py-1 rounded-full mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-[#163829]" />
            Trust & Integrity
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 leading-tight">
            Why Kolkata Homebuyers & Investors Trust Ganapati Real Estate
          </h2>
          <p className="mt-4 text-stone-600 text-base sm:text-lg leading-relaxed">
            Real estate in Kolkata requires genuine local familiarity, rigorous legal cross-checking, 
            and upfront honesty. Here is what guarantees your safety when working with Dipendu Sen.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {WHY_CHOOSE_US.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-7 sm:p-8 rounded-2xl border border-stone-200 shadow-sm hover:border-[#163829]/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#163829]/10 flex items-center justify-center mb-5">
                  {getIcon(item.icon)}
                </div>
                <h3 className="font-serif-display text-xl font-bold text-stone-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center gap-2 text-xs font-semibold text-[#163829]">
                <CheckCircle className="w-4 h-4 text-[#25D366]" />
                <span>Verified Standard by Dipendu Sen</span>
              </div>
            </div>
          ))}
        </div>

        {/* RERA and Legal Assurance Banner */}
        <div className="mt-12 bg-[#163829] text-white rounded-2xl p-6 sm:p-8 shadow-lg">
          <div className="grid lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-2">
              <div className="inline-flex items-center gap-2 bg-[#204e3b] px-3 py-1 rounded-full text-xs font-semibold text-[#c5ecd3]">
                <FileText className="w-3.5 h-3.5 text-[#25D366]" />
                <span>Regulatory Compliance Notice</span>
              </div>
              <h3 className="font-serif-display text-xl sm:text-2xl font-bold text-white">
                West Bengal Housing Industry Regulatory Authority (WBRERA)
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                We strictly adhere to West Bengal Real Estate Regulatory Authority standards. All marketing, 
                negotiation, and paperwork practices conform to state consumer protection guidelines. 
                Registration: <span className="font-mono text-[#E2B755] font-bold">{BUSINESS_CONFIG.rera.regNumber}</span>.
              </p>
            </div>

            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <a
                href={getWhatsAppUrl(`Hello Dipendu Babu, I would like to verify property title documents and learn more about WBRERA compliance.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-[#163829] font-bold text-sm hover:bg-stone-100 transition-colors shadow-md"
              >
                <span>Ask Legal Questions</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
