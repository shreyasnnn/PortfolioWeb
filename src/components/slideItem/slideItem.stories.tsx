import type { Meta, StoryObj } from '@storybook/react';
import { SlideItem } from './slideItem';

const meta: Meta<typeof SlideItem> = {
  title: 'Components/SlideItem',
  component: SlideItem,
  tags: ['autodocs'],
  argTypes: {
    className: { control: 'text' },
    text: { control: 'text' },
    children: { control: false }, // optional, since children can vary widely
  },
};

export default meta;

type Story = StoryObj<typeof SlideItem>;

export const Default: Story = {
  args: {
    text: 'This is a slide item',
  },
};

export const WithChildren: Story = {
  args: {
    text: 'Slide with extra content',
    children: <span className="text-sm text-blue-500">Extra Info</span>,
  },
};

export const CustomClass: Story = {
  args: {
    text: 'Styled Slide',
    className: 'bg-gray-100 rounded-md',
  },
};
