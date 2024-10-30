import * as React from "react";
import { cn } from "@/lib/utils";
import { tv, VariantProps } from "tailwind-variants";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";

const paginationContainer = tv({
  base: "flex items-center space-x-2",
  variants: {
    size: {
      sm: "space-x-1 text-sm",
      md: "space-x-2 text-base",
      lg: "space-x-3 text-lg",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

const paginationButton = tv({
  base: "px-3 py-1 border rounded-md cursor-pointer flex items-center justify-center",
  variants: {
    variant: {
      primary: "border-gray-300 bg-white text-gray-700 hover:bg-gray-100",
      secondary: "border-gray-400 bg-gray-200 text-gray-800 hover:bg-gray-300",
      destructive: "border-red-400 bg-red-50 text-red-700 hover:bg-red-100",
    },
    active: {
      true: "font-bold border-blue-500 bg-blue-100",
      false: "",
    },
    icon: {
      true: "w-8 h-8 p-1",
      false: "",
    },
  },
  defaultVariants: {
    variant: "primary",
    active: false,
    icon: false,
  },
});

type PaginationVariants = VariantProps<typeof paginationContainer>;

interface PaginationProps extends PaginationVariants {
  total: number;
  currentPage: number;
  pageSize: number;
  onPageChange: (page: number) => void;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "destructive";
  icon?: React.ReactNode | any;
}

export const Pagination: React.FC<PaginationProps> = ({
  total,
  currentPage,
  pageSize,
  onPageChange,
  size = "md",
  variant = "primary",
  icon = false,
}) => {
  const totalPages = Math.ceil(total / pageSize);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <span
          key={i}
          className={cn(
            paginationButton({ variant, active: i === currentPage })
          )}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </span>
      );
    }
    return pages;
  };

  return (
    <div className={cn(paginationContainer({ size }))}>
      {/* Previous Button */}
      <button
        className={cn(paginationButton({ variant, icon }))}
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        {icon ? <ChevronLeftIcon className='h-4 w-4' /> : "Prev"}
      </button>

      {/* Page Numbers */}
      {renderPageNumbers()}

      {/* Next Button */}
      <button
        className={cn(paginationButton({ variant, icon }))}
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        {icon ? <ChevronRightIcon className='h-4 w-4' /> : "Next"}
      </button>
    </div>
  );
};
