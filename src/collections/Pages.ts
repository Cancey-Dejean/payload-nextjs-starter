import { Hero } from "@/blocks/Hero/schema";
import { VERSION_INTERVAL } from "@/constants";
import { generatePreviewPath } from "@/utils/generatePreviewPath";

import { CollectionConfig } from "payload";
import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from "@payloadcms/plugin-seo/fields";
import { slugField } from "@/lib/fields/slug";
import { getServerSideURL } from "@/utils/getURL";

export const Pages: CollectionConfig = {
  slug: "pages",
  admin: {
    useAsTitle: "title",
    livePreview:
      process.env.NODE_ENV === "development"
        ? {
            url: ({ data }) =>
              `${getServerSideURL()}${data?.slug ? `/${data.slug}` : "/"}`,
          }
        : undefined,
  },
  versions: VERSION_INTERVAL,
  fields: [
    {
      name: "title",
      label: "Title",
      type: "text",
      required: true,
    },
    {
      type: "tabs",
      tabs: [
        {
          fields: [
            {
              name: "layout",
              label: "Layout",
              type: "blocks",
              blocks: [Hero],
            },
          ],
          label: "Content",
        },
        {
          name: "meta",
          label: "SEO",
          fields: [
            OverviewField({
              titlePath: "meta.title",
              descriptionPath: "meta.description",
              imagePath: "meta.image",
            }),
            MetaTitleField({
              hasGenerateFn: true,
            }),
            MetaImageField({
              relationTo: "media",
            }),

            MetaDescriptionField({}),
            PreviewField({
              // if the `generateUrl` function is configured
              hasGenerateFn: true,

              // field paths to match the target field for data
              titlePath: "meta.title",
              descriptionPath: "meta.description",
            }),
          ],
        },
      ],
    },
    {
      name: "publishedAt",
      type: "date",
      admin: {
        position: "sidebar",
      },
    },
    ...slugField(),
    // {
    //   name: "slug",
    //   label: "Slug",
    //   type: "text",
    //   unique: true,
    //   required: true,
    //   admin: {
    //     position: "sidebar",
    //     // condition: (data) => Boolean(data?.title),
    //   },
    // },
    // slugGeneratorField,
    // {
    //   name: "layout",
    //   label: "Layout",
    //   type: "blocks",
    //   blocks: [Hero],

    // },
  ],
};
