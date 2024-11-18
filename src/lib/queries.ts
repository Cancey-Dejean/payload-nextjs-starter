import config from "@payload-config";
import { cache } from "react";
import { getPayload } from "payload";

export const queryPageBySlug = cache(async ({ slug }: { slug: string }) => {
  const payload = await getPayload({ config });

  const result = await payload.find({
    collection: "pages",
    limit: 1,
    where: {
      slug: {
        equals: slug,
      },
    },
    draft: true,
  });

  return result.docs?.[0] || null;
});

export const queryPostBySlug = cache(async ({ slug }: { slug: string }) => {
  const parsedSlug = decodeURIComponent(slug);
  const payload = await getPayload({ config });

  const result = await payload.find({
    collection: "posts",
    limit: 1,
    where: {
      slug: {
        equals: parsedSlug,
      },
    },
  });

  return result.docs?.[0] || null;
});
