/** @jsx jsx **/
import { jsx } from '@emotion/core';

import { Icon } from '../shared/icon';

export const CornerDownLeftIcon = (svgProps) => {
  return (
    <Icon {...svgProps}>
      <rect
        x=".05"
        y=".05"
        width="24"
        height="24"
        transform="rotate(-89.76 12.05 12.05)"
        opacity="0"
      />
      <path
        fill="currentColor"
        d="M20 6a1 1 0 0 0-1-1 1 1 0 0 0-1 1v5a1 1 0 0 1-.29.71A1 1 0 0 1 17 12H8.08l2.69-3.39a1 1 0 0 0-1.52-1.17l-4 5a1 1 0 0 0 0 1.25l4 5a1 1 0 0 0 .78.37 1 1 0 0 0 .62-.22 1 1 0 0 0 .15-1.41l-2.66-3.36h8.92a3 3 0 0 0 3-3z"
      />
    </Icon>
  );
};