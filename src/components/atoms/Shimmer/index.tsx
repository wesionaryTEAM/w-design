import { cn } from "@/lib/utils"
import { VariantProps, tv } from "tailwind-variants";

const colors = tv({
    variants: {
        variant: {
            primary: "bg-primary-100",
            secondary: "bg-secondary-100",
            default: "bg-slate-100",
        },
    },
    defaultVariants: {
        variant: "default"
    }
});

const baseSize = tv({
    variants: {
        width: {
            xxs: "w-3",
            xs: "w-5",
            sm: "w-20",
            md: "w-40",
            lg: "w-60",
            xl: "w-80",
        }
    },
    defaultVariants: {
        width: "sm"
    }
})

const circleSize = tv({
    base: "rounded-full",
    variants: {
        height: {
            xxs: "h-3",
            xs: "h-5",
            sm: "h-20",
            md: "h-40",
            lg: "h-60",
            xl: "h-80",
        }
    },
    defaultVariants: {
        height: "sm"
    }
})

const boxSize = tv({
    base: "rounded-md",
    variants: {
        height: {
            xs: "h-5",
            sm: "h-20",
            md: "h-40",
            lg: "h-60",
            xl: "h-80",
        }
    },
    defaultVariants: {
        height: "sm"
    }
})

const lineSize = tv({
    base: "rounded-md",
    variants: {
        height: {
            xs: "h-2",
            sm: "h-4",
            md: "h-5",
            lg: "h-6",
            xl: "h-8",
        }
    },
    defaultVariants: {
        height: "xs"
    }
})


type Colors = VariantProps<typeof colors>;
type Size = VariantProps<typeof baseSize>;
type CircleSize = VariantProps<typeof circleSize>;
type BoxSize = VariantProps<typeof boxSize>;
type LineSize = VariantProps<typeof lineSize>;

interface Base extends Colors, React.HTMLAttributes<HTMLDivElement> {
    className?: string
    children?: React.ReactNode
    animate?: boolean
}

export interface IShimmer extends Base, Size {
    variant?: "primary" | "secondary" | "default"
}
interface Circle extends Base, Size, CircleSize { }
interface Box extends Base, Size, BoxSize { }
interface Line extends Base, Size, LineSize { }

const ShimmerBase = ({ className, children, variant = "default", animate = true }: IShimmer) => {
    return (
        <div className={cn(!children && colors({ variant }), !children && "w-full h-full", animate && "animate-pulse", className)}>{children}</div>
    )
}

const Circle = ({ className, animate = true, variant, width, height, ...props }: Circle) => {
    return (
        <div className={
            cn(animate && "animate-pulse",
                colors({ variant }),
                baseSize({ width }),
                circleSize({ height }),
                className
            )}
            {...props} />
    )
}

const Line = ({ className, animate = true, variant, width, height, ...props }: Line) => {
    return (
        <div className={
            cn(animate && "animate-pulse",
                colors({ variant }),
                baseSize({ width }),
                lineSize({ height }),
                className
            )}
            {...props} />
    )
}

const Box = ({ className, animate = true, variant, width, height, ...props }: Box) => {
    return (
        <div className={
            cn(animate && "animate-pulse",
                colors({ variant }),
                baseSize({ width }),
                boxSize({ height }),
                className
            )}
            {...props} />
    )
}

Circle.displayName = 'Shimmer.Circle';
Line.displayName = 'Shimmer.Line';
Box.displayName = 'Shimmer.Box';

ShimmerBase.Line = Line;
ShimmerBase.Circle = Circle;
ShimmerBase.Box = Box;

export const Shimmer = ShimmerBase;
