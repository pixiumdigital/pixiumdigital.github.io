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
    }
       
    module.exports = nextConfig
}else{
    const nextConfig = {
        output: 'export',
        trailingSlash: true,
        images: {
          unoptimized: true,
        },
      }
      
      module.exports = nextConfig
}