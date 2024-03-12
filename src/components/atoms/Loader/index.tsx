import { cn } from "@/lib/utils";
import { VariantProps, tv } from "tailwind-variants";

const circleStyles = tv({
  base: "fill-current",
  variants: {
    color: {
      primary: "text-primary-500",
      secondary: "text-secondary-500",
      default: "text-slate-500",
    },
    size: {
      small: "h-12 w-12",
      medium: "h-16 w-16",
      large: "h-20 w-20",
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
  base: "text-gray-500 mt-2",
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
      small: "h-17 w-17",
      medium: "h-21 w-21",
      large: "h-25 w-25",
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
      {message && <span className={cn(textStyles({ size }))}>{message}</span>}
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
