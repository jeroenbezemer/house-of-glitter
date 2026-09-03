export const locales = ['en', 'nl'] as const;
export type Locale = (typeof locales)[number];

// Central map from page key to its URL per locale. Dutch routes use Dutch
// page names (e.g. /nl/muziek) rather than mirroring the English slugs.
export const routes = {
  home: { en: '/', nl: '/nl' },
  music: { en: '/music', nl: '/nl/muziek' },
  story: { en: '/story', nl: '/nl/verhaal' },
  shop: { en: '/shop', nl: '/nl/shop' },
  contact: { en: '/contact', nl: '/nl/contact' },
} as const;

export type PageKey = keyof typeof routes;
