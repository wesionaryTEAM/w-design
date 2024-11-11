import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./index";

const meta: Meta<typeof Checkbox> = {
  title: "Design System/Atoms/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description: "The label to display. Can be a string or a React node.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

const Default: Story = {
  args: {
    name: "checkbox",
    size: "default",
    label: "",
  },
};

export const Unchecked: Story = {
  args: {
    ...Default,
    id: "checkbox-unchecked",
    checked: false,
  },
};

export const Checked: Story = {
  args: {
    ...Default,
    id: "checkbox-checked",
    checked: true,
  },
};

export const Indeterminate: Story = {
  args: {
    ...Default,
    id: "checkbox-indeterminate",
    checked: "indeterminate",
  },
};

export const WithLabel: Story = {
  args: {
    ...Default,
    id: "checkbox-withlabel",
    label: "Label for Checkbox",
  },
};

export const Disabled: Story = {
  args: {
    ...Default,
    id: "checkbox-disabled",
    label: "This is disabled Checkbox",
    disabled: true,
  },
};

export const Small: Story = {
  args: {
    ...Default,
    id: "checkbox-small",
    size: "small",
    label: "This is small size Checkbox",
  },
};

export const Medium: Story = {
  args: {
    ...Default,
    id: "checkbox-medium",
    size: "default",
    label: "This is default size Checkbox",
  },
};

export const Large: Story = {
  args: {
    ...Default,
    id: "checkbox-large",
    size: "large",
    label: "This is large size Checkbox",
  },
};

export const DefaultVariant: Story = {
  args: {
    ...Default,
    id: "checkbox-default",
    checked: true,
  },
};

export const PrimaryVariant: Story = {
  args: {
    ...Default,
    id: "checkbox-primary",
    variant: "primary",
    checked: true,
  },
};

export const SecondaryVariant: Story = {
  args: {
    ...Default,
    id: "checkbox-secondary",
    variant: "secondary",
    checked: true,
  },
};
