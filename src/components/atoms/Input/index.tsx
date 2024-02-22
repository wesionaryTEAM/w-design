
import { cn } from "@/lib/utils";
import * as React from "react"

import { VariantProps, tv } from "tailwind-variants";

const input = tv({
  base: "flex w-full text-base rounded-md border border-input bg-transparent px-3 py-1 shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-gray-500 disabled:cursor-not-allowed disabled:opacity-50  invalid:ring-red-500 invalid:ring-1",
  variants: {
    variant: {
      small: "h-9",
      default: "h-11",
      large: "h-14",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})
type InputVarinats = VariantProps<typeof input>;
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>, InputVarinats {
  type: "text" | "password" | "email" | "number" | "search";
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(input({ variant }), className)}
        ref={ref}
        {...props}
      />
    )
  }
)

export interface InputWithIconProps extends InputProps {
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
  prefixPadding?: string;
  suffixPadding?: string;
}

const InputWithIcon = React.forwardRef<HTMLInputElement, InputWithIconProps>(
  ({ className, prefixIcon, prefixPadding, suffixPadding, suffixIcon, variant, type, ...props }, ref) => {
    const inputPadding = `${prefixIcon ? prefixPadding ? prefixPadding : "pl-10" : ""} ${suffixIcon ? suffixPadding ? suffixPadding : "pr-10" : ""}`;
    return (
      <div className={cn("relative gap-1 items-center flex", className)}>
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          {prefixIcon}
        </div>
        <input
          className={cn(input({ variant }), inputPadding)}
          type={type}
          ref={ref}
          {...props}
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          {suffixIcon}
        </div>
      </div>
    )
  }
)

Input.displayName = "Input"
InputWithIcon.displayName = "InputWithIcon"

export { Input, InputWithIcon }
