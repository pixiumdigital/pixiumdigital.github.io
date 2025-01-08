import { MetadataRoute } from "next";
import { SITE_CONFIG } from '@/config/config';

export const getLocaleUrl = (url:string): string => {
    return "";
};
  

export function generateSitemapEntry(path: string, priority: number, changeFreq: string = 'monthly'): MetadataRoute.Sitemap[0] {
    return {
        url: `https://${SITE_CONFIG.domain}${path}`,
        lastModified: new Date(),
        changeFrequency: changeFreq as MetadataRoute.Sitemap[0]['changeFrequency'],
        priority: priority
    }
}


// src/utils/sitemap.ts
export const languages = ['en', 'fr'] // Add your supported languages
export const baseUrl = process.env.SITE_URL || 'https://pixiumdigital.com'

export function createMultiLangSitemapEntries(
    path: string,
    options: {
        priority?: number;
        changeFreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
        lastMod?: Date;
    } = {}
) {
    const {
        priority = 0.5,
        changeFreq = 'monthly',
        lastMod = new Date()
    } = options

    return languages.map(locale => ({
        url: `${baseUrl}/${locale}${path}`,
        lastModified: lastMod,
        changeFrequency: changeFreq,
        priority: priority,
        alternateRefs: languages.map(altLang => ({
            href: `${baseUrl}/${altLang}${path}`,
            hreflang: altLang
        }))
    }))
}




// interface PageConfig {
//     paths: {
//         [key in SUPPORTED]: string;
//     };
//     priority: number;
//     changeFreq?: MetadataRoute.Sitemap[0]['changeFrequency'];
// }

// export function generateSitemapForLanguage(locale: Language, pages: PageConfig[]) {
//     return pages.map(page => 
//         createSitemapEntry(
//             page.paths[locale],
//             locale,
//             {
//                 priority: page.priority,
//                 changeFreq: page.changeFreq,
//                 lastMod: new Date()
//             }
//         )
//     )
// }