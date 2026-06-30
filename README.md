# Echinger Kebap Haus 🥙

Moderne, vollständig responsive Website für den familiengeführten Imbiss
**Echinger Kebap Haus** in Eching bei München.

> _Frisch. Lecker. Ehrlich._

## ✨ Features

- **Hero** mit Hintergrundbild, Overlay, CTAs und Vorteilen
- **Über uns** mit schwebender Bewertungskarte und Kennzahlen
- **Bestseller** als hochwertige Produktkarten mit Badges
- **Speisekarte** auf eigener Seite – filterbar nach Kategorie + Live-Suche
- **Warum wir?** – vier Vorteils-Karten auf dunklem Hintergrund
- **Bewertungen** im Google-Stil (4,5 ★ / 290+ Bewertungen)
- **Galerie** mit Hover-Zoom und Lightbox (Tastatur-Navigation)
- **Kontakt** mit Google-Maps-Einbindung, Öffnungszeiten und „Route planen“
- **Sticky Navigation** + mobiles Hamburger-Menü
- **SEO**: Meta-Tags, OpenGraph, `sitemap.xml`, `robots.txt` und
  strukturierte Daten (Schema.org `Restaurant` / `LocalBusiness`)
- Dezente **Framer-Motion**-Animationen (Fade-In, Scroll-Reveal, Hover)

## 🛠 Tech-Stack

| Bereich     | Technologie                     |
| ----------- | ------------------------------- |
| Framework   | Next.js 14 (App Router)         |
| Sprache     | TypeScript                      |
| Styling     | Tailwind CSS (Designsystem)     |
| Animationen | Framer Motion                   |
| Icons       | Lucide React                    |
| Fonts       | Poppins (Display) · Inter (Body)|

## 🚀 Setup

> Voraussetzung: **Node.js 18.17+** muss installiert sein.

```bash
# Abhängigkeiten installieren
npm install

# Entwicklungsserver starten (http://localhost:3000)
npm run dev

# Produktions-Build
npm run build
npm run start
```

## 📁 Projektstruktur

```
echinger-kebap-haus/
├── app/
│   ├── layout.tsx          # Root-Layout, Fonts, SEO, JSON-LD, Navbar/Footer
│   ├── page.tsx            # Startseite (alle Sektionen)
│   ├── speisekarte/page.tsx# Speisekarten-Seite (filterbar)
│   ├── globals.css         # Designsystem & Utility-Klassen
│   ├── sitemap.ts          # SEO Sitemap
│   ├── robots.ts           # SEO Robots
│   ├── icon.svg            # Favicon
│   └── not-found.tsx       # 404-Seite
├── components/             # UI-Komponenten (Hero, Gallery, Reviews …)
├── lib/
│   ├── site.ts             # Zentrale Inhalte (Texte, Preise, Bilder)
│   └── motion.ts           # Wiederverwendbare Animations-Varianten
├── tailwind.config.ts      # Farben, Schatten, Animationen
└── next.config.js
```

## 🎨 Designsystem

Definiert in `tailwind.config.ts` und `app/globals.css`:

- **Primär:** Rot `#C62828`
- **Akzent:** Gold `#C8A24A` / Orange `#E8800C`
- **Neutral:** Weiß, Hellgrau `#F4F5F7`, Anthrazit `#1F2328`
- Wiederverwendbare Klassen: `.btn-primary`, `.btn-secondary`, `.heading-xl`,
  `.eyebrow`, `.section-pad`, `.container-px`

## 🖼 Bilder

Aktuell werden hochwertige **Platzhalterbilder von Unsplash** verwendet
(konfiguriert in `next.config.js`). Für den Produktiveinsatz die URLs in
[`lib/site.ts`](lib/site.ts) durch eigene Food-Fotos ersetzen – idealerweise
optimierte Dateien im Ordner `public/`.

## 📍 Unternehmensdaten

**Echinger Kebap Haus** · Dieselstraße 29 · 85386 Eching · ☎ 0177 8527563
Öffnungszeiten: Mo–So, 10:00–22:00 Uhr

Alle Inhalte zentral pflegbar in [`lib/site.ts`](lib/site.ts).
