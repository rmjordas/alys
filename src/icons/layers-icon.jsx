/** @jsx jsx **/
import { jsx } from '@emotion/core';
import { forwardRef } from 'react';

import { Icon } from '../icon';

export const LayersIcon = forwardRef((svgProps, ref) => (
  <Icon {...svgProps} ref={ref}>
    <rect width="24" height="24" transform="rotate(180 12 12)" opacity="0" />
    <path
      fill="currentColor"
      d="M21 11.35a1 1 0 0 0-.61-.86l-2.15-.92 2.26-1.3a1 1 0 0 0 .5-.92 1 1 0 0 0-.61-.86l-8-3.41a1 1 0 0 0-.78 0l-8 3.41a1 1 0 0 0-.61.86 1 1 0 0 0 .5.92l2.26 1.3-2.15.92a1 1 0 0 0-.61.86 1 1 0 0 0 .5.92l2.26 1.3-2.15.92a1 1 0 0 0-.61.86 1 1 0 0 0 .5.92l8 4.6a1 1 0 0 0 1 0l8-4.6a1 1 0 0 0 .5-.92 1 1 0 0 0-.61-.86l-2.15-.92 2.26-1.3a1 1 0 0 0 .5-.92zm-9-6.26l5.76 2.45L12 10.85 6.24 7.54zm-.5 7.78a1 1 0 0 0 1 0l3.57-2 1.69.72L12 14.85l-5.76-3.31 1.69-.72zm6.26 2.67L12 18.85l-5.76-3.31 1.69-.72 3.57 2.05a1 1 0 0 0 1 0l3.57-2.05z"
    />
  </Icon>
));

LayersIcon.displayName = 'LayersIcon';
