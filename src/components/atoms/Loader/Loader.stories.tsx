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

export const Medium: Story = {
  args: {
    size: "medium",
  },
};

export const Large: Story = {
  args: {
    size: "large",
  },
};

export const LargeWith2CircleWidth: Story = {
  args: {
    size: "large",
    circleWidth: 2,
  },
};

export const PrimaryWithLoadingMessage: Story = {
  args: {
    color: "primary",
    message: "Loading...",
  },
};

export const SecondaryInAntiClockDirectionDirection: Story = {
  args: {
    color: "secondary",
    direction: "counter-clockwise",
  },
};

export const MediumWithLoadingMessage: Story = {
  args: {
    size: "medium",
    message: "Loading...",
  },
};

export const WithCustomMessage: Story = {
  args: {
    message: "Custom message...",
  },
};

export const WithCustomIcon: Story = {
  args: {
    children: (
      <svg
        width='120'
        height='30'
        viewBox='0 0 120 30'
        xmlns='http://www.w3.org/2000/svg'
        fill='#0e0c0c'
      >
        <circle cx='15' cy='15' r='15'>
          <animate
            attributeName='r'
            from='15'
            to='15'
            begin='0s'
            dur='0.8s'
            values='15;9;15'
            calcMode='linear'
            repeatCount='indefinite'
          />
          <animate
            attributeName='fill-opacity'
            from='1'
            to='1'
            begin='0s'
            dur='0.8s'
            values='1;.5;1'
            calcMode='linear'
            repeatCount='indefinite'
          />
        </circle>
        <circle cx='60' cy='15' r='9' fill-opacity='0.3'>
          <animate
            attributeName='r'
            from='9'
            to='9'
            begin='0s'
            dur='0.8s'
            values='9;15;9'
            calcMode='linear'
            repeatCount='indefinite'
          />
          <animate
            attributeName='fill-opacity'
            from='0.5'
            to='0.5'
            begin='0s'
            dur='0.8s'
            values='.5;1;.5'
            calcMode='linear'
            repeatCount='indefinite'
          />
        </circle>
        <circle cx='105' cy='15' r='15'>
          <animate
            attributeName='r'
            from='15'
            to='15'
            begin='0s'
            dur='0.8s'
            values='15;9;15'
            calcMode='linear'
            repeatCount='indefinite'
          />
          <animate
            attributeName='fill-opacity'
            from='1'
            to='1'
            begin='0s'
            dur='0.8s'
            values='1;.5;1'
            calcMode='linear'
            repeatCount='indefinite'
          />
        </circle>
      </svg>
    ),
  },
  // decorators: [Story => <div style={{ color: "black" }}>{Story()}</div>],
};
