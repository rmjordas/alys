import { create } from '@storybook/theming/create';

import light from '../src/styles/themes/light';
import pkg from '../package.json';

const themeVars = {
  base: 'light',

  colorPrimary: 'white',
  colorSecondary: '#666',

  appBg: 'rgba(224, 224, 224, 0.3)',
  appContentBg: 'white',
  appBorderColor: 'lightgrey',
  appBorderRadius: 5,

  fontBase: light.typography.fonts.base,
  fontCode: light.typography.fonts.code,

  textColor: '#666',
  textInverseColor: 'rgba(255,255,255,0.9)',

  barTextColor: '#666',

  brandTitle: `Alys v${pkg.version}`,
  brandUrl: 'https://alys.js.org',
};

export default create(themeVars, { default: light });
