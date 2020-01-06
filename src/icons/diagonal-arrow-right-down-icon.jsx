/** @jsx jsx **/
import { jsx } from '@emotion/core';
import { forwardRef } from 'react';

import { Icon } from '../icon';

export const DiagonalArrowRightDownIcon = forwardRef((svgProps, ref) => (
  <Icon {...svgProps} ref={ref}>
    <rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0" />
    <path
      fill="currentColor"
      d="M17 8a1 1 0 0 0-1 1v5.59l-8.29-8.3a1 1 0 0 0-1.42 1.42l8.3 8.29H9a1 1 0 0 0 0 2h8a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1z"
    />
  </Icon>
));

DiagonalArrowRightDownIcon.displayName = 'DiagonalArrowRightDownIcon';
