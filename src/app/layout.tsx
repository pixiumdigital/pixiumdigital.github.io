import { CMS_NAME, HOME_OG_IMAGE_URL } from "@/lib/constants";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { NextIntlClientProvider, useMessages } from 'next-intl';

import "../globals.css";
import '../App.css';
import '../style.css';

import Header from "./_components/header";
import Footer from "./_components/footer";
// import { locales } from "@/__navigation";
import { notFound } from "next/navigation";
import { getAllServices } from "@/lib/api";

const inter = Inter({ subsets: ["latin"] });


async function getMessages(locale: string) {
    try {
        return (await import(`../../../locales/${locale}/default.json`)).default
    } catch (error) {
        notFound()
    }
}

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

    // if (!locales.includes(locale)) {
    //   notFound();
    // }

    // const messages = useMessages();
    // const messages = await getMessages(locale)


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
                {/* <NextIntlClientProvider locale={locale} messages={messages}> */}
                    <body className={inter.className+" App"}>
                        <Header services={getAllServices()} />
                        <div className="min-h-screen">{children}</div>
                        <Footer />
                    </body>
                {/* </NextIntlClientProvider> */}
        </html>
    );
}
