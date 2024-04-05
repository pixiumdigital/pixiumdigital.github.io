import Container from "./container";


export function Industry() {
    return (
        <section className="section service" id="industries" aria-label="industry" style={{paddingTop:"40px"}}>
            <div className="container">

                <h1 className="h2 section-title text-center">
                    <span className="has-before">Industry agnostic</span>
                </h1>
                <p>
                    With a rich history of serving clients across diverse industries including Fintech, Healthtech, 
                    Agri-tech, Entertainment, and beyond, we pride ourselves on delivering tailored 
                    solutions that transcend boundaries. Our expertise extends beyond mere coding; 
                    we specialize in understanding the unique needs of each sector we serve, 
                    harnessing technology to drive impactful results.
                </p>
            </div>
            <main>
                <Container>
                    <div className="grid gap-y-16 grid-cols-1 lg:grid-cols-2">
                        <div className="service-card columns-1 gap-x-8" style={{margin:"20px", padding:"40px"}}>
                            <div className="gap-x-8">
                                <h3 className="text-3xl mb-3 leading-snug">FINTECH
                                    {/* <Link
                                    as={`/use-case/${slug}`}
                                    href="/use-case/[slug]"
                                    > 
                                        <h2 className="mb-8 text-3xl md:text-3xl font-bold tracking-tighter">FINTECH</h2>
                                    </Link> */}
                                </h3>
                                <p className="text-2xl leading-relaxed mb-4">We help big enterprises with large-scale mobile 
                                banking solutions. And agile startups determined to transform mobile payments, 
                                stock trading and the wider industry. Whatever you need, 
                                we’ll be your partner in disruption.</p>
                            </div>                          
                        </div>

                        <div className="service-card columns-1 gap-x-8" style={{margin:"20px", padding:"40px"}}>
                            <div className="gap-x-8">
                                <h3 className="text-3xl mb-3 leading-snug">INTERNET OF THINGS (IOT)</h3>
                                <p className="text-2xl leading-relaxed mb-4">We’re experts in comprehensive IoT technology ecosystems 
                                and companion apps. Clients around the world have put their trust in our engineering to 
                                supercharge their vitamin trackers, diabetes monitors, smart lighting and more.</p>
                            </div>                          
                        </div>

                        <div className="service-card columns-1 gap-x-8" style={{margin:"20px", padding:"40px"}}>
                            <div className="gap-x-8">
                                <h3 className="text-3xl mb-3 leading-snug">HEALTHTECH</h3>
                                <p className="text-2xl leading-relaxed mb-4">We’re helping reinvent healthcare, 
                                creating scalable, production-ready software for 
                                high-flying companies. 
                                From tracking diabetic sugar levels to digital transformation of clinics, we’re proud to be supporting better health.</p>
                            </div>                          
                        </div>

                        <div className="service-card columns-1 gap-x-8" style={{margin:"20px", padding:"40px"}}>
                            <div className="gap-x-8">
                                <h3 className="text-3xl mb-3 leading-snug">COMMUNICATION</h3>
                                <p className="text-2xl leading-relaxed mb-4">Whether you’re a leading telecom software vendor or an 
                                ambitious startup, you can take advantage of our deep knowledge of the sector to 
                                get powerful real-time communication, social and instant messaging apps.</p>
                            </div>                          
                        </div>
                    </div>
                </Container>
            </main>
         </section>
    );
}