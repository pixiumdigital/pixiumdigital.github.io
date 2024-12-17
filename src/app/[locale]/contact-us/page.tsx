// import { locales } from '@/__navigation';
import { Metadata } from 'next';
import { unstable_setRequestLocale } from 'next-intl/server';
import React, { Component }  from 'react';
import { json } from 'stream/consumers';

// export function generateStaticParams() {
//     return [{ locale: "en" }];
// }

// export async function generateStaticParams() {
//     const pages = locales;
//     return pages.map((page) => ({ locale: page }));
//   }


// const Index = ( { params } : { params:{locale:string } } ) => {

export default async function Index ( { params } : { params:{locale:string } } ) {

    const messages = await import(`@/messages/${params.locale}.json`);

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': "Contact Us Page",
        'description': messages.contact.seo_description,
        'name': messages.contact.seo_title,
    }
    
    return <section className="section service" id="service" aria-label="service">
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd)}}></script>

        <div className="container">

            <h2 className="h2 section-title text-center" dangerouslySetInnerHTML={{__html:messages.contact.title}}>
            </h2>

            <p className='mb-5 text-justify'>{messages.contact.intro}</p>
        
            <div className='mt-4 text-justify' dangerouslySetInnerHTML={{__html:messages.contact.description}}>
            </div>

            <ul className="grid-list">
                <li className="text-center">
                    {/* style="--color: 174, 77%, 50%" */}
                    <div className="service-card" >
                        <div className="card-icon text-center">
                        <img src="/assets/images/flag-sg.png" width="30" height="30" loading="lazy"
                            alt="service icon" />
                        </div>
                        <h3 className="h3">
                            Singapore
                        </h3>
                        <p>
                            Blk 584, #08-3087,<br></br>
                            Ang Mo Kio Ave 3,<br></br>
                            560584 Singapore<br></br>
                        </p>
                        <p>
                            <i>contactus@pixiumdigital.com</i>
                        </p>
                    </div>
                </li>
                <li>
                    {/* style="--color: 174, 77%, 50%" */}
                    <div className="service-card" >
                        <div className="card-icon">
                        <img src="/assets/images/flag-fr.png" width="30" height="30" loading="lazy"
                            alt="service icon" />
                        </div>
                        <h3 className="h3">
                            France
                        </h3>
                        <p>
                        33 boulevard du Général Leclerc,
                        06240 Beausoleil
                        </p>
                        <p>
                            <i>contactus@pixiumdigital.com</i>
                        </p>
                    </div>
                </li>
                <li>
                    {/* style="--color: 174, 77%, 50%" */}
                    <div className="service-card" >
                        <div className="card-icon">
                        <img src="/assets/images/flag-sp.png" width="30" height="30" loading="lazy"
                            alt="service icon" />
                        </div>
                        <h3 className="h3">
                            Spain
                        </h3>
                        <p>
                            Málaga
                        </p>
                        <p>
                            <i>contactus@pixiumdigital.com</i>
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </section>;
};


export function generateMetadata({ params }: { params:{locale:string } }): Metadata {
    const title = `Contact Pixium Digital | Top web, software & mobile development comapny in Singapore and France`;
    const description = `Contact us and our team will gather your specification, 
    goals and expectations about the project.`;
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