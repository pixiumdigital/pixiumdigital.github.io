import { CMS_NAME } from "@/lib/constants";
import Container from "./container";


type Params = {
    params: {
      locale:string;
    };
  };
  
  export default async function Process({ params }: Params) {
  
      const messages = await import(`@/messages/${params.locale}.json`); 

    return (
        <Container>
            <div className="section mt-16 mb-16 md:mb-12 text-justify">
                <div>
                    <h2 className="h2 section-title text-center" dangerouslySetInnerHTML={{__html:messages.process.title}}>
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 mt-4 process-elem">
                    <div className="p-4">
                        <h3>{messages.process.title1}</h3>
                        <p>{messages.process.description1}</p>
                    </div>
                    <div className="p-4">
                        <h3>{messages.process.title2}</h3>
                        <p>{messages.process.description2}</p>
                    </div>
                    <div className="p-4">
                        <h3>{messages.process.title3}</h3>
                        <p>{messages.process.description3}</p>
                    </div>

                    <div className="p-4">
                        <h3>{messages.process.title4}</h3>
                        <p>{messages.process.description4}</p>
                    </div>
                    <div className="p-4">
                        <h3>{messages.process.title5}</h3>
                        <p>{messages.process.description5}</p>
                    </div>
                    <div className="p-4">
                        <h3>{messages.process.title6}</h3>
                        <p>{messages.process.description6}</p>
                    </div>
                </div>
            </div>
        </Container>
    );
}
