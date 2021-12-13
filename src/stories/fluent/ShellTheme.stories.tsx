import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0';
import { FluentProvider, webLightTheme, Button, makeStyles } from '@fluentui/react-components';

export default {
  title: 'Components/vNext Shell Theme',
} as Meta;


var useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
    '> :not(:last-child)': {
      marginRight: '10px',
    }
  },
})

export const Default = () => {

  const classes = useStyles();
  
  return (
    <FluentProvider theme={webLightTheme}>
      <div className={classes.root}>
        <Button>Button</Button>
        <Button appearance="primary">Primary Button</Button>
        <Button appearance="outline">Outline Button</Button>
        <Button appearance="subtle">Subtle Button</Button>
        <Button appearance="transparent">Transparent Button</Button>
        <Button disabled>Disabled</Button>
      </div>
    </FluentProvider>
  )
}

