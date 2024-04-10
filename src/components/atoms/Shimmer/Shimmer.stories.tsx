import type { Meta, StoryObj } from '@storybook/react';
import { Shimmer } from '.';

const meta: Meta<typeof Shimmer> = {
    title: 'Design System/Atoms/Shimmer',
    decorators: [
        (Story) => (
            <div>
                <p className='m-2 font-bold'>📝 Note: This component is an example only so please try playing with the props and customize as per need.</p>
                <div className='p-4'>
                    <Story />
                </div>
            </div>
        )
    ],
    component: Shimmer,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            options: ['default', 'primary', 'secondary'],
            defaultValue: 'default',
            control: { type: 'radio' }
        },
        animate: {
            control: { type: 'boolean' },
            defaultValue: true,
            description: "Sets The Shimmer Animation On/Off"
        },
        width: {
            table: {
                disable: true
            }
        },
        className: {
            table: {
                disable: true
            }
        }
    },
    render: ({ variant, animate }) => {
        return (
            <Shimmer className='flex gap-2' variant={variant} animate={animate}>
                <Shimmer.Circle height='xxs' width='xxs' variant={variant} className='mr-2' animate={animate} />
                <Shimmer.Box variant={variant} animate={animate} />
                <Shimmer className='flex flex-col gap-2 mt-8' variant={variant} animate={animate}>
                    <Shimmer.Line width='lg' variant={variant} animate={animate} />
                    <Shimmer.Line width='xl' variant={variant} animate={animate} />
                    <Shimmer.Line width='xl' variant={variant} animate={animate} />
                </Shimmer>
            </Shimmer>
        )
    }
};

export default meta;
type Example = StoryObj<typeof Shimmer>;

export const Default: Example = {
    args: {
        variant: 'default',
        animate: true
    }
};
