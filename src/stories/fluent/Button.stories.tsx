import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import { ThemeProvider } from '@fluentui/react-theme-provider';
import { Button, ButtonProps, ButtonTokens } from '@fluentui/react-button';
import { TooltipHost, Stack, IStackTokens, IPartialTheme } from '@fluentui/react';
import { AttachIcon, AsteriskIcon, AddIcon, BirthdayCakeIcon, ChevronDownIcon, ISvgIconProps, ShareIcon } from '@fluentui/react-icons';

interface IconMap {
  [icon: string]: React.FC<React.HTMLAttributes<HTMLSpanElement> & ISvgIconProps>
}

const iconMap: IconMap = {
  AttachIcon,
  AsteriskIcon,
  AddIcon,
  BirthdayCakeIcon,
  ChevronDownIcon,
};

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    icon: {
      control: {
        type: 'select',
        options: Object.keys(iconMap)
      }
    },
    iconPosition: {
      control: {
        type: 'select',
        options: [
          'before',
          'after'
        ]
      }
    },
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
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => {
  const key: string = args.icon as string;
  const selectedIcon: React.FC<React.HTMLAttributes<HTMLSpanElement> & ISvgIconProps>  = iconMap[key];
  return <ThemeProvider><Button {...args} icon={selectedIcon}>Button</Button></ThemeProvider>;

};
export const Default = Template.bind({});
const buttonArgs: ButtonProps = {
  primary: false,
  secondary: false,
  circular: false,
  disabled: false,
  tokens: {background:''},
  content: {},
  href: '',
  block: false,
  iconOnly: false,
  iconPosition: 'before',
  icon: {},
  loading: false,
  inverted: false,
  size: undefined,
  ghost: false,
  onClick: action('Click Fired'),
}
Default.args = buttonArgs;

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
          <Button iconOnly primary icon={<ShareIcon/>} onClick={click} />
        </TooltipHost>
        <TooltipHost content="Share">
          <Button iconOnly icon={<ShareIcon/>} onClick={click} />
        </TooltipHost>
        <TooltipHost content="Share">
          <Button iconOnly circular icon={<ShareIcon/>} onClick={click} />
        </TooltipHost>
        <TooltipHost content="Share">
          <Button ghost iconOnly icon={<ShareIcon/>} onClick={click} />
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

  const shadowVariant: ButtonTokens = {
    boxShadow: '0px 0.3px 0.9px rgba(0, 0, 0, 0.32), 0px 1.6px 3.6px rgba(0, 0, 0, 0.28)',
  };
  

  const myTheme: IPartialTheme = {
    components: {
      Button: {
        variants: {
          shadow: shadowVariant
        }
      }
    }
  };

  return (
    <ThemeProvider theme={myTheme}>
      <Button primary variant="shadow">Shadow Button</Button>
    </ThemeProvider>
  );

};