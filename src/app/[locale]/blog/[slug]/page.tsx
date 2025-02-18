import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllBlog, getBlogBySlug } from "@/lib/api";
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
import { PostHeader } from "@/app/_components/post-header";
import { SITE_CONFIG, SUPPORTED_LOCALES } from "@/config/config";
import { generateBreadcrumbJSON, generateWebsiteJSON } from "@/utils/schema";
import Script from "next/script";



export default async function Post({ params }: Params) {
  const post = getBlogBySlug(params.slug);

  const messages = await import(`@/messages/${params.locale}.json`);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  // --------- JSON LD ----------------
  const canonicalUrl = `https://${SITE_CONFIG.domain}/${params.locale}/blog/${post.slug}/`
  const jsonLd = generateWebsiteJSON(post.excerpt, post.title, canonicalUrl);
  const breadcrumbItems = [
    { name: messages.navigation.home, url: `https://${SITE_CONFIG.domain}/${params.locale}/` },
    { name: messages.navigation.blog, url: `https://${SITE_CONFIG.domain}/${params.locale}/blog/` },
    { name: `${messages.navigation.blog} | ${post.slug}`, url: canonicalUrl }
  ];
  const breadcrumbJsonLd = generateBreadcrumbJSON(breadcrumbItems);
  // ----------------------------------

  return (<>
    <section className="section service" id="blog" aria-label="blog">

          <Script
                id={"blog"+post.slug+"-jsonld"}
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
      <Link rel="canonical" href={"/"+params.locale+"/blog/"}>
        <FontAwesomeIcon icon={faArrowLeft} height="20" className="inline-flex" /> {messages.button.back}
      </Link>
      <Container>
          <h1 className="h2 section-title text-center">
              <span className="has-before">{post.title}</span>
          </h1>
        <article className="mb-32">
          <div>
            <PostHeader
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
            />
          </div>
          <div>
            <PostBody content={content} />
          </div>
        </article>
      </Container>
    </section>
    <Whyworkwithus params={params} />
    <Newsletter params={ params }/>
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
  const post = getBlogBySlug(params.slug);

  const canonicalUrl = `https://${SITE_CONFIG.domain}/${params.locale}/blog/${post.slug}/`

  if (!post) {
    return notFound();
  }

  // Generate hreflang entries for all supported languages
  const languages = SUPPORTED_LOCALES.map(lang => ({
    [lang === 'en' ? 'x-default' : lang]: `https://${SITE_CONFIG.domain}/${lang}/blog/${post.slug}/`,
  }));
  const alternates = {
    canonical: canonicalUrl,
    languages: Object.assign({}, ...languages),
  };


  const title = post.title;
  return {
    title,
    alternates: alternates,
    openGraph: {
      title: title,
      description: `${post.excerpt} | Pixium Digital Blog`,
      siteName: "Pixium Digital",
      url: canonicalUrl,
      type:"website",
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
  const posts = getAllBlog();

  // This will create combinations of each post with each locale
  return posts.flatMap((post) => 
    SUPPORTED_LOCALES.map((locale) => ({
      slug: post.slug,
      locale: locale,
    }))
  );
}
