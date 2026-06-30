'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Car, Phone, Star, UtensilsCrossed } from 'lucide-react';
import { business, img } from '@/lib/site';

const perks = [
  { icon: Star, label: '4,5 Sterne', sub: 'bei Google' },
  { icon: UtensilsCrossed, label: 'Frisch zubereitet', sub: 'täglich' },
  { icon: Car, label: 'Zum Mitnehmen', sub: 'schnell & warm' },
];

export default function Hero() {
  return (
    <section
      id="start"
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      {/* Hintergrundbild */}
      <div className="absolute inset-0">
        <Image
          src={img.heroDoner}
          alt="Frisch geschnittener Döner im Echinger Kebap Haus"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="absolute inset-0 bg-grain opacity-60" />
      </div>

      {/* Inhalt */}
      <div className="container-px relative z-10 pt-24">
        <div className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur"
          >
            <span className="flex h-2 w-2">
              <span className="absolute h-2 w-2 animate-ping rounded-full bg-brand-gold opacity-75" />
              <span className="h-2 w-2 rounded-full bg-brand-gold" />
            </span>
            {business.slogan}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="heading-xl mt-6 text-white"
          >
            Echinger
            <br />
            <span className="bg-gradient-to-r from-brand-gold to-brand-gold-light bg-clip-text text-transparent">
              Kebap Haus
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/85 sm:text-xl"
          >
            Frische Zutaten, hausgemachte Soßen und bester Geschmack – seit
            Jahren in Eching.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a href={business.phoneHref} className="btn-primary">
              <Phone className="h-5 w-5" />
              Jetzt anrufen
            </a>
            <Link href="/speisekarte" className="btn-secondary">
              Speisekarte ansehen
            </Link>
          </motion.div>

          {/* Vorteile */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-12 grid max-w-lg grid-cols-3 gap-4"
          >
            {perks.map((perk) => (
              <div
                key={perk.label}
                className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md"
              >
                <perk.icon className="h-6 w-6 text-brand-gold" />
                <p className="mt-2 text-sm font-semibold leading-tight text-white">
                  {perk.label}
                </p>
                <p className="text-xs text-white/60">{perk.sub}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll-Indikator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 lg:block"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/40 p-1.5">
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="h-2 w-1 rounded-full bg-white/70"
          />
        </div>
      </motion.div>
    </section>
  );
}
