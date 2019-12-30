/** @jsx jsx **/
import { jsx } from '@emotion/core';

import { Icon } from '../shared/icon';

export const ArrowCircleRightIcon = (svgProps) => {
  return (
    <Icon {...svgProps}>
      <rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0" />
      <path
        fill="currentColor"
        d="M17 12v-.09a.88.88 0 0 0-.06-.28.72.72 0 0 0-.11-.19 1 1 0 0 0-.09-.13l-2.86-3a1 1 0 0 0-1.45 1.38L13.66 11H8a1 1 0 0 0 0 2h5.59l-1.3 1.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l3-3a1 1 0 0 0 .21-.32A1 1 0 0 0 17 12z"
      />
      <path
        fill="currentColor"
        d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"
      />
    </Icon>
  );
};
