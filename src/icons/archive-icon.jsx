/** @jsx jsx */
import { jsx } from '@emotion/core';
import { forwardRef } from 'react';

import { Icon } from '../icon';

export const ArchiveIcon = forwardRef((svgProps, ref) => (
  <Icon {...svgProps} ref={ref}>
    <rect width="24" height="24" transform="rotate(90 12 12)" opacity="0" />
    <path
      fill="currentColor"
      d="M21 6a3 3 0 0 0-3-3H6a3 3 0 0 0-2 5.22V18a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8.22A3 3 0 0 0 21 6zM6 5h12a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2zm12 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h12z"
    />
    <rect fill="currentColor" x="9" y="12" width="6" height="2" rx=".87" ry=".87" />
  </Icon>
));

ArchiveIcon.displayName = 'ArchiveIcon';
