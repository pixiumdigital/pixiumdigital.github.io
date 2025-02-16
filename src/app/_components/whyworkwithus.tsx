import React, { Component }  from 'react';


type Params = {
  params: {
    locale:string;
  };
};

export default async function Whyworkwithus({ params }: Params) {

    const messages = await import(`@/messages/${params.locale}.json`); 

    return (
        <div className="section" id="feature" aria-label="feature">
            <div className="container mb-5">
                <div className="w-100">
                    <h2 className="h2 section-title" dangerouslySetInnerHTML={{__html:messages.workwithus.title}}>
                    </h2>

                    <div className="">
                        <div className='text-justify'>
                            <p className="card-text">
                              {messages.workwithus.intro}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-5">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    <div>
                      <div className="gap-x-2" style={{margin:"10px", padding:"10px"}}>
                        <div className="mb-5">
                            <img className="circled" src="/assets/images/pixium-expertise.webp" title="pixium expertise" alt="pixium expertise"/>
                        </div>
                        <div className="gap-x-8">
                            <h3 className="mb-8 text-2xl md:text-4xl font-bold tracking-tighter">Expertise</h3>
                            <p className="text-2xl leading-relaxed mb-4">Our team consists of seasoned professionals with extensive experience in digital consulting and development.</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="gap-x-2" style={{margin:"10px", padding:"10px"}}>
                        <div className="mb-5">
                            <img className="circled" src="/assets/images/pixium-innovation.webp" title="pixium innovation" alt="pixium innovation" />
                        </div>
                        <div className="gap-x-8">
                            <h3 className="mb-8 text-2xl md:text-4xl font-bold tracking-tighter">Innovation</h3>
                            <p className="text-2xl leading-relaxed mb-4">We stay at the forefront of emerging technologies and industry trends to deliver innovative solutions that give you a competitive edge.</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="gap-x-2" style={{margin:"10px", padding:"10px"}}>
                        <div className="mb-5">
                            <img className="circled" src="/assets/images/pixium-client-centric.webp" title="pixium client centric" alt="pixium client centric"/>
                        </div>
                        <div className="gap-x-8">
                            <h3 className="mb-8 text-2xl md:text-4xl font-bold tracking-tighter">Client-Centric Approach</h3>
                            <p className="text-2xl leading-relaxed mb-4">We prioritize understanding your unique needs and goals, ensuring that our solutions are tailored to deliver maximum value to your business.</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="gap-x-2" style={{margin:"10px", padding:"10px"}}>
                        <div className="mb-5">
                            <img className="circled" src="/assets/images/pixium-result-driven.webp" title="pixium result driven" alt="pixium result driven"/>
                        </div>
                        <div className="gap-x-8">
                            <h3 className="mb-8 text-2xl md:text-4xl font-bold tracking-tighter">Results-Driven</h3>
                            <p className="text-2xl leading-relaxed mb-4">Our focus is on delivering tangible results that drive business growth and success for our clients.</p>
                        </div>
                      </div>
                    </div>


                </div>
            </div>
        </div>
    );
}
