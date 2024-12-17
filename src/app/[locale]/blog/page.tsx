import React, { Component }  from 'react';
import Whyworkwithus from '../../_components/whyworkwithus';
import Newsletter from '../../_components/newsletter';
import { getAllBlog } from '@/lib/api';
import { MoreBlog } from '../../_components/more-stories';
import Container from '../../_components/container';
import { Metadata } from 'next';

//   }

export default function Index( { params } : { params:{locale:string } } ) {
    // unstable_setRequestLocale(params.locale);

    const allPosts = getAllBlog();
    const morePosts = allPosts;

    return (<>
        <section className="section service" id="service" aria-label="service">
            <div className="container">

                <h2 className="h2 section-title text-center">
                    <span className="has-before">Blog</span>
                </h2>


                <p className='mb-5 text-justify'>
                    Staying ahead means continually evolving. Our blog is designed to bring you the latest insights, trends, and best practices in digital transformation, web development, a
                    nd software innovation. Whether you're a business leader
                     looking to leverage new technology, a developer seeking tips and tutorials, or simply curious 
                     about the evolving digital landscape, you’re in the right place.
                </p>

                <p className='mb-5 text-justify'>
                    Here, we share knowledge gained from our hands-on experience in building custom digital solutions and
                     guiding businesses through transformative projects. From industry news and tech updates to in-depth
                      guides and case studies, our goal is to empower you with the information you need to make smart, 
                      strategic decisions. Dive in, get inspired, and let’s explore the future of technology together.
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


export function generateMetadata(): Metadata {
    const title = `Blog | Pixium Digital`;
    const description = `We design, create and maintain your web, mobile, IOT or servless application.`;
    // const previousImages = (await parent).openGraph?.images || []

    return {
      title,
      description: description,
      openGraph: {
        title: title,
        type:"website",
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