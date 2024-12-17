import RootLayout from './[locale]/layout';


export function generateStaticParams() {
  return [
      { locale: 'en' },
      { locale: 'fr' }
  ];
}


type Params = {
  params: {
    locale:string;
  };
};

// app/[locale]/not-found.tsx
export default function NotFound( {params} : Params) {

    if(!params.locale){
        params.locale = "en";
    };

    return (
      <RootLayout params={params}>
        <div> 
            <section className="section" id="home" aria-label="hero">
                <div className="container mt-4">
                    <div className='content-center mb-4'>
                      <img className="m-auto" src="/assets/images/404.png" width={400} title="pixium error" alt="pixium not found"/></div>
                    <h1 className='mt-4'>404 - Page Not Found :(</h1>
                    <p>The page you are looking for does not exist.</p>
                </div>
            </section>
        </div>
      </RootLayout>
    );
  }