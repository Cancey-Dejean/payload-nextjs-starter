import { VERSION_INTERVAL } from "@/constants";
import { GlobalConfig } from "payload";

export const Header: GlobalConfig = {
  slug: "header",
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
    },
    {
      name: "primaryMenu",
      label: "Primary Menu",
      type: "array",
      minRows: 1,
      maxRows: 5,
      fields: [
        {
          name: "label",
          label: "Label",
          type: "text",
        },
        {
          name: "url",
          label: "URL",
          type: "text",
        },
        {
          name: "newTab",
          label: "Open in new tab?",
          type: "checkbox",
        },
      ],
    },
    {
      name: "secondaryMenu",
      label: "Secondary Menu",
      type: "array",
      maxRows: 2,
      fields: [
        {
          name: "label",
          label: "Label",
          type: "text",
        },
        {
          name: "url",
          label: "URL",
          type: "text",
        },
        {
          name: "variant",
          label: "Variant",
          type: "select",
          options: ["default", "outline", "dark"],
          defaultValue: "default",
        },
        {
          name: "newTab",
          label: "Open in new tab?",
          type: "checkbox",
        },
      ],
    },
  ],
};
