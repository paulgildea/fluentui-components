import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { ThemeProvider } from '@fluentui/react-theme-provider';
import { Text, TextProps } from '@fluentui/react-text';

export default {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: [
          'caption',
          'body',
          'subHeadline',
          'headline',
          'title1',
          'title2',
          'title3',
          'largeTitle',
          'display']
      }
    },
  }
 
} as Meta;

const Template: Story<TextProps> = (args) => {

  return (
    <ThemeProvider>
      <Text {...args}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum tempore, cum sapiente repellendus amet magnam error architecto veniam corporis neque voluptatibus possimus officiis? Assumenda pariatur quam porro accusamus, excepturi consequatur?</Text>
    </ThemeProvider>
  );
} 
export const Default = Template.bind({});

const textArgs: TextProps = {
  variant: 'body',
}
Default.args = textArgs;

