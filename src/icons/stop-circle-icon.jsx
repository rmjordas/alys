/** @jsx jsx **/
import { jsx } from '@emotion/core';
import { forwardRef } from 'react';

import { Icon } from '../icon';

export const StopCircleIcon = forwardRef((svgProps, ref) => (
  <Icon {...svgProps} ref={ref}>
    <rect width="24" height="24" opacity="0" />
    <path
      fill="currentColor"
      d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"
    />
    <path
      fill="currentColor"
      d="M14.75 8h-5.5A1.25 1.25 0 0 0 8 9.25v5.5A1.25 1.25 0 0 0 9.25 16h5.5A1.25 1.25 0 0 0 16 14.75v-5.5A1.25 1.25 0 0 0 14.75 8zM14 14h-4v-4h4z"
    />
  </Icon>
));

StopCircleIcon.displayName = 'StopCircleIcon';
