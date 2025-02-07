import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllServices, getServiceBySlug } from "@/lib/api";
import { CMS_NAME } from "@/lib/constants";
import markdownToHtml from "@/lib/markdownToHtml";
import Alert from "@/app/_components/alert";
import Container from "@/app/_components/container";
import { PostBody } from "@/app/_components/post-body";
import Newsletter from "@/app/_components/newsletter";
import Whyworkwithus from "@/app/_components/whyworkwithus";
import Link from "next/link";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Process from "@/app/_components/process";
import { SITE_CONFIG, SUPPORTED_LOCALES } from "@/config/config";

export default async function Post({ params }: Params) {
  const post = getServiceBySlug(params.slug, params.locale);

  const messages = await import(`@/messages/${params.locale}.json`);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  return (<>
    <section className="section service" id="service" aria-label="service">
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
  const canonicalUrl = `https://${SITE_CONFIG.domain}/${params.locale}/services/${post.slug}`


  const locales = ['en', 'fr'];
  // Generate hreflang entries for all supported languages
  const languages = locales.map(lang => ({
    [lang === 'en' ? 'x-default' : lang]: `https://${SITE_CONFIG.domain}/${lang}/services/${post.slug}`,
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
