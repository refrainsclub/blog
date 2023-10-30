import { Mdx } from "@/components/mdx";
import { allPosts } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata | undefined> {
  const post = allPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return;
  }

  const {
    title,
    date: publishedTime,
    summary: description,
    image,
    slug,
  } = post;

  const ogImage = image
    ? `https://jamesblair.nz${image}`
    : `https://jamesblair.nz/og?title=${encodeURIComponent(
        title,
      )}&description=${encodeURIComponent(description)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `https://jamesblair.nz/blog/${slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Article({ params }: { params: { slug: string } }) {
  const post = allPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return notFound();
  }

  return (
    <main className="container mx-auto">
      <h1 className="text-2xl font-semibold">{post.title}</h1>
      <p className="mb-6 text-muted-foreground">
        {format(parseISO(post.date), "LLLL d, yyyy")}
      </p>
      <Mdx code={post.body.code} />
    </main>
  );
}
