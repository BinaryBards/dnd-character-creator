import LandingLayout from "./LandingLayout";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: "Layouts/LandingLayout",
  component: LandingLayout,
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
  args: {
    children: "MY LANDING PAGE",
  },
};
