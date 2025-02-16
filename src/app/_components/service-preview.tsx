import { type Author } from "@/interfaces/author";
import Link from "next/link";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
  locale: string;
};

export function ServicePreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  locale
}: Props) {
  return (
      <div className="service-card gap-x-8" style={{margin:"20px", padding:"40px"}}>
        <div className="gap-x-8">
            <h3 className="text-lg mb-3 leading-snug">
              <Link
                rel="canonical"
                as={`/`+locale+`/services/${slug}`}
                href={"/"+locale+"/services/[slug]"}
              >
                  <h2 className="mb-8 text-2xl md:text-4xl font-bold tracking-tighter">{title}</h2>
              </Link>
            </h3>
            <p className="text-2xl leading-relaxed mb-4">{excerpt}</p>
        </div>
        
      </div>
  );
}
