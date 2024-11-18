import type { MetadataRoute } from "next";
import { getPayload } from "payload";
import config from "@payload-config";

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const payload = await getPayload({ config });

  const [pages, posts] = await Promise.all([
    payload.find({
      collection: "pages",
    }),
    payload.find({
      collection: "posts",
    }),
  ]);

  const allPages = pages.docs
    .filter((page) => page.slug !== "home")
    .map((page) => ({
      url: `${process.env.NEXT_PUBLIC_URL}/${page.slug}`,
    }));

  const allPosts = posts.docs.map((post: { slug: string | null }) => ({
    url: `${process.env.NEXT_PUBLIC_URL}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 0.5,
  }));

  return [
    {
      url: `${process.env.NEXT_PUBLIC_URL}`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    ...allPages,
    {
      url: `${process.env.NEXT_PUBLIC_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    ...allPosts,
  ];
}
