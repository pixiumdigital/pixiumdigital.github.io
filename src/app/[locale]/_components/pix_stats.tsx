import Container from "./container";


export function PixStats() {
    return (
        <section className="" id="pix-stats" aria-label="statistics">
            <main>
                <Container>
                    <div className="grid gap-y-16 grid-cols-1 lg:grid-cols-3">
                        <div className="columns-1 gap-x-8" style={{margin:"20px", padding:"40px"}}>
                            <h3 className="text-8xl mb-3 font-bold">2015</h3> 
                            <p className="text-2xl">Foundation year</p>   
                            <p className="text-lg">(Singapore founded in 2015 / France founded in 2021)</p> 
                        </div>
                        <div className="columns-1 gap-x-8" style={{margin:"20px", padding:"40px"}}>
                            <h3 className="text-8xl mb-3 font-bold">100+</h3> 
                            <p className="text-2xl">Project delivered</p>   
                            <p className="text-lg">(ranging from mobile and web application, to software, IoT, AI projects and more)</p>   
                        </div>
                        <div className="columns-1 gap-x-8" style={{margin:"20px", padding:"40px"}}>
                            <h3 className="text-8xl mb-3 font-bold">50+</h3>     
                            <p className="text-2xl">Years of experience</p>   
                            <p className="text-lg">(Amongst C-Level positions globally including 30+ in APAC region)</p>       
                        </div>

                        
                    </div>
                </Container>
            </main>
         </section>
    );
}