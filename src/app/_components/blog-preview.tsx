import { type Author } from "@/interfaces/author";
import Link from "next/link";
import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
  locale: string;
};

export function BlogPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  locale
}: Props) {
  return (
    <div className="service-card columns-1gap-x-8" style={{margin:"20px", padding:"40px"}}>
        <div className="mb-4">
            <CoverImage slug={slug} title={title} src={coverImage} baseUrl={locale+"/blog"} />
        </div>
        <div className="gap-x-8">
            <h3 className="text-3xl mb-3 leading-snug">
            <Link
                as={`/`+locale+`/blog/${slug}`}
                href={"/"+locale+"/blog/[slug]"}
            >
                <h2 className="mb-8 text-3xl md:text-3xl font-bold tracking-tighter">{title}</h2>
            </Link>
            </h3>
            <p className="text-2xl text-justify leading-relaxed mb-4">{excerpt}</p>
            {/* <Avatar name={author.name} picture={author.picture} /> */}
        </div>
    </div>
  )
}
