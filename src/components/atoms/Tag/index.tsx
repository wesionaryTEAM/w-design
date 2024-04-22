import { VariantProps, tv } from "tailwind-variants";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

const rootStyles = tv({
  variants: {
    size: {
      small: "h-7",
      medium: "h-8",
      large: "h-9",
    },
    color: {
      primary: "bg-primary-500",
      secondary: "bg-secondary-500",
      default: "bg-slate-500",
    },
    shape: {
      square: "rounded-none",
      rounded: "rounded-md",
      pill: "rounded-full",
    },
    location: {
      start: "flex-row-reverse",
      end: "flex-row",
    },
  },
  defaultVariants: {
    size: "medium",
    color: "default",
    shape: "pill",
    location: "end",
  },
});

const closeButtonStyles = tv({
  variants: {
    size: {
      small: "h-3 w-3",
      medium: "h-4 w-4",
      large: "h-5 w-5",
    },
  },
  defaultVariants: {
    size: "medium",
  },
});

const textStyles = tv({
  variants: {
    size: {
      small: "text-xs",
      medium: "text-sm",
      large: "text-base",
    },
  },
  defaultVariants: {
    size: "medium",
  },
});

type TTag = VariantProps<typeof rootStyles>;

export type TagProps = TTag & {
  value: string;
  onCloseButton?: () => void;
  showCloseButton?: boolean;
};

export const Tag: React.FC<TagProps> = ({
  value,
  size,
  color,
  shape,
  location = "end",
  onCloseButton,
  showCloseButton = true,
}) => {
  return (
    <div
      className={cn(
        "flex max-w-fit items-center justify-center px-3 text-slate-50",
        rootStyles({ size, color, shape, location })
      )}
    >
      <span className={cn(textStyles({ size }))}>{value}</span>

      {showCloseButton && (
        <button
          onClick={onCloseButton}
          className='ml-2 flex items-center justify-center'
        >
          <X className={closeButtonStyles({ size })} />
        </button>
      )}
    </div>
  );
};
