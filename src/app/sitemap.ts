import { SITE_CONFIG, SUPPORTED_LOCALES } from "@/config/config";
import { MetadataRoute } from "next";
import { generateSitemapEntry } from "@/app/_utils/helpers";

export function generateStaticParams() {
    return SUPPORTED_LOCALES.map((locale: any) => ({ locale }));
}



export default function sitemap(): MetadataRoute.Sitemap {
    return [
        generateSitemapEntry('/', 1.0, 'daily'),
        generateSitemapEntry('/en', 0.9, 'daily'),
        generateSitemapEntry('/fr', 0.9, 'daily'),
        // generateSitemapEntry('/contact-us', 0.8),
        // generateSitemapEntry('/about', 0.6),
        // generateSitemapEntry('/services', 0.6),
        // Add more pages as needed
    ]
}

// export default function sitemap(): MetadataRoute.Sitemap{
//     return [
//         {
//             url: `https://${SITE_CONFIG.domain}/contact-us`,
//             lastModified: new Date(),
//             changeFrequency: 'monthly',
//             priority: 0.9,
//         },
//     ];
// }