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
};

export function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) {
  return (
      <div className="columns-2 gap-x-8" style={{background:"#f2f2f2", margin:"20px", padding:"40px"}}>
        <div className="gap-x-8">
            <h3 className="text-3xl mb-3 leading-snug">
              <Link
                as={`/posts/${slug}`}
                href="/posts/[slug]"
              >
                  <h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter">{title}</h2>
              </Link>
            </h3>
            <p className="text-3xl leading-relaxed mb-4">{excerpt}</p>
            {/* <Avatar name={author.name} picture={author.picture} /> */}
        </div>
        <div className="">
            <CoverImage slug={slug} title={title} src={coverImage} />
        </div>
        
      </div>
  );
}
