import { unstable_setRequestLocale } from 'next-intl/server';
import Whyworkwithus from '../../_components/whyworkwithus';
import { Metadata } from 'next';
import Process from '../../_components/process';
import { SITE_CONFIG } from '@/config/config';
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

    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': "About Us Page",
      'description': messages.about.seo_description,
      'name': messages.about.seo_title,
    }
    
    return <><section className="section service" id="service" aria-label="service">
            <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd)}}></script>


            <div className="container">

                <h1 className="h1 section-title text-center" dangerouslySetInnerHTML={{__html:messages.about.title}}>
                </h1>
            
                <div>
                    <p className='text-justify' dangerouslySetInnerHTML={{__html:messages.about.intro}}>
                    </p>
                </div>
            </div>

            <div className="container about-keypoints">
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-4">
                {/* <div> */}
                  <div className="p-4">
                      <p className='text-8xl mb-4'>🎯</p>
                      <h2 className='h3'>{messages.about.block1_title}</h2>
                      <p dangerouslySetInnerHTML={{__html:messages.about.block1_description}}></p>
                  </div>    
                  <div className="p-4">
                      <p className='text-8xl mb-4'>💡</p>
                      <h2 className='h3'>{messages.about.block2_title}</h2>
                      <p dangerouslySetInnerHTML={{__html:messages.about.block2_description}}></p>
                  </div> 
                  <div className="p-4">
                      <p className='text-8xl mb-4'>🌟</p>
                      <h2 className='h3'>{messages.about.block3_title}</h2>
                      <div dangerouslySetInnerHTML={{__html:messages.about.block3_description}}></div>  
                  </div>    
                {/* </div> */}
                {/* <div>
                  <img src="/assets/images/aboutus.png"></img>
                </div> */}
                           
              </div>
            </div>
        </section>
        <Process params={params} />
        <Whyworkwithus params={params} />
    </>;
};


type Params = {
  params: {
    locale:string;
  };
};

export function generateMetadata({ params }: Params): Metadata {
    const title = `About | Top Digital Development Company - Singapore`;
    const description = `Pixium Digital: A leading digital development company in Singapore & France (Nice & Monaco). Specialized in custom web, software and mobile development.`;
    // const previousImages = (await parent).openGraph?.images || []

    const canonicalUrl = `https://${SITE_CONFIG.domain}/${params.locale}/about-us`;

    const locales = ['en', 'fr'];
    const languages = locales.map(lang => ({
      [lang === 'en' ? 'x-default' : lang]: `https://${SITE_CONFIG.domain}/${lang}/about-us/`,
    }));
    const alternates = {
      canonical: canonicalUrl,
      languages: Object.assign({}, ...languages),
    };

    return {
      title,
      alternates: alternates,
      description: description,
      openGraph: {
        title: title,
        siteName: "Pixium Digital",
        url: canonicalUrl,
        type:"website",
        description: description,
        images: [`https://${SITE_CONFIG.domain}/assets/images/pixium-logo.webp`]
      },
      twitter: {
        card: "summary_large_image",
        title: title,
        site: canonicalUrl,
        description: description,
        images: [`https://${SITE_CONFIG.domain}/assets/images/pixium-logo.webp`],
      },
    };
}