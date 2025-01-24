import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@whitespace/storybook-addon-html",
<<<<<<< HEAD
    "@storybook/addon-a11y",
=======
>>>>>>> 29e280c67443669fa79d1638d14f683a273bdde4
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
<<<<<<< HEAD
  staticDirs: ["../public", "../public/images"],
=======
  staticDirs: ["../public"],
>>>>>>> 29e280c67443669fa79d1638d14f683a273bdde4
};
export default config;
