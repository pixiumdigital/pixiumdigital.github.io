import cn from "classnames";
import Link from "next/link";
import Image from "next/image";

type Props = {
  title: string;
  src: string;
  slug?: string;
};

const CoverImage = ({ title, src, slug }: Props) => {
  const image = (
    <img src={src} alt={`Cover Image for ${title}`} style={{width:"70%"}} />
    // <Image
    //   src={src}
    //   alt={`Cover Image for ${title}`}
    //   className={cn("shadow-sm w-full", {
    //     "hover:shadow-lg transition-shadow duration-200": slug,
    //   })}
    //   style={{width:"100%"}}
    //   width={100%}
    // />
  );
  
  return (
    <Link as={`/posts/${slug}`} href="/posts/[slug]" aria-label={title}>
          {image}
        </Link>
    // <div className="sm:mx-0">
    //   {slug ? (
    //     <Link as={`/posts/${slug}`} href="/posts/[slug]" aria-label={title}>
    //       {image}
    //     </Link>
    //   ) : (
    //     image
    //   )}
    // </div>
  );
};

export default CoverImage;
