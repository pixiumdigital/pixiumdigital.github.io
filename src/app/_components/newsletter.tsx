import React, { Component }  from 'react';

const Newsletter = () => {
    return <div>
         <section className="section newsletter has-bg-image" aria-label="newsletter"
            style={{backgroundImage: `url('/assets/images/newsletter-bg.jpg')`}}>
            <div className="container">

            <figure className="newsletter-banner">
                <img src="/assets/images/newsletter-banner.png" width="355" height="356" loading="lazy"
                alt="newsletter banner" className="w-100" />
            </figure>

            <div className="newsletter-content">

                <p className="section-subtitle has-before">You have an idea?</p>

                <h2 className="h2 section-title">
                    Let’s have a chat!
                </h2>

                <p className="has-before centered">
                    <a href="#" className="btn btn-secondary has-before has-after">
                        <span className="span">Contact Us</span>
                    </a>
                </p>
                
            </div>

            </div>
        </section>
    </div>;
};

export default Newsletter;