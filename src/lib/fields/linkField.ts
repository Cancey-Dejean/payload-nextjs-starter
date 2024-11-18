import { Field } from "payload";

export const linkField: Field = {
  name: "link",
  type: "group",
  fields: [
    {
      name: "label",
      label: "Label",
      type: "text",
      required: true,
      defaultValue: "Button",
    },
    {
      name: "url",
      label: "Url:",
      type: "text",
      required: true,
      defaultValue: "#",
    },
    {
      name: "newTab",
      label: "Open in new tab?",
      type: "checkbox",
      defaultValue: false,
    },
  ],
};
