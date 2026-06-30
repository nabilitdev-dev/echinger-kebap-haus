'use client';

import { motion } from 'framer-motion';
import { fadeUp, viewportOnce } from '@/lib/motion';

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'center' | 'left';
  light?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className={
        align === 'center'
          ? 'mx-auto max-w-2xl text-center'
          : 'max-w-2xl text-left'
      }
    >
      <span className={`eyebrow ${light ? 'text-brand-gold' : ''}`}>
        <span className="h-px w-6 bg-current" />
        {eyebrow}
      </span>
      <h2
        className={`heading-lg mt-4 ${
          light ? 'text-white' : 'text-brand-anthracite'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            light ? 'text-white/70' : 'text-brand-anthracite/65'
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
