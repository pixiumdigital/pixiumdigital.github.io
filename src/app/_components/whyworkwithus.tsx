import React, { Component }  from 'react';

const Whyworkwithus = () => {
    return (
        <section className="section feature" id="feature" aria-label="feature">
        <div className="container">

        <figure className="feature-banner">
            <img src="/assets/images/feature-banner.png" width="382" height="385" loading="lazy" alt="feature banner"
              className="w-80" />
          </figure>

          
          <div className="feature-content">

            {/* <p className="section-subtitle has-before">Why Choose us</p> */}

            <h2 className="h2 section-title">
              Why <span className="has-before">choose</span> us?
            </h2>

            <ul className="feature-list">

              <li>
                <div className="">

                  <div>
                    <p className="card-text">
        Welcome to Pixium Digital, where innovation meets efficiency in the realm of digital technology. 
        Leveraging agile methodology, we specialize in crafting cutting-edge solutions across 
        diverse industries. Our expertise extends to harnessing the power of big data and artificial 
        intelligence (AI) to drive impactful results for our clients. With a commitment to staying
         at the forefront of technological advancements, we deliver tailored solutions that empower 
         businesses to thrive in today's dynamic digital landscape. Partner with us to unlock the full 
         potential of your digital journey.
                    </p>
                  </div>

                </div>
              </li>

              

            </ul>

          </div>

        </div>
      </section>
      );
}

export default Whyworkwithus;
