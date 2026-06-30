'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Flame, Star } from 'lucide-react';
import { business, img } from '@/lib/site';
import { fadeUp, viewportOnce } from '@/lib/motion';
import SectionHeading from './SectionHeading';

const stats = [
  { value: '100%', label: 'Frisch zubereitet' },
  { value: '12+', label: 'Gerichte zur Auswahl' },
  { value: '290+', label: 'Google Bewertungen' },
];

export default function About() {
  return (
    <section id="ueber-uns" className="section-pad bg-white">
      <div className="container-px grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Bild */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-4xl shadow-card sm:aspect-[4/3] lg:aspect-[4/5]">
            <Image
              src={img.shop}
              alt="Küche im Echinger Kebap Haus"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* Schwebende Bewertungskarte */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={viewportOnce}
            transition={{ delay: 0.25 }}
            className="absolute -bottom-6 -right-3 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-card sm:-right-6"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-red/10">
              <Star className="h-6 w-6 fill-brand-gold text-brand-gold" />
            </div>
            <div>
              <p className="font-display text-xl font-bold text-brand-anthracite">
                {business.rating.toString().replace('.', ',')} / 5
              </p>
              <p className="text-xs text-brand-anthracite/60">
                {business.reviewCount}+ Bewertungen
              </p>
            </div>
          </motion.div>

          {/* Akzent-Badge oben */}
          <div className="absolute -left-3 -top-3 flex items-center gap-2 rounded-full bg-brand-red px-4 py-2 text-sm font-semibold text-white shadow-glow sm:-left-6">
            <Flame className="h-4 w-4" />
            Familienbetrieb
          </div>
        </motion.div>

        {/* Text */}
        <div>
          <SectionHeading
            align="left"
            eyebrow="Über uns"
            title="Mit Liebe gemacht – seit Jahren in Eching"
          />

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mt-6 text-lg leading-relaxed text-brand-anthracite/70"
          >
            Im{' '}
            <span className="font-semibold text-brand-anthracite">
              Echinger Kebap Haus
            </span>{' '}
            stehen frische Zutaten, ehrlicher Geschmack und freundlicher Service
            an erster Stelle. Ob klassischer Döner, hausgemachter Lahmacun oder
            knusprige Pizza – jedes Gericht wird frisch zubereitet und mit viel
            Liebe serviert.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            transition={{ delay: 0.1 }}
            className="mt-10 grid grid-cols-3 gap-4 border-t border-brand-gray-mid pt-8"
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-3xl font-bold text-brand-red">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-brand-anthracite/60">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
