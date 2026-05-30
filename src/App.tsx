import React, { useState, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PropertyGallery from './components/PropertyGallery';
import AboutAgency from './components/AboutAgency';
import ContactFormAndMap from './components/ContactFormAndMap';
import Footer from './components/Footer';
import PropertyDetailsModal from './components/PropertyDetailsModal';
import { Property } from './types';
import { Building2, ShieldCheck, Mail, Phone, CalendarCheck } from 'lucide-react';

export default function App() {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [prefilledPropertyTitle, setPrefilledPropertyTitle] = useState<string | null>(null);

  // References for scrolling
  const offersRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleInquireFromModal = (title: string) => {
    setPrefilledPropertyTitle(title);
    setSelectedProperty(null); // Close the modal
    
    // Smooth scroll to contact section
    setTimeout(() => {
      if (contactRef.current) {
        contactRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-[#faf9f6] text-stone-900 selection:bg-gold-500 selection:text-white flex flex-col">
      {/* Navbar section */}
      <Navbar 
        onOffersClick={() => scrollToSection(offersRef)}
        onAboutClick={() => scrollToSection(aboutRef)}
        onContactClick={() => scrollToSection(contactRef)}
      />

      {/* Hero Header */}
      <Hero 
        onExploreOffers={() => scrollToSection(offersRef)}
        onContactClick={() => {
          setPrefilledPropertyTitle('Zgłoszenie własnej nieruchomości komercyjnej do bazy');
          scrollToSection(contactRef);
        }}
      />

      {/* Brief Value Proposition Highlights banner */}
      <section className="bg-white border-y border-stone-100 py-10">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
          <div className="flex flex-col md:flex-row items-center gap-3">
            <div className="w-10 h-10 rounded bg-gold-50 border border-gold-200/20 flex items-center justify-center flex-shrink-0 text-gold-600">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif font-semibold text-stone-900 text-xs uppercase tracking-wider">Unikalne Lokacje</h4>
              <p className="text-[11px] text-stone-550 leading-relaxed font-light mt-0.5">
                Starannie wyselekcjonowane punkty komercyjne w Radomiu.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-3">
            <div className="w-10 h-10 rounded bg-gold-50 border border-gold-200/20 flex items-center justify-center flex-shrink-0 text-gold-600">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif font-semibold text-stone-900 text-xs uppercase tracking-wider">Bezpieczeństwo</h4>
              <p className="text-[11px] text-stone-550 leading-relaxed font-light mt-0.5">
                Bezpośredni nadzór licencjonowanego brokera.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-3">
            <div className="w-10 h-10 rounded bg-gold-50 border border-gold-200/20 flex items-center justify-center flex-shrink-0 text-gold-600">
              <CalendarCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif font-semibold text-stone-900 text-xs uppercase tracking-wider">Sprawny Proces</h4>
              <p className="text-[11px] text-stone-550 leading-relaxed font-light mt-0.5">
                Szybka decyzyjność i bezproblemowa finalizacja.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Oferty (Property Gallery) */}
      <div ref={offersRef}>
        <PropertyGallery 
          onSelectProperty={(property) => setSelectedProperty(property)} 
        />
      </div>

      {/* O Nas (About Agency) */}
      <div ref={aboutRef}>
        <AboutAgency 
          onContactClick={() => scrollToSection(contactRef)} 
        />
      </div>

      {/* Kontakt i Mapa (Contact Form with Google map embedded) */}
      <div ref={contactRef}>
        <ContactFormAndMap 
          prefilledPropertyTitle={prefilledPropertyTitle}
          onClearPrefilledTitle={() => setPrefilledPropertyTitle(null)}
        />
      </div>

      {/* Footer bar */}
      <Footer 
        onOffersClick={() => scrollToSection(offersRef)}
        onAboutClick={() => scrollToSection(aboutRef)}
        onContactClick={() => scrollToSection(contactRef)}
      />

      {/* Property Details Modal element */}
      {selectedProperty && (
        <PropertyDetailsModal 
          property={selectedProperty}
          onClose={() => setSelectedProperty(null)}
          onInquire={handleInquireFromModal}
        />
      )}
    </div>
  );
}
