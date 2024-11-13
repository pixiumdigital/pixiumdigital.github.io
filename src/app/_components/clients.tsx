"use client"

import Image from "next/image";
import Container from "./container";

export function Clients() {

    const clients = [
        {
            "name": "Ripple",
            "img":"/assets/clients/ripple.jpg",
            "url":"https://ripple.com"
        },
        {
            "name": "National University of Singapore",
            "img":"/assets/clients/nus.jpg",
        },
        {
            "name": "CETIM Group",
            "img":"/assets/clients/cetim.jpg",
        },
        {
            "name": "Foraco",
            "img":"/assets/clients/foraco.jpg",
        },
        {
            "name": "Engie Singapore",
            "img":"/assets/clients/engie.jpg",
        },
        {
            "name": "Aeqlia",
            "img":"/assets/clients/aeqlia.jpg",
        },
        {
            "name": "Go Master Coach",
            "img":"/assets/clients/gmc.jpg",
        },
        {
            "name": "Last Man Out Mobile Application",
            "img":"/assets/clients/lmo.jpg",
        },
        {
            "name": "Miki Island",
            "img":"/assets/clients/miki.jpg",
        },
        {
            "name": "Indefi",
            "img":"/assets/clients/indefi.jpg",
        },
        {
            "name": "Singapore Discovery Center by Defence Collective Singapore",
            "img":"/assets/clients/sdc.jpg",
        },
        {
            "name": "ArtAF",
            "img":"/assets/clients/artaf.jpg",
            "url":"https://artaf.sg"
        },
        {
            "name": "Cell Research Group Singapore",
            "img":"/assets/clients/cell.jpg",
            "url":"https://www.cellresearchcorp.com"
        },
        {
            "name": "HUNT Companies",
            "img":"/assets/clients/hunt.jpg",
            "url":"https://www.huntcompanies.com"
        },
        {
            "name": "Swiss Asia Holding Pte Ltd",
            "img":"/assets/clients/swissasia.jpg",
            "url":"https://www.swissasia-group.com"
        }
    ]


    return (
        <section className="" id="pix-clients" aria-label="statistics">
            <main className="pb-4 mb-4">
                <Container>
                    <h1 className="h2 section-title text-center">Some of <span className="has-before">our clients</span></h1>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {
                            clients.map( (client, index) => (
                                <div className="relative">
                                    <Image alt={client.name} 
                                    src={client.img} 
                                    width={0}
                                    height={0}
                                    sizes="100vw"
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