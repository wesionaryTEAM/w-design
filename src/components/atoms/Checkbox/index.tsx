"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";

import { cn } from "@/lib/utils";
import { CheckIcon, MinusIcon } from "@radix-ui/react-icons";
import { VariantProps, tv } from "tailwind-variants";

const checkboxVariants = tv({
  variants: {
    variant: {
      primary:
        "data-[state=checked]:bg-primary data-[state=indeterminate]:bg-primary",
      secondary:
        "data-[state=checked]:bg-secondary data-[state=indeterminate]:bg-secondary",
      default:
        "data-[state=checked]:bg-slate-900 data-[state=indeterminate]:bg-slate-900",
    },
    size: {
      small: "w-3 h-3",
      default: "w-4 h-4",
      large: "w-5 h-5",
    },
  },
});

const iconVariants = tv({
  variants: {
    size: {
      small: "w-3 h-3",
      default: "w-4 h-4",
      large: "w-5 h-5",
    },
  },
});

const labelVariants = tv({
  variants: {
    size: {
      small: "text-xs leading-4",
      default: "text-sm leading-6",
      large: "text-md leading-8",
    },
  },
});

type CheckboxVariants = VariantProps<typeof checkboxVariants>;

interface CheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
    CheckboxVariants {
  label?: React.ReactNode;
  size?: "default" | "small" | "large";
  variant?: "primary" | "secondary" | "default";
  labelClassName?: string;
}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(
  (
    {
      className,
      label,
      size = "default",
      variant,
      labelClassName = "",
      ...props
    },
    ref
  ) => (
    <fieldset
      className='inline-flex items-center space-x-2'
      disabled={props?.disabled}
      aria-disabled={props?.disabled}
    >
      <CheckboxPrimitive.Root
        ref={ref}
        className={cn(
          "focus-visible:ring-none group peer shrink-0 rounded border border-slate-900 focus-visible:outline-none focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-none data-[state=indeterminate]:border-none data-[state=checked]:bg-slate-900 data-[state=indeterminate]:bg-slate-900 data-[state=checked]:text-white data-[state=indeterminate]:text-white",
          className,
          checkboxVariants({ size, variant })
        )}
        aria-disabled={props?.disabled}
        aria-labelledby={props?.name}
        {...props}
      >
        <CheckboxPrimitive.Indicator
          className={cn(
            "flex items-center justify-center text-current",
            iconVariants({ size })
          )}
        >
          <CheckIcon
            className={cn(
              "hidden h-4 w-4 group-data-[state=checked]:block",
              iconVariants({ size })
            )}
          />
          <MinusIcon
            className={cn(
              "hidden h-4 w-3 group-data-[state=indeterminate]:block",
              iconVariants({ size })
            )}
          />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>

      {label && (
        <label
          htmlFor={props?.id}
          className={cn(
            "text-sm font-medium leading-none",
            props?.disabled ? "text-slate-600" : "",
            labelVariants({ size }),
            labelClassName
          )}
        >
          {label}
        </label>
      )}
    </fieldset>
  )
);
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
