import { addParameters, addDecorator } from '@storybook/react';
import React from 'react';

import theme from './simple-theme';
import { Centered } from '../src/internal/centered';

addParameters({
  options: {
    showRoots: true,
    showPanel: false,
    enableShortcuts: false,
    isToolshown: false,
    theme,
  },
});

addDecorator((StoryFn) => (
  <Centered>
    <StoryFn />
  </Centered>
));
