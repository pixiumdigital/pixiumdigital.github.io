import React, { Component }  from 'react';
import Whyworkwithus from '../../_components/whyworkwithus';
import Newsletter from '../../_components/newsletter';
import { getAllServices } from '@/lib/api';
import { MoreServices } from '../../_components/more-stories';
import Container from '../../_components/container';
import { Metadata } from 'next';
import { SITE_CONFIG, SUPPORTED_LOCALES } from '@/config/config';
// import { unstable_setRequestLocale } from 'next-intl/server';
// import { locales } from '@/__navigation';

// import { SEO } from "../components/seo"

export function generateStaticParams() {
    return SUPPORTED_LOCALES.map((locale: any) => ({ locale }));
}


export default async function Index( { params } : { params:{locale:string } } ) {
    // unstable_setRequestLocale(params.locale);

    const messages = await import(`@/messages/${params.locale}.json`);

    const allPosts = getAllServices(params.locale);
    const morePosts = allPosts;

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': "Services Page",
        'description': messages.services.seo_description,
        'name': messages.services.seo_title,
      }

    return (<>
        <section className="section service" id="service" aria-label="service">
            <div className="container">

                <h1 className="h2 section-title text-center" dangerouslySetInnerHTML={{__html:messages.services.title}}>
                </h1>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-4 p-4'>
                    <div className='p-4 mb-5'>
                        <img className="circled w-50" src="/assets/images/working-people.webp" />
                    </div>

                    <div className='mt-5 mb-5 p-4 text-justify col-span-2'>
                        <h2 className='text-4xl mb-4'>{messages.services.intro}</h2>
                        <p>
                            {messages.services.description}
                        </p>
                    </div>
                </div>

                
            </div>
            
            <main>
                <Container>
                    {morePosts.length > 0 && <MoreServices posts={morePosts} locale={params.locale} />}
                </Container>
            </main>
            <Whyworkwithus params={params} />
        </section>
        <Newsletter params={params}/>
    </>);
};

type Params = {
    params: {
      slug: string;
      locale:string;
    };
  };

export function generateMetadata({ params }: Params): Metadata {
    const title = `Services | Pixium Digital`;
    const description = `Enhance your business operations with pixium digital. Expoert software solutions, IT consulting, and advanced infrstraucture for digital transformation.`;
    // const previousImages = (await parent).openGraph?.images || []

    const canonicalUrl = `https://${SITE_CONFIG.domain}/${params.locale}/services/`;

    const locales = ['en', 'fr'];
    const languages = locales.map(lang => ({
      [lang === 'en' ? 'x-default' : lang]: `https://${SITE_CONFIG.domain}/${lang}/services/`,
    }));
    const alternates = {
      canonical: canonicalUrl,
      languages: Object.assign({}, ...languages),
    };

    return {
      title,
      alternates: alternates,
      description: description,
      keywords: ["services for web development in Singapore","best custom software developers in Singapore", "digital development singapore", "top web development singapore", "digital consulting in Singapore", "ChatGPT integration"],
      openGraph: {
        title: title,
        siteName: "Pixium Digital",
        url: canonicalUrl,
        type:"website",
        description: description,
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



// export function generateMetadata(): Metadata {
//     const title = `Services | Pixium Digital`;
//     return {
//       title,
//       openGraph: {
//         title,
//         // images: [post.ogImage.url],
//       },
//     };
// }

// export const Head = () => (
//     <SEO title="About us" />
//   )