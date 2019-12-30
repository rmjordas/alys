/** @jsx jsx **/
import { jsx } from '@emotion/core';

import { Icon } from '../icon';

export const QuestionMarkIcon = (svgProps) => {
  return (
    <Icon {...svgProps}>
      <rect width="24" height="24" transform="rotate(180 12 12)" opacity="0" />
      <path
        fill="currentColor"
        d="M17 9A5 5 0 0 0 7 9a1 1 0 0 0 2 0 3 3 0 1 1 3 3 1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.1A5 5 0 0 0 17 9z"
      />
      <circle fill="currentColor" cx="12" cy="19" r="1" />
    </Icon>
  );
};
