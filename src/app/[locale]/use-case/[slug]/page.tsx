import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getUseCaseBySlug, getAllUseCase, getAdjacentUseCases } from "@/lib/api";
import { CMS_NAME } from "@/lib/constants";
import markdownToHtml from "@/lib/markdownToHtml";
import Alert from "@/app/_components/alert";
import Container from "@/app/_components/container";
import Header from "@/app/_components/header";
import { PostBody } from "@/app/_components/post-body";
import { PostHeader } from "@/app/_components/post-header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Whyworkwithus from "@/app/_components/whyworkwithus";
import Newsletter from "@/app/_components/newsletter";

import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import { SITE_CONFIG, SUPPORTED_LOCALES } from "@/config/config";
import { PrevNext } from "@/app/_components/prev-next";
import { generateBreadcrumbJSON, generateWebsiteJSON } from "@/utils/schema";
import Script from "next/script";


export default async function Post({ params }: Params) {
  const post = getUseCaseBySlug(params.slug, params.locale);

  const { previous, next } = getAdjacentUseCases(params.slug, params.locale);

  if (!post) {
    return notFound();
  }

  const messages = await import(`@/messages/${params.locale}.json`);

  const content = await markdownToHtml(post.content || "");

  // --------- JSON LD ----------------
    const canonicalUrl = `https://${SITE_CONFIG.domain}/${params.locale}/use-case/${post.slug}/`
    const jsonLd = generateWebsiteJSON(post.excerpt, post.title, canonicalUrl);
    const breadcrumbItems = [
      { name: 'Home', url: `https://${SITE_CONFIG.domain}/${params.locale}/` },
      { name: 'Use Case', url: `https://${SITE_CONFIG.domain}/${params.locale}/use-case/` },
      { name: `Use Case | ${post.slug}`, url: canonicalUrl }
    ];
    const breadcrumbJsonLd = generateBreadcrumbJSON(breadcrumbItems);
    // ----------------------------------

  return (
    <>
      <section className="section service" id="service" aria-label="service">

            <Script
                id={"services"+post.slug+"-jsonld"}
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                strategy="beforeInteractive" // Can control when the script loads
            />
            <Script
                id="breadcrumb-jsonld"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
                strategy="beforeInteractive"
            />


        <Alert preview={post.preview} />



        <Link rel="canonical" href={"/"+params.locale+"/use-case/"}>
          <FontAwesomeIcon icon={faArrowLeft} height="20" className="inline-flex" /> {messages.button.back}
        </Link>
        <Container>
          <h1 className="h2 section-title text-center">
                <span className="has-before">{post.title}</span>
            </h1>
          <article className="mb-32 grid grid-cols-1 md:grid-cols-1">
            <div style={{width:"60%"}} className="m-auto">
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
              />
            </div>

            <Card className="p-6 border-2 rounded-2xl bg-white">
                <CardHeader className="w-100">
                    <h2 className="w-100 text-4xl text-center">{messages.usecase.details}</h2>
                </CardHeader>
                <CardBody>
                  <hr></hr>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 text-center">
                    <div>
                      <dt className="text-md text-muted-foreground text-gray-400">{messages.usecase.client}</dt>
                      <dd className="font-medium">{post.title}</dd>
                    </div>
                    <div>
                      <dt className="text-md text-muted-foreground text-gray-400">{messages.usecase.industry}</dt>
                      <dd className="font-medium">{post.industry}</dd>
                    </div>
                    <div>
                      <dt className="text-md text-muted-foreground text-gray-400">{messages.usecase.location}</dt>
                      <dd className="font-medium">{post.location}</dd>
                    </div>
                    <div>
                      <dt className="text-md text-muted-foreground text-gray-400">{messages.usecase.platform}</dt>
                      <dd className="font-medium">{post.platform}</dd>
                    </div>
                  </div>
                </CardBody>
              </Card>

              <div>
                <PostBody content={content} />
              </div>
          </article>
        </Container>


      <PrevNext 
                prevTitle={previous?.title}
                prevUrl={previous ? `/${params.locale}/use-case/${previous.slug}/` : undefined }
                nextTitle={next?.title}
                nextUrl={next ? `/${params.locale}/use-case/${next.slug}/` : undefined }
            />
        
      </section>

      <Newsletter params={params}/>
    </>
  );
}

type Params = {
  params: {
    slug: string;
    locale:string;
  };
};

export function generateMetadata({ params }: Params): Metadata {
  const post = getUseCaseBySlug(params.slug, params.locale);

  const canonicalUrl = `https://${SITE_CONFIG.domain}/${params.locale}/use-case/${post.slug}/`

  if (!post) {
    return notFound();
  }
  
  const title = `${post.title} | Pixium Digital: Use cases`;
  const description = `Pixium Digital: ${post.excerpt}`;

  const ogImageUrl = `${process.env.NODE_ENV === 'production' ? 'https://pixiumdigital.com' : ''}`;

  // Generate hreflang entries for all supported languages
  const languages = SUPPORTED_LOCALES.map(lang => ({
    [lang === 'en' ? 'x-default' : lang]: `https://${SITE_CONFIG.domain}/${lang}/use-case/${post.slug}/`,
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
      title,
      description: post.excerpt,
      siteName: "Pixium Digital",
      url: canonicalUrl,
      type:"website",
      images: [ogImageUrl+'/'+post.ogImage.url],
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      site: canonicalUrl,
      description: post.excerpt,
      images: [`https://${SITE_CONFIG.domain}/assets/images/pixium-logo.webp`],
    },
  };
}

export async function generateStaticParams() {
  // First loop through locales, then get posts for each locale
  return SUPPORTED_LOCALES.flatMap((locale) => {
    // Reload posts for each locale
    const posts = getAllUseCase(locale);
    
    return posts.map((post) => ({
      locale: locale,
      slug: post.slug,
    }));
  });
}
