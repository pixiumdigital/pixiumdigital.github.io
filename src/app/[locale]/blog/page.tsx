import React, { Component }  from 'react';
import Whyworkwithus from '../../_components/whyworkwithus';
import Newsletter from '../../_components/newsletter';
import { getAllBlog } from '@/lib/api';
import { MoreBlog } from '../../_components/more-stories';
import Container from '../../_components/container';
import { Metadata } from 'next';
import { SITE_CONFIG, SUPPORTED_LOCALES } from '@/config/config';
import { generateBreadcrumbJSON, generateWebsiteJSON } from '@/utils/schema';
import Script from 'next/script';

//   }

export default async function Index( { params } : { params:{locale:string } } ) {
    // unstable_setRequestLocale(params.locale);

    const messages = await import(`@/messages/${params.locale}.json`);

    const allPosts = getAllBlog();
    const morePosts = allPosts;

    const canonicalUrl = `https://${SITE_CONFIG.domain}/${params.locale}/blog/`;
    const jsonLd = generateWebsiteJSON(messages.home.seo_description, messages.home.seo_title, canonicalUrl);
    // In your page component:
    const breadcrumbItems = [
      { name: messages.navigation.home, url: `https://${SITE_CONFIG.domain}/${params.locale}/` },
      { name: messages.navigation.blog, url: canonicalUrl }
    ];
    const breadcrumbJsonLd = generateBreadcrumbJSON(breadcrumbItems);

    return (<>
        <section className="section service" id="service" aria-label="blog">

          <Script
                id="services-jsonld"
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

                <h1 className="h2 section-title text-center">
                    <span className="has-before">{messages.blog.title}</span>
                </h1>


                <p className='mb-5 text-justify'>
                    {messages.blog.text_area_1}
                </p>

                <p className='mb-5 text-justify'>
                    {messages.blog.text_area_2}
                </p>
            </div>
            
            <main>
                <Container>
                    {morePosts.length > 0 && <MoreBlog posts={morePosts} locale={params.locale} />}
                </Container>
            </main>
        </section>
        <Newsletter params={params}/>
    </>);
};


type Params = {
    params: {
      locale:string;
    };
  };

export async function generateMetadata({ params }: Params): Promise<Metadata> {

    const messages = await import(`@/messages/${params.locale}.json`);

    const title = messages.blog.seo_title;
    const description = messages.blog.seo_description;
    // const previousImages = (await parent).openGraph?.images || []

    const canonicalUrl = `https://${SITE_CONFIG.domain}/${params.locale}/blog/`;
    const languages = SUPPORTED_LOCALES.map(lang => ({
      [lang === 'en' ? 'x-default' : lang]: `https://${SITE_CONFIG.domain}/${lang}/blog/`,
    }));
    const alternates = {
      canonical: canonicalUrl,
      languages: Object.assign({}, ...languages),
    };

    return {
      title,
      alternates: alternates,
      description: description,
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