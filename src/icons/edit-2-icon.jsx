/** @jsx jsx **/
import { jsx } from '@emotion/core';
import { forwardRef } from 'react';

import { Icon } from '../icon';

export const Edit2Icon = forwardRef((svgProps, ref) => (
  <Icon {...svgProps} ref={ref}>
    <rect width="24" height="24" opacity="0" />
    <path fill="currentColor" d="M19 20H5a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2z" />
    <path
      fill="currentColor"
      d="M5 18h.09l4.17-.38a2 2 0 0 0 1.21-.57l9-9a1.92 1.92 0 0 0-.07-2.71L16.66 2.6A2 2 0 0 0 14 2.53l-9 9a2 2 0 0 0-.57 1.21L4 16.91a1 1 0 0 0 .29.8A1 1 0 0 0 5 18zM15.27 4L18 6.73l-2 1.95L13.32 6zm-8.9 8.91L12 7.32l2.7 2.7-5.6 5.6-3 .28z"
    />
  </Icon>
));

Edit2Icon.displayName = 'Edit2Icon';
