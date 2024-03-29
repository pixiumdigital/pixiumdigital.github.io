import React, { Component }  from 'react';
import Whyworkwithus from '../_components/whyworkwithus';

// import { SEO } from "../components/seo"

const Index = () => {
    return <section className="section service" id="service" aria-label="service">
        <div className="container">

            <h2 className="h2 section-title text-center">
                <span className="has-before">About us</span>
            </h2>
        
            <div>
                <p>
                Pixium Digital, headquartered in Singapore, is an innovative IT development company fueled by a 
                friendly team of developers specializing in diverse IT solutions. With decades of collective experience in mobile 
                and web application development, augmented reality, the Internet of Things, and machine learning, 
                we offer comprehensive expertise to bring your ideas to life. Backed by cutting-edge engineering solutions and 
                robust business development experience, we are dedicated to transforming your needs into exceptional products. 
                Count on us as your steadfast and reliable IT solution partner, committed to your success.
                </p>
            </div>

            <Whyworkwithus />
        </div>
    </section>;
};

export default Index;

// export const Head = () => (
//     <SEO title="About us" />
//   )