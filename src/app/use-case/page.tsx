import React, { Component }  from 'react';
import Whyworkwithus from '../_components/whyworkwithus';
import Container from '../_components/container';
import { getAllUseCase } from '@/lib/api';
import { MoreStories } from '../_components/more-stories';
import Newsletter from '../_components/newsletter';
import { Metadata } from 'next';

// import { SEO } from "../components/seo"

// export async function generateStaticParams() {
//     const pages = ['en', 'fr'];
//     return pages.map((page) => ({ locale: page }));
//   }

export default function Index( { params } : { params:{locale:string } } ) {

    const allPosts = getAllUseCase();
    const morePosts = allPosts;

    return <>
        <section className="section service" id="service" aria-label="service">
            <div className="container">

                <h2 className="h2 section-title text-center">
                    <span className="has-before">Use case:</span> Transforming Vision into Digital Success
                </h2>
            </div>
            <main>
                <Container>
                    <p className='text-justify mb-4'>
                        At Pixium Digital, we empower businesses through digital transformation that drives measurable results. 
                        Our Use Cases showcase how our tailored strategies and cutting-edge technology solutions help companies across 
                        various industries overcome complex challenges, streamline operations, and achieve their goals. 
                        
                        From cloud migration and data analytics to process automation and customer experience optimization, 
                        explore our proven methods for success.
                    </p>

                    <p className='text-justify mb-4'>
                        Discover how we’ve partnered with clients to deliver innovative, 
                        scalable solutions that enhance efficiency, increase profitability, 
                        and future-proof their operations in an ever-evolving digital landscape. 
                        Dive into our real-world applications and see how we can transform your business vision into reality.
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
                    {morePosts.length > 0 && <MoreStories posts={morePosts} />}
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
