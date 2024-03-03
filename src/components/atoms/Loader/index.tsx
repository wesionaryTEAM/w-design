import { VariantProps, tv } from "tailwind-variants";

const loader = tv({
  variants: {
    variant: {
      primary: "text-blue-500",
      secondary: "text-green-500",
      default: "text-gray-500",
    },
    size: {
      small: "h-8 w-8",
      medium: "h-12 w-12",
      large: "h-24 w-24",
      default: "h-10 w-10",
    },
    direction: {
      clockwise: "animate-spin",
      "counter-clockwise": "animate-reverse-spin",
    },
  },
});

export type LoaderProps = VariantProps<typeof loader> & {
  message?: string;
  direction?: "clockwise" | "counter-clockwise";
};

export const Loader: React.FC<LoaderProps> = ({
  variant = "default",
  size = "default",
  message = "Loading...",
  direction = "clockwise",
}) => {
  return <div></div>;
};
