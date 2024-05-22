import { VariantProps, tv } from "tailwind-variants";
import React from "react"; // Import React
import { cn } from "@/lib/utils";

export const button = tv({
  base: 'relative inline-flex items-center justify-center rounded-md text-[#F8FAFC] border-0 disabled:opacity-[40%]',
  variants: {
    variant: {
      primary: 'bg-primary hover:bg-[#1E293B]',
      destructive:'bg-destructive hover:bg-[#DC2626]',
      ghost:'bg-transparent hover:bg-accent text-[#020617]',
      outline:'border border-[#E2E8F0] text-[#020617] bg-[#FFFFFF] hover:bg-accent',
      secondary:'bg-secondary text-[#020617] hover:bg-[#E2E8F0]',
      link:'bg-transparent underline text-[#020617] disabled:no-underline',
      icon:"rounded-full border-[1px] border-[#E2E8F0] text-[#020617] bg-[#FFFFFF] hover:bg-accent !p-3"
    },
    size: {
      lg: 'px-8 py-4 text-sm font-bold leading-6',
      md: 'px-4 py-3 text-sm font-medium leading-6',
      sm: 'px-3 py-2 text-sm font-medium leading-4',
    },
  },
  defaultVariants: {
    size: "md",
    color: "primary",
  },
});


type ButtonVariants = VariantProps<typeof button>;



export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, ButtonVariants {
  name: string;
  variant?: "primary" | "secondary" | "destructive" | "ghost" | 'outline' | 'link' | 'icon';
  size?: "sm" | "md" | "lg";
  prefixIcon?:React.ReactNode;
  suffixIcon?:React.ReactNode;
  className?:string;
  loading?: boolean;
  disabled?:boolean;
  icon?:React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  name,
  variant = "primary",
  size = "md",
  onClick,
  prefixIcon,
  suffixIcon,
  className,
  loading, 
  disabled = false,
  icon,
  ...props
}) => {
  return (
      <button 
        className={cn(button({ size:size, variant: variant, className: className }))} {...props}
        disabled={disabled}
        onClick={loading ? undefined : onClick}
      >
        {
          variant === "icon" ? (
            <>
              {icon}
            </>
          ) : (
            <div className="flex items-center justify-between gap-2">
            {
              !prefixIcon && (
                <span className="text-white">
                  {prefixIcon}
                </span>
              )
            }
            {loading ? (
              <span className="flex items-center justify-center flex-1">
                <svg
                  className="mr-2 animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="none"
                >
                  <path
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M10 1.667A8.333 8.333 0 1 0 18.333 10"
                  />
                </svg>
              </span>
            ) : null}
            <span
              className={cn({
                loading,
                className: `flex items-center justify-center flex-1`,
              })}
            >
              {name}
            </span>
            {
              !suffixIcon && (
                <span className="text-white">
                  {suffixIcon}
                </span>
              )
            }
          </div>

          )
        }
      </button>
  )
};
