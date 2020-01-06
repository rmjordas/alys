/** @jsx jsx **/
import { jsx } from '@emotion/core';
import { forwardRef } from 'react';

import { Icon } from '../icon';

export const CreditCardIcon = forwardRef((svgProps, ref) => (
  <Icon {...svgProps} ref={ref}>
    <rect width="24" height="24" opacity="0" />
    <path
      fill="currentColor"
      d="M19 5H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3zM4 8a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v1H4zm16 8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-5h16z"
    />
    <path fill="currentColor" d="M7 15h4a1 1 0 0 0 0-2H7a1 1 0 0 0 0 2z" />
    <path fill="currentColor" d="M15 15h2a1 1 0 0 0 0-2h-2a1 1 0 0 0 0 2z" />
  </Icon>
));

CreditCardIcon.displayName = 'CreditCardIcon';
