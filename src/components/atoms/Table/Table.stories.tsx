import { Meta, StoryObj } from "@storybook/react";
import { DataTable, DataTableProps } from ".";

const meta: Meta<DataTableProps> = {
  title: "Design System/Atoms/DataTable",
  component: DataTable,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary"],
    },
  },
};

export default meta;

const handleSort = () => {};

// Define stories using StoryObj pattern
export const Default: StoryObj<DataTableProps> = {
  args: {
    columns: [
      {
        label: "Name",
        accessor: "name",
        handleSort,
      },
      { label: "Age", accessor: "age", handleSort },
      {
        label: "Role",
        accessor: "role",
        handleSort,
      },
      {
        label: "Address",
        accessor: "address",
        handleSort,
      },
    ],
    data: [
      { name: "John Doe", age: 28, role: "Developer", address: "UK" },
      { name: "Jane Smith", age: 34, role: "Designer", address: "UK" },
      { name: "Michael Brown", age: 45, role: "Manager", address: "NY" },
    ],
    variant: "primary",
    needSorting: true,
  },
};

export const CustomCellRendering: StoryObj<DataTableProps> = {
  args: {
    columns: [
      {
        label: "Name",
        accessor: "name",
        handleSort,
      },
      {
        label: "Age",
        accessor: "age",
        handleSort,
        renderCell: row => {
          return <div className='font-bold'>{row.age}</div>;
        },
      },
      {
        label: "Role",
        accessor: "role",
        handleSort,
      },
      {
        label: "Address",
        accessor: "address",
        handleSort,
      },
    ],
    data: [
      { name: "John Doe", age: 28, role: "Developer", address: "UK" },
      { name: "Jane Smith", age: 34, role: "Designer", address: "UK" },
      { name: "Michael Brown", age: 45, role: "Manager", address: "NY" },
    ],
    variant: "primary",
    needSorting: true,
  },
};

export const NoData: StoryObj<DataTableProps> = {
  args: {
    columns: [
      { label: "Name", accessor: "name" },
      { label: "Age", accessor: "age" },
      { label: "Role", accessor: "role" },
    ],
    data: [], // Empty data
    variant: "primary",
    needSorting: false,
  },
};
