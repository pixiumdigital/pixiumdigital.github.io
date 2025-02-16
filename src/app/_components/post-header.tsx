import { type Author } from "@/interfaces/author";
import Image from "next/image";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: Author;
};

export function PostHeader({ title, coverImage, date, author }: Props) {
  return (
    <>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <Image
          src={coverImage}
          alt={`Cover Image for ${title}`}
          style={{width:"100%"}}
          width={900}
          height={900}
        />
      </div>
    </>
  );
}
