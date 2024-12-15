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
import { Process } from "@/app/_components/process";

export default async function Post({ params }: Params) {
  const post = getServiceBySlug(params.slug);

  const messages = await import(`@/messages/${params.locale}.json`);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  return (<>
    <section className="section service" id="service" aria-label="service">
      <Alert preview={post.preview} />
      <Link href={"/"+params.locale+"/services/"}>
        <FontAwesomeIcon icon={faArrowLeft} height="20" className="inline-flex" /> {messages.button.back}
      </Link>
      <Container>
        <h2 className="h2 section-title text-center">
              <span className="has-before">{post.title}</span>
          </h2>
        <article className="mb-32">
          <div>
            <PostBody content={content} />
          </div>
          
        </article>
      </Container>
    </section>
    <Process />
    <Whyworkwithus />
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
  const post = getServiceBySlug(params.slug);

  if (!post) {
    return notFound();
  }
  const title = `${post.title} | Pixium Digital service`;
  return {
    title,
    openGraph: {
      title,
      images: [post.ogImage.url],
    },
  };
}


export async function generateStaticParams() {
  const posts = getAllServices();

  const locales = ['en', 'fr'];

  return posts.flatMap((post) => 
    locales.map((locale) => ({
      slug: post.slug,
      locale: locale,
    }))
  );
}
