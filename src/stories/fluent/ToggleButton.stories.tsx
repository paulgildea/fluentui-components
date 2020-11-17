import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import { ThemeProvider } from '@fluentui/react-theme-provider';
import { ToggleButton, ToggleButtonProps, ButtonTokens } from '@fluentui/react-button';
import { IPartialTheme } from '@fluentui/react';

export default {
  title: 'Components/ToggleButton',
  component: ToggleButton,
 
} as Meta;

const Template: Story<ToggleButtonProps> = (args) => <ThemeProvider><ToggleButton {...args}>Toggle Button</ToggleButton></ThemeProvider>;

export const Default = Template.bind({});
Default.args = {
  onClick: action('clicked'),
};

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  onClick: action('clicked'),
};

export const Ghost = Template.bind({});
Ghost.args = {
  ghost: true,
  onClick: action('clicked'),
};

export const Circular = Template.bind({});
Circular.args = {
  circular: true,
  primary: true,
  onClick: action('clicked')
};

export const PaletteExample = () => {
  
  const args: ToggleButtonProps = {
    primary: true,
    onClick: action('clicked'),
  };

  const myTheme: IPartialTheme = {
    palette: {
      themePrimary: '#8e00fa',
      themeLighterAlt: '#faf5ff',
      themeLighter: '#edd6fe',
      themeLight: '#ddb1fd',
      themeTertiary: '#ba65fc',
      themeSecondary: '#9b1efb',
      themeDarkAlt: '#7f00e1',
      themeDark: '#6c00be',
      themeDarker: '#4f008c',
      neutralLighterAlt: '#faf9f8',
      neutralLighter: '#f3f2f1',
      neutralLight: '#edebe9',
      neutralQuaternaryAlt: '#e1dfdd',
      neutralQuaternary: '#d0d0d0',
      neutralTertiaryAlt: '#c8c6c4',
      neutralTertiary: '#a19f9d',
      neutralSecondary: '#605e5c',
      neutralPrimaryAlt: '#3b3a39',
      neutralPrimary: '#323130',
      neutralDark: '#201f1e',
      black: '#000000',
      white: '#ffffff',
    }
  };

  return (
    <ThemeProvider theme={myTheme}>
      <ToggleButton {...args}>Themed MenuButton</ToggleButton>
    </ThemeProvider>
  )
}

export const VariantExamples = () => {
  
  const args: ToggleButtonProps = {
    primary: true,
    onClick: action('clicked'),
    onAuxClick: action('Aux clicked'),
  };

  const shadowVariant: ButtonTokens = {
    boxShadow: '0px 0.3px 0.9px rgba(0, 0, 0, 0.32), 0px 1.6px 3.6px rgba(0, 0, 0, 0.28)',
  }

  const myTheme: IPartialTheme = {
    components: {
      CompoundButton: {
        variants: {
          shadow: shadowVariant
        } 
      }
    }
  };

  return (
    <ThemeProvider theme={myTheme}>
      <ToggleButton {...args} variant="shadow">Shadowed MenuButton</ToggleButton>
    </ThemeProvider>
  )
}