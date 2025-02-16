import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAdjacentService, getAllServices, getServiceBySlug } from "@/lib/api";
import { CMS_NAME } from "@/lib/constants";
import markdownToHtml from "@/lib/markdownToHtml";
import Alert from "@/app/_components/alert";
import Container from "@/app/_components/container";
import { PostBody } from "@/app/_components/post-body";
import Newsletter from "@/app/_components/newsletter";
import Whyworkwithus from "@/app/_components/whyworkwithus";
import Link from "next/link";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Process from "@/app/_components/process";
import { SITE_CONFIG, SUPPORTED_LOCALES } from "@/config/config";
import Script from "next/script";
import { generateBreadcrumbJSON, generateWebsiteJSON } from "@/utils/schema";
import { PrevNext } from "@/app/_components/prev-next";

export default async function Post({ params }: Params) {
  const post = getServiceBySlug(params.slug, params.locale);
  const { previous, next } = getAdjacentService(params.slug, params.locale);

  const messages = await import(`@/messages/${params.locale}.json`);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  // --------- JSON LD ----------------
  const canonicalUrl = `https://${SITE_CONFIG.domain}/${params.locale}/services/${post.slug}/`
  const jsonLd = generateWebsiteJSON(post.excerpt, post.title, canonicalUrl);
  const breadcrumbItems = [
    { name: 'Home', url: `https://${SITE_CONFIG.domain}/${params.locale}/` },
    { name: 'Services', url: `https://${SITE_CONFIG.domain}/${params.locale}/services/` },
    { name: `Services | ${post.slug}`, url: canonicalUrl }
  ];
  const breadcrumbJsonLd = generateBreadcrumbJSON(breadcrumbItems);
  // ----------------------------------

  return (<>
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
      <Link rel="canonical" href={"/"+params.locale+"/services/"}>
        <FontAwesomeIcon icon={faArrowLeft} height="20" className="inline-flex" /> {messages.button.back}
      </Link>
      <Container>
          <h1 className="h2 section-title text-center">
              <span className="has-before">{post.title}</span>
          </h1>
        <article className="mb-32">
          <div>
            <PostBody content={content} />
          </div>
          
        </article>
      </Container>

      <PrevNext 
          prevTitle={previous?.title}
          prevUrl={previous ? `/${params.locale}/services/${previous.slug}` : undefined }
          nextTitle={next?.title}
          nextUrl={next ? `/${params.locale}/services/${next.slug}` : undefined }
      />


    </section>
    <Process params={params} />
    <Whyworkwithus params={params} />
    <Newsletter params={params} />
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
  const post = getServiceBySlug(params.slug, params.locale);
  const description = `${post.excerpt}`;
  const canonicalUrl = `https://${SITE_CONFIG.domain}/${params.locale}/services/${post.slug}/`

  // Generate hreflang entries for all supported languages
  const languages = SUPPORTED_LOCALES.map(lang => ({
    [lang === 'en' ? 'x-default' : lang]: `https://${SITE_CONFIG.domain}/${lang}/services/${post.slug}/`,
  }));
  const alternates = {
    canonical: canonicalUrl,
    languages: Object.assign({}, ...languages),
  };

  if (!post) {
    return notFound();
  }
  const title = `${post.title} | Pixium Digital service`;

  return {
    title,
    description: description,
    alternates: alternates,
    openGraph: {
      title,
      type:"website",
      siteName: "Pixium Digital",
      url: canonicalUrl,
      description: description,
      images: [post.ogImage.url],
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
    const posts = getAllServices(locale);
    
    return posts.map((post) => ({
      locale: locale,
      slug: post.slug,
    }));
  });
}
