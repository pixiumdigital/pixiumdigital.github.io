import { Post } from "@/interfaces/post";
import { PostPreview } from "./post-preview";
import { ServicePreview } from "./service-preview";
import { BlogPreview } from "./blog-preview";
import { SUPPORTED_LOCALES } from "@/config/config";

export function generateStaticParams() {
    return SUPPORTED_LOCALES.map((locale: any) => ({ locale }));
}


type Props = {
  posts: Post[];
  locale:string;
};

export function MoreStories({ posts, locale }: Props) {
  return (
    <section>
      <div className="grid gap-y-16 grid-cols-1 lg:grid-cols-2">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
            locale={locale}
          />
        ))}
      </div>
    </section>
  );
}

export function MoreServices({ posts, locale }: Props) {
  return (
    <section>
      <div className="grid gap-y-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <ServicePreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
            locale={locale}
          />
        ))}
      </div>
    </section>
  );
}



export function MoreBlog({ posts, locale }: Props) {
  return (
    <section>
      <div className="grid gap-y-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <BlogPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
            locale={locale}
          />
        ))}
      </div>
    </section>
  );
}
