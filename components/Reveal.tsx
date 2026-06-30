'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { fadeUp, viewportOnce } from '@/lib/motion';

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: 'div' | 'section' | 'li' | 'article';
};

/**
 * Leichter Wrapper für ein dezentes Fade-Up beim Scrollen.
 * Hält die Komponenten frei von wiederholtem Motion-Boilerplate.
 */
export default function Reveal({
  children,
  className,
  delay = 0,
  as = 'div',
}: RevealProps) {
  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  );
}
