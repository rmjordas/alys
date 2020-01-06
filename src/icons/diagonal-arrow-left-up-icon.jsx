/** @jsx jsx **/
import { jsx } from '@emotion/core';
import { forwardRef } from 'react';

import { Icon } from '../icon';

export const DiagonalArrowLeftUpIcon = forwardRef((svgProps, ref) => (
  <Icon {...svgProps} ref={ref}>
    <rect width="24" height="24" transform="rotate(90 12 12)" opacity="0" />
    <path
      fill="currentColor"
      d="M17.71 16.29L9.42 8H15a1 1 0 0 0 0-2H7.05a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1H7a1 1 0 0 0 1-1V9.45l8.26 8.26a1 1 0 0 0 1.42 0 1 1 0 0 0 .03-1.42z"
    />
  </Icon>
));

DiagonalArrowLeftUpIcon.displayName = 'DiagonalArrowLeftUpIcon';
