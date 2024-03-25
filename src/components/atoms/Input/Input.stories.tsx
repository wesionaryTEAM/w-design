import type { Meta, StoryObj } from '@storybook/react';
import {Input} from '.';

const meta: Meta<typeof Input> = {
  title: 'Design System/Atoms/Input',
  component: Input,

  tags: ['autodocs'],
};

export default meta;

type InputStory = StoryObj<typeof Input>;

export const Text: InputStory = {
  args: {
    variant: "default",
    disabled: false,
    type: 'text',
    placeholder: 'Text Input',
  },
};
export const Password: InputStory = {
  args: {
    variant: "default",
    disabled: false,
    type: 'password',
    placeholder: 'Password Input',
  },
};
export const Email: InputStory = {
  args: {
    variant: "default",
    disabled: false,
    type: 'email',
    placeholder: 'Email Input',
  },
};
export const Number: InputStory = {
  args: {
    variant: "default",
    disabled: false,
    type: 'number',
    placeholder: 'Number Input',
  },
};

export const WithCountNoMaxLength: InputStory = {
  args: {
    variant: "default",
    disabled: false,
    type: 'text',
    placeholder: 'With Count Input',
    showCount: true,
  },
};


export const WithCount: InputStory = {
  args: {
    variant: "default",
    disabled: false,
    type: 'text',
    placeholder: 'With Count Input',
    showCount: true,
    maxLength: 10,
  },
};


export const Search: InputStory = {
  args: {
    variant: "default",
    disabled: false,
    type: 'search',
    placeholder: 'Search Input',
  },
};


export const Default: InputStory = {
  args: {
    variant: "default",
    disabled: false,
    type: 'text',
    placeholder: 'Text Input',
  },
}
 export const WithTickInFront: InputStory = {
  args: {
    variant: "default",
    disabled: false,
    required: true,
    type: 'text',
    placeholder: 'Text Input',
    prefixIcon: <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5 1.5-1.5L9 14.5 18.5 5 20 6z" fill="#000"/></svg>
  },
};
 export const EmailWithTickInBack: InputStory = {
  args: {
    variant: "default",
    disabled: false,
    type: 'email',
    placeholder: 'Email Input',
    suffixIcon: <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5 1.5-1.5L9 14.5 18.5 5 20 6z" fill="#0f0"/></svg>
  },
};
