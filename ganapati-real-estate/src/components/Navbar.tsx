import { useState, useEffect } from 'react';
import { Phone, MessageCircle, X, Shield, MapPin, ExternalLink, ChevronRight } from 'lucide-react';
import { BUSINESS_CONFIG, getWhatsAppUrl } from '../data/businessData';

interface NavbarProps {
  onOpenClientNotes?: () => void;
}

export function Navbar({ onOpenClientNotes }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when drawer menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About Us', href: '#about' },
    { name: 'Our Services', href: '#services' },
    { name: 'Featured Listings', href: '#listings' },
    { name: 'Projects & Photos', href: '#projects-gallery' },
    { name: 'Why Choose Us', href: '#why-us' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact & Office', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Main Navigation Bar - Matches Screenshot Format */}
      <header
        className={`sticky top-0 z-40 bg-white/95 backdrop-blur-md transition-all duration-300 ${
          isScrolled ? 'border-b border-stone-200/80 shadow-xs py-3.5' : 'border-b border-stone-100 py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between">
          {/* Brand Name - Large Serif Uppercase as seen in Screenshots */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex flex-col group"
            id="brand-logo-link"
          >
            <span className="font-serif-display text-xl sm:text-2xl font-bold tracking-[0.14em] text-stone-950 uppercase">
              {BUSINESS_CONFIG.name}
            </span>
          </a>

          {/* Right Action: Minimalist 2-line Hamburger Menu Button as in Screenshot */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="w-10 h-10 flex flex-col justify-center items-end gap-1.5 p-2 rounded-lg hover:bg-stone-100 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
              id="main-hamburger-btn"
            >
              <span
                className={`h-[2px] bg-stone-900 rounded-full transition-all duration-300 ${
                  menuOpen ? 'w-6 rotate-45 translate-y-[4px]' : 'w-6'
                }`}
              />
              <span
                className={`h-[2px] bg-stone-900 rounded-full transition-all duration-300 ${
                  menuOpen ? 'w-6 -rotate-45 -translate-y-[4px]' : 'w-4'
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Slide-out Navigation Drawer Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop */}
          <div
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 bg-stone-950/50 backdrop-blur-xs transition-opacity animate-fadeIn"
          />

          {/* Drawer Panel */}
          <div className="relative w-full max-w-md bg-[#FAF8F5] h-full shadow-2xl z-10 flex flex-col justify-between overflow-y-auto border-l border-stone-200 animate-slideLeft p-6 sm:p-8">
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between border-b border-stone-200 pb-5">
                <div>
                  <span className="font-serif-display text-xl font-bold tracking-wider text-stone-950 uppercase">
                    {BUSINESS_CONFIG.name}
                  </span>
                  <p className="text-xs text-[#A0522D] font-semibold tracking-wider uppercase mt-0.5">
                    Dipendu Sen • Kolkata Property Brokerage
                  </p>
                </div>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="w-9 h-9 rounded-full bg-stone-100 hover:bg-stone-200 flex items-center justify-center text-stone-700 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="py-6 flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="flex items-center justify-between py-3 px-3 rounded-xl font-serif-display text-lg sm:text-xl font-medium text-stone-800 hover:text-stone-950 hover:bg-stone-100 transition-colors group"
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-4 h-4 text-stone-400 group-hover:text-stone-900 group-hover:translate-x-1 transition-all" />
                  </a>
                ))}
              </nav>
            </div>

            {/* Bottom Actions & Contact in Drawer */}
            <div className="border-t border-stone-200 pt-6 space-y-3">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-[#25D366] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#20ba5a] transition-all shadow-sm"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Enquire on WhatsApp</span>
              </a>

              <a
                href={`tel:${BUSINESS_CONFIG.contact.phoneRaw}`}
                className="w-full py-3 px-4 rounded-xl border border-stone-800 text-stone-900 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-stone-900 hover:text-white transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Call {BUSINESS_CONFIG.contact.phoneDisplay}</span>
              </a>

              {onOpenClientNotes && (
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    onOpenClientNotes();
                  }}
                  className="w-full text-center text-xs text-stone-500 hover:text-stone-900 underline pt-2"
                >
                  Client Setup Checklist & Details
                </button>
              )}

              <div className="text-[11px] text-stone-500 space-y-1 pt-2">
                <div className="flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-[#A0522D]" />
                  <span>WBRERA: {BUSINESS_CONFIG.rera.regNumber}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-stone-400" />
                  <span className="truncate">{BUSINESS_CONFIG.address.locality}, Kolkata</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
