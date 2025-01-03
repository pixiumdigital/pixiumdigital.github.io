import Container from "./container";

type Params = {
    params: {
      locale:string;
    };
  };


export default async function Industry({ params }: Params) {

    const messages = await import(`@/messages/${params.locale}.json`);

    return (
        <section className="section service" id="industries" aria-label="industry" style={{paddingTop:"40px"}}>
            <div className="container">

                <h1 className="h2 section-title text-center" dangerouslySetInnerHTML={{__html:messages.industry.title}}>
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <img className="circled" src="/assets/images/pixium-industries.webp" title="pixium client centric" alt="pixium client centric"/>
                    </div>
                    <div className="col-span-2">
                        <p className="text-justify mb-4 p-4">
                            {messages.industry.intro}
                        </p>
                    </div>
                
                </div>
            </div>
         </section>
    );
}