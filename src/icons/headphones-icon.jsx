/** @jsx jsx **/
import { jsx } from '@emotion/core';
import { forwardRef } from 'react';

import { Icon } from '../icon';

export const HeadphonesIcon = forwardRef((svgProps, ref) => (
  <Icon {...svgProps} ref={ref}>
    <rect width="24" height="24" opacity="0" />
    <path
      fill="currentColor"
      d="M12 2A10.2 10.2 0 0 0 2 12.37V17a4 4 0 1 0 4-4 3.91 3.91 0 0 0-2 .56v-1.19A8.2 8.2 0 0 1 12 4a8.2 8.2 0 0 1 8 8.37v1.19a3.91 3.91 0 0 0-2-.56 4 4 0 1 0 4 4v-4.63A10.2 10.2 0 0 0 12 2zM6 15a2 2 0 1 1-2 2 2 2 0 0 1 2-2zm12 4a2 2 0 1 1 2-2 2 2 0 0 1-2 2z"
    />
  </Icon>
));

HeadphonesIcon.displayName = 'HeadphonesIcon';
