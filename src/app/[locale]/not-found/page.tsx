// import RootLayout from './[locale]/layout';

import { SITE_CONFIG, SUPPORTED_LOCALES } from "@/config/config";
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
  
      // if(!params.locale){
      //     params.locale = "en";
      // };
  
      return (
        // <RootLayout params={params}>
          <div> 
              <section className="section" id="home" aria-label="hero">
                  <div className="container mt-4">
                      <div className='content-center mb-4'>
                        <img className="m-auto" src="/assets/images/404.webp" width={400} title="pixium error" alt="pixium not found"/>
                      </div>
                      <h1 className='mt-4'>
                        404 - Page Not Found :(
                      </h1>
                      <p>The page you are looking for does not exist.</p>
                  </div>
              </section>
          </div>
        // </RootLayout>
    );
}


export function generateMetadata(): Metadata {
  const title = `Pixium Digital Singapore & France | Page Not found`;
  const description = `Digital consulting and software development. Enhance operations, productivity, and profitability through scalable software, IT, and staffing solution.`;
  
  return {
    title,
    description: description,
    openGraph: {
      title: title,
      type:"website",
      description: description,
      images: [`https://${SITE_CONFIG.domain}/assets/images/pixium-logo.webp`]
    },
  };
}