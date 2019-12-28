import { addParameters } from '@storybook/react';

import theme from './simple-theme';

addParameters({
  options: {
    showRoots: true,
    showPanel: false,
    enableShortcuts: false,
    isToolshown: false,
    theme,
  },
});
