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