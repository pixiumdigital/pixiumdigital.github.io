import Newsletter from "../_components/newsletter";
import Whyworkwithus from "../_components/whyworkwithus";
import Industry from "../_components/industry";
import { PixStats } from "../_components/pix_stats";
import { Metadata } from "next";
import Clients from "../_components/clients";
import { notFound } from "next/navigation";

import { SUPPORTED_LOCALES, SITE_CONFIG } from '@/config/config';
import Script from "next/script";


export function generateStaticParams() {
    return SUPPORTED_LOCALES.map((locale: any) => ({ locale }));
}

type Params = {
    params: {
      slug: string;
      locale:any;
    };
  };

export default async function Index( { params }: Params ) {
    const messages = await import(`@/messages/${params.locale}.json`);

    // if (!SUPPORTED_LOCALES.includes(params.locale)) {
    //     notFound(); // This will render the 404 page
    // }

    const canonicalUrl = `https://${SITE_CONFIG.domain}/${params.locale}/`;
    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': "WebPage",
      'description': messages.home.seo_description,
      'name': messages.home.seo_title,
      'url' : canonicalUrl,
      'mainEntity': {
            '@type': 'Organization',
            'name': 'Pixium Digital',
            // 'description': description
        }
    }

    return (
        <div> 
            <Script
                id="about-jsonld"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                strategy="beforeInteractive" // Can control when the script loads
            />
            <section className="section hero" id="home" aria-label="hero">
                <div className="container">

                    <div className="hero-content">

                        <h1 className="h1 hero-title" dangerouslySetInnerHTML={{ __html: messages.home.intro }}>
                        </h1>

                        <p className="hero-text">
                          {messages.home.description}
                        </p>

                        <div className="centered">
                            <a rel="canonical" href={"/"+params.locale+"/contact-us/"} className="btn btn-primary has-before has-after">{messages.button.contactus}</a>
                        </div>

                    </div>

                    {/* <figure className="hero-banner">
                        <img src="/assets/images/people.webp" style={{width:"100%"}} width="200" height="200" alt="pixium digital location map" />
                    </figure> */}

                </div>
            </section>

            <PixStats />

            <Industry params={params}/>

            <Whyworkwithus params={params} />

            <Clients params={params}/>

            <Newsletter params={params}/>
        </div>
    );
}


export function generateMetadata({ params }: Params): Metadata {
    const title = `Pixium Digital | Top Digital Development Company - Singapore`;
    const description = `Digital consulting and software development. Enhance operations, productivity, and profitability through scalable software, IT, and staffing solution.`;
    // const previousImages = (await parent).openGraph?.images || []
    const canonicalUrl = `https://${SITE_CONFIG.domain}/${params.locale}/`;

    // Generate hreflang entries for all supported languages
    const languages = SUPPORTED_LOCALES.map(lang => ({
      [lang === 'en' ? 'x-default' : lang]: `https://${SITE_CONFIG.domain}/${lang}/`,
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
        url: `https://${SITE_CONFIG.domain}`,
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