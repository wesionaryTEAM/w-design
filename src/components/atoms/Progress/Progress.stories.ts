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
      },
      description: "The value of the progress bar",
    },
    max: {
      description: "The maximum value of the progress bar",
      control: {
        type: "number",
        min: 0,
        max: 100,
      },
    },
    min: {
      description: "The minimum value of the progress bar",
      control: {
        type: "number",
        min: 0,
        max: 100,
      },
    },
    variant: {
      options: ["default", "primary", "secondary"],
      control: { type: "radio" },
      defaultValue: "default",
      description: "The variant of the progress bar",
    },
    size: {
      options: ["sm", "md"],
      control: { type: "radio" },
      defaultValue: "sm",
      description: "The size of the progress bar",
    },
    showValue: {
      description: "Show the value of the progress",
      control: {
        type: "boolean",
        defaultValue: false,
      },
    },
    isRounded: {
      description: "Make the progress bar rounded",
      control: {
        type: "boolean",
        defaultValue: true,
      },
    },
    valueUnit: {
      description: "The unit of the value",
      control: {
        type: "text",
        defaultValue: "%",
      },
    },
    error: {
      description: "The error message",
      control: {
        type: "text",
      },
    },
    errorClassName: {
      description: "The css class value for error",
      control: {
        type: "text",
      },
    },
    indicatorClassName: {
      description: "The css class value for progress indicator",
      control: {
        type: "text",
      },
    },
    valueClass: {
      description: "The css class value for progress",
      control: {
        type: "text",
      },
    },
    asChild: {
      table: {
        disable: true,
      },
    },
    fontSize: {
      table: {
        disable: true,
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  args: {
    value: 30,
    min: 0,
    max: 100,
    variant: "default",
    size: "sm",
    showValue: false,
    isRounded: true,
    valueUnit: "%",
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

export const WithValue: Story = {
  args: {
    ...Default.args,
    showValue: true,
  },
};

export const WithError: Story = {
  args: {
    ...Default.args,
    error: "Error message",
  },
};