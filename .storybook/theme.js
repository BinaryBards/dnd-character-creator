import { create } from "@storybook/theming/create";

export default create({
  base: "dark",
  // Typography
  fontBase: '"Roboto", "Open Sans", sans-serif',
  fontCode: "monospace",

  brandTitle: "Rapid D&D Storybook",
  brandUrl: "localhost:3000",
  brandImage: "/horizontal-logo.svg",
  brandTarget: "_self",

  colorPrimary: "#42E695",
  colorSecondary: "#585C6D",
});
