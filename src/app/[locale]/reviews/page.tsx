import { unstable_setRequestLocale } from 'next-intl/server';
import Whyworkwithus from '../../_components/whyworkwithus';
import { Metadata } from 'next';
import { Process } from '../../_components/process';
import Link from 'next/link';
// import { locales } from '@/__navigation';

// export function generateStaticParams() {
//     return [{ locale: "en" }];
// }

export function generateStaticParams() {
    return [
      { locale: 'en' },
      { locale: 'fr' }
    ];
  }
  

const reviewsContent = [
    {
        "title": "Oussama Labib",
        "postion": "Founder & Director",
        "company": "Aeqlia Pte Ltd",
        "comment": "Put it simply, they will care about your product as much as you do.",
        "link": "https://clutch.co/profile/pixium-digital-pte#reviews",
        "projectLink": ""
    },
    {
        "title": "Justne Price",
        "postion": "Founder & Director",
        "company": "LastManOut",
        "comment": "Pixium Digital impressed us with their expertise, flexibility, and commitment to ongoing support, making them the perfect partner for our transition from a web-based service to an app-based platform.",
        "link": "https://clutch.co/profile/pixium-digital-pte#reviews",
        "projectLink": ""
    }
]


export default async function Index ( { params } : { params:{locale:string } } ) {

    const messages = await import(`@/messages/${params.locale}.json`);
    
    return <><section className="section service" id="reviews" aria-label="reviews">
            <div className="container">

                <h2 className="h2 section-title text-center">
                    <span className="has-before">{messages.reviews.title}</span>
                </h2>

                <p className='mb-4 mt-0'>
                    {messages.reviews.intro}
                </p>
            
                <div className="grid gap-y-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {
                        reviewsContent.map((review, index) => {
                            return (
                                <div className="service-card columns-1gap-x-8" style={{margin:"20px", padding:"40px"}}>
                                    <div className="mb-4">
                                        {/* <CoverImage slug={slug} title={title} src={coverImage} baseUrl={locale+"/blog"} /> */}
                                    </div>
                                    <div className="gap-x-8">
                                        <img src="/assets/images/reviews-star.svg" className={"text-center object-center m-auto mb-4"} width="100" loading="lazy" alt="reviews icon" />
                                        <p className="text-3xl text-black leading-relaxed mb-4">{review.comment}</p>
                                        <div className="text-2xl mb-3 leading-snug">
                                        <Link
                                            target='_blank'
                                            // as={`/`+locale+`/blog/${slug}`}
                                            href={review.link}
                                        >
                                            {review.title}
                                        </Link>
                                        <h2 className="mb-8 text-xl md:text-xl tracking-tighter">{review.postion}, {review.company}</h2>
                                        </div>
                                        {/* <Avatar name={author.name} picture={author.picture} /> */}
                                    </div>
                                </div>
                            )
                            // <div className="review" key={index}>
                            //     <h3 className="h3 review-title">{review.title}</h3>
                            //     <p className="review-text">{review.comment}</p>
                            //     <a href={review.link} className="review-link">Read More</a>
                            // </div>)
                        })
                    }
                </div>
            </div>
        </section>
        <Whyworkwithus />
    </>;
};


export function generateMetadata(): Metadata {
    const title = `Review | Pixium Digital`;
    const description = `Pixium Digital is a creative digital firm powered by a gregarious group 
    of engineers with a broad range of IT solutions expertise`;
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