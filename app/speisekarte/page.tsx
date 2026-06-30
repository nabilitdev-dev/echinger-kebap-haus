import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone } from 'lucide-react';
import { business } from '@/lib/site';
import MenuExplorer from '@/components/MenuExplorer';

export const metadata: Metadata = {
  title: 'Speisekarte – Döner, Pizza, Lahmacun & mehr in Eching',
  description:
    'Die komplette Speisekarte vom Echinger Kebap Haus: Döner, Dürüm, Lahmacun, Pizza, Pide, Burger, Salate und Getränke – frisch zubereitet zu fairen Preisen in Eching.',
  alternates: { canonical: '/speisekarte' },
};

export default function SpeisekartePage() {
  return (
    <>
      {/* Seitenkopf */}
      <header className="relative overflow-hidden bg-brand-anthracite pb-16 pt-32 md:pb-20 md:pt-40">
        <div className="pointer-events-none absolute -right-24 top-0 h-80 w-80 rounded-full bg-brand-red/25 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-brand-gold/10 blur-3xl" />

        <div className="container-px relative text-center">
          <span className="eyebrow justify-center text-brand-gold">
            <span className="h-px w-6 bg-current" />
            Speisekarte
            <span className="h-px w-6 bg-current" />
          </span>
          <h1 className="heading-xl mt-4 text-white">Unsere Speisekarte</h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-white/70">
            Alles frisch zubereitet – von klassischem Döner über hausgemachten
            Lahmacun bis zur knusprigen Pizza. Filtern Sie nach Kategorie oder
            suchen Sie direkt nach Ihrem Lieblingsgericht.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href={business.phoneHref} className="btn-primary">
              <Phone className="h-5 w-5" />
              Bestellung aufgeben
            </a>
            <Link href="/#kontakt" className="btn-secondary">
              Standort & Öffnungszeiten
            </Link>
          </div>
        </div>
      </header>

      {/* Speisekarte */}
      <div className="bg-white">
        <div className="container-px py-12 md:py-16">
          <MenuExplorer />
        </div>
      </div>

      {/* Hinweis */}
      <div className="border-t border-brand-gray-mid bg-brand-gray py-10">
        <div className="container-px text-center text-sm text-brand-anthracite/60">
          <p>
            Alle Preise inkl. MwSt. Änderungen und Druckfehler vorbehalten. Für
            Allergene und Zusatzstoffe fragen Sie bitte unser Personal.
          </p>
        </div>
      </div>
    </>
  );
}
