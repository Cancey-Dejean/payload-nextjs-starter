import config from "@payload-config";
import { cache } from "react";
import { getPayload } from "payload";

export const queryPageBySlug = cache(async ({ slug }: { slug: string }) => {
  const payload = await getPayload({ config });

  const pages = await payload.find({
    collection: "pages",
    limit: 1,
    where: {
      slug: {
        equals: slug,
      },
    },
    select: {
      id: true,
      slug: true,
      layout: true,
      meta: true,
    },
    draft: true,
  });

  return pages.docs?.[0] || null;
});

export const queryPostBySlug = cache(async ({ slug }: { slug: string }) => {
  const payload = await getPayload({ config });

  const posts = await payload.find({
    collection: "posts",
    limit: 1,
    where: {
      slug: {
        equals: slug,
      },
    },
    select: {
      id: true,
      createdBy: true,
      _status: true,
      layout: true,
      createdAt: true,
      updatedAt: true,
      body: true,
      slug: true,
      meta: true,
      title: true,
      featuredImage: true,
    },
    populate: {
      users: {
        name: true,
      },
    },
  });

  return posts.docs?.[0] || null;
});
