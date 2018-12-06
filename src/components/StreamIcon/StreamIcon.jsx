import React from 'react';
import PropTypes from 'prop-types';

import { colors, COLOR_WHITE } from '@/constants';
import { iconDark } from '@utils/icon-utils';
import SvgIcon from '@/SvgIcon';

/** See <SvgIcon /> for more prop descriptions. */
export default function StreamIcon({ dark, color, ...svgProps }) {
  const commonProps = {
    fill: 'none',
    stroke: iconDark(dark, COLOR_WHITE, color ? colors[color] : 'currentColor'),
    strokeMiterlimit: 10,
  };

  return (
    <SvgIcon viewBox="0 0 23 16.575" {...svgProps}>
      <g id="stream-icon" transform="translate(0 -0.025)">
        <circle
          {...commonProps}
          id="ellipse"
          cx="0.5"
          cy="0.5"
          r="0.5"
          transform="translate(11 15.1)"
        />
        <path
          {...commonProps}
          id="path"
          strokeLinecap="round"
          d="M6.9,12.4a6.58,6.58,0,0,1,9.2,0"
        />
        <path
          {...commonProps}
          id="path-2"
          data-name="path"
          strokeLinecap="round"
          d="M4.2,8.6a10.322,10.322,0,0,1,14.7,0"
        />
        <path
          {...commonProps}
          id="path-3"
          data-name="path"
          strokeLinecap="round"
          d="M.5,5.1a15.512,15.512,0,0,1,22,0"
        />
      </g>
    </SvgIcon>
  );
}

StreamIcon.defaultProps = {
  dark: false,
};

StreamIcon.propTypes = {
  /** Set to `true` to make icon viewable in dark backgrounds */
  dark: PropTypes.bool,

  /** Main color of icon when background is light. */
  color: PropTypes.oneOf(['primary', 'dark']),
};
