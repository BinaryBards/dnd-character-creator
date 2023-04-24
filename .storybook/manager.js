import { addons } from "@storybook/manager-api";

import theme from "./theme";

// Set custom theme for Storybook
addons.setConfig({
  theme,
});
