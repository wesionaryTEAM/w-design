import type { Meta, StoryObj } from "@storybook/react";
import { Progress } from "./index";

const meta: Meta<typeof Progress> = {
  title: "Design System/Atoms/Progress",
  component: Progress,
  argTypes: {
    value: {
      control: {
        type: "number",
        min: 0,
        max: 100,
        defaultValue: 30,
      },
      description: "The value of the progress bar",
    },
    variant: {
      options: ["default", "primary", "secondary"],
      control: { type: "radio" },
      defaultValue: "default",
      description: "The variant of the progress bar",
    },
    size: {
      options: ["sm", "md", "lg", "xl"],
      control: { type: "radio" },
      defaultValue: "sm",
      description: "The size of the progress bar",
    },
    showPercentage: {
      description: "Show the percentage of the progress",
    },
    isRounded: {
      description: "Make the progress bar rounded",
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  args: {
    value: 30,
    variant: "default",
    size: "sm",
    showPercentage: false,
    isRounded: true,
    asChild: false,
  },
};

export const Primary: Story = {
  args: {
    ...Default.args,
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    ...Default.args,
    variant: "secondary",
  },
};

export const Small: Story = {
  args: {
    ...Default.args,
    size: "sm",
  },
};

export const Medium: Story = {
  args: {
    ...Default.args,
    size: "md",
  },
};

export const Large: Story = {
  args: {
    ...Default.args,
    size: "lg",
  },
};

export const ExtraLarge: Story = {
  args: {
    ...Default.args,
    size: "xl",
  },
};
