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

// Define stories using StoryObj pattern
export const Default: StoryObj<DataTableProps> = {
  args: {
    columns: [
      { label: "Name", accessor: "name" },
      { label: "Age", accessor: "age" },
      { label: "Role", accessor: "role" },
      { label: "Address", accessor: "address" },
    ],
    data: [
      { name: "John Doe", age: 28, role: "Developer", address: "UK" },
      { name: "Jane Smith", age: 34, role: "Designer", address: "UK" },
      { name: "Michael Brown", age: 45, role: "Manager", address: "NY" },
    ],
    variant: "primary",
  },
};

export const CustomCellRendering: StoryObj<DataTableProps> = {
  args: {
    columns: [
      { label: "Name", accessor: "name" },
      {
        label: "Age",
        accessor: "age",
        renderCell: row => {
          return <div className='font-bold'>{row.age}</div>;
        },
      },
      { label: "Role", accessor: "role" },
      { label: "Address", accessor: "address" },
    ],
    data: [
      { name: "John Doe", age: 28, role: "Developer", address: "UK" },
      { name: "Jane Smith", age: 34, role: "Designer", address: "UK" },
      { name: "Michael Brown", age: 45, role: "Manager", address: "NY" },
    ],
    variant: "primary",
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
  },
};
