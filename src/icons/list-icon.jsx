/** @jsx jsx **/
import { jsx } from '@emotion/core';

import { Icon } from '../shared/icon';

export const ListIcon = (svgProps) => {
  return (
    <Icon {...svgProps}>
      <rect width="24" height="24" transform="rotate(180 12 12)" opacity="0" />
      <circle fill="currentColor" cx="4" cy="7" r="1" />
      <circle fill="currentColor" cx="4" cy="12" r="1" />
      <circle fill="currentColor" cx="4" cy="17" r="1" />
      <rect fill="currentColor" x="7" y="11" width="14" height="2" rx=".94" ry=".94" />
      <rect fill="currentColor" x="7" y="16" width="14" height="2" rx=".94" ry=".94" />
      <rect fill="currentColor" x="7" y="6" width="14" height="2" rx=".94" ry=".94" />
    </Icon>
  );
};
