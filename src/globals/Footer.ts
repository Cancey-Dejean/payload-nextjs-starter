import { VERSION_INTERVAL } from "@/constants";
import { linkField } from "@/lib/fields/linkField";

import { GlobalConfig } from "payload";

export const Footer: GlobalConfig = {
  slug: "footer",
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
      name: "logo",
      label: "Logo",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "footerContact",
      type: "group",
      fields: [
        {
          name: "title",
          label: "Title",
          type: "text",
        },
        {
          name: "email",
          label: "Email",
          type: "text",
        },
        {
          name: "phone",
          label: "Phone",
          type: "text",
        },
        {
          type: "row",
          fields: [
            {
              name: "street",
              label: "Street",
              type: "text",
              admin: {
                width: "25%",
              },
            },
            {
              name: "city",
              label: "City",
              type: "text",
              admin: {
                width: "25%",
              },
            },
            {
              name: "state",
              label: "State",
              type: "text",
              admin: {
                width: "25%",
              },
            },
            {
              name: "zip",
              label: "Zip",
              type: "text",
              admin: {
                width: "25%",
              },
            },
          ],
        },
      ],
    },
    {
      name: "copyright",
      label: "Copyright Text",
      type: "text",
    },
    {
      name: "legal",
      label: "Legal Links",
      type: "array",
      fields: [linkField],
    },
  ],
};
