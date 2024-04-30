import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { PaginationState, Table } from "@tanstack/react-table";
import {
  Button,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../atoms";

export interface PaginationData {
  state: PaginationState
  handlePaginationChange?: (_: PaginationState) => void;
  count: number
  hasNext: boolean
}
interface DataTablePaginationProps<TData> {
  table: Table<TData>;
  paginationData: PaginationData;
}

const DataTablePagination = <TData extends unknown>({
  table,
  paginationData,
}: DataTablePaginationProps<TData>) => {
  return (
    <div className='flex items-center justify-center px-2'>
      <div className='flex items-center space-x-6 lg:space-x-8'>
        <div className='flex items-center space-x-2'>
          <p className='text-sm font-medium'>Rows per page</p>
          <Select
            value={`${table.getState().pagination.pageSize}`}
            onValueChange={value => {
              paginationData.handlePaginationChange?.({
                ...table.getState().pagination,
                pageSize: Number(value),
              });
            }}
          >
            <SelectTrigger className='h-8 w-[70px]'>
              <SelectValue placeholder={table.getState().pagination.pageSize} />
            </SelectTrigger>
            <SelectContent side='top'>
              {[10, 20, 30, 40, 50].map(pageSize => (
                <SelectItem key={pageSize} value={`${pageSize}`}>
                  {pageSize}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        {paginationData?.count && (
          <div className='flex w-[100px] items-center justify-center text-sm font-medium'>
            Page {table.getState().pagination.pageIndex} of{" "}
            {Math.ceil(
              paginationData.count / table.getState().pagination.pageSize
            )}
          </div>
        )}
        <div className='flex items-center space-x-2'>
          <Button
            name=''
            prefixIcon={<ChevronLeftIcon className='h-4 w-4' />}
            variant='outline'
            className='h-8 w-8 p-0'
            onClick={() =>
              paginationData.handlePaginationChange?.({
                ...table.getState().pagination,
                pageIndex: table.getState().pagination.pageIndex - 1,
              })
            }
            disabled={table.getState().pagination.pageIndex === 1}
          />
          <Button
            name=''
            suffixIcon={<ChevronRightIcon className='h-4 w-4' />}
            variant='outline'
            className='h-8 w-8 p-0'
            onClick={() =>
              paginationData.handlePaginationChange?.({
                ...table.getState().pagination,
                pageIndex: table.getState().pagination.pageIndex + 1,
              })
            }
            disabled={!paginationData?.hasNext}
          ></Button>
        </div>
      </div>
    </div>
  );
};
export { DataTablePagination };
