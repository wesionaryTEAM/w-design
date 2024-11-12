import type { Meta, StoryObj } from "@storybook/react";
import { Pagination } from ".";

const meta: Meta<typeof Pagination> = {
  title: "Design System/Atoms/Pagination",
  id: "design-system-atoms-pagination",
  component: Pagination,
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
    icon: {
      control: { type: "boolean" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Pagination>;

// Default pagination with text-based navigation
export const Default: Story = {
  args: {
    total: 100,
    currentPage: 6,
    pageSize: 10,
    onPageChange: (page: number) => alert(`Page changed to: ${page}`),
    size: "md",
    variant: "primary",
    icon: false, // Text-based navigation
  },
};

// Pagination with icons for next/previous buttons
export const WithIcons: Story = {
  args: {
    total: 100,
    currentPage: 6,
    pageSize: 10,
    onPageChange: (page: number) => alert(`Page changed to: ${page}`),
    size: "md",
    variant: "primary",
    icon: true, // Icon-based navigation
  },
};

// Small pagination with icons
export const SmallWithIcons: Story = {
  args: {
    total: 100,
    currentPage: 6,
    pageSize: 10,
    onPageChange: (page: number) => alert(`Page changed to: ${page}`),
    size: "sm",
    variant: "primary",
    icon: true,
  },
};

// Medium pagination with text-based navigation
export const MediumWithText: Story = {
  args: {
    total: 100,
    currentPage: 6,
    pageSize: 10,
    onPageChange: (page: number) => alert(`Page changed to: ${page}`),
    size: "md",
    variant: "secondary",
    icon: false, // Text-based navigation
  },
};

// Large pagination with icons
export const LargeWithIcons: Story = {
  args: {
    total: 100,
    currentPage: 6,
    pageSize: 10,
    onPageChange: (page: number) => alert(`Page changed to: ${page}`),
    size: "lg",
    variant: "primary",
    icon: true,
  },
};
