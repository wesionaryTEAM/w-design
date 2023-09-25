import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../index';

const meta: Meta<typeof Button> = {
  title: 'Design System/Atoms/Button',
  component: Button,

  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    name: 'Primary Button',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    name: 'Secondary Button',
    variant: 'secondary',
  },
};

export const Small: Story = {
  args: {
    ...Primary.args,
    name: 'Small Size Button',
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    ...Primary.args,
    name: 'Medium Size Button',
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    ...Primary.args,
    name: 'Large Size Button',
    size: 'lg',
  },
};