// import RootLayout from './[locale]/layout';

import { SITE_CONFIG, SUPPORTED_LOCALES } from "@/config/config";
import { redirect } from "next/navigation";
import { Metadata } from "next";


export function generateStaticParams() {
    return SUPPORTED_LOCALES.map((locale: any) => ({ locale }));
}

type Params = {
  params: {
    locale:string;
  };
};

// app/[locale]/not-found.tsx
export default function NotFound( {params} : Params) {

  let locale = 'en';

  redirect( '/' + locale + '/not-found' );
}




export function generateMetadata({ params }: Params): Metadata {
  const title = `Pixium Digital | Top Digital Development Company - Singapore`;
  const description = `Digital consulting and software development. Enhance operations, productivity, and profitability through scalable software, IT, and staffing solution.`;
  // const previousImages = (await parent).openGraph?.images || []
  const canonicalUrl = `https://${SITE_CONFIG.domain}/${params.locale}/not-found/`;

  // Generate hreflang entries for all supported languages
  const languages = SUPPORTED_LOCALES.map(lang => ({
    [lang === 'en' ? 'x-default' : lang]: `https://${SITE_CONFIG.domain}/${lang}/not-found/`,
  }));
  const alternates = {
    canonical: canonicalUrl,
    languages: Object.assign({}, ...languages),
  };

  return {
    title,
    description: description,
    alternates: alternates,
    openGraph: {
      title: title,
      type:"website",
      description: description,
      url: canonicalUrl,
      siteName: "Pixium Digital",
      images: [`https://${SITE_CONFIG.domain}/assets/images/pixium-logo.webp`]
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      site: canonicalUrl,
      description: description,
      images: [`https://${SITE_CONFIG.domain}/assets/images/pixium-logo.webp`],
    },
  };
}