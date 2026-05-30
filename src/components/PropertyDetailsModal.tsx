import React from 'react';
import { Property } from '../types';
import { X, MapPin, Maximize2, Coins, Phone, Mail, Check, Building } from 'lucide-react';

interface PropertyDetailsModalProps {
  property: Property;
  onClose: () => void;
  onInquire: (propertyTitle: string) => void;
}

export default function PropertyDetailsModal({ property, onClose, onInquire }: PropertyDetailsModalProps) {
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-brand-900/80 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>

      <div className="flex min-h-screen items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Modal content */}
        <div className="relative w-full max-w-4xl rounded-2xl bg-white shadow-2xl overflow-hidden border border-stone-200 animate-slide-up flex flex-col md:flex-row max-h-[90vh] md:max-h-[85vh]">
          
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-brand-900/60 hover:bg-brand-900 text-white flex items-center justify-center transition-colors shadow-lg cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Left Side: Images & Quick Overview */}
          <div className="w-full md:w-1/2 relative bg-stone-900 min-h-[250px] md:min-h-full">
            <img
              src={property.imageUrl}
              alt={property.title}
              className="w-full h-full object-cover"
            />
            {/* Visual bottom dark gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="px-3 py-1 bg-gold-500 text-brand-900 text-xs font-bold uppercase tracking-wider rounded">
                {property.typeLabel}
              </span>
              <h3 className="font-serif text-2xl font-semibold mt-3 text-white leading-tight">
                {property.title}
              </h3>
              <p className="text-xs text-stone-300 mt-2 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-gold-500" />
                {property.location}
              </p>
            </div>
          </div>

          {/* Right Side: Detailed Details & Action form */}
          <div className="w-full md:w-1/2 p-6 sm:p-8 overflow-y-auto flex flex-col justify-between">
            <div>
              {/* Category & Specifications Grid */}
              <div className="flex items-center gap-2 text-stone-500 text-xs mb-4">
                <Building className="w-4 h-4 text-gold-500" />
                <span className="font-semibold uppercase tracking-wider">{property.categoryLabel}</span>
              </div>

              {/* Specs Bento Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-stone-50 p-3.5 rounded-lg border border-stone-200/50">
                  <span className="block text-[10px] text-stone-400 uppercase tracking-widest font-semibold">Cena</span>
                  <span className="block text-base font-bold text-gold-700 mt-1">{property.priceFormatted}</span>
                  {property.priceUnit && <span className="text-[9px] text-stone-500 italic block">{property.priceUnit}</span>}
                </div>
                <div className="bg-stone-50 p-3.5 rounded-lg border border-stone-200/50">
                  <span className="block text-[10px] text-stone-400 uppercase tracking-widest font-semibold">Powierzchnia</span>
                  <span className="block text-base font-bold text-stone-800 mt-1">{property.area} m²</span>
                  <span className="text-[9px] text-stone-500 italic block">Całkowita użytkowa</span>
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h4 className="text-xs uppercase tracking-widest font-bold text-stone-800 mb-2 border-b border-stone-100 pb-1.5">
                  Opis Nieruchomości
                </h4>
                <p className="text-stone-600 text-sm leading-relaxed font-light">
                  {property.description}
                </p>
              </div>

              {/* Amenities / Features */}
              <div className="mb-6">
                <h4 className="text-xs uppercase tracking-widest font-bold text-stone-800 mb-2 border-b border-stone-100 pb-1.5">
                  Atuty i Wyposażenie
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {property.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-stone-700 text-xs">
                      <div className="w-4 h-4 rounded-full bg-gold-100 flex items-center justify-center flex-shrink-0">
                        <Check className="w-2.5 h-2.5 text-gold-700" />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Broker Details */}
              <div className="bg-stone-50 rounded-lg p-4 border border-stone-200/60 mb-6">
                <p className="text-[10px] uppercase tracking-widest text-stone-400 font-bold mb-2">Opiekun Oferty</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-900 overflow-hidden flex-shrink-0 border border-gold-500/30">
                    <img 
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150" 
                      alt="Monika Rumniak" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h5 className="font-semibold text-stone-900 text-sm">Monika Rumniak</h5>
                    <p className="text-[10px] text-stone-500">Agencja Luksorum Nieruchomości Radom</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA action group */}
            <div className="flex flex-col gap-2.5">
              <button
                onClick={() => onInquire(property.title)}
                className="w-full py-4.5 bg-brand-900 hover:bg-gold-500 hover:text-brand-900 text-white font-bold rounded-lg tracking-wide transition-all uppercase text-xs flex items-center justify-center gap-2 shadow-md cursor-pointer"
              >
                <Mail className="w-4.5 h-4.5" />
                Wyślij Zapytanie o tę Nieruchomość
              </button>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href="tel:+48500283333"
                  className="py-3 bg-stone-100 hover:bg-gold-500/10 text-stone-800 hover:text-gold-700 font-semibold rounded text-center text-xs flex items-center justify-center gap-1.5 transition-colors border border-stone-200"
                >
                  <Phone className="w-4 h-4" />
                  Zadzwoń
                </a>
                <a
                  href={`mailto:monikarumniak@gmail.com?subject=Zapytanie: ${encodeURIComponent(property.title)}`}
                  className="py-3 bg-stone-100 hover:bg-gold-500/10 text-stone-800 hover:text-gold-700 font-semibold rounded text-center text-xs flex items-center justify-center gap-1.5 transition-colors border border-stone-200"
                >
                  <Mail className="w-4 h-4" />
                  E-mail
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
