/** @jsx jsx **/
import { jsx } from '@emotion/core';

import { Icon } from '../shared/icon';

export const MoreVerticalIcon = (svgProps) => {
  return (
    <Icon {...svgProps}>
      <rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0" />
      <circle fill="currentColor" cx="12" cy="12" r="2" />
      <circle fill="currentColor" cx="12" cy="5" r="2" />
      <circle fill="currentColor" cx="12" cy="19" r="2" />
    </Icon>
  );
};