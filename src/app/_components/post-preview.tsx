import { type Author } from "@/interfaces/author";
import Link from "next/link";
import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";

export function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'fr' }
  ];
}

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
  locale: string;
};

export function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  locale
}: Props) {
  return (
      <div className="service-card columns-1 md:columns-2 gap-x-8" style={{margin:"20px", padding:"40px"}}>
        <div className="gap-x-8">
            <h3 className="text-3xl mb-3 leading-snug">
              <Link
                rel="canonical"
                as={`/`+locale+`/use-case/${slug}`}
                href={"/"+locale+"/use-case/[slug]"}
              >
                  <h2 className="mb-8 text-3xl md:text-3xl font-bold tracking-tighter">{title}</h2>
              </Link>
            </h3>
            <p className="text-2xl leading-relaxed mb-4 d-flex" style={{display:"flex", textAlign:"left"}}>{excerpt}</p>
            {/* <Avatar name={author.name} picture={author.picture} /> */}
        </div>
        <div className="">
            <CoverImage slug={slug} title={title} src={coverImage} baseUrl={locale+"/use-case"} />
        </div>
        
      </div>
  );
}
