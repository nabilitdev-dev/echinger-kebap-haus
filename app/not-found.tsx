import Link from 'next/link';
import { Home, UtensilsCrossed } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-brand-gray px-5 py-32">
      <div className="text-center">
        <p className="font-display text-7xl font-bold text-brand-red sm:text-8xl">
          404
        </p>
        <h1 className="mt-4 font-display text-2xl font-bold text-brand-anthracite sm:text-3xl">
          Diese Seite gibt es leider nicht
        </h1>
        <p className="mx-auto mt-3 max-w-md text-brand-anthracite/60">
          Vielleicht hatten Sie aber Appetit auf unsere Speisekarte?
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link href="/" className="btn-dark">
            <Home className="h-5 w-5" />
            Zur Startseite
          </Link>
          <Link href="/speisekarte" className="btn-outline">
            <UtensilsCrossed className="h-5 w-5" />
            Zur Speisekarte
          </Link>
        </div>
      </div>
    </section>
  );
}
