/**
 * @type {import('next').NextConfig}
 */
const withNextIntl = require('next-intl/plugin')();

const isProd = process.env.NODE_ENV != 'development'

if(isProd){
    
    const nextConfig = {
        output: 'export',
        dynamic: 'force-static',
        distDir: 'dist',
        images:{
            unoptimized:true
        },
    }
       
    module.exports = withNextIntl(nextConfig);
    // module.exports = nextConfig
}else{
    module.exports = withNextIntl({});
}
