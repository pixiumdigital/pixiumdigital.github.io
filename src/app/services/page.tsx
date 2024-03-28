import React, { Component }  from 'react';
import Whyworkwithus from '../_components/whyworkwithus';
import Newsletter from '../_components/newsletter';

// import { SEO } from "../components/seo"

const Index = () => {
    return (<>
        <section className="section service" id="service" aria-label="service">
            <div className="container">

                <h2 className="h2 section-title text-center">
                    <span className="has-before">Services</span>
                </h2>
            
                <div>
                    <p>
                    PiXXXss.
                    </p>
                </div>

                <Whyworkwithus />
                
            </div>
            
        </section>
        <Newsletter />
    </>);
};

export default Index;

// export const Head = () => (
//     <SEO title="About us" />
//   )