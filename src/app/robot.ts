import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    //   index: true,
    },
    sitemap: 'https://pixiumdigital.com/sitemap.xml', // optional
  }
}
