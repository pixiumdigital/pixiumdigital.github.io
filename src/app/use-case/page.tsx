import React, { Component }  from 'react';
import Whyworkwithus from '../_components/whyworkwithus';
import Container from '../_components/container';
import { getAllPosts } from '@/lib/api';
import { MoreStories } from '../_components/more-stories';

// import { SEO } from "../components/seo"

const Index = () => {

    const allPosts = getAllPosts();

    // const heroPost = allPosts[0];

    const morePosts = allPosts; //.slice(1);

  // return (
  //   <main>
  //     <Container>
  //       <Intro />
  //       <HeroPost
  //         title={heroPost.title}
  //         coverImage={heroPost.coverImage}
  //         date={heroPost.date}
  //         author={heroPost.author}
  //         slug={heroPost.slug}
  //         excerpt={heroPost.excerpt}
  //       />
  //       {morePosts.length > 0 && <MoreStories posts={morePosts} />}
  //     </Container>
  //   </main>
  // );



    return <section className="section service" id="service" aria-label="service">
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
    </section>;
};

export default Index;

// export const Head = () => (
//     <SEO title="About us" />
//   )