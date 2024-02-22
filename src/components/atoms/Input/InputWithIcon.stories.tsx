import type { Meta, StoryObj } from '@storybook/react';
import { InputWithIcon} from '.';

const meta: Meta<typeof InputWithIcon> = {
  title: 'Design System/Atoms/Input',
  component: InputWithIcon,

  tags: ['autodocs'],
};

export default meta;

type InputWithIconStory = StoryObj<typeof InputWithIcon>;


 export const WithTickInFront: InputWithIconStory = {
  args: {
    variant: "default",
    disabled: false,
    required: true,
    type: 'text',
    placeholder: 'Text Input',
    prefixIcon: <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5 1.5-1.5L9 14.5 18.5 5 20 6z" fill="#000"/></svg>
  },
};
 export const EmailWithTickInBack: InputWithIconStory = {
  args: {
    variant: "default",
    disabled: false,
    type: 'email',
    placeholder: 'Email Input',
    suffixIcon: <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5 1.5-1.5L9 14.5 18.5 5 20 6z" fill="#0f0"/></svg>
  },
};
