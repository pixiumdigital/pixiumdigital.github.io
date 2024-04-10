/**
 * @type {import('next').NextConfig}
 */
const withNextIntl = require('next-intl/plugin')();

const isProd = process.env.NODE_ENV != 'development'

if(isProd){
    
    const nextConfig = {
        basePath: '/en',
        async redirects() {
            return [
                {
                    source: "/",
                    destination: "/en",
                    permanent: true,
                },
            ];
        },
        output: 'export',
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
