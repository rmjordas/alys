/** @jsx jsx **/
import { jsx } from '@emotion/core';

import { Icon } from '../shared/icon';

export const BatteryIcon = (svgProps) => {
  return (
    <Icon {...svgProps}>
      <rect width="24" height="24" opacity="0" />
      <path
        fill="currentColor"
        d="M15.83 6H4.17A2.31 2.31 0 0 0 2 8.43v7.14A2.31 2.31 0 0 0 4.17 18h11.66A2.31 2.31 0 0 0 18 15.57V8.43A2.31 2.31 0 0 0 15.83 6zm.17 9.57a.52.52 0 0 1-.17.43H4.18a.5.5 0 0 1-.18-.43V8.43A.53.53 0 0 1 4.17 8h11.65a.5.5 0 0 1 .18.43z"
      />
      <path fill="currentColor" d="M21 9a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0v-4a1 1 0 0 0-1-1z" />
    </Icon>
  );
};
