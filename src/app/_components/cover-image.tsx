import cn from "classnames";
import Link from "next/link";
import Image from "next/image";

type Props = {
  title: string;
  src: string;
  baseUrl: string;
  slug?: string;
};

const CoverImage = ({ title, src, baseUrl, slug }: Props) => {
  const image = (
    // <img src={src} alt={`Cover Image for ${title}`} style={{width:"70%"}} />
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn("w-full")}
      style={{width:"100%"}}
      width={900}
      height={900}
    />
  );
  
  return (
    <Link rel="canonical" as={`/${baseUrl}/${slug}`} href="/[baseUrl]/[slug]" aria-label={title}>
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
