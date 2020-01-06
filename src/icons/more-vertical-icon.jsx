/** @jsx jsx **/
import { jsx } from '@emotion/core';
import { forwardRef } from 'react';

import { Icon } from '../icon';

export const MoreVerticalIcon = forwardRef((svgProps, ref) => (
  <Icon {...svgProps} ref={ref}>
    <rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0" />
    <circle fill="currentColor" cx="12" cy="12" r="2" />
    <circle fill="currentColor" cx="12" cy="5" r="2" />
    <circle fill="currentColor" cx="12" cy="19" r="2" />
  </Icon>
));

MoreVerticalIcon.displayName = 'MoreVerticalIcon';
