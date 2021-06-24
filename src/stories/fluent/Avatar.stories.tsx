import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { Avatar, AvatarProps, FluentProvider, webLightTheme } from '@fluentui/react-components';
import { CounterBadge } from '@fluentui/react-badge';
import { withDesign } from 'storybook-addon-designs';
import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from '@storybook/addon-docs/blocks';

export default {
  title: 'Components/Avatar',
  component: Avatar,
  decorators: [withDesign],
  argTypes: {
    name: {
      control: {
        type: 'text'
      }
    },
    size: {
      control: {
        type: 'select',
        options: [ 20, 24, 28, 32, 36, 40, 48, 56, 64, 72, 96, 120, 128 ]
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
  },
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories />
        </>
      ),
    },
  },
} as Meta;

const Template: Story<AvatarProps> = (args) => <FluentProvider theme={webLightTheme}><Avatar {...args} /></FluentProvider>;
export const Default = Template.bind({});

const avatarArgs: AvatarProps = {
  color: 'colorful'
}
Default.args = avatarArgs;
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/3SlxyaJA3tpLs5rVZ4oTVj/Avatar?node-id=1%3A32'
  }
}

export const ShapeVariants = Template.bind({});
ShapeVariants.args = {
  square: true,
  name: 'Paul Gildea',
  size: 72,
  color: 'colorful'
} as AvatarProps
ShapeVariants.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/3SlxyaJA3tpLs5rVZ4oTVj/Avatar?node-id=1%3A113'
  }
}

export const Badge = () => {

  return (
    <FluentProvider theme={webLightTheme}>
      <CounterBadge count={13} shape="circular" color="severe"></CounterBadge>
    </FluentProvider>
  )
}