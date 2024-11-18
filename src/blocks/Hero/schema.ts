import { Block } from "payload";
import { buttonField } from "@/lib/fields/buttonField";

export const Hero: Block = {
  slug: "hero",
  fields: [
    {
      name: "headline",
      label: "Headline",
      type: "text",
      defaultValue: "Section Title",
    },
    {
      name: "text",
      label: "Text",
      type: "textarea",
      defaultValue: "Text goes here...",
    },
    {
      name: "button",
      label: "Button",
      type: "array",
      fields: [buttonField],
      maxRows: 2,
    },
    {
      name: "image",
      label: "Image",
      type: "upload",
      relationTo: "media",
    },
  ],
};
