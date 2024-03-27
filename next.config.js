/**
 * @type {import('next').NextConfig}
 */

const isProd = process.env.NODE_ENV == 'development'

if(!isProd){
    const nextConfig = {
        output: 'export',
       
        // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
        // trailingSlash: true,
       
        // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
        // skipTrailingSlashRedirect: true,
       
        // Optional: Change the output directory `out` -> `dist`
        distDir: 'dist',
        // images:{
        //     unoptimized:true
        // }
    }
       
    module.exports = nextConfig
}
