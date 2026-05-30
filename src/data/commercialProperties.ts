import { Property } from '../types';

export const COMMERCIAL_PROPERTIES: Property[] = [
  {
    id: 'prop-1',
    title: 'Biuro Premium w Śródmieściu',
    category: 'office',
    categoryLabel: 'Biura',
    type: 'rent',
    typeLabel: 'Wynajem',
    price: 49,
    priceFormatted: '49 PLN / m²',
    priceUnit: 'm² / miesięcznie',
    area: 124,
    location: 'Radom, Śródmieście',
    address: 'ul. Żeromskiego, Radom 26-600',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
    description: 'Reprezentacyjna przestrzeń biurowa w ścisłym centrum. Nowoczesny budynek z windą, klimatyzacją i pełnym zapleczem sanitarnym. Idealne dla kancelarii lub firmy IT.',
    features: [
      'Klimatyzacja VRF',
      'Winda premium',
      'Dostęp 24/7',
      'Światłowód symetryczny',
      'Parking podziemny'
    ],
    featured: true
  },
  {
    id: 'prop-2',
    title: 'Lokal Handlowo-Usługowy z Witryną',
    category: 'retail',
    categoryLabel: 'Lokale Usługowe',
    type: 'rent',
    typeLabel: 'Wynajem',
    price: 5200,
    priceFormatted: '5 200 PLN',
    priceUnit: 'miesięcznie + media',
    area: 85,
    location: 'Radom, Deptak Główny',
    address: 'ul. Żeromskiego, Radom 26-600',
    imageUrl: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&q=80&w=800',
    description: 'Atrakcyjny lokal usługowy przy głównym ciągu pieszym miasta. Duża, przeszklona witryna i wysokie sufity zapewniają świetną ekspozycję marki.',
    features: [
      'Szklana witryna frontowa',
      'Główny ciąg pieszy',
      'Wejście z poziomu zero',
      'Klimatyzacja'
    ],
    featured: true
  },
  {
    id: 'prop-3',
    title: 'Nowoczesna Hala Magazynowa S12',
    category: 'industrial',
    categoryLabel: 'Magazyny',
    type: 'rent',
    typeLabel: 'Wynajem',
    price: 22,
    priceFormatted: '22 PLN / m²',
    priceUnit: 'm² / miesięcznie',
    area: 1150,
    location: 'Radom, Wośniki (przy S12)',
    address: 'ul. Kielecka, Radom 26-600',
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800',
    description: 'Wysokiej klasy hala komercyjna o wysokości składowania 7.5m. Bezpyłowa posadzka 5t/m², rampa rozładunkowa i szeroki plac manewrowy dla TIR.',
    features: [
      'Wysokość 7.5 m',
      'Posadzka bezpyłowa 5t/m²',
      'Rampa + bramy z poziomu 0',
      'Plac manewrowy dla TIR'
    ],
    featured: true
  },
  {
    id: 'prop-4',
    title: 'Grunt Inwestycyjny Gołębiów',
    category: 'land',
    categoryLabel: 'Działki',
    type: 'sale',
    typeLabel: 'Sprzedaż',
    price: 1390000,
    priceFormatted: '1 390 000 PLN',
    priceUnit: 'cena całkowita',
    area: 4800,
    location: 'Radom, Strefa Przemysłowa',
    address: 'ul. Zubrzyckiego, Radom 26-600',
    imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800',
    description: 'W pełni uzbrojona działka inwestycyjna w strefie przemysłowej. Zgodna z MPZP pod zabudowę produkcyjną, składową oraz usługi komercyjne.',
    features: [
      'Przeznaczenie produkcyjno-usługowe',
      'Pełne uzbrojenie terenu',
      'Dojazd dla ciężkiego tonażu',
      'Regularny prostokątny kształt'
    ],
    featured: false
  },
  {
    id: 'prop-5',
    title: 'Kameralne Biuro przy ul. Miłej',
    category: 'office',
    categoryLabel: 'Biura',
    type: 'rent',
    typeLabel: 'Wynajem',
    price: 2600,
    priceFormatted: '2 600 PLN',
    priceUnit: 'miesięcznie + opłaty',
    area: 58,
    location: 'Radom, Śródmieście US',
    address: 'ul. Miła, Radom 26-600',
    imageUrl: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800',
    description: 'Doskonale skomunikowany lokal biurowy w sąsiedztwie Urzędu Skarbowego. Składa się z gabinetu, przestrzeni recepcyjnej i aneksu.',
    features: [
      'Sąsiedztwo instytucji publicznych',
      'Parking dla klientów',
      'Instalacja alarmowa',
      'Światłowód symetryczny'
    ],
    featured: false
  },
  {
    id: 'prop-6',
    title: 'Niezależny Budynek Handlowy',
    category: 'retail',
    categoryLabel: 'Lokale Usługowe',
    type: 'sale',
    typeLabel: 'Sprzedaż',
    price: 2490000,
    priceFormatted: '2 490 000 PLN',
    priceUnit: 'cena całkowita',
    area: 450,
    location: 'Radom, Limanowskiego',
    address: 'ul. Limanowskiego, Radom 26-600',
    imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800',
    description: 'Wolnostojący, nowoczesny obiekt idealny pod market, placówkę medyczną lub klub fitness. Duży przyległy bezpłatny parking.',
    features: [
      'Własna rampa dostawcza',
      'Dowolna możliwość rearanżacji',
      'HVAC wydajna centrala',
      'Szeroki parking bezpłatny'
    ],
    featured: false
  }
];
