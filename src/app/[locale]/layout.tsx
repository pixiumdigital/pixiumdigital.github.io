import { CMS_NAME, HOME_OG_IMAGE_URL } from "@/lib/constants";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { NextIntlClientProvider, useMessages } from 'next-intl';

import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google'


import "../../globals.css";
import '../../App.css';
import '../../style.css';

import Header from "../_components/header";
import Footer from "../_components/footer";
// import { locales } from "@/__navigation"
import { getAllServices } from "@/lib/api";
import { useState } from "react";

import { useTranslations } from 'next-intl';
import { notFound } from "next/navigation";
import ProviderClient, { GlobalProvider } from "../provider";

const inter = Inter({ subsets: ["latin"] });


export function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'fr' }
  ];
}


// locale comes from Next.js in receiving props
// const [language, setLanguage] = useState<string>(locale); 

// async function getMessages(locale: string) {
//     try {
//         return (await import(`../../../locales/${locale}/default.json`)).default
//     } catch (error) {
//         notFound()
//     }
// }

// export const metadata: Metadata = {
//   title: `Pixium Digital Group`,
//   description: `Pixium Digital is an agile software development company located in Singapore and France.
//   Our dedicated focus lies in meticulously shaping our clients' projects from 
//   inception to a successful launch, ensuring transformative outcomes.`,
//   openGraph: {
//     images: [HOME_OG_IMAGE_URL],
//   },
// };


// export function generateStaticParams() {
//   const pages = locales;
//   return pages.map((page) => ({ name: page }));
// }




// { params: { lang } } : {params:any}
export default async function RootLayout({children, params}: {children: React.ReactNode, params :{locale:string}}) {
    const {locale} = params;
    // const [language, setLanguage] = useState<string>(locale); // Initialize with the current locale

    if (!['en', 'fr'].includes(locale)) {
      notFound();
    }
    
    // const messages = useMessages();
    let messages;
    try {
      messages = (await import(`../../messages/${locale}.json`)).default;
    } catch (error) {
      // Handle error loading messages
    }

    // const messages = useMessages();
    // const t = useTranslations('common');

    return (
      //  lang="en"
        <html lang={locale}>
            <head>
                <link
                  rel="apple-touch-icon"
                  sizes="180x180"
                  href="/favicon/apple-touch-icon.png"
                />
                <link
                  rel="icon"
                  type="image/png"
                  sizes="32x32"
                  href="/favicon/favicon-32x32.png"
                />
                <link
                  rel="icon"
                  type="image/png"
                  sizes="16x16"
                  href="/favicon/favicon-16x16.png"
                />
                <link rel="manifest" href="/favicon/site.webmanifest" />
                <link
                  rel="mask-icon"
                  href="/favicon/safari-pinned-tab.svg"
                  color="#000000"
                />
                <link rel="shortcut icon" href="/favicon/favicon.ico" />
                <meta name="msapplication-TileColor" content="#000000" />
                <meta
                  name="msapplication-config"
                  content="/favicon/browserconfig.xml"
                />
                <meta name="theme-color" content="#000" />
                <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
            </head>
                
                    <body className={inter.className+" App"}>
                      {/* <NextIntlClientProvider locale={locale} messages={messages}> */}
                          <Header services={getAllServices()} locale={locale} messages={messages} />
                          <div className="min-h-screen">
                            {/* <NextIntlClientProvider locale={locale} messages={messages}> */}
                            <GlobalProvider initialMessages={messages}>
                              {children}
                              </GlobalProvider>
                            {/* </NextIntlClientProvider> */}
                          </div>
                          <Footer locale={locale}/>
                        {/* </NextIntlClientProvider> */}
                    </body>
                
                <GoogleAnalytics gaId="G-2H458FMSSG" />
        </html>
    );
}
