import type { Meta, StoryObj } from "@storybook/react";
import { Tag } from "./index";

const meta: Meta<typeof Tag> = {
  title: "Design System/Atoms/Tag",
  component: Tag,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  args: {
    size: "medium",
    value: "typescript",
  },
};
