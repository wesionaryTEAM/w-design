import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '.';

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

export const PrimaryDisabled: Story = {
  args: {
    ...Primary.args,
    name: 'Primary Disabled Button',
    disabled: true,
  },
};

export const Destructive: Story = {
  args: {
    name: 'Destructive Button',
    variant: 'destructive',
  },
};

export const DestructiveDisabled: Story = {
  args: {
    ...Destructive.args,
    name: 'Destructive Disabled Button',
    disabled: true,
  },
};

export const Ghost: Story = {
  args: {
    name: 'Ghost Button',
    variant: 'ghost',
  },
};

export const GhostDisabled: Story = {
  args: {
    ...Ghost.args,
    name: 'Ghost Disabled Button',
    disabled: true,
  },
};

export const Outline: Story = {
  args: {
    name: 'Outline Button',
    variant: 'outline',
  },
};

export const OutlineDisabled: Story = {
  args: {
    ...Outline.args,
    name: 'Outline Disabled Button',
    disabled: true,
  },
};

export const Secondary: Story = {
  args: {
    name: 'Secondary Button',
    variant: 'secondary',
  },
};

export const SecondaryDisabled: Story = {
  args: {
    ...Secondary.args,
    name: 'Secondary Disabled Button',
    disabled: true,
  },
};

export const Link: Story = {
  args: {
    name: 'Link Button',
    variant: 'link',
  },
};

export const LinkDisabled: Story = {
  args: {
    ...Link.args,
    name: 'Link Disabled Button',
    disabled: true,
  },
};

export const Icon: Story = {
  args: {
    name: 'Icon Button',
    variant: 'icon',
  },
};

export const IconDisabled: Story = {
  args: {
    ...Icon.args,
    name: 'Icon Disabled Button',
    disabled: true,
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