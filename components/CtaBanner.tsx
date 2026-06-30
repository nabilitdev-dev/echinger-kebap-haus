'use client';

import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import { business } from '@/lib/site';
import { fadeUp, viewportOnce } from '@/lib/motion';

export default function CtaBanner() {
  return (
    <section className="bg-brand-gray py-16 md:py-20">
      <div className="container-px">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative overflow-hidden rounded-4xl bg-brand-red px-8 py-12 text-center shadow-glow sm:px-12 md:py-16"
        >
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-brand-anthracite/20 blur-2xl" />

          <div className="relative">
            <h2 className="heading-lg text-white">Hunger bekommen?</h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/85">
              Rufen Sie an und holen Sie sich Ihren frisch zubereiteten Döner ab
              – schnell, warm und mit hausgemachter Soße.
            </p>
            <a
              href={business.phoneHref}
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-brand-red shadow-lg transition-transform hover:-translate-y-0.5"
            >
              <Phone className="h-5 w-5" />
              {business.phone}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
