import { Field } from "payload";

export const slugGeneratorField: Field = {
  name: "slugGenerator",
  type: "ui",
  admin: {
    position: "sidebar",
    components: {
      Field: "/utils/slug-generator",
    },
  },
};
