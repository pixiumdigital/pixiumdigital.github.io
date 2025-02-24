import { CMS_NAME, HOME_OG_IMAGE_URL } from "@/lib/constants";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { NextIntlClientProvider, useMessages } from 'next-intl';

import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google'


import "@/globals.css";
import '@/App.css';
import '@/style.css';

import Header from "../_components/header";
import Footer from "../_components/footer";
// import { locales } from "@/__navigation"
import { getAllServices } from "@/lib/api";

import { notFound } from "next/navigation";
import { GlobalProvider } from "../provider";
import { SUPPORTED_LOCALES } from "@/config/config";
import CookieConsentBanner from "../_components/cookie-consent-banner";
import GoogleAnalyticsWrapper from "../_components/google-analytics-wrapper";

const inter = Inter({ subsets: ["latin"] });

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale: any) => ({ locale }));
}

// { params: { lang } } : {params:any}
export default async function RootLayout({children, params}: {children: React.ReactNode, params :{locale:any}}) {
    const {locale} = params;
    // const [language, setLanguage] = useState<string>(locale); // Initialize with the current locale

    if (!SUPPORTED_LOCALES.includes(locale)) {
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
                <meta name="robots" content="all" />
                <meta name="theme-color" content="#000" />
                <link rel="alternate" type="application/rss+xml" href="/feed.xml" />

                <script src="https://analytics.ahrefs.com/analytics.js" data-key="CNbgYh3+Qs02clppYfOtjg" defer={true}></script>
            </head>
                
                    <body className={inter.className+" App"}>
                      {/* <NextIntlClientProvider locale={locale} messages={messages}> */}
                          <Header services={getAllServices(locale)} locale={locale} messages={messages} />
                          <div className="min-h-screen">
                            {/* <NextIntlClientProvider locale={locale} messages={messages}> */}
                            <GlobalProvider initialMessages={messages}>
                              {children}
                              </GlobalProvider>
                            {/* </NextIntlClientProvider> */}
                          </div>
                          {/* <CookieConsentBanner /> */}
                          <Footer locale={locale}/>
                        {/* </NextIntlClientProvider> */}
                    </body>
                
                {/* <GoogleAnalytics gaId="G-2H458FMSSG" /> */}
                <GoogleAnalyticsWrapper />
        </html>
    );
}
