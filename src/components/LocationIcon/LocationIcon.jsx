import React from 'react';
import PropTypes from 'prop-types';

import { colors, COLOR_WHITE } from '@/constants';
import { iconDark } from '@utils/icon-utils';
import SvgIcon from '@/SvgIcon';

/** See <SvgIcon /> for more prop descriptions. */
export default function LocationIcon({ dark, color, ...svgProps }) {
  const commonProps = {
    fill: 'none',
    stroke: iconDark(dark, COLOR_WHITE, color ? colors[color] : 'currentColor'),
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeMiterlimit: 10,
  };

  return (
    <SvgIcon viewBox="0 0 17.015 20.071" {...svgProps}>
      <g id="location-icon" transform="translate(0.015 -0.029)">
        <path
          {...commonProps}
          id="path"
          d="M13.8,14.5,9.2,19.3a.965.965,0,0,1-1.4,0L3.1,14.4l-.8-.9A7.78,7.78,0,0,1,.6,7.3,8,8,0,0,1,16.5,8.5a7.907,7.907,0,0,1-2.1,5.4Z"
        />
        <circle
          {...commonProps}
          id="ellipse"
          cx="3"
          cy="3"
          r="3"
          transform="translate(5.5 5.5)"
        />
      </g>
    </SvgIcon>
  );
}

LocationIcon.defaultProps = {
  dark: false,
};

LocationIcon.propTypes = {
  /** Set to `true` to make icon viewable in dark backgrounds */
  dark: PropTypes.bool,

  /** Main color of icon when background is light. */
  color: PropTypes.oneOf(['primary', 'dark']),
};
