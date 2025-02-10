import React, { Component }  from 'react';
import Whyworkwithus from '../../_components/whyworkwithus';
import Container from '../../_components/container';
import { getAllUseCase } from '@/lib/api';
import { MoreStories } from '../../_components/more-stories';
import Newsletter from '../../_components/newsletter';
import { Metadata } from 'next';
import { SITE_CONFIG } from '@/config/config';

export function generateStaticParams() {
    return [
        { locale: 'en' },
        { locale: 'fr' }
    ];
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

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': "Use Case Page",
        'description': messages.usecase.seo_description,
        'name': messages.usecase.seo_title,
    }

    return <>
        <section className="section service" id="service" aria-label="service">
            <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd)}}></script>
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
                    {/* <HeroPost
                    title={heroPost.title}
                    coverImage={heroPost.coverImage}
                    date={heroPost.date}
                    author={heroPost.author}
                    slug={heroPost.slug}
                    excerpt={heroPost.excerpt}
                    /> */}
                    {morePosts.length > 0 && <MoreStories posts={morePosts} locale={params.locale} />}
                </Container>
            </main>
        </section>
        <Newsletter params={params} />
        </>;
};


export function generateMetadata({ params }: Params): Metadata {
    const title = `Pixium Digital | Use cases for web, mobile and software`;
    const description = `Explore how Pixium Digital helps businesses in Singapore, Nice and Monaco develop custom web, mobile and software solutions.`;
    // const previousImages = (await parent).openGraph?.images || []

    const canonicalUrl = `https://${SITE_CONFIG.domain}/${params.locale}/use-case`;
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
