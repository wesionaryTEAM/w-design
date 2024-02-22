import type { Meta, StoryObj } from '@storybook/react';
import {Input} from '.';

const meta: Meta<typeof Input> = {
  title: 'Design System/Atoms/Input',
  component: Input,

  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Text: Story = {
  args: {
    variant: "default",
    disabled: false,
    type: 'text',
    placeholder: 'Text Input',
  },
};
export const Password: Story = {
  args: {
    variant: "default",
    disabled: false,
    type: 'password',
    placeholder: 'Password Input',
  },
};
export const Email: Story = {
  args: {
    variant: "default",
    disabled: false,
    type: 'email',
    placeholder: 'Email Input',
  },
};
export const Number: Story = {
  args: {
    variant: "default",
    disabled: false,
    type: 'number',
    placeholder: 'Number Input',
  },
};
export const Search: Story = {
  args: {
    variant: "default",
    disabled: false,
    type: 'search',
    placeholder: 'Search Input',
  },
};
