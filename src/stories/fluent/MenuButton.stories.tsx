import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import { ThemeProvider } from '@fluentui/react-theme-provider';
import {MenuButton, MenuButtonProps, MenuButtonTokens } from '@fluentui/react-button';
import {IPartialTheme} from '@fluentui/react';

export default {
  title: 'Components/MenuButton',
  component: MenuButton,
 
} as Meta;

const Template: Story<MenuButtonProps> = (args) => <ThemeProvider><MenuButton {...args}>Menu Button</MenuButton></ThemeProvider>;

export const Default = Template.bind({});
Default.args = {
  onClick: action('clicked'),
  onAuxClick: action('Aux click'),
};

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  onClick: action('clicked'),
  onAuxClick: action('Aux click'),
};

export const Ghost = Template.bind({});
Ghost.args = {
  ghost: true,
  onClick: action('clicked'),
  onAuxClick: action('Aux click'),
};

export const Circular = Template.bind({});
Circular.args = {
  circular: true,
  primary: true,
  onClick: action('clicked')
};

export const PaletteExample = () => {
  
  const args: MenuButtonProps = {
    onClick: action('clicked'),
    onAuxClick: action('Aux clicked'),
    primary: true,
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
      <MenuButton {...args}>Themed MenuButton</MenuButton>
    </ThemeProvider>
  )
}

export const VariantExamples = () => {
  
  const args: MenuButtonProps = {
    onClick: action('clicked'),
    onAuxClick: action('Aux clicked'),
    primary: true,
  };

  const shadowVariant: MenuButtonTokens = {
    boxShadow: '0px 0.3px 0.9px rgba(0, 0, 0, 0.32), 0px 1.6px 3.6px rgba(0, 0, 0, 0.28)',
  }

  const myTheme: IPartialTheme = {
    components: {
      MenuButton: {
        variants: {
          shadow: shadowVariant
        } 
      }
    }
  };

  return (
    <ThemeProvider theme={myTheme}>
      <MenuButton {...args} variant="shadow">Shadowed MenuButton</MenuButton>
    </ThemeProvider>
  )
}