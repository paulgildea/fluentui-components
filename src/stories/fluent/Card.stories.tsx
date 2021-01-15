import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import { ThemeProvider } from '@fluentui/react-theme-provider';
import { Card, CardProps, CardHeader, CardBody, CardFooter, CardSectionTokens, CardTokens } from '@fluentui/react-cards/lib/next';
import { Text } from '@fluentui/react-text';
import { Image } from '@fluentui/react-image';
import { IPartialTheme } from '@fluentui/react';
import { CardSection } from '@fluentui/react-cards';

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
  const fullBleedVariant: CardSectionTokens = {
    padding: '0px',
  }

  const fullBleedCardVariant: CardTokens = {
    padding: '0px',
    background: 'red',
  }
  // Variants 
  const myTheme: IPartialTheme = {
    components: {
      Card: {
        variants: {
          fullBleed: fullBleedCardVariant
        }
      }
    }
  };


  return (
    <ThemeProvider theme={myTheme}>
      <Card {...args} variant="fullBleed">
        <CardSection>
          <Image src={args.imageSrc} />
        </CardSection>
        <CardFooter>
          <Text variant="headline">Fluent base card</Text>
          <Text variant="body">Specification</Text>
        </CardFooter>
      </Card>
    </ThemeProvider>
  );
} 
export const Default = Template.bind({});

const cardArgs: CardProps = {
  compact: false,
  
  horizontal: false,
  centered: false,
  expandable: false,
  inverted: false,
  quiet: false,
  selected: false,
  size:'medium',
  tokens: {
    "background":""
  },
  imageSrc: 'https://via.placeholder.com/280x106',
  onClick: action('Card was clicked')
}
Default.args = cardArgs;

