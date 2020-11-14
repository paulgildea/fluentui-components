import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { ThemeProvider } from '@fluentui/react-theme-provider';
import { ShareIcon } from '@fluentui/react-icons';
import {SplitButton, SplitButtonTokens } from '@fluentui/react-button';
import {TooltipHost, Stack, IStackTokens, IPartialTheme, Slider, Toggle} from '@fluentui/react';

const stackTokens: IStackTokens = {childrenGap: 40};
export const splitButton = () => {

  return (
    <ThemeProvider>
      <Stack horizontal tokens={stackTokens}>
        <SplitButton primary>Split Button</SplitButton>
        <SplitButton>Split Button</SplitButton>
      </Stack>
    </ThemeProvider>
  )
}

export const iconButton = () => {
  return (
    <ThemeProvider>
      <SplitButton icon={<ShareIcon/>}>Share</SplitButton>
    </ThemeProvider>
  );
}