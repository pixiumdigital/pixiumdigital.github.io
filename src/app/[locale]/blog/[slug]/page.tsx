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



export default async function Post({ params }: Params) {
  const post = getBlogBySlug(params.slug);

  const messages = await import(`@/messages/${params.locale}.json`);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  return (<>
    <section className="section service" id="blog" aria-label="blog">
      <Alert preview={post.preview} />
      <Link href={"/"+params.locale+"/blog/"}>
        <FontAwesomeIcon icon={faArrowLeft} height="20" className="inline-flex" /> {messages.button.back}
      </Link>
      <Container>
        <h2 className="h2 section-title text-center">
              <span className="has-before">{post.title}</span>
          </h2>
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

  if (!post) {
    return notFound();
  }
  const title = `${post.title} | Pixium Digital service`;
  return {
    title,
    openGraph: {
      title,
      type:"website",
      images: [post.ogImage.url],
    },
  };
}


export async function generateStaticParams() {
  const posts = getAllBlog();
  const locales = ['en', 'fr'];

  // This will create combinations of each post with each locale
  return posts.flatMap((post) => 
    locales.map((locale) => ({
      slug: post.slug,
      locale: locale,
    }))
  );
}
