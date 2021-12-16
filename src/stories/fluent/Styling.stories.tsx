import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0';
import {TextField, ColorPicker, IColor} from '@fluentui/react';
import { FluentProvider, webLightTheme, Button, makeStyles, createLightTheme, BrandVariants, Theme, Avatar, CounterBadge, Link, SplitButton, Menu, MenuTrigger, MenuItem, MenuPopover, MenuList, MenuButtonProps, createDarkTheme, mergeThemes, PartialTheme, Title1, Title2} from '@fluentui/react-components';
import * as ColorGenerator from '../utils/ColorGenerator';

export default {
  title: 'Customization/Design Tokens',
} as Meta;


var useStyles = makeStyles({
  root: {
    padding: '20px',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    '> :not(:last-child)': {
      marginRight: '10px',
    }
  },
});

const initalBrandColor = "#0078d4";
const brandVariants = ColorGenerator.generateBrandVariants(initalBrandColor);
const myLightTheme: Theme = createLightTheme(brandVariants);
const myDarkTheme: Theme = createDarkTheme(brandVariants);

export const Default = () => {

  const classes = useStyles();
  const [lightTheme, setLightTheme] = React.useState(myLightTheme);
  const [darkTheme, setDarkTheme] = React.useState(myDarkTheme);
  const [brandColor, setBrandColor] = React.useState(initalBrandColor)

  const onChangeColor = React.useCallback((ev: any, colorObj: IColor) => {
        const newBrand: BrandVariants = ColorGenerator.generateBrandVariants(colorObj.hex);
        const light: Theme = createLightTheme(newBrand);
        const dark: Theme = createDarkTheme(newBrand);
        setLightTheme(light);
        setDarkTheme(dark);
        setBrandColor(colorObj.hex);
    },
    [],
  );
  
  return (
    <div>
    <FluentProvider theme={lightTheme}>
      <Title1>Select a primary brand color</Title1>
      <ColorPicker color={brandColor} onChange={onChangeColor} alphaType='none'/>
      <Title2>Light Theme</Title2>
      <div className={classes.root}>
        <Button>Button</Button>
        <Button appearance="primary">Primary Button</Button>
        <Button appearance="outline">Outline Button</Button>
        <Button appearance="subtle">Subtle Button</Button>
        <Button appearance="transparent">Transparent Button</Button>
        <Button disabled>Disabled</Button>
        <Avatar name='Paul Gildea' active="active"></Avatar>
        <CounterBadge count={10} />
        <Link>This is a link</Link>
        <Menu positioning="below-end">
      <MenuTrigger>
        {(triggerProps: MenuButtonProps) => (
          <SplitButton appearance="primary" menuButton={triggerProps} primaryActionButton={'This is a split button'} />
        )}
      </MenuTrigger>

      <MenuPopover>
        <MenuList>
          <MenuItem>Item a</MenuItem>
          <MenuItem>Item b</MenuItem>
        </MenuList>
      </MenuPopover>
    </Menu>
      </div>
    </FluentProvider>
    <FluentProvider theme={darkTheme}>
    <Title2>Dark Theme</Title2>
    <div className={classes.root}>
      <Button>Button</Button>
      <Button appearance="primary">Primary Button</Button>
      <Button appearance="outline">Outline Button</Button>
      <Button appearance="subtle">Subtle Button</Button>
      <Button appearance="transparent">Transparent Button</Button>
      <Button disabled>Disabled</Button>
      <Avatar name='Paul Gildea' active="active"></Avatar>
      <CounterBadge count={10} />
      <Link>This is a link</Link>
      <Menu positioning="below-end">
    <MenuTrigger>
      {(triggerProps: MenuButtonProps) => (
        <SplitButton appearance="primary" menuButton={triggerProps} primaryActionButton={'This is a split button'} />
      )}
    </MenuTrigger>

    <MenuPopover>
      <MenuList>
        <MenuItem>Item a</MenuItem>
        <MenuItem>Item b</MenuItem>
      </MenuList>
    </MenuPopover>
  </Menu>
    </div>
  </FluentProvider>
    </div>
  )
}

