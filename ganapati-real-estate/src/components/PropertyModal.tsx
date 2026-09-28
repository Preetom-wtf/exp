import { useState, useEffect } from 'react';
import { X, MapPin, CheckCircle, MessageCircle, Phone, ShieldCheck, Compass, Maximize, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { PropertyListing } from '../types';
import { BUSINESS_CONFIG, getPropertyWhatsAppUrl } from '../data/businessData';

interface PropertyModalProps {
  property: PropertyListing | null;
  onClose: () => void;
}

export function PropertyModal({ property, onClose }: PropertyModalProps) {
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);

  useEffect(() => {
    setActivePhotoIndex(0);
  }, [property]);

  if (!property) return null;

  const photos = property.gallery && property.gallery.length > 0
    ? property.gallery
    : [property.featuredImage];

  const handleNextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActivePhotoIndex((prev) => (prev + 1) % photos.length);
  };

  const handlePrevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActivePhotoIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-stone-950/75 backdrop-blur-sm overflow-y-auto animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl max-w-2xl w-full my-8 shadow-2xl border border-stone-200 overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-20 w-9 h-9 rounded-full bg-stone-900/80 text-white flex items-center justify-center hover:bg-stone-900 transition-colors shadow-lg"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Multi-Photo Carousel / Main Image */}
        <div className="relative h-64 sm:h-80 w-full bg-stone-900 overflow-hidden group">
          <img
            key={photos[activePhotoIndex]}
            src={photos[activePhotoIndex]}
            alt={`${property.title} - View ${activePhotoIndex + 1}`}
            className="w-full h-full object-cover transition-opacity duration-300"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-stone-950/30" />
          
          {/* Status & Category Pills */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-10">
            <span className="bg-[#163829] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
              {property.status}
            </span>
            <span className="bg-white/90 text-stone-900 text-xs font-bold px-3 py-1 rounded-full shadow-md uppercase tracking-wider">
              {property.category}
            </span>
          </div>

          {/* Photo Counter Tag */}
          {photos.length > 1 && (
            <div className="absolute top-4 right-14 z-10 bg-black/60 backdrop-blur-xs text-white text-[11px] font-medium px-2.5 py-1 rounded-full flex items-center gap-1.5 border border-white/20">
              <ImageIcon className="w-3 h-3 text-[#E2B755]" />
              <span>{activePhotoIndex + 1} / {photos.length} Photos</span>
            </div>
          )}

          {/* Previous / Next Arrows */}
          {photos.length > 1 && (
            <>
              <button
                onClick={handlePrevPhoto}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-stone-900/70 hover:bg-stone-900 text-white flex items-center justify-center transition-all opacity-90 group-hover:opacity-100 shadow-md"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNextPhoto}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-stone-900/70 hover:bg-stone-900 text-white flex items-center justify-center transition-all opacity-90 group-hover:opacity-100 shadow-md"
                aria-label="Next photo"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          {/* Price & Location Banner on Image */}
          <div className="absolute bottom-3 left-4 right-4 text-white flex items-end justify-between">
            <div>
              <div className="font-serif-display text-2xl sm:text-3xl font-bold text-white drop-shadow-md">
                {property.price}
              </div>
              <p className="text-stone-200 text-xs sm:text-sm font-medium flex items-center gap-1.5 mt-0.5">
                <MapPin className="w-3.5 h-3.5 text-[#E2B755]" />
                {property.location}
              </p>
            </div>
            <span className="text-xs bg-white/20 backdrop-blur-xs text-white px-2.5 py-1 rounded-md font-semibold">
              {property.size}
            </span>
          </div>
        </div>

        {/* Thumbnail Preview Strip */}
        {photos.length > 1 && (
          <div className="bg-stone-900 px-4 py-2.5 flex items-center gap-2 overflow-x-auto scrollbar-none border-b border-stone-800">
            {photos.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActivePhotoIndex(idx)}
                className={`relative shrink-0 w-14 h-10 rounded-md overflow-hidden transition-all border-2 ${
                  activePhotoIndex === idx
                    ? 'border-[#25D366] ring-2 ring-[#25D366]/40 scale-105'
                    : 'border-stone-700 opacity-60 hover:opacity-100'
                }`}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </button>
            ))}
          </div>
        )}

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[50vh] overflow-y-auto">
          <div>
            <h3 className="font-serif-display text-xl sm:text-2xl font-bold text-stone-900">
              {property.title}
            </h3>
            <div className="flex flex-wrap gap-4 mt-3 text-xs sm:text-sm text-stone-600 border-y border-stone-100 py-3">
              <div className="flex items-center gap-1.5">
                <Maximize className="w-4 h-4 text-[#163829]" />
                <span>Configuration: <strong>{property.bhkOrType}</strong></span>
              </div>
              <div className="flex items-center gap-1.5">
                <Compass className="w-4 h-4 text-[#163829]" />
                <span>Super Area: <strong>{property.size}</strong></span>
              </div>
              {property.facing && (
                <div className="flex items-center gap-1.5">
                  <Compass className="w-4 h-4 text-[#163829]" />
                  <span>Facing: <strong>{property.facing}</strong></span>
                </div>
              )}
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-2">
              Property Overview & Details
            </h4>
            <p className="text-stone-700 text-sm leading-relaxed">
              {property.description}
            </p>
          </div>

          {/* Amenities & Key Highlights */}
          <div>
            <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-2.5">
              Verified Specifications & Amenities:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {property.highlights.map((h, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-stone-700 bg-stone-50 p-2 rounded-lg border border-stone-100">
                  <CheckCircle className="w-3.5 h-3.5 text-[#163829] shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RERA and Legal Notice */}
          <div className="bg-[#163829]/5 border border-[#163829]/15 rounded-xl p-3.5 flex items-center justify-between text-xs text-stone-700">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#163829]" />
              <span>Sanction Plan & Title Vetted by Dipendu Sen</span>
            </div>
            <span className="font-semibold text-[#163829]">Zero Dispute Guarantee</span>
          </div>

          {/* Modal Action CTA */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <a
              href={getPropertyWhatsAppUrl(property)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#25D366] text-stone-950 font-bold text-sm hover:bg-[#20ba5a] transition-all shadow-md"
            >
              <MessageCircle className="w-4 h-4 fill-stone-950 text-white" />
              <span>Request Photos & Site Visit on WhatsApp</span>
            </a>

            <a
              href={`tel:${BUSINESS_CONFIG.contact.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl border border-stone-300 text-stone-800 text-sm font-semibold hover:bg-stone-50 transition-colors"
            >
              <Phone className="w-4 h-4 text-[#163829]" />
              <span>Call Dipendu Sen</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
