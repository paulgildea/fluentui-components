// .storybook/manager.js

import { addons } from '@storybook/addons';
import fluentuiTheme from './fluentuiTheme';

addons.setConfig({
  theme: fluentuiTheme,
});