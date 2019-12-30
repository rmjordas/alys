/** @jsx jsx **/
import { jsx } from '@emotion/core';

import { Icon } from '../shared/icon';

export const ArrowheadLeftIcon = (svgProps) => {
  return (
    <Icon {...svgProps}>
      <rect width="24" height="24" transform="rotate(90 12 12)" opacity="0" />
      <path
        fill="currentColor"
        d="M11.64 5.23a1 1 0 0 0-1.41.13l-5 6a1 1 0 0 0 0 1.27l4.83 6a1 1 0 0 0 .78.37 1 1 0 0 0 .78-1.63L7.29 12l4.48-5.37a1 1 0 0 0-.13-1.4z"
      />
      <path
        fill="currentColor"
        d="M14.29 12l4.48-5.37a1 1 0 0 0-1.54-1.28l-5 6a1 1 0 0 0 0 1.27l4.83 6a1 1 0 0 0 .78.37 1 1 0 0 0 .78-1.63z"
      />
    </Icon>
  );
};
