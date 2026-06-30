'use client';

import { motion } from 'framer-motion';
import { BadgeEuro, ChefHat, HeartHandshake, Leaf } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { features } from '@/lib/site';
import { fadeUp, stagger, viewportOnce } from '@/lib/motion';
import SectionHeading from './SectionHeading';

const iconMap: Record<string, LucideIcon> = {
  Leaf,
  ChefHat,
  HeartHandshake,
  BadgeEuro,
};

export default function WhyUs() {
  return (
    <section className="section-pad relative overflow-hidden bg-brand-anthracite">
      {/* Dezenter Hintergrund-Glow */}
      <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-brand-red/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-brand-gold/10 blur-3xl" />

      <div className="container-px relative">
        <SectionHeading
          light
          eyebrow="Warum wir?"
          title="Gute Gründe für das Echinger Kebap Haus"
          description="Wir setzen auf Qualität, die man schmeckt – und auf einen Service, der sich anfühlt wie zu Hause."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature) => {
            const Icon = iconMap[feature.icon];
            return (
              <motion.div
                key={feature.title}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="group rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm transition-colors hover:border-brand-gold/40 hover:bg-white/[0.07]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-red text-white shadow-glow transition-transform duration-300 group-hover:-rotate-6">
                  {Icon && <Icon className="h-7 w-7" />}
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {feature.text}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
