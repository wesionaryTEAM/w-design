import type { Meta, StoryObj } from "@storybook/react";
import { Dropdown } from ".";
import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";

const meta: Meta<typeof Dropdown> = {
  title: "Design System/Atoms/Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "destructive"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

// Default dropdown with action items
export const Default: Story = {
  args: {
    items: [
      {
        label: "Edit",
        onClick: () => alert("Edit clicked"),
        icon: <Pencil1Icon />,
      },
      {
        label: "Delete",
        onClick: () => alert("Delete clicked"),
        destructive: true,
        icon: <TrashIcon />,
      },
    ],
    triggerLabel: "Actions",
    size: "md",
    variant: "primary",
    icon: null,
  },
};

// Dropdown without an icon
export const WithoutIcon: Story = {
  args: {
    items: [
      { label: "Edit", onClick: () => alert("Edit clicked") },
      {
        label: "Delete",
        onClick: () => alert("Delete clicked"),
        destructive: true,
      },
    ],
    triggerLabel: "Actions",
    size: "md",
    variant: "primary",
    icon: null, // No icon in the trigger
  },
};

// Destructive dropdown with a delete action
export const Destructive: Story = {
  args: {
    items: [
      {
        label: "Delete",
        onClick: () => alert("Delete clicked"),
        destructive: true,
      },
    ],
    triggerLabel: "Delete Actions",
    size: "md",
    variant: "destructive",
    icon: null, // No icon in the trigger
  },
};

// Small size dropdown
export const Small: Story = {
  args: {
    ...Default.args,
    triggerLabel: "Small Dropdown",
    size: "sm",
  },
};

// Medium size dropdown
export const Medium: Story = {
  args: {
    ...Default.args,
    triggerLabel: "Medium Dropdown",
    size: "md",
  },
};

// Large size dropdown
export const Large: Story = {
  args: {
    ...Default.args,
    triggerLabel: "Large Dropdown",
    size: "lg",
  },
};

// Secondary variant dropdown
export const Secondary: Story = {
  args: {
    items: [
      { label: "Edit", onClick: () => alert("Edit clicked") },
      {
        label: "Delete",
        onClick: () => alert("Delete clicked"),
        destructive: true,
      },
    ],
    triggerLabel: "Actions",
    size: "md",
    variant: "secondary",
  },
};
