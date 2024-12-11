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

export function ServicePreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) {
  return (
      <div className="service-card gap-x-8" style={{margin:"20px", padding:"40px"}}>
        <div className="gap-x-8">
            <h3 className="text-lg mb-3 leading-snug">
              <Link
                as={`/services/${slug}`}
                href="/services/[slug]"
              >
                  <h2 className="mb-8 text-2xl md:text-4xl font-bold tracking-tighter">{title}</h2>
              </Link>
            </h3>
            <p className="text-2xl leading-relaxed mb-4">{excerpt}</p>
            {/* <Avatar name={author.name} picture={author.picture} /> */}
        </div>
        
      </div>
  );
}
