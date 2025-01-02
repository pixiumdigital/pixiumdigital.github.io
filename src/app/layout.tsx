import Footer from "./_components/footer";
import Header from "./_components/header";

import "@/globals.css";
import '@/App.css';
import '@/style.css';
import { SUPPORTED_LOCALES } from "@/config/config";

export function generateStaticParams() {
    return SUPPORTED_LOCALES.map((locale: any) => ({ locale }));
}

// app/layout.tsx
export default async function RootLayout({children, params}: {children: React.ReactNode, params :{locale:any}}) {
  return (
    <html lang="en">
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
      <body>
        {/* <Header services={[]} locale={"en"} messages={[]} /> */}
        {children}
        {/* <Footer locale={"en"}/> */}
      </body>
    </html>
  );
}
