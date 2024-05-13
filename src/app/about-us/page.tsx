import { unstable_setRequestLocale } from 'next-intl/server';
import Whyworkwithus from '../_components/whyworkwithus';
import { Metadata } from 'next';
// import { locales } from '@/__navigation';

// export function generateStaticParams() {
//     return [{ locale: "en" }];
// }

// export async function generateStaticParams() {
//     const pages = locales;
//     return pages.map((page) => ({ locale: page }));
//   }

const Index = ( { params } : { params:{locale:string } } ) => {
    
    return <><section className="section service" id="service" aria-label="service">
            <div className="container">

                <h2 className="h2 section-title text-center">
                    <span className="has-before">About us</span>
                </h2>
            
                <div>
                    <p>
                    With its headquarters located in Singapore, 
                    Pixium Digital is a creative digital firm powered by a gregarious group 
                    of engineers with a broad range of IT solutions expertise. 
                    With decades of combined experience in machine learning, augmented reality, 
                    the Internet of Things, and mobile and online application development, 
                    we provide extensive knowledge to make your ideas a reality. 
                    With a strong background in business development and state-of-the-art 
                    engineering solutions, we are committed to turning your 
                    requirements into outstanding goods. You may rely on us as your unwavering,
                    trustworthy partner for IT solutions, dedicated to your success.
                    </p>
                </div>
            </div>
        </section>
        <Whyworkwithus />
    </>;
};

export default Index;


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
        images: ['/assets/images/pixium-logo.png'],
      },
    };
}