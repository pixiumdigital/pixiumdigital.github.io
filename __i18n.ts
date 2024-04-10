// import { locales } from '@/navigation';
// import { getRequestConfig } from 'next-intl/server';
// import { notFound } from 'next/navigation';

// export default getRequestConfig(async ({locale}) => {
// // export default getRequestConfig(async ({ locale }) => ({
// //     messages: (await import(`./locales/${locale}/default.json`)).default

//     // Validate that the incoming `locale` parameter is valid
//     if (!locales.includes(locale as any)) notFound();
    
//     return {
//         // messages: (await import(`./locales/${locale}/home.json`)).default
//         messages: // [
//             // (await import(`./locales/${locale}/default.json`)).default,
//             (await import(`./locales/${locale}/home.json`)).default
//         // ]
//         // .default
//     };
// // }));
// });