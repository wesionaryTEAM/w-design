import type { Meta, StoryObj } from "@storybook/react";
import { Slider } from "./index";

const meta: Meta<typeof Slider> = {
  title: "Design System/Atoms/Slider",
  component: Slider,
  tags: ["autodocs"],
  argTypes: {
    defaultValue: {
      description: "The default value of the slider",
    },
    min: {
      description: "The minimum value of the slider",
    },
    max: {
      description: "The maximum value of the slider",
    },
    step: {
      description: "The step value of the slider",
    },
    verticalHeight: {
      description: "The height of the vertical slider in px",
      control: { type: "text", defaultValue: "200px" },
      defaultValue: "200px",
    },
    variant: {
      options: ["default", "primary", "secondary"],
      control: { type: "radio", defaultValue: "default" },
      defaultValue: "default",
      description: "The variant of the slider",
    },
    size: {
      options: ["sm", "md"],
      control: { type: "radio", defaultValue: "sm" },
      defaultValue: "sm",
      description: "The size of the slider",
    },
    isRounded: {
      control: { type: "boolean", defaultValue: true },
      defaultValue: true,
      description: "Make the slider bar rounded",
    },
    isVertical: {
      control: { type: "boolean", defaultValue: false },
      defaultValue: false,
      description: "Make the slider vertical",
    },
    showValue: {
      control: { type: "boolean", defaultValue: true },
      defaultValue: true,
      description: "Show the value of the slider",
    },
    error: {
      description: "The error message of the slider",
      control: {
        type: "text",
      }
    },
    prefixIcon: {
      description: "The prefix icon of the slider",
      control: {
        type: "object",
        defaultValue: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 8a5 5 0 0 1 0 8m-9-1H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h2l3.5-4.5A.8.8 0 0 1 11 5v14a.8.8 0 0 1-1.5.5z" /></svg>,
      }
    },
    suffixIcon: {
      description: "The suffix icon of the slider",
      control: {
        type: "object",
        defaultValue: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 8a5 5 0 0 1 0 8m2.7-11a9 9 0 0 1 0 14M6 15H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h2l3.5-4.5A.8.8 0 0 1 11 5v14a.8.8 0 0 1-1.5.5z" /></svg>
      }
    },
    trackClassName: {
      description: "The class name of the track",
      control: {
        type: "text",
      }
    },
    rangeClassName: {
      description: "The class name of the range",
      control: {
        type: "text",
      }
    },
    thumbClassName: {
      description: "The class name of the thumb",
      control: {
        type: "text",
      }
    },
    errorClass: {
      description: "The class name of the error",
      control: {
        type: "text",
      }
    },
    asChild: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Slider>;
export const Default: Story = {
  args: {
    min: 0,
    max: 100,
    step: 10,
    defaultValue: [20],
    isRounded: true,
    variant: "default",
    size: "sm",
    showValue: false,
  },
};


export const Primary: Story = {
  args: {
    size: "sm",
    variant: "primary",
    min: 0,
    max: 100,
    step: 10,
  },
};

export const Secondary: Story = {
  args: {
    size: "sm",
    variant: "secondary",
    min: 0,
    max: 100,
    step: 10,
  },
};

export const Medium: Story = {
  args: {
    size: "md",
    min: 0,
    max: 100,
    step: 10,
  },
};

export const NotRounded: Story = {
  args: {
    size: "sm",
    isRounded: false,
    min: 0,
    max: 100,
    step: 10,
  },
};

export const VerticalWithValueAndError: Story = {
  args: {
    size: "sm",
    isVertical: true,
    verticalHeight: "200px",
    showValue: true,
    min: 0,
    max: 100,
    step: 10,
    error: "This is an error message",
  },
  decorators: [
    (Story) => (
      <div style={{
        height: "250px",
      }}>
        <Story />
      </div>
    ),
  ]
};

export const WithIcons: Story = {
  args: {
    size: "sm",
    min: 0,
    max: 100,
    step: 10,
    showValue: true,
    prefixIcon: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 8a5 5 0 0 1 0 8m-9-1H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h2l3.5-4.5A.8.8 0 0 1 11 5v14a.8.8 0 0 1-1.5.5z" /></svg>,
    suffixIcon: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 8a5 5 0 0 1 0 8m2.7-11a9 9 0 0 1 0 14M6 15H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h2l3.5-4.5A.8.8 0 0 1 11 5v14a.8.8 0 0 1-1.5.5z" /></svg>
  },
};

export const WithError: Story = {
  args: {
    size: "sm",
    min: 0,
    max: 100,
    step: 10,
    error: "This is an error message",
  },
};


export const WithValue: Story = {
  args: {
    size: "sm",
    min: 0,
    max: 100,
    step: 10,
    showValue: true,
  },
};

