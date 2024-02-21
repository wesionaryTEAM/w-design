import type { Meta, StoryObj } from '@storybook/react';
import {Textarea} from '.';

const meta: Meta<typeof Textarea> = {
  title: 'Design System/Atoms/Textarea',
  component: Textarea,

  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Textarea>;

export const Text: Story = {
  args: {
    disabled: false,
    placeholder: 'Text Input',
  },
};
