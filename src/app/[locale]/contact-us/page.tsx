// import { locales } from '@/__navigation';
import { SITE_CONFIG, SUPPORTED_LOCALES } from '@/config/config';
import { generateBreadcrumbJSON, generateWebsiteJSON } from '@/utils/schema';
import { Metadata, MetadataRoute } from 'next';
import { unstable_setRequestLocale } from 'next-intl/server';
import Script from 'next/script';
import React, { Component }  from 'react';
import { json } from 'stream/consumers';

// export function generateStaticParams() {
//     return [{ locale: "en" }];
// }

// export async function generateStaticParams() {
//     const pages = locales;
//     return pages.map((page) => ({ locale: page }));
//   }

export function generateStaticParams() {
    return SUPPORTED_LOCALES.map((locale: any) => ({ locale }));
}


// const Index = ( { params } : { params:{locale:string } } ) => {

export default async function Index ( { params } : { params:{locale:string } } ) {

    const messages = await import(`@/messages/${params.locale}.json`);



    const canonicalUrl = `https://${SITE_CONFIG.domain}/${params.locale}/contact-us/`;
    
    const jsonLd = generateWebsiteJSON(messages.home.seo_description, messages.home.seo_title, canonicalUrl);
    
    // In your page component:
    const breadcrumbItems = [
        { name: 'Home', url: `https://${SITE_CONFIG.domain}/${params.locale}` },
        { name: 'Contact Us', url: canonicalUrl }
    ];
    const breadcrumbJsonLd = generateBreadcrumbJSON(breadcrumbItems);
    
    return <section className="section service" id="service" aria-label="service">
        <Script
                id="about-jsonld"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                strategy="beforeInteractive" // Can control when the script loads
            />
        <Script
                id="breadcrumb-jsonld"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
                strategy="beforeInteractive"
            />

        <div className="container">

            <h1 className="h2 section-title text-center" dangerouslySetInnerHTML={{__html:messages.contact.title}}>
            </h1>

            <p className='mb-5 text-justify'>{messages.contact.intro}</p>
        
            <div className='mt-4 text-justify' dangerouslySetInnerHTML={{__html:messages.contact.description}}>
            </div>

            <ul className="grid-list">
                <li className="text-center">
                    {/* style="--color: 174, 77%, 50%" */}
                    <div className="service-card" >
                        <div className="card-icon text-center">
                        <img src="/assets/images/flag-sg.webp" width="30" height="30" loading="lazy"
                            alt="service icon" />
                        </div>
                        <h3 className="h3">
                            Singapore
                        </h3>
                        <p>
                            Blk 584, #08-3087,<br></br>
                            Ang Mo Kio Ave 3,<br></br>
                            560584 Singapore<br></br>
                        </p>
                        <p>
                            <i>contactus@pixiumdigital.com</i>
                        </p>
                    </div>
                </li>
                <li>
                    {/* style="--color: 174, 77%, 50%" */}
                    <div className="service-card" >
                        <div className="card-icon">
                        <img src="/assets/images/flag-fr.webp" width="30" height="30" loading="lazy"
                            alt="service icon" />
                        </div>
                        <h3 className="h3">
                            France
                        </h3>
                        <p>
                        33 boulevard du Général Leclerc,
                        06240 Beausoleil
                        </p>
                        <p>
                            <i>contactus@pixiumdigital.com</i>
                        </p>
                    </div>
                </li>
                <li>
                    {/* style="--color: 174, 77%, 50%" */}
                    <div className="service-card" >
                        <div className="card-icon">
                        <img src="/assets/images/flag-sp.webp" width="30" height="30" loading="lazy"
                            alt="service icon" />
                        </div>
                        <h3 className="h3">
                            Spain
                        </h3>
                        <p>
                            Málaga
                        </p>
                        <p>
                            <i>contactus@pixiumdigital.com</i>
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </section>;
};

export function generateMetadata({ params }: { params:{locale:string } }): Metadata {
    const title = `Contact | Web & software & mobile development in Singapore`;
    const description = `Contact us and our team will gather your specification, 
    goals and expectations about the project.`;
    // const previousImages = (await parent).openGraph?.images || []

    const canonicalUrl = `https://${SITE_CONFIG.domain}/${params.locale}/contact-us/`;
    const locales = ['en', 'fr'];
    const languages = locales.map(lang => ({
      [lang === 'en' ? 'x-default' : lang]: `https://${SITE_CONFIG.domain}/${lang}/contact-us/`,
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
        url: canonicalUrl,
        siteName: "Pixium Digital",
        // url: `https://${SITE_CONFIG.domain}/${params.locale}/contact-us/`,
        description: description,
        images: [`https://${SITE_CONFIG.domain}/assets/images/pixium-logo.webp`],
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