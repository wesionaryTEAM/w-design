import * as React from "react";
import { useState } from "react";

import { cn } from "@/lib/utils";
import { tv, VariantProps } from "tailwind-variants";

// Define dropdown styles
const dropdown = tv({
  base: "relative inline-block text-left",
  variants: {
    size: {
      sm: "w-32",
      md: "w-48",
      lg: "w-64",
    },
    variant: {
      primary: "bg-white border border-gray-200 shadow-lg rounded-md",
      secondary: "bg-gray-100 border border-gray-300 shadow-md rounded-lg",
      destructive: "bg-red-50 border border-red-200 shadow-lg rounded-md",
    },
  },
  defaultVariants: {
    size: "md",
    variant: "primary",
  },
});

const dropdownItem = tv({
  base: "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer",
  variants: {
    destructive: "text-red-600 hover:bg-red-100",
  },
});

type DropdownVariants = VariantProps<typeof dropdown>;

export interface DropdownProps extends DropdownVariants {
  items: Array<{
    label: string;
    onClick: () => void;
    destructive?: boolean;
    icon?: React.ReactNode;
  }>;
  triggerLabel: string;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "destructive";
  icon?: React.ReactNode;
}

export const Dropdown: React.FC<DropdownProps> = ({
  items,
  triggerLabel,
  size = "md",
  variant = "primary",
  icon,
}) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setOpen(!open);
  };

  const closeDropdown = () => {
    setOpen(false);
  };

  // Close the dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        closeDropdown();
      }
    };

    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className={cn(dropdown({ size, variant }))}>
      {/* Dropdown Trigger */}
      <button
        className='inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none'
        onClick={toggleDropdown}
      >
        {icon && <span className='mr-2'>{icon}</span>}
        {triggerLabel}
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div
          className='absolute right-0 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5'
          role='menu'
        >
          <div className='py-1' role='none'>
            {items.map((item, index) => (
              <span
                key={index}
                className={cn(
                  dropdownItem({ destructive: !!item.destructive as any })
                )}
                onClick={() => {
                  item.onClick();
                  closeDropdown();
                }}
                role='menuitem'
              >
                {item?.icon && <span className='mr-2'>{item?.icon}</span>}
                {item.label}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
