import React, { Component }  from 'react';
import Container from './container';
import CoverImage from './cover-image';
import Avatar from './avatar';

const Whyworkwithus = () => {
    return (
        <div className="section" id="feature" aria-label="feature">
            <div className="container mb-5">
                {/* <figure className="feature-banner">
                    <img src="/assets/images/feature-banner.png" width="382" height="385" loading="lazy" alt="feature banner"
                      className="w-80" />
                </figure> */}

                <div className="w-100">
                    <h2 className="h2 section-title">
                        Why <span className="has-before">choose</span> us?
                    </h2>

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
                </div>
            </div>

            <div className="container mt-5">
                <div className="grid grid-cols-4 gap-2">
                    <div>
                      <div className="gap-x-2" style={{margin:"10px", padding:"10px"}}>
                        <div className="mb-5">
                            <img src="/assets/images/pixium-expertise.jpg" title="pixium expertise" alt="pixium expertise"/>
                        </div>
                        <div className="gap-x-8">
                            <h2 className="mb-8 text-2xl md:text-4xl font-bold tracking-tighter">Expertise</h2>
                            <p className="text-2xl leading-relaxed mb-4">Our team consists of seasoned professionals with extensive experience in digital consulting and development.</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="gap-x-2" style={{margin:"10px", padding:"10px"}}>
                        <div className="mb-5">
                            <img src="/assets/images/pixium-innovation.jpg" title="pixium innovation" alt="pixium innovation" />
                        </div>
                        <div className="gap-x-8">
                            <h2 className="mb-8 text-2xl md:text-4xl font-bold tracking-tighter">Innovation</h2>
                            <p className="text-2xl leading-relaxed mb-4">We stay at the forefront of emerging technologies and industry trends to deliver innovative solutions that give you a competitive edge.</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="gap-x-2" style={{margin:"10px", padding:"10px"}}>
                        <div className="mb-5">
                            <img src="/assets/images/pixium-client-centric.jpg" title="pixium client centric" alt="pixium client centric"/>
                        </div>
                        <div className="gap-x-8">
                            <h2 className="mb-8 text-2xl md:text-4xl font-bold tracking-tighter">Client-Centric Approach</h2>
                            <p className="text-2xl leading-relaxed mb-4">We prioritize understanding your unique needs and goals, ensuring that our solutions are tailored to deliver maximum value to your business.</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="gap-x-2" style={{margin:"10px", padding:"10px"}}>
                        <div className="mb-5">
                            <img src="/assets/images/pixium-result-driven.jpg" title="pixium result driven" alt="pixium result driven"/>
                        </div>
                        <div className="gap-x-8">
                            <h2 className="mb-8 text-2xl md:text-4xl font-bold tracking-tighter">Results-Driven</h2>
                            <p className="text-2xl leading-relaxed mb-4">Our focus is on delivering tangible results that drive business growth and success for our clients.</p>
                        </div>
                      </div>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default Whyworkwithus;
