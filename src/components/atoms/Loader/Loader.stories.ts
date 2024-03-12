// Loader.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { Loader } from "./index";

const meta: Meta<typeof Loader> = {
  title: "Design System/Atoms/Loader",
  component: Loader,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Loader>;

export const Primary: Story = {
  args: {
    color: "primary",
    message: "Loading...",
    direction: "clockwise",
    size: "medium",
  },
};

export const Secondary: Story = {
  args: {
    color: "secondary",
    message: "Please wait...",
    direction: "counter-clockwise",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    message: "Loading...",
    direction: "clockwise",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    message: "Loading...",
    direction: "clockwise",
  },
};

export const WithCustomMessage: Story = {
  args: {
    message: "Custom message...",
    direction: "clockwise",
  },
};
