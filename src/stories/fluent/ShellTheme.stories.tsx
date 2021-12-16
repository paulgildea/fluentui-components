import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0';
import { FluentProvider, webLightTheme, Button, makeStyles, PartialTheme, mergeThemes, Theme } from '@fluentui/react-components';

export default {
  title: 'Components/vNext Shell Theme',
} as Meta;


const Win11Tokens = {
  // Fill Color - Complete
  // Text Color - For UI labels and static text
  TextFillColorPrimaryRest: '#000000E6', // 89.56% in Figma - rounded to 90%
  TextFillColorPrimaryHover: '#000000E6', // 89.56% in Figma - rounded to 90%
  TextFillColorSecondaryRest: '#00000099', // 60.63% in Figma - rounded to 60%
  TextFillColorTertiaryPressed: '#00000073', // 44.58% in Figma - rounded to 45%
  TextFillColorDisabled: '#00000059', // 36.14% in Figma - rounded to 35%

  // Accent Text - Recommended for links
  AccentTextPrimaryRest: '#003E92',
  AccentTextPrimaryHover: '#003E92',
  AccentTextSecondaryRest: '#001A68',
  AccentTextSecondaryHover: '#001A68',
  AccentTextTertiaryRest: '#005FB8',
  AccentTextTertiaryHover: '#005FB8',
  AccentTextDisabled: '#00000059', // 36.14% in Figma - rounded 35%

  // Text on Accent - Used for text on accent colored controls or fills
  TextOnAccentPrimaryRest: '#FFFFFF',
  TextOnAccentPrimaryHover: '#FFFFFF',
  TextOnAccentSecondaryPressed: '#FFFFFFB3', // Alpha 70%
  TextOnAccentDiabled: '#FFFFFF',
  TextOnAccentFillColorSelectedText: '#FFFFFF', // For highlighted text in text entry experiences

  // Control Color - Fills used for standard controls - Button, Dropdown, Search
  ControlFillColorDefaultRest: '#FFFFFFB3', // Alpha 70%
  ControlFillColorTransparentRest: '#FFFFFF00', // Alpha 0%
  ControlFillColorSecondaryHover: '#F9F9F980', // Alpha 50%
  ControlFillColorTeriaryPressed: '#F9F9F94D', // Alpha 30%
  ControlFillColorDisabled: '#F9F9F94D', // Alpha 30%
  ControlFillColorInputActive: '#FFFFFF', // Active/Focused Text input fields

  // Control Strong Fill - Used for control fills that must meet contrast ratio requirements of 3:1 - Scrollbar, Slider, FlipView
  ControlStrongFillColorDefaultRest: '#00000073', // 44.58% in Figma - rounded to 45%
  ControlStrongFillColorDefaultHover: '#00000073', // 44.58% in Figma - rounded to 45%
  ControlStrongFillColorDisabled: '#0000004D', // 31.73% in Figma - rounded to 30%

  // Subtle Fill - Used for list items and fills that are transparent at rest and appear upon interaction
  SubtleFillColorTransparentRest: '#FFFFFF00',
  SubtleFillColorSecondaryHover: '#0000000D', // 3.73% in Figma - rounded to 5%
  SubtleFillColorTertiaryPressed: '#0000000D', // 2.41% in Figma - rounded to 5%
  SubtleFillColorDisabled: '#00000000', // Alpha 0%

  // Control Solid - TODO: Not sure if this is ever used
  ControlSolidFillColorDefaultRest: '#FFFFFF',

  // Control Alt Fill - Fills used for the 'off' states of toggle type components - Toggle, Radio, Checkbox, Rating Control
  ControlAltFillColorTransparent: '#FFFFFF00', // Alpha 0%
  ControlAltFillColorSecondaryRest: '#0000000D', // 2.41% in Figma - rounded to 5%
  ControlAltFillColorTertiaryHover: '#0000000D', // 5.78% in Figma - rounded to 5%
  ControlAltFillColorQuarternaryPressed: '#0000001A', // 9.24 in Figma - rounded to 10%
  ControlAltFillColorDisabled: '#FFFFFF00', // Alpha 0%

  // Accent Fill - Used for accent fills on components - Primary Button, Selected Toggle, Pill Indicator
  AccentFillColorDefaultRest: '#005FB8',
  AccentFillColorSecondaryHover: '#005FB8FA', // 90% alpha
  AccentFillColorTertiaryPressed: '#005FB8CC', // 80% alpha
  AccentFillColorSelectedTextBrackground: '#0078D4',
  AccentFillColorDisabled: '#00000033', // 21.69% alpha in figma - rounded to 20%

  // Control on Image - Used for components living on top of imagery. Currently only used for grid view checkbox
  ControlOnImageFillColorDefaultRest: '#FFFFFFCC', // 79% in Figma - rounded to 80%
  ControlOnImageFillColorSecondaryHover: '#F3F3F3',
  ControlOnImageFillColorTertiaryPressed: '#EBEBEB',
  ControlOnImageFillColorDisabled: '#FFFFFF00', // Alpha 0%

  // System
  SystemFillColorAttention: '005FB7',
  SystemFillColorAttentionBackground: '#F6F6F680', // Alpha 50%
  SystemFillColorSolidAttentionBackground: '#F7F7F7',
  SystemFillColorSuccess: '#0F7B0F',
  SystemFillColorSuccessBackground: '#DFF6DD',
  SystemFillColorCaution: '#9D5D00',
  SystemFillColorCautionBackground: '#FFF4CE',
  SystemFillColorCritical: '#C42B1C',
  SystemFillColorCriticalBackground: '#FDE7E9',
  SystemFillColorNeutral: '#00000073', // 44.58% in Figma - rounded to 45%
  SystemFillColorNeutralBackground: '#0000000D', // 2.41% in Figma - rounded to 5%
  SystemFillColorSolidNeutral: '#8A8A8A',
  SystemFillColorSolidNeutralBackground: '#F3F3F3',

  // Elevation - TODO

  // Stroke Color
  // Control Stroke - Used for gradient stops in evelations borders and component states
  ControlStrokeColorDefault: '#0000000D', // 5.78% in Figma - rounded to 5%
  ControlStrokeColorDefaultPressed: '#0000000D', // 5.78% in Figma - rounded to 5%
  ControlStrokeColorDisabled: '#0000000D', // 5.78% in Figma - rounded to 5%
  ControlStrokeColorSecondary: '#00000026', // 16.22% in Figma - rounded to 15% - TODO: Is this used on Hover?
  ControlStrokeColorOnAccentDefault: '#FFFFFF1A', // 8% in Figma - rounded to 10%
  ControlStrokeColorOnAccentDefaultPressed: '#FFFFFF1A', // 8% in Figma - rounded to 10%
  ControlStrokeColorOnAccentDisabled: '#0000000D', // 5.78% in Figma - rounded to 5%
  ControlStrokeColorOnAccentSecondary: '#FFFFFF66', // 4% in Figma - TODO: Is this for Hover?
  ControlStrokeColorOnAccentTertiary: '#00000033', // 21.69% in Figma - rounded to 20% - Used for dividers?
  ControlStrokeColorForStrongFillWhenOnImage: '#FFFFFF59', // 35% in Figma

  // Control Strong Stroke - Used for component strokes that must meet contrast ratio requirements 3:1 - Radio, Toggle, Checkbox
  ControlStrongStrokeColorDefault: '#00000073', // 44.58% in Figma - rounded to 45%
  ControlStrongStrokeColorDisabled: '#00000033', // 21.69% in Figma - rounded to 20%

  // Card Stroke - Used for card and layer stroke colors
  CardStrokeColorDefault: '#0000000D', // 5.78% in Figma - rounded to 5%
  CardStrokeColorDefaultSolid: '#EBEBEB',

  // Divider Stroke - Used for divider and graphic lines. Theme inverse; dark in light theme and light in dark theme
  DividerStrokeColorDefault: '#0000000D', // 8.03% in Figma - rounded to 5%

  // Surface Stroke - Used for strokes on background surfaces - Flyout, Windows, Dialogs
  SurfaceStrokeColorDefault: '#75757566', // Alpha 40% 
  SurfaceStrokeColorFlyout: '#0000000D', // 5.78% in Figma - rounded to 5%

  // Focus Stroke - Used for Focus
  FocusStrokeColorOuter: '#000000E6', // 89.56% in Figma - rounded to 90%
  FocusStrokeColorInner: '#FFFFFF',

  // Background - Complete - TODO: Material needs a review
  // Fill Color
  // Card Background - Used to create ‘cards’ — content blocks that live on  page and layer backgrounds.
  CardBackgroundFillColorDefault: '#FFFFFFB3', // Alpha 70%
  CardBackgroundFillColorSecondary: '#F6F6F680', // Alpha 50%
  CardBackgroundTeriary: '#FFFFFF',

  // Smoke - Used over windows and desktops to block them out as inaccessible
  SmokeFillColorDefault: '#0000004D', // Alpha 30%

  // Layer - Used on background colors of any material to create layering
  LayerFillColorDefault: '#FFFFFF80', // Alpha 50%
  LayerFillColorAlt: '#FFFFFF',

  // Layer on Acrylic - Used on background colors of any material to create layering
  LayerOnAcrylicFillColorDefault: '#FFFFFF40', // Alpha 25%

  // Layer on Accent Acrylic - TODO: not sure if this is used?? 
  LayerOnAccentAcrylicFillColorDefault: '#FFFFFF40', // Alpha 25%

  // Acrylic Background - Acrylic background colors to place layers, cards, or components on
  AcrylicBackgroundFillColorDefaultFallBack: '#F9F9F9', // This is the fallback value - This might be a gradient
  AcrylicBackgroundFillColorBaseFallBack: '#EEEEEE', // This is the fallback value - This might be a gradient

  // Accent Acrylic Background - Acylic background color fo place layers, cards, or components on
  AccentAcrylicBackgroundBaseFallBack: '#98ECFE', // This is the fallback value  - This might be a gradient
  AccentAcrylicBackgroundDefaultFallBack: '98ECFE', // No fallback value given - This might be a gradient

  // Mica Background - Mica background colors to place layers, cards, or components on
  MicaBackgroundFillColorBase: '#F3F3F3', // This might be the fallback - This might be a gradient

  // Solid Background - Solid background colors to place layers, cards, or components on
  SolidBackgroundColorFillBase: '#F3F3F3',
  SolidBackgroundColorFillSecondary: '#EEEEEE',
  SolidBackgroundColorFillTertiary: '#F9F9F9',
  SolidBackgroundColorFillQuarternary: '#FFFFFF',

  // Accent Colors
  AccentBase: '#0078D4',
  AccentLight1: '0093F9',
  AccentLight2: '#60CCFE',
  AccentLight3: '#98ECFE',
  AccentDark1: '#005EB7',
  AccentDark2: '#003D92',
  AccentDark3: '#001968'
}

const windows11LightTokenMapping: PartialTheme = {
  colorBrandBackground: Win11Tokens.AccentFillColorDefaultRest,
  colorBrandBackgroundHover: Win11Tokens.AccentFillColorSecondaryHover,
  colorBrandBackgroundPressed: Win11Tokens.AccentFillColorTertiaryPressed,
  colorBrandBackgroundSelected: Win11Tokens.AccentFillColorSelectedTextBrackground,
  
};
const windows11LightTheme: Theme = mergeThemes(webLightTheme, windows11LightTokenMapping);

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
    <FluentProvider theme={windows11LightTheme}>
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

