/** @jsx jsx **/
import { jsx } from '@emotion/core';

import { Icon } from '../shared/icon';

export const BookOpenIcon = (svgProps) => {
  return (
    <Icon {...svgProps}>
      <rect width="24" height="24" transform="rotate(180 12 12)" opacity="0" />
      <path
        fill="currentColor"
        d="M20.62 4.22a1 1 0 0 0-.84-.2L12 5.77 4.22 4A1 1 0 0 0 3 5v12.2a1 1 0 0 0 .78 1l8 1.8h.44l8-1.8a1 1 0 0 0 .78-1V5a1 1 0 0 0-.38-.78zM5 6.25l6 1.35v10.15L5 16.4zM19 16.4l-6 1.35V7.6l6-1.35z"
      />
    </Icon>
  );
};
