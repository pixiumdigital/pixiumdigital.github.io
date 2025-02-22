const fs = require('fs').promises
const path = require('path')
const cheerio = require('cheerio')

/** @type {import('next-sitemap').IConfig} */
// Default code you can customize according to your requirements.

const mySiteUrl = 'https://pixiumdigital.com';

async function getPageImages(pagePath) {
    const images = []
    try {
        // Convert URL path to file system path
        // Remove trailing slash and add .html
        const htmlPath = path.join(
            process.cwd(),
            'dist', // or '.next/server/pages' if using server-side rendering
            pagePath.replace(/\/$/, '') + '/index.html'
        )

        // Read the HTML file
        const html = await fs.readFile(htmlPath, 'utf-8')
        const $ = cheerio.load(html)

        // Find all img tags
        $('img').each((_, element) => {
            const img = $(element)
            const src = img.attr('src')
            
            // Skip data URLs or invalid sources
            if (!src || src.startsWith('data:')) return

            // Create absolute URL if needed
            const absoluteUrl = src.startsWith('http') 
                ? src 
                : `${mySiteUrl}${src}`

            images.push({
                url: absoluteUrl,
                title: img.attr('title') || '',
                caption: img.attr('alt') || ''
            })
        })

        // Also check for background images in style attributes
        $('[style*="background-image"]').each((_, element) => {
            const style = $(element).attr('style')
            const match = style.match(/background-image:\s*url\(['"]?([^'"()]+)['"]?\)/)
            
            if (match && match[1]) {
                const src = match[1]
                if (!src.startsWith('data:')) {
                    const absoluteUrl = src.startsWith('http') 
                        ? src 
                        : `${mySiteUrl}${src}`

                    images.push({
                        url: absoluteUrl,
                        title: '',
                        caption: ''
                    })
                }
            }
        })

        // Remove duplicates based on URL
        const uniqueImages = [...new Map(images.map(img => 
            [img.url, img]
        )).values()]

        return uniqueImages

    } catch (error) {
        console.error(`Error getting images for path ${pagePath}:`, error)
        return []
    }
}




module.exports = {
    siteUrl: mySiteUrl,
    generateRobotsTxt: true,
    sitemapIndexFileName: 'sitemap.xml', // explicitly name your sitemap index
    additionalSitemaps: ['https://pixiumdigital.com/sitemap-fr.xml'], // add your French sitemap URL
    // xslUrl: '/sitemap/style.xsl',
    // sitemapStylesheet: [
    //     {
    //         type: 'text/xsl',
    //         styleFile: '/sitemap/style.xsl'  // Path relative to your site root
    //     }
    // ],

    transform: async (config, path) => {
        if (!path.startsWith('/en')) {
            return null;
        }

        // Get the images for this page/path
        const images = await getPageImages(path); // You'll need to implement this function

        // custom function to ignore the path
        // if (customIgnoreFunction(path)) {
        //   return null
        // }

        // const priorityMap: Record<string, number> = {
        //     'contact-us': 0.8,
        //     'blog': 0.6,
        //     'about': 0.7,
        //     'privacy-policy': 0.3,
        //     'terms': 0.3
        // }

        let _priority = 1.0;

        if (path.endsWith('/') || path.endsWith('/en') || path.endsWith('/fr')) {
            _priority = 1.0
        } else if (path.endsWith('/contact-us') 
            || path.endsWith('/blog') 
            || path.endsWith('/about-us') 
            || path.endsWith('/services') 
            || path.endsWith('/use-case')
            || path.endsWith('/reviews') ) {
            _priority = 0.9
        } else {
             _priority = 0.7
        }

        // Create the image:image tags directly in the format expected by search engines
        const imageXMLElements = images.map(image => `<image:image>
                <image:loc>${image.url}</image:loc>
                ${image.title ? `<image:title>${image.title}</image:title>` : '<image:title>Pixium</image:title>'}
                ${image.caption ? `<image:caption>${image.caption}</image:caption>` : '<image:caption>Digital</image:caption>'}
            </image:image>`).join('\n');
    
        // only create changefreq along with path
        // returning partial properties will result in generation of XML field with only returned values.
        // if (customLimitedField(path)) {
        //   // This returns `path` & `changefreq`. Hence it will result in the generation of XML field with `path` and  `changefreq` properties only.
        //   return {
        //     loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
        //     changefreq: 'weekly',
        //   }
        // }

        return {
            loc: path, // e.g., "/en/about"
            changefreq: 'weekly', // config.changefreq,
            priority: _priority, //config.priority,
            lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
            custom: imageXMLElements
          };
    },

    // Add the XML processing instruction for the stylesheet
    additionalPaths: async (config) => {
        return [{
            loc: '/',
            priority: 1.0,
            changefreq: 'weekly',
            lastmod: new Date().toISOString(),
            alternateRefs: [],
            // Add processing instruction for XSL
            processedXml: '<?xml-stylesheet type="text/xsl" href="/sitemap/style.xsl"?>'
        }]
    },
    xslUrl: '/sitemap/style.xsl',
    xmlNs: 'xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"'
}