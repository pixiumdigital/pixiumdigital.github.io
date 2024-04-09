import Newsletter from "./_components/newsletter";
import Whyworkwithus from "./_components/whyworkwithus";
import { Industry } from "./_components/industry";
import { PixStats } from "./_components/pix_stats";
import { useTranslations } from "next-intl";
import { locales } from "@/navigation";

export async function generateStaticParams() {
    const pages = locales;
    return pages.map((page) => ({ locale: page }));
  }

export default function Index( { params: { locale } } : { params:{locale:any } } ) {
    
    // const t = useTranslations();

  return (
      <div> 
          <section className="section hero" id="home" aria-label="hero">
              <div className="container">

                  <div className="hero-content">

                      <h1 className="h1 hero-title">
                        {/* {t('tagline')} */}
                        {/* {t('header', { name: userName })} */}
                      {/* {dict.page.homeTagline} */}
                      {/* Shaping your project with <span className="has-before">technology</span> and innovation */}
                            {/* <Trans id="home-tagline" /> */}
                      </h1>

                      <p className="hero-text">
                          {/* {t('description')} */}
                      </p>

                      <div className="centered">
                          <a href="/contact-us" className="btn btn-primary has-before has-after">Contact Us</a>
                      </div>

                  </div>

                  <figure className="hero-banner">
                      {/* hero-banner.png */}
                      <img src="/assets/images/dotmap.png" style={{width:"100%"}} alt="pixium digital location map" />
                  </figure>

              </div>
          </section>

          <PixStats />

          <Industry />

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
