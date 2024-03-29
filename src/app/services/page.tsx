import React, { Component }  from 'react';
import Whyworkwithus from '../_components/whyworkwithus';
import Newsletter from '../_components/newsletter';
import { getAllServices } from '@/lib/api';
import { MoreServices } from '../_components/more-stories';
import Container from '../_components/container';
import { Metadata } from 'next';

// import { SEO } from "../components/seo"

const Index = () => {

    const allPosts = getAllServices();
    const morePosts = allPosts;

    return (<>
        <section className="section service" id="service" aria-label="service">
            <div className="container">

                <h2 className="h2 section-title text-center">
                    <span className="has-before">Services</span>
                </h2>
            </div>
            <main>
                <Container>
                    {morePosts.length > 0 && <MoreServices posts={morePosts} />}
                </Container>
            </main>
            <Whyworkwithus />
        </section>
        <Newsletter />
    </>);
};

export default Index;


export function generateMetadata(): Metadata {
    const title = `Services | Pixium Digital`;
    return {
      title,
      openGraph: {
        title,
        // images: [post.ogImage.url],
      },
    };
}

// export const Head = () => (
//     <SEO title="About us" />
//   )