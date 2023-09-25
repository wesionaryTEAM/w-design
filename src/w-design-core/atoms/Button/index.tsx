import { VariantProps, tv } from "tailwind-variants";
import React from "react"; // Import React

const button = tv({
  base: "font-medium bg-blue-500 text-white rounded-full active:opacity-80",
  variants: {
    color: {
      primary: "bg-blue-500 text-white",
      secondary: "bg-purple-500 text-white",
    },
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "px-4 py-3 text-lg",
    },
  },
  compoundVariants: [
    {
      size: ["sm", "md"],
      class: "px-3 py-1",
    },
  ],
  defaultVariants: {
    size: "md",
    color: "primary",
  },
});

type ButtonVariants = VariantProps<typeof button>;

export interface ButtonProps extends ButtonVariants {
  name?: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
}

export const Button: React.FC<ButtonProps> = ({
  name,
  variant = "primary",
  size = "md",
}) => {
  return (
    <button className={button({ size, color: variant })}>
      <span>{name}</span>
    </button>
  );
};
