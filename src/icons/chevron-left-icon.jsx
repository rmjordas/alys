/** @jsx jsx **/
import { jsx } from '@emotion/core';
import { forwardRef } from 'react';

import { Icon } from '../icon';

export const ChevronLeftIcon = forwardRef((svgProps, ref) => (
  <Icon {...svgProps} ref={ref}>
    <rect width="24" height="24" transform="rotate(90 12 12)" opacity="0" />
    <path
      fill="currentColor"
      d="M13.36 17a1 1 0 0 1-.72-.31l-3.86-4a1 1 0 0 1 0-1.4l4-4a1 1 0 1 1 1.42 1.42L10.9 12l3.18 3.3a1 1 0 0 1 0 1.41 1 1 0 0 1-.72.29z"
    />
  </Icon>
));

ChevronLeftIcon.displayName = 'ChevronLeftIcon';
