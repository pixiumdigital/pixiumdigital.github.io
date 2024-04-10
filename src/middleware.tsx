import { NextRequest, NextResponse } from "next/server";
import Cookies from "universal-cookie";
//middleware.ts

import createMiddleware from "next-intl/middleware";

import { localePrefix, locales } from './navigation';

const intlMiddleware = createMiddleware({
  locales: locales,
  defaultLocale: "en",
  // localePrefix: 'always', // This is the default
  localePrefix: localePrefix,
  localeDetection: true,
});



export default function middleware(req: NextRequest) {

  // const maybeRedirectResponse = handleLocaleRedirects(req)
  // if (maybeRedirectResponse) return maybeRedirectResponse

  // const response = NextResponse.next()

  // // perhaps other middleware logic here...

  // return response


  const excludePattern = "^(/(" + locales.join("|") + "))?/admin/?.*?$";
  const publicPathnameRegex = RegExp(excludePattern, "i");
  const isPublicPage = !publicPathnameRegex.test(req.nextUrl.pathname);

  return intlMiddleware(req);
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
  // matcher: ['/', '/(fr|en)/:path*']
};



// let locales = ['en', 'fr']
// let defaultLocale = 'en'

// // Regex to check whether something has an extension, e.g. .jpg
// const PUBLIC_FILE = /\.(.*)$/

// export function setLocale(lang:any){
//   const _cookies = new Cookies();
//   _cookies.set('NEXT_LOCALE', lang, { maxAge: 86400 });
// }
 
// // Get the preferred locale, similar to the above or using a library
// // function getLocale(request:any) { 
// //     // Check if there is any supported locale in the pathname
// //     const cookieLocale = cookies().get('NEXT_LOCALE')
// //     if(cookieLocale) return cookieLocale

// //     return 'fr';
// //  }

//  const getBrowserLanguage = (req: NextRequest) => {
//   const _cookies = new Cookies();
//   const cookieValue = _cookies.get('NEXT_LOCALE');
//   return cookieValue;
// };



 
// export function middleware(request:any) {

//     // // Early return if we do not need to or want to run middleware
//     if (request.nextUrl.pathname.startsWith('/_next') ||
//         request.nextUrl.pathname.includes('/api/') ||
//         PUBLIC_FILE.test(request.nextUrl.pathname)) 
//     {
//         return;
//     }
//     // // Early return if we are on a locale other than default
//     // if (request.nextUrl.locale !== 'default') {
//     //     return
//     // }





//   const { pathname } = request.nextUrl
//   const pathnameHasLocale = locales.some(
//       (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
//   )
//   if (pathnameHasLocale) return;


    
  
//     // Redirect if there is no locale
//     const locale = request.cookies["NEXT_LOCALE"] ?? getBrowserLanguage(request) ?? defaultLocale; //getLocale(request)
//     request.nextUrl.pathname = `/${locale}${pathname}`
//     // e.g. incoming request is /products
//     // The new URL is now /en-US/products
//     return NextResponse.redirect(request.nextUrl)
// }
 
// export const config = {
//   matcher: [
//     // Skip all internal paths (_next)
//     '/((?!_next).*)',
//     // Optional: only run on root (/) URL
//     // '/'
//   ],
// }