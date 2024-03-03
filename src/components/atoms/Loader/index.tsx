import { VariantProps, tv } from "tailwind-variants";

const loader = tv({
  variants: {},
});

export type LoaderProps = VariantProps<typeof loader> & {
  message?: string;
  direction?: "clockwise" | "counter-clockwise";
};
