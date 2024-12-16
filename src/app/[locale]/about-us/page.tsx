import { unstable_setRequestLocale } from 'next-intl/server';
import Whyworkwithus from '../../_components/whyworkwithus';
import { Metadata } from 'next';
import Process from '../../_components/process';
// import { locales } from '@/__navigation';

// export function generateStaticParams() {
//     return [{ locale: "en" }];
// }

export function generateStaticParams() {
    return [
      { locale: 'en' },
      { locale: 'fr' }
    ];
  }
  

// export async function generateStaticParams() {
//     const pages = locales;
//     return pages.map((page) => ({ locale: page }));
//   }

export default async function Index ( { params } : { params:{locale:string } } ) {

    const messages = await import(`@/messages/${params.locale}.json`);
    
    return <><section className="section service" id="service" aria-label="service">
            <div className="container">

                <h2 className="h2 section-title text-center">
                    <span className="has-before">{messages.about.title}</span>
                </h2>
            
                <div>
                    <p className='text-justify'>
                        {messages.about.intro}
                    </p>
                </div>
            </div>
        </section>
        <Process params={params} />
        <Whyworkwithus params={params} />
    </>;
};


export function generateMetadata(): Metadata {
    const title = `About us | Pixium Digital`;
    const description = `Pixium Digital is a creative digital firm powered by a gregarious group 
    of engineers with a broad range of IT solutions expertise`;
    // const previousImages = (await parent).openGraph?.images || []

    return {
      title,
      description: description,
      openGraph: {
        title: title,
        description: description,
        images: ['//assets/images/pixium-logo.png'],
      },
    };
}