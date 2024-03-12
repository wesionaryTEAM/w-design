import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/utils"
import { VariantProps, tv } from "tailwind-variants"

const track = tv({
    base: "relative grow overflow-hidden",
    variants: {
        variant: {
            primary: "bg-primary-100",
            secondary: "bg-secondary-100",
            default: "bg-slate-100",
        },
        size: {
            sm: "h-2",
            md: "h-4",
        },
        isRounded: {
            true: "rounded-full",
            false: "rounded-none"
        },
    },
    defaultVariants: {
        variant: "default",
        size: "md",
        isRounded: true,
    }
})

const range = tv({
    base: "absolute h-full",
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

const thumb = tv({
    base: "cursor-pointer block border-2 ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    variants: {
        variant: {
            primary: "border-primary-900 bg-white",
            secondary: "border-secondary-900 bg-white",
            default: "border-slate-900 bg-white",
        },
        size: {
            sm: "h-5 w-5",
            md: "h-7 w-7",
        },
        isRounded: {
            true: "rounded-full",
            false: "rounded-none"
        },
    },
    defaultVariants: {
        variant: "default",
        size: "md",
        isRounded: true,
    }
})

type SliderVariant = VariantProps<typeof track>;

export interface SliderProps extends SliderVariant,
    React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {
    variant?: "primary" | "secondary" | "default";
    size?: "sm" | "md";
    isRounded?: boolean;
    showValue?: boolean;
    trackClassName?: string;
    rangeClassName?: string;
    thumbClassName?: string;
    isVertical?: boolean;
    verticalHeight: number;
    prefixIcon?: React.ReactNode;
    suffixIcon?: React.ReactNode;
    error?: string;
    errorClass?: string;
}

type SliderValueProps = {
    className: string;
    sliderValue: number[] | undefined;

}
const SliderValue = ({ className, sliderValue }: SliderValueProps) => {
    return <div className={className}>
        <span>{sliderValue ?? 0}</span>
    </div>
}

export const Slider = React.forwardRef<
    React.ElementRef<typeof SliderPrimitive.Root>,
    SliderProps
>(({ className,
    variant,
    size,
    value,
    isRounded = true,
    showValue,
    isVertical = true,
    verticalHeight = 200,
    trackClassName,
    rangeClassName,
    thumbClassName,
    prefixIcon,
    suffixIcon,
    ...props
}, ref) => {
    const orientation = isVertical == true ? "flex-col w-full" : "flex h-full";
    const [sliderValue, setSliderValue] = React.useState(value ?? props.defaultValue)
    return <>
        <div className={`relative ${orientation}`}>
            {prefixIcon && isVertical == false && <div className="relative inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                {prefixIcon}
            </div>}
            <SliderPrimitive.Root
                ref={ref}
                className={cn(
                    "relative flex w-full touch-none select-none items-center",
                    isVertical ? `flex-col h-[${verticalHeight}px]` : "flex-row",
                    className
                )}
                value={sliderValue}
                orientation={isVertical ? "vertical" : "horizontal"}
                onValueChange={(newValue) => { setSliderValue(newValue) }}
                {...props}
            >
                <SliderPrimitive.Track className={
                    cn(
                        track({ variant, size, isRounded }),
                        isVertical == true ? `!h-[${verticalHeight}px] w-3` : "w-full",
                        size == "md" && isVertical && `!h-[${verticalHeight}px] w-5`,
                        trackClassName
                    )
                }>
                    <SliderPrimitive.Range className={cn(
                        range({ variant }),
                        isVertical == true ? `!h-[${verticalHeight}px] w-3` : "w-full",
                        size == "md" && isVertical && `!h-[${verticalHeight}px] w-5`,
                        rangeClassName
                    )
                    } />
                </SliderPrimitive.Track>
                <SliderPrimitive.Thumb className={
                    cn(
                        thumb({ variant, size, isRounded }),
                        isVertical == true && size == "sm" && "w-5",
                        isVertical == true && size == "md" && "w-7",
                        thumbClassName
                    )} />
            </SliderPrimitive.Root>
            {showValue &&
                (
                    isVertical == true ? <div className="items-center justify-center flex">
                        <SliderValue
                            className={cn(
                                track.variants.variant[variant ?? 'default'],
                                "ml-0 mt-2 border py-1 rounded-md text-center w-12",
                            )}
                            sliderValue={sliderValue}
                        />
                    </div> :
                        <SliderValue
                            className={cn(
                                track.variants.variant[variant ?? 'default'],
                                "ml-2 border py-1 rounded-md text-center w-12",
                            )}
                            sliderValue={sliderValue}
                        />
                )
            }
            {suffixIcon && isVertical == false && <div className="relative inset-y-0 left-1 flex items-center pr-3 pointer-events-none">
                {suffixIcon}
            </div>}
        </div>
        {props.error && <div className={cn("text-red-500 font-semibold mt-2 justify-center items-center text-center", props.errorClass)}>{props.error}</div>}
    </>
})

