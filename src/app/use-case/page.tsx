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
                    <span className="has-before">Use case</span>
                </h2>
            </div>
            <main>
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


// export function generateMetadata(): Metadata {
//     const title = `Use Case | Pixium Digital`;
//     return {
//       title,
//       openGraph: {
//         title,
//         // images: [post.ogImage.url],
//       },
//     };
// }