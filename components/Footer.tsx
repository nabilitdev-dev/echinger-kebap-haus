import Link from 'next/link';
import { Clock, Facebook, Instagram, MapPin, Phone } from 'lucide-react';
import { business, navLinks } from '@/lib/site';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-brand-anthracite text-white/70">
      <div className="container-px grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        {/* Marke */}
        <div className="space-y-5">
          <Logo light />
          <p className="max-w-xs text-sm leading-relaxed">
            {business.slogan} – Ihr familiengeführter Kebap-Imbiss im
            Gewerbegebiet Eching bei München.
          </p>
          <div className="flex gap-3">
            {[Instagram, Facebook].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social Media"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand-red"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
            Navigation
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-brand-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Kontakt */}
        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
            Kontakt
          </h3>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 flex-none text-brand-gold" />
              <span>
                {business.street}
                <br />
                {business.zip} {business.city}
              </span>
            </li>
            <li>
              <a
                href={business.phoneHref}
                className="flex items-center gap-3 transition-colors hover:text-brand-gold"
              >
                <Phone className="h-5 w-5 flex-none text-brand-gold" />
                {business.phone}
              </a>
            </li>
          </ul>
        </div>

        {/* Öffnungszeiten */}
        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
            Öffnungszeiten
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <Clock className="h-5 w-5 flex-none text-brand-gold" />
              <span>Montag – Sonntag</span>
            </li>
            <li className="pl-8 font-semibold text-white">10:00 – 22:00 Uhr</li>
            <li className="pl-8 text-xs text-white/50">
              An 7 Tagen die Woche für Sie da.
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-px flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/50 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {business.name}. Alle Rechte
            vorbehalten.
          </p>
          <p className="flex gap-4">
            <Link href="#" className="hover:text-white">
              Impressum
            </Link>
            <Link href="#" className="hover:text-white">
              Datenschutz
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
