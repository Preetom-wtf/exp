import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { FeaturedListings } from './components/FeaturedListings';
import { ProjectsAndGallery } from './components/ProjectsAndGallery';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Testimonials } from './components/Testimonials';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { StickyWhatsAppBar } from './components/StickyWhatsAppBar';
import { ClientChecklistModal } from './components/ClientChecklistModal';
import { PropertyCategory } from './types';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<PropertyCategory>('all');
  const [activeLocality, setActiveLocality] = useState<string>('All');
  const [isClientChecklistOpen, setIsClientChecklistOpen] = useState(false);

  const handleHeroSearch = (category: PropertyCategory, locality: string) => {
    setActiveCategory(category);
    setActiveLocality(locality);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-stone-900 font-sans selection:bg-[#163829] selection:text-white">
      {/* Navigation Header */}
      <Navbar onOpenClientNotes={() => setIsClientChecklistOpen(true)} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onSearch={handleHeroSearch} />

        {/* 2. About Us: Dipendu Sen & Kolkata Expertise */}
        <AboutSection />

        {/* 3. Real Estate Services Grid */}
        <ServicesSection />

        {/* 4. Featured Property Listings */}
        <FeaturedListings 
          key={`${activeCategory}-${activeLocality}`}
          initialCategory={activeCategory} 
          initialLocality={activeLocality} 
        />

        {/* 5. Pictures of Flats, Apartments & Projects Showcase */}
        <ProjectsAndGallery />

        {/* 6. Why Choose Us (Trust Signals & WBRERA Compliance) */}
        <WhyChooseUs />

        {/* 7. Client Testimonials */}
        <Testimonials />

        {/* 8. Contact Section (Google Maps, Phone, Form, WhatsApp) */}
        <ContactSection />
      </main>

      {/* 9. Footer */}
      <Footer />

      {/* 9. Mobile Sticky WhatsApp Bar & Desktop Floating Chat */}
      <StickyWhatsAppBar />

      {/* 10. Client Handover Checklist Modal (Flagged Items) */}
      <ClientChecklistModal
        isOpen={isClientChecklistOpen}
        onClose={() => setIsClientChecklistOpen(false)}
      />
    </div>
  );
}
