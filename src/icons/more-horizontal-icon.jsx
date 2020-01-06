/** @jsx jsx **/
import { jsx } from '@emotion/core';
import { forwardRef } from 'react';

import { Icon } from '../icon';

export const MoreHorizontalIcon = forwardRef((svgProps, ref) => (
  <Icon {...svgProps} ref={ref}>
    <rect width="24" height="24" opacity="0" />
    <circle fill="currentColor" cx="12" cy="12" r="2" />
    <circle fill="currentColor" cx="19" cy="12" r="2" />
    <circle fill="currentColor" cx="5" cy="12" r="2" />
  </Icon>
));

MoreHorizontalIcon.displayName = 'MoreHorizontalIcon';
