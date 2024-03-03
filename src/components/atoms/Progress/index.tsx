import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"
import { cn } from "@/lib/utils"
import { tv, VariantProps } from "tailwind-variants";

const base = tv({
  base: "w-full"
})

const indicator = tv({
  base: [base(), "h-full", "flex-1", "transition-all"],
  variants: {
    variant: {
      primary: "bg-primary-900",
      secondary: "bg-secondary-900",
      default: "bg-slate-900",
    },
  },
  defaultVariants: {
    variant: "default",
  }
})

const root = tv({
  base: [base(), "relative", "overflow-hidden", "rounded-full"],
  variants: {
    variant: {
      primary: "bg-primary-100",
      secondary: "bg-secondary-100",
      default: "bg-slate-100",
    },
    size: {
      sm: "h-4",
      md: "h-6",
      lg: "h-8",
      xl: "h-10",
    },
    fontSize: {
      sm: "text-xs",
      md: "text-sm",
      lg: "text-base",
      xl: "text-lg",
    },
    isRounded: {
      true: "rounded-full",
      false: "rounded-none"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "sm",
    isRounded: true
  }
})

type ProgressVariant = VariantProps<typeof root>;

export interface ProgressProps extends ProgressVariant,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
  max?: number;
  min?: number;
  indicatorClassName?: string;
  variant?: "default" | "primary" | "secondary"
  size?: "sm" | "md" | "lg" | "xl"
  showPercentage?: boolean
  isRounded?: boolean
  percentageClass?: string
}

export const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(({
  className,
  indicatorClassName,
  value,
  size = "sm",
  variant = "default",
  min = 0,
  max = 100,
  percentageClass,
  showPercentage = false,
  isRounded = false,
  ...props
}, ref) => {
  return <ProgressPrimitive.Root
    ref={ref}
    className={cn(root({ variant, size, isRounded }), className)}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className={cn(indicator({ variant }), indicatorClassName)}
      style={{ transform: `translateX(-${max - (value ?? min)}%)` }}
    />
    {showPercentage && <div className={cn(
      "absolute inset-0 invert-0 flex justify-center items-center",
      root.variants.fontSize[size],
      (value ?? 0) >= Math.round(max / 2) ? "text-white" : "text-slate-900",
      percentageClass
    )}>
      {`${value ? value.toFixed(0) : 0}%`}
    </div>}
  </ProgressPrimitive.Root>
})
