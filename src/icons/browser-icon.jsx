/** @jsx jsx **/
import { jsx } from '@emotion/core';
import { forwardRef } from 'react';

import { Icon } from '../icon';

export const BrowserIcon = forwardRef((svgProps, ref) => (
  <Icon {...svgProps} ref={ref}>
    <rect width="24" height="24" opacity="0" />
    <path
      fill="currentColor"
      d="M18 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm1 15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-7h14zM5 9V6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3z"
    />
    <circle fill="currentColor" cx="8" cy="7.03" r="1" />
    <circle fill="currentColor" cx="12" cy="7.03" r="1" />
  </Icon>
));

BrowserIcon.displayName = 'BrowserIcon';
