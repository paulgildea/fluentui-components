import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { Image, ImageProps} from '@fluentui/react-components';

export default {
  title: 'Components/Image',
  component: Image,
  argTypes: {
    fit: {
      control: {
        type: 'select',
        options: [
          'none',
          'center',
          'contain',
          'cover',
        ]
      }
    }
  }
 
} as Meta;

const Template: Story<ImageProps> = (args) => {

  return (
    // <FluentProvider theme={webLightTheme}>
    //   <Image {...args} />
    // </FluentProvider>
    <div></div>
  );
} 
export const Default = Template.bind({});

const imageArgs: ImageProps = {
  src: 'https://via.placeholder.com/300x200',
  circular: false,
  rounded: false,
  bordered: false,
  fit: 'none',
  fluid: false,
  style: {
    width: '300px',
    height: '200px',
    border: '' }
}
Default.args = imageArgs;

