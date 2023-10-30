import { allPosts } from "contentlayer/generated";
import { compareDesc, format, parseISO } from "date-fns";
import Link from "next/link";

export default function Blog() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  );

  return (
    <main className="container mx-auto">
      <h1 className="mb-6 text-2xl font-semibold">Blog</h1>
      {posts.map((post) => (
        <Link key={post.title} href={`/blog/${post.slug}`}>
          <div className="flex w-full flex-col">
            <p>{post.title}</p>
            <p className="text-muted-foreground">
              {format(parseISO(post.date), "LLLL d, yyyy")}
            </p>
          </div>
        </Link>
      ))}
    </main>
  );
}
