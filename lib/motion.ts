import type { Variants } from 'framer-motion';

/** Dezente Fade-Up Animation für Scroll-Reveals. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

/** Container, der Kinder gestaffelt einblendet. */
export const stagger: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

/** Standard-Viewport-Einstellung für `whileInView`. */
export const viewportOnce = { once: true, amount: 0.25 } as const;
