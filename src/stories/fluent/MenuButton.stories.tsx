import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import { ThemeProvider } from '@fluentui/react-theme-provider';
import {ButtonProps, MenuButton, MenuButtonProps, MenuButtonTokens } from '@fluentui/react-button';
import { IPartialTheme, Stack, IStackTokens} from '@fluentui/react';
import { AttachIcon, AsteriskIcon, AddIcon, BirthdayCakeIcon, DownloadIcon, CaretDownSolid8Icon, ChevronDownIcon, ISvgIconProps } from '@fluentui/react-icons';

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
  title: 'Components/Button/MenuButton',
  component: MenuButton,
  argTypes: {
    icon: {
      control: {
        type: 'select',
        options: Object.keys(iconMap)
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
    tokens: {
      control: {
        type: 'object'
      }
    }
  }
} as Meta;



const Template: Story<MenuButtonProps> = (args) => {
  const selectedIcon: React.FC<React.HTMLAttributes<HTMLSpanElement> & ISvgIconProps>  = iconMap[args.icon];
return <ThemeProvider><MenuButton {...args} icon={selectedIcon}>Menu Button</MenuButton></ThemeProvider>;
}

const menuProps: ButtonProps = {
  primary: false,
  secondary: false,
  circular: false,
  disabled: false,
  tokens: {},
  content: {},
  href: '',
  block: false,
  iconOnly: false,
  icon: {},
  loading: false,
  inverted: false,
  size: undefined,
  ghost: false,
  onClick: action('Click Fired'),
}
export const Default = Template.bind({});
Default.args = menuProps;


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
    primary: true,
    onClick: action('Click fired.'),
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
    onClick: action('Click fired.'),
    primary: true,
    icon: DownloadIcon,
    menuIcon: CaretDownSolid8Icon
  };

  const gitHubVariant: MenuButtonTokens = {
    background: '#2ea44f',
    contentColor: '#fff',
    borderColor: 'rgba(27,31,35,0.15)',
    borderRadius: '6px',
    borderWidth: '1px',
    paddingTop: '5px',
    paddingBottom: '5px',
    paddingLeft: '16px',
    paddingRight: '16px',
    fontSize: '14px',
    fontWeight: '500',
    fontFamily: '-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji',
    boxShadow: 'rgba(27, 31, 35, 0.1) 0px 1px 0px 0px, rgba(255, 255, 255, 0.03) 0px 1px 0px 0px inset',
    hovered: {
      background: '#2c974b',
    },
    pressed: {
      background: '#2a8f47',
      //boxShadow: 'rgba(20, 70, 32, 0.2) 0px 1px 0px 0px inset', TODO: Issue with TS
    }
  }

  const myTheme: IPartialTheme = {
    components: {
      MenuButton: {
        variants: {
          github: gitHubVariant
        } 
      }
    }
  };

  const stackTokens: IStackTokens = {
    childrenGap: 40
  }

  return (
    <ThemeProvider theme={myTheme}>
      <Stack tokens={stackTokens} horizontal>
        <MenuButton {...args} variant="github">Code</MenuButton>
        <MenuButton primary>Code</MenuButton>
      </Stack>
    </ThemeProvider>
  )
}