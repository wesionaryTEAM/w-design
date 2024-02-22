
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
  extends React.InputHTMLAttributes<HTMLInputElement> , InputVarinats{
  type: "text" | "password" | "email" | "number" | "search";
  }
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className,variant, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={input({variant})}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
