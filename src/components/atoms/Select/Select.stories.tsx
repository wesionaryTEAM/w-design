import type { Meta, StoryObj } from "@storybook/react";
import { SelectInput } from ".";

const meta: Meta<typeof SelectInput> = {
  title: "Design System/Molecules/SelectInput",
  component: SelectInput,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SelectInput>;

const options = [
  { value: "1", label: "Option 1" },
  { value: "2", label: "Option 2" },
  { value: "3", label: "Option 3" },
  { value: "4", label: "Option 4" },
  { value: "5", label: "Option 5" },
  { value: "6", label: "Option 6" },
  { value: "7", label: "Option 7" },
  { value: "8", label: "Option 8" },
  { value: "9", label: "Option 9" },
  { value: "10", label: "Option 10" },
  { value: "11", label: "Option 11" },
  { value: "12", label: "Option 12" },
  { value: "13", label: "Option 13" },
  { value: "14", label: "Option 14" },
  { value: "15", label: "Option 15" },
  { value: "16", label: "Option 16" },
  { value: "17", label: "Option 17" },
  { value: "18", label: "Option 18" },
  { value: "19", label: "Option 19" },
  { value: "20", label: "Option 20" },
  { value: "21", label: "Option 21" },
  { value: "22", label: "Option 22" },
  { value: "23", label: "Option 23" },
  { value: "24", label: "Option 24" },
  { value: "25", label: "Option 25" },
  { value: "26", label: "Option 26" },
  { value: "27", label: "Option 27" },
  { value: "28", label: "Option 28" },
  { value: "29", label: "Option 29" },
  { value: "30", label: "Option 30" },
];

export const BasicSelect: Story = {
  args: {
    options,
    value: { value: "1", label: "Option 1" },
  },
};
export const ErrorState: Story = {
  args: {
    error: "This is a required field & cannot be empty",
    required: true,
    label: "Error Select",
    options,
  },
};

export const DisabledSelect: Story = {
  args: {
    disabled: true,
    options,
  },
};

export const RequiredSelect: Story = {
  args: {
    required: true,
    label: "Required Select",
    options,
  },
};

export const MultiSelect: Story = {
  args: {
    required: true,
    label: "Multi Select",
    multiple: true,
    options,
    closeMenuOnSelect: false,
    isClearable: true,
    error: "This is a required field & cannot be empty",
  },
};
