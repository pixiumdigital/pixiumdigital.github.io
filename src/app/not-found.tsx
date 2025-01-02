// import RootLayout from './[locale]/layout';

import { SUPPORTED_LOCALES } from "@/config/config";
import { redirect } from "next/navigation";


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

  let locale = params.locale && params.locale!=="" ? params.locale : 'en';

  redirect( '/' + locale + '/not-found' );
}