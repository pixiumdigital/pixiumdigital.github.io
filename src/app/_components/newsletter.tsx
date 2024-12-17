import React, { Component }  from 'react';


type Params = {
    params: {
      locale:string;
    };
  };


export default async function Newsletter({ params }: Params) {

    const messages = await import(`@/messages/${params.locale}.json`);


    return <div>
         <section className="section newsletter has-bg-image" aria-label="newsletter"
            style={{backgroundImage: `url('/assets/images/newsletter-bg.jpg')`}}>
            <div className="container">

            <figure className="newsletter-banner">
                <img src="/assets/images/newsletter-banner.png" width="355" height="356" loading="lazy"
                alt="newsletter banner" className="w-100" />
            </figure>

            <div className="newsletter-content">

                <p className="section-subtitle has-before">{messages.newsletter.title}</p>

                <h2 className="h2 section-title">
                    {messages.newsletter.intro}
                </h2>

                <p className="has-before centered">
                    <a rel="canonical" href="mailto:contactus@pixiumdigital.com" className="btn btn-secondary has-before has-after">
                        <span className="span">{messages.newsletter.button}</span>
                    </a>
                </p>
                
            </div>

            </div>
        </section>
    </div>;
};