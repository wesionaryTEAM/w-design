import { cn } from "@/lib/utils";
import * as React from "react";

import { VariantProps, tv } from "tailwind-variants";
import { Label } from "..";

const input = tv({
  base: "flex w-full text-base rounded-md border border-input bg-transparent px-3 py-1 shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-gray-500 disabled:cursor-not-allowed disabled:opacity-50  invalid:ring-red-500 invalid:ring-1",
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
});
type InputVariants = VariantProps<typeof input>;
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
  InputVariants {
  type: "text" | "password" | "email" | "number" | "search";
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
  prefixPadding?: string;
  suffixPadding?: string;
  label?: string;
  showCount?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      label,
      prefixIcon,
      prefixPadding,
      suffixPadding,
      suffixIcon,
      variant,
      type,
      showCount,
      onChange,
      ...props
    },
    ref
  ) => {
    const inputPadding = `${prefixIcon ? (prefixPadding ? prefixPadding : "pl-10") : ""} ${suffixIcon ? (suffixPadding ? suffixPadding : "pr-10") : ""}`;
    const [value, setValue] = React.useState(props.value);
    return (
      <>
        {label && <Label htmlFor={props.id}>{label}</Label>}
        <div className={cn("relative flex items-center gap-1", className)}>
          <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
            {prefixIcon}
          </div>
          <input
            onChange={e => {
              setValue(e.target.value);
              onChange && onChange(e);
            }}
            className={cn(input({ variant }), inputPadding)}
            type={type}
            ref={ref}
            {...props}
          />
          <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3'>
            {suffixIcon}
          </div>
        </div>
        {showCount && (
          <div className='flex justify-end'>
            {value?.toString().length ?? 0}
            {props.maxLength && <span> /{props.maxLength}</span>}
          </div>
        )}
      </>
    );
  }
);

Input.displayName = "Input";

export { Input };
