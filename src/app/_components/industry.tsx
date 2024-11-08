import Container from "./container";


export function Industry() {
    return (
        <section className="section service" id="industries" aria-label="industry" style={{paddingTop:"40px"}}>
            <div className="container">

                <h1 className="h2 section-title text-center">
                Driving Digital Transformation <span className="has-before">Across Industries</span>
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <img className="circled" src="/assets/images/pixium-industries.png" title="pixium client centric" alt="pixium client centric"/>
                    </div>
                    <div className="col-span-2">
                        <p className="text-justify mb-4 p-4">
                            We specialize in delivering transformative digital solutions across diverse industries, tailoring our approach to meet 
                            the unique needs and challenges of each sector. With a deep understanding of
                            Fintech, HR Tech, Agri-Tech, Health Tech, Energy and Utilities, Media and Entertainment,
                            and more, we bring strategic insights and technical expertise to every project. Our team’s extensive 
                            cross-industry experience allows us to craft solutions that not only meet industry-specific standards
                            but also drive measurable growth, efficiency, and innovation.
                        </p>
                    </div>
                
                </div>
            </div>
         </section>
    );
}