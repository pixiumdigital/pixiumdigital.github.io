import React, { Component }  from 'react';

const Index = () => {
    return <section className="section service" id="service" aria-label="service">
        <div className="container">

            <h2 className="h2 section-title text-center">
                <span className="has-before">Contact us</span> for your next project
            </h2>
        
            <div>
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