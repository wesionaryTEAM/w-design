import type { Meta, StoryObj } from "@storybook/react";
import { DataTable } from ".";

const meta: Meta<typeof DataTable> = {
  title: "Design System/Molecules/DataTable",
  component: DataTable,

  tags: ["autodocs"],
};

export default meta;

type DataTableStory = StoryObj<typeof DataTable>;

export const SimpleDataTable: DataTableStory = {
  args: {
    data: [
      {
        name: "John",
        age: 30,
      },
      {
        name: "Jane",
        age: 25,
      },
    ],
    columns: [
      {
        header: "Name",
        accessorKey: "name",
      },
      {
        header: "Age",
        accessorKey: "age",
      },
    ],
  },
};

export const DataTableWithPagination: DataTableStory = {
  args: {
    pagination: {
      state: {
        pageSize: 10,
        pageIndex: 0,
      },
      count: 2,
      hasNext: false,
      handlePaginationChange: () => { },
    },
    data: [
      {
        name: "John",
        age: 30,
      },
      {
        name: "Jane",
        age: 25,
      },
    ],
    columns: [
      {
        header: "Name",
        accessorKey: "name",
      },
      {
        header: "Age",
        accessorKey: "age",
      },
    ],
  },
};
