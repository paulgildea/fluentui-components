import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0';
import { ThemeProvider } from '@fluentui/react-theme-provider';
import { PrimaryButton, IPartialTheme, Stack, IStackTokens, Slider, Checkbox, initializeIcons, TextField } from '@fluentui/react';
import { Button } from '@fluentui/react-button';


export default {
  title: 'Components/ThemeProvider',
  component: ThemeProvider,
 
} as Meta;

initializeIcons();

export const colorPalette = () => {

  const myTheme: IPartialTheme = {
    palette: {
      themePrimary: '#9710e6',
      themeLighterAlt: '#fbf5fe',
      themeLighter: '#edd6fb',
      themeLight: '#deb2f7',
      themeTertiary: '#bf6af0',
      themeSecondary: '#a32ae9',
      themeDarkAlt: '#880ecf',
      themeDark: '#730cae',
      themeDarker: '#550981',
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
    defaultFontStyle: {
      fontFamily: 'Times New Roman'
    }
  }

  const stackTokens: IStackTokens = {
    childrenGap: 40
  }
  
  return (
    <ThemeProvider theme={myTheme}>
      <Stack tokens={stackTokens}>
        <PrimaryButton>Non Converged Primary Button</PrimaryButton>
        <Button primary>Converged Pimary Button</Button>
        <Slider min={0} max={10} defaultValue={5} showValue/>
        <Checkbox label="Checkbox"></Checkbox>
        <TextField placeholder="Textfield"></TextField>
      </Stack>
    </ThemeProvider>
  )
}

export const defaultFontStyle = () => {
  
  return (
    <ThemeProvider>
      
    </ThemeProvider>
  )
}

export const fontRamp = () => {
  
  return (
    <ThemeProvider>
      
    </ThemeProvider>
  )
}

export const elevationRamp = () => {
  
  return (
    <ThemeProvider>
      
    </ThemeProvider>
  )
}

export const cornerRadiusRamp = () => {
  
  return (
    <ThemeProvider>
      
    </ThemeProvider>
  )
}

export const spacingRamp = () => {
  
  return (
    <ThemeProvider>
      
    </ThemeProvider>
  )
}

export const migrateFromStylesToTokens = () => {

  const stackTokens: IStackTokens = {
    childrenGap: 40
  }

  const myTheme: IPartialTheme = {
    defaultFontStyle: {
      fontFamily: 'Times New Roman'
    },
    effects: {
      // Controls the rounded corners for buttons
      roundedCorner2: '10px',
      // Controls the rounded corners for cards
      roundedCorner4: '14px',
      // Controls the rounded corners for surfaces
      roundedCorner6: '20px',
    },
    components: {
      PrimaryButton: {
        styles: {
          root: {
            borderRadius: '10px',
            boxShadow: '0px 0.3px 0.9px rgba(0, 0, 0, 0.32), 0px 1.6px 3.6px rgba(0, 0, 0, 0.28)',
          }
        }
      },
      Button: {
        variants: {
          shadowPill: {
            borderRadius: '10px',
            boxShadow: '0px 0.3px 0.9px rgba(0, 0, 0, 0.32), 0px 1.6px 3.6px rgba(0, 0, 0, 0.28)',
          }
        }
      }
    }
  }



  return (
    <ThemeProvider theme={myTheme}>
      <Stack tokens={stackTokens} horizontal>
        <PrimaryButton>Non Converged Primary Button</PrimaryButton>
        <Button primary>Converged Primary Buttton Default</Button>
        <Button primary variant="shadowPill">Converged ShadowPill Button</Button>
      </Stack>
    </ThemeProvider>
  )
}
// const Template: Story<TextProps> = (args) => {

//   return (
//     <ThemeProvider>
//       <Text {...args}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum tempore, cum sapiente repellendus amet magnam error architecto veniam corporis neque voluptatibus possimus officiis? Assumenda pariatur quam porro accusamus, excepturi consequatur?</Text>
//     </ThemeProvider>
//   );
// } 
// export const Default = Template.bind({});

// const textArgs: TextProps = {
//   variant: 'body',
// }
// Default.args = textArgs;

