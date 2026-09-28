import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, MessageCircle, MapPin, Tag, Download } from 'lucide-react';
import { GalleryPhoto } from '../types';
import { getGalleryPhotoWhatsAppUrl } from '../data/businessData';

interface PhotoLightboxModalProps {
  photos: GalleryPhoto[];
  initialIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

export function PhotoLightboxModal({ photos, initialIndex, isOpen, onClose }: PhotoLightboxModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, photos.length]);

  if (!isOpen || photos.length === 0) return null;

  const currentPhoto = photos[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/95 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      {/* Top Header Bar */}
      <div 
        className="absolute top-0 left-0 right-0 z-20 px-4 py-3 bg-gradient-to-b from-stone-950/90 to-transparent flex items-center justify-between text-white"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3">
          <span className="text-xs font-bold uppercase tracking-wider bg-white/15 px-3 py-1 rounded-full border border-white/10">
            {currentPhoto.roomType.toUpperCase()}
          </span>
          <span className="text-xs text-stone-300 font-medium hidden sm:inline">
            {currentIndex + 1} of {photos.length} Photos
          </span>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={getGalleryPhotoWhatsAppUrl(currentPhoto)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#25D366] text-stone-950 text-xs font-bold hover:bg-[#20ba5a] transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-stone-950 text-white" />
            <span className="hidden sm:inline">Enquire About This Flat</span>
            <span className="sm:hidden">Enquire</span>
          </a>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Close photo lightbox"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Image Stage */}
      <div 
        className="relative max-w-5xl w-full h-[75vh] sm:h-[80vh] mx-auto px-4 flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Navigation Arrows */}
        {photos.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-4 sm:left-6 z-10 w-11 h-11 rounded-full bg-stone-900/80 hover:bg-stone-900 text-white flex items-center justify-center transition-transform hover:scale-110 shadow-lg border border-white/10"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 sm:right-6 z-10 w-11 h-11 rounded-full bg-stone-900/80 hover:bg-stone-900 text-white flex items-center justify-center transition-transform hover:scale-110 shadow-lg border border-white/10"
              aria-label="Next photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}

        <img
          key={currentPhoto.id}
          src={currentPhoto.imageUrl}
          alt={currentPhoto.title}
          className="max-h-full max-w-full object-contain rounded-lg shadow-2xl transition-opacity duration-200 select-none"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Bottom Information Panel */}
      <div 
        className="absolute bottom-0 left-0 right-0 z-20 px-4 py-4 bg-gradient-to-t from-stone-950/95 via-stone-950/80 to-transparent text-white"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 text-xs text-[#E2B755] font-semibold mb-1">
              <MapPin className="w-3.5 h-3.5" />
              <span>{currentPhoto.propertyName} • {currentPhoto.location}</span>
              {currentPhoto.bhkInfo && (
                <>
                  <span className="text-stone-500">•</span>
                  <span className="text-stone-300">{currentPhoto.bhkInfo}</span>
                </>
              )}
            </div>
            <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
              {currentPhoto.title}
            </h3>
            {currentPhoto.description && (
              <p className="text-xs text-stone-300 mt-1 max-w-2xl line-clamp-2">
                {currentPhoto.description}
              </p>
            )}
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs text-stone-400">
              Verified by Dipendu Sen
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
