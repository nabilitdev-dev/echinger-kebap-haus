import Link from 'next/link';
import { business } from '@/lib/site';

type LogoProps = {
  light?: boolean;
};

export default function Logo({ light = false }: LogoProps) {
  return (
    <Link
      href="/#start"
      className="group flex items-center gap-3"
      aria-label={`${business.name} – Startseite`}
    >
      <span className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-red text-white shadow-glow transition-transform duration-300 group-hover:rotate-6">
        {/* Stilisierter Döner-Spieß */}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-6 w-6"
          aria-hidden="true"
        >
          <path
            d="M12 2v2M12 20v2"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M8.5 4.5C8.5 4.5 7 6 7 9c0 4 2 7 5 7s5-3 5-7c0-3-1.5-4.5-1.5-4.5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="rgba(255,255,255,0.18)"
          />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-base font-bold tracking-tight ${
            light ? 'text-white' : 'text-brand-anthracite'
          }`}
        >
          Echinger Kebap
        </span>
        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-gold">
          Haus
        </span>
      </span>
    </Link>
  );
}
