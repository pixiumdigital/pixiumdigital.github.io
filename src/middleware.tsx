import { NextResponse } from "next/server";

import { cookies } from 'next/headers'
 

let locales = ['en', 'fr']
let defaultLocale = 'en'

// Regex to check whether something has an extension, e.g. .jpg
const PUBLIC_FILE = /\.(.*)$/

export function setLocale(lang:any){
  cookies().set({
    name: 'NEXT_LOCALE',
    value: lang});
}
 
// Get the preferred locale, similar to the above or using a library
function getLocale(request:any) { 
    // Check if there is any supported locale in the pathname
    const cookieLocale = cookies().get('NEXT_LOCALE')
    if(cookieLocale) return cookieLocale

    return 'fr';
 }
 
export function middleware(request:any) {

    // // Early return if we do not need to or want to run middleware
    // if (request.nextUrl.pathname.startsWith('/_next') ||
    //     request.nextUrl.pathname.includes('/api/') ||
    //     PUBLIC_FILE.test(request.nextUrl.pathname)) 
    // {
    //     return
    // }
    // // Early return if we are on a locale other than default
    // if (request.nextUrl.locale !== 'default') {
    //     return
    // }



    const { pathname } = request.nextUrl
    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    )
  
    if (pathnameHasLocale) return
    
  
    // Redirect if there is no locale
    const locale = getLocale(request)
    request.nextUrl.pathname = `/${locale}${pathname}`
    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return NextResponse.redirect(request.nextUrl)
}
 
export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next).*)',
    // Optional: only run on root (/) URL
    // '/'
  ],
}