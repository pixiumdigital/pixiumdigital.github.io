import React, { Component }  from 'react';
import Whyworkwithus from '../../_components/whyworkwithus';
import Container from '../../_components/container';
import { getAllUseCase } from '@/lib/api';
import { MoreStories } from '../../_components/more-stories';
import Newsletter from '../../_components/newsletter';
import { Metadata } from 'next';

export function generateStaticParams() {
    return [
        { locale: 'en' },
        { locale: 'fr' }
    ];
}


export default async function Index( { params } : { params:{locale:string } } ) {

    const allPosts = getAllUseCase(params.locale);
    const morePosts = allPosts;

    const messages = await import(`@/messages/${params.locale}.json`);

    return <>
        <section className="section service" id="service" aria-label="service">
            <div className="container">

                <h2 className="h2 section-title text-center" dangerouslySetInnerHTML={{__html: messages.usecase.title}}>
                </h2>
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
        <Newsletter />
        </>;
};


export function generateMetadata(): Metadata {
    const title = `Use Case | Pixium Digital`;
    const description = `We design, create and maintain your web, mobile, IOT or servless application.`;
    // const previousImages = (await parent).openGraph?.images || []

    return {
      title,
      description: description,
      openGraph: {
        title: title,
        description: description,
        images: ['/assets/images/pixium-logo.png'],
      },
    };
}
