'use client';

import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { business, reviews } from '@/lib/site';
import { fadeUp, stagger, viewportOnce } from '@/lib/motion';
import SectionHeading from './SectionHeading';

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} von 5 Sternen`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < count
              ? 'fill-brand-gold text-brand-gold'
              : 'fill-brand-gray-mid text-brand-gray-mid'
          }`}
        />
      ))}
    </div>
  );
}

const avatarColors = [
  'bg-brand-red',
  'bg-brand-gold',
  'bg-brand-anthracite',
  'bg-brand-orange',
];

export default function Reviews() {
  return (
    <section id="bewertungen" className="section-pad bg-white">
      <div className="container-px">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.4fr]">
          {/* Übersicht */}
          <div>
            <SectionHeading
              align="left"
              eyebrow="Bewertungen"
              title="Das sagen unsere Gäste"
            />

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="mt-8 inline-flex flex-col gap-4 rounded-3xl bg-brand-gray p-7"
            >
              <div className="flex items-center gap-4">
                <span className="font-display text-6xl font-bold text-brand-anthracite">
                  {business.rating.toString().replace('.', ',')}
                </span>
                <div>
                  <Stars count={5} />
                  <p className="mt-1 text-sm text-brand-anthracite/60">
                    von 5 Sternen
                  </p>
                </div>
              </div>
              <p className="text-sm text-brand-anthracite/70">
                Basierend auf über{' '}
                <span className="font-semibold text-brand-anthracite">
                  {business.reviewCount} Google Bewertungen
                </span>
              </p>
              <div className="flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-medium text-brand-anthracite shadow-soft">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white">
                  <GoogleG />
                </span>
                Google Bewertungen
              </div>
            </motion.div>
          </div>

          {/* Kundenstimmen */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid gap-5 sm:grid-cols-2"
          >
            {reviews.map((review, i) => (
              <motion.figure
                key={review.name}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="relative flex flex-col rounded-3xl border border-brand-gray-mid bg-white p-6 shadow-soft transition-shadow hover:shadow-card"
              >
                <Quote className="h-8 w-8 text-brand-red/15" />
                <blockquote className="mt-3 flex-1 text-[15px] leading-relaxed text-brand-anthracite/80">
                  „{review.text}“
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3 border-t border-brand-gray-mid pt-4">
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white ${
                      avatarColors[i % avatarColors.length]
                    }`}
                  >
                    {review.initials}
                  </span>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-brand-anthracite">
                      {review.name}
                    </p>
                    <p className="text-xs text-brand-anthracite/50">
                      {review.date}
                    </p>
                  </div>
                  <Stars count={5} />
                </figcaption>
              </motion.figure>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function GoogleG() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47a5.53 5.53 0 0 1-2.4 3.63v3h3.86c2.26-2.09 3.56-5.17 3.56-8.87z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.29v3.09A12 12 0 0 0 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.27 14.29a7.21 7.21 0 0 1 0-4.58V6.62H1.29a12 12 0 0 0 0 10.76l3.98-3.09z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42A11.96 11.96 0 0 0 12 0 12 12 0 0 0 1.29 6.62l3.98 3.09C6.22 6.86 8.87 4.75 12 4.75z"
      />
    </svg>
  );
}
