import React, { Component }  from 'react';
import Whyworkwithus from '../../_components/whyworkwithus';
import Newsletter from '../../_components/newsletter';
import { getAllServices } from '@/lib/api';
import { MoreServices } from '../../_components/more-stories';
import Container from '../../_components/container';
import { Metadata } from 'next';
// import { unstable_setRequestLocale } from 'next-intl/server';
// import { locales } from '@/__navigation';

// import { SEO } from "../components/seo"

export function generateStaticParams() {
    return [
      { locale: 'en' },
      { locale: 'fr' }
    ];
  }

export default function Index( { params } : { params:{locale:string } } ) {
    // unstable_setRequestLocale(params.locale);

    const allPosts = getAllServices();
    const morePosts = allPosts;

    return (<>
        <section className="section service" id="service" aria-label="service">
            <div className="container">

                <h2 className="h2 section-title text-center">
                    <span className="has-before">Services</span>
                </h2>

                <p className='mb-5'>We are dedicated to driving your digital transformation journey forward.
                    As a leading digital consulting and development firm, we offer tailored solutions 
                    to help businesses like yours thrive in the rapidly evolving digital landscape.</p>
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


export function generateMetadata(): Metadata {
    const title = `Services | Pixium Digital`;
    const description = `Enhance your business operations with pixium digital. Expoert software solutions, IT consulting, and advanced infrstraucture for digital transformation.`;
    // const previousImages = (await parent).openGraph?.images || []

    return {
      title,
      description: description,
      keywords: ["services", "digital solution", "development", "digital consulting", "AI", "chatbot", "ChatGPT"],
      openGraph: {
        title: title,
        description: description,
        images: ['https://pixiumdigital.com/assets/images/pixium-logo.png'],
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