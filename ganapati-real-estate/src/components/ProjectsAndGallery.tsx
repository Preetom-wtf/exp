import { useState, useMemo } from 'react';
import { Camera, Building2, MapPin, Eye, MessageCircle, Sparkles, Filter, ChevronRight, Layers, ShieldCheck } from 'lucide-react';
import { GALLERY_PHOTOS, PROJECTS_DATA, getProjectWhatsAppUrl, getGalleryPhotoWhatsAppUrl } from '../data/businessData';
import { GalleryPhoto, ProjectListing } from '../types';
import { PhotoLightboxModal } from './PhotoLightboxModal';
import { ProjectModal } from './ProjectModal';

export function ProjectsAndGallery() {
  const [activeTab, setActiveTab] = useState<'flats' | 'projects'>('flats');
  const [roomFilter, setRoomFilter] = useState<string>('all');
  
  // Lightbox state for individual photos
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);

  // Modal state for full project inspection
  const [selectedProject, setSelectedProject] = useState<ProjectListing | null>(null);

  const roomFilterOptions = [
    { id: 'all', label: 'All Pictures (18)' },
    { id: 'living', label: 'Living Rooms' },
    { id: 'bedroom', label: 'Master Bedrooms' },
    { id: 'kitchen', label: 'Modular Kitchens' },
    { id: 'balcony', label: 'Balconies & Views' },
    { id: 'elevation', label: 'Building Elevations' },
    { id: 'amenity', label: 'Amenities & Pool' },
  ];

  const filteredPhotos = useMemo(() => {
    if (roomFilter === 'all') return GALLERY_PHOTOS;
    return GALLERY_PHOTOS.filter((photo) => photo.roomType === roomFilter);
  }, [roomFilter]);

  const handleOpenPhoto = (photo: GalleryPhoto) => {
    const indexInFiltered = filteredPhotos.findIndex((p) => p.id === photo.id);
    setActivePhotoIndex(indexInFiltered >= 0 ? indexInFiltered : 0);
    setLightboxOpen(true);
  };

  return (
    <section id="projects-gallery" className="py-16 sm:py-24 bg-[#F5F2EB] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#163829] bg-[#163829]/10 px-3.5 py-1.5 rounded-full mb-3">
            <Camera className="w-3.5 h-3.5 text-[#163829]" />
            Visual Portfolio
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 leading-tight">
            Pictures of Flats, Apartments & Projects
          </h2>
          <p className="mt-3 text-stone-600 text-base sm:text-lg">
            Browse authentic interior and exterior photographs of verified flats, luxury apartments, and prominent residential projects in Kolkata.
          </p>
        </div>

        {/* Master Navigation Switcher: Flats & Apartments Photos vs Projects */}
        <div className="flex justify-center mb-8">
          <div className="bg-white p-1.5 rounded-2xl border border-stone-200 shadow-sm inline-flex items-center gap-2">
            <button
              onClick={() => setActiveTab('flats')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'flats'
                  ? 'bg-[#163829] text-white shadow-sm'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-50'
              }`}
            >
              <Camera className="w-4 h-4" />
              <span>Flats & Apartments Gallery ({GALLERY_PHOTOS.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('projects')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'projects'
                  ? 'bg-[#163829] text-white shadow-sm'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-50'
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>Residential Projects & Complexes ({PROJECTS_DATA.length})</span>
            </button>
          </div>
        </div>

        {/* TAB 1: PICTURES OF FLATS & APARTMENTS */}
        {activeTab === 'flats' && (
          <div>
            {/* Room Filter Pills */}
            <div className="flex items-center justify-start sm:justify-center gap-1.5 overflow-x-auto pb-3 mb-8 scrollbar-none">
              {roomFilterOptions.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setRoomFilter(filter.id)}
                  className={`text-xs font-semibold px-4 py-2 rounded-xl whitespace-nowrap transition-all ${
                    roomFilter === filter.id
                      ? 'bg-stone-900 text-white shadow-xs'
                      : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>

            {/* Photos Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPhotos.map((photo) => (
                <div
                  key={photo.id}
                  className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs hover:shadow-md transition-all group flex flex-col justify-between"
                >
                  <div>
                    {/* Clickable Image Container with Zoom Feedback */}
                    <div 
                      onClick={() => handleOpenPhoto(photo)}
                      className="relative h-60 w-full overflow-hidden bg-stone-100 cursor-pointer"
                    >
                      <img
                        src={photo.imageUrl}
                        alt={photo.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent opacity-60 group-hover:opacity-75 transition-opacity" />

                      {/* Room Type Tag */}
                      <div className="absolute top-3 left-3">
                        <span className="bg-white/90 text-stone-900 text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-xs">
                          {photo.roomType}
                        </span>
                      </div>

                      {/* Enlarge Hint Pill */}
                      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="bg-black/60 text-white text-[11px] font-medium px-2.5 py-1 rounded-md flex items-center gap-1 backdrop-blur-xs">
                          <Eye className="w-3 h-3" />
                          <span>View Full Photo</span>
                        </span>
                      </div>

                      {/* Location & BHK overlay */}
                      <div className="absolute bottom-3 left-3 right-3 text-white">
                        <p className="text-xs text-[#E2B755] font-semibold flex items-center gap-1 truncate">
                          <MapPin className="w-3 h-3 shrink-0" />
                          <span>{photo.propertyName} • {photo.location}</span>
                        </p>
                        {photo.bhkInfo && (
                          <span className="text-[11px] text-stone-200 font-medium">
                            {photo.bhkInfo}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Card Description */}
                    <div className="p-4">
                      <h3 className="font-serif-display text-base font-bold text-stone-900 group-hover:text-[#163829] transition-colors line-clamp-1">
                        {photo.title}
                      </h3>
                      {photo.description && (
                        <p className="text-xs text-stone-600 mt-1.5 line-clamp-2 leading-relaxed">
                          {photo.description}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Card Action Row */}
                  <div className="px-4 pb-4 pt-0 flex items-center gap-2">
                    <a
                      href={getGalleryPhotoWhatsAppUrl(photo)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-[#25D366] text-stone-950 font-bold text-xs hover:bg-[#20ba5a] transition-colors shadow-xs"
                      title="Enquire about this specific flat or project on WhatsApp"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-stone-950 text-white" />
                      <span>Enquire for This Flat</span>
                    </a>

                    <button
                      onClick={() => handleOpenPhoto(photo)}
                      className="inline-flex items-center justify-center p-2 rounded-xl border border-stone-200 text-stone-700 hover:bg-stone-50 transition-colors"
                      title="Open in full screen"
                    >
                      <Eye className="w-4 h-4 text-stone-600" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: RESIDENTIAL HOUSING PROJECTS & COMPLEXES */}
        {activeTab === 'projects' && (
          <div className="grid md:grid-cols-2 gap-8">
            {PROJECTS_DATA.map((project) => (
              <article
                key={project.id}
                className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Project Elevation Main Picture */}
                  <div 
                    onClick={() => setSelectedProject(project)}
                    className="relative h-64 sm:h-72 w-full overflow-hidden bg-stone-900 cursor-pointer"
                  >
                    <img
                      src={project.elevationImage}
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/20 to-transparent" />

                    {/* Status & RERA Pills */}
                    <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                      <span className="bg-[#163829] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                        {project.status}
                      </span>
                      <span className="bg-white/90 text-stone-900 text-xs font-bold px-2.5 py-1 rounded-full shadow-md flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#163829]" />
                        <span>RERA Verified</span>
                      </span>
                    </div>

                    {/* Starting Price Banner */}
                    <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between text-white">
                      <div>
                        <span className="text-[11px] text-stone-300 block">Starting From</span>
                        <div className="font-serif-display text-2xl font-bold text-[#E2B755]">
                          {project.priceStarting}
                        </div>
                      </div>
                      <span className="text-xs bg-white/20 backdrop-blur-xs text-white px-2.5 py-1 rounded-md font-semibold">
                        {project.floors}
                      </span>
                    </div>
                  </div>

                  {/* Project Gallery Preview Strip (Interactive Thumbnails) */}
                  <div className="bg-stone-900 px-4 py-2.5 flex items-center gap-2 overflow-x-auto scrollbar-none border-b border-stone-800">
                    <span className="text-[10px] uppercase text-stone-400 font-bold shrink-0">
                      Photos:
                    </span>
                    {project.galleryImages.slice(0, 5).map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedProject(project)}
                        className="relative shrink-0 w-12 h-9 rounded overflow-hidden border border-stone-700 hover:border-[#E2B755] transition-all opacity-80 hover:opacity-100"
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
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-[11px] text-[#E2B755] font-semibold hover:underline shrink-0 ml-1"
                    >
                      + {project.galleryImages.length} More
                    </button>
                  </div>

                  {/* Project Information */}
                  <div className="p-6">
                    <div className="flex items-center gap-1.5 text-xs text-stone-500 font-medium mb-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#163829] shrink-0" />
                      <span>{project.location}</span>
                    </div>

                    <h3 className="font-serif-display text-xl sm:text-2xl font-bold text-stone-900 group-hover:text-[#163829] transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#163829] mt-0.5">
                      {project.tagline}
                    </p>

                    <div className="mt-3 text-xs text-stone-600 bg-stone-50 p-3 rounded-xl border border-stone-100 space-y-1">
                      <div><strong>Configurations:</strong> {project.configurations}</div>
                      <div><strong>Towers & Height:</strong> {project.totalTowers} • {project.floors}</div>
                      <div><strong>RERA Registration:</strong> <span className="font-mono text-stone-800">{project.reraNumber}</span></div>
                    </div>

                    {/* Top Amenities Chips */}
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {project.amenities.slice(0, 4).map((amenity, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] font-medium px-2 py-0.5 bg-stone-100 text-stone-700 rounded"
                        >
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Project Actions */}
                <div className="p-6 pt-0 border-t border-stone-100 mt-2 flex items-center gap-2.5">
                  <a
                    href={getProjectWhatsAppUrl(project)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-[#25D366] text-stone-950 font-bold text-xs hover:bg-[#20ba5a] transition-colors shadow-xs"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-stone-950 text-white" />
                    <span>Get Brochure on WhatsApp</span>
                  </a>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center justify-center gap-1.5 py-3 px-4 rounded-xl border border-stone-300 text-stone-800 hover:text-stone-950 hover:bg-stone-50 text-xs font-semibold transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>All Photos & Specs</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Bottom Banner to request specific photos */}
        <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div>
            <h4 className="font-serif-display text-xl font-bold text-stone-900">
              Need Fresh Video Walkthroughs or High-Resolution Pictures?
            </h4>
            <p className="text-stone-600 text-sm mt-1">
              Dipendu Sen can send you real-time WhatsApp video clips, building sanction blueprints, and room dimensions for any Kolkata flat or project.
            </p>
          </div>
          <a
            href="https://wa.me/919830123456?text=Hello%20Dipendu%20Babu%2C%20could%20you%20please%20send%20me%20fresh%20photos%20and%20video%20walkthroughs%20for%20available%20flats%20in%20Kolkata%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#163829] text-white text-sm font-semibold hover:bg-[#10291e] transition-colors shadow-sm"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>Request Video Walkthrough</span>
          </a>
        </div>

      </div>

      {/* Lightbox Modal for individual photo zoom */}
      <PhotoLightboxModal
        photos={filteredPhotos}
        initialIndex={activePhotoIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
