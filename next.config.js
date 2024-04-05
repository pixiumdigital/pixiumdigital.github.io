/**
 * @type {import('next').NextConfig}
 */

const linguiConfig = require("./lingui.config")

const isProd = process.env.NODE_ENV != 'development'

if(isProd){
    const nextConfig = {
        output: 'export',
        i18n: {
            locales: linguiConfig.locales,
            defaultLocale: linguiConfig.sourceLocale,
        },
        distDir: 'dist',
        images:{
            unoptimized:true
        },
    }
       
    module.exports = nextConfig
}
