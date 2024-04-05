// "use client"

// // import { useRouter } from 'next/navigation' // from 'next/router'

// import { useEffect, useState } from 'react'
// // RadixUI is used here but isn't necessary
 
// // You would likley have this is a seperate file, but need a list of
// // supported languages to map over.
// const languages = [
//   {
//     locale: 'en',
//     name: 'English',
//   },
//   {
//     locale: 'fr',
//     name: 'French',
//   },
// ]
 
// const LanguageSelect = () => {
 
 
//   // State for the currently selected locale
//   const [selectedLang, setSelectedLang] = useState(locale)

 
//   // Handle button click
//   const handleClick = (languageLocale:any) => {
//         setSelectedLang(languageLocale)
//   }
 
//   // Update the router and locale if the selected language is changed
//   useEffect(() => {
//         // Get the full cookie consent
//         const cookieConsent = document.cookie
//         ? document.cookie
//             .split('; ')
//             .find((row) => row.startsWith('hasCookieConsent='))
//         : null
    
//         // Get the value of the cookie, note this will be a string
//         const cookieConsentString = cookieConsent
//         ? cookieConsent.split('=')[1]
//         : false
    
//         // Extract the value to a boolean we can use more easily
//         const hasCookieConsent = cookieConsentString === 'true'
    
//         if (selectedLang === 'en') {
//         // If we have consent set a cookie
//         if (hasCookieConsent) {
//             document.cookie = `NEXT_LOCALE=en; maxage=${
//             1000 * 60 * 60 * 24 * 7
//             }; path=/`
//         }
//         router.push({ pathname, query }, asPath, { locale: 'en' })
//         }
//         if (selectedLang === 'fr') {
//         // If we have consent set a cookie
//         if (hasCookieConsent) {
//             document.cookie = `NEXT_LOCALE=fr; maxage=${
//             1000 * 60 * 60 * 24 * 7
//             }; path=/`
//         }

//         router.push({ pathname, query }, asPath, { locale: 'fr' })
//         }
//   }, [selectedLang]) //eslint-disable-line
 
//   return (
//     <>
//     <div
//           style={{
//             padding: '1rem',
//             display: 'grid',
//             gridTemplateColumns: '130px 130px',
//             gridAutoFlow: 'dense',
//             gap: '0.5rem',
//           }}
//         >
//           {languages.map((language) => {
//             const isActive = language.locale === locale
//             return (
//               <button onClick={() => handleClick(language.locale)}>
//                 {language.name}
//                 {isActive && <span>&#10003;</span>}
//               </button>
//             )
//           })}
//         </div>
//         </>
//   )
// }
 
// export default LanguageSelect