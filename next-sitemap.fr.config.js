const fs = require('fs').promises
const path = require('path')
const cheerio = require('cheerio')

/** @type {import('next-sitemap').IConfig} */
// Default code you can customize according to your requirements.

const mySiteUrl = 'https://pixiumdigital.com/';


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


// If you need to add a slash when it's missing
function ensureSingleTrailingSlash(path) {
    if (path.endsWith('//')) {
        return path.slice(0, -1);
    }

    if (!path.endsWith('/')) {
      return path + '/';
    }

    return path;
}


module.exports = {
    siteUrl: ensureSingleTrailingSlash(mySiteUrl),
    alternateRefs: [
        {
          href: `${mySiteUrl}en/`,
          hreflang: 'en',
        },
        {
          href: `${mySiteUrl}fr/`,
          hreflang: 'fr',
        },
    ],
    sitemapBaseFileName: 'sitemap-fr',
    xslUrl: 'sitemap.xsl',
    xmlNs: 'xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"',
    generateRobotsTxt: false, // No need for a second robots.txt
    

    transform: async (config, path) => {
        if (!path.startsWith('/fr')) {
            return null;
        }

        // // Get the images for this page/path
        const images = await getPageImages(path); // You'll need to implement this function

        let _priority = 1.0;

        if (path.endsWith('/') || path.endsWith('/en') || path.endsWith('/fr') || path.endsWith('/en/') || path.endsWith('/fr/')) {
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
            ${image.caption ? `<image:caption>${image.caption.replace(/[^\w\s-]/g, '')}</image:caption>` : '<image:caption>Digital</image:caption>'}
        </image:image>`).join('\n');

        // Create the French alternate path
        path = path + "/"
        const enPath = path.replace('/fr/', '/en/');

        return {
            loc: path, // e.g., "/en/about"
            changefreq: 'weekly', // config.changefreq,
            priority: _priority, //config.priority,
            lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
            alternateRefs: config.alternateRefs.map((alternate) => {
                return {
                    ...alternate,
                    href: ensureSingleTrailingSlash(alternate.href + (path.substring(4) ? (path.substring(4) + '/') : '')),
                    hrefIsAbsolute: true,
                }
            }),
            custom: imageXMLElements
          };
    },
}