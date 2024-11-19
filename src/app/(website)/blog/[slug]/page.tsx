import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Media, Post } from "@/payload-types";
import Container from "@/components/ui/container";
import RichText from "@/blocks/RichText";
import { format } from "date-fns";
import { queryPostBySlug } from "@/lib/queries";
import Image from "next/image";
import { Suspense } from "react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  const post = await queryPostBySlug({
    slug,
  });

  const { title, description, image } = post?.meta || {};

  return {
    title: {
      template: "%s | Company Name",
      default: title || "",
    },
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

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  let post: Post | null;

  post = await queryPostBySlug({
    slug: resolvedParams.slug,
  });

  if (!post) {
    return notFound();
  }

  const { featuredImage, title, createdAt, body } = post;

  // console.log(post);

  return (
    <article className="prose max-w-full">
      <Container>
        <Suspense fallback={<div>Loading...</div>}>
          {featuredImage && (
            <div className="group relative mb-8 h-[500px] w-full overflow-hidden rounded-[44px]">
              <Image
                src={(featuredImage as Media)?.url || ""}
                alt={(featuredImage as Media)?.alt || ""}
                fill
                className="ken-burns m-0 object-cover"
              />
            </div>
          )}
        </Suspense>

        <h1>{title}</h1>

        {createdAt && (
          <p className="text-sm text-muted-foreground">
            {format(new Date(createdAt), "MMMM d, yyyy")}
          </p>
        )}

        <RichText content={body as any} />
      </Container>
    </article>
  );
}
