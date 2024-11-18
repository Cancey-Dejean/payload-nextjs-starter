import { BUTTON_SIZES, BUTTON_VARIANTS } from "@/constants";
import { Field } from "payload";

export const buttonField: Field = {
  name: "button",
  label: "Button ",
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
    {
      name: "variant",
      label: "Variant",
      type: "select",
      options: BUTTON_VARIANTS,
      defaultValue: "default",
    },
    {
      name: "size",
      label: "Size",
      type: "select",
      options: BUTTON_SIZES,
      defaultValue: "default",
    },
  ],
};
