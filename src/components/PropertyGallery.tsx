import React, { useState, useMemo } from 'react';
import { COMMERCIAL_PROPERTIES } from '../data/commercialProperties';
import { Property } from '../types';
import PropertyCard from './PropertyCard';
import { Filter, RotateCcw, LayoutGrid } from 'lucide-react';

interface PropertyGalleryProps {
  onSelectProperty: (property: Property) => void;
}

export default function PropertyGallery({ onSelectProperty }: PropertyGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { value: 'all', label: 'Wszystkie' },
    { value: 'office', label: 'Biura' },
    { value: 'retail', label: 'Usługowe' },
    { value: 'industrial', label: 'Magazyny' },
    { value: 'land', label: 'Działki' }
  ];

  const types = [
    { value: 'all', label: 'Wszystkie transakcje' },
    { value: 'rent', label: 'Wynajem' },
    { value: 'sale', label: 'Sprzedaż' }
  ];

  const filteredProperties = useMemo(() => {
    return COMMERCIAL_PROPERTIES.filter(property => {
      const matchCategory = selectedCategory === 'all' || property.category === selectedCategory;
      const matchType = selectedType === 'all' || property.type === selectedType;
      const matchSearch = property.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          property.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          property.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      return matchCategory && matchType && matchSearch;
    });
  }, [selectedCategory, selectedType, searchQuery]);

  const resetFilters = () => {
    setSelectedCategory('all');
    setSelectedType('all');
    setSearchQuery('');
  };

  return (
    <section className="py-20 bg-[#faf9f6]" id="offers-section">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Crisp Header */}
        <div className="mb-12">
          <span className="text-[10px] uppercase tracking-widest text-gold-600 font-semibold block mb-2">Portfolio Radom</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-stone-900 tracking-tight">
            Wybrane <span className="font-semibold italic text-stone-900">Oferty</span>
          </h2>
          <p className="text-stone-500 text-xs sm:text-sm font-light mt-2 max-w-lg">
            Sprawdzone, bezpośrednio nadzorowane nieruchomości komercyjne o dużym potencjale biznesowym.
          </p>
        </div>

        {/* Minimal Filters */}
        <div className="flex flex-col gap-5 mb-12">
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder="Szukaj nieruchomości komercyjnych (np. ulica, przeznaczenie)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-4 pr-10 py-3 rounded-lg border border-stone-200/85 focus:outline-none focus:border-gold-500 focus:bg-white text-xs text-stone-700 bg-white shadow-xs transition-all duration-300 placeholder-stone-400"
              />
              <LayoutGrid className="absolute right-3.5 top-3.5 w-4 h-4 text-stone-400 pointer-events-none" />
            </div>

            {/* Transaction Types */}
            <div className="flex gap-2 overflow-x-auto no-scrollbar py-0.5">
              {types.map((t) => (
                <button
                  key={t.value}
                  onClick={() => setSelectedType(t.value)}
                  className={`px-4 py-2.5 rounded-lg text-[9px] sm:text-[10px] font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer border ${
                    selectedType === t.value 
                      ? 'bg-[#0F1520] text-white border-[#0F1520] shadow-md' 
                      : 'bg-white text-stone-550 border-stone-200/70 hover:bg-stone-50 hover:text-stone-900'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex gap-2 overflow-x-auto pb-1 border-b border-stone-200/60 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`whitespace-nowrap px-4 py-3 text-[10px] sm:text-xs font-semibold uppercase tracking-widest transition-all duration-300 relative cursor-pointer ${
                  selectedCategory === cat.value
                    ? 'text-gold-700 font-bold'
                    : 'text-stone-400 hover:text-stone-800'
                }`}
              >
                {cat.label}
                {selectedCategory === cat.value && (
                  <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold-500 to-gold-600 rounded-t-full"></span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Result Summary Info */}
        <div className="mb-6 flex justify-between items-center text-[10px] uppercase tracking-widest text-[#9CA3AF]">
          <span>Znaleziono: <strong className="text-stone-900 font-bold">{filteredProperties.length}</strong> ofert</span>
          {(selectedCategory !== 'all' || selectedType !== 'all' || searchQuery !== '') && (
            <button
              onClick={resetFilters}
              className="flex items-center gap-1 text-gold-600 hover:text-gold-800 transition-colors uppercase font-bold cursor-pointer"
            >
              <RotateCcw className="w-3 h-3" />
              Reset
            </button>
          )}
        </div>

        {/* Offers Grid */}
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                onSelect={(prop) => onSelectProperty(prop)}
              />
            ))}
          </div>
        ) : (
          /* Sleek Empty State */
          <div className="text-center py-16 bg-white rounded border border-stone-200 p-8">
            <Filter className="w-6 h-6 text-stone-400 mx-auto mb-3" />
            <h3 className="font-serif text-lg font-medium text-stone-800 mb-1">Brak wyników</h3>
            <p className="text-stone-500 text-xs font-light mb-4">
              Zmień kryteria wyszukiwania, aby zobaczyć dostępne lokale.
            </p>
            <button
              onClick={resetFilters}
              className="px-4 py-2 bg-[#0F1520] hover:bg-gold-600 hover:text-[#0F1520] text-white rounded text-[10px] uppercase tracking-wider font-bold transition-colors cursor-pointer"
            >
              Pokaż wszystkie
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
