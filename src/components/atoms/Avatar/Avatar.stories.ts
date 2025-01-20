import { Meta, StoryObj } from "@storybook/react";
import { Avatar } from ".";

const meta: Meta<typeof Avatar> = {
  title: "Design System/Atoms/Avatar",
  component: Avatar,
  argTypes: {
    size: {
      options: ["sm", "md", "lg", "xl", "xxl"],
      control: { type: "radio" },
      defaultValue: "md",
      description: "The size of the avatar",
    },
    src: {
      description: "The source of the image",
      control: { type: "text" },
    },
    alt: {
      description: "The alt text of the image",
      control: { type: "text" },
      defaultValue: "Dibesh Raj Subedi",
    },
    backgroundShape: {
      description: "Make the avatar rounded",
      options: ["circle", "square"],
      control: { type: "radio" },
      defaultValue: "circle",
    },
    fallbackText: {
      description: "The fallback text of the image",
      control: { type: "text" },
      defaultValue: "DS",
    },
    colorClass: {
      control: { type: "text" },
      description: "The background color of the avatar",
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Avatar = StoryObj<typeof Avatar>;

export const Default: Avatar = {
  args: {
    size: "md",
    fallbackText: "DS",
    src: "https://avatars.githubusercontent.com/u/65608497",
    alt: "Dibesh Raj Subedi",
    colorClass: "bg-slate-200 dark:bg-slate-800",
    backgroundShape: "circle",
  },
};

export const WithFallback: Avatar = {
  args: {
    size: "md",
    fallbackText: "DS",
    colorClass: "bg-slate-900 dark:bg-slate-800 text-white",
    backgroundShape: "circle",
  },
};

export const NotRounded: Avatar = {
  args: {
    size: "md",
    fallbackText: "DS",
    backgroundShape: "square",
    colorClass: "bg-slate-900 dark:bg-slate-800 text-white",
  },
};

export const CustomColor: Avatar = {
  args: {
    size: "md",
    fallbackText: "DS",
    backgroundShape: "square",
    colorClass: "bg-orange-900 dark:bg-orange-800 text-white",
  },
};
