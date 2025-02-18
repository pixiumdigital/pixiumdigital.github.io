import React, { Component }  from 'react';
import Whyworkwithus from '../../_components/whyworkwithus';
import Container from '../../_components/container';
import { getAllServices, getAllUseCase } from '@/lib/api';
import { MoreStories } from '../../_components/more-stories';
import Newsletter from '../../_components/newsletter';
import { Metadata } from 'next';
import { SITE_CONFIG, SUPPORTED_LOCALES } from '@/config/config';
import { generateBreadcrumbJSON, generateWebsiteJSON } from '@/utils/schema';
import Script from 'next/script';
import ContentSlider, { ContentCard } from '@/app/_components/content-slider';

export function generateStaticParams() {
    return SUPPORTED_LOCALES.map((locale: any) => ({ locale }));
}

type Params = {
    params: {
      locale:string;
    };
  };


export default async function Index( { params }: Params ) {

    const allPosts = getAllUseCase(params.locale);
    const morePosts = allPosts;

    const messages = await import(`@/messages/${params.locale}.json`);

    const allServices = getAllServices(params.locale);
      const services: ContentCard[] = allServices.map((post, index) => ({
          id: index + 1,
          title: post.title,
          description: post.excerpt,
          // icon: post.icon || "🔧", // Default icon if none provided
          link: `/${params.locale}/services/${post.slug}/`
      }));


    // --------- JSON LD ----------------
    const canonicalUrl = `https://${SITE_CONFIG.domain}/${params.locale}/use-case/`
    const jsonLd = generateWebsiteJSON(messages.usecase.seo_description, messages.usecase.seo_title, canonicalUrl);
    const breadcrumbItems = [
      { name: messages.navigation.home, url: `https://${SITE_CONFIG.domain}/${params.locale}/` },
      { name: messages.navigation.usecase, url: canonicalUrl }
    ];
    const breadcrumbJsonLd = generateBreadcrumbJSON(breadcrumbItems);
    // ----------------------------------

    return <>
        <section className="section service" id="service" aria-label="service">
          <Script
                  id="usecase-jsonld"
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

                <h1 className="h2 section-title text-center" dangerouslySetInnerHTML={{__html: messages.usecase.title}}>
                </h1>
            </div>
            <main>
                <Container>
                    <p className='text-justify mb-4'>
                        {messages.usecase.intro_1}
                    </p>

                    <p className='text-justify mb-4'>
                        {messages.usecase.intro_2}
                    </p>
                </Container>
                <Container>
                    {morePosts.length > 0 && <MoreStories posts={morePosts} locale={params.locale} />}
                </Container>
            </main>
        </section>

        <ContentSlider 
          services={services}
          slidePerPreview={4}
          messages={messages.slider}
          url={`/${params.locale}/services/`}
          title={messages.services.title}
        />


        <Newsletter params={params} />
        </>;
};


export function generateMetadata({ params }: Params): Metadata {
    const title = `Pixium Digital | Use cases for web, mobile and software`;
    const description = `Explore how Pixium Digital helps businesses in Singapore, Nice and Monaco develop custom web, mobile and software solutions.`;
    // const previousImages = (await parent).openGraph?.images || []

    const canonicalUrl = `https://${SITE_CONFIG.domain}/${params.locale}/use-case/`;
    const languages = SUPPORTED_LOCALES.map(lang => ({
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
