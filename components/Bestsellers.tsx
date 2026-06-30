'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { bestsellers } from '@/lib/site';
import { fadeUp, stagger, viewportOnce } from '@/lib/motion';
import SectionHeading from './SectionHeading';

export default function Bestsellers() {
  return (
    <section className="section-pad bg-brand-gray">
      <div className="container-px">
        <SectionHeading
          eyebrow="Unsere Bestseller"
          title="Die Lieblinge unserer Gäste"
          description="Frisch zubereitet, großzügig portioniert und mit hausgemachten Soßen – das bestellen unsere Stammgäste am liebsten."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3"
        >
          {bestsellers.map((product) => (
            <motion.article
              key={product.name}
              variants={fadeUp}
              className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-soft transition-shadow duration-300 hover:shadow-card"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {product.badge && (
                  <span className="absolute left-4 top-4 rounded-full bg-brand-red px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white shadow-glow">
                    {product.badge}
                  </span>
                )}
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-lg font-bold text-brand-anthracite">
                    {product.name}
                  </h3>
                  <span className="whitespace-nowrap rounded-lg bg-brand-gray px-2.5 py-1 font-display text-sm font-bold text-brand-red">
                    {product.price}
                  </span>
                </div>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-anthracite/60">
                  {product.description}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-12 text-center"
        >
          <Link href="/speisekarte" className="btn-dark group">
            Komplette Speisekarte ansehen
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
