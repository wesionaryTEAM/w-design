import type { Meta, StoryObj } from "@storybook/react";
import { Dropdown } from ".";
import {
  Pencil1Icon,
  TrashIcon,
  MixIcon,
  DotsVerticalIcon,
} from "@radix-ui/react-icons";

const meta: Meta<typeof Dropdown> = {
  title: "Design System/Atoms/Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    icon: {
      control: "select",
      options: ["Icon1", "Icon2"],
    },
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "destructive"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Dropdown>;
const iconMap = {
  Icon1: <MixIcon />,
  Icon2: <DotsVerticalIcon />,
};

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
  argTypes: {
    icon: {
      control: "select",
      options: ["Icon1", "Icon2", null],
      mapping: iconMap,
    },
  },
};

// Dropdown without an icon
export const WithoutMenuIcon: Story = {
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
  argTypes: {
    icon: {
      control: "select",
      options: ["Icon1", "Icon2", null],
      mapping: iconMap,
    },
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
  argTypes: {
    icon: {
      control: "select",
      options: ["Icon1", "Icon2", null],
      mapping: iconMap,
    },
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
  argTypes: {
    icon: {
      control: "select",
      options: ["Icon1", "Icon2", null],
      mapping: iconMap,
    },
  },
};

// Large size dropdown
export const Large: Story = {
  args: {
    ...Default.args,
    triggerLabel: "Large Dropdown",
    size: "lg",
  },
  argTypes: {
    icon: {
      control: "select",
      options: ["Icon1", "Icon2", null],
      mapping: iconMap,
    },
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
  argTypes: {
    icon: {
      control: "select",
      options: ["Icon1", "Icon2", null],
      mapping: iconMap,
    },
  },
};
