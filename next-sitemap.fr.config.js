/** @type {import('next-sitemap').IConfig} */
// Default code you can customize according to your requirements.

module.exports = {
    siteUrl: process.env.SITE_URL || 'https://pixiumdigital.com',
    sitemapBaseFileName: 'sitemap-fr',
    generateRobotsTxt: false, // No need for a second robots.txt
    // sitemapSize: 7000,
    // alternateRefs: [
    //     {
    //         href: 'https://pixiumdigital.com/en',
    //         hreflang: 'en',
    //     },
    //     {
    //         href: 'https://pixiumdigital.com/fr',
    //         hreflang: 'fr',
    //     },
    // ],

    transform: async (config, path) => {
        if (!path.startsWith('/fr')) {
            return null;
        }

        let _priority = 1.0;

        if (path.endsWith('/') || path.endsWith('/en') || path.endsWith('/fr')) {
            _priority = 1.0
        } else if (path.endsWith('/contact-us') 
            || path.endsWith('/blog') 
            || path.endsWith('/about-us') 
            || path.endsWith('/services') 
            || path.endsWith('/use-case')
            || path.endsWith('/reviews') ) {
            _priority = 0.8
        } else {
             _priority = 0.6
        }

        return {
            loc: path, // e.g., "/en/about"
            changefreq: 'weekly', // config.changefreq,
            priority: _priority, //config.priority,
            lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
            // Include the French alternate reference (if needed)
            // alternateRefs: [
            //     {
            //         href: path.replace('/fr', '/en'),
            //         hreflang: 'en',
            //     },
            // ],
          };
    },
    // REST CODE READ DOCS  ...
}