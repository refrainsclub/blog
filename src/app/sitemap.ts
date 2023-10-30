import { allPosts } from "contentlayer/generated";

export default async function sitemap() {
  const posts = allPosts.map((post) => ({
    url: `https://jamesblair.nz/blog/${post.slug}`,
    lastModified: post.date.split("T")[0],
  }));

  const routes = ["", "/blog", "/contact"].map((route) => ({
    url: `https://jamesblair.nz${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...posts];
}
