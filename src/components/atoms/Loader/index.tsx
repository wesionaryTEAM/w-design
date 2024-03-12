import { cn } from "@/lib/utils";
import { VariantProps, tv } from "tailwind-variants";

const loader = tv({
  base: "flex items-center justify-center",
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
    messageSize: {
      small: "text-sm",
      medium: "text-md",
      large: "text-lg",
    },
    direction: {
      clockwise: "animate-spin",
      "counter-clockwise": "animate-reverse-spin",
    },
  },
  defaultVariants: {
    color: "primary",
    size: "medium",
    messageSize: "medium",
    direction: "clockwise",
  },
});

export type LoaderProps = VariantProps<typeof loader> & {
  message?: string;
  direction?: "clockwise" | "counter-clockwise";
};

export const Loader: React.FC<LoaderProps> = ({
  color,
  size,
  message,
  direction,
  messageSize,
}) => {
  console.log(loader({ size }));
  return (
    <div
      role='status'
      className={cn("flex  flex-col items-center", loader({ size }))}
    >
      <svg
        aria-hidden='true'
        className={cn("fill-current", loader({ color, size, direction }))}
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
            "flex items-center justify-center",
            loader({ messageSize })
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
