import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from './button';

storiesOf('Button')
  .add('with text', () => (
    <Button onClick={action('clicked')}>Example Button</Button>
  ))
  .add('with emoji', () => (
    <Button onClick={action('clicked')}>♣ ♠ ♥ ♦</Button>
  ));
