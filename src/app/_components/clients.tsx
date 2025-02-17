// "use client"

import Image from "next/image";
import Container from "./container";


type Params = {
    params: {
      locale:string;
    };
  };


export default async function Clients({ params }: Params) {

    const messages = await import(`@/messages/${params.locale}.json`);

    const clients = [
        {
            "name": "Ripple",
            "img":"/assets/clients/ripple.webp",
            "url":"https://ripple.com"
        },
        {
            "name": "National University of Singapore",
            "img":"/assets/clients/nus.webp",
        },
        {
            "name": "CETIM Group",
            "img":"/assets/clients/cetim.webp",
        },
        {
            "name": "Foraco",
            "img":"/assets/clients/foraco.webp",
        },
        {
            "name": "Engie Singapore",
            "img":"/assets/clients/engie.webp",
        },
        {
            "name": "Aeqlia",
            "img":"/assets/clients/aeqlia.webp",
        },
        {
            "name": "Go Master Coach",
            "img":"/assets/clients/gmc.webp",
        },
        {
            "name": "Last Man Out Mobile Application",
            "img":"/assets/clients/lmo.webp",
        },
        {
            "name": "Miki Island",
            "img":"/assets/clients/miki.webp",
        },
        {
            "name": "Indefi",
            "img":"/assets/clients/indefi.webp",
        },
        {
            "name": "Singapore Discovery Center by Defence Collective Singapore",
            "img":"/assets/clients/sdc.webp",
        },
        {
            "name": "ArtAF",
            "img":"/assets/clients/artaf.webp",
            "url":"https://artaf.sg"
        },
        {
            "name": "Cell Research Group Singapore",
            "img":"/assets/clients/cell.webp",
            "url":"https://www.cellresearchcorp.com"
        },
        {
            "name": "HUNT Companies",
            "img":"/assets/clients/hunt.webp",
            "url":"https://www.huntcompanies.com"
        },
        {
            "name": "Swiss Asia Holding Pte Ltd",
            "img":"/assets/clients/swissasia.webp",
            "url":"https://www.swissasia-group.com"
        }
    ]


    return (
        <section className="" id="pix-clients" aria-label="statistics">
            <main className="pb-4 mb-4">
                <Container>
                    <h2 className="h2 section-title text-center" dangerouslySetInnerHTML={{__html:messages.client.title}}>
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {
                            clients.map( (client, index) => (
                                <div className="relative">
                                    <Image alt={client.name} 
                                    src={client.img} 
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    title={client.name}
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                        padding: '20px'
                                    }}/>
                                </div>
                            ))
                        }
                    </div>
                </Container>
            </main>
        </section>
    );
}