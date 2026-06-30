import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import { business } from '@/lib/site';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

const siteUrl = 'https://www.echinger-kebap-haus.de';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Echinger Kebap Haus | Döner & Kebap in Eching bei München',
    template: '%s | Echinger Kebap Haus',
  },
  description:
    'Döner, Kebap, Lahmacun & Pizza in Eching – frische Zutaten, hausgemachte Soßen und faire Preise. Familiengeführter Imbiss in der Dieselstraße 29, 85386 Eching. Auch zum Mitnehmen.',
  keywords: [
    'Döner Eching',
    'Kebap Eching',
    'Dönerladen Eching',
    'Lahmacun Eching',
    'Pizza Eching',
    'Imbiss Eching',
    'Echinger Kebap Haus',
  ],
  authors: [{ name: business.name }],
  alternates: { canonical: siteUrl },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: siteUrl,
    siteName: business.name,
    title: 'Echinger Kebap Haus | Döner & Kebap in Eching',
    description:
      'Frische Zutaten, hausgemachte Soßen und bester Geschmack – seit Jahren in Eching. Döner, Lahmacun, Pizza & mehr.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Echinger Kebap Haus | Döner & Kebap in Eching',
    description:
      'Frische Zutaten, hausgemachte Soßen und bester Geschmack – seit Jahren in Eching.',
  },
  robots: { index: true, follow: true },
};

// Strukturierte Daten – LocalBusiness / Restaurant (Schema.org)
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: business.name,
  image: `${siteUrl}/og-image.jpg`,
  '@id': siteUrl,
  url: siteUrl,
  telephone: '+491778527563',
  priceRange: '€',
  servesCuisine: ['Türkisch', 'Döner', 'Kebap', 'Pizza'],
  slogan: business.slogan,
  address: {
    '@type': 'PostalAddress',
    streetAddress: business.street,
    addressLocality: business.city,
    postalCode: business.zip,
    addressCountry: 'DE',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 48.2967,
    longitude: 11.6186,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ],
    opens: '10:00',
    closes: '22:00',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: business.rating,
    reviewCount: business.reviewCount,
    bestRating: 5,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${inter.variable} ${poppins.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
