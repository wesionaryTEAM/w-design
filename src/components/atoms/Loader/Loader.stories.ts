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

export const Default: Story = {};

export const PrimaryWithLoadingMessage: Story = {
  args: {
    color: "primary",
    message: "Loading...",
    direction: "clockwise",
    size: "small",
  },
};

export const SecondaryInAntiClockDirectionMovement: Story = {
  args: {
    color: "secondary",
    direction: "counter-clockwise",
  },
};

export const MediumWithLoadingMessage: Story = {
  args: {
    size: "medium",
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
