import type { Meta, StoryObj } from '@storybook/react';
import { Shimmer } from '.';

const meta: Meta<typeof Shimmer> = {
    title: 'Design System/Atoms/Shimmer',
    component: Shimmer,
    tags: ['autodocs'],
    argTypes: {
        className: {
            control: {
                type: 'text',
            },
            description: 'Additional classes to add to the shimmer',
        },
    }
};

export default meta;

type Story = StoryObj<typeof Shimmer>;

export const Default: Story = {
    args: {
        className: 'w-[100px] h-[100px] bg-slate-100',
    },
};

export const Circle: Story = {
    args: {
        className: `${Default.args?.className} rounded-full`,
    },
};


export const Line: Story = {
    args: {
        className: `w-[100px] h-[10px] bg-slate-100  rounded-md`,
    },
};

