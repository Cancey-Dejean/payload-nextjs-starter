// import { Cover } from "@/blocks/Cover/schema";

import RichText from "@/blocks/RichText";
import { VERSION_INTERVAL } from "@/constants";
import { isAdminOrCreatedBy } from "@/lib/access/isAdminOrCreatedBy";
import { isAdminOrEditorOrCreatedBy } from "@/lib/access/isAdminOrEditorOrCreatedBy";
import { slugGeneratorField } from "@/lib/fields/slugGeneratorField";
import { getServerSideURL } from "@/utils/getURL";

import { CollectionConfig } from "payload";

export const Posts: CollectionConfig = {
  slug: "posts",
  admin: {
    useAsTitle: "title",
  },
  access: {
    read: isAdminOrEditorOrCreatedBy,
    update: isAdminOrEditorOrCreatedBy,
    delete: isAdminOrCreatedBy,
  },
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
      },
    },
    slugGeneratorField,
    {
      name: "createdBy",
      type: "relationship",
      relationTo: "users",
      access: {
        update: () => false,
      },
      admin: {
        readOnly: true,
        position: "sidebar",
        condition: (data) => Boolean(data?.createdBy),
      },
    },
    {
      name: "featuredImage",
      label: "Featured Image",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "body",
      label: "Body",
      type: "richText",
    },
  ],
  hooks: {
    beforeChange: [
      ({ req, operation, data }) => {
        if (operation === "create") {
          if (req.user) {
            data.createdBy = req.user.id;
            return data;
          }
        }
      },
    ],
  },
  versions: VERSION_INTERVAL,
};
