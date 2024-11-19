import { notFound } from "next/navigation";
import { Media, Page } from "@/payload-types";
import { Metadata } from "next";
import { queryPageBySlug } from "@/lib/queries";

import AddContent from "@/utils/add-content";
import { RenderBlocks } from "@/utils/renderBlocks";
import { RefreshRouteOnSave } from "@payloadcms/live-preview-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.slug || "home";

  const page = await queryPageBySlug({
    slug,
  });

  const { title, description, image } = page?.meta || {};

  return {
    title: title,
    description: description,
    openGraph: {
      title: title || "",
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_SERVER_URL}/${(image as Media)?.url || ""}`,
        },
      ],
    },
  };
}

// revalidates every hour
// export const revalidate = 3600;

export default async function PageContent({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug || "home";
  let page: Page | null;

  page = await queryPageBySlug({
    slug,
  });

  if (!page) {
    return notFound();
  }

  const layout = page?.layout || [];

  // console.log(layout);

  return (
    <>
      {layout.length > 0 ? (
        layout.map((section, index) => (
          <RenderBlocks key={index} {...section} />
        ))
      ) : (
        <AddContent />
      )}
    </>
  );
}
