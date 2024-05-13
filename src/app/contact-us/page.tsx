// import { locales } from '@/__navigation';
import { Metadata } from 'next';
import { unstable_setRequestLocale } from 'next-intl/server';
import React, { Component }  from 'react';

// export function generateStaticParams() {
//     return [{ locale: "en" }];
// }

// export async function generateStaticParams() {
//     const pages = locales;
//     return pages.map((page) => ({ locale: page }));
//   }


const Index = ( { params } : { params:{locale:string } } ) => {
    
    return <section className="section service" id="service" aria-label="service">
        <div className="container">

            <h2 className="h2 section-title text-center">
                <span className="has-before">Contact us</span> for your next project
            </h2>

            <p className='mb-5'>Ready to embark on your digital transformation journey? 
                Contact us today to learn more about how Pixium Digital can help you achieve your goals 
                and unlock the full potential of your business in the digital age.
                Let's innovate, collaborate, and transform together.</p>
        
            <div className='mt-4'>
                <h2>What is next ?</h2>
                <ul>
                    <li>We answer you within 24 hours.</li>
                    <li>Our team will gather your specification, goals and expectations about the project.</li>
                    <li>Then we will revert back to you with a proposal.</li>
                </ul>
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
                            #15-02 Peninsula Plaza,
                            111 North Bridge Road,
                            179098 Singapore
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
                    </div>
                </li>
            </ul>
        </div>
    </section>;
};

export default Index;


export function generateMetadata(): Metadata {
    const title = `Contact us | Pixium Digital`;
    const description = `Contact us and our team will gather your specification, goals and expectations about the project.`;
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