import React from 'react';
import PropTypes from 'prop-types';

import { arrowIconOptions } from './arrowIconOptions';
import { colors, COLOR_WHITE } from '@/constants';
import { iconDark } from '@utils/icon-utils';
import SvgIcon from '@/SvgIcon';

/** See <SvgIcon /> for more prop descriptions. */
export default function ArrowLeftIcon({ dark, direction, color, ...svgProps }) {
  const commonProps = {
    fill: 'none',
    stroke: iconDark(dark, COLOR_WHITE, color ? colors[color] : 'currentColor'),
    strokeLinecap: 'round',
    strokeMiterlimit: 10,
  };
  const { viewBox, transform, d } = arrowIconOptions[direction];

  return (
    <SvgIcon viewBox={viewBox} {...svgProps}>
      <g id="arrow-icon" transform="translate(0 0)">
        <line {...commonProps} id="line" x1="17" transform={transform.line} />
        <path {...commonProps} id="path" strokeLinejoin="round" d={d} />
      </g>
    </SvgIcon>
  );
}

ArrowLeftIcon.defaultProps = {
  dark: false,
  direction: 'left',
};

ArrowLeftIcon.propTypes = {
  /** Set to `true` to make icon viewable in dark backgrounds */
  dark: PropTypes.bool,

  /** Sets the direction */
  direction: PropTypes.oneOf(['left', 'right']),

  /** Main color of icon when background is light. */
  color: PropTypes.oneOf(['primary', 'dark']),
};
