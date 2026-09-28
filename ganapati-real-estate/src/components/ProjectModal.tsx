import { useState, useEffect } from 'react';
import { X, MapPin, CheckCircle, MessageCircle, Phone, Shield, Building2, Layers, Calendar, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { ProjectListing } from '../types';
import { BUSINESS_CONFIG, getProjectWhatsAppUrl } from '../data/businessData';

interface ProjectModalProps {
  project: ProjectListing | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    setActiveImageIndex(0);
  }, [project]);

  if (!project) return null;

  const images = project.galleryImages && project.galleryImages.length > 0
    ? project.galleryImages
    : [{ url: project.elevationImage, title: project.name, tag: 'Elevation' }];

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const currentImage = images[activeImageIndex];

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-stone-950/80 backdrop-blur-sm overflow-y-auto animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl max-w-3xl w-full my-8 shadow-2xl border border-stone-200 overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-20 w-9 h-9 rounded-full bg-stone-900/80 text-white flex items-center justify-center hover:bg-stone-900 transition-colors shadow-md"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Project Image Carousel Stage */}
        <div className="relative h-72 sm:h-96 w-full bg-stone-950 overflow-hidden group">
          <img
            key={currentImage.url}
            src={currentImage.url}
            alt={`${project.name} - ${currentImage.title}`}
            className="w-full h-full object-cover transition-opacity duration-300"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-transparent to-stone-950/30" />

          {/* Top Badges */}
          <div className="absolute top-4 left-4 flex flex-wrap items-center gap-2 z-10">
            <span className="bg-[#163829] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
              {project.status}
            </span>
            <span className="bg-white/90 text-stone-900 text-xs font-bold px-3 py-1 rounded-full shadow-md flex items-center gap-1">
              <Shield className="w-3 h-3 text-[#163829]" />
              {project.reraNumber}
            </span>
          </div>

          {/* Image Tag / Counter */}
          <div className="absolute top-4 right-14 z-10 bg-black/60 backdrop-blur-xs text-white text-[11px] font-semibold px-3 py-1 rounded-full flex items-center gap-1.5 border border-white/20">
            <span className="text-[#E2B755] uppercase tracking-wider">{currentImage.tag}</span>
            <span>•</span>
            <span>{activeImageIndex + 1} / {images.length} Photos</span>
          </div>

          {/* Carousel Arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-stone-900/70 hover:bg-stone-900 text-white flex items-center justify-center transition-all shadow-md"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-stone-900/70 hover:bg-stone-900 text-white flex items-center justify-center transition-all shadow-md"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          {/* Bottom Title on Image */}
          <div className="absolute bottom-3 left-4 right-4 text-white flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <p className="text-xs text-[#E2B755] font-semibold">{currentImage.title}</p>
              <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-white drop-shadow-md">
                {project.name}
              </h3>
              <p className="text-stone-200 text-xs sm:text-sm font-medium flex items-center gap-1 mt-0.5">
                <MapPin className="w-3.5 h-3.5 text-[#E2B755]" />
                {project.location}
              </p>
            </div>
            <div className="bg-[#163829]/90 text-white px-3 py-1.5 rounded-lg text-right backdrop-blur-xs border border-[#163829]">
              <span className="text-[10px] text-stone-300 block uppercase">Starting From</span>
              <span className="font-bold text-sm sm:text-base text-[#E2B755]">{project.priceStarting}</span>
            </div>
          </div>
        </div>

        {/* Thumbnail Preview Strip */}
        {images.length > 1 && (
          <div className="bg-stone-900 px-4 py-2.5 flex items-center gap-2 overflow-x-auto scrollbar-none border-b border-stone-800">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImageIndex(idx)}
                className={`relative shrink-0 w-16 h-11 rounded-md overflow-hidden transition-all border-2 ${
                  activeImageIndex === idx
                    ? 'border-[#25D366] ring-2 ring-[#25D366]/40 scale-105'
                    : 'border-stone-700 opacity-60 hover:opacity-100'
                }`}
                title={img.title}
              >
                <img
                  src={img.url}
                  alt={img.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </button>
            ))}
          </div>
        )}

        {/* Project Details Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[48vh] overflow-y-auto">
          {/* Key Specs Row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 bg-stone-50 p-3.5 rounded-xl border border-stone-200 text-xs">
            <div>
              <span className="text-stone-500 block">Configurations:</span>
              <strong className="text-stone-900">{project.configurations}</strong>
            </div>
            <div>
              <span className="text-stone-500 block">Project Elevation:</span>
              <strong className="text-stone-900">{project.floors} ({project.totalTowers})</strong>
            </div>
            <div>
              <span className="text-stone-500 block">RERA Registration:</span>
              <strong className="text-[#163829] font-mono">{project.reraNumber}</strong>
            </div>
          </div>

          {/* Project Tagline & Overview */}
          <div>
            <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-2">
              Project Overview
            </h4>
            <p className="text-stone-700 text-sm leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Project Amenities */}
          <div>
            <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-2.5">
              Clubhouse & Project Amenities
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.amenities.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-stone-700 bg-stone-50 p-2 rounded-lg border border-stone-100">
                  <CheckCircle className="w-3.5 h-3.5 text-[#163829] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Brokerage & Handholding Guarantee */}
          <div className="bg-[#163829]/5 border border-[#163829]/15 rounded-xl p-3.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-stone-700">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#163829] shrink-0" />
              <span>Direct Developer Allocation & Verified Sanctions by Dipendu Sen</span>
            </div>
            <span className="font-bold text-[#163829]">Zero Extra Brokerage on Select Projects</span>
          </div>

          {/* Modal Action CTA Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <a
              href={getProjectWhatsAppUrl(project)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#25D366] text-stone-950 font-bold text-sm hover:bg-[#20ba5a] transition-all shadow-md"
            >
              <MessageCircle className="w-4 h-4 fill-stone-950 text-white" />
              <span>Request Brochure & Site Visit on WhatsApp</span>
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
