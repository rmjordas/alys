/** @jsx jsx **/
import { jsx } from '@emotion/core';

import { Icon } from '../shared/icon';

export const DiagonalArrowLeftDownIcon = (svgProps) => {
  return (
    <Icon {...svgProps}>
      <rect width="24" height="24" opacity="0" />
      <path
        fill="currentColor"
        d="M17.71 6.29a1 1 0 0 0-1.42 0L8 14.59V9a1 1 0 0 0-2 0v8a1 1 0 0 0 1 1h8a1 1 0 0 0 0-2H9.41l8.3-8.29a1 1 0 0 0 0-1.42z"
      />
    </Icon>
  );
};
