/** @jsx jsx */
import { jsx } from '@emotion/core';
import { forwardRef } from 'react';

import { Icon } from '../icon';

export const AlertCircleIcon = forwardRef((svgProps, ref) => (
  <Icon {...svgProps} ref={ref}>
    <rect width="24" height="24" opacity="0" />
    <path
      fill="currentColor"
      d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"
    />
    <circle fill="currentColor" cx="12" cy="16" r="1" />
    <path fill="currentColor" d="M12 7a1 1 0 0 0-1 1v5a1 1 0 0 0 2 0V8a1 1 0 0 0-1-1z" />
  </Icon>
));

AlertCircleIcon.displayName = 'AlertCircleIcon';
