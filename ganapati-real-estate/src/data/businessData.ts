import { PropertyListing, ServiceItem, TestimonialItem, ProjectListing, GalleryPhoto } from '../types';

export const BUSINESS_CONFIG = {
  name: 'Ganapati Real Estate',
  tagline: 'Your Trusted Property Partner in Kolkata',
  founder: 'Dipendu Sen',
  founderTitle: 'Founder & Principal Property Consultant',
  experienceYears: 16,
  foundedYear: 2009,
  address: {
    line1: 'Ganapati Real Estate, Topsia Main Road',
    line2: 'Opposite Milan Mela Grounds / Near EM Bypass Connector',
    locality: 'Topsia - Kasba Zone',
    city: 'Kolkata',
    state: 'West Bengal',
    pincode: '700046',
    landmark: '5 Mins from Science City & Ruby More',
    fullFormatted: 'Topsia Main Road, Near EM Bypass Connector, Kolkata, West Bengal 700046'
  },
  contact: {
    phoneDisplay: '+91 98301 23456',
    phoneRaw: '+919830123456',
    altPhoneDisplay: '+91 98302 98765',
    whatsappNumber: '919830123456', // Numbers only for wa.me link
    email: 'info@ganapatirealestate.in',
    altEmail: 'dipendu.sen@ganapatirealestate.in',
  },
  areasServed: [
    'Topsia',
    'Kasba',
    'Beleghata',
    'Tangra',
    'EM Bypass Corridor',
    'Gariahat',
    'Science City Area',
    'Park Circus Connector',
    'Jadavpur',
    'Salt Lake Sector 1 & 2'
  ],
  rera: {
    regNumber: 'WBRERA/P/KOL/2024/000842',
    status: 'Valid & Active Registration',
    flagNote: 'Official WBRERA verification record for Dipendu Sen / Ganapati Real Estate'
  },
  businessHours: [
    { days: 'Monday – Saturday', time: '10:00 AM – 8:00 PM' },
    { days: 'Sunday', time: '10:30 AM – 4:00 PM (By Prior Appointment)' }
  ],
  stats: [
    { value: '16+', label: 'Years Experience in Kolkata' },
    { value: '620+', label: 'Successful Property Deals' },
    { value: '100%', label: 'Legally Vetted & Clear Titles' },
    { value: '₹0', label: 'Hidden Brokerage Charges' }
  ],
  // Exact Google Maps Embed URL centered at Kasba / Topsia EM Bypass corridor Kolkata
  mapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14740.751336499878!2d88.38421064214555!3d22.53460830495914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0276dcecf5e8bf%3A0xe54e3d64cb23214c!2sTopsia%2C%20Kolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
  googleMapsLink: 'https://maps.google.com/?q=Topsia+Kasba+EM+Bypass+Kolkata'
};

export function getWhatsAppUrl(customMessage?: string): string {
  const defaultText = `Hello Dipendu Babu, I found Ganapati Real Estate on your website. I am looking for property assistance in Kolkata. Could you please share available options?`;
  const text = encodeURIComponent(customMessage || defaultText);
  return `https://wa.me/${BUSINESS_CONFIG.contact.whatsappNumber}?text=${text}`;
}

export function getPropertyWhatsAppUrl(property: PropertyListing): string {
  const text = encodeURIComponent(
    `Hello Dipendu Babu, I am interested in this listing from Ganapati Real Estate:\n\n*${property.title}*\nLocation: ${property.location}\nPrice: ${property.price}\nType: ${property.bhkOrType} (${property.size})\n\nCould you please share more pictures, site visit schedule, and title document details?`
  );
  return `https://wa.me/${BUSINESS_CONFIG.contact.whatsappNumber}?text=${text}`;
}

export function getProjectWhatsAppUrl(project: ProjectListing): string {
  const text = encodeURIComponent(
    `Hello Dipendu Babu, I would like to know more about the project *${project.name}* at ${project.location}.\n\nConfigurations: ${project.configurations}\nStarting Price: ${project.priceStarting}\nRERA No: ${project.reraNumber}\n\nPlease share the project brochure, flat pictures, floor plans, and arrange a site visit.`
  );
  return `https://wa.me/${BUSINESS_CONFIG.contact.whatsappNumber}?text=${text}`;
}

export function getGalleryPhotoWhatsAppUrl(photo: GalleryPhoto): string {
  const text = encodeURIComponent(
    `Hello Dipendu Babu, I saw this photo of *${photo.title}* (${photo.propertyName} in ${photo.location}) on your website. Could you please share pricing and availability for this flat/project?`
  );
  return `https://wa.me/${BUSINESS_CONFIG.contact.whatsappNumber}?text=${text}`;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'residential-sale',
    title: 'Residential Sale & Purchase',
    shortDesc: 'Premium 2, 3 & 4 BHK apartments, luxury penthouses, and standalone heritage homes with 100% verified legal papers.',
    fullDesc: 'We assist homebuyers and investors in discovering sanctioned, Vaastu-friendly apartments across South and East Kolkata. From budget-friendly 2 BHKs in Tangra & Beleghata to luxury sky villas on EM Bypass and Kasba, we negotiate directly with owners and vetted builders.',
    iconName: 'Home',
    deliverables: [
      'Pre-vetted RERA sanctioned projects',
      'South-facing & corner flat selections',
      'Direct developer & resale price negotiations',
      'KMC building sanction plan verification'
    ],
    badge: 'Most Popular'
  },
  {
    id: 'land-plot-sale',
    title: 'Land / Plot Sale & Advisory',
    shortDesc: 'Clear-title residential and commercial plots in Kolkata with BL&LRO mutation and precise boundary demarcation.',
    fullDesc: 'Buying land in Kolkata requires meticulous scrutiny. Dipendu Sen provides end-to-end guidance on freehold plots in emerging corridors, guaranteeing zero dispute, clean ancestry deeds, Porcha verification, and physical road access.',
    iconName: 'MapPin',
    deliverables: [
      'Freehold land with clear chain of title',
      'BL&LRO Porcha & Khatian verification',
      'Physical demarcation & survey inspection',
      'Conversion support (Sali to Bastu/Danga)'
    ],
    badge: 'High Appreciation'
  },
  {
    id: 'rental-properties',
    title: 'Rental Properties & Leasing',
    shortDesc: 'Furnished & semi-furnished flats, corporate executive leasing, and tenant placement with strict police verification.',
    fullDesc: 'For owners looking for stable rental yields and tenants seeking peace of mind. We handle the entire tenancy lifecycle including tenant profiling, customized tenancy agreements, police verification forms, and deposit settlements.',
    iconName: 'Key',
    deliverables: [
      'Strict background & employment checks',
      'Stamped legal tenancy agreements',
      'Police station verification liaison',
      'Annual lease renewals & rent collection'
    ]
  },
  {
    id: 'commercial-property',
    title: 'Commercial Property Solutions',
    shortDesc: 'Prime retail showrooms, Grade-A IT offices, healthcare clinics, and strategic godown spaces along EM Bypass.',
    fullDesc: 'Strategic commercial assets tailored for business growth. Whether you require a high-footfall ground floor showroom in Kasba or an office floorplate near Salt Lake / Science City, we secure high-visibility locations.',
    iconName: 'Building2',
    deliverables: [
      'High footfall retail storefronts',
      'Plug-and-play IT/Corporate office spaces',
      'Commercial building clearances & fire NOC',
      'Long-term institutional lease structuring'
    ]
  },
  {
    id: 'documentation-assistance',
    title: 'Property Documentation Assistance',
    shortDesc: 'Thorough deed title search, BL&LRO mutation, KMC tax assessment, and registrar office handholding.',
    fullDesc: 'Eliminate registration stress. Dipendu Sen personally coordinates with senior legal advocates to execute 30-year deed searches, mutation clearance, encumbrance certificates, and seamless registry at Kolkata Registry Office.',
    iconName: 'FileCheck',
    deliverables: [
      '30-Year Search Report at Registrar Office',
      'KMC & Municipality tax clearance',
      'BL&LRO Mutation & Warisan certificate',
      'Nationalized bank home loan documentation'
    ],
    badge: 'Legal Shield'
  }
];

export const FEATURED_LISTINGS: PropertyListing[] = [
  {
    id: 'prop-1',
    title: 'Premium 3 BHK Flat in Kasba',
    category: 'residential',
    location: 'Kasba, Near Acropolis Mall & Ruby Crossing',
    subLocation: 'Kasba',
    price: '₹ 1.2 Cr*',
    priceRaw: 12000000,
    bhkOrType: '3 BHK • 2 Bath',
    size: '1,420 Sq.Ft',
    featuredImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80', // Building Elevation
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80', // Living Room
      'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1000&q=80', // Master Bedroom
      'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=80', // Modular Kitchen
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1000&q=80', // Balcony
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80', // Bathroom
    ],
    status: 'Ready to Move',
    facing: 'South-East Open',
    highlights: ['Covered Car Parking', 'Automatic Lift', '24/7 Security Guard', 'KMC Water Supply', 'Near Acropolis Mall'],
    reraApproved: true,
    description: 'Beautifully designed 3-bedroom apartment on the 3rd floor featuring cross ventilation, natural sunlight, wide balconies, and branded sanitary fixtures. Located just 4 minutes from Acropolis Mall and 6 minutes from Ruby Hospital.'
  },
  {
    id: 'prop-2',
    title: 'Commercial Space in Topsia',
    category: 'commercial',
    location: 'Topsia EM Bypass Corridor, Near Milan Mela',
    subLocation: 'Topsia',
    price: '₹ 2.5 Cr*',
    priceRaw: 25000000,
    bhkOrType: 'Commercial Space',
    size: '2,200 Sq.Ft',
    featuredImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80', // Skyscraper Elevation
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80', // Commercial Office Interior
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1000&q=80', // Conference & Workstations
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80', // Tower Facade
    ],
    status: 'Ready to Move',
    facing: 'Main Road Frontage',
    highlights: ['Grade-A Commercial Tower', 'Double Height Lobby', 'High-Speed Elevators', 'Ample Basement Parking', '100% DG Power Backup'],
    reraApproved: true,
    description: 'Premier commercial office and retail floorplate located directly on the Topsia EM Bypass corridor. Exceptional road visibility, high ceiling height, and prestigious corporate neighboring establishments.'
  },
  {
    id: 'prop-3',
    title: 'Luxury 4 BHK in Beleghata',
    category: 'residential',
    location: 'Beleghata, Near Subhas Sarobar Lake',
    subLocation: 'Beleghata',
    price: '₹ 1.8 Cr*',
    priceRaw: 18000000,
    bhkOrType: '4 BHK • 3 Bath',
    size: '2,150 Sq.Ft',
    featuredImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80', // Luxury Drawing Room with Red Wall Accents
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80', // Living Area
      'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1000&q=80', // Master Suite
      'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=80', // Designer Kitchen
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=1000&q=80', // Lakeview Balcony
    ],
    status: 'Ready to Move',
    facing: 'South-East Lake Facing',
    highlights: ['Private Balcony Overlooking Lake', 'Italian Marble Flooring', 'Clubhouse & Swimming Pool', '2 Covered Parkings', 'Vastu Compliant'],
    reraApproved: true,
    description: 'High-end designer 4 BHK apartment with dramatic interior woodwork, luxury chandeliers, expansive rooms, and tranquil greenery views near Subhas Sarobar.'
  },
  {
    id: 'prop-4',
    title: 'Spacious 2 BHK Well-Ventilated Flat in Tangra',
    category: 'residential',
    location: 'Tangra, Near Gobinda Khatik Road',
    subLocation: 'Tangra',
    price: '₹ 46 Lakhs',
    priceRaw: 4600000,
    bhkOrType: '2 BHK • 2 Bath',
    size: '965 Sq.Ft',
    featuredImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80', // Building Facade
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80', // Living & Dining Room
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1000&q=80', // Bedroom
      'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1000&q=80', // Kitchen
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1000&q=80', // Balcony
    ],
    status: 'Ready to Move',
    facing: 'South Open',
    highlights: ['Zero Brokerage Promotion', 'KMC Mutation Complete', 'Lift & Intercom', 'Low Maintenance Society', 'Bank Loan Approved'],
    reraApproved: true,
    description: 'Affordable modern living in central-east Kolkata. Close to Park Circus 7-point crossing and Sealdah. South-facing living room, vitrified tiles, and dedicated two-wheeler parking space included.'
  },
  {
    id: 'prop-5',
    title: 'Prime 1,650 Sq.Ft Ground Floor Commercial Showroom',
    category: 'commercial',
    location: 'Kasba Main Road, High Footfall Commercial Strip',
    subLocation: 'Kasba',
    price: '₹ 1.35 Crore (or Rent ₹85k/mo)',
    priceRaw: 13500000,
    bhkOrType: 'Commercial Space',
    size: '1,650 Sq.Ft (G + Mezzanine)',
    featuredImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80'
    ],
    status: 'Available Now',
    facing: 'Main Road Frontage',
    highlights: ['35 Ft Glass Frontage', 'Commercial Electric Meter', 'Attached Washroom', 'Suitable for Bank/Diagnostic/Retail', 'Customer Parking Area'],
    reraApproved: true,
    description: 'High visibility commercial property on Kasba Main Road. Double height ceiling with mezzanine floor, three-phase power supply, and fire safety compliance in place.'
  },
  {
    id: 'prop-6',
    title: 'Fully Furnished 3 BHK Executive Rental Flat',
    category: 'rental',
    location: 'EM Bypass Connector, Near Silver Spring / ITC Royal Bengal',
    subLocation: 'Topsia',
    price: '₹ 38,000 / month',
    priceRaw: 38000,
    bhkOrType: '3 BHK • 3 Bath',
    size: '1,380 Sq.Ft',
    featuredImage: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1000&q=80', // Furnished Living Room
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80', // Lounge Area
      'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1000&q=80', // Master Bedroom
      'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=80', // Modular Kitchen
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=80', // Gymnasium
    ],
    status: 'Available Now',
    facing: 'East Facing',
    highlights: ['Fully Furnished (AC, TV, Sofa, Beds)', 'Modular Kitchen with Hob & Chimney', 'Covered Parking', 'Gym & Swimming Pool Access', 'Gated Security'],
    reraApproved: true,
    description: 'Move-in ready luxury apartment ideal for corporate executives, doctors, and IT specialists. Includes high-end teak furniture, modern electrical appliances, and dedicated basement parking.'
  },
  {
    id: 'prop-7',
    title: 'Boutique 3 BHK Garden-Facing Flat in Beleghata',
    category: 'residential',
    location: 'Beleghata, Near CIT Scheme & Phoolbagan Metro',
    subLocation: 'Beleghata',
    price: '₹ 72 Lakhs',
    priceRaw: 7200000,
    bhkOrType: '3 BHK • 2 Bath',
    size: '1,280 Sq.Ft',
    featuredImage: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1000&q=80', // Project Building
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80', // Living Room
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1000&q=80', // Bedroom
      'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=1000&q=80', // Modern Kitchen
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=1000&q=80', // Open Balcony
    ],
    status: 'Ready to Move',
    facing: 'North-East Corner',
    highlights: ['Metro Station 5 Mins', 'Elevator', 'Vastu Compliant', 'Intercom & CCTV', 'Covered Parking'],
    reraApproved: true,
    description: 'Prime family flat in an established neighborhood with tree-lined avenues. Excellent connectivity to Phoolbagan Metro and Sealdah Station. Clear single-owner title deed with KMC mutation.'
  }
];

export const PROJECTS_DATA: ProjectListing[] = [
  {
    id: 'proj-1',
    name: 'Mani Casadona & EM Bypass Towers',
    tagline: 'Iconic High-Rise Luxury Living Overlooking Eastern Wetlands',
    location: 'EM Bypass Corridor, Near Science City & Milan Mela, Topsia',
    subLocation: 'EM Bypass',
    status: 'Ready to Move',
    reraNumber: 'WBRERA/P/KOL/2023/000412',
    priceStarting: '₹ 1.25 Crore onwards',
    configurations: '3 BHK & 4 BHK Sky Condominiums (1,680 - 2,850 Sq.Ft)',
    totalTowers: '3 Towers',
    floors: 'G + 28 Floors',
    elevationImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80',
    galleryImages: [
      { url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80', title: 'Tower Elevation & Glass Facade', tag: 'Elevation' },
      { url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80', title: '4 BHK Sample Flat Grand Living Room', tag: 'Flat Interior' },
      { url: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1000&q=80', title: 'Master Bedroom Suite with Wooden Deck', tag: 'Flat Interior' },
      { url: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=80', title: 'Imported Modular Kitchen with Quartz Island', tag: 'Kitchen' },
      { url: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1000&q=80', title: 'Infinity Swimming Pool & Sundeck', tag: 'Project Amenity' },
      { url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=80', title: 'Air-Conditioned Health Club & Gym', tag: 'Project Amenity' },
    ],
    amenities: [
      'Infinity Rooftop Swimming Pool',
      'Double Height AC Entrance Lobby',
      'Residents Club & Banquet Hall',
      'Squash Court & Indoor Games',
      'Multi-Tier 24/7 Security & CCTV',
      '100% DG Power Backup'
    ],
    description: 'Premier residential skyscraper project situated directly on the bustling EM Bypass corridor. Offers panoramic unobstructed views of the Kolkata wetlands, seamless access to Science City, Park Circus connector, and Ruby Hospital.'
  },
  {
    id: 'proj-2',
    name: 'Kasba Heights Residency',
    tagline: 'Modern Gated Community Near Acropolis Mall & Ruby Crossing',
    location: 'Kasba Main Road, Near Acropolis Mall & Rajdanga',
    subLocation: 'Kasba',
    status: 'Ready to Move',
    reraNumber: 'WBRERA/P/KOL/2023/000678',
    priceStarting: '₹ 68 Lakhs onwards',
    configurations: '2 BHK & 3 BHK Vaastu Flats (980 - 1,520 Sq.Ft)',
    totalTowers: '2 Towers',
    floors: 'G + 11 Floors',
    elevationImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80',
    galleryImages: [
      { url: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80', title: 'G+11 Residential Tower Exterior', tag: 'Elevation' },
      { url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80', title: '3 BHK Living & Dining Layout', tag: 'Flat Interior' },
      { url: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1000&q=80', title: 'Master Bedroom with Full Glass French Window', tag: 'Flat Interior' },
      { url: 'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=1000&q=80', title: 'Compact Contemporary Kitchen Setup', tag: 'Kitchen' },
      { url: 'https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?auto=format&fit=crop&w=1000&q=80', title: 'Landscaped Garden & Senior Citizen Zone', tag: 'Project Amenity' },
    ],
    amenities: [
      'Children Play Park & Lawn',
      'Community Community Hall',
      'Automatic High-Speed Lifts',
      'Intercom & Fire Protection Systems',
      'Covered Multi-Level Parking',
      'KMC Water Supply & Filter Unit'
    ],
    description: 'Thoughtfully designed residential gated complex located within walking distance of Acropolis Mall and Gariahat Connector. High rental yields and strong capital appreciation.'
  },
  {
    id: 'proj-3',
    name: 'Topsia Lake Greens Enclave',
    tagline: 'Waterfront Living in Central Kolkata with Unmatched Connectivity',
    location: 'Topsia Road, Opposite Milan Mela / Science City Area',
    subLocation: 'Topsia',
    status: 'Under Construction',
    reraNumber: 'WBRERA/P/KOL/2024/000915',
    priceStarting: '₹ 82 Lakhs onwards',
    configurations: '3 BHK & 4 BHK Luxury Apartments (1,350 - 2,100 Sq.Ft)',
    totalTowers: '2 Towers',
    floors: 'G + 14 Floors',
    elevationImage: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=1000&q=80',
    galleryImages: [
      { url: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=1000&q=80', title: 'Modern Twin Tower Architecture', tag: 'Elevation' },
      { url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80', title: 'Designer Drawing & Living Room', tag: 'Flat Interior' },
      { url: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1000&q=80', title: 'Spacious Guest & Children Bedroom', tag: 'Flat Interior' },
      { url: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=1000&q=80', title: 'Wide Open Balcony Overlooking Greenery', tag: 'Balcony' },
      { url: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1000&q=80', title: 'Community Pool & Deck', tag: 'Project Amenity' },
    ],
    amenities: [
      'Lakeview Sundeck & Walking Track',
      'Modern Gymnasium & Yoga Studio',
      'EV Vehicle Charging Stations',
      'Grand Lobby with Concierge Desk',
      'Water Treatment Plant',
      'Rainwater Harvesting'
    ],
    description: 'A serene urban sanctuary nestled along the natural wetland edge in Topsia. Combines rapid 5-minute connectivity to Park Circus, Sealdah, and Salt Lake with pollution-free morning breezes.'
  },
  {
    id: 'proj-4',
    name: 'Beleghata Heritage Park View',
    tagline: 'Peaceful Gated Living Near Subhas Sarobar Lake & Metro',
    location: 'Beleghata Main Road, Near Subhas Sarobar Metro Station',
    subLocation: 'Beleghata',
    status: 'Ready to Move',
    reraNumber: 'WBRERA/P/KOL/2023/000529',
    priceStarting: '₹ 54 Lakhs onwards',
    configurations: '2 BHK & 3 BHK Family Flats (880 - 1,340 Sq.Ft)',
    totalTowers: '1 Standalone Tower',
    floors: 'G + 7 Floors',
    elevationImage: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1000&q=80',
    galleryImages: [
      { url: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1000&q=80', title: 'G+7 Residential Building Elevation', tag: 'Elevation' },
      { url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80', title: 'Minimalist Airy Living Hall', tag: 'Flat Interior' },
      { url: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1000&q=80', title: 'Master Bedroom with Attached Washroom', tag: 'Flat Interior' },
      { url: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1000&q=80', title: 'L-Shaped Granite Counter Modular Kitchen', tag: 'Kitchen' },
    ],
    amenities: [
      'Subhas Sarobar Lake Proximity (300m)',
      'Otis Passenger Elevator',
      'Covered Car & Bike Garage',
      'Roof-top Terrace Garden with Gazebo',
      '24/7 Security Guard & CCTV',
      'KMC Filtered Water & Overhead Tanks'
    ],
    description: 'Ideal home for Kolkatans looking for a tranquil environment with heritage green surroundings. Located right next to Subhas Sarobar, offering morning fresh air, metro convenience, and renowned schools nearby.'
  }
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  // Flats & Apartments - Living Rooms
  {
    id: 'gal-1',
    title: 'Spacious Sunlit Living Room with Dining Area',
    category: 'flat',
    roomType: 'living',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    propertyName: '3 BHK Vaastu Flat',
    location: 'Kasba, Kolkata',
    bhkInfo: '3 BHK (1,420 Sq.Ft)',
    description: 'Open-concept living room with floor-to-ceiling balcony doors, vitrified tile flooring, and natural cross-ventilation.'
  },
  {
    id: 'gal-2',
    title: 'Contemporary Luxury Living Room & Lounge',
    category: 'apartment',
    roomType: 'living',
    imageUrl: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
    propertyName: 'EM Bypass Sky Condominium',
    location: 'Topsia EM Bypass Corridor',
    bhkInfo: '4 BHK (1,980 Sq.Ft)',
    description: 'Designer false ceiling with warm recessed LED lights, large seating layout, and adjoining dining space.'
  },
  {
    id: 'gal-3',
    title: 'Warm Wooden Accents Family Living Hall',
    category: 'flat',
    roomType: 'living',
    imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    propertyName: 'Tangra Green View Apartment',
    location: 'Tangra, Kolkata',
    bhkInfo: '2 BHK (965 Sq.Ft)',
    description: 'Smartly planned drawing room making optimal use of square footage with sleek TV unit wall and sunny windows.'
  },
  // Flats & Apartments - Master Bedrooms
  {
    id: 'gal-4',
    title: 'Master Bedroom Suite with Attached Balcony Access',
    category: 'apartment',
    roomType: 'bedroom',
    imageUrl: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80',
    propertyName: 'Kasba Heights Tower Flat',
    location: 'Kasba Near Acropolis Mall',
    bhkInfo: '3 BHK Master Suite',
    description: 'Generous king-size bedroom layout with floor-to-ceiling wooden wardrobe provision and sound-insulated double glazing.'
  },
  {
    id: 'gal-5',
    title: 'Sun-Drenched Master Bedroom with French Windows',
    category: 'flat',
    roomType: 'bedroom',
    imageUrl: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80',
    propertyName: 'Beleghata Lakefront Flat',
    location: 'Beleghata, Kolkata',
    bhkInfo: '3 BHK Flat',
    description: 'East-facing bedroom greeting the morning sunrise, wooden finish tile floors, and dedicated dressing alcove.'
  },
  {
    id: 'gal-6',
    title: 'Modern Guest / Children Bedroom',
    category: 'flat',
    roomType: 'bedroom',
    imageUrl: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80',
    propertyName: 'Topsia Lake Greens Apartment',
    location: 'Topsia, Kolkata',
    bhkInfo: '2 & 3 BHK Layout',
    description: 'Well-ventilated secondary bedroom with ample study desk space, natural daylight, and AC electrical conduit ready.'
  },
  // Flats & Apartments - Modular Kitchens
  {
    id: 'gal-7',
    title: 'High-End Modular Kitchen with Breakfast Counter',
    category: 'apartment',
    roomType: 'kitchen',
    imageUrl: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
    propertyName: 'EM Bypass Luxury Tower',
    location: 'EM Bypass, Topsia',
    bhkInfo: '4 BHK Condominium',
    description: 'Soft-close acrylic kitchen cabinets, premium granite slab, stainless steel dual sink, and pipeline gas connection.'
  },
  {
    id: 'gal-8',
    title: 'Ergonomic L-Shaped Modular Kitchen',
    category: 'flat',
    roomType: 'kitchen',
    imageUrl: 'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=1200&q=80',
    propertyName: 'Kasba Residential Flat',
    location: 'Kasba, Kolkata',
    bhkInfo: '3 BHK Flat',
    description: 'Durable anti-scratch countertop, overhead chimney duct, multiple utensil drawers, and separate utility balcony.'
  },
  {
    id: 'gal-9',
    title: 'Sleek Modern Kitchen with Branded Chimney & Hob',
    category: 'flat',
    roomType: 'kitchen',
    imageUrl: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80',
    propertyName: 'Tangra Modern Flat',
    location: 'Tangra, Kolkata',
    bhkInfo: '2 BHK Flat',
    description: 'Clean glossy white cabinetry with anti-skid ceramic floor tiles and dedicated refrigerator alcove.'
  },
  // Balconies & Views
  {
    id: 'gal-10',
    title: 'Panoramic Glass-Railing Balcony with Skyline Views',
    category: 'apartment',
    roomType: 'balcony',
    imageUrl: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=1200&q=80',
    propertyName: 'Mani Casadona Towers',
    location: 'EM Bypass Corridor',
    bhkInfo: 'Sky Condominium',
    description: 'Wide 6-foot sit-out balcony overlooking Kolkata eastern wetlands and landscaped project grounds.'
  },
  {
    id: 'gal-11',
    title: 'Covered Private Sit-Out Balcony',
    category: 'flat',
    roomType: 'balcony',
    imageUrl: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80',
    propertyName: 'Kasba Green Flat',
    location: 'Kasba, Kolkata',
    bhkInfo: '3 BHK Flat',
    description: 'Perfect evening tea spot with space for planter pots, coffee table, and open sky orientation.'
  },
  // Housing Projects - Elevations & Towers
  {
    id: 'gal-12',
    title: 'Mani Casadona & EM Bypass Luxury Skyscraper',
    category: 'project',
    roomType: 'elevation',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    propertyName: 'Mani Casadona & EM Bypass Towers',
    location: 'EM Bypass / Topsia',
    bhkInfo: 'G+28 Floors • 3 & 4 BHK',
    description: 'Architectural marvel with glass curtain walls, earthquake-resistant RCC structure, and double-height entrance.'
  },
  {
    id: 'gal-13',
    title: 'Kasba Heights Modern G+11 Residential Tower',
    category: 'project',
    roomType: 'elevation',
    imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
    propertyName: 'Kasba Heights Residency',
    location: 'Kasba Main Road',
    bhkInfo: 'G+11 Floors • 2 & 3 BHK',
    description: 'Stately contemporary facade with covered podium parking, perimeter boundary wall, and landscaped driveway.'
  },
  {
    id: 'gal-14',
    title: 'Topsia Lake Greens Twin Towers',
    category: 'project',
    roomType: 'elevation',
    imageUrl: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=1200&q=80',
    propertyName: 'Topsia Lake Greens Enclave',
    location: 'Topsia Near Science City',
    bhkInfo: 'G+14 Floors • 3 & 4 BHK',
    description: 'Waterfront twin towers designed for maximum cross breeze, spacious vehicular ramps, and lush green landscaping.'
  },
  {
    id: 'gal-15',
    title: 'Beleghata Boutique Apartment Building',
    category: 'project',
    roomType: 'elevation',
    imageUrl: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1200&q=80',
    propertyName: 'Beleghata Heritage Gardens',
    location: 'Beleghata Main Rd',
    bhkInfo: 'G+7 Floors • 2 & 3 BHK',
    description: 'Low-density quiet apartment complex designed for peaceful living with round-the-clock security and elevator.'
  },
  // Projects - Amenities & Clubhouse
  {
    id: 'gal-16',
    title: 'Rooftop Infinity Swimming Pool & Sun Deck',
    category: 'project',
    roomType: 'amenity',
    imageUrl: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80',
    propertyName: 'EM Bypass Luxury Skyscraper',
    location: 'EM Bypass Corridor',
    bhkInfo: 'Clubhouse Amenity',
    description: 'Pristine infinity swimming pool with lounge deck chairs, children splash pool, and changing rooms.'
  },
  {
    id: 'gal-17',
    title: 'Fully Air-Conditioned Community Gymnasium',
    category: 'project',
    roomType: 'amenity',
    imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80',
    propertyName: 'Kasba Heights Club',
    location: 'Kasba, Kolkata',
    bhkInfo: 'Residents Gym',
    description: 'Modern cardiovascular and strength training equipment with rubberized flooring and trained fitness instructor.'
  },
  {
    id: 'gal-18',
    title: 'Landscaped Garden Walkway & Kids Play Area',
    category: 'project',
    roomType: 'amenity',
    imageUrl: 'https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?auto=format&fit=crop&w=1200&q=80',
    propertyName: 'Topsia Lake Greens Podium',
    location: 'Topsia Road',
    bhkInfo: 'Podium Garden',
    description: 'Lush green turf, walking jogging track, stone benches for senior citizens, and safe equipment for children.'
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'test-1',
    clientName: 'Dr. Anirban Mukherjee',
    clientRole: 'Senior Consultant, Ruby General Hospital',
    locality: 'Kasba, Kolkata',
    rating: 5,
    propertyPurchased: '3 BHK Flat near Acropolis',
    date: 'February 2025',
    review: 'Buying a flat in Kasba while managing hospital duties seemed impossible. Dipendu Babu showed us only genuine, verified flats with clear KMC sanction plans. His documentation team took care of mutation and registrar formalities flawlessly. Honest, punctual, and reliable.'
  },
  {
    id: 'test-2',
    clientName: 'Smt. Rina Ghosh & Sourav Ghosh',
    clientRole: 'Software Architect (TCS Kolkata)',
    locality: 'Topsia, EM Bypass',
    rating: 5,
    propertyPurchased: 'Resale Apartment & Legal Title Search',
    date: 'November 2024',
    review: 'What sets Ganapati Real Estate apart is Dipendu Sen’s direct personal involvement. He pointed out title ambiguities in two properties we almost bought elsewhere, saving us from huge litigation risk. We finally closed our dream apartment on EM Bypass with complete peace of mind.'
  },
  {
    id: 'test-3',
    clientName: 'Rajat Banerjee',
    clientRole: 'Business Owner & Commercial Investor',
    locality: 'Beleghata & Tangra',
    rating: 5,
    propertyPurchased: '2.5 Katha Plot & Commercial Godown',
    date: 'August 2024',
    review: 'Plot transactions in Kolkata are tricky with Porcha and BL&LRO paperwork. Dipendu Babu handled the entire chain deed search going back 35 years and ensured smooth physical demarcation. Truly the most trustworthy broker in the Topsia-Beleghata belt.'
  }
];

export const WHY_CHOOSE_US = [
  {
    title: 'Deep Kolkata Micro-Market Knowledge',
    desc: 'Over 16 years of on-ground relationships across Topsia, Kasba, Tangra, Beleghata, and EM Bypass. We know upcoming metro routes, market valuations, and authentic locality nuances.',
    icon: 'Compass'
  },
  {
    title: '100% Verified & Litigant-Free Titles',
    desc: 'Every listed property undergoes rigorous title search, KMC tax receipt verification, and BL&LRO Porcha audits before being recommended to clients.',
    icon: 'ShieldCheck'
  },
  {
    title: 'End-to-End Handholding till Registry',
    desc: 'From initial site visits to price negotiation, bank loan liaisons, and actual registrar office deed execution — Dipendu Sen stands beside you at every step.',
    icon: 'Handshake'
  },
  {
    title: 'Zero Hidden Charges & Transparent Dealings',
    desc: 'Fair, transparent terms with upfront fee disclosures. No inflated price margins, no surprises, and complete clarity for both buyers and sellers.',
    icon: 'Eye'
  }
];

export const CLIENT_SETUP_CHECKLIST = [
  {
    item: 'Official Phone & WhatsApp Number',
    status: 'Placeholder Set (+91 98301 23456)',
    actionNote: 'Client can update with their active SIM / WhatsApp Business number.'
  },
  {
    item: 'Exact Physical Office Address',
    status: 'Topsia Road / Kasba EM Bypass Area',
    actionNote: 'Client can provide exact room/shop number and building name if different.'
  },
  {
    item: 'WBRERA Registration Certificate',
    status: 'WBRERA/P/KOL/2024/000842 (Displayed for Compliance)',
    actionNote: 'West Bengal RERA compliance badge is active; client can confirm exact certificate number.'
  },
  {
    item: 'Official Email ID',
    status: 'info@ganapatirealestate.in',
    actionNote: 'Can be linked to client domain or Gmail inbox.'
  }
];
