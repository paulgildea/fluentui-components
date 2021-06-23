import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { FluentProvider, webLightTheme, Button, CompoundButton as VNCompoundButton, makeStyles } from '@fluentui/react-components';
import { ThemeProvider, DefaultButton, PrimaryButton, CompoundButton, CommandBarButton, IconButton, initializeIcons, Stack, IContextualMenuProps, IPartialTheme, createTheme, IButtonStyles, IContextualMenuStyles, IContextualMenuItemStyles} from '@fluentui/react';
import { CounterBadge } from '@fluentui/react-badge';  
import { withDesign } from 'storybook-addon-designs';
import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from '@storybook/addon-docs/blocks';
import { background } from '@storybook/theming';

export default {
  title: 'Components/vNext Theme',
} as Meta;

const vNextTheme = webLightTheme;

const useStyles = makeStyles({
  root: theme => ({
    fontFamily: theme.global.type.fontFamilies.base
  })
});

export const Default = () => {
  initializeIcons();

  

  const menuProps: IContextualMenuProps = {
    items: [
      {
        key: 'emailMessage',
        text: 'Email message',
        iconProps: { iconName: 'Mail' },
      },
      {
        key: 'calendarEvent',
        text: 'Calendar event',
        iconProps: { iconName: 'Calendar' },
      },
    ],
  };

  console.log("Theme neutralStroke1: " + webLightTheme.alias.color.neutral.neutralStroke1);
  console.log("Theme font: " + vNextTheme.global.type.fontSizes.base[300]);
  console.log("Theme font: " + vNextTheme.global.type.fontWeights.semibold);

  const myTheme: IPartialTheme = createTheme({
    palette: {
      themePrimary: vNextTheme.global.palette.brand.primary,
      themeLighterAlt: '#eff6fc',
      themeLighter: '#deecf9',
      themeLight: '#c7e0f4',
      themeTertiary: '#71afe5',
      themeSecondary: '#2b88d8',
      themeDarkAlt: '#106ebe',
      themeDark: '#005a9e',
      themeDarker: '#004578',
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

    components: {
      DefaultButton: {
        styles: {
          root: {
            boxShadow: vNextTheme.alias.shadow.shadow4,
            borderColor: vNextTheme.alias.color.neutral.neutralStroke1,
            borderWidth: vNextTheme.global.strokeWidth.thin,
            borderStyle: 'solid',
            background: vNextTheme.alias.color.neutral.neutralBackground1,
            maxWidth: '280px',
            borderRadius: vNextTheme.global.borderRadius.medium,
            margin: 0,
            padding: '0 8px',
            fontSize: vNextTheme.global.type.fontSizes.base[300],
            fontWeight: vNextTheme.global.type.fontWeights.semibold,
            lineHeight: vNextTheme.global.type.lineHeights.base[300],
            fontFamily: vNextTheme.global.type.fontFamilies.base,
            color: vNextTheme.alias.color.neutral.neutralForeground1,
          },
          rootHovered: {
            background: vNextTheme.alias.color.neutral.neutralBackground1Hover,
            borderColor: vNextTheme.alias.color.neutral.neutralStroke1Hover,
            color: vNextTheme.alias.color.neutral.neutralForeground1,

            boxShadow: vNextTheme.alias.shadow.shadow4,
            cursor: 'pointer',
          },
          rootPressed: {
            background: vNextTheme.alias.color.neutral.neutralBackground1Pressed,
            borderColor: vNextTheme.alias.color.neutral.neutralStroke1Pressed,
            color: vNextTheme.alias.color.neutral.neutralForeground1,
            boxShadow: vNextTheme.alias.shadow.shadow2,
            outline: 'none',
          },
          splitButtonContainer: {
            
          },
          splitButtonMenuButton: {
            boxShadow: vNextTheme.alias.shadow.shadow4,
            borderColor: vNextTheme.alias.color.neutral.neutralStroke1,
            borderWidth: vNextTheme.global.strokeWidth.thin,
            borderStyle: 'solid',
            background: vNextTheme.alias.color.neutral.neutralBackground1,
            borderTopRightRadius: vNextTheme.global.borderRadius.medium,
            borderBottomRightRadius: vNextTheme.global.borderRadius.medium,
            color: vNextTheme.alias.color.neutral.neutralForeground1,
            position: 'relative',
            zIndex: 1000,
          },
          splitButtonDivider: {
            height: '100%',
            top: 0
          }
        } as IButtonStyles
      },
      PrimaryButton: {
        styles: {
          root: {
            background: vNextTheme.alias.color.neutral.brandBackground,
            color: vNextTheme.alias.color.neutral.neutralForegroundInvertedAccessible,
            borderColor: 'transparent',
            boxShadow: vNextTheme.alias.shadow.shadow4,
          },
          rootHovered: {
            background: vNextTheme.alias.color.neutral.brandBackgroundHover,
            borderColor: 'transparent',
            color: vNextTheme.alias.color.neutral.neutralForegroundInvertedAccessible,
            boxShadow: vNextTheme.alias.shadow.shadow4,

          },
          rootPressed: {
            background: vNextTheme.alias.color.neutral.brandBackgroundPressed,
            borderColor: 'transparent',
            color: vNextTheme.alias.color.neutral.neutralForegroundInvertedAccessible,
            boxShadow: vNextTheme.alias.shadow.shadow2,
          }
        } as IButtonStyles
      },
      CompoundButton: {
        styles: {
          root: {
            boxShadow: vNextTheme.alias.shadow.shadow4,
            borderColor: vNextTheme.alias.color.neutral.neutralStroke1,
            borderWidth: vNextTheme.global.strokeWidth.thin,
            borderStyle: 'solid',
            background: vNextTheme.alias.color.neutral.neutralBackground1,
            borderRadius: vNextTheme.global.borderRadius.medium,
          },
          rootHovered: {

          },
          rootPressed: {

          }
        } as IButtonStyles
      },
      ContextualMenu: {
        styles: {
          root: {
            backgroundColor: vNextTheme.alias.color.neutral.neutralBackground1,
            minWidth: '128px',
            minHeight: '48px',
            maxWidth: '300px',
            width: 'max-content',
            boxShadow: vNextTheme.alias.shadow.shadow16,
            paddingTop: '4px',
            paddingBottom: '4px',
            borderColor: vNextTheme.alias.color.neutral.strokeAccessible,
            borderWidth: vNextTheme.global.strokeWidth.thin,
            borderStyle: 'solid',
            borderBottomLeftRadius: vNextTheme.global.borderRadius.medium,
            borderBottomRightRadius: vNextTheme.global.borderRadius.medium,
          }
        } as IContextualMenuStyles
      },
      ContextualMenuItem: {
        styles: {
          iconColor: {
            color: 'red',
            fill: 'red'
          }
        } as IContextualMenuItemStyles
      } 
    }
  });
  
  // mixing in font-families because there's and issue with the fallback on Button
  const classes = useStyles();
  console.log("Styles: " + classes.root);

  return (
    <div>
      <FluentProvider theme={webLightTheme}>
        <div className={classes.root}>
          <h1>vNext Basic Inputs</h1>
          <Button className={classes.root}>Default Button</Button>
          <Button primary className={classes.root}>Primary Button</Button>
          <VNCompoundButton className={classes.root} secondaryContent="This is secondary content">CompoundButton</VNCompoundButton>
          <ThemeProvider theme={myTheme}>
            <h1>v8 Basic Inputs</h1>
            <DefaultButton>Default Button</DefaultButton>
            <PrimaryButton>Primary Button</PrimaryButton>
            <CompoundButton secondaryText='This is secondary text'>CompoundButton</CompoundButton>
            <IconButton iconProps={{iconName: 'Emoji2'}}></IconButton>
            <DefaultButton split menuProps={menuProps} text='SplitButton' splitButtonAriaLabel="See 2 options" aria-roledescription="split button" onClick={() => {alert('hello')}}></DefaultButton>
            <DefaultButton  menuProps={menuProps} text='Menu Button' ></DefaultButton>
            <DefaultButton toggle checked>Toggle Button</DefaultButton>
            <CommandBarButton iconProps={{iconName: 'Add'}} text='Add'></CommandBarButton>
          </ThemeProvider>
        </div>
      </FluentProvider>
      
      
    </div>
  );
}

