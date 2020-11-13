import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { ThemeProvider } from '@fluentui/react-theme-provider';
import { ShareIcon } from '@fluentui/react-icons';
import {Button, ButtonProps, ButtonTokens, ButtonVariants, ToggleButton } from '@fluentui/react-button';
import {TooltipHost, Stack, IStackTokens, IPartialTheme, Slider, Toggle} from '@fluentui/react';

// export default {
//   title: 'Example/Button',
//   component: Button,
//   argTypes: {
//     backgroundColor: { control: 'color' },
//   },
// } as Meta;

// const Template: Story<ButtonProps> = (args) => <ThemeProvider><Button {...args}>Hello</Button></ThemeProvider>;

// export const Primary = Template.bind({});
// Primary.args = {
//   primary: true,
//   ghost: false,
//   fluid: false,
//   secondary: false,
  
// };

// export const Ghost = Template.bind({});
// Ghost.args = {
//   ghost: true,
// };

const stackTokens: IStackTokens = {childrenGap: 40};
export const primaryButtons = () => {

  return (
    <ThemeProvider>
      <Stack horizontal tokens={stackTokens}>
        <Button primary>Primary Button</Button>
        <Button secondary>Secondary Button</Button>
      </Stack>
    </ThemeProvider>
  )
}

export const iconButton = () => {
  return (
    <ThemeProvider>
      <Button icon={<ShareIcon/>}>Share</Button>
    </ThemeProvider>
  );
}

export const iconButtonWithTooltip = () => {
  const click = () => {
    alert('Share Button was clicked');
  }

  return (
    <ThemeProvider>
      <Stack horizontal tokens={stackTokens}>
        <TooltipHost content="Share">
          <Button icon={<ShareIcon/>} onClick={click} />
        </TooltipHost>
        <TooltipHost content="Share">
          <Button ghost icon={<ShareIcon/>} onClick={click} />
        </TooltipHost>
      </Stack>
    </ThemeProvider>
  )
}


export const themingBackwardsCompatibility = () => {

  const myTheme: IPartialTheme = {
    palette: {
      themePrimary: '#e01242',
      themeLighterAlt: '#fef4f7',
      themeLighter: '#fad5de',
      themeLight: '#f6b2c2',
      themeTertiary: '#ed6a88',
      themeSecondary: '#e42b57',
      themeDarkAlt: '#ca103c',
      themeDark: '#ab0e32',
      themeDarker: '#7e0a25',
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
    },
  };

  return (
    <ThemeProvider theme={myTheme}>
      <Stack horizontal tokens={stackTokens}>
        <Button primary>Themed Button</Button>
      </Stack>
    </ThemeProvider>
  )
};

export const customButtonVariants = () => {

  const pillVariant: ButtonTokens = {
    borderRadius: '30px',
  };
  

  const myTheme: IPartialTheme = {
    components: {
      Button: {
        variants: {
          pill: pillVariant
        }
      }
    }
  };

  return (
    <ThemeProvider theme={myTheme}>
      <Button primary variant="pill">Pill Button</Button>
    </ThemeProvider>
  );

};