import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { ThemeProvider } from '@fluentui/react-theme-provider';
import { Avatar, AvatarProps, avatarSizeValues } from '@fluentui/react-avatar';

export default {
  title: 'Components/Avatar',
  component: Avatar,
  argTypes: {
    name: {
      control: {
        type: 'text'
      }
    },
    size: {
      control: {
        type: 'select',
        options: avatarSizeValues
      }
    },
    activeDisplay: {
      control: {
        type: 'select',
        options: [
          'ring',
          'shadow',
          'glow',
          'ring-shadow',
          'ring-glow'
        ]
      }
    },
    tokens: {
      control: {
        type: 'object'
      }
    }
  }
 
} as Meta;

const Template: Story<AvatarProps> = (args) => <ThemeProvider><Avatar {...args} /></ThemeProvider>;
export const Default = Template.bind({});

const avatarArgs: AvatarProps = {
  name: undefined,
  size: 32,
  active: false,
  square: false,
  tokens: {
    activeRingColor: '',
    activeGlowColor: '',
    background: '',
    color: '',
    borderRadius: '',
    fontSize: '',
    fontWeight: '',
  }
}
Default.args = avatarArgs;

