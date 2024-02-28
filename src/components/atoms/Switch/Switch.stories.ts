import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "./index";

const meta: Meta<typeof Switch> = {
  title: "Design System/Atoms/Switch",
  component: Switch,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const DefaultOn: Story = {
  args: {
    id: "switch-1",
    name: "switch-1",
    size: "default",
    variant: "default",
    defaultChecked: true,
  },
};
export const DefaultOff: Story = {
  args: {
    id: "switch-2",
    name: "switch-2",
    size: "default",
    defaultChecked: false,
  },
};

export const SmallOn: Story = {
  args: {
    id: "switch-3",
    name: "switch-3",
    size: "small",
    defaultChecked: true,
  },
};

export const SmallOff: Story = {
  args: {
    id: "switch-4",
    name: "switch-4",
    size: "small",
    defaultChecked: false,
  },
};

export const DefaultWithLabel: Story = {
  args: {
    id: "switch-5",
    name: "switch-5",
    label: "Label",
    size: "default",
  },
};

export const SmallWithLabel: Story = {
  args: {
    id: "switch-6",
    name: "switch-6",
    label: "Label",
    size: "small",
  },
};

export const Disabled: Story = {
  args: {
    id: "switch-7",
    name: "switch-7",
    label: "Label",
    size: "default",
    disabled: true,
  },
};
