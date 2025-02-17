import { type Author } from "@/interfaces/author";
import Link from "next/link";
import CoverImage from "./cover-image";
import { SUPPORTED_LOCALES } from "@/config/config";

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale: any) => ({ locale }));
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
      <div className="service-card columns-1 md:columns-2 gap-x-8 m-5 p-10">
        <div className="gap-x-8">
            <div className="text-3xl mb-3 leading-snug">
              <Link
                rel="canonical"
                as={`/`+locale+`/use-case/${slug}`}
                href={"/"+locale+"/use-case/[slug]"}
              >
                  <h2 className="mb-8 text-3xl md:text-3xl font-bold tracking-tighter">{title}</h2>
              </Link>
            </div>
            <p className="text-2xl leading-relaxed mb-4 d-flex" style={{display:"flex", textAlign:"left"}}>{excerpt}</p>
        </div>
        <div className="">
            <CoverImage slug={slug} title={title} src={coverImage} baseUrl={locale+"/use-case"} />
        </div>
        
      </div>
  );
}
