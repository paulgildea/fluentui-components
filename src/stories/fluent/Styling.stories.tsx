import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0';
import {TextField} from '@fluentui/react';
import { FluentProvider, webLightTheme, Button, makeStyles, createLightTheme, BrandVariants, Theme, Avatar, CounterBadge, Link, SplitButton, Menu, MenuTrigger, MenuItem, MenuPopover, MenuList, MenuButtonProps, createDarkTheme, mergeThemes, PartialTheme} from '@fluentui/react-components';
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

const brandColor = "#D83B01";
const brandVariants = ColorGenerator.generateBrandVariants(brandColor);
console.log(brandVariants);
const myLightTheme: Theme = createLightTheme(brandVariants);
const myDarkTheme: Theme = createDarkTheme(brandVariants);

export const Default = () => {

  const classes = useStyles();

  const [lightTheme, setLightTheme] = React.useState(myLightTheme);
  const [darkTheme, setDarkTheme] = React.useState(myDarkTheme);

  const onChangeColor = React.useCallback(
    (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) => {
        const newBrand: BrandVariants = ColorGenerator.generateBrandVariants(newValue);
        const light: Theme = createLightTheme(newBrand);
        const dark: Theme = createDarkTheme(newBrand);
        setLightTheme(light);
        setDarkTheme(dark);
    },
    [],
  );
  
  return (
    <div>
    <FluentProvider theme={lightTheme}>
      <TextField defaultValue={brandColor} onChange={onChangeColor}/>
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

