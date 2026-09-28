import { Star, Quote, CheckCircle2, MessageSquare } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/businessData';

export function Testimonials() {
  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-[#F5F2EB] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#163829] bg-[#163829]/10 px-3 py-1 rounded-full mb-3">
            <MessageSquare className="w-3.5 h-3.5 text-[#163829]" />
            Client Experiences
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 leading-tight">
            Trusted by Kolkata Homebuyers & Investors
          </h2>
          <p className="mt-3 text-stone-600 text-base sm:text-lg">
            Real feedback from doctors, IT professionals, and families who secured their properties through Dipendu Sen.
          </p>
        </div>

        {/* Testimonials 3-Card Grid */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-stone-200 shadow-sm flex flex-col justify-between relative group hover:border-[#163829]/30 transition-all"
            >
              <div>
                {/* Star Rating and Quote mark */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#E2B755]">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#E2B755]" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-stone-300" />
                </div>

                {/* Review Text */}
                <p className="text-stone-700 text-sm sm:text-base leading-relaxed italic">
                  "{t.review}"
                </p>
              </div>

              {/* Client Info Footer */}
              <div className="mt-6 pt-4 border-t border-stone-100">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-serif-display font-bold text-stone-900 text-base">
                      {t.clientName}
                    </h4>
                    <p className="text-xs text-stone-500 font-medium">
                      {t.clientRole} • {t.locality}
                    </p>
                  </div>
                </div>

                <div className="mt-2.5 flex items-center gap-1.5 text-[11px] text-[#163829] font-semibold bg-stone-50 px-2.5 py-1 rounded-md border border-stone-100">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
                  <span className="truncate">Transaction: {t.propertyPurchased}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Endorsement Quote */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-stone-500 font-medium">
            Over 94% of our new clients come from referrals by satisfied Kolkata families.
          </p>
        </div>

      </div>
    </section>
  );
}
