'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, Phone, X } from 'lucide-react';
import { business, navLinks } from '@/lib/site';
import Logo from './Logo';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Scroll sperren, wenn das mobile Menü offen ist.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-brand-gray-mid/60 bg-white/90 backdrop-blur-md shadow-soft'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-px flex h-[4.75rem] items-center justify-between">
        <Logo light={!scrolled} />

        {/* Desktop-Navigation */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  scrolled
                    ? 'text-brand-anthracite/80 hover:bg-brand-gray hover:text-brand-red'
                    : 'text-white/90 hover:bg-white/10 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={business.phoneHref}
            className="hidden items-center gap-2 rounded-full bg-brand-red px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition-all hover:-translate-y-0.5 hover:bg-brand-red-dark sm:inline-flex"
          >
            <Phone className="h-4 w-4" />
            Jetzt anrufen
          </a>

          {/* Mobile-Toggle */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Menü öffnen"
            className={`inline-flex h-11 w-11 items-center justify-center rounded-xl transition-colors lg:hidden ${
              scrolled
                ? 'text-brand-anthracite hover:bg-brand-gray'
                : 'text-white hover:bg-white/10'
            }`}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Mobile-Menü */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-brand-anthracite/60 backdrop-blur-sm lg:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 z-50 flex h-full w-[82%] max-w-sm flex-col bg-white p-6 shadow-2xl lg:hidden"
            >
              <div className="flex items-center justify-between">
                <Logo />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Menü schließen"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-brand-anthracite hover:bg-brand-gray"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <ul className="mt-8 flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between rounded-2xl px-4 py-4 text-lg font-medium text-brand-anthracite transition-colors hover:bg-brand-gray hover:text-brand-red"
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <a
                href={business.phoneHref}
                onClick={() => setOpen(false)}
                className="btn-primary mt-auto w-full"
              >
                <Phone className="h-5 w-5" />
                {business.phone}
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
