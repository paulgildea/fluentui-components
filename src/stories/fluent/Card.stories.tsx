import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { ThemeProvider } from '@fluentui/react-theme-provider';
import { Card, CardProps, CardHeader, CardBody, CardFooter } from '@fluentui/react-cards/lib/next';

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: [
          'smallest',
          'smaller',
          'small',
          'medium',
          'large',
          'larger',
          'largest'
        ]
      }
    }
  }
 
} as Meta;

const Template: Story<CardProps> = (args) => {

  //TODO: There's known issue where Cards is broken - https://github.com/microsoft/fluentui/issues/16010

  return (
    <ThemeProvider>
      <Card {...args}>
        <CardHeader >Header</CardHeader>
        <CardBody>Card Body</CardBody>
        <CardFooter>Footer</CardFooter>
      </Card>
    </ThemeProvider>
  );
} 
export const Default = Template.bind({});

const cardArgs: CardProps = {
  size:'medium',
  tokens: {
    "background":"blue"
  }
}
Default.args = cardArgs;

