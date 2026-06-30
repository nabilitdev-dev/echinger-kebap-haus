'use client';

import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { menu } from '@/lib/site';
import { fadeUp, viewportOnce } from '@/lib/motion';

const tagColors: Record<string, string> = {
  Bestseller: 'bg-brand-red text-white',
  Spezial: 'bg-brand-gold text-brand-anthracite',
  Klassiker: 'bg-brand-anthracite text-white',
  Vegetarisch: 'bg-emerald-600 text-white',
};

export default function MenuExplorer() {
  const [activeCat, setActiveCat] = useState<string>('alle');
  const [query, setQuery] = useState('');

  const categories = useMemo(
    () => [{ id: 'alle', title: 'Alle' }, ...menu.map((c) => ({ id: c.id, title: c.title }))],
    [],
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return menu
      .filter((cat) => activeCat === 'alle' || cat.id === activeCat)
      .map((cat) => ({
        ...cat,
        items: cat.items.filter(
          (item) =>
            !q ||
            item.name.toLowerCase().includes(q) ||
            item.description?.toLowerCase().includes(q),
        ),
      }))
      .filter((cat) => cat.items.length > 0);
  }, [activeCat, query]);

  return (
    <div>
      {/* Filterleiste */}
      <div className="sticky top-[4.75rem] z-30 -mx-5 mb-12 border-y border-brand-gray-mid bg-white/85 px-5 py-4 backdrop-blur-md sm:-mx-8 sm:px-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          {/* Kategorien */}
          <div className="-mx-1 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCat(cat.id)}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  activeCat === cat.id
                    ? 'bg-brand-red text-white shadow-glow'
                    : 'bg-brand-gray text-brand-anthracite/70 hover:bg-brand-gray-mid'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          {/* Suche */}
          <div className="relative lg:w-72">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-anthracite/40" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Gericht suchen…"
              className="w-full rounded-full border border-brand-gray-mid bg-white py-2.5 pl-11 pr-4 text-sm text-brand-anthracite outline-none transition-colors focus:border-brand-red"
            />
          </div>
        </div>
      </div>

      {/* Kategorien */}
      <AnimatePresence mode="popLayout">
        {filtered.length === 0 ? (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-16 text-center text-brand-anthracite/50"
          >
            Keine Gerichte gefunden. Versuchen Sie einen anderen Suchbegriff.
          </motion.p>
        ) : (
          <div className="space-y-16">
            {filtered.map((cat) => (
              <motion.section
                key={cat.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                className="scroll-mt-40"
                id={cat.id}
              >
                <div className="mb-6 flex items-center gap-4">
                  <h2 className="font-display text-2xl font-bold text-brand-anthracite sm:text-3xl">
                    {cat.title}
                  </h2>
                  <span className="h-px flex-1 bg-brand-gray-mid" />
                  <span className="rounded-full bg-brand-gray px-3 py-1 text-xs font-semibold text-brand-anthracite/60">
                    {cat.items.length} Gerichte
                  </span>
                </div>

                <div className="grid gap-x-10 gap-y-2 sm:grid-cols-2">
                  {cat.items.map((item) => (
                    <motion.div
                      key={item.name}
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="show"
                      viewport={viewportOnce}
                      className="group flex items-baseline gap-3 rounded-2xl px-4 py-4 transition-colors hover:bg-brand-gray"
                    >
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="font-semibold text-brand-anthracite">
                            {item.name}
                          </h3>
                          {item.tag && (
                            <span
                              className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide ${
                                tagColors[item.tag] ??
                                'bg-brand-gray-mid text-brand-anthracite'
                              }`}
                            >
                              {item.tag}
                            </span>
                          )}
                        </div>
                        {item.description && (
                          <p className="mt-0.5 text-sm text-brand-anthracite/55">
                            {item.description}
                          </p>
                        )}
                      </div>
                      {/* Punkte-Leader */}
                      <span className="hidden flex-1 translate-y-[-3px] border-b border-dashed border-brand-gray-mid sm:block" />
                      <span className="whitespace-nowrap font-display font-bold text-brand-red">
                        {item.price}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            ))}
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
