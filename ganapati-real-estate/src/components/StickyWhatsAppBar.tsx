import { useState } from 'react';
import { Phone, MessageCircle, X, ChevronUp, Clock } from 'lucide-react';
import { BUSINESS_CONFIG, getWhatsAppUrl } from '../data/businessData';

export function StickyWhatsAppBar() {
  const [showQuickModal, setShowQuickModal] = useState(false);
  const [quickQuery, setQuickQuery] = useState('');

  const quickOptions = [
    'I want to buy a 2/3 BHK flat in Topsia / Kasba',
    'I am looking for residential land in Beleghata',
    'I need commercial showroom/office space',
    'I need help with property documentation / mutation',
    'I want to sell my property in Kolkata'
  ];

  const handleSendQuick = (text: string) => {
    window.open(getWhatsAppUrl(`Hello Dipendu Babu, ${text}`), '_blank');
    setShowQuickModal(false);
  };

  return (
    <>
      {/* Mobile Sticky Bottom Bar (visible on sm and below screens) */}
      <div className="fixed bottom-0 inset-x-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-t border-stone-300 py-2 px-3 sm:hidden shadow-2xl">
        <div className="flex items-center gap-2">
          {/* Call button */}
          <a
            href={`tel:${BUSINESS_CONFIG.contact.phoneRaw}`}
            className="flex-1 py-3 px-3 rounded-xl bg-white border border-stone-300 text-stone-900 font-bold text-xs flex items-center justify-center gap-2 active:bg-stone-100 shadow-xs"
            id="mobile-sticky-call"
          >
            <Phone className="w-4 h-4 text-[#163829]" />
            <span>Call Broker</span>
          </a>

          {/* WhatsApp Primary CTA button */}
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-[1.4] py-3 px-3 rounded-xl bg-[#25D366] text-stone-950 font-bold text-xs flex items-center justify-center gap-2 active:bg-[#20ba5a] shadow-md shadow-[#25D366]/30"
            id="mobile-sticky-whatsapp"
          >
            <MessageCircle className="w-4 h-4 fill-stone-950 text-white" />
            <span>WhatsApp Chat</span>
          </a>

          {/* Quick topics trigger */}
          <button
            onClick={() => setShowQuickModal(true)}
            className="p-3 rounded-xl bg-stone-100 border border-stone-200 text-stone-700"
            title="Quick Options"
            aria-label="Open quick property questions"
          >
            <ChevronUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Floating WhatsApp Button (bottom right - visible on all screens like in screenshots) */}
      <div className="fixed bottom-6 right-6 z-40">
        <div className="relative group">
          {/* Tooltip badge */}
          <div className="hidden sm:block absolute right-0 -top-12 bg-stone-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Enquire directly with Dipendu Sen
          </div>

          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-xl shadow-[#25D366]/40 transition-transform hover:scale-110 active:scale-95"
            aria-label="Chat on WhatsApp with Dipendu Sen"
            id="floating-whatsapp-btn"
          >
            <MessageCircle className="w-7 h-7 fill-white" />
          </a>
        </div>
      </div>

      {/* Quick WhatsApp Inquiry Modal */}
      {showQuickModal && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-3 sm:p-4 bg-stone-950/60 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-t-2xl sm:rounded-2xl max-w-md w-full p-5 sm:p-6 shadow-2xl border border-stone-200 space-y-4">
            <div className="flex items-center justify-between border-b border-stone-100 pb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center text-white">
                  <MessageCircle className="w-4 h-4 fill-white" />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 text-sm">Direct WhatsApp Enquiry</h4>
                  <p className="text-[11px] text-stone-500">Select a topic for instant response</p>
                </div>
              </div>
              <button
                onClick={() => setShowQuickModal(false)}
                className="p-1 text-stone-400 hover:text-stone-700 font-bold"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-2">
              {quickOptions.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendQuick(opt)}
                  className="w-full text-left p-3 rounded-xl bg-stone-50 hover:bg-[#163829]/10 text-xs font-semibold text-stone-800 transition-colors border border-stone-100 flex items-center justify-between"
                >
                  <span>{opt}</span>
                  <MessageCircle className="w-3.5 h-3.5 text-[#25D366] shrink-0 ml-2" />
                </button>
              ))}
            </div>

            <div className="pt-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Or type custom property question..."
                  value={quickQuery}
                  onChange={(e) => setQuickQuery(e.target.value)}
                  className="flex-1 px-3 py-2 text-xs border border-stone-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#163829]"
                />
                <button
                  onClick={() => handleSendQuick(quickQuery || 'I have a property enquiry in Kolkata')}
                  className="px-4 py-2 bg-[#25D366] text-stone-950 font-bold text-xs rounded-xl hover:bg-[#20ba5a]"
                >
                  Send
                </button>
              </div>
            </div>

            <div className="text-[11px] text-stone-500 flex items-center gap-1.5 pt-1">
              <Clock className="w-3 h-3 text-[#163829]" />
              <span>Dipendu Sen typically replies within 15 minutes during 10 AM – 8 PM.</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
