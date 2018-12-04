import React from 'react';
import PropTypes from 'prop-types';

import { colors, COLOR_WHITE } from '@/constants';
import { iconDark } from '@utils/icon-utils';
import SvgIcon from '@/SvgIcon';

/** See <SvgIcon /> for more prop descriptions. */
export default function CameraFlipIcon({ dark, color, ...svgProps }) {
  const commonProps = {
    fill: 'none',
    stroke: iconDark(dark, COLOR_WHITE, colors[color]),
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeMiterlimit: 10,
  };

  return (
    <SvgIcon viewBox="0 0 20.752 16.104" {...svgProps}>
      <g id="camera-flip-icon" transform="translate(0 0)">
        <path
          {...commonProps}
          id="path"
          d="M18.974,2.824H15.14l-.465-1.51A1.116,1.116,0,0,0,13.629.5H7.123a1.116,1.116,0,0,0-1.046.813L5.5,2.824H1.778A1.289,1.289,0,0,0,.5,4.1V14.326A1.289,1.289,0,0,0,1.778,15.6h17.2a1.289,1.289,0,0,0,1.278-1.278V4.1A1.289,1.289,0,0,0,18.974,2.824Z"
          transform="translate(0 0)"
        />
        <path
          {...commonProps}
          id="path-2"
          data-name="path"
          d="M14.464,7.3l-1.743,3.021L9.7,8.694"
          transform="translate(1.489 1.101)"
        />
        <path
          {...commonProps}
          id="path-3"
          data-name="path"
          d="M5.1,9.667A4.041,4.041,0,0,1,9.167,5.6a3.944,3.944,0,0,1,3.95,4.067"
          transform="translate(0.745 0.826)"
        />
      </g>
    </SvgIcon>
  );
}

CameraFlipIcon.defaultProps = {
  dark: false,
  color: 'dark',
};

CameraFlipIcon.propTypes = {
  /** Set to `true` to make icon viewable in dark backgrounds */
  dark: PropTypes.bool,

  /** Main color of icon when background is light. */
  color: PropTypes.oneOf(['primary', 'dark']),
};
