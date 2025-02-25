/**
 * @type {import('next').NextConfig}
 */
const withNextIntl = require('next-intl/plugin')();

const isProd = process.env.NODE_ENV != 'development'

if(isProd){
    
    const nextConfig = {
        output: 'export',
        distDir: 'dist',
        trailingSlash: true,
        // basePath: '/pixiumdigital.com',
        images:{
            unoptimized:true
        },
        async headers() {
            return [
                {
                    source: '/sitemap.xml',
                    headers: [
                        {
                            key: 'Content-Type',
                            value: 'application/xml',
                        },
                    ],
                },
                {
                    source: '/sitemap.xsl',
                    headers: [
                        {
                            key: 'Content-Type',
                            value: 'text/xsl',
                        },
                    ],
                },
            ]
        },
    }
       
    module.exports = nextConfig
}else{
    const nextConfig = {
        output: 'export',
        trailingSlash: true,
        images: {
            unoptimized: true,
        },
        async headers() {
            return [
                {
                    source: '/sitemap.xml',
                    headers: [
                        {
                            key: 'Content-Type',
                            value: 'application/xml',
                        },
                    ],
                },
                {
                    source: '/sitemap.xsl',
                    headers: [
                        {
                            key: 'Content-Type',
                            value: 'text/xsl',
                        },
                    ],
                },
            ]
        },
      }
      
      module.exports = nextConfig
}