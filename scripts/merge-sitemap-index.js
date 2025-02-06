const fs = require('fs');
const path = require('path');

const siteUrl = 'https://pixiumdigital.com';
// These should match the final URLs of your generated sitemaps:
const englishSitemapUrl = `${siteUrl}/sitemap-0.xml`;
const frenchSitemapUrl  = `${siteUrl}/sitemap-fr-0.xml`;

const sitemapIndexContent = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${englishSitemapUrl}</loc>
  </sitemap>
  <sitemap>
    <loc>${frenchSitemapUrl}</loc>
  </sitemap>
</sitemapindex>
`;

fs.writeFileSync(path.join(__dirname, '../public/sitemap.xml'), sitemapIndexContent, 'utf8');
console.log('Merged sitemap.xml created.');
