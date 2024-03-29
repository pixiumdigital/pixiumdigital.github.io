import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllUseCase } from "@/lib/api";
import Newsletter from "./_components/newsletter";
import Whyworkwithus from "./_components/whyworkwithus";

export default function Index() {
  return (<div> 
    <section className="section hero" id="home" aria-label="hero">
        <div className="container">

          <div className="hero-content">

            <h1 className="h1 hero-title">
              Shaping your project with <span className="has-before">technology</span> and innovation
            </h1>

            <p className="hero-text">
            Pixium Digital is an agile software development company headquartered in Singapore.
             Our dedicated focus lies in meticulously shaping our clients' projects from 
             inception to a successful launch, ensuring transformative outcomes.
            </p>

            <div className="centered">
              <a href="/contact-us" className="btn btn-primary has-before has-after">Contact Us</a>

              <button className="hero-btn" aria-label="pixology promo">
                {/* <ion-icon name="play-outline" aria-hidden="true"></ion-icon> */}

                {/* <span className="span">Behind the scenes</span> */}
              </button>
            </div>

          </div>

          <figure className="hero-banner">
            {/* hero-banner.png */}
            <img src="/assets/images/dotmap.png" style={{width:"100%"}} alt="hero banner" />
          </figure>

        </div>
      </section>

      <Whyworkwithus />

      <Newsletter />
    </div>
  );
  // const allPosts = getAllPosts();

  // const heroPost = allPosts[0];

  // const morePosts = allPosts.slice(1);

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
}
