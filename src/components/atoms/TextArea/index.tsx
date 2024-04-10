import * as React from "react";

import { cn } from "@/lib/utils";
import { Label } from "..";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  showCount?: boolean;
  label?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, onChange, showCount,label, ...props }, ref) => {
    const [value, setValue] = React.useState(props.value);
    return (
      <>
        {label && <Label htmlFor={props.id}>{label}</Label>}
        <textarea
          onChange={e => {
            setValue(e.target.value);
            onChange && onChange(e);
          }}
          className={cn(
            "border-input placeholder:text-muted-foreground focus-visible:ring-ring flex min-h-[60px] w-full rounded-md border bg-transparent px-3 py-2 text-sm shadow-sm invalid:ring-1 invalid:ring-red-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
        />

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
Textarea.displayName = "Textarea";

export { Textarea };
