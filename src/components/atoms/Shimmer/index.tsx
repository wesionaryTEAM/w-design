import { cn } from "@/lib/utils"


interface ShimmerProps extends React.HTMLAttributes<HTMLDivElement> {
}

export const Shimmer = ({
    className,
    ...props
}: ShimmerProps) => {
    return (
        <div
            className={cn("animate-pulse rounded-md", className)}
            {...props}
        />
    )
}

