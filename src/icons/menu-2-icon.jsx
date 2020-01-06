/** @jsx jsx **/
import { jsx } from '@emotion/core';
import { forwardRef } from 'react';

import { Icon } from '../icon';

export const Menu2Icon = forwardRef((svgProps, ref) => (
  <Icon {...svgProps} ref={ref}>
    <rect width="24" height="24" transform="rotate(180 12 12)" opacity="0" />
    <circle fill="currentColor" cx="4" cy="12" r="1" />
    <rect fill="currentColor" x="7" y="11" width="14" height="2" rx=".94" ry=".94" />
    <rect fill="currentColor" x="3" y="16" width="18" height="2" rx=".94" ry=".94" />
    <rect fill="currentColor" x="3" y="6" width="18" height="2" rx=".94" ry=".94" />
  </Icon>
));

Menu2Icon.displayName = 'Menu2Icon';
