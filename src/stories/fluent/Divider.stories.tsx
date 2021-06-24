import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import { Divider, DividerProps } from '@fluentui/react-divider';
import { Share24Regular } from '@fluentui/react-icons';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Components/Divider',
  component: Divider,
  argTypes: {
    
  },
  decorators: [withDesign]
 
} as Meta;

const Template: Story<DividerProps> = (args) => {

  return (
    <FluentProvider theme={webLightTheme}>
      <Divider {...args} />
      <Divider {...args}><Share24Regular/></Divider>
    </FluentProvider>
  );
} 
export const Default = Template.bind({});

const imageArgs: DividerProps = {
  alignContent: "center",
  vertical: false,
}
Default.args = imageArgs;
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/TQO8qAOcrwU3ig2CTcan0e/Divider?node-id=6%3A305',
  }
}

