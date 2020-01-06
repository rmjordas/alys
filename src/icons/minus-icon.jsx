/** @jsx jsx **/
import { jsx } from '@emotion/core';
import { forwardRef } from 'react';

import { Icon } from '../icon';

export const MinusIcon = forwardRef((svgProps, ref) => (
  <Icon {...svgProps} ref={ref}>
    <rect width="24" height="24" transform="rotate(180 12 12)" opacity="0" />
    <path fill="currentColor" d="M19 13H5a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2z" />
  </Icon>
));

MinusIcon.displayName = 'MinusIcon';
