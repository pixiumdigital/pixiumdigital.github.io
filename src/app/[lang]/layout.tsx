import { CMS_NAME, HOME_OG_IMAGE_URL } from "@/lib/constants";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "../globals.css";
import '../App.css';
import '../style.css';

import Header from "../_components/header";
import Footer from "../_components/footer";
// import LanguageSelect from "../LanguageSelector";
// import { useLinguiInit } from "../../../utils";

const inter = Inter({ subsets: ["latin"] });


// import { i18n } from '@lingui/core'
// import { initTranslation } from '../../utils'
// import { useRouter } from "next/router";
// import { useRef } from "react";

// import LanguageSelector from './LanguageSelector';

//initialization function
// initTranslation(i18n)

export async function generateStaticParams() {
    return [{ lang: 'en' }, { lang: 'fr' }]
}


export const metadata: Metadata = {
  title: `Pixium Digital Group`,
  description: `Pixium Digital is an agile software development company located in Singapore and France.
  Our dedicated focus lies in meticulously shaping our clients' projects from 
  inception to a successful launch, ensuring transformative outcomes.`,
  openGraph: {
    images: [HOME_OG_IMAGE_URL],
  },
};



export default function RootLayout({children, params}: Readonly<{children: React.ReactNode, params :any}>) {

    // const initializedI18n = useLinguiInit(pageProps.i18n);
    
    // const router = useRouter()
    // const locale = router.locale || router.defaultLocale
    // const firstRender = useRef(true)

    // pageProps.translation && 
    // if (firstRender.current) {
    //     //load the translations for the locale
    //     i18n.load(locale, pageProps.translation)
    //     i18n.activate(locale)
    //     // render only once
    //     firstRender.current = false
    // }


    return (
      //  lang="en"
        <html lang={params.lang}>
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
                {/* <LanguageSelector
                  language={language}
                  onChangeLangage={onLanguageChange}
                /> */}
                <Header />
                {/* <LanguageSelect /> */}
                <div className="min-h-screen">{children}</div>
                <Footer />
            </body>
        </html>
    );
}
