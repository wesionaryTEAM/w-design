import * as React from "react";
import { cn } from "@/lib/utils";
import { tv, VariantProps } from "tailwind-variants";

// Define basic table styles
const tableStyles = tv({
  base: "min-w-full divide-y divide-gray-200",
  variants: {
    variant: {
      primary: "bg-white text-gray-900",
      secondary: "bg-gray-50 text-gray-700",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

const tableHeaderStyles = tv({
  base: "px-6 py-3 text-left text-sm font-bold text-gray-500 uppercase tracking-wider",
});

const tableRowStyles = tv({
  base: "px-6 py-4 whitespace-nowrap",
});

const tableBodyStyles = tv({
  base: "divide-y divide-gray-200",
  variants: {
    variant: {
      primary: "bg-white",
      secondary: "bg-gray-50",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

// Types for the DataTable variants
type DataTableVariants = VariantProps<typeof tableStyles>;

export interface DataTableProps extends DataTableVariants {
  columns: Array<{
    label: string;
    accessor: string;
    renderCell?: (row: any) => React.ReactNode;
  }>;
  data: Array<Record<string, any>>;
  renderRow?: (
    row: Record<string, any>,
    columns: DataTableProps["columns"]
  ) => React.ReactNode;
}

export const DataTable: React.FC<DataTableProps> = ({
  columns,
  data,
  variant = "primary",
  renderRow,
}) => {
  return (
    <div className='flex flex-col'>
      <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
        <div className='inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8'>
          <div className='overflow-hidden border-b border-gray-200 shadow sm:rounded-lg'>
            <table className={cn(tableStyles({ variant }))}>
              <thead className='bg-gray-50'>
                <tr>
                  {columns.map(column => (
                    <th
                      key={column.accessor}
                      className={cn(tableHeaderStyles())}
                    >
                      {column.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className={cn(tableBodyStyles({ variant }))}>
                {data.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {renderRow
                      ? renderRow(row, columns)
                      : columns.map(column => (
                          <td
                            key={column.accessor}
                            className={cn(tableRowStyles())}
                          >
                            {column.renderCell
                              ? column.renderCell(row)
                              : row[column.accessor]}
                          </td>
                        ))}
                  </tr>
                ))}
              </tbody>
            </table>
            {data?.length == 0 && (
              <h3 className='mx-auto my-6 w-fit'>No data available!</h3>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
