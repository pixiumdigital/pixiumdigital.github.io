export const SUPPORTED_LOCALES = ["en", "fr"] as const;
export type Locale = typeof SUPPORTED_LOCALES[number];

export const SUPPORTED_PAGES = ['home', 'about', 'contact'] as const;
export type Page = typeof SUPPORTED_PAGES[number];

export const DEFAULT_LOCALE: Locale = 'en';


export const SITE_CONFIG = {
    name: 'Pixium Digital',
    domain: 'pixiumdigital.com',
    defaultTitle: 'Pixium Digital | Top Digital Development Company - Singapore',
    defaultDescription: 'Digital consulting and software development. Enhance operations, productivity, and profitability through scalable software, IT, and staffing solution.'
} as const;