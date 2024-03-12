import { cn } from "@/lib/utils";
import { VariantProps, tv } from "tailwind-variants";

const circleStyles = tv({
  base: "fill-current",
  variants: {
    color: {
      primary: "text-gray-500",
      secondary: "text-green-500",
    },
    size: {
      small: "h-14 w-14",
      medium: "h-16 w-16",
      large: "h-18 w-18",
    },
    direction: {
      clockwise: "animate-spin",
      "counter-clockwise": "animate-reverse-spin",
    },
  },
  defaultVariants: {
    color: "primary",
    size: "medium",
    direction: "clockwise",
  },
});

const textStyles = tv({
  base: "text-gray-500",
  variants: {
    size: {
      small: "text-sm",
      medium: "text-base",
      large: "text-lg",
    },
  },
  defaultVariants: {
    size: "medium",
  },
});

const rootStyles = tv({
  base: "flex flex-col items-center",
  variants: {
    size: {
      small: "h-14",
      medium: "h-16",
      large: "h-18",
    },
  },
  defaultVariants: {
    size: "medium",
  },
});

export type LoaderProps = VariantProps<typeof circleStyles> & {
  message?: string;
  direction?: "clockwise" | "counter-clockwise";
};

export const Loader: React.FC<LoaderProps> = ({
  color,
  size,
  message,
  direction,
}) => {
  return (
    <div
      role='status'
      className={cn("flex  flex-col items-center", rootStyles({ size }))}
    >
      <svg
        aria-hidden='true'
        className={cn(circleStyles({ color, size, direction }))}
        viewBox='0 0 50 50'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle
          cx='25'
          cy='25'
          r='20'
          stroke='currentColor'
          strokeWidth='5'
          fill='none'
          strokeDasharray='125.6'
          strokeDashoffset='80'
        />
      </svg>
      {message && (
        <span
          className={cn(
            "mt-2",
            textStyles({ size: size === "small" ? "small" : "medium" })
          )}
        >
          {message}
        </span>
      )}
    </div>
  );
};

/*
TODO:
1. Position of message text
2. Sync size of loader and text
3. Text color variant
4. Fix loader hiding in small sizes
*/
