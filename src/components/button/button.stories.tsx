import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";
import { ArrowRight, ArrowLeft } from "lucide-react";

const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    size: { control: "radio", options: ["sm", "md", "lg"] },
    disabled: { control: "boolean" },
    borderRadius: { control: "text" },
    iconPosition: { control: "radio", options: ["left", "right"] },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    label: "Click Me",
  },
};

export const WithRightIcon: Story = {
  args: {
    label: "Next",
    icon: <ArrowRight size={16} />,
    iconPosition: "right",
  },
};

export const WithLeftIcon: Story = {
  args: {
    label: "Back",
    icon: <ArrowLeft size={16} />,
    iconPosition: "left",
  },
};

export const CustomRadius: Story = {
  args: {
    label: "Rounded",
    borderRadius: "50px",
  },
};

export const Disabled: Story = {
  args: {
    label: "Can't Click",
    disabled: true,
  },
};
