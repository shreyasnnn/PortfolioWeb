import type { Meta, StoryObj } from "@storybook/react";
import SlideItem from "./SlideItem";

// ✅ Use typeof SlideItem to avoid type errors
const meta: Meta<typeof SlideItem> = {
  title: "Molecules/SlideItem",
  component: SlideItem,
  tags: ["autodocs"],
  argTypes: {
    bgColor: { control: "color" },
    width: { control: "text" },
    height: { control: "text" },
  },
};

export default meta;

// ✅ Define story object (modern Storybook format)
type Story = StoryObj<typeof SlideItem>;

export const Default: Story = {
  args: {
    src: "https://i.pravatar.cc/200?img=11",
    width: "180px",
    height: "240px",
  },
};

export const WithAccentBg: Story = {
  args: {
    src: "https://i.pravatar.cc/200?img=14",
    bgColor: "var(--color-fill_01)",
  },
};
