import { useState, useMemo } from 'react';
import { MapPin, MessageCircle, Eye, Search, Filter, Camera, ArrowRight } from 'lucide-react';
import { FEATURED_LISTINGS, getPropertyWhatsAppUrl, getWhatsAppUrl } from '../data/businessData';
import { PropertyListing, PropertyCategory } from '../types';
import { PropertyModal } from './PropertyModal';

interface FeaturedListingsProps {
  initialCategory?: PropertyCategory;
  initialLocality?: string;
}

export function FeaturedListings({ initialCategory = 'all', initialLocality = 'All' }: FeaturedListingsProps) {
  const [activeCategory, setActiveCategory] = useState<PropertyCategory>(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProperty, setSelectedProperty] = useState<PropertyListing | null>(null);

  const categories: { id: PropertyCategory; label: string }[] = [
    { id: 'all', label: 'All Listings' },
    { id: 'residential', label: 'Flats & Apartments' },
    { id: 'commercial', label: 'Commercial Spaces' },
    { id: 'land', label: 'Land & Plots' },
    { id: 'rental', label: 'Rentals' },
  ];

  const filteredProperties = useMemo(() => {
    return FEATURED_LISTINGS.filter((property) => {
      // Category filter
      const matchesCategory = activeCategory === 'all' || property.category === activeCategory;
      // Search query
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        query === '' ||
        property.title.toLowerCase().includes(query) ||
        property.location.toLowerCase().includes(query) ||
        property.subLocation.toLowerCase().includes(query) ||
        property.bhkOrType.toLowerCase().includes(query) ||
        property.price.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="listings" className="py-16 sm:py-24 bg-white text-stone-900 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        
        {/* Section Header (Matches Screenshot 4) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-6">
          <div>
            <h2 className="font-serif-display text-4xl sm:text-5xl font-bold text-stone-950 tracking-tight mb-2">
              Featured Listings
            </h2>
            <p className="text-stone-600 text-base sm:text-lg leading-relaxed font-normal">
              Explore a selection of premium flats and commercial spaces available right now.
            </p>
          </div>

          {/* Request Full Portfolio Outlined Pill Button from Screenshot 4 */}
          <div className="shrink-0">
            <a
              href={getWhatsAppUrl(`Hello Dipendu Babu, please share the complete Ganapati Real Estate portfolio catalogue and latest available properties in Kolkata.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-stone-800 text-stone-900 px-6 sm:px-7 py-3 hover:bg-stone-900 hover:text-white text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-xs"
              id="request-portfolio-cta"
            >
              <span>Request Full Portfolio</span>
            </a>
          </div>
        </div>

        {/* Filter Controls & Search */}
        <div className="bg-[#FAF8F5] p-2.5 sm:p-3 rounded-2xl border border-stone-200 mb-10 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          {/* Categories */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`text-xs font-semibold px-4 py-2 rounded-xl whitespace-nowrap transition-all ${
                  activeCategory === cat.id
                    ? 'bg-stone-950 text-white shadow-xs'
                    : 'text-stone-700 hover:bg-stone-200/60'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[220px] sm:w-64">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="Search Kasba, Topsia, BHK..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs sm:text-sm bg-white rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-800 text-stone-800"
            />
          </div>
        </div>

        {/* 3-Column Listings Grid (Matches Screenshot 4) */}
        {filteredProperties.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
            {filteredProperties.map((property) => (
              <article
                key={property.id}
                className="group flex flex-col justify-between"
              >
                {/* Image Container with White Price Pill (Matches Screenshot 4) */}
                <div>
                  <div
                    onClick={() => setSelectedProperty(property)}
                    className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/3] bg-stone-100 cursor-pointer shadow-xs group-hover:shadow-md transition-all"
                  >
                    <img
                      src={property.featuredImage}
                      alt={property.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />

                    {/* White Price Pill at Top Right from Screenshot 4 */}
                    <div className="absolute top-4 right-4">
                      <span className="bg-white/95 backdrop-blur-sm text-stone-950 font-bold px-3.5 py-1.5 rounded-full text-sm shadow-md border border-stone-100 inline-block">
                        {property.price}
                      </span>
                    </div>

                    {/* Photo count pill at bottom left */}
                    {property.gallery && property.gallery.length > 0 && (
                      <div className="absolute bottom-4 left-4">
                        <span className="bg-stone-950/75 backdrop-blur-xs text-white text-[11px] font-semibold px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm border border-white/20">
                          <Camera className="w-3 h-3 text-[#A0522D]" />
                          <span>{property.gallery.length} Photos</span>
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Title & Details */}
                  <div className="pt-4 space-y-1.5">
                    <div className="flex items-center gap-1.5 text-xs text-stone-500 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                      <span>{property.subLocation} • {property.bhkOrType}</span>
                    </div>

                    <h3
                      onClick={() => setSelectedProperty(property)}
                      className="font-serif-display text-xl sm:text-2xl font-bold text-stone-950 group-hover:text-[#A0522D] transition-colors cursor-pointer"
                    >
                      {property.title}
                    </h3>

                    <p className="text-stone-600 text-xs sm:text-sm line-clamp-2 leading-relaxed">
                      {property.description}
                    </p>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-4 mt-2 flex items-center gap-3">
                  <a
                    href={getPropertyWhatsAppUrl(property)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all"
                    id={`enquire-whatsapp-${property.id}`}
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-white text-[#25D366]" />
                    <span>WhatsApp</span>
                  </a>

                  <button
                    onClick={() => setSelectedProperty(property)}
                    className="inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl border border-stone-300 text-stone-800 hover:bg-stone-100 text-xs font-semibold transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Details</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-[#FAF8F5] rounded-2xl border border-stone-200 p-8 max-w-xl mx-auto">
            <Filter className="w-10 h-10 text-stone-400 mx-auto mb-3" />
            <h3 className="font-serif-display text-xl font-bold text-stone-800">
              No properties found matching criteria
            </h3>
            <p className="text-stone-500 text-sm mt-1 max-w-md mx-auto">
              We have verified off-market flats and plots in Kolkata not listed publicly.
            </p>
            <div className="mt-5">
              <a
                href={getWhatsAppUrl(`Hello Dipendu Babu, I am looking for property options in Kolkata. Please share available listings.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-stone-900 text-white text-xs font-semibold hover:bg-stone-800"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Ask Dipendu Sen for Off-Market Options</span>
              </a>
            </div>
          </div>
        )}

      </div>

      {/* Property Details Modal */}
      <PropertyModal
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
      />
    </section>
  );
}
