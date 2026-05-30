export interface Property {
  id: string;
  title: string;
  category: 'office' | 'retail' | 'industrial' | 'land';
  categoryLabel: string;
  type: 'rent' | 'sale';
  typeLabel: string;
  price: number;
  priceFormatted: string;
  priceUnit?: string; // e.g. "/ m²" or "/ miesiąc"
  area: number; // in m²
  location: string;
  imageUrl: string;
  description: string;
  features: string[];
  featured: boolean;
  address: string;
}

export interface InquiryFormState {
  name: string;
  email: string;
  phone: string;
  propertyTitle?: string;
  message: string;
}
