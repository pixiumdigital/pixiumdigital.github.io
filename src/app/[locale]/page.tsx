import Newsletter from "../_components/newsletter";
import Whyworkwithus from "../_components/whyworkwithus";
import Industry from "../_components/industry";
import { PixStats } from "../_components/pix_stats";
import { Metadata } from "next";
import Clients from "../_components/clients";


export function generateStaticParams() {
    return [
        { locale: 'en' },
        { locale: 'fr' }
    ];
}

type Params = {
    params: {
      slug: string;
      locale:string;
    };
  };

export default async function Index( { params }: Params ) {
    const messages = await import(`@/messages/${params.locale}.json`);

    return (
        <div> 
            <section className="section hero" id="home" aria-label="hero">
                <div className="container">

                    <div className="hero-content">

                        <h1 className="h1 hero-title" dangerouslySetInnerHTML={{ __html: messages.home.intro }}>
                        </h1>

                        <p className="hero-text">
                          {messages.home.description}
                        </p>

                        <div className="centered">
                            <a href="/contact-us" className="btn btn-primary has-before has-after">{messages.button.contactus}</a>
                        </div>

                    </div>

                    <figure className="hero-banner">
                        {/* hero-banner.png */}
                        <img src="/assets/images/dotmap.png" style={{width:"100%"}} width="200" height="200" alt="pixium digital location map" />
                    </figure>

                </div>
            </section>

            <PixStats />

            <Industry params={params}/>

            <Whyworkwithus params={params} />

            <Clients params={params}/>

            <Newsletter params={params}/>
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


export function generateMetadata(): Metadata {
    const title = `Pixium Digital`;
    const description = `Pixium Digital is a digital and software development 
                    and digital company located in Singapore and France. We design, 
                    create and maintain your web, mobile, IOT or servless application.`;
    // const previousImages = (await parent).openGraph?.images || []

    return {
      title,
      description: description,
      openGraph: {
        title: title,
        description: description,
        images: ['https://pixiumdigital.com/assets/images/pixium-logo.png'],
      },
    };
}