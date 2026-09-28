import { X, CheckCircle, AlertTriangle, ShieldCheck, MapPin, Phone, Mail, FileText } from 'lucide-react';
import { BUSINESS_CONFIG, CLIENT_SETUP_CHECKLIST } from '../data/businessData';

interface ClientChecklistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ClientChecklistModal({ isOpen, onClose }: ClientChecklistModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-7 shadow-2xl border border-stone-200 space-y-5">
        <div className="flex items-start justify-between border-b border-stone-100 pb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#163829]/10 flex items-center justify-center text-[#163829]">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif-display text-xl font-bold text-stone-900">
                Client Handover & Configuration Checklist
              </h3>
              <p className="text-xs text-stone-500">
                Setup guide for Dipendu Sen / Ganapati Real Estate
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-stone-400 hover:text-stone-700 font-bold"
            aria-label="Close checklist"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-3.5 flex items-start gap-2.5 text-xs text-amber-900">
          <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold block">Items Identified in Brief:</span>
            All key brokerage sections have been built with realistic Kolkata data. The items below can be finalized with the client's official government documentation.
          </div>
        </div>

        <div className="space-y-3">
          {CLIENT_SETUP_CHECKLIST.map((item, idx) => (
            <div key={idx} className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-stone-900">{item.item}</span>
                <span className="text-[11px] font-medium bg-stone-200/80 px-2 py-0.5 rounded text-stone-700">
                  {item.status}
                </span>
              </div>
              <p className="text-xs text-stone-600">{item.actionNote}</p>
            </div>
          ))}
        </div>

        <div className="p-3 rounded-xl bg-[#163829]/5 border border-[#163829]/15 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-stone-700">
            <ShieldCheck className="w-4 h-4 text-[#163829]" />
            <span>WBRERA Compliance Notice is active across header & footer</span>
          </div>
        </div>

        <div className="pt-2 flex justify-end">
          <button
            onClick={onClose}
            className="py-2.5 px-5 rounded-xl bg-[#163829] text-white text-xs font-semibold hover:bg-[#10291e]"
          >
            Got it, Return to Site
          </button>
        </div>
      </div>
    </div>
  );
}
