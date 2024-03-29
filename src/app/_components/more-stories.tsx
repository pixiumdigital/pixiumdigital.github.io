import { Post } from "@/interfaces/post";
import { PostPreview } from "./post-preview";
import { ServicePreview } from "./service-preview";

type Props = {
  posts: Post[];
};

export function MoreStories({ posts }: Props) {
  return (
    <section>
      <div className="grid grid-cols-2 gap-y-16">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  );
}

export function MoreServices({ posts }: Props) {
  return (
    <section>
      <div className="grid grid-cols-3 gap-y-16">
        {posts.map((post) => (
          <ServicePreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  );
}
