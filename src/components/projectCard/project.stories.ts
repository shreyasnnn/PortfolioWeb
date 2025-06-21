import type { Meta, StoryObj } from "@storybook/react";
import ProjectCard from "./projectCard";

const meta: Meta<typeof ProjectCard> = {
  title: "Molecules/ProjectCard",
  component: ProjectCard,
  tags: ["autodocs"],
  argTypes: {
    src: { control: "text" },
    title: { control: "text" },
    subtitle: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof ProjectCard>;

export const Default: Story = {
  args: {
    src: "https://i.ibb.co/Fbf5p4K/truck-demo.png",
    title: "Redefining waste",
    subtitle: "NAMTECH Textile Recycling Management",
  },
};
