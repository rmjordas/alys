/** @jsx jsx **/
import { jsx } from '@emotion/core';
import { forwardRef } from 'react';

import { Icon } from '../icon';

export const MinusCircleIcon = forwardRef((svgProps, ref) => (
  <Icon {...svgProps} ref={ref}>
    <rect width="24" height="24" opacity="0" />
    <path
      fill="currentColor"
      d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"
    />
    <path fill="currentColor" d="M15 11H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2z" />
  </Icon>
));

MinusCircleIcon.displayName = 'MinusCircleIcon';
