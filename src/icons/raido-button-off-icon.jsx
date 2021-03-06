/** @jsx jsx **/
import { jsx } from '@emotion/core';
import { forwardRef } from 'react';

import { Icon } from '../icon';

export const RadioButtonOffIcon = forwardRef((svgProps, ref) => (
  <Icon {...svgProps} ref={ref}>
    <rect width="24" height="24" opacity="0" />
    <path
      fill="currentColor"
      d="M12 22a10 10 0 1 1 10-10 10 10 0 0 1-10 10zm0-18a8 8 0 1 0 8 8 8 8 0 0 0-8-8z"
    />
  </Icon>
));

RadioButtonOffIcon.displayName = 'RadioButtonOffIcon';
