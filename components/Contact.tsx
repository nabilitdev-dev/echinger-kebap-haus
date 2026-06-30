'use client';

import { motion } from 'framer-motion';
import { Clock, MapPin, Navigation, Phone } from 'lucide-react';
import { business } from '@/lib/site';
import { fadeUp, viewportOnce } from '@/lib/motion';
import SectionHeading from './SectionHeading';

export default function Contact() {
  return (
    <section id="kontakt" className="section-pad bg-white">
      <div className="container-px">
        <SectionHeading
          eyebrow="Kontakt"
          title="Besuchen Sie uns in Eching"
          description="Direkt im Gewerbegebiet an der Dieselstraße – einfach zu erreichen, mit Parkplätzen direkt vor der Tür."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          {/* Info-Spalte */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="flex flex-col gap-5"
          >
            {/* Adresse */}
            <div className="flex items-start gap-4 rounded-3xl border border-brand-gray-mid bg-white p-6 shadow-soft">
              <span className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-brand-red/10 text-brand-red">
                <MapPin className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-display font-bold text-brand-anthracite">
                  Adresse
                </h3>
                <p className="mt-1 text-brand-anthracite/70">
                  {business.street}
                  <br />
                  {business.zip} {business.city}
                </p>
              </div>
            </div>

            {/* Telefon */}
            <a
              href={business.phoneHref}
              className="group flex items-start gap-4 rounded-3xl border border-brand-gray-mid bg-white p-6 shadow-soft transition-colors hover:border-brand-red/40"
            >
              <span className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-brand-red/10 text-brand-red">
                <Phone className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-display font-bold text-brand-anthracite">
                  Telefon
                </h3>
                <p className="mt-1 text-brand-anthracite/70 group-hover:text-brand-red">
                  {business.phone}
                </p>
              </div>
            </a>

            {/* Öffnungszeiten */}
            <div className="flex items-start gap-4 rounded-3xl bg-brand-anthracite p-6 text-white">
              <span className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-white/10 text-brand-gold">
                <Clock className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-display font-bold">Öffnungszeiten</h3>
                <p className="mt-1 text-white/70">Montag – Sonntag</p>
                <p className="font-semibold text-brand-gold">
                  10:00 – 22:00 Uhr
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="grid gap-3 sm:grid-cols-2">
              <a href={business.phoneHref} className="btn-primary w-full">
                <Phone className="h-5 w-5" />
                Jetzt anrufen
              </a>
              <a
                href={business.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline w-full"
              >
                <Navigation className="h-5 w-5" />
                Route planen
              </a>
            </div>
          </motion.div>

          {/* Karte */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            transition={{ delay: 0.1 }}
            className="min-h-[420px] overflow-hidden rounded-4xl border border-brand-gray-mid shadow-card"
          >
            <iframe
              title={`Standort ${business.name}`}
              src={`https://www.google.com/maps?q=${business.mapsQuery}&output=embed`}
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-[420px] w-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
