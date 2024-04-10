import { Pathnames, createSharedPathnamesNavigation } from 'next-intl/navigation';

export const locales = ['en', 'fr'];
export const localePrefix = 'always';

// The `pathnames` object holds pairs of internal
// and external paths, separated by locale.
export const pathnames = {
  // If all locales use the same pathname, a
  // single external path can be provided.
  '/': '/',
  '/blog': '/blog',
 
  // If locales use different paths, you can
  // specify each external path per locale.
  '/about-us': {
    en: '/en/about-us',
    fr: '/fr/about-us'
  },
  '/service': {
    en: '/en/service',
    fr: '/fr/service'
  }
} satisfies Pathnames<typeof locales>;



export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales, localePrefix });