import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"

import { cn } from "@/lib/utils"

const variants = {
  size: {
    sm: "h-8 w-8 text-xs",
    md: "h-10 w-10 text-sm",
    lg: "h-12 w-12 text-base",
    xl: "h-14 w-14 text-lg",
    xxl: "h-16 w-16 text-xl",
  },
  variant: {
    isRounded: {
      yes: "rounded-full",
      no: "rounded-none",
    },
  },
  defaultVariants: {
    size: "md",
    variant: {
      color: "default",
      isRounded: "yes",
    },
  },
}

interface SizeProps {
  size: 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
}

interface ColorProps {
  colorClass?: string
}

interface RoundedProps {
  isRounded?: 'yes' | 'no'
}

interface BasePros extends
  SizeProps, RoundedProps, ColorProps { }

interface WrapperProps extends
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>,
  BasePros { }

const AvatarWrapper = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  WrapperProps
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex shrink-0 overflow-hidden",
      variants.size[props.size],
      variants.variant.isRounded[props?.isRounded ?? "yes"],
      className,
    )}
    {...props}
  />
))

const Image = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    {...props}
  />
))

interface FallbackProps extends
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>,
  RoundedProps, ColorProps { }

const Fallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  FallbackProps
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center",
      variants?.variant?.isRounded[props?.isRounded ?? "yes"],
      props?.colorClass ?? "bg-slate-100 dark:bg-slate-800",
      className
    )}
    {...props}
  />
))


interface AvatarProps extends BasePros {
  src?: string
  alt?: string
  fallbackText: string
}

export const Avatar = (props: AvatarProps) => {
  if (props?.fallbackText && props?.fallbackText?.length != 2) {
    console.error(`Fallback text must be two character received ${props?.fallbackText?.length}, Example: JD for John Doe`)
  }
  return (
    <AvatarWrapper {...props}>
      {props.src && <Image {...props} />}
      {props.fallbackText && <Fallback {...props}>
        <span>{props.fallbackText}</span>
      </Fallback>}
    </AvatarWrapper>
  )
}
