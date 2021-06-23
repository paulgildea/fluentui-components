import React, { useContext } from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import {webLightTheme, teamsLightTheme, Button, ButtonProps, FluentProvider, useFluent, makeStyles} from '@fluentui/react-components'
import { PeopleTeam32Filled, PeopleTeam32Regular, } from '@fluentui/react-icons';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    icon: {
      control: {
        type: 'select',
        options: []
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
 
  return <FluentProvider theme={teamsLightTheme}><Button {...args} icon>Button</Button></FluentProvider>;

};
export const Default = Template.bind({});
const buttonArgs: ButtonProps = {
  primary: true,
  onClick: action('hello')
}
Default.args = buttonArgs;

export const iconButton = () => {

  const IconButton: React.FC = props => {
    const [hovered, setHovered] = React.useState(false);
    const [checked, setChecked] = React.useState(false);
    const handleEnter = React.useCallback((e) => {
      setHovered(true);
    }, []);
    const handleLeave = React.useCallback((e) => {
      setHovered(false);
    }, []);

    const useBasicStyles = makeStyles({
      root: theme => ({
        color: theme.alias.color.neutral.brandForeground2Hover
      }),
    });

    const classes = useBasicStyles();

    return (
      <Button iconOnly icon= {(hovered || checked)? <PeopleTeam32Filled className={classes.root}/> : <PeopleTeam32Regular />}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        onClick={(e) => setChecked(!checked)}>
      </Button>
    );
  };

  return (
    <FluentProvider theme={webLightTheme}>
      <IconButton></IconButton>
    </FluentProvider>
  );
}

export const menuButton = () => {
  return (  
    <FluentProvider theme={webLightTheme}>
      
    </FluentProvider>
  )
}
// const stackTokens: IStackTokens = {childrenGap: 40};
// export const primaryButtons = () => {

//   return (
//     <FluentProvider theme={teamsDarkTheme}>
//       <ThemeProvider>
//       <Button primary>Primary Button</Button>
//         <Stack horizontal tokens={stackTokens}>
          
//           <Button>Secondary Button</Button>
//           <PrimaryButton>Non converged Button</PrimaryButton>
//         </Stack>
//       </ThemeProvider>
//     </FluentProvider>
//   )
// }

// export const iconButton = () => {
//   return (
//     <ThemeProvider>
//       <Button icon={<ShareIcon/>}>Share</Button>
//     </ThemeProvider>
//   );
// }

// export const iconButtonWithTooltip = () => {
//   const click = () => {
//     alert('Share Button was clicked');
//   }

//   return (
//     <FluentProvider theme={webLightTheme}>
//       <Stack horizontal tokens={stackTokens}>
//         <TooltipHost content="Share">
//           <Button aria-label="Share" iconOnly primary icon={<ShareIcon/>} onClick={click} />
//         </TooltipHost>
//         <TooltipHost content="Share">
//           <Button aria-label="Share" iconOnly icon={<ShareIcon/>} onClick={click} />
//         </TooltipHost>
//         <TooltipHost content="Share">
//           <Button aria-label="Share" iconOnly  icon={<ShareIcon/>} onClick={click} />
//         </TooltipHost>
//         <TooltipHost content="Share">
//           <Button aria-label="Share" iconOnly icon={<ShareIcon/>} onClick={click} />
//         </TooltipHost>
//       </Stack>
//     </FluentProvider>
//   )
// }


// export const themingBackwardsCompatibility = () => {

//   const myTheme: IPartialTheme = {
//     palette: {
//       themePrimary: '#e01242',
//       themeLighterAlt: '#fef4f7',
//       themeLighter: '#fad5de',
//       themeLight: '#f6b2c2',
//       themeTertiary: '#ed6a88',
//       themeSecondary: '#e42b57',
//       themeDarkAlt: '#ca103c',
//       themeDark: '#ab0e32',
//       themeDarker: '#7e0a25',
//       neutralLighterAlt: '#faf9f8',
//       neutralLighter: '#f3f2f1',
//       neutralLight: '#edebe9',
//       neutralQuaternaryAlt: '#e1dfdd',
//       neutralQuaternary: '#d0d0d0',
//       neutralTertiaryAlt: '#c8c6c4',
//       neutralTertiary: '#a19f9d',
//       neutralSecondary: '#605e5c',
//       neutralPrimaryAlt: '#3b3a39',
//       neutralPrimary: '#323130',
//       neutralDark: '#201f1e',
//       black: '#000000',
//       white: '#ffffff',
//     },
//   };

//   return (
//     <ThemeProvider theme={myTheme}>
//       <Stack horizontal tokens={stackTokens}>
        
//       </Stack>
//     </ThemeProvider>
//   )
// };