import { Hero } from "@/blocks/Hero/schema";
import { VERSION_INTERVAL } from "@/constants";
import { slugGeneratorField } from "@/lib/fields/slugGeneratorField";
import { CollectionConfig } from "payload";

export const Pages: CollectionConfig = {
  slug: "pages",
  admin: {
    useAsTitle: "title",
  },
  access: {
    read: ({ req }) => {
      // If there is a user logged in,
      // let them retrieve all documents
      if (req.user) return true;

      // If there is no user,
      // restrict the documents that are returned
      // to only those where `_status` is equal to `published`
      // or where `_status` does not exist
      return {
        or: [
          {
            _status: {
              equals: "published",
            },
          },
          {
            _status: {
              exists: false,
            },
          },
        ],
      };
    },
  },
  versions: VERSION_INTERVAL,
  fields: [
    {
      name: "title",
      label: "Title",
      type: "text",
      required: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "slug",
      label: "Slug",
      type: "text",
      unique: true,
      required: true,
      admin: {
        position: "sidebar",
        // condition: (data) => Boolean(data?.title),
      },
    },
    slugGeneratorField,
    {
      name: "layout",
      label: "Layout",
      type: "blocks",
      blocks: [Hero],
      required: true,
    },
  ],
};
