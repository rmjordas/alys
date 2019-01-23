import React from 'react';
import PropTypes from 'prop-types';

import { chevronIconOptions } from './chevronIconOptions';
import { colors, COLOR_WHITE } from '@/constants';
import { iconDark } from '@utils/icon-utils';
import SvgIcon from '@/SvgIcon';

/** See <SvgIcon /> for more prop descriptions. */
export default function ChevronIcon({
  dark,
  direction,
  thick,
  color,
  ...svgProps
}) {
  const { viewBox, transform, d } = chevronIconOptions[direction];

  return (
    <SvgIcon viewBox={viewBox} {...svgProps}>
      <g id="chevron-icon" transform={transform.group}>
        <path
          id="chevron-icon-2"
          d={d}
          transform={transform.path}
          fill="none"
          stroke={iconDark(
            dark,
            COLOR_WHITE,
            color ? colors[color] : 'currentColor',
          )}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          strokeWidth={thick ? 2 : undefined}
        />
      </g>
    </SvgIcon>
  );
}

ChevronIcon.defaultProps = {
  dark: false,
  direction: 'up',
  thick: false,
};

ChevronIcon.propTypes = {
  /** Set to `true` to make icon viewable in dark backgrounds */
  dark: PropTypes.bool,

  /** Sets the direction */
  direction: PropTypes.oneOf(['up', 'down', 'left', 'right']),

  /** Set to `true` to make icon thicker */
  thick: PropTypes.bool,

  /** Main color of icon when background is light. */
  color: PropTypes.oneOf(['primary', 'dark']),
};
