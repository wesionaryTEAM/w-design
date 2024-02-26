import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";

const variants = cva("switch", {
  variants: {
    variant: {
      primary:
        "data-[state=checked]:bg-primary data-[state=unchecked]:bg-primary/10",
      secondary:
        "data-[state=checked]:bg-secondary data-[state=unchecked]:bg-secondary/10",
      default:
        "data-[state=checked]:bg-slate-900 data-[state=unchecked]:bg-slate-200",
    },
    size: {
      small: "w-10 h-5",
      default: "w-11 h-6",
    },
    thumbSize: {
      small: "w-4 h-4",
      default: "w-5 h-5",
    },
  },
});

type SwitchVariants = VariantProps<typeof variants>;
interface SwitchProps
  extends React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>,
    Omit<SwitchVariants, "thumbSize"> {
  label?: React.ReactNode;
  trackClassName?: string;
  thumbClassName?: string;
  size?: "default" | "small";
  variant?: "primary" | "secondary" | "default";
}

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  SwitchProps
>(
  (
    {
      className,
      label,
      trackClassName,
      thumbClassName,
      size = "default",
      variant = "default",
      ...props
    },
    ref
  ) => {
    return (
      <fieldset
        className='inline-flex items-center space-x-2'
        disabled={props?.disabled}
      >
        <SwitchPrimitives.Root
          className={cn(
            "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50  dark:focus-visible:ring-slate-300 dark:focus-visible:ring-offset-slate-950 dark:data-[state=checked]:bg-slate-50 dark:data-[state=unchecked]:bg-slate-800",
            className,
            trackClassName,
            variants({ size, variant })
          )}
          {...props}
          ref={ref}
        >
          <SwitchPrimitives.Thumb
            className={cn(
              "pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0 dark:bg-slate-950",
              thumbClassName,
              variants({ thumbSize: size })
            )}
          />
        </SwitchPrimitives.Root>
        {label && (
          <label htmlFor={props?.id} className='text-sm font-medium'>
            {label}
          </label>
        )}
      </fieldset>
    );
  }
);
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
