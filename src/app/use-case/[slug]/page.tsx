import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getUseCaseBySlug, getAllUseCase } from "@/lib/api";
import { CMS_NAME } from "@/lib/constants";
import markdownToHtml from "@/lib/markdownToHtml";
import Alert from "@/app/_components/alert";
import Container from "@/app/_components/container";
import Header from "@/app/_components/header";
import { PostBody } from "@/app/_components/post-body";
import { PostHeader } from "@/app/_components/post-header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Whyworkwithus from "@/app/_components/whyworkwithus";
import Newsletter from "@/app/_components/newsletter";

export default async function Post({ params }: Params) {
  const post = getUseCaseBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  return (
    <>
      <section className="section service" id="service" aria-label="service">
        <Alert preview={post.preview} />
        <Link href="/use-case/"><FontAwesomeIcon icon={faArrowLeft}/> Back</Link>
        <Container>
          <h2 className="h2 section-title text-center">
                <span className="has-before">{post.title}</span>
            </h2>
          <article className="mb-32 grid grid-cols-1 md:grid-cols-2">
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

      <Newsletter />
    </>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Params): Metadata {
  const post = getUseCaseBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.title} | Pixium Digital`;

  return {
    title,
    openGraph: {
      title,
      images: [post.ogImage.url],
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllUseCase();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
