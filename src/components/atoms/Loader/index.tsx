import { cn } from "@/lib/utils";
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
  const variantClass = loader.variants.variant[variant];
  const spinDirection = loader.variants.direction[direction];
  const sizeClass = loader.variants.size[size];

  return (
    <div className={cn("flex flex-col items-center", sizeClass)}>
      <svg
        aria-hidden='true'
        className={cn("fill-current", variantClass, spinDirection)}
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
      <span className='flex items-center justify-center'>{message}</span>
    </div>
  );
};
