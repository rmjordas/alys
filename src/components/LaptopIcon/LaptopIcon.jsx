import React from 'react';
import PropTypes from 'prop-types';

import { colors, COLOR_WHITE } from '@/constants';
import { iconDark } from '@utils/icon-utils';
import SvgIcon from '@/SvgIcon';

/** See <SvgIcon /> for more prop descriptions. */
export default function LaptopIcon({ dark, color, ...svgProps }) {
  const commonProps = {
    fill: 'none',
    stroke: iconDark(dark, COLOR_WHITE, colors[color]),
    strokeMiterlimit: 10,
  };

  return (
    <SvgIcon viewBox="0 0 23.217 18" {...svgProps}>
      <g id="laptop-icon" transform="translate(-0.041 0)">
        <path
          {...commonProps}
          id="path"
          d="M21.1,12.5H2.1V1.4A.9.9,0,0,1,3,.5H20.2a.9.9,0,0,1,.9.9Z"
        />
        <path
          {...commonProps}
          id="path-2"
          data-name="path"
          d="M21.1,12.5H2.1L.6,16.3a.881.881,0,0,0,.8,1.2H21.9a.881.881,0,0,0,.8-1.2Z"
        />
        <line
          {...commonProps}
          id="line"
          strokeLinecap="round"
          x2="3"
          transform="translate(10.1 15.5)"
        />
      </g>
    </SvgIcon>
  );
}

LaptopIcon.defaultProps = {
  dark: false,
  color: 'dark',
};

LaptopIcon.propTypes = {
  /** Set to `true` to make icon viewable in dark backgrounds */
  dark: PropTypes.bool,

  /** Main color of icon when background is light. */
  color: PropTypes.oneOf(['primary', 'dark']),
};
