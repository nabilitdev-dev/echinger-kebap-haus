import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          // Primär
          red: '#C62828',
          'red-dark': '#9B1B1B',
          'red-light': '#E53935',
          // Akzent
          gold: '#C8A24A',
          'gold-light': '#E0C074',
          orange: '#E8800C',
          // Neutral
          anthracite: '#1F2328',
          'anthracite-soft': '#2C3138',
          gray: '#F4F5F7',
          'gray-mid': '#E3E5E9',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 4px 24px -8px rgba(31, 35, 40, 0.12)',
        card: '0 12px 40px -12px rgba(31, 35, 40, 0.18)',
        glow: '0 8px 40px -8px rgba(198, 40, 40, 0.45)',
      },
      backgroundImage: {
        'hero-overlay':
          'linear-gradient(to right, rgba(20,22,25,0.92) 0%, rgba(20,22,25,0.65) 45%, rgba(20,22,25,0.35) 100%)',
        'grain':
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out forwards',
        marquee: 'marquee 30s linear infinite',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
};

export default config;
