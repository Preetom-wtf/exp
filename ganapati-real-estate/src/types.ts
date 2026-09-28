export type PropertyCategory = 'all' | 'residential' | 'land' | 'commercial' | 'rental';

export interface PropertyListing {
  id: string;
  title: string;
  category: 'residential' | 'land' | 'commercial' | 'rental';
  location: string;
  subLocation: string; // e.g. "Topsia", "Kasba", "Beleghata", "Tangra", "EM Bypass"
  price: string;
  priceRaw: number; // For sorting
  bhkOrType: string;
  size: string; // e.g. "1,420 sq.ft" or "2.5 Katha"
  featuredImage: string;
  gallery?: string[];
  status: 'Ready to Move' | 'Under Construction' | 'Immediate Registration' | 'Available Now';
  facing?: string;
  highlights: string[];
  reraApproved: boolean;
  description: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  deliverables: string[];
  badge?: string;
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  clientRole: string;
  locality: string;
  rating: number;
  review: string;
  propertyPurchased: string;
  date: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'all' | 'flat' | 'apartment' | 'project';
  roomType: 'all' | 'living' | 'bedroom' | 'kitchen' | 'balcony' | 'elevation' | 'amenity';
  imageUrl: string;
  propertyName: string;
  location: string;
  bhkInfo?: string;
  description?: string;
}

export interface ProjectListing {
  id: string;
  name: string;
  tagline: string;
  location: string;
  subLocation: string;
  status: 'Ready to Move' | 'Under Construction' | 'Newly Launched';
  reraNumber: string;
  priceStarting: string;
  configurations: string;
  totalTowers: string;
  floors: string;
  elevationImage: string;
  galleryImages: { url: string; title: string; tag: string }[];
  amenities: string[];
  description: string;
  completionDate?: string;
}

export interface ContactFormData {
  fullName: string;
  phone: string;
  email: string;
  propertyInterest: string;
  preferredArea: string;
  budgetRange: string;
  message: string;
}
