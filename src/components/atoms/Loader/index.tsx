import { VariantProps, tv } from "tailwind-variants";

const loader = tv({
  variants: {
    variant: {
      primary: "text-blue-500",
      secondary: "text-green-500",
      default: "text-gray-500",
    },
  },
});

export type LoaderProps = VariantProps<typeof loader> & {
  message?: string;
  direction?: "clockwise" | "counter-clockwise";
};
