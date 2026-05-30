import React from 'react';
import { Property } from '../types';
import { MapPin, Maximize2, ArrowUpRight } from 'lucide-react';

interface PropertyCardProps {
  key?: string;
  property: Property;
  onSelect: (property: Property) => void;
}

export default function PropertyCard({ property, onSelect }: PropertyCardProps) {
  // Format price helper
  const renderPrice = () => {
    return (
      <div className="flex flex-col items-end">
        <span className="text-lg font-serif font-semibold text-gold-700">
          {property.priceFormatted}
        </span>
        {property.priceUnit && (
          <span className="text-[9px] text-stone-400 uppercase tracking-widest mt-0.5">
            {property.priceUnit}
          </span>
        )}
      </div>
    );
  };

  return (
    <div 
      className="group relative bg-white border border-stone-200/60 rounded-lg overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:border-gold-500/35 flex flex-col cursor-pointer"
      onClick={() => onSelect(property)}
    >
      {/* Property Image & Badges */}
      <div className="relative h-56 overflow-hidden bg-stone-100 flex-shrink-0">
        <img
          src={property.imageUrl}
          alt={property.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F1520]/60 via-transparent to-transparent opacity-80"></div>
        
        {/* Type Badge (Sale/Rent) */}
        <span className={`absolute top-4 left-4 px-3 py-1.5 text-[9px] uppercase tracking-widest font-semibold rounded shadow-sm ${
          property.type === 'rent' ? 'bg-[#0F1520] text-white' : 'bg-gold-500 text-[#0F1520]'
        }`}>
          {property.typeLabel}
        </span>

        {/* Category Label */}
        <span className="absolute bottom-4 left-4 px-2.5 py-1.5 text-[9px] uppercase tracking-widest font-semibold rounded border border-gold-500/25 backdrop-blur-md bg-white/90 text-stone-800">
          {property.categoryLabel}
        </span>
      </div>

      {/* Card Body */}
      <div className="p-6 flex-grow flex flex-col justify-between">
        <div>
          {/* Location */}
          <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-stone-400 mb-2.5">
            <MapPin className="w-3.5 h-3.5 text-gold-500 flex-shrink-0" />
            <span className="truncate">{property.location}</span>
          </div>

          {/* Title */}
          <h3 className="font-serif text-lg font-medium text-stone-900 leading-normal group-hover:text-gold-600 transition-colors mb-3 line-clamp-2">
            {property.title}
          </h3>

          {/* Short description */}
          <p className="text-stone-500 text-xs leading-relaxed line-clamp-3 mb-5 font-light">
            {property.description}
          </p>
        </div>

        {/* Quick Specs & Price Footer */}
        <div className="pt-4 border-t border-stone-100 flex items-center justify-between mt-auto">
          {/* Surface Area Spec */}
          <div className="flex items-center gap-2.5 text-stone-800">
            <div className="w-9 h-9 rounded bg-stone-50 border border-stone-100 flex items-center justify-center text-stone-550 group-hover:bg-gold-500/10 group-hover:text-gold-700 transition-colors">
              <Maximize2 className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] text-stone-400 uppercase tracking-widest leading-none">Powierzchnia</span>
              <span className="text-xs font-semibold mt-1">{property.area} m²</span>
            </div>
          </div>

          {/* Price */}
          {renderPrice()}
        </div>
      </div>

      {/* Absolute Hover link icon */}
      <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/95 border border-stone-200/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
        <ArrowUpRight className="w-4 h-4 text-brand-900" />
      </div>
    </div>
  );
}
