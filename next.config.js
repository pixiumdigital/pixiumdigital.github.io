/**
 * @type {import('next').NextConfig}
 */
const withNextIntl = require('next-intl/plugin')();

const isProd = process.env.NODE_ENV != 'development'

if(isProd){
    
    const nextConfig = {
        output: 'export',
        distDir: 'dist',
        images:{
            unoptimized:true
        },
    }
       
    module.exports = nextConfig
}