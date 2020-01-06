/** @jsx jsx **/
import { jsx } from '@emotion/core';
import { forwardRef } from 'react';

import { Icon } from '../icon';

export const MenuIcon = forwardRef((svgProps, ref) => (
  <Icon {...svgProps} ref={ref}>
    <rect width="24" height="24" transform="rotate(180 12 12)" opacity="0" />
    <rect fill="currentColor" x="3" y="11" width="18" height="2" rx=".95" ry=".95" />
    <rect fill="currentColor" x="3" y="16" width="18" height="2" rx=".95" ry=".95" />
    <rect fill="currentColor" x="3" y="6" width="18" height="2" rx=".95" ry=".95" />
  </Icon>
));

MenuIcon.displayName = 'MenuIcon';
