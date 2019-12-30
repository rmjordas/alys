/** @jsx jsx **/
import { jsx } from '@emotion/core';

import { Icon } from '../shared/icon';

export const ArrowUpIcon = (svgProps) => {
  return (
    <Icon {...svgProps}>
      <rect width="24" height="24" transform="rotate(90 12 12)" opacity="0" />
      <path
        fill="currentColor"
        d="M16.21 16H7.79a1.76 1.76 0 0 1-1.59-1 2.1 2.1 0 0 1 .26-2.21l4.21-5.1a1.76 1.76 0 0 1 2.66 0l4.21 5.1A2.1 2.1 0 0 1 17.8 15a1.76 1.76 0 0 1-1.59 1zM8 14h7.9L12 9.18z"
      />
    </Icon>
  );
};
