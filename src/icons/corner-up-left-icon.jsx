/** @jsx jsx **/
import { jsx } from '@emotion/core';
import { forwardRef } from 'react';

import { Icon } from '../icon';

export const CornerUpLeftIcon = forwardRef((svgProps, ref) => (
  <Icon {...svgProps} ref={ref}>
    <rect width="24" height="24" transform="rotate(90 12 12)" opacity="0" />
    <path
      fill="currentColor"
      d="M16 10H7.08l2.7-3.38a1 1 0 1 0-1.56-1.24l-4 5a1 1 0 0 0 0 1.24l4 5A1 1 0 0 0 9 17a1 1 0 0 0 .62-.22 1 1 0 0 0 .16-1.4L7.08 12H16a1 1 0 0 1 1 1v5a1 1 0 0 0 2 0v-5a3 3 0 0 0-3-3z"
    />
  </Icon>
));

CornerUpLeftIcon.displayName = 'CornerUpLeftIcon';
