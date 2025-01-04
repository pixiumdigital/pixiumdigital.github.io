/** @type {import('next-sitemap').IConfig} */
// Default code you can customize according to your requirements.

module.exports = {
    siteUrl: process.env.SITE_URL || 'https://pixiumdigital.com',
    generateRobotsTxt: true, // (optional)
    sitemapSize: 7000,

    transform: async (config, path) => {
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
            _priority = 0.8
        } else {
             _priority = 0.6
        }
    
        // only create changefreq along with path
        // returning partial properties will result in generation of XML field with only returned values.
        // if (customLimitedField(path)) {
        //   // This returns `path` & `changefreq`. Hence it will result in the generation of XML field with `path` and  `changefreq` properties only.
        //   return {
        //     loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
        //     changefreq: 'weekly',
        //   }
        // }

        
    
        // Use default transformation for all other cases
        return {
          loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
          changefreq: 'weekly', // config.changefreq,
          priority: _priority, //config.priority,
          lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
          alternateRefs: config.alternateRefs ?? [],
        }
    },
    // REST CODE READ DOCS  ...
}