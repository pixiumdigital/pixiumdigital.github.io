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

import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";


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
        <Link href="/use-case/">
          <FontAwesomeIcon icon={faArrowLeft} height="20" className="inline-flex" /> Back
        </Link>
        <Container>
          <h2 className="h2 section-title text-center">
                <span className="has-before">{post.title}</span>
            </h2>
          <article className="mb-32 grid grid-cols-1 md:grid-cols-1">
            <div style={{width:"60%"}} className="m-auto">
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
              />
            </div>

            <Card className="p-6 border-2 rounded-2xl">
                <CardHeader className="w-100">
                    <h1 className="w-100 text-4xl text-center">Project Details</h1>
                </CardHeader>
                <CardBody>
                  <hr></hr>
                  <div className="grid grid-cols-4 gap-4 mt-4 text-center">
                    <div>
                      <dt className="text-md text-muted-foreground text-gray-400">Client</dt>
                      <dd className="font-medium">{post.title}</dd>
                    </div>
                    <div>
                      <dt className="text-md text-muted-foreground text-gray-400">Industry</dt>
                      <dd className="font-medium">{post.industry}</dd>
                    </div>
                    <div>
                      <dt className="text-md text-muted-foreground text-gray-400">Location</dt>
                      <dd className="font-medium">{post.location}</dd>
                    </div>
                    <div>
                      <dt className="text-md text-muted-foreground text-gray-400">Platform</dt>
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
      </section>

      <Newsletter />
    </>
  );
}

type Params = {
  params: {
    slug: string;
    // locale:string;
  };
};

export function generateMetadata({ params }: Params): Metadata {
  const post = getUseCaseBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.title} | Pixium Digital use case`;

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

  // const pages = ['en', 'fr'];
  // return pages.map((page) => ({ locale: page }));

  return posts.map((post) => ({
    slug: post.slug,
    // locale: 'en'
  }));
}
