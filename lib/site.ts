/**
 * Zentrale Unternehmens- und Inhaltsdaten.
 * Alles an einer Stelle, damit Texte, Preise und Kontaktdaten
 * leicht gepflegt werden können.
 */

export const business = {
  name: 'Echinger Kebap Haus',
  slogan: 'Frisch. Lecker. Ehrlich.',
  description:
    'Frische Zutaten, hausgemachte Soßen und bester Geschmack – seit Jahren in Eching.',
  street: 'Dieselstraße 29',
  zip: '85386',
  city: 'Eching',
  phone: '0177 8527563',
  phoneHref: 'tel:+491778527563',
  rating: 4.5,
  reviewCount: 290,
  hours: 'Mo – So  ·  10:00 – 22:00 Uhr',
  mapsQuery: 'Echinger+Kebap+Haus,+Dieselstraße+29,+85386+Eching',
  mapsLink:
    'https://www.google.com/maps/dir/?api=1&destination=Dieselstraße+29+85386+Eching',
} as const;

export const navLinks = [
  { label: 'Start', href: '/#start' },
  { label: 'Speisekarte', href: '/speisekarte' },
  { label: 'Über uns', href: '/#ueber-uns' },
  { label: 'Bewertungen', href: '/#bewertungen' },
  { label: 'Galerie', href: '/#galerie' },
  { label: 'Kontakt', href: '/#kontakt' },
] as const;

/* ----------------------------- Bilder ----------------------------- */
// Hochwertige, food-orientierte Platzhalter (Unsplash).
// Im echten Projekt durch eigene Fotos in /public ersetzen.
export const img = {
  heroDoner:
    'https://images.unsplash.com/photo-1561651823-34feb02250e4?auto=format&fit=crop&w=1600&q=80',
  shop:
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
  donerTeller:
    'https://images.unsplash.com/photo-1633321088355-d0f81134ca3b?auto=format&fit=crop&w=900&q=80',
  lahmacun:
    'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=900&q=80',
  donerPizza:
    'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80',
  chickenDoner:
    'https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=900&q=80',
  falafel:
    'https://images.unsplash.com/photo-1593001874117-c99c800e3eb7?auto=format&fit=crop&w=900&q=80',
  currywurst:
    'https://images.unsplash.com/photo-1597712679705-f99c5b7e34a8?auto=format&fit=crop&w=900&q=80',
  pommes:
    'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=900&q=80',
  burger:
    'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80',
  pide:
    'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=900&q=80',
  salat:
    'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80',
  interior:
    'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=80',
  kitchen:
    'https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&w=1200&q=80',
  exterior:
    'https://images.unsplash.com/photo-1555992336-fb0d29498b13?auto=format&fit=crop&w=1200&q=80',
} as const;

/* --------------------------- Bestseller --------------------------- */
export type Product = {
  name: string;
  description: string;
  price: string;
  image: string;
  badge?: string;
};

export const bestsellers: Product[] = [
  {
    name: 'Dönerteller mit Pommes',
    description:
      'Saftiges Fleisch, knusprige Pommes, frischer Salat und hausgemachte Soßen.',
    price: '11,90 €',
    image: img.donerTeller,
    badge: 'Bestseller',
  },
  {
    name: 'Hausgemachter Lahmacun',
    description: 'Frisch gebacken und traditionell zubereitet – wie früher.',
    price: '6,50 €',
    image: img.lahmacun,
    badge: 'Beliebt',
  },
  {
    name: 'Döner Pizza',
    description: 'Knuspriger Pizzaboden mit würzigem Dönerfleisch und Käse.',
    price: '9,90 €',
    image: img.donerPizza,
    badge: 'Spezial',
  },
  {
    name: 'Hähnchen Döner',
    description: 'Mit frischem Salat und hausgemachter Kräutersoße.',
    price: '6,90 €',
    image: img.chickenDoner,
  },
  {
    name: 'Falafel Dürüm',
    description: 'Vegetarisch, frisch und herzhaft gewickelt.',
    price: '7,50 €',
    image: img.falafel,
    badge: 'Vegetarisch',
  },
  {
    name: 'Currywurst mit Pommes',
    description: 'Der klassische Imbiss-Favorit mit fruchtiger Currysoße.',
    price: '7,90 €',
    image: img.currywurst,
  },
];

/* ------------------------- Speisekarte ---------------------------- */
export type MenuItem = {
  name: string;
  description?: string;
  price: string;
  tag?: string;
};

export type MenuCategory = {
  id: string;
  title: string;
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    id: 'doener',
    title: 'Döner',
    items: [
      { name: 'Döner', description: 'Im Fladenbrot mit Salat & Soße', price: '6,50 €', tag: 'Klassiker' },
      { name: 'Dürüm', description: 'Im dünnen Yufka-Teig gewickelt', price: '7,00 €' },
      { name: 'Dönerbox', description: 'Fleisch & Pommes in der Box', price: '7,50 €' },
      { name: 'Döner Teller', description: 'Mit Pommes, Salat & Soßen', price: '11,90 €', tag: 'Bestseller' },
      { name: 'Hähnchen Döner', description: 'Mit hausgemachter Kräutersoße', price: '6,90 €' },
    ],
  },
  {
    id: 'lahmacun',
    title: 'Lahmacun',
    items: [
      { name: 'Lahmacun', description: 'Türkische Pizza, frisch gebacken', price: '6,50 €' },
      { name: 'Lahmacun Spezial', description: 'Mit Dönerfleisch, Salat & Soße', price: '8,50 €', tag: 'Spezial' },
    ],
  },
  {
    id: 'pizza',
    title: 'Pizza',
    items: [
      { name: 'Margherita', description: 'Tomaten & Käse', price: '7,50 €' },
      { name: 'Salami', description: 'Tomaten, Käse & Salami', price: '8,50 €' },
      { name: 'Schinken', description: 'Tomaten, Käse & Schinken', price: '8,50 €' },
      { name: 'Sucuk', description: 'Mit türkischer Knoblauchwurst', price: '8,90 €' },
      { name: 'Tonno', description: 'Tomaten, Käse, Thunfisch & Zwiebeln', price: '8,90 €' },
      { name: 'Döner Pizza', description: 'Mit würzigem Dönerfleisch & Käse', price: '9,90 €', tag: 'Spezial' },
    ],
  },
  {
    id: 'pide',
    title: 'Pide',
    items: [
      { name: 'Käse Pide', description: 'Mit cremigem Käse überbacken', price: '7,90 €' },
      { name: 'Hackfleisch Pide', description: 'Mit würzigem Hackfleisch', price: '8,90 €' },
      { name: 'Sucuk Pide', description: 'Mit Knoblauchwurst & Käse', price: '8,90 €' },
      { name: 'Spinat Pide', description: 'Mit Spinat & Schafskäse', price: '8,50 €', tag: 'Vegetarisch' },
    ],
  },
  {
    id: 'burger',
    title: 'Burger',
    items: [
      { name: 'Hamburger', description: 'Rindfleisch, Salat & Soße', price: '6,50 €' },
      { name: 'Cheeseburger', description: 'Mit doppelt Käse', price: '7,00 €' },
      { name: 'Chicken Burger', description: 'Knuspriges Hähnchenfilet', price: '7,50 €' },
      { name: 'Big Kebap Burger', description: 'XXL mit Dönerfleisch', price: '9,50 €', tag: 'Spezial' },
    ],
  },
  {
    id: 'snacks',
    title: 'Snacks & Beilagen',
    items: [
      { name: 'Currywurst mit Pommes', price: '7,90 €' },
      { name: 'Schnitzel mit Pommes', price: '9,90 €' },
      { name: 'Pommes', price: '3,50 €' },
      { name: 'Falafel (6 Stück)', price: '4,50 €', tag: 'Vegetarisch' },
    ],
  },
  {
    id: 'salate',
    title: 'Salate',
    items: [
      { name: 'Gemischter Salat', description: 'Frische Saison-Zutaten', price: '5,50 €' },
      { name: 'Döner Salat', description: 'Mit Fleisch & Soße', price: '8,90 €' },
      { name: 'Falafel Salat', description: 'Vegetarisch & frisch', price: '8,50 €', tag: 'Vegetarisch' },
    ],
  },
  {
    id: 'getraenke',
    title: 'Getränke',
    items: [
      { name: 'Ayran', price: '1,80 €' },
      { name: 'Cola', price: '2,50 €' },
      { name: 'Fanta', price: '2,50 €' },
      { name: 'Sprite', price: '2,50 €' },
      { name: 'Wasser', price: '2,00 €' },
    ],
  },
];

/* --------------------------- Bewertungen -------------------------- */
export type Review = {
  name: string;
  initials: string;
  text: string;
  date: string;
};

export const reviews: Review[] = [
  {
    name: 'Markus B.',
    initials: 'MB',
    text: 'Super leckerer Döner und sehr freundliches Personal. Mein Stammladen in Eching!',
    date: 'vor 2 Wochen',
  },
  {
    name: 'Sophie L.',
    initials: 'SL',
    text: 'Die Soßen sind unglaublich lecker – vor allem die hausgemachte Kräutersoße.',
    date: 'vor 1 Monat',
  },
  {
    name: 'Daniel K.',
    initials: 'DK',
    text: 'Alles frisch und sauber. Man merkt, dass hier mit Liebe gearbeitet wird.',
    date: 'vor 3 Wochen',
  },
  {
    name: 'Aylin Y.',
    initials: 'AY',
    text: 'Große Portionen und faire Preise. Der Dönerteller macht richtig satt!',
    date: 'vor 1 Woche',
  },
];

/* ----------------------------- Galerie ---------------------------- */
export const gallery = [
  { src: img.donerTeller, alt: 'Frischer Döner Eching', label: 'Döner' },
  { src: img.lahmacun, alt: 'Hausgemachter Lahmacun Eching', label: 'Lahmacun' },
  { src: img.donerPizza, alt: 'Pizza aus dem Echinger Kebap Haus', label: 'Pizza' },
  { src: img.pommes, alt: 'Knusprige Pommes', label: 'Pommes' },
  { src: img.interior, alt: 'Innenbereich Echinger Kebap Haus', label: 'Innenbereich' },
  { src: img.exterior, alt: 'Außenansicht Dönerladen Eching', label: 'Außenansicht' },
  { src: img.kitchen, alt: 'Küche Echinger Kebap Haus', label: 'Küche' },
  { src: img.falafel, alt: 'Frische Falafel', label: 'Falafel' },
] as const;

/* ----------------------------- Vorteile --------------------------- */
export const features = [
  {
    icon: 'Leaf',
    title: 'Frische Zutaten',
    text: 'Täglich frisch vorbereitet – für vollen Geschmack.',
  },
  {
    icon: 'ChefHat',
    title: 'Hausgemachte Soßen',
    text: 'Nach eigenem Rezept und beliebt bei unseren Gästen.',
  },
  {
    icon: 'HeartHandshake',
    title: 'Freundlicher Service',
    text: 'Schnell, herzlich und immer mit einem Lächeln.',
  },
  {
    icon: 'BadgeEuro',
    title: 'Faire Preise',
    text: 'Lecker essen zu fairen Preisen – ohne Kompromisse.',
  },
] as const;
